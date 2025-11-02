

import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Maranata Bristol</Text>
      <Text style={styles.subHeader}> a community, a place of faith and hope, a charity and most important the F of Christ.</Text>
      <Image
        source={require("../../assets/images/mara.jpg")} // 👈 your uploaded image here
        style={styles.pastorImage}
      />
      <Text style={styles.subHeader}>We are a vibrant Romanian community of followers of Jesus Christ, based in the heart of Bristol, United Kingdom. United by faith, language, and love for God, we come together to worship, pray, and grow as disciples of Christ. Our mission is to live out the Gospel daily — strengthening one another, serving our city with compassion, and sharing the hope we have in Jesus.

        Our gatherings are filled with heartfelt worship, biblical teaching, and genuine fellowship where everyone is welcomed as family. Whether you are newly arrived in the UK or have lived here for years, you’ll find a place to belong, connect, and be encouraged in your spiritual journey.

        We believe in building bridges — between generations, cultures, and communities — to reflect the unity and love of Christ. Through worship services, youth meetings, outreach programs, and community support, we seek to be a light for Jesus in Bristol and beyond.</Text>
      {/* Pastor Section */}
      <View style={styles.card}>
        <Image
          source={require("../../assets/images/david.png")} // 👈 your uploaded image here
          style={styles.pastorImage}
        />
        <Text style={styles.title}>Our Pastor</Text>
        <Text style={styles.name}>David Chelba</Text>
        <Text style={styles.text}>
          Pastor David has been faithfully leading our church with wisdom,
          compassion, and a heart for community. His vision is to see every
          member growing in faith and serving in love. Through his teaching and
          leadership, our congregation continues to flourish as one family in
          Christ.
        </Text>
      </View>

      {/* Secretary Section */}
      <View style={styles.card}>
        <Text style={styles.title}>Our Secretary</Text>
        <Text style={styles.name}>Bogdan Hreceniuc</Text>
        <Text style={styles.text}>
          Bogdan serves with dedication and joy, managing the daily
          life of our church and supporting each ministry. Her commitment helps
          ensure everything runs smoothly—from communications to event
          planning—allowing us to focus on worship and community.
        </Text>
      </View>

      {/* Join Us Section */}
      <View style={styles.card}>
        <Text style={styles.title}>Join Us</Text>
        <Text style={styles.text}>
          We invite you to worship with us and experience the warmth of our
          church family.
        </Text>
        <Text style={styles.text}>📅 Friday Service: 19:30-21:00</Text>
        <Text style={styles.text}>📅 Sunday Service: 17:00-19:30</Text>
        <Text style={styles.text}>📍 40 Materman Road, BS14 8SW, Christ the Servant Church</Text>
        <Text style={styles.text}>✉️ contact@maranatafellowship.co.uk</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 10,
    marginTop: 10,
  },
  subHeader: {
    fontSize: 16,
    color: "#777",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fafafa",
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  pastorImage: {
    width: "100%",
    height: 220,
    borderRadius: 12,
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: "500",
    color: "#444",
    marginBottom: 8,
  },
  text: {
    fontSize: 15,
    color: "#555",
    lineHeight: 22,
  },
});
