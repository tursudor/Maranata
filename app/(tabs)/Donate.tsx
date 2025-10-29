
// import { Link } from 'expo-router';
// import { ScrollView, StyleSheet, Text, View } from "react-native";

// export default function News() {
//   return (
//     <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
//       <View style={styles.container}>
//         <Text style={styles.text}>Doante page</Text>
//         <Link href="/" style={styles.button}>
//           Home
//         </Link>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffffffff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     color: '#0f0202ff',
//   },
//   button: {
//     fontSize: 20,
//     textDecorationLine: 'underline',
//     color: '#0f0202ff',
//   },

// });

import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { ProgressBar } from "react-native-paper";

export default function DonateScreen() {
  const [amount, setAmount] = useState("");
  const [selectedAmount, setSelectedAmount] = useState(null);

  const donationAmounts = [25, 50, 100];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.headerTitle}>New Beginning Project</Text>
      <Text style={styles.headerSubtitle}>
        Building our new church home, together as one family
      </Text>

      {/* Banner Image */}
      <Image
        source={{ uri: "https://images.unsplash.com/photo-1503387762-592deb58ef4e" }}
        style={styles.bannerImage}
      />

      {/* Intro */}
      <Text style={styles.sectionTitle}>Support the Vision</Text>
      <Text style={styles.sectionText}>
        Every gift moves us closer to opening the doors of our new spiritual home. Together, we’re shaping a place of worship, community, and hope for generations to come.
      </Text>

      {/* Progress */}
      <View style={styles.progressContainer}>
        <ProgressBar progress={0.35} color="#C69C3B" style={styles.progressBar} />
        <Text style={styles.progressText}>35% Funded</Text>
      </View>

      {/* Donation Options */}
      <View style={styles.amountContainer}>
        {donationAmounts.map((value) => (
          <TouchableOpacity
            key={value}
            style={[
              styles.amountButton,
              selectedAmount === value && styles.amountButtonSelected,
            ]}
            onPress={() => {
              setSelectedAmount(value);
              setAmount(String(value));
            }}
          >
            <Text
              style={[
                styles.amountText,
                selectedAmount === value && styles.amountTextSelected,
              ]}
            >
              ${value}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Custom Amount */}
      <TextInput
        style={styles.input}
        placeholder="Custom Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={(text) => {
          setAmount(text);
          setSelectedAmount(null);
        }}
      />

      {/* Buttons */}
      <TouchableOpacity style={styles.donateButton}>
        <Text style={styles.donateButtonText}>Give Once</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.donateButton, styles.secondaryButton]}>
        <Text style={[styles.donateButtonText, styles.secondaryButtonText]}>
          Become a Monthly Partner
        </Text>
      </TouchableOpacity>

      {/* Message */}
      <Text style={styles.footerMessage}>
        “Thank you for being part of what God is building here. Your prayer, your generosity, and your love make this possible.”
      </Text>

      {/* Bible Verse */}
      <Text style={styles.bibleVerse}>
        “Unless the Lord builds the house, the builders labor in vain.” – Psalm 127:1
      </Text>

      <Text style={styles.footerText}>© 2025 Your Church Name</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#2E2E2E",
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 15,
    color: "#777",
    marginBottom: 20,
  },
  bannerImage: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#2E2E2E",
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 15,
    color: "#555",
    lineHeight: 22,
    marginBottom: 20,
  },
  progressContainer: {
    marginBottom: 25,
  },
  progressBar: {
    height: 8,
    borderRadius: 10,
  },
  progressText: {
    marginTop: 6,
    color: "#8B6C27",
    fontWeight: "600",
    fontSize: 14,
  },
  amountContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  amountButton: {
    flex: 1,
    paddingVertical: 12,
    marginHorizontal: 5,
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    alignItems: "center",
  },
  amountButtonSelected: {
    backgroundColor: "#C69C3B",
  },
  amountText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  amountTextSelected: {
    color: "#fff",
  },
  input: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 25,
  },
  donateButton: {
    backgroundColor: "#C69C3B",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 12,
  },
  donateButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  secondaryButton: {
    backgroundColor: "#FFF7E6",
  },
  secondaryButtonText: {
    color: "#C69C3B",
  },
  footerMessage: {
    textAlign: "center",
    fontStyle: "italic",
    color: "#555",
    fontSize: 14,
    lineHeight: 20,
    marginTop: 25,
  },
  bibleVerse: {
    textAlign: "center",
    color: "#777",
    fontSize: 13,
    marginTop: 20,
  },
  footerText: {
    textAlign: "center",
    color: "#aaa",
    fontSize: 12,
    marginVertical: 20,
  },
});
