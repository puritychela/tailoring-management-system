import { useState } from "react";
import useSkirt, { skirt } from "../../../hooks/useSkirt";
import skirtService from "../../../shared/services/skirtService";
import AddSkirt, { formData } from "./AddSkirt";
import EditSkirt from "./EditSkirt";

const Skirt = () => {
  const { data, setData, setError } = useSkirt();
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [currentSkirt, setCurrentSkirt] = useState<skirt>({
    id: 0,
    waist: 0,
    hips: 0,
    skirt_length: 0,
    description: "",
    userId: 0,
  });

  const handleClick = (skirt: skirt) => {
    setCurrentSkirt(skirt);
    setIsEditPopupOpen(true);
  };

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

  const handleUpdate = (SkirtData: skirt) => {
    const originalProducts = [...data];

    setData(data.map((p) => (p.id === SkirtData.id ? SkirtData : p)));
    console.log(SkirtData);
    skirtService
      .update(SkirtData)
      .then((res) => alert(`updated successfully ${res.statusText}`))
      .catch((error) => {
        setData(originalProducts);
        setError(error.message);
      });
    setIsAddPopupOpen(false);
  };

  const onClose = () => {
    setIsEditPopupOpen(false);
  };

  const handleCreate = (createdShirt: formData) => {
    const originalProducts = [...data];
    console.log(createdShirt);
    skirtService
      .create(createdShirt)
      .then((res) => {
        setData([...data, res.data]);
        alert(`Skirt added successfully ${res.statusText}`);
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
            <td colSpan={11} style={{ textAlign: "center", color: "blue" }}>
              Shirts
            </td>
          </tr>
          <tr>
            <th>id</th>
            <th>hips</th>
            <th>waist</th>
            <th>skirt_length</th>
            <th>description</th>
            <th>user</th>
            <th></th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((skirt) => (
            <tr key={skirt.id}>
              <td>{skirt.id}</td>
              <td>{skirt.hips}</td>
              <td>{skirt.waist}</td>
              <td>{skirt.skirt_length}</td>
              <td>{skirt.description}</td>
              <td>{skirt.userId}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => handleClick(skirt)}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => handleDelete(skirt.id)}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isEditPopupOpen && (
        <EditSkirt
          onSave={(data) => handleUpdate(data)}
          skirt={currentSkirt}
          onClose={onClose}
        />
      )}
      {isAddPopupOpen && (
        <AddSkirt onSave={(data) => handleCreate(data)} onClose={onClose} />
      )}
    </>
  );
};

export default Skirt;
