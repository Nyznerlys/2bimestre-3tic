import React, { useState, useEffect } from "react";

export default function CatFact() {
  const [fact, setFact] = useState("");

  // Função para buscar o fato
  async function fetchFact() {
    try {
      const response = await fetch("https://catfact.ninja/fact");
      const data = await response.json();
      setFact(data.fact);
    } catch (error) {
      setFact("Erro ao buscar fato.");
    }
  }

  // Chama a API assim que o componente for montado
  useEffect(() => {
    fetchFact();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white px-4">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-xl max-w-xl text-center">
        {fact ? fact : "Carregando..."}
      </div>

      <button
        onClick={fetchFact}
        className="mt-6 bg-blue-500 hover:bg-blue-600 transition px-6 py-2 rounded text-white text-lg"
      >
        Mostrar outro fato
      </button>
    </div>
  );
}