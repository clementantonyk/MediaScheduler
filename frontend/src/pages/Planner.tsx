import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

const locales = {
  'en-US': require('date-fns/locale/en-US'),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

interface Event {
  id: number;
  title: string;
  start: Date;
  end: Date;
  platform: string;
  content: string;
}

const Planner: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      title: 'Product Launch',
      start: new Date(2024, 2, 20, 10, 0),
      end: new Date(2024, 2, 20, 11, 0),
      platform: 'Facebook',
      content: 'Exciting news about our latest product launch!',
    },
    {
      id: 2,
      title: 'Webinar',
      start: new Date(2024, 2, 21, 14, 0),
      end: new Date(2024, 2, 21, 15, 0),
      platform: 'Twitter',
      content: 'Join us for our upcoming webinar on social media marketing.',
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [newEvent, setNewEvent] = useState<Partial<Event>>({
    title: '',
    platform: 'Facebook',
    content: '',
  });

  const handleSelectSlot = ({ start, end }: { start: Date; end: Date }) => {
    setSelectedEvent(null);
    setNewEvent({
      title: '',
      platform: 'Facebook',
      content: '',
      start,
      end,
    });
    setShowModal(true);
  };

  const handleSelectEvent = (event: Event) => {
    setSelectedEvent(event);
    setNewEvent(event);
    setShowModal(true);
  };

  const handleSaveEvent = () => {
    if (selectedEvent) {
      // Update existing event
      setEvents(
        events.map((event) =>
          event.id === selectedEvent.id ? { ...event, ...newEvent } : event
        )
      );
    } else {
      // Create new event
      const event: Event = {
        id: events.length + 1,
        title: newEvent.title || 'Untitled Event',
        start: newEvent.start || new Date(),
        end: newEvent.end || new Date(),
        platform: newEvent.platform || 'Facebook',
        content: newEvent.content || '',
      };
      setEvents([...events, event]);
    }
    setShowModal(false);
  };

  const handleDeleteEvent = () => {
    if (selectedEvent) {
      setEvents(events.filter((event) => event.id !== selectedEvent.id));
      setShowModal(false);
    }
  };

  return (
    <Container fluid className="py-4">
      <Row className="mb-4">
        <Col>
          <h2>Content Planner</h2>
        </Col>
        <Col xs="auto">
          <Button
            variant="primary"
            className="d-flex align-items-center"
            onClick={() => {
              setSelectedEvent(null);
              setNewEvent({
                title: '',
                platform: 'Facebook',
                content: '',
                start: new Date(),
                end: new Date(),
              });
              setShowModal(true);
            }}
          >
            <FontAwesomeIcon icon={faPlus} className="me-2" />
            New Post
          </Button>
        </Col>
      </Row>

      <Card>
        <Card.Body>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 'calc(100vh - 250px)' }}
            onSelectSlot={handleSelectSlot}
            onSelectEvent={handleSelectEvent}
            selectable
            views={['month', 'week', 'day']}
          />
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedEvent ? 'Edit Post' : 'Schedule New Post'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={newEvent.title}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, title: e.target.value })
                }
                placeholder="Enter post title"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Platform</Form.Label>
              <div className="d-flex gap-2">
                <Button
                  variant={newEvent.platform === 'Facebook' ? 'primary' : 'outline-primary'}
                  onClick={() => setNewEvent({ ...newEvent, platform: 'Facebook' })}
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </Button>
                <Button
                  variant={newEvent.platform === 'Twitter' ? 'info' : 'outline-info'}
                  onClick={() => setNewEvent({ ...newEvent, platform: 'Twitter' })}
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </Button>
                <Button
                  variant={newEvent.platform === 'Instagram' ? 'danger' : 'outline-danger'}
                  onClick={() => setNewEvent({ ...newEvent, platform: 'Instagram' })}
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </Button>
                <Button
                  variant={newEvent.platform === 'LinkedIn' ? 'primary' : 'outline-primary'}
                  onClick={() => setNewEvent({ ...newEvent, platform: 'LinkedIn' })}
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </Button>
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value={newEvent.content}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, content: e.target.value })
                }
                placeholder="Enter post content"
              />
            </Form.Group>

            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Start Time</Form.Label>
                  <Form.Control
                    type="datetime-local"
                    value={format(newEvent.start || new Date(), "yyyy-MM-dd'T'HH:mm")}
                    onChange={(e) =>
                      setNewEvent({
                        ...newEvent,
                        start: new Date(e.target.value),
                      })
                    }
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>End Time</Form.Label>
                  <Form.Control
                    type="datetime-local"
                    value={format(newEvent.end || new Date(), "yyyy-MM-dd'T'HH:mm")}
                    onChange={(e) =>
                      setNewEvent({
                        ...newEvent,
                        end: new Date(e.target.value),
                      })
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {selectedEvent && (
            <Button variant="danger" onClick={handleDeleteEvent}>
              Delete
            </Button>
          )}
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveEvent}>
            {selectedEvent ? 'Update' : 'Schedule'}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Planner; 