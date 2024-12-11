import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../utils/colors";
import { fonts } from "../utils/fonts";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("LOGIN");
  };

  const handleSignup = () => {
    navigation.navigate("SignUp");
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <Text style={styles.title}>Nagrik aur Samvidhan</Text>
        <Text style={styles.subTitle}>Gaming Your Way to Constitutional Wisdom!</Text>
      </View>
      
      <View style={styles.bottomContent}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={[styles.loginButtonWrapper, { backgroundColor: colors.black }]} 
            onPress={handleLogin}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.signupButtonWrapper} 
            onPress={handleSignup}
          >
            <Text style={styles.signupButtonText}>Sign-up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    paddingVertical: 40,
  },
  topContent: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  bottomContent: {
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontFamily: fonts.SemiBold,
    color: colors.black,
    textAlign: 'center',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 16,
    color: colors.black,
    fontFamily: fonts.Medium,
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '80%',
    height: 60,
    borderRadius: 30,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: colors.black,
  },
  loginButtonWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black,
  },
  signupButtonWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  loginButtonText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.SemiBold,
  },
  signupButtonText: {
    color: colors.black,
    fontSize: 18,
    fontFamily: fonts.SemiBold,
  },
});