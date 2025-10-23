// news page

import { Link } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function News() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <Text style={styles.text}>News page</Text>
        <Link href="/" style={styles.button}>
          Home
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#0f0202ff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#0f0202ff',
  },

});