import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import PieChart from "react-native-pie-chart";
import { ImageBackground } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Payslips() {
  const [activeTab, setActiveTab] = useState("Payslip");

  const tabs = ["Payslip", "Payslip Summary"];
  const widthAndHeight = 150;
  const series = [537, 900];
  const sliceColor = ["#FFAE34", "#8465DB"];
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

        <View style={styles.monthSelector}>
          {["Apr", "May", "Jun", "Jul", "Aug"].map((month) => (
            <Text key={month} style={styles.monthText}>
              {month}
            </Text>
          ))}
        </View>
      </View>
      <View style={styles.container1}>
        <View style={styles.tabContainer}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[
                styles.tab,
                activeTab === tab && styles.activeTab,
                tab === "payslip" && styles.leftTab,
                tab === "paysilp Summary" && styles.rightTab,
              ]}
              onPress={() => setActiveTab(tab)}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab && styles.activeTabText,
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.title}>
        <PieChart
          widthAndHeight={widthAndHeight}
          series={series}
          sliceColor={sliceColor}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: "40%" }}>
          <View style={{ flexDirection: "row", padding: "5%" }}>
            <Text style={styles.bulletbotton1}>{"\u2B24"}</Text>
            <Text style={styles.number1}>₹ 82,500</Text>
          </View>
          <View>
            <Text style={styles.grosspay}>Gross Pay</Text>
          </View>
        </View>
        <View style={{ width: "50%" }}>
          <View
            style={{
              flexDirection: "row",
              padding: "5%",
              justifyContent: "center",
            }}
          >
            <Text style={styles.bulletbotton2}>{"\u2B24"}</Text>
            <Text style={styles.number1}>₹ 1200</Text>
          </View>
          <View>
            <Text style={styles.deductions}>Deductions</Text>
          </View>
        </View>
      </View>

      <View style={styles.payslip}>
        <ImageBackground
          source={require("../../assets/images/Frame.png")}
          style={styles.backgroundImage}
        >
          <View style={{ width: "100%", alignItems: "center" }}>
            <Text style={styles.image}>
              You have earned Net Pay of June Month
            </Text>
          </View>
          <View>
            <Text style={styles.netpay}>₹ 22,894.00</Text>
          </View>
          <View style={styles.netpay1}>
            <Text style={styles.netpaytext}> Net Pay</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.download}>
        <TouchableOpacity style={styles.downloadButton}>
          <Text style={styles.downloadButtonText}>
            Download Payslip{" "}
            <AntDesign name="download" size={20} color="white" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerContainer: {
    backgroundColor: "#5E5CE6",
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
  yearMonthContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "3%",
    backgroundColor: "#FFFFFF",
  },
  yearSelection: {
    zIndex: 2,
  },
  dropdownButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#6366FF",
    borderRadius: 20,
    paddingHorizontal: "8%",
    paddingVertical: "10%",
    backgroundColor: "#FFFFFF",
    width: 120,
  },
  dropdownButtonText: {
    color: "#6366FF",
    fontSize: "16px",
    marginRight: "5%",
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "#6366FF",
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    position: "absolute",
    width: 120,
    zIndex: 3,
  },
  dropdownItem: {
    padding: "4%",
    textAlign: "center",
    color: "#6366FF",
  },
  monthSelector: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
    borderRadius: 40,
    padding: "3%",
    width: "100%",
    marginLeft: -35,
  },
  monthText: {
    marginHorizontal: "4%",
    fontSize: "15px",
    color: "black",
    marginLeft: "8%",
  },
  container1: {
    padding: "6%",
    paddingHorizontal: "6%",
  },
  tabContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#6366FF",
    borderRadius: 20,
    shadowOpacity: 10,
    width: "90%",
  },
  tab: {
    flex: 1,
    paddingVertical: "3%",
    alignItems: "center",
    justifyContent: "center",
  },
  leftTab: {
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  rightTab: {
    fontSize: "16px",
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  activeTab: {
    backgroundColor: "#6366FF",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  tabText: {
    color: "#000",
  },
  activeTabText: {
    color: "#fff",
  },
  title: {
    fontSize: "24px",
    alignItems: "center",
  },
  bulletbotton1: {
    color: "#8465DB",
    paddingLeft: "15%",
  },
  bulletbotton2: {
    color: "#FFAE34",
    paddingLeft: "45%",
  },
  number1: {
    paddingLeft: "5%",
    fontSize: "18px",
    color: "#0D0733",
  },
  grosspay: {
    fontSize: "14px",
    color: "#606060",
    paddingLeft: "30%",
  },
  deductions: {
    fontSize: "14px",
    color: "#606060",
    paddingLeft: "55%",
  },
  payslip: {
    top:'5%'
  },
  image: {
    color: "#606060",
    fontSize: "16px",
    padding: "3%",
  },
  backgroundImage: {
    height: "115%",
    width: "100%",
  },
  netpay: {
    fontSize: "20px",
    color: "#6366FF",
    fontWeight: "600",
    marginTop: "2%",
    justifyContent: "center",
    alignSelf: "center",
  },
  netpay1: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  netpaytext: {
    fontSize: "16px",
    color: "#606060",
    paddingLeft: "40%",
    fontStyle: "italic",
  },
  download:{
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    bottom:10,
    left:0,
    right:0
  },
  downloadButton: {
    backgroundColor: "#4C4CF1",
    padding: "3%",
    borderRadius: 30,
    alignItems: "center",
    marginHorizontal: "20%",
    marginBottom: "5%",
    width: "50%",
    
  },
  downloadButtonText: {
    color: "#fff",
    fontSize: "16px",
  },
});
