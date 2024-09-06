import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Attendance() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="chevron-back" size={34} color="white" />
        <Text style={styles.headertext}>Documents</Text>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={34} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <View>
          <Text style={{ fontSize: "18px" }}>E Cards</Text>
          <Text style={{ fontSize: "18px" }}>100093</Text>
          <Text>Last updated on 24 Nov 2024</Text>
        </View>
        <TouchableOpacity style={{ alignSelf: "flex-start" }}>
          <AntDesign name="download" size={22} color="#4e5bf2" />
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <View>
          <Text style={{ fontSize: "18px" }}>Hr Policies</Text>
          <Text style={{ fontSize: "18px" }}>
            Micronsure HR policies..3,0janPDF
          </Text>
          <Text>Last updated on 20 Nov 2024</Text>
        </View>
        <TouchableOpacity style={{ alignSelf: "flex-start" }}>
          <AntDesign name="download" size={22} color="#4e5bf2" />
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <View>
          <Text style={{ fontSize: "18px" }}>Form 16</Text>
          <Text style={{ fontSize: "18px" }}>TDS Form 16...PDF</Text>
          <Text>Last updated on 20 Nov 2024</Text>
        </View>
        <TouchableOpacity style={{ alignSelf: "flex-start" }}>
          <AntDesign name="download" size={22} color="#4e5bf2" />
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <Text style={styles.bodytext}>Pay slips</Text>
        <Text style={styles.bodytext1}>View</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.bodytext}>Forms</Text>
        <Text style={styles.bodytext1}>View</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "fff",
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
    marginRight: "45%",
    flexDirection: "row",
  },
  card: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "3%",
    margin: 20,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    fontSize: "16px",
    marginTop: "4%",
  },
  payslips: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "3%",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    marginTop: "4%",
  },
  form: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "3%",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    marginTop: "4%",
  },
  bodytext: {
    fontSize: "18px",
    color: "black",
    fontWeight: 400,
  },
  bodytext1: {
    fontSize: "18px",
    color: "#4e4bf2",
  },
});
