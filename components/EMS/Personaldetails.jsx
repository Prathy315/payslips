import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import {
  Ionicons,
  FontAwesome,
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

export default function Profile() {
  return (
    <View>
      <View style={styles.header}>
        <Ionicons name="chevron-back" size={34} color="white" />
        <Text style={styles.headertext}>Profile</Text>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={34} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.profile}>
        <Text style={styles.rajkumar}>KANDUKURI RAJKUMAR</Text>
        <Text style={styles.temple}>
          Temple Tree Technologies Private Limited
        </Text>
        <Text style={styles.ux}>UX Engineer,100093</Text>
        <Text style={styles.ux}>9437857687,7586950432</Text>
        <Text style={styles.ux}>rajkumar@micronsure.com,Hyderabad</Text>
      </View>
      <View style={{ padding: "3%" }}>
        <View style={styles.box1}>
          <View style={styles.box}>
            <FontAwesome name="user-o" size={24} color="black" />
            <View>
              <Text style={{ fontSize: "22px" }}>Personal Details</Text>
            </View>
            <View>
              <AntDesign name="right" size={24} color="#4e5bf2" />
            </View>
          </View>
          <View style={styles.box}>
            <FontAwesome5 name="folder-open" size={24} color="black" />
            <View>
              <Text style={{ fontSize: "22px" }}>Experience Details</Text>
            </View>
            <View>
              <AntDesign name="right" size={24} color="#4e5bf2" />
            </View>
          </View>
          <View style={styles.box}>
            <SimpleLineIcons name="graduation" size={24} color="black" />
            <View>
              <Text style={{ fontSize: "22px" }}>Education Details</Text>
            </View>
            <View>
              <AntDesign name="right" size={24} color="#4e5bf2" />
            </View>
          </View>
          <View style={styles.box}>
            <MaterialCommunityIcons
              name="certificate"
              size={24}
              color="black"
            />
            <View>
              <Text style={{ fontSize: "22px" }}>Certification Details</Text>
            </View>
            <View>
              <AntDesign name="right" size={24} color="#4e5bf2" />
            </View>
          </View>
        </View>
      </View>
      <View style={{ padding: "5%" }}>
        <View style={styles.box2}>
          <View style={styles.box}>
            <MaterialIcons name="account-balance" size={24} color="black" />
            <View>
              <Text style={{ fontSize: "24px" }}>Accounts</Text>
            </View>
            <View>
              <AntDesign name="right" size={24} color="#4e5bf2" />
            </View>
          </View>
          <View style={styles.box}>
            <MaterialCommunityIcons
              name="file-document"
              size={24}
              color="black"
            />
            <View>
              <Text style={{ fontSize: "22px" }}>Documents</Text>
            </View>
            <View>
              <AntDesign name="right" size={24} color="#4e5bf2" />
            </View>
          </View>
          <View style={styles.box}>
            <FontAwesome5 name="users" size={24} color="black" />
            <View>
              <Text style={{ fontSize: "24px" }}>Peers</Text>
            </View>
            <View>
              <AntDesign name="right" size={24} color="#4e5bf2" />
            </View>
          </View>
          <View style={styles.box}>
            <Entypo name="laptop" size={24} color="black" />
            <View>
              <Text style={{ fontSize: "24px" }}>Assests</Text>
            </View>
            <View>
              <AntDesign name="right" size={24} color="#4e5bf2" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#4e5bf2",
    padding: "4%",
  },
  headertext: {
    fontSize: "20px",
    color: "#fff",
    marginRight: "65%",
    flexDirection: "row",
  },
  profile: {
    alignItems: "center",
    paddingTop: "5%",
  },
  rajkumar: {
    fontSize: "18px",
    fontWeight: "500",
    color: "#4A4A4A",
  },
  temple: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#4A4A4A",
  },
  ux: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#606060",
  },
  box1: {
    borderWidth: 1,
    borderColor: "#EDEDED",
    padding: "2%",
    //margin: "2%",
    fontSize: "16px",
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "4%",
    fontWeight: "500",
  },
  box2: {
    borderWidth: 1,
    borderColor: "#EDEDED",
    padding: "1%",
    // margin: "2%",
    fontSize: "16px",
  },
});
