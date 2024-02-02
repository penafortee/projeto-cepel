import React from "react";
import { Link } from "react-router-dom";
import "./projectsStyle.css";
import PropTypes from "prop-types";
import { BsPencil, BsFillTrashFill } from "react-icons/bs";

// Nesta function foi criada a estrutura dos cards, para exposição dos dados inseridos.
// Nele também encontramos a opção de editar e excluir.

function ProjectCard({
  id,
  name,
  Barras,
  handleRemove,
  Geradores,
  Linhas,
  Transformadores,
}) {
  const remove = (id) => {
    handleRemove(id);
  };

  return (
    <div className="project_card">
      <h4>{name}</h4>
      <div className="dados">
        <p>
          <span>Barras: {Barras || "Sem valor"}</span>
        </p>
        <p>
          <span>Geradores: {Geradores || "Sem valor"}</span>
        </p>
        <p>
          <span>Transformadores: {Transformadores || "Sem valor"}</span>
        </p>
        <p>
          <span>Linhas: {Linhas || "Sem valor"}</span>
        </p>
      </div>
      <div className="project_card_actions">
        <Link to={`/Projects/${id}`}>
          <button>
            <BsPencil /> Editar
          </button>
        </Link>
        <button onClick={remove}>
          <BsFillTrashFill /> Excluir
        </button>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  Barras: PropTypes.string,
  Geradores: PropTypes.string,
  Linhas: PropTypes.string,
  Transformadores: PropTypes.string,
  handleRemove: PropTypes.func.isRequired,
};
export default ProjectCard;
