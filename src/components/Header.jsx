import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [conhecimentosSelected, setConhecimentosSelected] = useState("");
  const [sobreMimSelected, setSobreMimSelected] = useState("");
  const [projetosSelected, setProjetosSelected] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setConhecimentosSelected("")
    setProjetosSelected("")
    setConhecimentosSelected("")
    const pageName = window.location.href;
    if (pageName.includes('conhecimentos')) {
      setConhecimentosSelected("selected")
    } else if (pageName.includes('projetos')) {
      setProjetosSelected("selected")
    } else {
      setSobreMimSelected("selected")
    }
  }, [])

  const conhecimentosButton = () => {
    navigate("/conhecimentos")
  }

  const sobreMimButton = () => {
    navigate("/")
  }

  const projetosButton = () => {
    navigate("/projetos")
  }

  return (
    <header>
      <button type="button" className={conhecimentosSelected} onClick={conhecimentosButton}>Conhecimentos</button>
      <button type="button" className={sobreMimSelected} onClick={sobreMimButton}>Sobre mim</button>
      <button type="button" className={projetosSelected} onClick={projetosButton}>Projetos</button>
    </header>
  )
}

export default Header
