import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  LayoutAnimation,
} from "react-native";
import React, { useState, useEffect } from "react";
import { COLOURS } from "./../database/Database";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

//dummy
//여기다 데이터 넣기
const CONTENT = [
  {
    ixExpanded: false,
    category_name: "상의",
    subcategory: [
      { id: 1, val: "반팔" },
      { id: 2, val: "맨투맨" },
    ],
  },
  {
    ixExpanded: false,
    category_name: "하의",
    subcategory: [
      { id: 3, val: "청바지" },
      { id: 4, val: "조거팬츠" },
    ],
  },
  {
    ixExpanded: false,
    category_name: "아우터",
    subcategory: [
      { id: 5, val: "바람막이" },
      { id: 6, val: "패딩" },
    ],
  },
  // {
  //   ixExpanded: false,
  //   category_name: "Item 4",
  //   subcategory: [
  //     { id: 7, val: "Sub 7" },
  //     { id: 8, val: "Sub 8" },
  //   ],
  // },
  // {
  //   ixExpanded: false,
  //   category_name: "Item 5",
  //   subcategory: [{ id: 9, val: "Sub 9" }],
  // },
  // {
  //   ixExpanded: false,
  //   category_name: "Item 6",
  //   subcategory: [
  //     { id: 10, val: "Sub 10" },
  //     { id: 11, val: "Sub 11" },
  //   ],
  // },
];

const ExpandableComponent = ({ item, onClickFunction }) => {
  const [layoutHeight, setlayoutHeight] = useState(0);

  useEffect(() => {
    if (item.isExpanded) {
      setlayoutHeight(null);
    } else {
      setlayoutHeight(0);
    }
  }, [item.isExpanded]);

  return (
    <View>
      <TouchableOpacity style={styles.item} onPress={onClickFunction}>
        <Text style={styles.itemText}>{item.category_name}</Text>
      </TouchableOpacity>
      <View
        style={{
          height: layoutHeight,
          overflow: "hidden",
        }}
      >
        {item.subcategory.map((item, key) => (
          <TouchableOpacity key={key} style={styles.content}>
            <Text style={styles.text}>{item.val}</Text>
            <View style={styles.separator} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const CategoryTab = () => {
  const navigation = useNavigation();
  const [multiSelect, setmultiSelect] = useState(false);
  const [listDataSource, setlistDataSource] = useState(CONTENT);

  const updateLayout = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...listDataSource];
    if (multiSelect) {
      array[index]["isExpanded"] = !array[index]["isExpanded"];
    } else {
      array.map((value, placeindex) =>
        placeindex === index
          ? (array[placeindex]["isExpanded"] = !array[placeindex]["isExpanded"])
          : (array[placeindex]["isExpanded"] = false)
      );
    }
    setlistDataSource(array);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <FontAwesome
              name="angle-left"
              style={{
                fontSize: 16,
                color: COLOURS.backgroundDark,
                padding: 12,
                backgroundColor: COLOURS.white,
                borderRadius: 10,
              }}
            />
          </TouchableOpacity>
          <Text style={styles.titleText}>카테고리</Text>
          {/* <TouchableOpacity onPress={() => setmultiSelect(!multiSelect)}>
            <Text style={styles.headerButton}>
              {multiSelect
                ? "Enable Single \n Expand"
                : "Enable Multiple \n Expand"}
            </Text>
          </TouchableOpacity> */}
        </View>
        <ScrollView>
          {listDataSource.map((item, key) => (
            <ExpandableComponent
              key={item.category_name}
              item={item}
              onClickFunction={() => {
                updateLayout(key);
              }}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "white",
    marginBottom: 10,
  },
  titleText: {
    flex: 1,
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginRight: 30,
  },
  headerButton: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: 18,
  },
  item: {
    backgroundColor: "white",
    padding: 10,
  },
  itemText: {
    fontSize: 16,
    fontWeight: "500",
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 16,
    padding: 10,
  },
  separator: {
    height: 0.5,
    backgroundColor: "#c8c8c8",
    width: "100%",
  },
});

export default CategoryTab;
