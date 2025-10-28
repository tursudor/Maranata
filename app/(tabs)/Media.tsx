
// import { Link } from 'expo-router';
// import { ScrollView, StyleSheet, Text, View } from "react-native";

// export default function News() {
//   return (
//     <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
//       <View style={styles.container}>
//         <Text style={styles.text}>Map page</Text>
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
// XeXX8ZpyEP4 = Marius Dragoman - Marturie
// oaDaRAWVIeY = Cristi Dumitrescu -  3 sfaturi practice pentru a ajunge la biruinta
// XdL-hCPRgQ = Corul Maranata - Desi nu stim cand

import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking, StyleSheet, ScrollView } from 'react-native';

const videos = [
  { id: 'XeXX8ZpyEP4', title: 'Marius Dragoman - Marturie' },
  { id: 'oaDaRAWVIeY', title: '3 sfaturi practice pentru a ajunge la biruinta' },
  { id: 'Fg0jFGIoIco', title: 'Remus Moldovan - Cum este o familie specială' },
];

export default function MediaScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {videos.map((video) => (
        <TouchableOpacity
          key={video.id}
          style={styles.card}
          onPress={() => Linking.openURL(`https://www.youtube.com/watch?v=${video.id}`)}
        >
          <Image
            source={{ uri: `https://img.youtube.com/vi/${video.id}/hqdefault.jpg` }}
            style={styles.thumbnail}
          />
          <Text style={styles.title}>{video.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    margin: 10,
    width: 160,
  },
  thumbnail: {
    width: '100%',
    height: 90,
    borderRadius: 8,
  },
  title: {
    textAlign: 'center',
    marginTop: 6,
    fontWeight: '600',
  },
});
