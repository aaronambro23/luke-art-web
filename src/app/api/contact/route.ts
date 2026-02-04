import { NextResponse } from "next/server";

// Stub: wire this up to Resend, SendGrid, or your email provider.
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body as {
      name?: string;
      email?: string;
      message?: string;
    };
    // TODO: send email via your provider, e.g. Resend
    // await resend.emails.send({ from: '...', to: '...', subject: '...', html: ... });
    console.log("Contact form:", { name, email, message });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
