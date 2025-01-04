import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://vnjpojzoeuzayldaoemc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZuanBvanpvZXV6YXlsZGFvZW1jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU5OTM3MTgsImV4cCI6MjA1MTU2OTcxOH0.o6322o8K7po_YD7oD7oeGhAKCbFNg0h98NjuMYZLb9o"
);
