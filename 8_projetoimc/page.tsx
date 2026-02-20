"use client";
import { useState } from "react";

export default function Imc() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState("");

  function calcularImc() {
    const p = parseFloat(peso);
    const a = parseFloat(altura);

    const imc = p / (a * a);

    if (imc < 18.5) {
      setResultado("Abaixo do peso");
    } else if (imc >= 18.5 && imc < 25) {
      setResultado("Peso normal");
    } else {
      setResultado("Acima do peso");
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold p-2">Cálculo IMC</h1>
      <hr />
      <p className="p-2">Digite seu peso</p>
      <input
        placeholder="ex: 80"
        type="text"
        className="rounded mt-2 border-2 border-gray-500 p-2 "
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
      />
      KG
      <br />
      <p className="p-2">Digite sua altura</p>
      <input
        placeholder="ex: 1.80"
        type="text"
        className="rounded mt-2 border-2 border-gray-500 p-2"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
      />
      Metros
      <br />
      <button
        onClick={calcularImc}
        className="bg-blue-500 hover:bg-blue-300 text-white p-2 rounded mt-4"
      >
        Calcular
      </button>
      <br />
      <br />
      <h4>Resultado: {resultado}</h4>
    </div>
  );
}
