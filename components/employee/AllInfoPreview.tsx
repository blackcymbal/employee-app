import { employeeInfo } from "@/store/slices/employee/employeeInfoSlice";
import { useCreateEmployeeMutation } from "@/store/slices/employee/employeeListApi";
import { useAppSelector } from "@/store/store";
import { router } from "expo-router";
import moment from "moment";
import { Box, Button, Stack, Text } from "native-base";
import React from "react";

export default function AllInfoPreview() {
  const employeeInformation = useAppSelector(employeeInfo);
  const [createEmployee, { isLoading, isSuccess, isError, error, data }] =
    useCreateEmployeeMutation();

  const previewData = [
    {
      title: "First Name",
      value: employeeInformation.firstName,
    },
    {
      title: "Last Name",
      value: employeeInformation.lastName,
    },
    {
      title: "Birthday",
      value: moment(employeeInformation.birthday).format("DD-MM-YYYY"),
    },
    {
      title: "Salary",
      value: employeeInformation.salary,
    },
    {
      title: "Gender",
      value: employeeInformation.gender,
    },
    {
      title: "Phone",
      value: employeeInformation.phone,
    },
    {
      title: "Skill Name",
      value: employeeInformation.skillName,
    },
    {
      title: "Years of experience",
      value: employeeInformation.experienceYears,
    },
    {
      title: "Skill level",
      value: employeeInformation.skillLevel,
    },
  ];

  const handlePress = () => {
    createEmployee(employeeInformation)
      .unwrap()
      .then((data) => {
        console.log(data);
        router.navigate("/employeeListScreen");
      })
      .catch((error) => console.log(error));
  };
  return (
    <Stack padding={4} space={2}>
      {previewData.map((item, idx) => (
        <Box key={idx} flexDirection="row">
          <Text fontWeight="semibold" fontSize="lg">
            {item.title}:{" "}
          </Text>
          <Text fontSize="lg">{`${item.value}`}</Text>
        </Box>
      ))}
      <Button onPress={handlePress} width="40%" alignSelf="center" mt={4}>
        Save
      </Button>
    </Stack>
  );
}
