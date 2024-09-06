import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Payslips from '../../components/EMS/Payslips';
import Pays from "../../components/EMS/Pays";
import Home from "../../components/EMS/Home"
import PayslipSummary from '../../components/EMS/PayslipSummary';
import HomePage from '../../components/EMS/HomePage';
import Document from "../../components/EMS/Document";
import Ecards from "../../components/EMS/Ecards";
import Personaldetails from "../../components/EMS/Personaldetails";

export default function mainPage() {
  return (
    <View style={{ backgroundColor: "#fff", width: "100%", height: "100%" }}>
      <Personaldetails />
    </View>
  );
}

const styles = StyleSheet.create({})