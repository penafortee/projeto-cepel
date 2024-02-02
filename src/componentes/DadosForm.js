import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./DadosFormStyle.css";
import Input from "./form/input";
import SubmitButton from "./form/SubmitButton";
import ProjectCard from "./projectCards";

function DadosForm({ handleSubmit, btnText, projectData }) {
  const [project, setProject] = useState(projectData || {});
  const [projectsCard, setProjectsCard] = useState([]);

  //fetch para mostrar os projects no card
  useEffect(() => {
    fetch("http://localhost:5000/Projects", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProjectsCard(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(project);
  };

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value });
  }

  // fetch para deletar os dados
  function removeProject(id) {
    fetch(`http://localhost:5000/Projects/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        setProjectsCard(projectsCard.filter((project) => project.id !== id));
      })
      .catch((err) => console.log(err));
  }

  // Neste return eu adicionei alguns inputs, para criar a estrutura do 'formulário',
  // onde adicionamos novos dados para serem criados os cards de 'projetos'.

  // Na '<div className="card_dados">' eu trouxe 'projectCards.js', para que pudesse a baixo do conteúdo inserido,
  // visualizar os projetos já inseridos.

  return (
    <div className="dados-finais">
      <form onSubmit={submit} className="form">
        <Input
          key="NomeProjetoInput"
          type="text"
          text="Nome do Projeto"
          name="name"
          placeholder="Insira o dado"
          handleOnChange={handleChange}
          value={project.name ? project.name : ""}
        />
        <Input
          key="barrasInput"
          type="number"
          text="Barras"
          name="Barras"
          placeholder="Insira o dado"
          handleOnChange={handleChange}
          value={project.Barras ? project.Barras : ""}
        />

        <Input
          key="linhasInput"
          type="number"
          text="Linhas"
          name="Linhas"
          placeholder="Insira o dado"
          handleOnChange={handleChange}
          value={project.Linhas ? project.Linhas : ""}
        />
        <Input
          key="geradoresInput"
          type="number"
          text="Geradores"
          name="Geradores"
          placeholder="Insira o dado"
          handleOnChange={handleChange}
          value={project.Geradores ? project.Geradores : ""}
        />
        <Input
          key="transformadoresInput"
          type="number"
          text="Transformadores"
          name="Transformadores"
          placeholder="Insira o dado"
          handleOnChange={handleChange}
          value={project.Transformadores ? project.Transformadores : ""}
        />

        <SubmitButton key="submitButton" text={btnText} />
      </form>
      <div className="card_dados">
        <h1>Meus Dados</h1>
        <div className="cards">
          {projectsCard.length > 0 &&
            projectsCard.map((project, index) => (
              <ProjectCard
                key={index}
                name={project.name}
                Transformadores={project.Transformadores}
                Geradores={project.Geradores}
                Linhas={project.Linhas}
                Barras={project.Barras}
                handleRemove={removeProject}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

DadosForm.propTypes = {
  btnText: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  projectData: PropTypes.object.isRequired,
};

export default DadosForm;
