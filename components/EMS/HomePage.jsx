import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import { useState } from "react";
import {
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";
import { ProgressBar, TouchableOpacity } from "react-native-web";
import { SwipeableButton } from "react-swipeable-button";
import * as Progress from "react-native-progress";
import PieChart from "react-native-pie-chart";
import { ImageBackground } from "react-native";
const element = <FontAwesome name="send" size={24} color="black" />;

export default function HomePage() {
  const [text, setText] = useState("");
  const [activeTab, setActiveTab] = useState("August");

  const tabs = ["June", "July", "August"];
  const handleSend = () => {
    if (text.trim().length > 0) {
      console.log("Sending:", text);
      setText("");
    }
  };
  const onSuccess = () => {
    console.log("Successfully Swiped!");
  };

  const widthAndHeight = 125;
  const series = [231, 431, 113, 109, 409];
  const sliceColor = ["#FACC15", "#028FCC", "#C802CC", "#30FF5E", "#F55F0B"];
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ backgroundColor: "#F9F9F9" }}>
        {/*EMS bar*/}
        <View style={style.Dashboard}>
          <View style={style.Icon1}>
            <TouchableOpacity>
              <AntDesign name="menu-unfold" size={28} color="white" />
            </TouchableOpacity>
            <Text style={style.EMS}>EMS</Text>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="bell-outline"
                size={34}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </View>
        {/*EMS bar*/}
        <View style={style.card1}>
          {/*Today*/}
          <View style={style.Feburary}>
            <View style={style.Day}>
              <Text style={style.Today}>Today</Text>
              <Text style={style.Feb}>27 Feburary 2024</Text>
            </View>
            <View style={style.Date}>
              <Text style={style.Tuesday}>Tuesday</Text>
              <Text style={style.Times}>8:30 AM to 06:30 PM</Text>
            </View>
          </View>
          {/*Today*/}
          {/* Time: 11:30 */}
          <View>
            <Text style={style.Time}>11:30 AM</Text>
          </View>
          {/* Time: 11:30 */}
          {/*Progress bar*/}
          <View style={style.ProgressBar}>
            <Progress.Bar
              progress={0.3}
              width={300}
              color="#6366FF"
              backgroundColor="gray"
            />
          </View>
          {/*Progress bar*/}
          {/*SwipeButtom*/}
          <View style={style.SwipeBar}>
            <View style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}>
              <SwipeableButton
                onSuccess={onSuccess}
                text="Swipe to sign In"
                text_unlocked="Signed in"
                color="#6366FF"
                backgroundColor="#ECECFF"
              />
            </View>
          </View>
        </View>
        {/*SwipeButtom*/}
        {/* 3 Months Performance */}
        <View>
          <View style={style.performance}>
            <View style={style.monthsPerformance}>
              <Text style={style.title}>3 Months Performance</Text>
              <View style={style.tabContainer}>
                {tabs.map((tab) => (
                  <TouchableOpacity
                    key={tab}
                    style={[
                      style.tab,
                      activeTab === tab && style.activeTab,
                      tab === "June" && style.leftTab,
                      tab === "August" && style.rightTab,
                    ]}
                    onPress={() => setActiveTab(tab)}
                  >
                    <Text
                      style={[
                        style.tabText,
                        activeTab === tab && style.activeTabText,
                      ]}
                    >
                      {tab}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            {/* 3 Months Performance */}
            {/* Pie Chart*/}
            <View>
              <Text style={style.month}>Month of August</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <ScrollView>
                <View style={style.PieChart}>
                  <PieChart
                    widthAndHeight={widthAndHeight}
                    series={series}
                    sliceColor={sliceColor}
                    coverRadius={0.75}
                    coverFill={"#FFF"}
                  />
                </View>
              </ScrollView>
              {/* Pie Chart*/}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  width: "50%",
                  height: "90%",
                }}
              >
                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ color: "#028FCC" }}>{"\u2B24"}</Text>
                  <Text style={{ color: "#C802CC" }}>{"\u2B24"}</Text>
                  <Text style={{ color: "#F55F0B" }}>{"\u2B24"}</Text>
                  <Text style={{ color: "#30FF5E" }}>{"\u2B24"}</Text>
                  <Text style={{ color: "#FACC15" }}>{"\u2B24"}</Text>
                </View>
                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Text>Present</Text>
                  <Text>Leave</Text>
                  <Text>Late Coming</Text>
                  <Text>Over Time</Text>
                  <Text>Early Leaving</Text>
                </View>
                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Text>06</Text>
                  <Text>01</Text>
                  <Text>03</Text>
                  <Text>02</Text>
                  <Text>00</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{ backgroundColor: "white", marginTop: "1%" }}>
          <Text style={style.payslips}>PaySlips</Text>
          <View style={style.payslip}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "600",
                    color: "#0D0733",
                    fontFamily: "sans-serif",
                    padding: 5,
                  }}
                >
                  August 2024
                </Text>
                <TouchableOpacity>
                  <Text style={{ color: "#6366FF", fontSize: 16, padding: 5 }}>
                    View
                  </Text>
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  fontSize: 14,
                  color: "#3D395C",
                  marginTop: 4,
                  padding: 5,
                }}
              >
                31 paid days
              </Text>

              <View>
                <Text
                  style={{
                    fontSize: 20,
                    lineHeight: 24.2,
                    color: "#3D395C",
                    fontWeight: "600",
                    marginTop: 10,
                    justifyContent: "center",
                    alignSelf: "center",
                  }}
                >
                  Net Pay XXXXXXXXXX
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 10,
                }}
              >
                <Text style={{ fontSize: 16, color: "#3D395C" }}>
                  Gross Pay XXXXXXXX
                </Text>
                <Text style={{ fontSize: 16, color: "#3D395C" }}>
                  Deductions XXXXXXXX
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 20,
                }}
              >
                <TouchableOpacity>
                  <Text style={{ color: "#6366FF", fontSize: 16, padding: 5 }}>
                    Download
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={{ color: "#6366FF", fontSize: 16, padding: 5 }}>
                    Unhide
                  </Text>
                </TouchableOpacity>
              </View>
          </View>
        </View>
        <View style={{ backgroundColor: "white", marginTop: "2%" }}>
          <View style={style.birthday}>
            <Text style={style.celebration}>Today's Celebrations</Text>
            <View style={{ marginLeft: 120 }}>
              <TouchableOpacity>
                <AntDesign name="ellipsis1" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View style={{ flexDirection: "row" }}>
              <View style={style.CircleShape}>
                <Text style={style.JS}>JS</Text>
              </View>

              <View style={style.name}>
                <Text
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: 16,
                    color: "#4C4C4C",
                  }}
                >
                  Jilla Sridhar
                </Text>
                <Text
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: 14,
                    color: "#6C6A75",
                  }}
                >
                  IT Department
                </Text>
                <Text
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: 12,
                    color: "#A5A4A8",
                  }}
                >
                  Cloud Manager
                </Text>
              </View>

              <View style={{ paddingLeft: 100 }}>

              </View>
            </View>
            <View>
              <View style={style.textField}>
                <TextInput
                  style={style.TextInput}
                  value={text}
                  onChangeText={setText}
                  placeholder="Wish Him"
                  placeholderTextColor="#bbb"
                />
                <TouchableOpacity style={style.sendButton} onPress={handleSend}>
                  <Ionicons name="send" size={24} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  Dashboard: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  Icon1: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "2%",
    backgroundColor: "#4e5bf2",
  },
  EMS: {
    color: "white",
    fontSize: "24px",
    marginRight: "60%",
    // fontFamily: "sans-serif",
  },
  card1: {
    backgroundColor: "#FFFFFF",
  },
  Feburary: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "3%",
    marginTop: "3%",
  },
  Day: {
    justifyContent: "space-between",
    margin: "1%",
    fontFamily: "sans-serif",
  },
  Today: {
    color: "#0D0733",
    fontSize: "16px",
    fontFamily: "sans-serif",
  },
  Feb: {
    color: "#7D7D7D",
    fontSize: "14px",
    fontFamily: "sans-serif",
  },
  Date: {
    justifyContent: "space-between",
    margin: "1%",
  },
  Tuesday: {
    fontFamily: "sans-serif",
    color: "#0D0733",
    fontSize: "16px",
  },
  Time: {
    textAlign: "center",
    color: "#6366FF",
    fontSize: 20,
  },
  Times: {
    color: "#0D0733",
    fontSize: "16px",
    fontFamily: "sans-serif",
  },
  ProgressBar: {
    alignItems: "center",
  },
  SwipeBar: {
    paddingTop: "20",
    width: "80%",
    height: "5%",
    margin: 20,
    marginTop: 10,
    marginLeft: 20,
    fontColor: "#4C4C4C",
    alignSelf: "center",
  },
  performance: {
    backgroundColor: "#FFFFFF",
    marginTop: "1%",
  },
  monthsPerformance: {
    marginLeft: "4%",
    margin: "2%",
  },
  backgroundImage: {
    height: 180,
    width: "100%",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "#A1A0A0",
    borderColor: "#A1A0A0",
    borderRadius: 5,
  },
  JS: {
    fontSize: 14,
    paddingLeft: 12,
    paddingTop: 12,
    color: "#5589B1",
  },

  CircleShape: {
    width: 40,
    height: 40,
    borderRadius: 150 / 2,
    backgroundColor: "#E7EDF1",
    marginLeft: 20,
    marginTop: 10,
  },
  name: {
    paddingLeft: 10,
    paddingTop: 10,
  },
  celebration: {
    fontSize: 18,
    fontFamily: "sans-serif",
    color: "#4C4C4C",
  },
  birthday: {
    paddingLeft: 20,
    flexDirection: "row",
  },
  payslips: {
    margin: "4%",
    fontSize: "18px",
    color: "#4C4C4C",
  },
  payslip: {
    padding: 20,
    marginTop: -10,
  },
  payslipstyle: {
    fontFamily: "sans-serif",
    fontSize: 18,
    color: "#4C4C4C",
  },
  font: {
    fontSize: 13,
    color: "#07041C",
    marginLeft: 8,
    marginTop: 1,
  },
  month: {
    paddingLeft: "5%",
    fontSize: "16px",
    color: "#4C4C4C",
  },
  textField: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  TextInput: {
    flex: 1,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 15,
    marginRight: 10,
    color: "#000",
    backgroundColor: "#f9f9f9",
  },
  sendButton: {
    height: 40,
    width: 40,
    backgroundColor: "#6366FF",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  PieChart: {
    padding: "10%",
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    color: "#555",
  },
  tabContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#6366FF",
    borderRadius: 25,
    marginLeft: -10,
    height: 50,
    width: "100%",
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  leftTab: {
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  rightTab: {
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  activeTab: {
    backgroundColor: "#6366FF",
  },
  tabText: {
    color: "#000",
  },
  activeTabText: {
    color: "#fff",
  },
});
