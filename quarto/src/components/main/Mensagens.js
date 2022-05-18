import { useState } from "react";
export default function Mensagens(props) {
  const [produto, setProdutos] = useState("");

  return (
    <div classname="mensagens">
      {props.info.map((m, i) => (
        <div key={i}>
          <h4>
            Titulo da Mensagem
            <br />
            {m.titulo}
          </h4>
          <h3>Autor: {m.autor}</h3>
          <p>Mensagem: {m.mensagem}</p>
        </div>
      ))}
    </div>
  );
}
