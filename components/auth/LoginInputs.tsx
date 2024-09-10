import { MaterialIcons } from "@expo/vector-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { Button, Icon, Input, Pressable, Stack, Text } from "native-base";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { authSchema } from "./AuthSchema";

type ProfileDetailsProps = {
  userName: string;
  password: string;
};

export default function LoginInputs() {
  const [show, setShow] = React.useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<ProfileDetailsProps>({
    defaultValues: {
      userName: "",
      password: "",
    },
    resolver: zodResolver(authSchema),
    mode: "onChange",
  });

  const onSubmit = (data: ProfileDetailsProps) => {
    console.log(data);
    router.replace("/(tabs)");
  };

  return (
    <>
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
          name={"userName"}
          rules={{
            required: true,
          }}
          render={({ field: { value, onChange, onBlur } }) => (
            <Input
              size="xl"
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="person" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                />
              }
              placeholder="User name"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />
        {errors.userName?.message && (
          <Text color="error.400">{errors.userName?.message}</Text>
        )}
        <Controller
          control={control}
          name={"password"}
          rules={{
            required: true,
          }}
          render={({ field: { value, onChange, onBlur } }) => (
            <Input
              size="xl"
              type={show ? "text" : "password"}
              InputRightElement={
                <Pressable onPress={() => setShow(!show)}>
                  <Icon
                    as={
                      <MaterialIcons
                        name={show ? "visibility" : "visibility-off"}
                      />
                    }
                    size={5}
                    mr="2"
                    color="muted.400"
                  />
                </Pressable>
              }
              placeholder="Password"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />
        {errors.password?.message && (
          <Text color="error.400">{errors.password?.message}</Text>
        )}
      </Stack>
      <Button
        onPress={handleSubmit(onSubmit)}
        width="40%"
        isDisabled={isValid ? false : true}
      >
        Login
      </Button>
    </>
  );
}
