import Cabecalho from "./Cabecalho";
import Logo from "./Logo";

export default function Superior() {
  const dados = {
    img: "./img/Logo4.png",
    usuario: "Leonardo",
  };

  return (
    <div className="header">
      <Logo img={dados.img} />
      <Cabecalho user={dados.usuario} />
    </div>
  );
}
