import OwnersScreen from "./screens/OwnersScreen";
import { StyleSheet, Text, View } from "react-native";
import { useContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OwnerDetailScreen from "./screens/OwnerDetailScreen";
import { MasterContext } from "./store/master-context";
import Spinner from "react-native-loading-spinner-overlay";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";

const Stack = createNativeStackNavigator();

export default function Index() {
  const ctx = useContext(MasterContext);
  return (
    <NavigationContainer>
      {ctx.loading && (
        <Spinner
          visible={ctx.loading}
          textContent={"Loading..."}
          textStyle={styles.spinnerTextStyle}
        />
      )}

      <Stack.Navigator
        screenOptions={{
          headerMode: "screen",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: "#F8F8FF" },
        }}
      >
        <Stack.Screen
          name="OwnerScreen"
          component={OwnersScreen}
          options={{
            headerTitleAlign: "center",
            headerBackImage: () => (
              <FontAwesomeIcon
                icon={faArrowLeft}
                style={{ color: "#92929D" }}
              />
            ),
            headerTitle: () => {
              if (ctx.name) {
                return (
                  <View style={styles.header}>
                    <View style={styles.initialContainer}>
                      <Text style={styles.initial}>{ctx.initial}</Text>
                    </View>
                    <View style={styles.nameContainer}>
                      <Text>Master: {ctx.name}</Text>
                    </View>
                  </View>
                );
              } else {
                return <View></View>;
              }
            },
          }}
        />
        <Stack.Screen
          name="OwnerDetailScreen"
          component={OwnerDetailScreen}
          options={{
            headerTitleAlign: "center",
            headerBackImage: () => (
              <FontAwesomeIcon
                icon={faArrowLeft}
                style={{ color: "#92929D" }}
              />
            ),
            headerTitle: () => {
              if (ctx.name) {
                return (
                  <View style={styles.header}>
                    <View style={styles.initialContainer}>
                      <Text style={styles.initial}>{ctx.initial}</Text>
                    </View>
                    <View style={styles.nameContainer}>
                      <Text>Master: {ctx.name}</Text>
                    </View>
                  </View>
                );
              } else {
                return <View></View>;
              }
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 10,
    width: "75%",
    height: 44,
  },
  nameContainer: {
    display: "flex",
    flexDirection: "row",
  },
  initialContainer: {
    width: 43,
    height: 43,
    borderRadius: 30,
    padding: 10,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    borderWidth: 1,
    borderColor: "#36A388",
    marginRight: 10,
  },
  initial: {
    fontSize: 15,
    lineHeight: 18,
    fontWeight: "600",
    color: "#36A388",
  },
  name: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    color: "#404040",
    letterSpacing: "0.02em",
  },
});
