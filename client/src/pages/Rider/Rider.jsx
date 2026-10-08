import { useForm, useWatch } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { useLoaderData } from "react-router";
import imgBeARider from "../../assets/agent-pending.png";
import Swal from "sweetalert2";

const Rider = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    control,
    // formState: { error },
  } = useForm();

  const serviceCenters = useLoaderData();

  const regionsDuplicate = serviceCenters.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];
  const yourRegion = useWatch({ control, name: "yourRegion" });

  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  const handleRiderApplication = (data) => {
    console.log(data);
    axiosSecure.post("/riders", data).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title:
            "Your application has been submitted. We will reach to you after 1 working day",
          showConfirmButton: false,
          timer: 2500,
          background: "#03373D",
          color: "#fff",
        });
      }
    });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-4xl text-secondary">Be a Rider</h2>
      <p>
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>
      <form
        onSubmit={handleSubmit(handleRiderApplication)}
        className="mt-8  text-black"
      >
        {/* two colum */}
        <div className="">
          {/* sender details */}
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-12">
            <fieldset className="fieldset ">
              <h4 className="text-2xl font-bold">Tell us about yourself</h4>
              {/* Sender name */}
              <label>Your Name</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Your Name"
                {...register("yourName")}
                defaultValue={user?.displayName}
              />
              {/* Driving License Number */}
              <label>Driving License Number</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Driving License Number"
                {...register("drivingLicense")}
              />
              {/* Sender Email */}
              <label>Your Email</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Your Email"
                {...register("yourEmail")}
                defaultValue={user?.email}
              />

              {/* Your region */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Your Region</legend>
                <select
                  {...register("yourRegion")}
                  defaultValue="Select Your Region"
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

              {/* Your district */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Your District</legend>
                <select
                  {...register("yourDistrict")}
                  defaultValue="Pick a District"
                  className="select"
                >
                  <option disabled={true}>Pick a District</option>

                  {districtsByRegion(yourRegion).map((d, i) => (
                    <option key={i} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </fieldset>

              {/* Your NID */}
              <label className="label mt-4">Your NID </label>
              <input
                type="text"
                className="input w-full"
                placeholder="Your NID"
                {...register("nid")}
              />
              {/* Your Phone no */}
              <label className="label mt-4">Your Phone No.</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Your Phone number"
                {...register("yourPoneNo")}
              />

              {/* Bike Brand Model and Year */}
              <label className="label mt-4">Bike Brand Model and Year</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Bike Brand Model and Year"
                {...register("bikeBrandModelYear")}
              />

              {/* Bike Registration Number */}
              <label className="label mt-4">Bike Registration Number</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Bike Registration Number"
                {...register("bikeRegNumber")}
              />

              {/* Tell Us About Yourself */}
              <label className="label mt-4">Tell Us About Yourself</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Tell Us About Yourself"
                {...register("tellUsYourself")}
              />
            </fieldset>

            {/* Receiver Details */}
            <div className="text-center">
              <img className="inline-block " src={imgBeARider} alt="" />
            </div>
          </div>

          {/* receiver info */}
          <div></div>
        </div>
        <input
          type="submit"
          className="btn btn-primary text-black "
          value="Submit Application"
        />
      </form>
    </div>
  );
};

export default Rider;
