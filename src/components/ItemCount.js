import { useState } from "react";
import "./NavBar.css";

const ItemCount = ({ stock, onAdd }) => {
  const [contador, setContador] = useState(1);
  const aumentar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };
  const disminuir = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <div className="contenedorMayor">
      <div className="contenedorContador">
        <button
          className="DisminuirAumentar"
          disabled={contador <= 0}
          onClick={disminuir}
        >
          -
        </button>
        <p className="cifra">{contador}</p>
        <button
          className="DisminuirAumentar"
          disabled={contador >= stock}
          onClick={aumentar}
        >
          +
        </button>
      </div>
      <div className="contenedorContador">
        <button
          className="agregarCarrito"
          disabled={contador < 1}
          onClick={() => onAdd(contador)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
