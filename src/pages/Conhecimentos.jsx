import Header from "../components/Header";
import { conhecimentos } from "../mocks/conhecimentos";

function Conhecimentos() {
  return (
    <div className="main_conhecimentos">
      <Header />
      <h1>Linguagens: </h1>
      <div>
        {conhecimentos.linguagens.map((linguagem) => (
          <h2 key={linguagem.name + linguagem.level}>{linguagem.name}</h2>
        ))}
      </div>
      <h1>Frontend: </h1>
      <div>
        {conhecimentos.frontend.map((linguagem) => (
          <h2 key={linguagem.name + linguagem.level}>{linguagem.name}</h2>
        ))}
      </div>
      <h1>Backend: </h1>
      <div>
        {conhecimentos.backend.map((linguagem) => (
          <h2 key={linguagem.name + linguagem.level}>{linguagem.name}</h2>
        ))}
      </div>
      <h1>Testes: </h1>
      <div>
        {conhecimentos.testes.map((linguagem) => (
          <h2 key={linguagem.name + linguagem.level}>{linguagem.name}</h2>
        ))}
      </div>
    </div>
  );
}

export default Conhecimentos;