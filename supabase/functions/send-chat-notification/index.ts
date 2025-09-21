import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ChatNotificationRequest {
  name?: string;
  email?: string;
  message: string;
  timestamp: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message, timestamp }: ChatNotificationRequest = await req.json();

    const emailResponse = await resend.emails.send({
      from: "Gideon Media Chat <onboarding@resend.dev>",
      to: ["Gideonmedia@hotmail.com"],
      subject: "New Chat Message from Website",
      html: `
        <h2>New Chat Message Received</h2>
        <p><strong>Time:</strong> ${new Date(timestamp).toLocaleString()}</p>
        ${name ? `<p><strong>Name:</strong> ${name}</p>` : ''}
        ${email ? `<p><strong>Email:</strong> ${email}</p>` : ''}
        <p><strong>Message:</strong></p>
        <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
          ${message}
        </div>
        <p>Please respond to this customer as soon as possible.</p>
        <hr>
        <p style="color: #666; font-size: 12px;">This notification was sent from your Gideon Media website chat system.</p>
      `,
    });

    console.log("Chat notification sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-chat-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);