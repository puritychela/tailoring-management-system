import { useState } from "react";
import useTrouser, { Trouser } from "../../../hooks/useTrouser";
import trouserService from "../../../shared/services/trouserService";
import AddTrouser, { formData } from "./AddTrouser";
import EditTrouser from "./EditTrouser";

const TrouserComponent = () => {
  const { data, setData, setError } = useTrouser();
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [currentTrouser, setCurrentTrouser] = useState<Trouser>({
    id: 0,
    waist: 0,
    hips: 0,
    thigh: 0,
    Kneel: 0,
    leg_opening: 0,
    height: 0,
    description: "",
    userId: 0,
  });

  const handleClick = (skirt: Trouser) => {
    setCurrentTrouser(skirt);
    setIsEditPopupOpen(true);
  };

  const handleUpdate = (ShirtData: Trouser) => {
    const originalProducts = [...data];

    setData(data.map((p) => (p.id === ShirtData.id ? ShirtData : p)));
    console.log(ShirtData);
    trouserService
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

  const onClose = () => {
    setIsEditPopupOpen(false);
    setIsAddPopupOpen(false);
  };

  const handleCreate = (createdShirt: formData) => {
    const originalProducts = [...data];
    console.log(createdShirt);
    trouserService
      .create(createdShirt)
      .then((res) => {
        setData([...data, res.data]);
        alert(`Trouser added successfully ${res.statusText}`);
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
            <th>height</th>
            <th>leg_opening</th>
            <th>Kneel</th>
            <th>thigh</th>
            <th>description</th>
            <th>user</th>
            <th>edit</th>
            <th>delete</th>
          </tr>
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
                <button
                  className="btn btn-outline-primary"
                  onClick={() => handleClick(trouser)}
                >
                  edit
                </button>
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
      {isEditPopupOpen && (
        <EditTrouser
          trouser={currentTrouser}
          onClose={onClose}
          onSave={(data) => handleUpdate(data)}
        />
      )}
      {isAddPopupOpen && (
        <AddTrouser onSave={(data) => handleCreate(data)} onClose={onClose} />
      )}
    </>
  );
};

export default TrouserComponent;
