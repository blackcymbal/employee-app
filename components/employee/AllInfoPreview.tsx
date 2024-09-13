import {
  changeAllInfo,
  employeeInfo,
} from "@/store/slices/employee/employeeInfoSlice";
import {
  useCreateEmployeeMutation,
  useUpdateEmployeeMutation,
} from "@/store/slices/employee/employeeListApi";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { router } from "expo-router";
import moment from "moment";
import { Box, Button, Stack, Text, useToast } from "native-base";
import React from "react";

export default function AllInfoPreview() {
  const employeeInformation = useAppSelector(employeeInfo);
  const [createEmployee, { isLoading, isSuccess, isError, error, data }] =
    useCreateEmployeeMutation();

  const [updateEmployee, { isLoading: isUpdateLoading }] =
    useUpdateEmployeeMutation();
  const dispatch = useAppDispatch();
  const toast = useToast();

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
    if (employeeInformation.id) {
      updateEmployee(employeeInformation)
        .unwrap()
        .then((data) => {
          toast.show({
            title: "User Update Successful",
            placement: "top",
          });
        })
        .catch((error) => {
          toast.show({
            title: "Something went wrong!",
            placement: "top",
          });
        });
    } else {
      createEmployee(employeeInformation)
        .unwrap()
        .then((data) => {
          console.log(data);
          dispatch(changeAllInfo(data.data));
          toast.show({
            title: "User creation Successful",
            placement: "top",
          });
          router.navigate("/employeeListScreen");
        })
        .catch((error) =>
          toast.show({
            title: "Something went wrong!",
            placement: "top",
          })
        );
    }
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
      <Button
        isLoading={isLoading || isUpdateLoading}
        isLoadingText={employeeInformation.id ? "Updating" : "Creating"}
        onPress={handlePress}
        width="40%"
        alignSelf="center"
        mt={4}
      >
        {employeeInformation.id ? "Update" : "Create employee"}
      </Button>
    </Stack>
  );
}
