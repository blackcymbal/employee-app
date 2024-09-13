import AppBar from "@/components/common/AppBar";
import EmployeeList from "@/components/employee/EmployeeList";
import { resetAllInfo } from "@/store/slices/employee/employeeInfoSlice";
import {
  EmployeeTypes,
  useFetchEmployeesQuery,
} from "@/store/slices/employee/employeeListApi";
import { useAppDispatch } from "@/store/store";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Box, Button, Icon, Spinner } from "native-base";
import React from "react";

export default function EmployeeListScreen() {
  const { data: employees, error, isLoading } = useFetchEmployeesQuery();

  const dispatch = useAppDispatch();

  const handlePress = () => {
    dispatch(resetAllInfo({}));
    router.push("/(tabs)");
  };

  return (
    <Box flex={1}>
      <AppBar title="Employee List" />
      <Button
        width={"50%"}
        alignSelf="center"
        marginTop={2}
        leftIcon={<Icon as={MaterialIcons} name="add" size="md" />}
        onPress={handlePress}
      >
        ADD EXPLOYEE
      </Button>

      {isLoading ? (
        <Box flex={1} justifyContent="center">
          <Spinner size="lg" />
        </Box>
      ) : (
        <EmployeeList employees={employees?.data as EmployeeTypes[]} />
      )}
    </Box>
  );
}
