const handleAnalyze = async () => {
  if (!text.trim()) {
    alert("Pega un contrato primero");
    return;
  }

  setLoading(true);
  try {
    const response = await fetch("http://localhost:3001/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }), // ← SOLO ESTE CAMBIO
    });
    const data = await response.json();
    setResult(data.analysis || "Sin respuesta del backend");
  } catch (error) {
    setResult("Error al conectar con el backend");
  } finally {
    setLoading(false);
  }
};
