import React, { useState, useEffect } from "react";
import "./EditStyle.css";
import { useParams } from "react-router-dom";

// neste item eu criei um fecth para editar os dados,
// levando a uma nova página para edição, com base no id de cada projeto.

function Edit() {
  const { id } = useParams();
  const [project, setProject] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/Projects/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(data);
      });
  }, [id]);

  return <p>{project.name}</p>;
}

export default Edit;
