"use client";
import { useEffect } from "react";

interface Props {
  error: Error;
  reset: () => void;
}

const Error = ({ error, reset }: Props) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center mt-10 ">
      <h1>Something went wrong!</h1>
      <button
        className="hover:text-amber-600 mt-3"
        type="button"
        onClick={reset}
      >
        Try Again!
      </button>
    </div>
  );
};

export default Error;
