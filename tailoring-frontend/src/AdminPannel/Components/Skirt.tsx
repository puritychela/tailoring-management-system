import useSkirt from "../../hooks/useSkirt";
import skirtService from "../../shared/services/skirtService";

const Skirt = () => {
  const { data, setData } = useSkirt();
  const handleDelete = (id: number) => {
    const originalProducts = [...data];
    setData(data.filter((product) => product.id !== id));
    skirtService
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
        <th>hips</th>
        <th>waist</th>
        <th>skirt_length</th>
        <th>description</th>
        <th>user</th>
        <th>delete</th>
      </thead>
      <tbody>
        {data.map((Skirt) => (
          <tr key={Skirt.id}>
            <td>{Skirt.id}</td>
            <td>{Skirt.hips}</td>
            <td>{Skirt.waist}</td>
            <td>{Skirt.skirt_length}</td>
            <td>{Skirt.description}</td>
            <td>{Skirt.userId}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => handleDelete(Skirt.id)}
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

export default Skirt;
