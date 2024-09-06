import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {MaterialCommunityIcons,FontAwesome5,Ionicons,FontAwesome,FontAwesome6,AntDesign,} from "@expo/vector-icons";

export default function PaysScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <AntDesign name="menu-unfold" size={28} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Salary</Text>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={25} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.title}>Categories</Text>
      </View>

      <View>
        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.categories}>
            <View style={styles.iconBackground}>
              <MaterialCommunityIcons
                name="newspaper"
                size={30}
                color="white"
              />
            </View>
            <Text style={styles.text}>Payslips</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categories}>
            <View style={styles.iconBackground}>
              <FontAwesome5 name="clipboard-list" size={28} color="white" />
            </View>
            <Text style={styles.text}>YTD Statement</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categories}>
            <View style={styles.iconBackground}>
              <Ionicons name="newspaper-outline" size={28} color="white" />
            </View>
            <Text style={styles.text}>PF YTD Reports</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.categories}>
            <View style={styles.iconBackground}>
              <FontAwesome6 name="file-invoice" size={28} color="white" />
            </View>
            <Text style={styles.text}>IT Statements</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categories}>
            <View style={styles.iconBackground}>
              <FontAwesome name="rupee" size={28} color="white" />
            </View>
            <Text style={styles.text}>IT Declaration</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "3%",
    backgroundColor: "#6366FF",
  },
  headerText: {
    fontSize: "18px",
    color: "white",
    paddingRight: "65%",
  },
  title: {
    fontSize: "18px",
    marginTop: "5%",
    padding: "2%",
    fontWeight: "500",
  },
  text:{
    fontSize: "14px",
    color: "#606060",
    },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding:"2%",
  },
  categories: {
   alignItems: "center",
  },
  iconBackground: {
    backgroundColor: "#6366FF",
    borderRadius: 30,
    padding: "14%",
    width: 60,
    height:60,
    alignItems: "center",
  },
});
