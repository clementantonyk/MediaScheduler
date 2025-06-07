import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jjjvlkornhdtgdxxhozn.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqanZsa29ybmhkdGdkeHhob3puIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkyODE5MDksImV4cCI6MjA2NDg1NzkwOX0.wBO88QLb_tSI3lOGXyx-DlwM_8vaGkGjNjQmKZ1rMfM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Authentication helper functions
export const signUp = async (email: string, password: string, userData: any) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: userData,
    },
  });
  return { data, error };
};

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};

export const getCurrentUser = async () => {
  const { data: { user }, error } = await supabase.auth.getUser();
  return { user, error };
};

// Database helper functions
export const getPosts = async () => {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .order('scheduled_time', { ascending: true });
  return { data, error };
};

export const createPost = async (post: any) => {
  const { data, error } = await supabase
    .from('posts')
    .insert([post])
    .select();
  return { data, error };
};

export const updatePost = async (id: string, updates: any) => {
  const { data, error } = await supabase
    .from('posts')
    .update(updates)
    .eq('id', id)
    .select();
  return { data, error };
};

export const deletePost = async (id: string) => {
  const { error } = await supabase
    .from('posts')
    .delete()
    .eq('id', id);
  return { error };
};

// Social media account helper functions
export const getConnectedAccounts = async () => {
  const { data, error } = await supabase
    .from('social_accounts')
    .select('*');
  return { data, error };
};

export const connectSocialAccount = async (accountData: any) => {
  const { data, error } = await supabase
    .from('social_accounts')
    .insert([accountData])
    .select();
  return { data, error };
};

export const disconnectSocialAccount = async (id: string) => {
  const { error } = await supabase
    .from('social_accounts')
    .delete()
    .eq('id', id);
  return { error };
}; 