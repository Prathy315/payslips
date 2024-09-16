import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Dropdown } from "react-native-element-dropdown"; // Assuming you are using this library for Dropdown
import { AntDesign,Entypo } from "@expo/vector-icons";

const payslipData = [
  { month: "Apr 24", amount: "₹21,489" },
  { month: "May 24", amount: "₹21,489" },
  { month: "Jun 24", amount: "₹21,489" },
  { month: "July 24", amount: "₹21,489" },
  { month: "Aug 24", amount: "₹21,489" },
  { month: "Sep 24", amount: "₹21,489" },
  { month: "Oct 24", amount: "₹21,489" },
  { month: "Nov 24", amount: "₹21,489" },
  { month: "Dec 24", amount: "₹21,489" },
];

const PayslipScreen = () => {
  const [selectedYear, setSelectedYear] = useState("2024-2025");

  const renderPayslipItem = ({ item }) => (
    <View style={styles.payslipItem}>
      <Text style={styles.monthText}>{item.month}</Text>
      <Text style={styles.amountText}>{item.amount}</Text>
      <TouchableOpacity>
        <Entypo
          name="eye"
          size={24}
          color="#6366FF"

        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="download-outline" size={24} color="blue" />
      </TouchableOpacity>
    </View>
  );

  const data = [
    { label: "2024-2025", value: "1" },
    { label: "2023-2024", value: "2" },
    { label: "2022-2023", value: "3" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={styles.iconContainer}>
            <Ionicons name="chevron-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Payslips</Text>
        </View>
        <TouchableOpacity style={styles.iconContainer}>
          <Ionicons name="notifications-outline" size={25} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
      <View style={styles.yearSelectionContainer}>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          value={selectedYear}
          onChange={(item) => {
            setSelectedYear(item.value);
          }}
          renderRightIcon={() => (
            <AntDesign name="down" size={24} color="#6366FF" />
          )}
        />
      </View>
      <View styles={{padding:"2%"}}>
        <FlatList
          data={payslipData}
          keyExtractor={(item) => item.month}
          renderItem={renderPayslipItem}
        />
        <TouchableOpacity style={styles.downloadButton}>
          <Text style={styles.downloadButtonText}>
            Download payroll statement
          </Text>
          <Ionicons name="download-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //padding: 16,
    backgroundColor: "#fff",
  },
  headerContainer: {
    backgroundColor: "#6366FF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: -1,
    fontFamily: "sans-serif",
    alignSelf: "center",
  },
  iconContainer: {
    padding: 5,
    paddingBottom: 7,
  },
  yearSelectionContainer: {
    position: "relative",
    zIndex: 1,
    padding: 10,
  },
  dropdown: {
    height: 50,
    borderColor: "#6366FF",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    alignSelf: "flex-end",
    top: 10,
    right: 10,
    borderRadius: 30,
    width: "35%",
  },
  placeholderStyle: {
    fontSize: 16,
    color: "#6366FF",
  },
  selectedTextStyle: {
    fontSize: 16,
    color: "#6366FF",
  },
  iconStyle: {
    marginRight: 8,
  },
  payslipItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "3%",
    backgroundColor: "#FFF",
    marginBottom: 8,
    top:5,
    borderRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#CCCCCC",
  },
  monthText: {
    fontSize: 16,
    color: "#333",
  },
  amountText: {
    fontSize: 16,
    color: "#333",
  },
  downloadButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6366FF",
    padding: 16,
    borderRadius: 30,
    marginTop: 16,
    width:"70%",
    alignSelf:"center"
  },
  downloadButtonText: {
    fontSize:" 16px",
    color: "#FFF",
    marginRight: 8,
  },
});

export default PayslipScreen;
