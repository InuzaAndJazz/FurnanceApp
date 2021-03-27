import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dimensions,
  Image,
} from "react-native";

class Settings extends Component {

  goHome2 = () =>{
    this.prop.navigation.navigate("Home2")
  }

  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="height">
        <ImageBackground
          source={require("../assets/background.jpg")}
          imageStyle={styles.imageBackground}
          style={styles.imageBackground}
        >
          <View style={styles.container}>
            <View style={styles.container}>
              <Image source={require("../assets/logo.png")} />
            </View>

            <View
              style={[
                styles.container,
                styles.borderContainer,
                { flex: 3, justifyContent: "flex-start" },
              ]}
            >
              <Text
                style={{
                  margin: 10,
                  color: "rgba(200,255,255, 1)",
                  padding: "5%",
                  fontWeight: "bold",
                  fontSize: 24,
                }}
              >
                Iniciar Sesión 1
              </Text>
              <TextInput
                placeholder="Username"
                placeholderTextColor="rgba(60,221,229, 0.8)"
                style={styles.textInput}
              />
              <TextInput
                placeholder="Password"
                placeholderTextColor="rgba(60,221,229, 0.8)"
                secureTextEntry={true}
                style={styles.textInput}
              />
              <TouchableOpacity style={styles.buttonContainer}>
                <Text
                  style={styles.buttonText}
                  onPress={this.goHome2}
                >
                  Ingresar
                </Text>
              </TouchableOpacity>
              <Text style={styles.link}>Crear cuenta</Text>
              <Text style={styles.link}>Olvidé mi clave</Text>
            </View>
            <View style={{ flex: 1 }} />
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      alignItems: "center",
      justifyContent: "center",
    },
    imageBackground: {
      position: "absolute",
      left: 0,
      top: 0,
      resizeMode: "stretch",
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height,
    },
    textInput: {
      borderColor: "rgba(60,221,229, 1)",
      color: "rgba(60,221,229, 1)",
      borderWidth: 1,
      borderRadius: 20,
      margin: 10,
      paddingVertical: 5,
      width: "70%",
      textAlign: "center",
    },
    borderContainer: {
      width: "80%",
      borderWidth: 1,
      borderColor: "rgba(60,221,229, 1)",
      backgroundColor: "rgba(60, 216, 220, 0.05)",
      borderRadius: 10,
    },
    buttonContainer: {
      borderColor: "rgba(60,221,229, 1)",
      borderWidth: 1,
      backgroundColor: "rgba(48,221,229, 1)",
      borderRadius: 20,
      width: "70%",
      paddingVertical: 10,
      marginTop: "10%",
      margin: 10,
    },
    buttonText: {
      fontSize: 16,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
    },
    link: {
      fontWeight: "bold",
      textDecorationLine: "underline",
      color: "rgba(200,255,255, 1)",
      padding: 8,
    },
  });


export default Settings;
