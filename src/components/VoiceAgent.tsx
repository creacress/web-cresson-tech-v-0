"use client"
declare global {
  interface SpeechRecognitionEvent extends Event {
    results: SpeechRecognitionResultList;
  }
}

import { useEffect, useState } from "react"

type ISpeechRecognition = typeof window & {
  SpeechRecognition?: any;
  webkitSpeechRecognition?: any;
};
const w = typeof window !== "undefined" ? (window as ISpeechRecognition) : {} as ISpeechRecognition;

export default function VoiceAgent() {
  const [transcript, setTranscript] = useState("")
  const [response, setResponse] = useState("")
  const [listening, setListening] = useState(false)

  const recognition =
    typeof window !== "undefined" && (w.SpeechRecognition || w.webkitSpeechRecognition)
      ? new (w.SpeechRecognition || w.webkitSpeechRecognition)()
      : null

  useEffect(() => {
    if (!recognition) return
    recognition.lang = "fr-FR"
    recognition.onresult = async (event: SpeechRecognitionEvent) => {
      const text = event.results[0][0].transcript
      setTranscript(text)
      const res = await fetch("/api/ollama-agent", {
        method: "POST",
        body: JSON.stringify({ question: text }),
        headers: { "Content-Type": "application/json" },
      })
      const data = await res.json()
      setResponse(data.answer)
      const utter = new SpeechSynthesisUtterance(data.answer)
      utter.lang = "fr-FR"
      speechSynthesis.speak(utter)
    }
  }, [])

  const start = () => {
    if (recognition) {
      setTranscript("")
      setResponse("")
      setListening(true)
      recognition.start()
    }
  }

  return (
    <div className="bg-gradient-to-br from-black via-zinc-900 to-gray-800 border border-cyan-400/30 rounded-xl p-6 shadow-2xl text-green-300 font-mono max-w-2xl mx-auto mt-12 backdrop-blur-md">
      <div className="mb-4">
        <span className="text-cyan-400">root@WebCresson</span>
        <span className="text-white">:</span>
        <span className="text-green-400">~</span>
        <span className="text-white">$</span>
        <span className="ml-2">Assistant IA vocal</span>
      </div>
      <button
        onClick={start}
        className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded text-white font-semibold tracking-wider shadow-md border border-green-400"
      >
        🎤 Lancer la commande
      </button>
      {transcript && (
        <p className="mt-4 text-sm text-lime-300">
          ➤ Vous : <span className="italic">{transcript}</span>
        </p>
      )}
      {response && (
        <p className="mt-2 text-green-400">
          🤖 Jarvis : <span>{response}</span>
        </p>
      )}
    </div>
  )
}