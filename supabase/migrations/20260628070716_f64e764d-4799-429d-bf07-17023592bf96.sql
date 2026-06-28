
CREATE OR REPLACE FUNCTION public.generate_student_id() RETURNS TEXT AS $$
DECLARE
  new_id TEXT;
BEGIN
  new_id := 'APX-' || to_char(now(), 'YY') || '-' || upper(substring(md5(random()::text || clock_timestamp()::text) from 1 for 6));
  RETURN new_id;
END;
$$ LANGUAGE plpgsql;

CREATE TABLE public.student_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id TEXT NOT NULL UNIQUE DEFAULT public.generate_student_id(),
  full_name TEXT NOT NULL,
  phone_number TEXT NOT NULL,
  email TEXT NOT NULL,
  education TEXT NOT NULL,
  current_city TEXT NOT NULL,
  background_details TEXT NOT NULL,
  past_skills TEXT NOT NULL,
  current_monthly_income TEXT NOT NULL,
  goals TEXT NOT NULL,
  income_goal TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.student_applications TO anon, authenticated;
GRANT ALL ON public.student_applications TO service_role;

ALTER TABLE public.student_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an application"
ON public.student_applications
FOR INSERT
TO anon, authenticated
WITH CHECK (true);
