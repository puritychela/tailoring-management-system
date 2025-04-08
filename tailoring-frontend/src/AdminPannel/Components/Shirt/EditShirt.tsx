import { Button, Input } from "@chakra-ui/react";
import { ChangeEvent, FormEvent, useState } from "react";
import "../../popup.css";
import { shirt } from "../../../hooks/useShirt";

interface Props {
  shirt: shirt;
  onClose: () => void;
  onSave: (formData: shirt) => void;
}

const UpdateProduct = ({ shirt, onClose, onSave }: Props) => {
  const [formData, setFormData] = useState<shirt>(shirt);
  const [closing, setClosing] = useState(false);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      onClose();
    }, 400);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSave(formData);
    handleClose();
  };

  return (
    <div className={`popup-overlay`}>
      <div className={`popup-content ${closing ? "fade-out" : ""}`}>
        <form onSubmit={handleSubmit}>
          <h2>update products</h2>
          <div className="mb-3">
            <label htmlFor="sleeve_length" className="form-label">
              Sleeve Length
            </label>
            <Input
              id="sleeve_length"
              name="sleeve_length"
              value={formData.sleeve_length}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="collar" className="form-label">
              Collar
            </label>
            <Input
              id="collar"
              name="collar"
              value={formData.collar}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="chest" className="form-label">
              Chest
            </label>
            <Input
              id="chest"
              name="chest"
              value={formData.chest}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
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

          <div className="mb-3">
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

          <div className="mb-3">
            <label htmlFor="date" className="form-label">
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

export default UpdateProduct;
