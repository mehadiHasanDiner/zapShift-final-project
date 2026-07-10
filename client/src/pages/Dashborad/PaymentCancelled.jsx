import React from "react";
import { Link } from "react-router";

const PaymentCancelled = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">
        Payment is cancelled. Please try again
      </h2>
      <Link to="/dashboard/my-parcels" className="btn btn-secondary">
        Try Again
      </Link>
    </div>
  );
};

export default PaymentCancelled;
