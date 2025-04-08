import { Button, Input } from "@chakra-ui/react";
import { ChangeEvent, FormEvent, useState } from "react";
import "../../popup.css";
import { Trouser } from "../../../hooks/useTrouser";

interface Props {
  trouser: Trouser;
  onClose: () => void;
  onSave: (formData: Trouser) => void;
}

const EditTrouser = ({ trouser, onClose, onSave }: Props) => {
  const [formData, setFormData] = useState<Trouser>(trouser);
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      onClose();
    }, 400); // match animation duration
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSave(formData);
    handleClose();
  };

  return (
    <div className="popup-overlay ">
      <div className={`popup-content ${closing ? "fade-out" : ""}`}>
        <form onSubmit={handleSubmit}>
          <h2>update Trouser</h2>
          <div className="mb-1">
            <label htmlFor="Kneel" className="form-label">
              Kneel
            </label>
            <Input
              id="Kneel"
              name="Kneel"
              value={formData.Kneel}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-1">
            <label htmlFor="height" className="form-label">
              Height
            </label>
            <Input
              id="height"
              name="height"
              value={formData.height}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-1">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <Input
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-1">
            <label htmlFor="hips" className="form-label">
              Hips
            </label>
            <Input
              id="hips"
              name="hips"
              value={formData.hips}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-1">
            <label htmlFor="userId" className="form-label">
              User
            </label>
            <Input
              id="userId"
              name="userId"
              value={formData.userId}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-1">
            <label htmlFor="waist" className="form-label">
              Waist
            </label>
            <Input
              id="waist"
              name="waist"
              value={formData.waist}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-1">
            <label htmlFor="thigh" className="form-label">
              Thigh
            </label>
            <Input
              id="thigh"
              name="thigh"
              value={formData.thigh}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-1">
            <label htmlFor="leg_opening" className="form-label">
              Leg Opening
            </label>
            <Input
              id="leg_opening"
              name="leg_opening"
              value={formData.leg_opening}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="d-flex justify-content-between">
            <Button
              marginRight="40x"
              fontSize="xl"
              colorScheme="blue"
              type="submit"
            >
              save
            </Button>
            <Button
              fontSize="xl"
              colorScheme="blue"
              className="close-button"
              onClick={() => handleClose()}
            >
              close
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTrouser;
