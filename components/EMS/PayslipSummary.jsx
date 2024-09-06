import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ImageBackground } from "react-native";
import { FlatList } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { ScrollView } from "react-native-web";

export default function PayslipSummary() {
  const [activeTab, setActiveTab] = useState("Payslip Summary");
  const tabs = ["Payslip", "Payslip Summary"];
  const [selectedCard, setSelectedCard] = useState(0);
  const [selectedYear, setSelectedYear] = useState("2024-2025");
  const [selectedMonth, setSelectedMonth] = useState(false);

  const years = ["2024-2025", "2023-2024"];
  const months = [
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const YearMonthSelection = () => {
    return (
      <View style={styles.yearMonthContainer}>
        {/* Year Selection */}
        <TouchableOpacity style={styles.yearSelector}>
          <Text style={styles.yearText}>{selectedYear}</Text>
          <Ionicons name="chevron-down" size={18} color="#5B67CA" />
        </TouchableOpacity>

        {/* Month Selection */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {months.map((month, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.monthButton]}
              onPress={() => setSelectedMonth(month)}
            >
              <Text
                style={[
                  styles.monthText,
                  selectedMonth === month && styles.selectedMonthText,
                ]}
              >
                {month}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  };
  const employeeDetails = {
    employeeName: "KANDUKURI RAJKUMAR",
    employeeID: "100093",
    employeeJob: "UX Engineer,IT",
    employeeBank: "HDFC",
    employeeAccountNumber: "50100415212030",
    date: "17 OCT 2022",
    location: "Hyderabad",
    uan: "101880971748",
    lop: "01",
  };
  const earningsData = [
    { label: "Basic", amount: "₹11,205.00" },
    { label: "HRA", amount: "₹4,482.00" },
    { label: "CONVEYANCE", amount: "₹1,600.00" },
    { label: "ADDITIONAL ALLOWANCE", amount: "₹20,409.00" },
  ];

  const deductionsData = [
    { label: "PF", amount: "₹12,05.00" },
    { label: "Prof Tax", amount: "₹200.00" },
  ];

  // Render function for each card in the slider
  const renderCard = ({ item, index }) => (
    <View style={styles.card}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <Text style={styles.cardTitle}>
            {index === 0 ? "Earnings Details" : "Deductions Details"}
          </Text>
          {item.map((detail, idx) => (
            <Text
              key={idx}
              style={{
                fontSize: "16px",
                fontFamily: "sans-serif",
                color: "#606060",
                padding: "6px",
              }}
            >
              {detail.label}
            </Text>
          ))}
        </View>
        <View>
          <Text style={styles.cardTitle}>₹26,409.00</Text>
          {item.map((detail, idx) => (
            <Text
              key={idx}
              style={{
                fontSize: "16px",
                color: "#3D3956",
                fontFamily: "sans-serif",
                padding: "6px",
              }}
            >
              {detail.amount}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={styles.iconContainer}>
            <Ionicons name="chevron-back" size={26} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Payslips</Text>
        </View>
        <TouchableOpacity style={styles.iconContainer}>
          <Ionicons name="notifications-outline" size={28} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
     

      <YearMonthSelection />

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
      
      <View style={styles.sliderContainer}>
        <FlatList
          data={[earningsData, deductionsData]}
          renderItem={renderCard}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={(e) => {
            const contentOffsetX = e.nativeEvent.contentOffset.x;
            const currentIndex = Math.round(
              contentOffsetX / e.nativeEvent.layoutMeasurement.width
            );
            setSelectedCard(currentIndex);
          }}
        />
      </View>
      
      <View style={styles.dotsContainer}>
        {[0, 1].map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              selectedCard === i ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
      <View style={styles.employeecard}>
        <Text style={styles.detailsTitle}>Employee Details</Text>
        <Text style={{ paddingLeft: "75%" }}>Date of joining</Text>
        <View style={styles.detailsContainer}>
          <View>
            <Text style={{ fontFamily: "sans-serif", color: "#4A4A4A" }}>
              {employeeDetails.employeeName}
            </Text>
            <Text style={{ fontFamily: "sans-serif", color: "#4A4A4A" }}>
              {employeeDetails.employeeID}
            </Text>
            <Text style={{ fontFamily: "sans-serif", color: "#4A4A4A" }}>
              {employeeDetails.employeeJob}
            </Text>
            <Text
              style={{
                fontFamily: "sans-serif",
                color: "#4A4A4A",
                marginTop: "15%",
              }}
            >
              {employeeDetails.employeeBank}
            </Text>
            <Text style={{ fontFamily: "sans-serif", color: "#4A4A4A" }}>
              {employeeDetails.employeeAccountNumber}
            </Text>
          </View>
          <View style={{ alignItems: "flex-end", fontFamily: "sans-serif" }}>
            <Text style={{ fontFamily: "sans-serif", color: "#4A4A4A" }}>
              {employeeDetails.date}
            </Text>
            <Text style={{ fontFamily: "sans-serif", color: "#4A4A4A" }}>
              {employeeDetails.location}
            </Text>
          </View>
        </View>
        <View style={{ top: 15 }}>
          <View style={{ flexDirection: "row", marginTop: "-55px" }}>
            <Text
              style={{
                fontFamily: "sans-serif",
                color: "#606060",
                marginLeft: "60%",
              }}
            >
              PF UAN{" "}
            </Text>
            <Text style={{ fontFamily: "sans-serif", color: "#2B264C" }}>
              {employeeDetails.uan}
            </Text>
          </View>
          <View style={{ top: 5, flexDirection: "row" }}>
            <Text
              style={{
                fontFamily: "sans-serif",
                color: "#606060",
                marginLeft: "65%",
              }}
            >
              LOP{" "}
            </Text>
            <Text style={{ fontFamily: "sans-serif", color: "#2B264C" }}>
              {employeeDetails.lop}
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.downloadButton}>
        <Text style={styles.downloadButtonText}>
          Download Payslip <AntDesign name="download" size={20} color="white" />
        </Text>
      </TouchableOpacity>
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
    backgroundColor: "#F4F3FF",
    paddingHorizontal: 10,
    borderRadius: 25,
    marginTop: 20,
    marginHorizontal: 15,
  },
  yearSelector: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#5B67CA",
    borderRadius: 25,
    paddingHorizontal: 1,
    paddingVertical: 10,
    marginRight: 10,
    backgroundColor: "white",
  },
  yearText: {
    fontSize: 16,
    color: "#5B67CA",
    marginRight: 1,
  },
  monthButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 25,
    backgroundColor: "#F4F3FF",
    width: "14%",
  },

  monthText: {
    fontSize: 16,
    color: "black",
  },
  selectedMonthText: {
    color: "#5B67CA",
  },
  container1: {
    padding: "4%",
  },
  tabContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#6200ee",
    borderRadius: 20,
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
    backgroundColor: "#6200ee",
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
  payslip: {
    padding: "2%",
  },
  image: {
    color: "#606060",
    fontSize: "16px",
    padding: "3%",
    //paddingLeft:"10%",
    // alignItems:"center",
    //justifyContent: "center",
  },
  backgroundImage: {
    height: "105%",
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
    //marginTop: "1%",
  },
  netpaytext: {
    fontSize: "16px",
    color: "#606060",
    paddingLeft: "40%",
    fontStyle: "italic",
  },
  sliderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "2%",
  },
  card: {
    backgroundColor: "#FFF",
    marginHorizontal: 10,
    marginVertical: 1,
    padding: "5%",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    width: 380,
    height: 160,
    justifyContent: "center",
    paddingBottom: "9%",
  },
  cardTitle: {
    fontFamily: "sans-serif",
    fontWeight: "400",
    fontSize: "16px",
    color: "#0D0733",
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "1%",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "black",
  },
  inactiveDot: {
    backgroundColor: "#D3D3D3",
  },
  employeecard: {
    padding: "3%",
    border: "1px solid #EDEDED",
    height: "21%",
    marginBottom: 40,
    borderBottomEndRadius: 10,
  },
  detailsTitle: {
    fontFamily: "sans-serif",
    fontWeight: "400",
    fontSize: "18px",
    color: "##0D0733",
  },
  detailsContainer: {
    marginTop: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    color: "#4A4A4A",
    fontSize: "16px",
  },
  downloadButton: {
    backgroundColor: "#4C4CF1",
    padding: "3%",
    borderRadius: 50,
    alignItems: "center",
    marginHorizontal: 80,
    marginTop: -25,
    marginBottom: 10,
  },
  downloadButtonText: {
    color: "#fff",
    fontSize: "18px",
  },
});
