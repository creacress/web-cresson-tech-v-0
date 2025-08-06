export async function GET(req: Request, context: { params: Promise<{ model: string }> }) {
  try {
    const { model } = await context.params;
    const res = await fetch(`https://huggingface.co/api/models/${model}`);
    if (res.status === 429) {
      return new Response(JSON.stringify({ error: "Trop de requêtes. Réessaie plus tard." }), { status: 429 });
    }

    if (res.status === 403) {
      return new Response(JSON.stringify({ error: "Accès refusé. Vérifie tes droits API." }), { status: 403 });
    }

    if (!res.ok) {
      return new Response(JSON.stringify({ error: "Model not found" }), { status: res.status });
    }
    const data = await res.json();
    return Response.json(data);
  } catch (error) {
    return new Response(JSON.stringify({ error: "Erreur interne" }), { status: 500 });
  }
}