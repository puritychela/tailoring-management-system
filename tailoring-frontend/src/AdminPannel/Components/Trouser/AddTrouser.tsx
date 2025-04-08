import { Button } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import "../../popup.css";
import useUsers from "../../../hooks/useUsers";
import { useState } from "react";

const schema = z.object({
  waist: z.number({ invalid_type_error: "waist field is required" }),
  hips: z.number({ invalid_type_error: "hips field is required" }),
  thigh: z.number({ invalid_type_error: "thigh field is required" }),
  Kneel: z.number({ invalid_type_error: "kneel field is required" }),
  leg_opening: z.number({
    invalid_type_error: "leg opening field is required",
  }),
  height: z.number({ invalid_type_error: "height field is required" }),
  description: z
    .string()
    .min(10, { message: "description must be atleast 10 characters" }),
  userId: z.number({ invalid_type_error: "user field is required" }),
});

export type formData = z.infer<typeof schema>;

interface Props {
  onClose: () => void;
  onSave: (data: formData) => void;
}

const AddTrouser = ({ onClose, onSave }: Props) => {
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
    onClose();
  };

  return (
    <div className="popup-overlay ">
      <div className={`popup-content ${closing ? "fade-out" : ""}`}>
        <form onSubmit={handleSubmit(handleSave)}>
          <h2>Create products</h2>

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
            <label htmlFor="thigh" className="from-label">
              Thigh
            </label>
            <input
              {...register("thigh", { valueAsNumber: true })}
              id="thigh"
              type="number"
              className="form-control"
            />
            {errors.thigh && (
              <p className="text-danger">{errors.thigh.message}</p>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="Kneel" className="from-label">
              Kneel
            </label>
            <input
              {...register("Kneel", { valueAsNumber: true })}
              id="Kneel"
              type="number"
              className="form-control"
            />
            {errors.Kneel && (
              <p className="text-danger">{errors.Kneel.message}</p>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="leg_opening" className="from-label">
              Leg Opening
            </label>
            <input
              {...register("leg_opening", { valueAsNumber: true })}
              id="leg_opening"
              type="number"
              className="form-control"
            />
            {errors.leg_opening && (
              <p className="text-danger">{errors.leg_opening.message}</p>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="height" className="from-label">
              Height
            </label>
            <input
              {...register("height", { valueAsNumber: true })}
              id="height"
              type="number"
              className="form-control"
            />
            {errors.height && (
              <p className="text-danger">{errors.height.message}</p>
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
              user
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

export default AddTrouser;
