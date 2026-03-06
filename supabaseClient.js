import { createClient } from '@supabase/supabase-client'

// استبدلي هذه القيم من إعدادات Supabase التي وجدتها
const supabaseUrl = 'https://wvygiylllzoyovhoviya.supabase.co' 
const supabaseAnonKey = 'sb_publishable_wnuFR5mOyyDDf-U23Bm9tw_ge5hXObn'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)