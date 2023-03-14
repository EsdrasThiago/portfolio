import { conhecimentos } from "../utils/conhecimentos";

function Conhecimentos() {
  return (
    <div>
      Linguagens:
      <ul>
        {conhecimentos.linguagens.map((linguagem) => (
          <li>{linguagem.name} / {linguagem.level} - 5</li>
        ))}
      </ul>
      Frontend:
      <ul>
      {conhecimentos.frontend.map((linguagem) => (
          <li>{linguagem.name} / {linguagem.level} - 5</li>
        ))}
      </ul>
      Backend:
      <ul>
      {conhecimentos.backend.map((linguagem) => (
          <li>{linguagem.name} / {linguagem.level} - 5</li>
        ))}
      </ul>
      Testes:
      <ul>
      {conhecimentos.testes.map((linguagem) => (
          <li>{linguagem.name} / {linguagem.level} - 5</li>
        ))}
      </ul>
    </div>
  );
}

export default Conhecimentos;
