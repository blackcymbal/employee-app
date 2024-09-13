import { changeAllInfo } from "@/store/slices/employee/employeeInfoSlice";
import { EmployeeTypes } from "@/store/slices/employee/employeeListApi";
import { useAppDispatch } from "@/store/store";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Avatar, Box, Icon, Text } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";

type EachEmployeeTypes = {
  employee: EmployeeTypes;
};

export default function EachEmployee({ employee }: EachEmployeeTypes) {
  const dispatch = useAppDispatch();

  const handlePress = () => {
    const [firstName, lastName] = employee.employee_name.split(" ");

    const employeeInfo = {
      id: employee.id,
      firstName: firstName,
      lastName: lastName,
      salary: employee.employee_salary,
    };

    dispatch(changeAllInfo(employeeInfo));
    router.navigate("/(tabs)");
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <Box flexDirection="row" justifyContent="center">
        <Box flex={1}>
          <Avatar
            bg="cyan.500"
            source={{
              uri:
                employee.profile_image.length !== 0
                  ? employee.profile_image
                  : undefined,
            }}
          >
            <Icon as={<MaterialIcons name="person" />} size={7} color="white" />
          </Avatar>
        </Box>

        <Box flex={3}>
          <Text fontWeight="semibold" fontSize="lg">
            {employee.employee_name}
          </Text>
          <Text fontWeight="medium" color="gray.600">
            Age: {employee.employee_age}
          </Text>
        </Box>
        <Box flex={2} alignItems="flex-end">
          <Text fontWeight="medium" color="gray.600">
            Salary
          </Text>
          <Text fontWeight="semibold">${employee.employee_salary}</Text>
        </Box>
      </Box>
      <Box height="1px" backgroundColor="gray.400" mt={4} />
    </TouchableOpacity>
  );
}
