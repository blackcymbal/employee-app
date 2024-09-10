import { Box, Heading, Text, VStack } from "native-base";
import { StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <Box flex={1} alignItems={"center"} justifyContent={"center"}>
      <Heading>
        A component library for the
        <Text color="emerald.500"> React Ecosystem</Text>
      </Heading>
      <Text fontSize="2xl" fontWeight="bold" mt={3}>
        NativeBase is a simple, modular and accessible component library that
        gives you building blocks to build you React applications.
      </Text>
      <VStack space={1} alignItems="center">
        <Text fontSize="xs">xs</Text>
        <Text fontSize="sm">sm</Text>
        <Text fontSize="md">md</Text>
        <Text fontSize="lg">lg</Text>
        <Text fontSize="xl">xl</Text>
        <Text fontSize="2xl" fontWeight="bold">
          NativeBase is a simple, modular and accessible component library that
          gives you building blocks to build you React applications.
        </Text>
        <Text fontSize="3xl">3xl</Text>
        <Text fontSize="4xl">4xl</Text>
        <Text fontSize="5xl">5xl</Text>
        <Text fontSize="6xl">6xl</Text>
      </VStack>
      ;
    </Box>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
