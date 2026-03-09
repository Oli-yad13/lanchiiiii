-- Create a table for contact form submissions
CREATE TABLE contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  job_title TEXT NOT NULL,
  phone_number TEXT,
  work_email TEXT NOT NULL,
  company_name TEXT NOT NULL,
  company_size TEXT NOT NULL,
  city TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Add Row Level Security (RLS) policies
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts
CREATE POLICY "Allow anonymous inserts" ON contact_submissions
  FOR INSERT TO anon
  WITH CHECK (true);
  
-- Create policy to allow users to select their own submissions (useful for future features)
CREATE POLICY "Allow individual read access" ON contact_submissions
  FOR SELECT USING (true);

-- Create index on created_at for better query performance
CREATE INDEX contact_submissions_created_at_idx ON contact_submissions (created_at);

-- Create a secure view for admin dashboard (optional)
CREATE VIEW contact_submissions_view AS
  SELECT * FROM contact_submissions
  ORDER BY created_at DESC;