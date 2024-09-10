import { zodResolver } from "@hookform/resolvers/zod";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Box, Button, Input, Stack, Text } from "native-base";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import CustomSelect from "../common/CustomSelect";
import { basicInfoSchema } from "./AddEmployeeSchema";

type BasicInfoProps = {
  firstName: string;
  lastName: string;
  birthday: Date;
  salary: number;
  gender: "Male" | "Female" | "Other";
  phone: string;
};

export default function BasicInfoForm() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date(1950, 0, 1));
  const [service, setService] = React.useState("");

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<BasicInfoProps>({
    defaultValues: {
      firstName: "",
      lastName: "",
      birthday: new Date(1950, 0, 1),
      salary: 0,
      gender: "Male",
      phone: "",
    },
    resolver: zodResolver(basicInfoSchema),
    mode: "onChange",
  });

  const onDateChange = (event: any, date?: Date) => {
    if (date) {
      setSelectedDate(date);
      //  control.('birthday', date);
    }
  };

  const onSubmit = (data: BasicInfoProps) => {
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
          name={"firstName"}
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
        {errors.firstName?.message && (
          <Text color="error.400">{errors.firstName?.message}</Text>
        )}
        <Controller
          control={control}
          name={"lastName"}
          rules={{
            required: true,
          }}
          render={({ field: { value, onChange, onBlur } }) => (
            <Input
              size="xl"
              placeholder="Last name"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />
        {errors.lastName?.message && (
          <Text color="error.400">{errors.lastName?.message}</Text>
        )}
        <Controller
          control={control}
          name={"birthday"}
          rules={{
            required: true,
          }}
          render={({ field: { value, onChange, onBlur } }) => (
            <Box flexDirection="row" alignItems="center">
              <Text>Birthday:</Text>
              <DateTimePicker
                value={selectedDate}
                onChange={(date) => {
                  onDateChange(date);
                  const timestamp = date?.nativeEvent?.timestamp;
                  onChange(new Date(timestamp));
                }}
                onBlur={onBlur}
                placeholder="Select your birthday"
                format="YYYY-MM-DD"
              />
            </Box>
          )}
        />
        {errors.birthday?.message && (
          <Text color="error.400">{errors.birthday?.message}</Text>
        )}
        <Controller
          control={control}
          name={"salary"}
          rules={{
            required: true,
          }}
          render={({ field: { value, onChange, onBlur } }) => (
            <Input
              keyboardType="numeric"
              size="xl"
              placeholder="Salary"
              value={value?.toString()}
              onChangeText={(text) => onChange(Number(text))}
              onBlur={onBlur}
            />
          )}
        />
        {errors.salary?.message && (
          <Text color="error.400">{errors.salary?.message}</Text>
        )}
        <Controller
          control={control}
          name={"gender"}
          rules={{
            required: true,
          }}
          render={({ field: { value, onChange, onBlur } }) => (
            <CustomSelect
              label="Gender"
              options={[
                { label: "Male", value: "Male" },
                { label: "Female", value: "Female" },
                { label: "Other", value: "Other" },
              ]}
              value={value}
              setValue={onChange}
              placeholder="Select Gender"
            />
          )}
        />

        {errors.gender?.message && (
          <Text color="error.400">{errors.gender?.message}</Text>
        )}
        <Controller
          control={control}
          name={"phone"}
          rules={{
            required: true,
          }}
          render={({ field: { value, onChange, onBlur } }) => (
            <Input
              size="xl"
              placeholder="Phone no"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />
        {errors.phone?.message && (
          <Text color="error.400">{errors.phone?.message}</Text>
        )}
      </Stack>
      <Button onPress={handleSubmit(onSubmit)} width="40%">
        Login
      </Button>
    </Box>
  );
}
