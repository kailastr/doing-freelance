import { createClient } from '@supabase/supabase-js'
const supabaseUrl = "https://dvovlqpbnvsuwwsjhaps.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2b3ZscXBibnZzdXd3c2poYXBzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEwODI0NDQsImV4cCI6MjAyNjY1ODQ0NH0.T9wSedPsPcKa2DU-PzfvmlumPPaWDWz7uN6R_EsnJ4k"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;