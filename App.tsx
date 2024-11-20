import React from "react";
import {
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  Vibration,
  View,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import ConfettiCannon from "react-native-confetti-cannon";

export default function App() {
  const [counter, setCounter] = React.useState(0);
  const [confettiEnabled, setConfettiEnabled] = React.useState(false);

  function handleIncrease() {
    setCounter((c) => c + 1);
    Vibration.vibrate(100);
  }

  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.9);
  };

  const handlePressOut = () => {
    scale.value = withSpring(1);
  };

  return (
    <>
      <ScrollView style={styles.page}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Counter App</Text>
          <View style={styles.headerActions}>
            <TouchableOpacity
              style={styles.resetButton}
              onPress={() => setCounter(0)}
            >
              <Text style={styles.resetText}>Reset</Text>
            </TouchableOpacity>
            <View style={styles.switchContainer}>
              <Text style={styles.switchLabel}>Confetti</Text>
              <Switch
                value={confettiEnabled}
                onValueChange={setConfettiEnabled}
                thumbColor={confettiEnabled ? "#4CAF50" : "#f44336"}
                trackColor={{
                  false: "#FFCDD2",
                  true: "#C8E6C9",
                }}
              />
            </View>
          </View>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.container}>
          <Text style={styles.text}>{counter}</Text>
        </View>
      </ScrollView>
      <View style={styles.bottomButtonContainer}>
        <Animated.View style={[styles.increaseButton, animatedStyle]}>
          <TouchableOpacity
            onPress={handleIncrease}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onLongPress={() => setCounter(0)}
          >
            <Text style={styles.increaseText}>Increase</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
      <View style={styles.confetti}>
        {confettiEnabled && counter > 0 && counter % 10 === 0 && (
          <ConfettiCannon count={50} origin={{ x: 0, y: 0 }} />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  page: {
    paddingTop: 56,
    paddingBottom: 24,
    paddingHorizontal: 24,
    backgroundColor: "#000",
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "800",
    color: "#fff",
    padding: 8,
    maxWidth: "70%",
  },
  headerActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  resetButton: {
    backgroundColor: "#e74c3c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
  resetText: {
    color: "#fff",
    fontWeight: "600",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  switchLabel: {
    color: "#fff",
    marginRight: 4,
    fontWeight: "600",
  },
  divider: {
    height: 1,
    backgroundColor: "#bdc3c7",
    borderRadius: 24,
    marginVertical: 12,
  },
  container: {
    marginTop: 24,
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    borderRadius: 8,
    padding: 16,
    backgroundColor: "#000",
  },
  confetti: {
    backgroundColor: "#000",
  },
  text: {
    fontSize: 72,
    color: "#fff",
    marginTop: 24,
    marginBottom: 24,
  },
  bottomButtonContainer: {
    position: "absolute",
    bottom: 32,
    width: "100%",
    alignItems: "center",
  },
  increaseButton: {
    backgroundColor: "#3498db",
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  increaseText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
  },
});
