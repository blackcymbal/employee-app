import LoginInputs from "@/components/auth/LoginInputs";
import { Box } from "native-base";
import React, { useState } from "react";

export default function LoginScreen() {
  const [value, setValue] = useState("");

  console.log("value>>>>>>>", value);
  return (
    <Box flex={1} alignItems={"center"} justifyContent={"center"}>
      <LoginInputs />
    </Box>
  );
}
