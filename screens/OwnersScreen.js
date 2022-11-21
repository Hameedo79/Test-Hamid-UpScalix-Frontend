import { useState, useEffect, useRef, useContext } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import OwnerGridTile from "../components/OwnerItem";
import { getAllOwners, makeFavorite } from "../services/main";
import { MasterContext } from "../store/master-context";
import DropDownPicker from "react-native-dropdown-picker";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons/faCaretDown";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons/faCaretUp";

const OwnersScreen = ({ navigation }) => {
  const [owners, setOwners] = useState([]);
  const ctx = useContext(MasterContext);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("name");
  const [items, setItems] = useState([
    { label: "Name", value: "name" },
    { label: "Number of Cats", value: "numberOfCats" },
  ]);

  useEffect(() => {
    async function getOwner() {
      try {
        ctx.setLoading(true);
        const data = await getAllOwners();
        setOwners(data);
        ctx.setLoading(false);
      } catch (err) {
        console.log("err", err);
        ctx.setLoading(false);
      }
    }

    getOwner();
  }, []);

  const pressFavoriteHandler = (ownerData) => {
    ctx.setLoading(true);
    makeFavorite(ownerData.id);
    setOwners((prevState) => {
      const newOwners = [...prevState];
      newOwners.map((owner) => {
        if (owner.id === ownerData.id) {
          if (owner.isFavorite) {
            owner.isFavorite = false;
          } else {
            owner.isFavorite = true;
          }
        }
      });
      prevState = newOwners;
      ctx.setLoading(false);
      return newOwners;
    });
    ctx.setLoading(false);
  };
  const pressOwnerHandler = (ownerData) => {
    navigation.navigate("OwnerDetailScreen", {
      ...ownerData,
      onPressFavorite: pressFavoriteHandler,
    });
  };

  const sortOwnerList = (sortBy) => {
    if (sortBy === "name") {
      setOwners((prevState) => {
        const newOwners = [...prevState];
        newOwners.sort((a, b) => {
          let fa = a.firstName.toLowerCase(),
            fb = b.firstName.toLowerCase();

          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
        });
        return newOwners;
      });
    } else {
      setOwners((prevState) => {
        const newOwners = [...prevState];
        newOwners.sort((a, b) => {
          return a.cats.length - b.cats.length;
        });

        return newOwners;
      });
    }
  };
  return (
    <View style={styles.OwnersScreen}>
      <View style={styles.filterContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.font}>Owners List</Text>
        </View>

        <View style={styles.sortContainer}>
          <View style={styles.sortTextContainer}>
            <Text style={styles.sortFont}>Sort By: </Text>
          </View>
          <View style={styles.sortDropDownContainer}>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              ArrowDownIconComponent={({ style }) => (
                <FontAwesomeIcon
                  icon={faCaretDown}
                  style={{ color: "#92929D" }}
                />
              )}
              ArrowUpIconComponent={({ style }) => (
                <FontAwesomeIcon
                  icon={faCaretUp}
                  style={{ color: "#92929D" }}
                />
              )}
              textStyle={{
                fontSize: 13,
                color: "#92929D",
                fontWeight: "bold",
              }}
              style={{
                borderWidth: 0,
                backgroundColor: "transparent",
              }}
              onChangeValue={(val) => {
                sortOwnerList(val);
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.listOwnerContainer}>
        <FlatList
          data={owners}
          keyExtractor={(item) => item.id}
          renderItem={(ownerData) => (
            <OwnerGridTile
              ownerData={ownerData.item}
              onPressOwner={pressOwnerHandler}
              onPressFavorite={pressFavoriteHandler}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  OwnersScreen: {
    paddingTop: 20,
    paddingHorizontal: 16,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    backgroundColor: "#F8F8FF",
  },
  filterContainer: {
    display: "flex",
    flexDirection: "row",
    padding: 0,
    paddingBottom: 24,
    zIndex: 1000,
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  sortContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  sortTextContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  sortDropDownContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "flex-start",
    height: "100%",
  },
  listOwnerContainer: {
    flexDirection: "column",
    height: "100%",
    width: "100%",
  },
  font: {
    color: "#A1AFC3",
    fontWeight: "450",
    fontSize: 14,
    lineHeight: 20,
  },
  sortFont: {
    color: "#92929D",
    fontWeight: "450",
    fontSize: 12,
    lineHeight: 15,
  },
});

export default OwnersScreen;
