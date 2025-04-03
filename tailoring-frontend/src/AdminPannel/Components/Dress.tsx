import useDress from "../../hooks/useDress";
import dressService from "../../shared/services/dressService";

const Dress = () => {
  const { data, setData } = useDress();

  const handleDelete = (id: number) => {
    const originalProducts = [...data];
    setData(data.filter((product) => product.id !== id));
    dressService
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
        <h2 className="mb-4 bg-primary">DRESSES</h2>
        <th>id</th>
        <th>hips</th>
        <th>waist</th>
        <th>bust</th>
        <th>full_length</th>
        <th>shoulder</th>
        <th>sleeve_length</th>
        <th>description</th>
        <th>user</th>
      </thead>
      <tbody>
        {/* <h2>DRESSES</h2> */}
        {data.map((dress) => (
          <tr key={dress.id}>
            <td>{dress.id}</td>
            <td>{dress.hips}</td>
            <td>{dress.waist}</td>
            <td>{dress.bust}</td>
            <td>{dress.full_length}</td>
            <td>{dress.shoulder}</td>
            <td>{dress.sleeve_length}</td>
            <td>{dress.description}</td>
            <td>{dress.userId}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => handleDelete(dress.id)}
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

export default Dress;
