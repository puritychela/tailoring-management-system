import { Table } from "@chakra-ui/react";
import { useContext } from "react";
import CartContext from "../context/CartContext";

const CartTable = () => {
  const { carts, dispatch } = useContext(CartContext);
  const totalPrice = carts.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  return (
    <Table variant="simple">
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {carts.map((product) => (
          <tr key={product.id}>
            <td>
              <img
                src={product.image}
                alt={product.name}
                width="50"
                height="50"
              />
            </td>
            <td>{product.name}</td>
            <td>khs: {product.price.toFixed(2)}</td>

            <td className="space-around">
              <button
                className="btn btn-outline-primary"
                onClick={() =>
                  dispatch({ type: "DECREMENT", product: product })
                }
              >
                -
              </button>
              {product.quantity}
              <button
                className="btn btn-outline-primary"
                onClick={() => dispatch({ type: "ADD", product: product })}
              >
                +
              </button>
            </td>
            <td>khs: {(product.price * product.quantity).toFixed(2)}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => dispatch({ type: "DELETE", product: product })}
              >
                delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={2} style={{ textAlign: "right" }}>
            <button className="btn btn-outline-primary">checkout</button>
          </td>
          <td colSpan={2} style={{ textAlign: "right" }}>
            <strong>Total Price</strong>
          </td>
          <td>
            <strong>khs: {totalPrice.toFixed(2)}</strong>
          </td>
        </tr>
      </tfoot>
    </Table>
  );
};

export default CartTable;
