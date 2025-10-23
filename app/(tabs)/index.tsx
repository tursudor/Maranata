//home page

import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container} >
        <Text style={styles.text}>Welcome Home
        </Text>
        <Text style={styles.text}>
          Growing together in Faith
        </Text>
        <Text style={styles.text}>New Beginning Project</Text>
        <Text style={styles.text}>Building our new church home, together as one family</Text>
        <Text style={styles.text}>New Beginning project update</Text>
        <Text style={styles.text}>35% Complete</Text>
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

});