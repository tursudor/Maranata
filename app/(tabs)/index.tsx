//home page

import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View >
        <Image
          source={require('../../assets/images/mara.png')} // 
          style={styles.Logo}
        />
        <Text style={styles.h1}>Welcome Back
        </Text>
        <Text style={styles.h2}>
          Growing together in Faith
        </Text>
        <Text style={styles.title}>🏗️ New Beginning Project</Text>
        <Text style={styles.p}>Building our new church home, together as one family</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.ImageContainer}>
          <Image
            source={require('../../assets/images/church.jpg')} // 
            style={styles.CardImage}
          />
          <View style={styles.overlay} />
          <Text style={styles.TextOverlap}>For whrere two or three gather in My Name, there am I with them.        Matthew 18:20 </Text>
        </View>
        <Text style={styles.date}>October 25, 2025</Text>
        <Text style={styles.CardTitle}>New Beginning update</Text>
        <Text style={styles.description}>We are pleased to announce a fundraising initiative for the construction of our new church.
          Your support will help us create a sacred space for prayer and fellowship.
          We deeply value every contribution toward this blessed endeavor.</Text>
        <View style={styles.ProgressContainer}>
          <View style={styles.ProgressBar} />
        </View>
        <Text style={styles.Percentage}>35% Complete</Text>
      </View>
      <View>
        {/* <Text style={styles.text}>For whrere two or three gather in My Name, there am I with them. Matthew 18:20 </Text> */}
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
  // image: {
  //   width: 352,
  //   height: 480,
  //   resizeMode: "cover",
  //   marginTop: -10,
  //   paddingTop: 0,
  //   // borderRadius: 25,
  //   overflow: 'hidden', // ensures corners are clipped properly
  //   borderTopLeftRadius: 20,
  //   borderTopRightRadius: 20,
  // },
  card: {
    backgroundColor: '#fff',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3, // adds shadow on Android
    marginTop: 22,
    marginLeft: 12,
    marginRight: 12,
    padding: 0,
    alignItems: "flex-start",

  },
  description: {
    fontSize: 14,
    color: '#666666ff',
    textAlign: 'left',
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  h1: {
    fontSize: 24,
    color: '#000000ff',
    textAlign: 'center',
    marginTop: 35,
  },
  h2: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 0.5,
  },
  title: {
    fontSize: 35,
    color: '#000000ff',
    textAlign: 'left',
    marginTop: 20,
    marginLeft: 10,
  },
  p: {
    fontSize: 15,
    color: '#666',
    textAlign: 'left',
    marginLeft: 10,
  },
  date: {
    color: '#dbb404ff',
    fontSize: 15,
    // textAlign: 'left',
    marginTop: 15,
    marginLeft: 20,
  },
  CardTitle: {
    fontSize: 25,
    color: '#000000ff',
    textAlign: 'left',
    marginLeft: 20,
    marginTop: 10,
  },
  Logo: {
    width: 62,
    height: 62,
    position: 'absolute',
    top: -7,
    left: -7,
    right: 0,
    bottom: 0,  // resizeMode: "contain",
  },
  ProgressContainer: {
    width: '88%',              // total bar width
    height: 12,                // bar height
    backgroundColor: '#e0e0e0',// background (empty part)
    borderRadius: 6,           // rounded corners
    overflow: 'hidden',
    marginLeft: 20,
    marginTop: 20,
  },
  ProgressBar: {
    width: '30%',              // visual progress (static)
    height: '100%',
    backgroundColor: '#dbb404ff',
  },
  Percentage: {
    fontSize: 14,
    fontStyle: "italic",
    color: '#9b2e03ff',
    textAlign: 'left',
    marginTop: 7,
    marginLeft: 20,
    marginBottom: 20,
  },
  ImageContainer: {
    position: 'relative',  // makes text position relative to this container
    width: 352,
    height: 480,
    // padding: 0,
    // margin: 0,
  },
  CardImage: {
    // width: '100%',
    // height: '100%',
    // borderRadius: 10,
    width: 352,
    height: 480,
    // resizeMode: "contain",
    // marginTop: -10,
    padding: 0,
    // borderRadius: 25,
    overflow: 'hidden', /// ensures corners are clipped properly
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  TextOverlap: {
    // fontFamily: 'sansserif', 
    position: 'absolute',
    top: '40%',
    left: '15%',
    transform: [{ translateX: -50 }, { translateY: -10 }],
    color: '#ffffff94',
    fontSize: 23,
    fontWeight: 'bold',   // subtle glow for readability
    fontStyle: "italic",
    textAlign: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // fills the parent
    backgroundColor: 'rgba(0,0,0,0.5)',  // translucent dark overlay
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});