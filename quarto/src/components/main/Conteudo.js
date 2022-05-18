export default function Conteudo(props) {
  const passarDados = (produtos) => {
    props.acao(produtos);
  };

  return (
    <div className="conteudo">
      <h2>Produtos</h2>
      <div className="itens">
        {props.dados.map((itens, index) => (
          <div
            key={index}
            onClick={() => {
              passarDados(itens.msg);
            }}
          >
            <h3>{itens.nome}</h3>
            <p>{itens.categoria}</p>
            <p className="preco">R$ {itens.preco}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
