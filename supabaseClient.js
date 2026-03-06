import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// الرابط الخاص بمشروعك كما ظهر في الصور
const supabaseUrl = 'https://wvygiylllzoyovhoviya.supabase.co'

// ضعي هنا الـ Publishable key (anon) الذي يبدأ بـ ey...
const supabaseAnonKey = 'sb_publishable_wnuFR5mOyyDDf-U23Bm9tw_ge5hXObn'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
