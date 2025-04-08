import { Button } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import "../../popup.css";
import useUsers from "../../../hooks/useUsers";
import { useState } from "react";

const schema = z.object({
  waist: z.number({ invalid_type_error: "userId field is required" }),
  hips: z.number({ invalid_type_error: "userId field is required" }),
  skirt_length: z.number({ invalid_type_error: "userId field is required" }),
  userId: z.number({ invalid_type_error: "user field is required" }),
  description: z
    .string()
    .min(10, { message: "description must be atleast 10 characters" }),
});

export type formData = z.infer<typeof schema>;

interface Props {
  onClose: () => void;
  onSave: (data: formData) => void;
}

const AddSkirt = ({ onClose, onSave }: Props) => {
  const { data } = useUsers();
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      onClose();
    }, 400);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({
    resolver: zodResolver(schema),
  });

  const handleSave: SubmitHandler<formData> = (data) => {
    onSave(data);
    handleClose();
  };

  return (
    <div className="popup-overlay ">
      <div className={`popup-content ${closing ? "fade-out" : ""}`}>
        <form onSubmit={handleSubmit(handleSave)}>
          <h2>Create Skirt</h2>

          <div className="mb-3">
            <label htmlFor="waist" className="from-label">
              Waist
            </label>
            <input
              {...register("waist", { valueAsNumber: true })}
              id="waist"
              type="number"
              className="form-control"
            />
            {errors.waist && (
              <p className="text-danger">{errors.waist.message}</p>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="hips" className="from-label">
              Hips
            </label>
            <input
              {...register("hips", { valueAsNumber: true })}
              id="hips"
              type="number"
              className="form-control"
            />
            {errors.hips && (
              <p className="text-danger">{errors.hips.message}</p>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="skirt_length" className="from-label">
              Skirt Length
            </label>
            <input
              {...register("skirt_length", { valueAsNumber: true })}
              id="skirt_length"
              type="number"
              className="form-control"
            />
            {errors.skirt_length && (
              <p className="text-danger">{errors.skirt_length.message}</p>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="from-label">
              Description
            </label>
            <input
              {...register("description")}
              id="description"
              type="text"
              className="form-control"
            />
            {errors.description && (
              <p className="text-danger">{errors.description.message}</p>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="userId" className="from-label">
              User
            </label>
            <select
              className="form-select"
              {...register("userId", { valueAsNumber: true })}
            >
              <option value="">Select category</option>
              {data.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.username}
                </option>
              ))}
            </select>
            {errors.userId && (
              <p className="text-danger">{errors.userId.message}</p>
            )}
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

export default AddSkirt;
