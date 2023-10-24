import Header from "../components/Header";
import { conhecimentos } from "../mocks/conhecimentos";

function Conhecimentos() {
  return (
    <div>
      <Header/>
      Linguagens:
      <ul>
        {conhecimentos.linguagens.map((linguagem) => (
          <li key={linguagem.name + linguagem.level}>{linguagem.name} / {linguagem.level} - 5</li>
        ))}
      </ul>
      Frontend:
      <ul>
      {conhecimentos.frontend.map((linguagem) => (
          <li key={linguagem.name + linguagem.level}>{linguagem.name} / {linguagem.level} - 5</li>
        ))}
      </ul>
      Backend:
      <ul>
      {conhecimentos.backend.map((linguagem) => (
          <li key={linguagem.name + linguagem.level}>{linguagem.name} / {linguagem.level} - 5</li>
        ))}
      </ul>
      Testes:
      <ul>
      {conhecimentos.testes.map((linguagem) => (
          <li key={linguagem.name + linguagem.level}>{linguagem.name} / {linguagem.level} - 5</li>
        ))}
      </ul>
    </div>
  );
}

export default Conhecimentos;