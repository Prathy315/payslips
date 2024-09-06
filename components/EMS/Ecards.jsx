import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Home() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedYear, setSelectedYear] = useState("2024-2025");
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const selectYear = (year) => {
    setSelectedYear(year);
    setDropdownVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="chevron-back" size={34} color="white" />
        <Text style={styles.headertext}>Payslips</Text>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={34} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.yearMonthContainer}>
        <View style={styles.yearSelection}>
          <TouchableOpacity
            style={styles.dropdownButton}
            onPress={toggleDropdown}
          >
            <Text style={styles.dropdownButtonText}>{selectedYear}</Text>
            <Ionicons
              name={
                dropdownVisible ? "chevron-up-outline" : "chevron-down-outline"
              }
              size={16}
              color="#6366FF"
            />
          </TouchableOpacity>
          {dropdownVisible && (
            <View style={styles.dropdown}>
              <TouchableOpacity onPress={() => selectYear("2024-2025")}>
                <Text style={styles.dropdownItem}>2024-2025</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => selectYear("2023-2024")}>
                <Text style={styles.dropdownItem}>2023-2024</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
      <View style={{ padding: "4%" }}>
        <View style={styles.First}>
          <Text>Apr 24</Text>
          <Text>₹22,894</Text>
          <TouchableOpacity>
            <Entypo name="eye" size={24} color="#4e5bf2" />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="download" size={24} color="#4e5bf2" />
          </TouchableOpacity>
        </View>
        <View style={{ paddingTop: "4%" }}>
          <View style={styles.First}>
            <Text>May 24</Text>
            <Text>₹22,894</Text>
            <TouchableOpacity>
              <Entypo name="eye" size={24} color="#4e5bf2" />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="download" size={24} color="#4e5bf2" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ paddingTop: "4%" }}>
          <View style={styles.First}>
            <Text>Jun 24</Text>
            <Text>₹22,894</Text>
            <TouchableOpacity>
              <Entypo name="eye" size={24} color="#4e5bf2" />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="download" size={24} color="#4e5bf2" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ paddingTop: "4%" }}>
          <View style={styles.First}>
            <Text>July 24</Text>
            <Text>₹22,894</Text>
            <TouchableOpacity>
              <Entypo name="eye" size={24} color="#4e5bf2" />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="download" size={24} color="#4e5bf2" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ paddingTop: "4%" }}>
          <View style={styles.First}>
            <Text>Aug 24</Text>
            <Text>₹22,894</Text>
            <TouchableOpacity>
              <Entypo name="eye" size={24} color="#4e5bf2" />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="download" size={24} color="#4e5bf2" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ paddingTop: "4%" }}>
          <View style={styles.First}>
            <Text>Sep 24</Text>
            <Text>₹21,489</Text>
            <TouchableOpacity>
              <Entypo name="eye" size={24} color="#4e5bf2" />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="download" size={24} color="#4e5bf2" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ paddingTop: "4%" }}>
          <View style={styles.First}>
            <Text>Oct 24</Text>
            <Text>₹21,489</Text>
            <TouchableOpacity>
              <Entypo name="eye" size={24} color="#4e5bf2" />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="download" size={24} color="#4e5bf2" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ paddingTop: "4%" }}>
          <View style={styles.First}>
            <Text>Nov 24</Text>
            <Text>₹21,489</Text>
            <TouchableOpacity>
              <Entypo name="eye" size={24} color="#4e5bf2" />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="download" size={24} color="#4e5bf2" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ paddingTop: "4%" }}>
          <View style={styles.First}>
            <Text>Dec 24</Text>
            <Text>₹21,489</Text>
            <TouchableOpacity>
              <Entypo name="eye" size={24} color="#4e5bf2" />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="download" size={24} color="#4e5bf2" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "fff",
    //width:"100%",
    //height: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#4e5bf2",
    padding: "4%",
  },
  headertext: {
    fontSize: "24px",
    color: "#fff",
    marginRight: "55%",
  },
  yearMonthContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "4%",
    backgroundColor: "#FFFFFF",
    paddingLeft: "65%",
    //width:"100%",
    //height: "100%",
  },
  yearSelection: {
    //position: "relative",
    zIndex: 2,
  },
  dropdownButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#6366FF",
    borderRadius: 25,
    //  paddingHorizontal: "8%",
    //paddingVertical: "10%",
    padding: "8%",
    backgroundColor: "#FFFFFF",
    width: "130%",
  },
  dropdownButtonText: {
    color: "#6366FF",
    fontSize: "16px",
    marginRight: "5%",
  },
  dropdown: {
    marginTop: "2%",
    borderWidth: 2,
    borderColor: "#6366FF",
    //borderRadius: 25,
    backgroundColor: "#FFFFFF",
    position: "static",
    padding: "8%",
    alignItems: "center",
    width: "130%",
  },
  dropdownItem: {
    // padding: "4%",
    textAlign: "center",
    color: "#6366FF",
  },
  First: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "2%",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    alignItems: "center",
  },
});
