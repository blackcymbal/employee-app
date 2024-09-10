import { Box, Center, HStack, StatusBar, Text } from "native-base";
import React from "react";

export default function AppBar({ title }: { title: string }) {
  return (
    <>
      <StatusBar bg="primary.300" barStyle="light-content" />
      <Box safeAreaTop bg="primary.500" />
      <HStack
        bg="primary.700"
        px="1"
        py="3"
        justifyContent="center"
        alignItems="center"
        w="100%"
      >
        <Text color="white" fontSize="20" fontWeight="bold">
          {title}
        </Text>
      </HStack>
    </>
  );
}

function Example() {
  return (
    <Center>
      <AppBar />
    </Center>
  );
}
