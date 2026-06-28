
GRANT INSERT ON public.student_applications TO anon;
GRANT INSERT ON public.student_applications TO authenticated;
GRANT ALL ON public.student_applications TO service_role;

ALTER TABLE public.student_applications
  ALTER COLUMN education DROP NOT NULL,
  ALTER COLUMN current_city DROP NOT NULL,
  ALTER COLUMN background_details DROP NOT NULL,
  ALTER COLUMN past_skills DROP NOT NULL,
  ALTER COLUMN current_monthly_income DROP NOT NULL,
  ALTER COLUMN goals DROP NOT NULL,
  ALTER COLUMN income_goal DROP NOT NULL,
  ALTER COLUMN full_name DROP NOT NULL,
  ALTER COLUMN phone_number DROP NOT NULL,
  ALTER COLUMN email DROP NOT NULL;
