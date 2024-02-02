import React, { useState } from "react";
import DadosForm from "./DadosForm";
import "./FormStyle.css";

function NewProject() {
  const history = useState();

  function createPost(project) {
    // iniciar o cost and services
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/Projects", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        //redirect posterior
        history.pushState("../componentes/form/projects.js", {
          message: "Projeto criado com sucesso!",
        });
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="newproject_container">
      <h1>Criar Novos Dados</h1>
      <p>Adicione os dados para que possa visualizar</p>
      <DadosForm handleSubmit={createPost} btnText="Criar Dados" />
    </div>
  );
}

export default NewProject;
