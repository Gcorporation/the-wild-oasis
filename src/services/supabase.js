import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ctzethreqomuzbfdckip.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0emV0aHJlcW9tdXpiZmRja2lwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwMTA2NTcsImV4cCI6MjA1NjU4NjY1N30._qgs1Lg1HbB4bDmv3GjowJRSlQHnm_0EvBkgAFIGh2Y";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
