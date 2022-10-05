import {
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLOURS, Items } from "./../database/Database";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Home = ({ navigation }) => {
  const [hoodie, setHoodie] = useState([]);
  const [jacket, setJacket] = useState([]);
  const [pants, setPants] = useState([]);
  const [shirts, setShirts] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => getDataFromDB());
    return unsubscribe;
  }, [navigation]);

  const getDataFromDB = () => {
    let hoodieList = [];
    let jacketList = [];
    let pantsList = [];
    let shirtsList = [];

    for (let index = 0; index < Items.length; index++) {
      if (Items[index].category === "hoodie") {
        hoodieList.push(Items[index]);
      } else if (Items[index].category === "jacket") {
        jacketList.push(Items[index]);
      } else if (Items[index].category === "pants") {
        pantsList.push(Items[index]);
      } else if (Items[index].category === "shirts") {
        shirtsList.push(Items[index]);
      }
    }

    setHoodie(hoodieList);
    setJacket(jacketList);
    setPants(pantsList);
    setShirts(shirtsList);
  };

  const ProductCard = ({ data }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ProductInfo", { productID: data.id })
        }
        style={{
          width: "48%",
          marginVertical: 14,
        }}
      >
        <View
          style={{
            width: "100%",
            height: 200,
            borderRadius: 10,
            backgroundColor: COLOURS.backgroundLightMedium,
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          {/* {data.isOff ? (
            <View
              style={{
                position: "absolute",
                width: "30%",
                height: "34%",
                backgroundColor: COLOURS.green,
                top: 0,
                left: 0,
                borderTopLeftRadius: 10,
                borderBottomRightRadius: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: COLOURS.white,
                  fontWeight: "bold",
                  letterSpacing: 1,
                }}
              >
                {data.offPercentage}%
              </Text>
            </View> 
          ) : null} //상품 할인율 띄워주는 부분 */}
          <Image
            source={data.productImage}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "contain",
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 12,
            color: COLOURS.black,
            fontWeight: "600",
            marginBottom: 2,
          }}
        >
          {data.productName}
        </Text>
        {data.category === "pants" ? (
          data.isAvaliable === true ? (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <FontAwesome
                name="circle"
                style={{
                  fontSize: 12,
                  marginRight: 6,
                  color: COLOURS.green,
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: COLOURS.green,
                }}
              >
                Available
              </Text>
            </View>
          ) : (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <FontAwesome
                name="circle"
                style={{
                  fontSize: 12,
                  marginRight: 6,
                  color: COLOURS.red,
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: COLOURS.red,
                }}
              >
                Unavailable
              </Text>
            </View>
          )
        ) : null}
        <Text>&#8361; {data.productPrice}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: COLOURS.white,
      }}
    >
      <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 16,
          }}
        >
          <TouchableOpacity>
            <FontAwesome
              name="search"
              style={{
                fontSize: 16,
                color: COLOURS.backgroundDark,
                padding: 12,
                borderRadius: 10,
                borderColor: COLOURS.backgroundLight,
                marginTop: 30,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome
              name="user"
              style={{
                fontSize: 16,
                color: COLOURS.backgroundDark,
                padding: 12,
                borderRadius: 10,
                borderColor: COLOURS.backgroundLight,
                marginTop: 30,
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            padding: 16,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: COLOURS.black,
                  fontWeight: "500",
                  letterSpacing: 1,
                  marginBottom: 20,
                }} //product 부분
              >
                인기 상품
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: COLOURS.blue,
                fontWeight: "400",
              }}
            >
              SeeAll
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            {hoodie.map((data) => {
              return <ProductCard data={data} key={data.id} />;
            })}
          </View>
        </View>

        <View
          style={{
            padding: 16,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: COLOURS.black,
                  fontWeight: "500",
                  letterSpacing: 1,
                }} //product 부분
              >
                바지는 어때?
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: COLOURS.blue,
                fontWeight: "400",
              }}
            >
              SeeAll
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            {pants.map((data) => {
              return <ProductCard data={data} key={data.id} />;
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
