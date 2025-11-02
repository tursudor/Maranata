// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

// // Define the structure of the response data
// interface BibleVerseResponse {
//   translation: {
//     identifier: string;
//     name: string;
//     language: string;
//     language_code: string;
//     license: string;
//   };
//   random_verse: {
//     book_id: string;
//     book: string;
//     chapter: number;
//     verse: string;
//     text: string,
//   };
// }

// interface Verse {
//   translationName: string;
//   language: string;
//   book: string;
//   chapter: number;
//   verseText: string;
//   text: string;
// }

// const BibleVerse: React.FC = () => {
//   const [verse, setVerse] = useState<Verse | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const apiUrl = 'https://bible-api.com/data/rccv/random';  // Replace with your actual API URL

//     axios
//       .get<BibleVerseResponse>(apiUrl)
//       .then((response) => {
//         const { translation, random_verse } = response.data;
//         const { book, chapter, text, verse: verseText } = random_verse;

//         setVerse({
//           translationName: translation.name,
//           language: translation.language,
//           book,
//           chapter,
//           verseText,
//           text,
//         });
//         setLoading(false); // Set loading to false once data is fetched
//       })
//       .catch((error) => {
//         setError('Error fetching Bible verse');
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return (
//       <View style={styles.centered}>
//         <ActivityIndicator size="large" color="#0000ff" />
//         <Text>Loading...</Text>
//       </View>
//     );
//   }

//   if (error) {
//     return (
//       <View style={styles.centered}>
//         <Text style={styles.errorText}>{error}</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Text>{verse?.book} {verse?.chapter} : {verse?.verseText}</Text>
//       <Text>{verse?.text}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#fafafa',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   centered: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   errorText: {
//     color: 'red',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default BibleVerse;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ProgressBarAndroid, StyleSheet, Text, View } from 'react-native';

// Define the structure of the response data
interface BibleVerseResponse {
  translation: {
    identifier: string;
    name: string;
    language: string;
    language_code: string;
    license: string;
  };
  random_verse: {
    book_id: string;
    book: string;
    chapter: number;
    verse: string;
    text: string;
  };
}

interface Verse {
  translationName: string;
  language: string;
  book: string;
  chapter: number;
  verseText: string;
  text: string;
}

const BibleVerse: React.FC = () => {
  const [verse, setVerse] = useState<Verse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const apiUrl = 'https://bible-api.com/data/rccv/random';  // Replace with your actual API URL

    axios
      .get<BibleVerseResponse>(apiUrl)
      .then((response) => {
        const { translation, random_verse } = response.data;
        const { book, chapter, text, verse: verseText } = random_verse;

        setVerse({
          translationName: translation.name,
          language: translation.language,
          book,
          chapter,
          verseText,
          text,
        });
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        setError('Error fetching Bible verse');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#ff7f50" />
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Versetul zilei</Text>
      </View>

      {/* Bible Verse Section */}
      <View style={styles.card}>
        <Text style={styles.verseTitle}>{verse?.book} {verse?.chapter}:{verse?.verseText}</Text>
        <Text style={styles.verseText}>{verse?.text}</Text>

        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <ProgressBarAndroid
              styleAttr="Horizontal"
              indeterminate={false}
              progress={0.35}
              color="#ff7f50"
            />
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>ci își găsește plăcerea în Legea Domnului
          și zi și noapte cugetă la Legea Lui! Psalmul 1:2</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf8f5',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  subHeaderText: {
    fontSize: 16,
    color: '#888',
    marginTop: 8,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginTop: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  verseTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  verseText: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
  },
  progressContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  progressText: {
    fontSize: 16,
    color: '#333',
  },
  progressBar: {
    width: '100%',
    height: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: 40,
    backgroundColor: '#fff',
    borderTopWidth: 2,
    borderTopColor: '#ddd',
  },
  footerText: {
    fontSize: 14,
    color: '#888',
  },
  errorText: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BibleVerse;
