type Days = 'Mondays' | 'Tuesdays' | 'Wednesdays' | 'Thursdays' | 'Fridays' | 'Saturdays' | 'Sundays';
type Frequency = 'Weekly' | 'Biweekly' | 'When Available';

type View = {
  frequency: Frequency;
  days: Days;
  title: string;
  description: string;
  successText: string;
}

type Meta = {
  newsletter_id?: string;
  event_definition_key?: string;
  de_name?: string;
}

type OnClick = (email: string, meta: Meta) => void;

export type EmailCaptureProps = {
  view: View;
  meta: Meta;
  onClick: OnClick;
  validSubmission: boolean; // Assumed for API response if valid
}