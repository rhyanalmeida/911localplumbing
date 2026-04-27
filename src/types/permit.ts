export const COMPANY_VALUES = [
  "Revelare",
  "Luxury Makeover",
  "Yankee",
  "Long Home",
  "911 Local Plumbing",
  "Capital",
] as const;
export type Company = (typeof COMPANY_VALUES)[number];

export const STATUS_VALUES = [
  "Open",
  "In Progress",
  "Issued",
  "No Permit",
  "Closed",
  "Kurt Needed",
] as const;
export type Status = (typeof STATUS_VALUES)[number];

export const PAYMENT_TYPE_VALUES = [
  "Cash",
  "Check",
  "Credit Card",
  "ACH",
  "Other",
] as const;
export type PaymentType = (typeof PAYMENT_TYPE_VALUES)[number];

export interface Permit {
  id: string;
  created_at: string;
  customer_name: string;
  customer_telephone: string | null;
  job_number: string;
  company: Company | null;
  received_date: string | null;
  date_of_install: string | null;
  address: string;
  permit_needed: string | null;
  permit_submitted: string | null;
  permit_number: string | null;
  permit_cost: number | null;
  payment_type: PaymentType | null;
  status: Status;
  rough: string | null;
  final: string | null;
  notes: string | null;
  plumbing_inspector: string | null;
  project_start_date: string | null;
  project_finish_date: string | null;
  inspection_hours_townhall: string | null;
}

export type NewPermit = Omit<Permit, "id" | "created_at">;
