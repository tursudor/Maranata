//home page

import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View >
        <Text style={styles.title}>Welcome Home
        </Text>
        <Text style={styles.text}>
          Growing together in Faith
        </Text>
        <Text style={styles.text}>New Beginning Project</Text>
        <Text style={styles.text}>Building our new church home, together as one family</Text>
      </View>
      <View style={styles.card}>
        <Image
          source={require('../../assets/images/church.jpg')} // 
          style={styles.image}
        />
        <Text style={styles.title}>New Beginning project update</Text>
        <Text style={styles.description}>35% Complete</Text>
      </View>
      <View>
        <Text style={styles.text}>For whrere two or three gather in My Name, there am I with them. Matthew 18:20 </Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
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
  image: {
    width: 720,
    height: 480,
    resizeMode: 'contain',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3, // adds shadow on Android
    margin: 16,
    padding: 10,
    alignItems: 'center',

  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 4,
  },
});