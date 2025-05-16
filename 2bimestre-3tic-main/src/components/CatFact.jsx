import React, { useState } from "react";

function CatFact() {
  const facts = [
    `O termo "gatinho" é a raiz da palavra principal para "gato" no termo romeno pisica e a raiz das palavras secundárias em lituano (puz) e baixo alemão puus. Alguns estudiosos sugerem que "bichano" pode ser uma imitação do som sibilante usado para chamar a atenção de um gato. Como uma gíria para a pudenda feminina, poderia estar associada à conotação de um gato ser macio, quente e felpudo.`,
    `Os gatos domésticos descendem de felinos selvagens do Oriente Médio e foram domesticados há cerca de 9.000 anos.`,
    `Gatos têm cerca de 30 músculos em cada orelha, o que lhes permite girar as orelhas 180 graus.`,
    `O ronronar de um gato pode ter um efeito calmante e pode ajudar a curar ossos quebrados e tecidos.`,
    `Os gatos são capazes de fazer mais de 100 sons vocais diferentes, enquanto os cães têm cerca de 10.`
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const mostrarOutroFato = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % facts.length);
  };

  return (
    <div className="min-h-screen bg-[#050622] text-white flex items-center justify-center p-4">
      <div className="bg-[#0F172A] p-6 rounded-2xl shadow-xl max-w-xl w-full text-center">
        <h1 className="text-2xl font-bold mb-4">🐾 Fato aleatório sobre gatos</h1>
        <p className="text-base mb-6">{facts[currentIndex]}</p>
        <button
          onClick={mostrarOutroFato}
          className="mt-4 bg-[#1E293B] hover:bg-[#334155] text-white py-2 px-4 rounded-md transition duration-300"
        >
          Mostrar outro fato
        </button>
      </div>
    </div>
  );
}

export default CatFact;
