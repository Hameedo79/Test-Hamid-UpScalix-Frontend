import { View, Text, Pressable, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";

const CatItem = (props) => {
  const { name, age } = { ...props.cat };

  return (
    <View style={styles.catContainer}>
      <View style={styles.nameContainer}>
        <Text>{name}</Text>
        <Text style={styles.age}>Age: {age}</Text>
      </View>
      <View style={styles.arrowContainer}>
        <FontAwesomeIcon icon={faChevronRight} color="#D3D3D3" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  catContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#FFFFFF",
    marginBottom: 10,
    height: 80,
    width: "100%",
  },
  nameContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    height: 80,
  },
  age: { color: "#A1AFC3" },
  arrowContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: 10,
  },
});

export default CatItem;
