import { Spinner } from "@chakra-ui/react";
import React from "react";

function LoadingSpinner() {
  return (
    <div
      style={{
        width: "80vw",
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </div>
  );
}

export default LoadingSpinner;
