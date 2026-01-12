const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post("/analyze", (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: "No text provided" });
  }

  res.json({
    analysis: "Análisis jurídico preliminar del texto recibido.",
    risks: "Riesgos legales detectados de forma inicial.",
    suggestions: "Sugerencias de mejora contractual.",
    executive_summary: "Resumen ejecutivo para toma de decisiones."
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend Lexium corriendo en http://localhost:${PORT}`);
});
