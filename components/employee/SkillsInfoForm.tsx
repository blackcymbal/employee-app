import {
  changeSkillsInfo,
  employeeInfo,
} from "@/store/slices/employee/employeeInfoSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { Box, Button, Input, Stack, Text } from "native-base";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import CustomSelect from "../common/CustomSelect";
import { SkillInfoSchemaType, skillInfoSchema } from "./AddEmployeeSchema";

export default function SkillsInfoForm() {
  const employeeInformation = useAppSelector(employeeInfo);
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<SkillInfoSchemaType>({
    defaultValues: {
      skillName: employeeInformation.skillName,
      experienceYears: employeeInformation.experienceYears,
      skillLevel: employeeInformation.skillLevel,
    },
    resolver: zodResolver(skillInfoSchema),
    mode: "onChange",
  });

  const onSubmit = (data: SkillInfoSchemaType) => {
    dispatch(changeSkillsInfo(data));
    router.navigate("/(tabs)/preview");
  };

  return (
    <Box alignItems="center" mt={8}>
      <Stack
        marginBottom={4}
        space={4}
        w={{
          base: "75%",
          md: "25%",
        }}
      >
        <Controller
          control={control}
          name={"skillName"}
          rules={{
            required: true,
          }}
          render={({ field: { value, onChange, onBlur } }) => (
            <Input
              size="xl"
              placeholder="Skill name"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />
        {errors.skillName?.message && (
          <Text color="error.400">{errors.skillName?.message}</Text>
        )}
        <Controller
          control={control}
          name={"experienceYears"}
          rules={{
            required: true,
          }}
          render={({ field: { value, onChange, onBlur } }) => (
            <Input
              keyboardType="numeric"
              size="xl"
              placeholder="Years of Experience"
              value={value?.toString()}
              onChangeText={(text) => onChange(Number(text))}
              onBlur={onBlur}
            />
          )}
        />
        {errors.experienceYears?.message && (
          <Text color="error.400">{errors.experienceYears?.message}</Text>
        )}

        <Controller
          control={control}
          name={"skillLevel"}
          rules={{
            required: true,
          }}
          render={({ field: { value, onChange, onBlur } }) => (
            <CustomSelect
              label="Skill Level"
              options={[
                { label: "Beginner", value: "Beginner" },
                { label: "Intermediate", value: "Intermediate" },
                { label: "Advanced", value: "Advanced" },
              ]}
              value={value}
              setValue={onChange}
              placeholder="Select Skill Level"
            />
          )}
        />

        {errors.skillLevel?.message && (
          <Text color="error.400">{errors.skillLevel?.message}</Text>
        )}
      </Stack>
      <Button
        onPress={handleSubmit(onSubmit)}
        width="40%"
        isDisabled={isValid ? false : true}
      >
        Save
      </Button>
    </Box>
  );
}
