import { Text } from "native-base";
import React, { useState } from "react";
import {
  FlatList,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

type Option = {
  label: string;
  value: string;
};

type CustomSelectProps = {
  label: string;
  options: Option[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
};

const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  options,
  value,
  setValue,
  placeholder = "Select an option",
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const renderItem = ({ item }: { item: Option }) => (
    <TouchableOpacity
      style={styles.optionItem}
      onPress={() => {
        setValue(item?.value);
        setModalVisible(false);
      }}
    >
      <Text style={styles.optionText}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <Text style={styles.label}>{label}</Text>

      <TouchableOpacity
        style={styles.selectBox}
        onPress={() => setModalVisible(true)}
      >
        <Text style={value ? styles.selectedValue : styles.placeholder}>
          {value
            ? options.find((option) => option.value === value)?.label
            : placeholder}
        </Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={options}
              renderItem={renderItem}
              keyExtractor={(item) => item.value}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    marginBottom: 5,
    fontSize: 16,
    color: "#333",
  },
  selectBox: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
  },
  placeholder: {
    color: "#999",
  },
  selectedValue: {
    color: "#333",
  },
  errorBorder: {
    borderColor: "red",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    marginHorizontal: 30,
    borderRadius: 10,
    padding: 20,
  },
  optionItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  optionText: {
    fontSize: 16,
    color: "#333",
  },
  closeButton: {
    marginTop: 20,
    alignItems: "center",
  },
  closeButtonText: {
    color: "#007bff",
    fontSize: 18,
  },
});

export default CustomSelect;
