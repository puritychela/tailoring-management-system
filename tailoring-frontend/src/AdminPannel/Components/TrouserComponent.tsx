import useTrouser from "../../hooks/useTrouser";
import trouserService from "../../shared/services/trouserService";

const TrouserComponent = () => {
  const { data, setData } = useTrouser();

  const handleDelete = (id: number) => {
    const originalProducts = [...data];
    setData(data.filter((product) => product.id !== id));
    trouserService
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
        <h2 className="mb-4 bg-primary">TROUSERS</h2>
        <th>id</th>
        <th>hips</th>
        <th>waist</th>
        <th>height</th>
        <th>leg_opening</th>
        <th>Kneel</th>
        <th>thigh</th>
        <th>description</th>
        <th>user</th>
        <th>edit</th>
        <th>delete</th>
      </thead>
      <tbody>
        {data.map((trouser) => (
          <tr key={trouser.id}>
            <td>{trouser.id}</td>
            <td>{trouser.hips}</td>
            <td>{trouser.waist}</td>
            <td>{trouser.height}</td>
            <td>{trouser.leg_opening}</td>
            <td>{trouser.Kneel}</td>
            <td>{trouser.thigh}</td>
            <td>{trouser.description}</td>
            <td>{trouser.userId}</td>
            <td>
              <button className="btn btn-outline-primary">edit</button>
            </td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => handleDelete(trouser.id)}
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

export default TrouserComponent;
