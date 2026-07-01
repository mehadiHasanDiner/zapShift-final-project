import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "./SocialLogin";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const Register = () => {
  const { registerUser, updateUserProfile } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegistration = (data) => {
    const profileImage = data.photo[0];
    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);

        // 1. store the image in form data and get the photo url
        const formData = new FormData();
        formData.append("image", profileImage);
        const image_API_Url = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMAGE_HOST_KEY
        }`;

        // 2. send the photo to store and get the url
        axios.post(image_API_Url, formData).then((res) => {
          console.log("after image upload", res.data.data.url);

          //3. update user profile to firebase
          const userProfile = {
            displayName: data.name,
            photoURL: res.data.data.url,
          };
          updateUserProfile(userProfile)
            .then(() => {
              console.log("user profile updated successfully");
              navigate(location.state || "/");
            })
            .catch((err) => console.log(err.message));
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <h3 className="text-3xl text-center mt-4"> Welcome to Zap Shift</h3>
      <p className="text-center">Please Register</p>
      <div className="card-body">
        <form onSubmit={handleSubmit(handleRegistration)}>
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Email</label>
            <input
              type="text"
              className="input"
              placeholder="Your Name"
              {...register("name", { required: true })}
            />
            {errors.name?.type === "required" && (
              <p className="text-red-600">Name is required</p>
            )}
            {/* photo */}
            <label className="label">Photo</label>
            <input
              type="file"
              className="file-input"
              placeholder="Your Photo"
              {...register("photo", { required: true })}
            />
            {errors.photo?.type === "required" && (
              <p className="text-red-600">Photo is required</p>
            )}
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
                Password must contain at least 1 uppercase, 1 lowercase, 1
                number, 1 special character and be at least 8 characters long.
              </p>
            )}

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral my-2">Register </button>
          </fieldset>
          <p className="text-center ">
            Already have an account. Please{" "}
            <Link
              state={location?.state}
              to="/login"
              className="text-blue-700 cursor-pointer"
            >
              Login
            </Link>
          </p>
        </form>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Register;
