// Stub — unit 6 finalizes (TanStack Query hooks for CRUD).
import type { Company, NewPermit, Permit } from "../types/permit";

export interface PermitsFilter {
  company?: Company | "All";
}

export function usePermits(_filter?: PermitsFilter): {
  data: Permit[] | undefined;
  isLoading: boolean;
} {
  return { data: undefined, isLoading: false };
}

export function useCreatePermit(): {
  mutateAsync: (input: NewPermit) => Promise<Permit | null>;
  isPending: boolean;
} {
  return {
    mutateAsync: async () => null,
    isPending: false,
  };
}
