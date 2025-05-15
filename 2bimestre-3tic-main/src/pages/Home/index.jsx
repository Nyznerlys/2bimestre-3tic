import { useEffect, useState } from "react";
import axios from "axios";
import { FaPaw } from "react-icons/fa";

export default function Home() {
  const [fato, setFato] = useState("Carregando fato...");

  const traduzirTexto = async (texto) => {
    try {
      const resposta = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=pt&dt=t&q=${encodeURIComponent(texto)}`);
      const dados = await resposta.json();
      return dados[0][0][0];
    } catch (erro) {
      return "Não foi possível traduzir o fato 😿";
    }
  };

  const buscarFato = async () => {
    try {
      const resposta = await axios.get("https://catfact.ninja/fact");
      const fatoOriginal = resposta.data.fact;
      const fatoTraduzido = await traduzirTexto(fatoOriginal);
      setFato(fatoTraduzido);
    } catch (error) {
      setFato("Erro ao buscar fato 🐱");
    }
  };

  useEffect(() => {
    buscarFato();
  }, []);

  return (
    <div className="w-screen h-[calc(100vh-64px)] flex items-center justify-center bg-gray-950 text-white px-4">
      <div className="bg-gray-900 p-6 rounded-2xl shadow-2xl max-w-xl w-full text-center">
        <h1 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
          <FaPaw className="text-pink-400" />
          Fato aleatório sobre gatos
        </h1>
        <p className="mb-6 text-lg leading-relaxed">{fato}</p>
        <button
          onClick={buscarFato}
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-xl transition duration-200"
        >
          Mostrar outro fato
        </button>
      </div>
    </div>
  );
}
