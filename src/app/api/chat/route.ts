import { NextResponse } from 'next/server';
import { askOllama } from '@/lib/askOllama';
import { saveChatLog } from '@/lib/db';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const prompt = body?.prompt?.trim();

    if (!prompt) {
      return NextResponse.json({ error: '⛔ Prompt manquant' }, { status: 400 });
    }

    const answer = await askOllama(prompt);

    await saveChatLog({
      prompt,
      response: answer,
      userAgent: req.headers.get('user-agent') || '',
      ip: req.headers.get('x-forwarded-for') || '',
    });

    return NextResponse.json({ answer });
  } catch (error) {
    console.error('🔥 Erreur /api/chat:', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
