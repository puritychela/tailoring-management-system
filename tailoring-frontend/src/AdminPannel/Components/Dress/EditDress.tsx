import { Button, Input } from "@chakra-ui/react";
import { ChangeEvent, FormEvent, useState } from "react";
import "../../popup.css";
import { dress } from "../../../hooks/useDress";

interface Props {
  dress: dress;
  onClose: () => void;
  onSave: (formData: dress) => void;
}

const EditDress = ({ dress, onClose, onSave }: Props) => {
  const [formData, setFormData] = useState<dress>(dress);
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      onClose();
    }, 400);
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
    <div className="popup-overlay">
      <div className={`popup-content ${closing ? "fade-out" : ""}`}>
        <form onSubmit={handleSubmit}>
          <h2>update dress</h2>

          <div className="mb-1">
            <label htmlFor="hips" className="form-label">
              hips
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
            <label htmlFor="full_length" className="form-label">
              Full Length
            </label>
            <Input
              id="full_length"
              name="full_length"
              value={formData.full_length}
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
            <label htmlFor="shoulder" className="form-label">
              Shoulder
            </label>
            <Input
              id="shoulder"
              name="shoulder"
              value={formData.shoulder}
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
            <label htmlFor="sleeve_length" className="form-label">
              Sleeve Length:
            </label>
            <Input
              id="sleeve_length"
              name="sleeve_length"
              value={formData.sleeve_length}
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
            <label htmlFor="bust" className="form-label">
              Bust
            </label>
            <Input
              id="bust"
              name="bust"
              value={formData.bust}
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

export default EditDress;
