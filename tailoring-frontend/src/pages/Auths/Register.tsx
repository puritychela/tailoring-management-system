import { useState } from "react";
import "./register.css";
import { Button, HStack, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import authService, { registerUser } from "../../shared/services/authService";
import { NavLink, useNavigate } from "react-router-dom";

const RegisterComponent = () => {
  const { register, handleSubmit } = useForm<registerUser>();
  const [gender, setSelectedGender] = useState("");
  const navigate = useNavigate();

  const onSubmit = (data: registerUser) => {
    authService
      .registerUser({ ...data, gender })
      .then((res) => {
        alert(`regitered successful ${res.status}`);
        navigate("/login");
      })
      .catch((err) => {
        alert(`Error registering:${err.message}`);
      });
    console.log({ ...data, gender: gender });
  };

  return (
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
          <NavLink
            to="/login"
            style={{ color: "blue", textDecoration: "none" }}
          >
            Login{" "}
          </NavLink>
        </HStack>
      </form>
    </div>
  );
};

export default RegisterComponent;
