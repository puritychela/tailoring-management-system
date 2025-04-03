import useShirt from "../../hooks/useShirt";
import shirtService from "../../shared/services/shirtService";

const Shirt = () => {
  const { data, setData } = useShirt();

  const handleDelete = (id: number) => {
    const originalProducts = [...data];
    setData(data.filter((product) => product.id !== id));
    shirtService
      .delete(id)
      .then((res) => {
        alert(`deleted successfully ${res.statusText}`);
      })
      .catch((err) => {
        alert(`deleting product failed ${err}`);
        setData(originalProducts);
      });
  };
  return (
    <table className="table table-bordered">
      <thead>
        <th>id</th>
        <th>sleeve_length</th>
        <th>collar</th>
        <th>front_length</th>
        <th>description</th>
        <th>user</th>
        <th>delete</th>
      </thead>
      <tbody>
        {data.map((shirt) => (
          <tr key={shirt.id}>
            <td>{shirt.id}</td>
            <td>{shirt.sleeve_length}</td>
            <td>{shirt.collar}</td>
            <td>{shirt.front_length}</td>
            <td>{shirt.description}</td>
            <td>{shirt.userId}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => handleDelete(shirt.id)}
              >
                delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Shirt;
