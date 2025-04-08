import { Button } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import "../../popup.css";
import useUsers from "../../../hooks/useUsers";
import { useState } from "react";

const schema = z.object({
  sleeve_length: z.number({
    invalid_type_error: "sleeve_length field is required",
  }),
  waist: z.number({ invalid_type_error: "price field is required" }),
  collar: z.number({ invalid_type_error: "price field is required" }),
  chest: z.number({ invalid_type_error: "price field is required" }),
  front_length: z.number({ invalid_type_error: "price field is required" }),
  description: z
    .string()
    .min(10, { message: "description must be atleast 10 characters" }),
  userId: z.number({ invalid_type_error: "price field is required" }),
});

export type formData = z.infer<typeof schema>;

interface Props {
  onClose: () => void;
  onSave: (data: formData) => void;
}

const AddShirt = ({ onClose, onSave }: Props) => {
  const { data } = useUsers();
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      onClose();
    }, 400); // match animation duration
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
          <h2>Create Shirt</h2>
          <div className="mb-3">
            <label htmlFor="sleeve_length" className="from-label">
              sleeve_length
            </label>
            <input
              {...register("sleeve_length", { valueAsNumber: true })}
              id="sleeve_length"
              type="number"
              className="form-control"
            />
            {errors.sleeve_length && (
              <p className="text-danger">{errors.sleeve_length.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="collar" className="from-label">
              collar
            </label>
            <input
              {...register("collar", { valueAsNumber: true })}
              id="collar"
              type="number"
              className="form-control"
            />
            {errors.collar && (
              <p className="text-danger">{errors.collar.message}</p>
            )}
          </div>
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
            <label htmlFor="chest" className="from-label">
              chest
            </label>
            <input
              {...register("chest", { valueAsNumber: true })}
              id="chest"
              type="number"
              className="form-control"
            />
            {errors.chest && (
              <p className="text-danger">{errors.chest.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="front_length" className="from-label">
              front_length
            </label>
            <input
              {...register("front_length", { valueAsNumber: true })}
              id="front_length"
              type="number"
              className="form-control"
            />
            {errors.front_length && (
              <p className="text-danger">{errors.front_length.message}</p>
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
              Category Id
            </label>
            <select
              className="form-select"
              {...register("userId", { valueAsNumber: true })}
            >
              <option value="">Select user</option>
              {data.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.username}
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

export default AddShirt;
