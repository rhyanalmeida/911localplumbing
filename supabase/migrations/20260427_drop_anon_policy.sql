-- Tighten RLS: remove the permissive anon policy so only authenticated users
-- can read/write permits. The "permits_all_authenticated" policy stays.
drop policy if exists "permits_all_anon" on public.permits;
