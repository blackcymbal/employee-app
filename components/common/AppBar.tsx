import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Box, Icon, StatusBar, Text } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";

export default function AppBar({
  title,
  isBackButton = false,
}: {
  title: string;
  isBackButton?: boolean;
}) {
  return (
    <>
      <StatusBar bg="primary.300" barStyle="light-content" />

      <Box safeAreaTop bg="primary.500" />
      <Box
        flexDirection="row"
        bg="primary.600"
        px="4"
        py={isBackButton ? "2" : "3"}
        justifyContent="space-between"
        alignItems="center"
        w="100%"
      >
        {isBackButton ? (
          <TouchableOpacity
            onPress={() => router.navigate("/employeeListScreen")}
          >
            <Icon
              as={<MaterialIcons name="chevron-left" />}
              size={9}
              ml="2"
              color="white"
            />
          </TouchableOpacity>
        ) : (
          <Box />
        )}

        <Text color="white" fontSize="20" fontWeight="bold">
          {title}
        </Text>
        <Box width={4} />
      </Box>
    </>
  );
}
