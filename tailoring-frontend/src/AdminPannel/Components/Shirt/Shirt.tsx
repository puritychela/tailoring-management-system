import { useState } from "react";
import useShirt from "../../../hooks/useShirt";
import shirtService from "../../../shared/services/shirtService";
import AddShirt, { formData } from "./AddShirt";
import { shirt } from "../../../hooks/useShirt";
import EditShirt from "./EditShirt";

const Shirt = () => {
  const { data, setData, setError } = useShirt();
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [currentSkirt, setCurrentSkirt] = useState<shirt>({
    id: 0,
    userId: 0,
    waist: 0,
    front_length: 0,
    sleeve_length: 0,
    chest: 0,
    collar: 0,
    description: "",
  });

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

  const handleClick = (skirt: shirt) => {
    setCurrentSkirt(skirt);
    setIsEditPopupOpen(true);
  };

  const handleUpdate = (ShirtData: shirt) => {
    const originalProducts = [...data];

    setData(data.map((p) => (p.id === ShirtData.id ? ShirtData : p)));
    console.log(ShirtData);
    shirtService
      .update(ShirtData)
      .then((res) => alert(`updated successfully ${res.statusText}`))
      .catch((error) => {
        setData(originalProducts);
        setError(error.message);
      });
    setIsAddPopupOpen(false);
  };

  const onClose = () => {
    setIsAddPopupOpen(false);
    setIsEditPopupOpen(false);
  };

  const handleCreate = (createdShirt: formData) => {
    const originalProducts = [...data];
    shirtService
      .create(createdShirt)
      .then((res) => {
        setData([...data, res.data]);
        alert(`shirt added successfully ${res.statusText}`);
      })
      .catch((err) => {
        setData([...originalProducts]);
        setError(err.message);
        alert(err.message);
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
            Add Shirt
          </button>
        </div>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr className="space-between">
            <td colSpan={7} style={{ textAlign: "center", color: "blue" }}>
              Shirts
            </td>
          </tr>
          <tr>
            <th>id</th>
            <th>sleeve_length</th>
            <th>collar</th>
            <th>front_length</th>
            <th>description</th>
            <th>user</th>
            <th>delete</th>
          </tr>
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
                  onClick={() => handleClick(shirt)}
                >
                  Edit
                </button>
              </td>
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
      {isEditPopupOpen && (
        <EditShirt
          onSave={(data) => handleUpdate(data)}
          shirt={currentSkirt}
          onClose={onClose}
        />
      )}
      {isAddPopupOpen && (
        <AddShirt onSave={(data) => handleCreate(data)} onClose={onClose} />
      )}
    </>
  );
};

export default Shirt;
