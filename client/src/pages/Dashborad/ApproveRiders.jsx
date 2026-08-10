import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaEye, FaTrashAlt, FaUserCheck, FaUserMinus } from "react-icons/fa";
import Swal from "sweetalert2";
import { useRef, useState } from "react";

const ApproveRiders = () => {
  const axiosSecure = useAxiosSecure();
  const approvalModalRef = useRef(null);
  const [selectRider, setSelectRider] = useState(null);
  const { refetch, data: riders = [] } = useQuery({
    queryKey: ["riders", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders");
      return res.data;
    },
  });

  const updateRiderStatus = (rider, status) => {
    const updateInfo = { status: status, email: rider.yourEmail };
    axiosSecure.patch(`/riders/${rider._id}`, updateInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Rider status is set to ${status}`,
          showConfirmButton: false,
          timer: 2500,
          background: "#03373D",
          color: "#fff",
        });
      }
    });
  };

  const handleApprovalDetails = (rider) => {
    setSelectRider(rider);
    approvalModalRef.current.showModal();
  };

  const handleApproval = (rider) => {
    updateRiderStatus(rider, "approved");
  };

  const handleRejection = (rider) => {
    updateRiderStatus(rider, "rejected");
  };

  const handleDeleteRider = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/riders/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount) {
            // refresh the data
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Pending for approval rider has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <dialog ref={approvalModalRef} className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">{selectRider?.yourName}</h3>

          <p className=""> {selectRider?.yourRegion}</p>
          <p className="">Rider District: {selectRider?.yourDistrict}</p>
          <p className="">Rider NID: {selectRider?.nid}</p>
          <p className="">Rider Phone NO.: {selectRider?.yourPoneNo}</p>
          <p className="">
            Rider Bike Model: {selectRider?.bikeBrandModelYear}
          </p>
          <p className="">
            Rider Bike Reg Number: {selectRider?.bikeRegNumber}
          </p>
          <p className="">Rider Info: {selectRider?.tellUsYourself}</p>
          <p className="">Rider Status: {selectRider?.status}</p>
        </div>
      </dialog>

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
              <th>District</th>
              <th>Application Status</th>
              <th>Work Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {riders.map((rider, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{rider.yourName}</td>
                <td>{rider.yourEmail}</td>
                <td>{rider.yourDistrict}</td>
                <td>
                  <span
                    className={`badge                  
                      ${
                        rider.status === "pending"
                          ? "badge-warning"
                          : rider.status === "rejected"
                            ? "badge-error"
                            : "badge-success"
                      }`}
                  >
                    {rider.status}
                  </span>
                </td>
                <td>{rider.workStatus}</td>

                <td className="space-x-1">
                  <button
                    onClick={() => handleApprovalDetails(rider)}
                    className="btn btn-neutral btn-outline"
                  >
                    <FaEye size={16} />
                  </button>
                  <button
                    onClick={() => handleApproval(rider)}
                    className="btn btn-neutral btn-outline"
                  >
                    <FaUserCheck size={16} />
                  </button>
                  <button
                    onClick={() => handleRejection(rider)}
                    className="btn btn-secondary btn-outline"
                  >
                    <FaUserMinus size={16} />
                  </button>
                  <button
                    onClick={() => handleDeleteRider(rider._id)}
                    className="btn btn-error btn-outline"
                  >
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
