
-- Make background_details optional
ALTER TABLE public.student_applications ALTER COLUMN background_details DROP NOT NULL;

-- RPC to submit an application and return generated student_id (includes first name)
CREATE OR REPLACE FUNCTION public.submit_student_application(
  p_full_name text,
  p_phone_number text,
  p_email text,
  p_education text,
  p_current_city text,
  p_past_skills text,
  p_current_monthly_income text,
  p_goals text,
  p_income_goal text
)
RETURNS text
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_first_slug text;
  v_student_id text;
BEGIN
  v_first_slug := upper(regexp_replace(split_part(trim(p_full_name), ' ', 1), '[^A-Za-z0-9]', '', 'g'));
  IF v_first_slug IS NULL OR length(v_first_slug) = 0 THEN
    v_first_slug := 'STU';
  END IF;
  v_first_slug := substring(v_first_slug from 1 for 12);

  v_student_id := 'APX-' || v_first_slug || '-' || to_char(now(), 'YY') || '-' ||
                  upper(substring(md5(random()::text || clock_timestamp()::text) from 1 for 6));

  INSERT INTO public.student_applications (
    student_id, full_name, phone_number, email, education, current_city,
    past_skills, current_monthly_income, goals, income_goal
  ) VALUES (
    v_student_id, p_full_name, p_phone_number, p_email, p_education, p_current_city,
    p_past_skills, p_current_monthly_income, p_goals, p_income_goal
  );

  RETURN v_student_id;
END;
$$;

GRANT EXECUTE ON FUNCTION public.submit_student_application(text,text,text,text,text,text,text,text,text) TO anon, authenticated;
