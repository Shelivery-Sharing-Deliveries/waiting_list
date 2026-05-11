import { NextResponse } from "next/server";
import { isSupabaseConfigured, supabase } from "@/lib/supabase";

export async function GET() {
  try {
    if (!isSupabaseConfigured || !supabase) {
      return NextResponse.json({ count: 0 }, { status: 200 });
    }

    const { count, error } = await supabase
      .from("waiting_list")
      .select("*", { count: "exact", head: true });

    console.log("Supabase count:", count);
    console.log("Supabase error:", error);

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to fetch waiting list count." },
        { status: 500 }
      );
    }

    return NextResponse.json({ count: count || 0 }, { status: 200 });
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}