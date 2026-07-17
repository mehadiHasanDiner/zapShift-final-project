import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaTrashAlt, FaUserCheck, FaUserMinus } from "react-icons/fa";
import Swal from "sweetalert2";

const ApproveRiders = () => {
  const axiosSecure = useAxiosSecure();
  const { data: riders = [] } = useQuery({
    queryKey: ["riders", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders");
      return res.data;
    },
  });

  const handleApproval = (id) => {
    console.log(id);
    const updateInfo = { status: "approved" };
    axiosSecure.patch(`/riders/${id}`, updateInfo).then((res) => {
      if (res.data.modifiedCount) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Rider has been approved",
          showConfirmButton: false,
          timer: 2500,
          background: "#03373D",
          color: "#fff",
        });
      }
    });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold">
        {" "}
        Riders Pending Approval: {riders.length}{" "}
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>District</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {riders.map((rider, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{rider.yourName}</td>
                <td>{rider.yourEmail}</td>
                <td>
                  <span
                    className={
                      rider.status === "pending"
                        ? "badge badge-warning"
                        : "badge badge-success"
                    }
                  >
                    {rider.status}
                  </span>
                </td>
                <td>{rider.yourDistrict}</td>
                <td className="space-x-1">
                  <button
                    onClick={() => handleApproval(rider._id)}
                    className="btn btn-neutral btn-outline"
                  >
                    <FaUserCheck size={16} />
                  </button>
                  <button className="btn btn-secondary btn-outline">
                    <FaUserMinus size={16} />
                  </button>
                  <button className="btn btn-error btn-outline">
                    <FaTrashAlt size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApproveRiders;
