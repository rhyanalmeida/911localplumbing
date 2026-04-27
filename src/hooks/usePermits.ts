import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../lib/supabase";
import type { Company, NewPermit, Permit } from "../types/permit";

export interface PermitsFilter {
  company?: Company | "All";
}

const PERMITS_KEY = "permits";

export function usePermits(filter?: PermitsFilter) {
  return useQuery({
    queryKey: [PERMITS_KEY, filter ?? null],
    queryFn: async (): Promise<Permit[]> => {
      let q = supabase
        .from("permits")
        .select("*")
        .order("created_at", { ascending: false });
      if (filter?.company && filter.company !== "All") {
        q = q.eq("company", filter.company);
      }
      const { data, error } = await q;
      if (error) throw error;
      return (data ?? []) as Permit[];
    },
  });
}

export function useCreatePermit() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input: NewPermit): Promise<Permit> => {
      const { data, error } = await supabase
        .from("permits")
        .insert(input)
        .select()
        .single();
      if (error) throw error;
      return data as Permit;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: [PERMITS_KEY] }),
  });
}

export function useUpdatePermit() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      id,
      patch,
    }: {
      id: string;
      patch: Partial<NewPermit>;
    }): Promise<Permit> => {
      const { data, error } = await supabase
        .from("permits")
        .update(patch)
        .eq("id", id)
        .select()
        .single();
      if (error) throw error;
      return data as Permit;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: [PERMITS_KEY] }),
  });
}

export function useDeletePermit() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: string): Promise<void> => {
      const { error } = await supabase.from("permits").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: [PERMITS_KEY] }),
  });
}
