import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fdimzwetlojbllhmlslt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkaW16d2V0bG9qYmxsaG1sc2x0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA3MTQyMzcsImV4cCI6MjAwNjI5MDIzN30.vu1TkL12fRUIxxIbxG9PpAZr1Lsy_6ol3rF6YUbhK3A";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
