import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { error },
  } = useForm();
  const serviceCenters = useLoaderData();
  const regionsDuplicate = serviceCenters.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];
  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });

  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  const handleSendParcel = (data) => {
    console.log(data);
    const sameDistrict = data.senderDistrict === data.receiverDistrict;
    console.log(sameDistrict);
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
              className="input w-full"
              placeholder="Parcel name"
              {...register("parcelName")}
            />
          </fieldset>
          <fieldset className="fieldset">
            <label>Parcel weight</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Parcel weight"
              {...register("parcelWeight")}
            />
          </fieldset>
        </div>

        {/* two colum */}
        <div>
          {/* sender details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <fieldset className="fieldset">
              <h4 className="text-2xl font-bold">Sender Details</h4>
              {/* Sender name */}
              <label>Sender Name</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Sender Name"
                {...register("senderName")}
              />
              {/* Sender Email */}
              <label>Sender Email</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Sender Email"
                {...register("senderEmail")}
              />

              {/* sender region */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Sender Regions</legend>
                <select
                  {...register("senderRegion")}
                  defaultValue="Pick a Region"
                  className="select"
                >
                  <option disabled={true}>Pick a region</option>

                  {regions.map((d, i) => (
                    <option key={i} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </fieldset>

              {/* sender districts */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Sender District</legend>
                <select
                  {...register("senderDistrict")}
                  defaultValue="Pick a District"
                  className="select"
                >
                  <option disabled={true}>Pick a District</option>

                  {districtsByRegion(senderRegion).map((d, i) => (
                    <option key={i} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </fieldset>

              {/* Sender address */}
              <label className="label mt-4">Sender Address</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Sender address"
                {...register("senderAddress")}
              />
              {/* Sender Phone no */}
              <label className="label mt-4">Sender Phone No.</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Sender Phone number"
                {...register("senderPoneNo")}
              />

              {/* Pickup Instruction */}
              <label className="label mt-4">Pickup instruction</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Pick up instruction"
                {...register("pickUpInstruction")}
              />
            </fieldset>

            {/* Receiver Details */}
            <fieldset className="fieldset">
              <h4 className="text-2xl font-bold">Receiver Details</h4>

              {/* Receiver name */}
              <label>Receiver Name</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Receiver Name"
                {...register("receiverName")}
              />
              {/* Receiver Email */}
              <label>Receiver Email</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Receiver Email"
                {...register("receiverEmail")}
              />

              {/* receiver region */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Receiver Regions</legend>
                <select
                  {...register("receiverRegion")}
                  defaultValue="Pick a Region"
                  className="select"
                >
                  <option disabled={true}>Pick a region</option>

                  {regions.map((d, i) => (
                    <option key={i} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </fieldset>

              {/* receiver districts */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Receiver District</legend>
                <select
                  {...register("receiverDistrict")}
                  defaultValue="Pick a District"
                  className="select"
                >
                  <option disabled={true}>Pick a District</option>

                  {districtsByRegion(receiverRegion).map((d, i) => (
                    <option key={i} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </fieldset>

              {/* receiver address */}
              <label className="label mt-4">Receiver Address</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Receiver address"
                {...register("receiverAddress")}
              />
              {/* receiver Phone no */}
              <label className="label mt-4">Receiver Phone No.</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Receiver Phone number"
                {...register("receiverPoneNo")}
              />

              {/* Pickup Instruction */}
              <label className="label mt-4">Receive instruction</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Receive instruction"
                {...register("ReceiveInstruction")}
              />
            </fieldset>
          </div>

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
