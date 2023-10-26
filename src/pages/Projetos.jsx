import { Link } from "react-router-dom";
import { projetos } from "../mocks/projetos";
import Header from "../components/Header";

function Projetos() {
  return (
    <main>
      <Header />
      {projetos.map((projeto) => (
        <Link key={projeto.nome + projeto.id} to={`/projetos/${projeto.id}`}>
          <img src={projeto.imagem} alt={projeto.nome} value={projeto.id}/>
          </Link>
      ))}
    </main>
  );
}

export default Projetos;