import AppBar from "@/components/common/AppBar";
import AllInfoPreview from "@/components/employee/AllInfoPreview";

import { Box } from "native-base";
import React from "react";

export default function Preview() {
  return (
    <Box flex={1}>
      <AppBar title="Employee Info Preview" isBackButton={true} />
      <AllInfoPreview />
    </Box>
  );
}
