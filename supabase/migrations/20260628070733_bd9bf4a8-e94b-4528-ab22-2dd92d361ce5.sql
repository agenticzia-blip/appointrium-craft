
CREATE OR REPLACE FUNCTION public.generate_student_id() RETURNS TEXT
LANGUAGE plpgsql
SET search_path = public
AS $$
DECLARE
  new_id TEXT;
BEGIN
  new_id := 'APX-' || to_char(now(), 'YY') || '-' || upper(substring(md5(random()::text || clock_timestamp()::text) from 1 for 6));
  RETURN new_id;
END;
$$;
