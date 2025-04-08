import { Button, Input } from "@chakra-ui/react";
import { ChangeEvent, FormEvent, useState } from "react";
import "../../popup.css";
import { skirt } from "../../../hooks/useSkirt";
interface Props {
  skirt: skirt;
  onClose: () => void;
  onSave: (formData: skirt) => void;
}

const EditSkirt = ({ skirt, onClose, onSave }: Props) => {
  const [formData, setFormData] = useState<skirt>(skirt);
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
    onClose();
  };

  return (
    <div className="popup-overlay ">
      <div className={`popup-content ${closing ? "fade-out" : ""}`}>
        <form onSubmit={handleSubmit}>
          <h2>update products</h2>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              waist
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
            <label htmlFor="hips" className="form-label">
              Hips
            </label>
            <Input
              id="hips"
              name="hips"
              value={formData.skirt_length}
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
            <label htmlFor="skirt_length" className="form-label">
              skirt_length
            </label>
            <Input
              id="skirt_length"
              name="skirt_length"
              value={formData.skirt_length}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="userId" className="form-label">
              user
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

export default EditSkirt;
