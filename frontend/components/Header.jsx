import { TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Avatar } from "react-native-paper";
import { colors } from "../styles/styles";

const Header = ({ back = false, emptyCart = false }) => {
  const navigate = useNavigation();
  const route = useRoute();
  const emptyCartHandler = () => {
    console.log("Empty Cart");
  };
  return (
    <>
      {back && (
        <TouchableOpacity
          style={{
            position: "absolute",
            left: 20,
            top: 40,
            zIndex: 10,
          }}
          onPress={() => navigate.goBack()}
        >
          <Avatar.Icon
            icon={"arrow-left"}
            color={colors.color3}
            style={{ backgroundColor: colors.color4 }}
          />
        </TouchableOpacity>
      )}
      {emptyCart && (
        <TouchableOpacity
          style={{
            position: "absolute",
            left: 20,
            top: 40,
            zIndex: 10,
          }}
          onPress={
            emptyCart ? emptyCartHandler : () => navigate.navigate("cart")
          }
        >
          <Avatar.Icon
            icon={emptyCart ? "delete-outline" : "cart-outline"}
            color={
              route.name === "productDetails" ? colors.color2 : colors.color3
            }
            style={{ backgroundColor: colors.color4 }}
          />
        </TouchableOpacity>
      )}
    </>
  );
};

export default Header;
