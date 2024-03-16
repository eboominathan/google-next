"use client";

import { useEffect } from "react";

export default function Error({error,reset}) {
  useEffect(() => {
    console.log(error);
  },[error]);
  return (
    <div className="flex flex-col jsutify-center items-center pt-10 ">
      <h1>Something went wrong!</h1>
      <button className="text-blue-500">Try Again</button>
    </div>
  )
}
