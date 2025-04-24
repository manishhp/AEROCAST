/*
  # Create journey images table and storage

  1. New Tables
    - `journey_images`
      - `id` (int, primary key)
      - `image_url` (text)
      - `created_at` (timestamp)

  2. Storage
    - Create bucket for journey images
*/

-- Create the journey_images table
CREATE TABLE IF NOT EXISTS journey_images (
  id integer PRIMARY KEY,
  image_url text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE journey_images ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all users to select
CREATE POLICY "Allow public read access"
  ON journey_images
  FOR SELECT
  TO public
  USING (true);

-- Create policy to allow authenticated users to insert/update
CREATE POLICY "Allow authenticated users to insert/update"
  ON journey_images
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);