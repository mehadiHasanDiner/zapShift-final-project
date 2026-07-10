import React, { useEffect } from "react";
import { useSearchParams } from "react-router";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  console.log(sessionId);

  useEffect(() => {
    if (sessionId) {
    }
  }, []);
  return (
    <div>
      <h2 className="text-4xl text-secondary text-center font-bold ">
        Payment Successful 😎👌👏
      </h2>
    </div>
  );
};

export default PaymentSuccess;
