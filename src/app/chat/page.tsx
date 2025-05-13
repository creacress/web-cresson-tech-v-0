'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageText } from '@/components/MessageText/MessageText';

export default function ChatDebugPage() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResponse(''); // reset
    console.log('✅ SUBMIT OK');

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    setResponse(data.answer ?? 'Aucune réponse');
  };

  useEffect(() => {
    containerRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [response]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white p-6">
      <h1 className="text-2xl mb-4 font-semibold">Test CressonBot</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="text-black p-3 rounded resize-none h-32"
          placeholder="Pose ta question..."
        />
        <button
          type="submit"
          className="bg-white text-black py-2 px-4 rounded hover:bg-gray-200 transition"
        >
          Envoyer
        </button>
      </form>

      {response && (
        <div
          ref={containerRef}
          className="bg-[#111] border border-white p-4 rounded mt-6 w-full max-w-md"
        >
          <strong className="block mb-2">Réponse :</strong>
          <MessageText content={response} />

        </div>
      )}
    </div>
  );
}
