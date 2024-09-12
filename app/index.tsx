import LoginInputs from "@/components/auth/LoginInputs";
import { Box } from "native-base";
import React from "react";

export default function LoginScreen() {
  return (
    <Box flex={1} alignItems={"center"} justifyContent={"center"}>
      <LoginInputs />
    </Box>
  );
}
