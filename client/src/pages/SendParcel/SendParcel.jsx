import React from "react";
import { useForm } from "react-hook-form";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    formState: { error },
  } = useForm();

  const handleSendParcel = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h2 className="text-4xl font-bold">Send Parcel</h2>
      <form
        onSubmit={handleSubmit(handleSendParcel)}
        className="mt-8 p-4 text-black"
      >
        {/* parcel type */}
        <div>
          <label className="label mr-5">
            <input
              type="radio"
              value="document"
              className="radio "
              defaultChecked
              {...register("parcelType")}
            />{" "}
            Document
          </label>
          <label className="label">
            <input
              type="radio"
              value="non-document"
              className="radio"
              {...register("parcelType")}
            />{" "}
            Non-document
          </label>
        </div>
        {/* parcel info: Name, weight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
          <fieldset className="fieldset">
            <label>Parcel name</label>
            <input
              type="text"
              className="input"
              placeholder="Parcel name"
              {...register("parcelName")}
            />
          </fieldset>
          <fieldset className="fieldset">
            <label>Parcel weight</label>
            <input
              type="text"
              className="input"
              placeholder="Parcel weight"
              {...register("parcelWeight")}
            />
          </fieldset>
        </div>

        {/* two colum */}
        <div>
          {/* sender info */}
          <div></div>

          {/* receiver info */}
          <div></div>
        </div>
        <input
          type="submit"
          className="btn btn-primary text-black "
          value="Send Parcel"
        />
      </form>
    </div>
  );
};

export default SendParcel;
