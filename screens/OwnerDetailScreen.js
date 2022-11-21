import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Button,
  Pressable,
  LogBox,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons/faStar";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons/faStar";
import CatItem from "../components/CatItem";
import { useContext, useEffect, useState } from "react";
import { MasterContext } from "../store/master-context";

const OwnerDetailScreen = ({ route }) => {
  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
  ]);

  const ctx = useContext(MasterContext);
  const [isFavorite, setIsFavorite] = useState(route.params.isFavorite);

  return (
    <View style={styles.OwnerDetailScreen}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Owner Card</Text>
      </View>
      <View style={styles.ownerContainer}>
        <View style={styles.ownerDetailContainer}>
          <View style={styles.initialContainer}>
            <Text style={styles.initial}>{route.params.initial}</Text>
          </View>
          <View style={styles.nameContainer}>
            <View style={styles.nameTitleContainer}>
              <Text style={styles.nameTitle}>First Name</Text>
              <Text style={styles.nameValue}>{route.params.firstName}</Text>
            </View>
            <View style={styles.nameTitleContainer}>
              <Text style={styles.nameTitle}>Last Name</Text>
              <Text style={styles.nameValue}>{route.params.lastName}</Text>
            </View>
          </View>
          <View style={styles.favoriteContainer}>
            {isFavorite ? (
              <Pressable
                onPress={() => {
                  setIsFavorite(!isFavorite);
                  route.params.onPressFavorite({
                    id: route.params.id,
                    isFavorite: route.params.isFavorite,
                  });
                }}
              >
                <FontAwesomeIcon icon={faStarSolid} color="#7C42FF" size={25} />
              </Pressable>
            ) : (
              <Pressable
                onPress={() => {
                  setIsFavorite(!isFavorite);
                  route.params.onPressFavorite({
                    id: route.params.id,
                    isFavorite: route.params.isFavorite,
                  });
                }}
              >
                <FontAwesomeIcon icon={faStar} color="#D3D3D3" size={25} />
              </Pressable>
            )}
          </View>
        </View>
      </View>
      {/* <View> */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Cats</Text>
      </View>
      <View style={styles.listCatsContainer}>
        {route.params.cats.length ? (
          <FlatList
            data={route.params.cats}
            keyExtractor={(item) => item.id}
            renderItem={(cat) => <CatItem cat={cat.item} />}
          />
        ) : (
          <View>
            <Text style={{ color: "#A1AFC3" }}>This person has no cat</Text>
          </View>
        )}
      </View>
      {/* </View> */}
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={() => {
            ctx.updateMaster(
              route.params.id,
              route.params.initial,
              `${route.params.firstName} ${route.params.lastName}`
            );
          }}
        >
          <Text style={styles.font}>Make Master</Text>
        </Pressable>
        {/* <Button
          title="Make Master"
          color="#FCFCFC"
          onPress={() => {
            ctx.updateMaster(
              route.params.id,
              route.params.initial,
              `${route.params.firstName} ${route.params.lastName}`
            );
          }}
        /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  OwnerDetailScreen: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 16,
    height: "95%",
    backgroundColor: "#F8F8FF",
    alignItems: "center",
  },

  titleContainer: {
    width: "100%",
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    color: "#A1AFC3",
    fontWeight: "350",
    fontSize: 14,
    lineHeight: 20,
  },
  ownerContainer: {
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    marginBottom: 20,
    height: 150,
    width: "100%",
  },
  ownerDetailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    marginBottom: 20,
    height: 150,
    width: "100%",
  },
  initialContainer: {
    width: 70,
    height: 70,
    borderRadius: 40,
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 40,
  },
  initial: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 24,
  },
  nameContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: "70%",
  },
  nameTitleContainer: {
    height: "40%",
    justifyContent: "space-between",
  },
  nameTitle: {
    color: "#A1AFC3",
    fontWeight: "450",
    fontSize: 12,
    lineHeight: 22,
  },
  favoriteContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  listCatsContainer: {
    flexDirection: "column",
    height: 350,
    marginBottom: 40,
    width: "100%",
  },
  buttonContainer: {
    backgroundColor: "#36A388",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
    borderRadius: 10,
    width: "80%",
  },
  arrowContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  font: {
    color: "#FCFCFC",
    fontWeight: "500",
    fontSize: 18,
    lineHeight: 24,
  },
  nameValue: {
    color: "#404040",
    fontWeight: "450",
    fontSize: 14,
    lineHeight: 22,
  },
});

export default OwnerDetailScreen;
