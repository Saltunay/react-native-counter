import React from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [counter, setCounter] = React.useState(0);
  const [k, setK] = React.useState(1);

  return (
    <>
      <ScrollView style={styles.page}>
        <Text style={styles.header}>Counter App</Text>
        <View style={styles.divider}></View>
        <View style={styles.container}>
          <Button title="Down" onPress={() => setCounter((c) => c - k)} />
          <TextInput
            style={styles.input}
            value={counter.toString()}
            editable={false}
          />
          <Button title="Up" onPress={() => setCounter((c) => c + k)} />
        </View>
        <View style={styles.container}>
          <Text>Increment/Decrement Size: </Text>
          <TextInput
            style={styles.inputOutlined}
            value={k.toString()}
            keyboardType="numeric"
            onChangeText={(text) => setK(Number(text))}
          />
          <Button title="OK" />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  page: {
    paddingTop: 56,
    paddingBottom: 24,
    paddingStart: 24,
    paddingEnd: 24,
    gap: 16,
  },
  container: {
    marginTop: 24,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 12,
    boxShadow: "0 0 6px -2px #555",
    borderRadius: 4,
    paddingTop: 24,
    paddingBottom: 24,
  },
  header: {
    fontSize: 16,
    fontWeight: "800",
  },
  divider: {
    height: 1,
    padding: 0,
    marginTop: 12,
    marginBottom: 12,
    backgroundColor: "#bdc3c7",
    borderRadius: 24,
  },

  input: {
    paddingStart: 32,
    paddingEnd: 32,
    fontWeight: "600",
    fontSize: 14,
  },

  inputOutlined: {
    paddingStart: 32,
    paddingEnd: 32,
    fontWeight: "600",
    fontSize: 14,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#ddd",
    borderRadius: 4,
  },
});
