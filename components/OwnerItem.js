import { View, Text, Pressable, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStar as star } from "@fortawesome/free-solid-svg-icons/faStar";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";

const OwnerItem = (props) => {
  const { initial, firstName, lastName, isFavorite } = { ...props.ownerData };
  return (
    <Pressable onPress={() => props.onPressOwner(props.ownerData)}>
      <View style={styles.ownerItemContainer}>
        <View style={styles.initialContainer}>
          <Text style={styles.initial}>{initial}</Text>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameValue}>{`${firstName} ${lastName}`}</Text>
        </View>
        <View style={styles.favoriteContainer}>
          {isFavorite ? (
            <Pressable onPress={() => props.onPressFavorite(props.ownerData)}>
              <FontAwesomeIcon icon={star} color="#7C42FF" />
            </Pressable>
          ) : (
            <Pressable onPress={() => props.onPressFavorite(props.ownerData)}>
              <FontAwesomeIcon icon={star} color="#D3D3D3" />
            </Pressable>
          )}
        </View>
        <View style={styles.arrowContainer}>
          <FontAwesomeIcon icon={faChevronRight} color="#D3D3D3" />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ownerItemContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#FFFFFF",
    marginBottom: 15,
  },
  nameContainer: {
    display: "flex",
    flex: 4,
    flexDirection: "row",
    justifyContent: "space-start",
  },
  initialContainer: {
    width: 40,
    height: 40,
    borderRadius: 30,
    padding: 10,
    backgroundColor: "#D3D3D3",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 40,
    color: "white",
  },
  initial: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 15,
    lineHeight: 18,
  },
  favoriteContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  arrowContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  nameValue: {
    color: "#404040",
    fontWeight: "450",
    fontSize: 14,
    lineHeight: 20,
  },
});

export default OwnerItem;
