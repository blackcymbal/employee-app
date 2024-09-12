import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Input, Stack, Text } from "native-base";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import CustomSelect from "../common/CustomSelect";
import { SkillInfoSchemaType, skillInfoSchema } from "./AddEmployeeSchema";

export default function SkillsInfoForm() {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<SkillInfoSchemaType>({
    defaultValues: {
      skillName: "",
      experienceYears: 0,
      skillLevel: "Beginner",
    },
    resolver: zodResolver(skillInfoSchema),
    mode: "onChange",
  });

  const onSubmit = (data: SkillInfoSchemaType) => {
    console.log(data);
  };
  return (
    <Box alignItems="center" mt={4}>
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
              placeholder="First name"
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
      <Button onPress={handleSubmit(onSubmit)} width="40%">
        Add Skill
      </Button>
    </Box>
  );
}
