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

  useEffect(() => {
    
  })

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
    <header className="header__main">
      <div>
        <button type="button" onClick={conhecimentosButton}>Conhecimentos</button>
        {conhecimentosSelected !== "" && <hr />}
      </div>
      <div>
        <button type="button" onClick={sobreMimButton}>Sobre mim</button>
        {sobreMimSelected !== "" && <hr />}
      </div>
      <div>
        <button type="button" onClick={projetosButton}>Projetos</button>
        {projetosSelected !== "" && <hr />}
      </div>
    </header>
  )
}

export default Header
