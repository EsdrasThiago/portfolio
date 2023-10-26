import { useEffect, useState } from "react";
import { projetos } from "../mocks/projetos";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

function ProjetoId() {
  const [projeto, setProjeto] = useState();
  const { id } = useParams();

  useEffect(() => {
    const atualProjeto = projetos.find((e) => e.id === Number(id));
    setProjeto(atualProjeto)
  })

  return (
    <main>
      <Header />
      {projeto && <div>
      <img src={projeto.imagem} alt={projeto.nome} />
      <h2>Link da aplicacao</h2>
      <h3>{projeto.link}</h3>
      <h2>Ferramentas</h2>
      {projeto.ferramentas.map((ferramenta, i) => (
        <h3 key={ferramenta + i}>{ferramenta}</h3>
      ))}
      <h2>Status</h2>
      {projeto.status === 0 ? ( <h3>Em progresso</h3> ) : ( <h3>Concluido</h3> )}
      </div>}
    </main>
  );
}

export default ProjetoId;