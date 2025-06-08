import { createClient } from '@supabase/supabase-js';

// Use environment variables if available, otherwise use hardcoded values
// Note: In production, you should ALWAYS use environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://toiumenwhyomwceyzyrl.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvaXVtZW53aHlvbXdjZXl6eXJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5NTIzMzIsImV4cCI6MjA2NDUyODMzMn0.HZKA7aRJKq_Nyh2-tWgXU0thIpylfKdtbJQOn8uKUyc';

// Log information about the environment
if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  console.warn('Using hardcoded Supabase credentials. For production, use environment variables.');
}

// Create the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
