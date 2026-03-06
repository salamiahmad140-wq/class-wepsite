import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://wvygiylllzoyovhoviya.supabase.co'
const supabaseAnonKey = 'sb_publishable_wnuFR5mOyyDDf-U23Bm9tw_ge5hXObn' 

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
