import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  ScrollView,
  Alert,
} from "react-native";
import Button from "./Button";
import Input from "./Input";
import Loader from "./Loader";

const RegistrationScreen = ({ navigation }) => {
  const [inputs, setInputs] = React.useState({
    email: "",
    phone: "",
    password: "",
    address: "",
  });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email) {
      handleError("이메일을 입력해주세요", "email");
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError("이메일이 유효한지 확인해주세요", "email");
      isValid = false;
    }

    if (!inputs.address) {
      handleError("주소를 입력해주세요", "address");
      isValid = false;
    }

    if (!inputs.phone) {
      handleError("휴대전화 번호를 입력해주세요", "phone");
      isValid = false;
    }

    if (!inputs.password) {
      handleError("비밀번호를 입력해주세요", "password");
      isValid = false;
    } else if (inputs.password.length < 5) {
      handleError("비밀번호는 최소 5자 이상 해주세요", "password");
      isValid = false;
    }

    if (isValid) {
      register();
    }
  };

  const register = () => {
    setLoading(true);
    setTimeout(() => {
      try {
        setLoading(false);
        AsyncStorage.setItem("userData", JSON.stringify(inputs));
        navigation.navigate("Login");
      } catch (error) {
        Alert.alert("Error", "Something went wrong");
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
      <ScrollView
        contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 20 }}
      >
        <Text
          style={{
            color: "black",
            fontSize: 40,
            fontWeight: "bold",
            marginTop: 20,
          }}
        >
          회원가입
        </Text>
        <Text style={{ color: "gray", fontSize: 18, marginVertical: 10 }}>
          회원정보를 입력해주세요
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
            keyboardType="numeric"
            onChangeText={(text) => handleOnchange(text, "phone")}
            onFocus={() => handleError(null, "phone")}
            iconName="phone-outline"
            label="휴대전화 번호"
            placeholder="휴대전화 번호를 입력해주세요"
            error={errors.phone}
          />
          <Input
            onChangeText={(text) => handleOnchange(text, "password")}
            onFocus={() => handleError(null, "password")}
            iconName="lock-outline"
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            error={errors.password}
            password
          />
          <Input
            onChangeText={(text) => handleOnchange(text, "address")}
            onFocus={() => handleError(null, "address")}
            iconName="home"
            label="주소"
            placeholder="주소를 입력해주세요"
            error={errors.address}
          />
          <Button title="회원가입" onPress={validate} />
          <Text
            onPress={() => navigation.navigate("Login")}
            style={{
              color: "black",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 16,
            }}
          >
            이미 계정이 있으신가요? 로그인
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegistrationScreen;
