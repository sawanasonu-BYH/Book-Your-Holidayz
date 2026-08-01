import { supabase } from "@/lib/supabase";
import { TravelPackage } from "@/types/package";

export async function getPackages() {
  const { data, error } = await supabase
    .from("packages")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
}

export async function getPackage(id: string) {
  const { data, error } = await supabase
    .from("packages")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;
  return data;
}

export async function createPackage(pkg: TravelPackage) {
  const { data, error } = await supabase
    .from("packages")
    .insert([pkg])
    .select();

  if (error) throw error;
  return data;
}

export async function updatePackage(
  id: string,
  pkg: Partial<TravelPackage>
) {
  const { data, error } = await supabase
    .from("packages")
    .update(pkg)
    .eq("id", id)
    .select();

  if (error) throw error;
  return data;
}

export async function deletePackage(id: string) {
  const { error } = await supabase
    .from("packages")
    .delete()
    .eq("id", id);

  if (error) throw error;
}