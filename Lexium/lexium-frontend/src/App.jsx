import { useState } from "react"
import "./App.css"

function App() {
  const [text, setText] = useState("")
  const [result, setResult] = useState("")
  const analyzeText = async () => {
  if (!text.trim()) return;

  try {
    const response = await fetch("http://localhost:3001/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text })
    });

    const data = await response.json();
    setResult(data);
  } catch (error) {
    console.error("Error conectando con backend:", error);
  }
};


  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Lexium IA</h1>

      <textarea
        placeholder="Pega aquí el texto legal a analizar..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={8}
        style={{ width: "100%", marginBottom: "1rem" }}
      />

      <button
        style={{ padding: "0.5rem 1rem", marginBottom: "1rem" }}
        onClick={async () => {
  const res = await fetch("http://localhost:3001/analyze", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text })
  });
  const data = await res.json();
  setResult(data);
}}

      >button onClick={analyzeText}
        Analizar
      </button>
{result && (
  <div style={{ marginTop: "20px", textAlign: "left" }}>
    <p><strong>Análisis:</strong> {result.analysis}</p>
    <p><strong>Riesgos:</strong> {result.risks}</p>
    <p><strong>Sugerencias:</strong> {result.suggestions}</p>
    <p><strong>Resumen ejecutivo:</strong> {result.executive_summary}</p>
  </div>
)}

      <pre
        style={{
          background: "#f4f4f4",
          padding: "1rem",
          minHeight: "100px",
        }}
      >
        {result}
      </pre>
    </div>
  )
}

export default App

