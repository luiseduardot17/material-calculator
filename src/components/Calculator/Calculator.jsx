import React from "react";
import S from "./Calculator.module.css";

const Calculator = () => {
  return (
    <section className={S.container}>
      <h2>
        Para saber a quantia necessária de material e o custo, informe os seguintes dados:
      </h2>
      <form action=".">
        <div className={S.dados}>
          <label htmlFor="comodo">Metragem do cômodo:</label>
          <input
            type="text"
            name="comodo"
            id="comodo"
            placeholder="Metragem em m²"
            required={true}
          />
          <label htmlFor="bloco">Tamanho do bloco:</label>
          <input
            type="text"
            name="bloco"
            id="bloco"
            placeholder="19 x 14"
            required={true}
          />
          <label htmlFor="piso">Tamanho do piso:</label>
          <input
            type="text"
            name="piso"
            id="piso"
            placeholder="60 x 60"
            required={true}
          />
        </div>
        <h2>Por fim informe os valores de cada item:</h2>
        <div className={S.custos}>
          <label htmlFor="custo1">Quanto custa a caixa de piso?</label>
          <input
            type="number"
            name="custo1"
            id="custo1"
            placeholder="R$ 49,99"
            required={true}
          />
          <label htmlFor="custo2">Quanto custa o milheiro do bloco?</label>
          <input
            type="number"
            name="custo2"
            id="custo2"
            placeholder="R$ 500"
            required={true}
          />
        </div>
        <div></div>
        <input type="submit" value="CALCULAR" className={S.btn} />
      </form>
    </section>
  );
};

export default Calculator;
