import { NextResponse } from 'next/server';
import { isSupabaseConfigured, supabase } from '@/lib/supabase';

export async function GET() {
  if (!isSupabaseConfigured || !supabase) {
    return NextResponse.json(
      { error: 'Server configuration error. Please try again later.' },
      { status: 500 }
    );
  }

  const { data, error } = await supabase
    .from('privacy_policy')
    .select('content')
    .order('created_at', { ascending: false })
    .limit(1)
    .single();

  if (error) {
    console.error('Error fetching privacy policy:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  if (!data) {
    return NextResponse.json({ error: 'Privacy policy not found' }, { status: 404 });
  }

  return NextResponse.json({ content: data.content });
}