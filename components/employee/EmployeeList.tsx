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
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={21}
        removeClippedSubviews={true}
        getItemLayout={(data, index) => ({
          length: 65,
          offset: (65 + 16) * index,
          index,
        })}
        ListFooterComponent={<Box height={40} />}
      />
    </Box>
  );
}
