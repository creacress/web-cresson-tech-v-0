'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    setResponse('');

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      setResponse(data.answer ?? 'Aucune réponse');
    } catch (err) {
      console.error(err);
      setResponse('Erreur de connexion avec le bot.');
    } finally {
      setLoading(false);
      setPrompt('');
    }
  };

  return (
    <>
      {/* Bouton flottant */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 bg-[#00e0ff] text-black p-3 rounded-full shadow-lg hover:scale-105 transition"
        aria-label="Ouvrir le chatbot"
      >
        <MessageCircle size={24} />
      </button>

      {/* Fenêtre de chat */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-6 z-50 w-[320px] sm:w-[360px] bg-[#111] text-white rounded-xl shadow-2xl border border-[#00e0ff33] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#00e0ff33]">
              <span className="font-semibold text-white">💬 CressonBot</span>
              <button onClick={() => setOpen(false)} aria-label="Fermer">
                <X className="text-gray-300 hover:text-white" size={18} />
              </button>
            </div>

            {/* Formulaire */}
            <form onSubmit={handleSubmit} className="flex flex-col px-4 py-3 gap-3">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Pose ta question ici..."
                className="bg-white text-black p-2 rounded resize-none h-24"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-[#00e0ff] text-black font-semibold py-2 rounded hover:scale-105 transition disabled:opacity-50"
              >
                {loading ? 'Réfléchit...' : 'Envoyer'}
              </button>
            </form>

            {/* Réponse */}
            {response && (
              <div className="bg-[#1a1a1a] px-4 py-3 border-t border-[#00e0ff33]">
                <p className="text-sm text-gray-200 whitespace-pre-wrap">{response}</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
