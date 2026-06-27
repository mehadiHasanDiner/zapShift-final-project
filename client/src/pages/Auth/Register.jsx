import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegistration = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleRegistration)}>
        <fieldset className="fieldset">
          {/* email */}
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email?.type === "required" && (
            <p className="text-red-600">Email is required</p>
          )}
          {/* password */}
          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            placeholder="Password"
            {...register("password", {
              required: true,
              minLength: 6,
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#^()_\-+=])[A-Za-z\d@$!%*?&.#^()_\-+=]{8,}$/,
            })}
          />
          {errors.password?.type === "required" && (
            <p className="text-red-600">Password is required</p>
          )}

          {errors.password?.type === "minLength" && (
            <p className="text-red-600">
              Password must be 6 characters or longer
            </p>
          )}

          {errors.password?.type === "pattern" && (
            <p className="text-red-600">
              Password must contain at least 1 uppercase, 1 lowercase, 1 number,
              1 special character and be at least 8 characters long.
            </p>
          )}

          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Register </button>
          <button className="btn btn-neutral mt-4">Register </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
