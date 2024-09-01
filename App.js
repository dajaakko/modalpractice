import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, Modal, Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={{ color: "black" }}>Open Modal</Text>
      </Pressable>
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.centeredView}>
          <View style={styles.modal}>
            <View style={styles.textseparator}>
              <Text>Modal is open! Click Close modal text to close it</Text>
            </View>
            <Pressable
              onPress={() => {
                setModalVisible(false);
              }}
            >
              <Text style={{ color: "black", fontSize:"20" }}>Close Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    height: 200,
    width: 200,
    backgroundColor: "plum",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textseparator: {
    marginBottom: 40,
  },
});
