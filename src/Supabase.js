import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://jaddcujleucyshotdynp.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImphZGRjdWpsZXVjeXNob3RkeW5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjAxMTYwODUsImV4cCI6MTk3NTY5MjA4NX0.zqCkCF7i3FqS-HTrnbe-3xvM9e2nJ-pFylF_kQOd8vI"
);
