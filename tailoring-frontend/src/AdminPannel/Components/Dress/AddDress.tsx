import { Button } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import "../../popup.css";
import useUsers from "../../../hooks/useUsers";
import { useState } from "react";

const schema = z.object({
  hips: z.number({ invalid_type_error: "hips field is required" }),
  waist: z.number({ invalid_type_error: "hips field is required" }),
  bust: z.number({ invalid_type_error: "price field is required" }),
  full_length: z.number({ invalid_type_error: "price field is required" }),
  shoulder: z.number({ invalid_type_error: "price field is required" }),
  sleeve_length: z.number({ invalid_type_error: "price field is required" }),
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

const AddDress = ({ onClose, onSave }: Props) => {
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
  const { data } = useUsers();

  const handleSave: SubmitHandler<formData> = (data) => {
    onSave(data);
    onClose();
  };

  return (
    <div className="popup-overlay ">
      <div className={`popup-content ${closing ? "fade-out" : ""}`}>
        <form onSubmit={handleSubmit(handleSave)}>
          <h2>Create Dress</h2>

          <div className="mb-2">
            <label htmlFor="hips" className="from-label">
              Hip
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
          <div className="mb-2">
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
          <div className="mb-2">
            <label htmlFor="bust" className="from-label">
              Bust
            </label>
            <input
              {...register("bust", { valueAsNumber: true })}
              id="bust"
              type="number"
              className="form-control"
            />
            {errors.bust && (
              <p className="text-danger">{errors.bust.message}</p>
            )}
          </div>
          <div className="mb-2">
            <label htmlFor="full_length" className="from-label">
              Full Length
            </label>
            <input
              {...register("full_length", { valueAsNumber: true })}
              id="full_length"
              type="number"
              className="form-control"
            />
            {errors.full_length && (
              <p className="text-danger">{errors.full_length.message}</p>
            )}
          </div>

          <div className="mb-2">
            <label htmlFor="shoulder" className="from-label">
              Shoulder
            </label>
            <input
              {...register("shoulder", { valueAsNumber: true })}
              id="shoulder"
              type="number"
              className="form-control"
            />
            {errors.shoulder && (
              <p className="text-danger">{errors.shoulder.message}</p>
            )}
          </div>

          <div className="mb-2">
            <label htmlFor="sleeve_length" className="from-label">
              Sleeve Length:
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

          <div className="mb-2">
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

          <div className="mb-2">
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

export default AddDress;
