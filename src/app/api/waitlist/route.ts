import { NextRequest, NextResponse } from "next/server";
import { isSupabaseConfigured, supabase } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    if (!isSupabaseConfigured || !supabase) {
      return NextResponse.json(
        { error: "Server configuration error. Please try again later." },
        { status: 500 }
      );
    }

    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const { error } = await supabase
      .from("waiting_list")
      .insert([{ email: email.toLowerCase().trim() }]);

    if (error) {
      // Duplicate email
      if (error.code === "23505") {
        return NextResponse.json(
          { error: "This email is already on the waiting list." },
          { status: 409 }
        );
      }
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to join the waiting list. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Successfully joined the waiting list!" },
      { status: 201 }
    );
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}