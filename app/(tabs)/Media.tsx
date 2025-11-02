// import React, { useRef } from 'react';
// import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// const videos = [
//   { id: 'XeXX8ZpyEP4', title: 'Marius Dragoman - Marturie', category: 'Predici' },
//   { id: 'oaDaRAWVIeY', title: '3 sfaturi practice pentru a ajunge la biruinta', category: 'Predici' },
//   { id: 'Fg0jFGIoIco', title: 'Remus Moldovan - Cum este o familie specială', category: 'Predici' },
//   { id: 'a1s0ZyXcMl4', title: 'Praise and Worship Song 1', category: 'Cantari' },
//   { id: 'e2DwQpZm6Xo', title: 'Praise and Worship Song 2', category: 'Cantari' },
//   { id: 'm3NzQrZtP0Y', title: 'Praise and Worship Song 3', category: 'Cantari' },
//   { id: 'r5Vs4PQg1j8', title: 'Poem - A Story of Faith', category: 'Poezii' },
//   { id: 'XeXX8ZpyEP4', title: 'Poem - The Power of Prayer', category: 'Poezii' },
// ];

// export default function MediaScreen() {
//   const scrollViewRef = useRef<ScrollView | null>(null);
  
//   // References for each category section
//   const prediciRef = useRef<View | null>(null);
//   const cantariRef = useRef<View | null>(null);
//   const poeziiRef = useRef<View | null>(null);

//   // Function to scroll to the selected category section
//   const scrollToCategory = (category: string) => {
//     let offset = 0;
    
//     // Set the offset for the selected category section
//     if (category === 'Predici' && prediciRef.current) {
//       offset = prediciRef.current.offsetTop;
//     } else if (category === 'Cantari' && cantariRef.current) {
//       offset = cantariRef.current.offsetTop;
//     } else if (category === 'Poezii' && poeziiRef.current) {
//       offset = poeziiRef.current.offsetTop;
//     }
    
//     if (scrollViewRef.current) {
//       scrollViewRef.current.scrollTo({ y: offset, animated: true });
//     }
//   };

//   // Group the videos by category
//   const categories = ['Predici', 'Cantari', 'Poezii'];

//   return (
//     <ScrollView contentContainerStyle={styles.container} ref={scrollViewRef}>
//       {/* Navigation Bar */}
//       <View style={styles.navBar}>
//         {categories.map((category) => (
//           <TouchableOpacity
//             key={category}
//             style={styles.navButton}
//             onPress={() => scrollToCategory(category)}
//           >
//             <Text style={styles.navButtonText}>{category}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       {/* Render Categories */}
//       <View ref={prediciRef} style={styles.categorySection}>
//         <Text style={styles.categoryTitle}>Predici</Text>
//         {videos
//           .filter((video) => video.category === 'Predici')
//           .map((video) => (
//             <TouchableOpacity
//               key={video.id}
//               style={styles.card}
//               onPress={() => Linking.openURL(`https://www.youtube.com/watch?v=${video.id}`)}
//             >
//               <Image
//                 source={{ uri: `https://img.youtube.com/vi/${video.id}/hqdefault.jpg` }}
//                 style={styles.thumbnail}
//               />
//               <Text style={styles.title}>{video.title}</Text>
//             </TouchableOpacity>
//           ))}
//       </View>

//       <View ref={cantariRef} style={styles.categorySection}>
//         <Text style={styles.categoryTitle}>Cantari</Text>
//         {videos
//           .filter((video) => video.category === 'Cantari')
//           .map((video) => (
//             <TouchableOpacity
//               key={video.id}
//               style={styles.card}
//               onPress={() => Linking.openURL(`https://www.youtube.com/watch?v=${video.id}`)}
//             >
//               <Image
//                 source={{ uri: `https://img.youtube.com/vi/${video.id}/hqdefault.jpg` }}
//                 style={styles.thumbnail}
//               />
//               <Text style={styles.title}>{video.title}</Text>
//             </TouchableOpacity>
//           ))}
//       </View>

//       <View ref={poeziiRef} style={styles.categorySection}>
//         <Text style={styles.categoryTitle}>Poezii</Text>
//         {videos
//           .filter((video) => video.category === 'Poezii')
//           .map((video) => (
//             <TouchableOpacity
//               key={video.id}
//               style={styles.card}
//               onPress={() => Linking.openURL(`https://www.youtube.com/watch?v=${video.id}`)}
//             >
//               <Image
//                 source={{ uri: `https://img.youtube.com/vi/${video.id}/hqdefault.jpg` }}
//                 style={styles.thumbnail}
//               />
//               <Text style={styles.title}>{video.title}</Text>
//             </TouchableOpacity>
//           ))}
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 16,
//     backgroundColor: '#faf8f5',
//   },
//   navBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     marginBottom: 20,
//     paddingBottom: 10,
//     borderBottomWidth: 2,
//     borderBottomColor: '#ddd',
//   },
//   navButton: {
//     padding: 10,
//     backgroundColor: '#ff7f50',
//     borderRadius: 8,
//   },
//   navButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   categorySection: {
//     marginBottom: 30,
//   },
//   categoryTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 10,
//   },
//   card: {
//     margin: 10,
//     width: '100%',
//     maxWidth: 400,
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 5 },
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//     elevation: 5,
//     overflow: 'hidden',
//   },
//   thumbnail: {
//     width: '100%',
//     height: 200,
//     borderTopLeftRadius: 12,
//     borderTopRightRadius: 12,
//   },
//   title: {
//     textAlign: 'center',
//     marginTop: 10,
//     fontWeight: '600',
//     fontSize: 16,
//     color: '#333',
//     paddingHorizontal: 8,
//   },
// });
import React, { useRef, useState } from 'react';
import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For icon usage (you can install @expo/vector-icons)

const videos = [
  { id: 'e3Ls3pPkBfM', title: 'Andrei Dascalu - De ce plângi, pe cine cauți?', category: 'Predici' },
  { id: 'UZW0lvdilzs', title: 'Cu facliile aprinse - Petrică Vrabioru', category: 'Predici' },
  { id: 'oaDaRAWVIeY', title: '3 sfaturi practice pentru a ajunge la biruinta', category: 'Predici' },
  { id: 'j3ZtMmUF5yM', title: 'Costica Macoveiciuc - Duhul Sfant', category: 'Predici' },
  { id: 'C9on3yp_O0k', title: 'Cina Domnului -Beniamin Hari', category: 'Predici' },
  { id: 'Fg0jFGIoIco', title: 'Remus Moldovan - Cum este o familie specială', category: 'Predici' },
  { id: 'ZimPtjkIIp0', title: 'David Chelba - Voi sunteti sarea pământului.', category: 'Predici' },
  { id: 'vg31x-AJWCU', title: 'Costel Pârnău - Binele care se naște din suferință', category: 'Predici' },
  { id: '9qWcr0wW5Dc', title: 'M-ai regăsit', category: 'Cantari' },
  { id: 'c7IY2fXBP0I', title: 'Tara cea de vis, tara cea de sus', category: 'Cantari' },
  { id: 'jpOB8KFYzvc', title: 'Azi Domnul este Pastorul meu', category: 'Cantari' },
  { id: 'qhDEHfZfr38', title: 'Stelian Hendre - Cine ești?', category: 'Poezii' },
  { id: 'WD8HmO_Rhnk', title: 'Tabita Gibu - Priveam la Golgota', category: 'Poezii' },
  { id: 'pCYT_0kPBuA', title: 'Tabita Gibu - Salvat la 12 fără un minut', category: 'Poezii' },
  { id: 'KKaLy7NaF9Y', title: 'Tabita Gibu - Eu sunt cu tine', category: 'Poezii' },
  { id: 'pMpEsInQ_j0', title: 'Raluca Pop - poezie', category: 'Poezii' },
  { id: '_K5cOyKaFeM', title: 'Zece creștini mititei - poezie', category: 'Poezii' },
  { id: 'JOJEDPBMxxk', title: 'Botez - Cristian Dumitrescu', category: 'Poezii' },
];

export default function MediaScreen() {
  const scrollViewRef = useRef<ScrollView | null>(null);
  const [sectionOffsets, setSectionOffsets] = useState<any>({});

  // Function to handle the layout of each category section
  const handleLayout = (category: string, event: any) => {
    const { y } = event.nativeEvent.layout; // Get the Y position of the section
    setSectionOffsets((prevOffsets: any) => ({
      ...prevOffsets,
      [category]: y,
    }));
  };

  // Function to scroll to the selected category section
  const scrollToCategory = (category: string) => {
    const offset = sectionOffsets[category];
    if (scrollViewRef.current && offset !== undefined) {
      scrollViewRef.current.scrollTo({ y: offset, animated: true });
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: 0, animated: true });
    }
  };

  // Group the videos by category
  const categories = ['Predici', 'Cantari', 'Poezii'];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} ref={scrollViewRef}>
        {/* Navigation Bar */}
        <View style={styles.navBar}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={styles.navButton}
              onPress={() => scrollToCategory(category)}
            >
              <Text style={styles.navButtonText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Render Categories */}
        <View onLayout={(e) => handleLayout('Predici', e)} style={styles.categorySection}>
          <Text style={styles.categoryTitle}>Predici</Text>
          {videos
            .filter((video) => video.category === 'Predici')
            .map((video) => (
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
        </View>

        <View onLayout={(e) => handleLayout('Cantari', e)} style={styles.categorySection}>
          <Text style={styles.categoryTitle}>Cantari</Text>
          {videos
            .filter((video) => video.category === 'Cantari')
            .map((video) => (
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
        </View>

        <View onLayout={(e) => handleLayout('Poezii', e)} style={styles.categorySection}>
          <Text style={styles.categoryTitle}>Poezii</Text>
          {videos
            .filter((video) => video.category === 'Poezii')
            .map((video) => (
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
        </View>
      </ScrollView>

      {/* Floating Button */}
      <TouchableOpacity style={styles.floatingButton} onPress={scrollToTop}>
        <Ionicons name="arrow-up" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf8f5',
  },
  scrollContainer: {
    padding: 16,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#ddd',
  },
  navButton: {
    padding: 10,
    backgroundColor: '#ff7f50',
    borderRadius: 8,
  },
  navButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  categorySection: {
    marginBottom: 30,
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  card: {
    margin: 10,
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    overflow: 'hidden',
  },
  thumbnail: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  title: {
    textAlign: 'center',
    marginTop: 10,
    fontWeight: '600',
    fontSize: 16,
    color: '#333',
    paddingHorizontal: 8,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#ff7f50',
    borderRadius: 50,
    padding: 15,
    elevation: 5,
  },
});
