create extension if not exists "uuid-ossp";

create table if not exists public.permits (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamptz not null default now(),
  customer_name text not null,
  customer_telephone text,
  job_number text not null,
  company text,
  received_date date,
  date_of_install date,
  address text not null,
  permit_needed text,
  permit_submitted date,
  permit_number text,
  permit_cost numeric(10, 2),
  payment_type text,
  status text not null default 'Open',
  rough date,
  final date,
  notes text,
  plumbing_inspector text,
  project_start_date date,
  project_finish_date date,
  inspection_hours_townhall text
);

alter table public.permits enable row level security;

drop policy if exists "permits_all_anon" on public.permits;
create policy "permits_all_anon" on public.permits
  for all to anon
  using (true) with check (true);

drop policy if exists "permits_all_authenticated" on public.permits;
create policy "permits_all_authenticated" on public.permits
  for all to authenticated
  using (true) with check (true);

create index if not exists permits_company_idx on public.permits (company);
create index if not exists permits_status_idx on public.permits (status);
create index if not exists permits_created_at_idx on public.permits (created_at desc);
