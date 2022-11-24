import React from "react";
import { View, Text, SafeAreaView, Keyboard, Alert } from "react-native";

import Button from "../screens/Button";
import Input from "../screens/Input";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loader from "../screens/Loader";

const Login = ({ navigation }) => {
  const [inputs, setInputs] = React.useState({ email: "", password: "" });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {
      handleError("Please input email", "email");
      isValid = false;
    }
    if (!inputs.password) {
      handleError("Please input password", "password");
      isValid = false;
    }
    if (isValid) {
      login();
    }
  };

  const login = () => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      let userData = await AsyncStorage.getItem("userData");
      if (userData) {
        userData = JSON.parse(userData);
        if (
          inputs.email == userData.email &&
          inputs.password == userData.password
        ) {
          navigation.navigate("Home");
          AsyncStorage.setItem(
            "userData",
            JSON.stringify({ ...userData, loggedIn: true })
          );
        } else {
          Alert.alert("Error", "Invalid Details");
        }
      } else {
        Alert.alert("Error", "User does not exist");
      }
    }, 3000);
  };

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <Loader visible={loading} />
      <View style={{ paddingTop: 50, paddingHorizontal: 20 }}>
        <Text style={{ color: "black", fontSize: 40, fontWeight: "bold" }}>
          로그인
        </Text>
        <Text style={{ color: "gray", fontSize: 18, marginVertical: 10 }}>
          로그인 정보를 입력해주세요
        </Text>
        <View style={{ marginVertical: 20 }}>
          <Input
            onChangeText={(text) => handleOnchange(text, "email")}
            onFocus={() => handleError(null, "email")}
            iconName="email-outline"
            label="Email"
            placeholder="이메일을 입력해주세요"
            error={errors.email}
          />
          <Input
            onChangeText={(text) => handleOnchange(text, "password")}
            onFocus={() => handleError(null, "password")}
            iconName="lock-outline"
            label="Password"
            placeholder="비밀번호를 입력해주세요"
            error={errors.password}
            password
          />
          <Button title="로그인" onPress={validate} />
          <Text
            onPress={() => navigation.navigate("RegistrationScreen")}
            style={{
              color: "black",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 16,
            }}
          >
            계정이 없으신가요? 회원가입
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
