import AppBar from "@/components/common/AppBar";
import SkillsInfoForm from "@/components/employee/SkillsInfoForm";
import { Box } from "native-base";
import React from "react";

export default function SkillsScreen() {
  return (
    <Box flex={1}>
      <AppBar title="Skills Informations" isBackButton={true} />
      <SkillsInfoForm />
    </Box>
  );
}
