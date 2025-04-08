import { useState } from "react";
import "../../../pages/Auths/Register.css";
import { Button, HStack, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import authService, {
  registerUser,
} from "../../../shared/services/authService";
import "../../Components/registerUser/pop.css";

interface Props {
  onClose: () => void;
}

const RegisterComponent = ({ onClose }: Props) => {
  const { register, handleSubmit } = useForm<registerUser>();
  const [gender, setSelectedGender] = useState("");

  const onSubmit = (data: registerUser) => {
    authService
      .registerUser({ ...data, gender })
      .then((res) => {
        alert(`regitered successful ${res.status}`);
        onClose();
      })
      .catch((err) => {
        alert(`Error registering:${err.message}`);
      });
    console.log({ ...data, gender: gender });
  };

  return (
    <div className="popup-overlay ">
      <div className={`popup-content`}>
        <div className="register-form-container bg-dark ">
          <form className=" register-form" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="mb-2 text-center">Register</h2>

            <Input
              {...register("username", { required: true, minLength: 3 })}
              className=" input-field"
              type="text"
              placeholder="Username"
            />
            <Input
              {...register("email", { required: true, minLength: 8 })}
              className="input-field"
              type="text"
              placeholder="Email"
            />
            <Input
              {...register("password", { required: true, minLength: 8 })}
              className="input-field"
              type="password"
              placeholder="Password"
            />
            <Input
              {...register("phone", { required: true, minLength: 10 })}
              className="input-field"
              type="text"
              placeholder="Phone Number"
            />
            <Input
              {...register("address", { required: true, minLength: 5 })}
              className="input-field"
              type="text"
              placeholder="Address"
            />

            <div className="mb-3">
              <select
                className="form-select"
                onChange={(event) => setSelectedGender(event.target.value)}
              >
                <option value="">select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <HStack justifyContent="space-between">
              <Button type="submit" colorScheme="blue">
                Register
              </Button>
              <Button onClick={onClose}>close</Button>
            </HStack>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
