import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zimztyunsyfrvffmiagn.supabase.co";
const supabaseKey = "sb_publishable_3LXc7j_MR-GlghEnMh29xQ_yCINt5b-";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);