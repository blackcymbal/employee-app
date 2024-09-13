import {
  changeBasicInfo,
  employeeInfo,
} from "@/store/slices/employee/employeeInfoSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { zodResolver } from "@hookform/resolvers/zod";
import DateTimePicker from "@react-native-community/datetimepicker";
import { router } from "expo-router";
import moment from "moment";
import { Box, Button, Input, Stack, Text } from "native-base";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Platform, StyleSheet, TouchableOpacity } from "react-native";
import CustomSelect from "../common/CustomSelect";
import { basicInfoSchema, BasicInfoSchemaType } from "./AddEmployeeSchema";

export default function BasicInfoForm() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date(1950, 0, 1));
  const [showPicker, setShowPicker] = React.useState(false);
  const employeeInformation = useAppSelector(employeeInfo);

  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<BasicInfoSchemaType>({
    defaultValues: {
      firstName: employeeInformation.firstName,
      lastName: employeeInformation.lastName,
      birthday: employeeInformation.birthday,
      salary: employeeInformation.salary,
      gender: employeeInformation.gender,
      phone: employeeInformation.phone,
    },
    resolver: zodResolver(basicInfoSchema),
    mode: "onChange",
  });

  const onDateChange = (date?: Date) => {
    if (date) {
      setSelectedDate(date);
      setShowPicker(false);
    }
  };

  const onSubmit = (data: BasicInfoSchemaType) => {
    dispatch(changeBasicInfo({ ...data, birthday: selectedDate }));
    router.navigate("/(tabs)/skillsScreen");
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
              {Platform.OS === "android" ? (
                <Box flexDirection="row" alignItems="center">
                  <TouchableOpacity
                    onPress={() => setShowPicker(true)}
                    style={styles.dateBox}
                  >
                    <Text> {moment(selectedDate).format("DD-MM-YYYY")}</Text>
                  </TouchableOpacity>

                  {showPicker && (
                    <DateTimePicker
                      value={selectedDate}
                      onChange={(date) => {
                        const timestamp = date?.nativeEvent?.timestamp;
                        onDateChange(new Date(timestamp));
                        onChange(new Date(timestamp));
                      }}
                      onBlur={onBlur}
                      placeholder="Select your birthday"
                      format="DD-MM-YYYYY"
                    />
                  )}
                </Box>
              ) : (
                <DateTimePicker
                  value={selectedDate}
                  onChange={(date) => {
                    const timestamp = date?.nativeEvent?.timestamp;
                    onDateChange(new Date(timestamp));
                    onChange(new Date(timestamp));
                  }}
                  onBlur={onBlur}
                  placeholder="Select your birthday"
                  format="DD-MM-YYYYY"
                />
              )}
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
        Save
      </Button>
    </Box>
  );
}

const styles = StyleSheet.create({
  dateBox: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: "#DCDCDC",
    marginLeft: 4,
    borderRadius: 4,
  },
});
