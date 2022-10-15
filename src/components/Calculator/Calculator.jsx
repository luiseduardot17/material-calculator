import React, { useEffect, useState } from "react";
import S from "./Calculator.module.css";

const Calculator = () => {
  const [comodo, setComodo] = useState(0);

  const [bloco, setBloco] = useState(0);
  const [resBloco, setResBloco] = useState(0);

  const [piso, setPiso] = useState(0);
  const [resPiso, setResPiso] = useState(0);

  const [custo1, setCusto1] = useState(0);
  const [custo2, setCusto2] = useState(0);

  const [custoBloco, setCustoBloco] = useState(0);
  const [custoPiso, setCustoPiso] = useState(0);
  const [adicional, setAdicional] = useState(0);
  const [total, setTotal] = useState(0);

  function handleClick(e) {
    e.preventDefault();

    setBloco((parseFloat(comodo) / parseFloat(bloco)) * 1000);
    setPiso((parseFloat(comodo) / parseFloat(piso)) * 100);

    setResBloco((parseFloat(comodo) / parseFloat(bloco)) * 100 * 10);
    setResPiso((parseFloat(comodo) / parseFloat(piso)) * 100);

    useEffect(() => {
      setResPiso();
      setResBloco();
      setCustoBloco();
      setCustoPiso();
      setAdicional();
      setTotal();
    }, [comodo, bloco, piso, custo1, custo2]);
  }

  setTimeout(() => {
    
    setCustoBloco((parseFloat(custo2) / 1000) * parseFloat(resBloco));
    
    setCustoPiso(parseFloat(custo1) * parseFloat(resPiso));
    
    setAdicional((parseFloat(custoBloco) + parseFloat(custoPiso)) * 0.08);
    
    setTotal(
      parseFloat(custoBloco) + parseFloat(custoPiso) + parseFloat(adicional)
    );
  }, "500");

  function reset(e) {
    e.preventDefault();
    setResBloco(0);
    setResPiso(0);
    setCustoBloco(0);
    setCustoPiso(0);
    setAdicional(0);
    setTotal(0);

    setComodo({
      comodo: "",
    });
    setBloco({
      bloco: "",
    });
    setPiso({
      piso: "",
    });
    setCusto1({
      custo1: "",
    });
    setCusto2({
      custo2: "",
    });
  }

  return (
    <section className={S.container}>
      <h2>
        Para saber a quantia necessária de material e o custo, informe os
        seguintes dados:
      </h2>
      <form action=".">
        <div className={S.dados}>
          <label htmlFor="comodo">Metragem do cômodo:</label>
          <input
            type="text"
            name="comodo"
            id="comodo"
            placeholder="M²"
            required={true}
            value={comodo.comodo}
            onChange={(e) => setComodo(e.target.value)}
          />
          <label htmlFor="bloco">Tamanho do bloco:</label>
          <input
            type="text"
            name="bloco"
            id="bloco"
            placeholder="19 x 14"
            required={true}
            value={bloco.bloco}
            onChange={(e) => setBloco(e.target.value)}
          />
          <label htmlFor="piso">Tamanho do piso:</label>
          <input
            type="text"
            name="piso"
            id="piso"
            placeholder="60 x 60"
            required={true}
            value={piso.piso}
            onChange={(e) => setPiso(e.target.value)}
          />
        </div>
        <h2>Por fim informe os valores de cada item:</h2>
        <div className={S.custos}>
          <label htmlFor="custo1">Quanto custa a caixa de piso?</label>
          <input
            type="number"
            min="0"
            step="0.01"
            max="500"
            name="custo1"
            id="custo1"
            placeholder="R$ 49,99"
            required={true}
            value={custo1.custo1}
            onChange={(e) => setCusto1(e.target.value)}
          />
          <label htmlFor="custo2">Quanto custa o milheiro do bloco?</label>
          <input
            type="number"
            min="0"
            step="0.01"
            max="1000"
            name="custo2"
            id="custo2"
            placeholder="R$ 550,00"
            required={true}
            value={custo2.custo2}
            onChange={(e) => setCusto2(e.target.value)}
          />
        </div>
        <div className={S.buttons}>
          <input
            type="submit"
            value="CALCULAR"
            className={S.btn}
            onClick={handleClick}
          />
          <input
            type="button"
            value="REFAZER"
            className={S.btn}
            onClick={reset}
          />
        </div>

        <div className={S.resultados}>
          <p>
            Blocos necessários:
            <span className={S.cor}> {resBloco.toFixed(0)}</span>
          </p>
          <p>
            Custo bloco:
            <span className={S.cor}> R$ {custoBloco.toFixed(2)}</span>
          </p>
          <p>
            Piso necessário:
            <span className={S.cor}> {resPiso.toFixed(1)} M²</span>
          </p>
          <p>
            Custo piso: <span className={S.cor}> R$ {custoPiso.toFixed(2)}</span>
          </p>
          <p>
            Adicional 8% (perda):
            <span className={S.cor}> R$ {adicional.toFixed(2)}</span>
          </p>
          <p>
            TOTAL: <span className={S.cor}> R$ {total.toFixed(2)}</span>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Calculator;
