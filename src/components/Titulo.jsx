import { useState } from "react";
import { Button } from "react-bootstrap";

const Titulo = ({ nuevoTitulo }) => {
  const [inicial, setInicial] = useState("from changed state");
  const cambiarEstado = () => {
    setInicial("tufitufiyt");
  };
  return (
    <article>
      <h1>{nuevoTitulo}</h1>
      <h2>{inicial}</h2>
      <Button
        variant="primary"
        onClick={cambiarEstado}
        // onClick={() => setInicial("este es mi nuevo valor")}
      >
        cambiar estado
      </Button>{" "}
    </article>
  );
};

export default Titulo;
