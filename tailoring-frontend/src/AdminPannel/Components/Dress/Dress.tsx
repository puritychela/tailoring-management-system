import { useState } from "react";
import useDress, { dress } from "../../../hooks/useDress";
import dressService from "../../../shared/services/dressService";
import AddDress, { formData } from "./AddDress";
import EditDress from "./EditDress";

const Dress = () => {
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);
  const { data, setData, setError } = useDress();
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [currentDress, setCurrentDress] = useState<dress>({
    id: 0,
    hips: 0,
    waist: 0,
    bust: 0,
    full_length: 0,
    shoulder: 0,
    sleeve_length: 0,
    description: "",
    userId: 0,
  });

  const handleClick = (skirt: dress) => {
    setCurrentDress(skirt);
    setIsEditPopupOpen(true);
  };

  const handleUpdate = (ShirtData: dress) => {
    const originalProducts = [...data];

    setData(data.map((p) => (p.id === ShirtData.id ? ShirtData : p)));
    console.log(ShirtData);
    dressService
      .update(ShirtData)
      .then((res) => alert(`updated successfully ${res.statusText}`))
      .catch((error) => {
        setData(originalProducts);
        setError(error.message);
      });
    setIsAddPopupOpen(false);
  };

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

  const onClose = () => {
    setIsAddPopupOpen(false);
  };

  const handleCreate = (CreatedProduct: formData) => {
    const originalProducts = [...data];
    console.log(CreatedProduct);
    dressService
      .create(CreatedProduct)
      .then((res) => setData([...data, res.data]))
      .catch((err) => {
        setData([...originalProducts]);
        setError(err.message);
      });
  };
  return (
    <>
      <div className="d-flex justify-content-between ">
        <div className="mb-3"></div>
        <div className="mb-3">
          <button
            className="btn btn-primary"
            onClick={() => setIsAddPopupOpen(true)}
          >
            Add Dress
          </button>
        </div>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr className="space-between">
            <td colSpan={9} style={{ textAlign: "center", color: "blue" }}>
              DRESSES
            </td>
          </tr>
          <tr>
            <th>id</th>
            <th>hips</th>
            <th>waist</th>
            <th>bust</th>
            <th>full_length</th>
            <th>shoulder</th>
            <th>sleeve_length</th>
            <th>description</th>
            <th>user</th>
          </tr>
        </thead>
        <tbody>
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
                  className="btn btn-primary"
                  onClick={() => handleClick(dress)}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(dress.id)}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isEditPopupOpen && (
        <EditDress
          onClose={onClose}
          onSave={(data) => handleUpdate(data)}
          dress={currentDress}
        />
      )}
      {isAddPopupOpen && (
        <AddDress onSave={(data) => handleCreate(data)} onClose={onClose} />
      )}
    </>
  );
};

export default Dress;
