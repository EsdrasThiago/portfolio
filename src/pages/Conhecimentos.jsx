import Header from "../components/Header";
import { conhecimentos } from "../mocks/conhecimentos";

function Conhecimentos() {
  return (
    <div>
      <Header />
      <div className="main_conhecimentos">
        <h2>Linguagens: </h2>
        <div>
          {conhecimentos.linguagens.map((linguagem) => (
            <h3 key={linguagem.name + linguagem.level}>{linguagem.name}</h3>
          ))}
        </div>
        <h2>Frontend: </h2>
        <div>
          {conhecimentos.frontend.map((linguagem) => (
            <h3 key={linguagem.name + linguagem.level}>{linguagem.name}</h3>
          ))}
        </div>
        <h2>Backend: </h2>
        <div>
          {conhecimentos.backend.map((linguagem) => (
            <h3 key={linguagem.name + linguagem.level}>{linguagem.name}</h3>
          ))}
        </div>
        <h2>Testes: </h2>
        <div>
          {conhecimentos.testes.map((linguagem) => (
            <h3 key={linguagem.name + linguagem.level}>{linguagem.name}</h3>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Conhecimentos;