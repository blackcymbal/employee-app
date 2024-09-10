import { EmployeeTypes } from "@/store/slices/employee/employeeListApi";
import { MaterialIcons } from "@expo/vector-icons";
import { Avatar, Box, Icon, Text } from "native-base";
import React from "react";

type EachEmployeeTypes = {
  employee: EmployeeTypes;
};

export default function EachEmployee({ employee }: EachEmployeeTypes) {
  return (
    <Box>
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
    </Box>
  );
}
