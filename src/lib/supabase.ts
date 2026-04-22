import { createClient } from '@supabase/supabase-js';
import { SupabaseConfig } from '@/types';

// These should be provided by the user
const supabaseConfig: SupabaseConfig = {
  url: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
};

// Check if credentials are provided
const isSupabaseConfigured = supabaseConfig.url && supabaseConfig.anonKey;

// Create a single supabase client for interacting with your database
export const supabase = isSupabaseConfigured 
  ? createClient(supabaseConfig.url, supabaseConfig.anonKey)
  : null;

// Helper function to add email to waiting list
export async function addToWaitingList(email: string) {
  if (!supabase) {
    console.warn('Supabase not configured. Running in demo mode.');
    // Simulate success for demo purposes
    await new Promise(resolve => setTimeout(resolve, 500));
    return { success: true, data: { id: 'demo-id', email, created_at: new Date().toISOString() } };
  }

  try {
    const { data, error } = await supabase
      .from('waiting_list')
      .insert([{ email }])
      .select()
      .single();

    if (error) {
      console.error('Error adding to waiting list:', error);
      throw error;
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error in addToWaitingList:', error);
    return { success: false, error };
  }
}

// Helper function to check if email already exists
export async function checkEmailExists(email: string) {
  if (!supabase) {
    console.warn('Supabase not configured. Running in demo mode.');
    // Simulate check for demo purposes
    await new Promise(resolve => setTimeout(resolve, 300));
    return { exists: false, data: null };
  }

  try {
    const { data, error } = await supabase
      .from('waiting_list')
      .select('email')
      .eq('email', email)
      .single();

    if (error && error.code !== 'PGRST116') { // PGRST116 is "no rows returned"
      console.error('Error checking email:', error);
      throw error;
    }

    return { exists: !!data, data };
  } catch (error) {
    console.error('Error in checkEmailExists:', error);
    return { exists: false, error };
  }
}
