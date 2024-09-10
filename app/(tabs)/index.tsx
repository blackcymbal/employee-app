import AppBar from "@/components/common/AppBar";
import BasicInfoForm from "@/components/employee/BasicInfoForm";
import { Box } from "native-base";

export default function HomeScreen() {
  return (
    <Box flex={1}>
      <AppBar title="Basic Informations" />
      <BasicInfoForm />
    </Box>
  );
}
