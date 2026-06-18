export const prerender = false;

export async function POST({ request }) {
  try {
    const data = await request.json();
    const email = data.email;

    if (!email) {
      return new Response(
        JSON.stringify({ error: "Email is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // TODO: Connect this to an ESP like Mailchimp, Resend, or ConvertKit.
    // For now, we are logging it to the server console (visible in Vercel logs).
    console.log("New Subscriber Captured:", email);

    return new Response(
      JSON.stringify({ 
        message: "Successfully subscribed!",
        email: email
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Subscription error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
