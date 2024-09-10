import { EmployeeTypes } from "@/store/slices/employee/employeeListApi";
import { Box, FlatList } from "native-base";
import React from "react";
import EachEmployee from "./EachEmployee";

type EmployeeListTypes = {
  employees: EmployeeTypes[];
};

export default function EmployeeList({ employees }: EmployeeListTypes) {
  const renderItem = ({ item }: { item: EmployeeTypes }) => (
    <EachEmployee employee={item} />
  );
  return (
    <Box padding={4}>
      <FlatList
        contentContainerStyle={{ gap: 16 }}
        data={employees}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        initialNumToRender={10} // Render 10 items initially
        maxToRenderPerBatch={10} // Render 10 more items per scroll
        windowSize={21} // How many items to render outside of the visible window
        removeClippedSubviews={true} // Remove items that are off-screen for memory optimization
        getItemLayout={(data, index) => ({
          length: 65, // Approximate height of each item (image + text)
          offset: (65 + 16) * index, // Offset to calculate position of each item
          index,
        })}
        ListFooterComponent={<Box height={40} />}
      />
    </Box>
  );
}
