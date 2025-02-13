export async function GET(req) {
  try {
    const backendResponse = await fetch("http://188.132.135.5:6969/api/secret/", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!backendResponse.ok) {
      throw new Error(`Backend request failed: ${backendResponse.statusText}`);
    }

    const data = await backendResponse.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
