import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';

interface VersePair {
  text: string;
  reference: string;
}

const DailyBread: React.FC = () => {
  const [verse, setVerse] = useState<VersePair>({ text: "", reference: "" });
  const [error, setError] = useState<string>("");

  const fetchVerse = async () => {
    try {
      const response = await axios.get<{ text: string; reference: string }>("https://bible-api.com/data/rccv/random");
      setVerse({ text: response.data.text, reference: response.data.reference });
      setError("");
    } catch (err) {
      console.error("Error fetching verse:", err);
      setError("Error fetching verse. Please try again later.");
    }
  };

  useEffect(() => {
    fetchVerse();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Daily Bread</Text>
        </View>

        {error ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        ) : (
          <View style={styles.verseContainer}>
            <Text style={styles.verseText}>"{verse.text}"</Text>
            <Text style={styles.referenceText}>- {verse.reference}</Text>
          </View>
        )}

        <Button title="Get New Verse" onPress={fetchVerse} color="#3E5C6F" />
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 Your Organization Name</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#faf8f5' },
  scrollContainer: { paddingBottom: 20 },
  header: { backgroundColor: '#2b2b2b', padding: 15, alignItems: 'center' },
  headerText: { color: '#fff', fontSize: 20, fontWeight: '600' },
  verseContainer: {
    padding: 20,
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 3,
  },
  verseText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
    fontStyle: 'italic',
  },
  referenceText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#555',
    textAlign: 'center',
  },
  errorContainer: {
    padding: 20,
    backgroundColor: '#f8d7da',
    borderRadius: 10,
    marginTop: 20,
    marginHorizontal: 20,
  },
  errorText: {
    color: '#721c24',
    fontSize: 16,
    textAlign: 'center',
  },
  footer: {
    padding: 10,
    backgroundColor: '#fff',
    marginTop: 30,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 13,
    color: '#888',
  },
});

export default DailyBread;
