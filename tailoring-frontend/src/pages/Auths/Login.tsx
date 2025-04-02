// Frontend/frontend/src/components/Auth/Login.component.jsx
import { Input, HStack, Button } from "@chakra-ui/react";
import authService, { Login } from "../../shared/services/authService";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";

function LoginComponent() {
  const { register, handleSubmit } = useForm<Login>();
  const navigate = useNavigate();
  const onSubmit = (data: Login) => {
    authService
      .login({ ...data })
      .then((res) => {
        const { user, token } = res.data;

        // Store in local storage
        localStorage.setItem("user", JSON.stringify(user)); // Store user object as string
        localStorage.setItem("userId", user.id); // Store user ID
        localStorage.setItem("token", token); // Store token
        alert(`login successful ${res.status}`);
        if (user.isAdmin) return navigate("/admin");
        return navigate("/");
        // console.log(res);
      })
      .catch((err) => {
        alert(`Invalid credentials:${err.message}`);
      });
    // console.log({ ...data });
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
          {...register("password", { required: true, minLength: 8 })}
          className="input-field"
          type="password"
          placeholder="Password"
        />

        <HStack justifyContent="space-between">
          <Button type="submit" colorScheme="blue">
            Login
          </Button>
          <NavLink
            to="/register"
            style={{ color: "blue", textDecoration: "none" }}
          >
            Register
          </NavLink>
        </HStack>
      </form>
    </div>
  );
}

export default LoginComponent;
