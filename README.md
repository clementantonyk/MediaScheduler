# SocialSphere - Social Media Content Scheduler

A full-stack social media content scheduling platform that helps users manage and schedule their social media posts across multiple platforms.

## Features

- 🔐 User Authentication with Supabase
- 🔗 Social Media Account Integration
- 📅 Interactive Post Scheduler
- 🎨 Beautiful Bootstrap UI
- 📱 Responsive Design
- 🔄 Real-time Updates

## Tech Stack

- **Frontend**: React.js with TypeScript, Bootstrap 5
- **Backend**: Spring Boot
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth

## Project Structure

```
/socialsphere
├── /frontend          # React frontend application
└── /backend          # Spring Boot backend application
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Java 17 or higher
- Maven
- Supabase account

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Build the project:
   ```bash
   ./mvnw clean install
   ```

3. Run the application:
   ```bash
   ./mvnw spring-boot:run
   ```

## Environment Variables

Create a `.env` file in the frontend directory with the following variables:

```
REACT_APP_SUPABASE_URL=your_supabase_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 