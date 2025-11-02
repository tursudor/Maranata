import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function TransferDetails() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Transfer Details</Text>
        </View>

        {/* Transfer Information Section */}
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>Bank Transfer Information</Text>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Account Name:</Text>
            <Text style={styles.value}>Maranata Fellowship</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Bank Name:</Text>
            <Text style={styles.value}></Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Account Number:</Text>
            <Text style={styles.value}>56483262</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Sort Code</Text>
            <Text style={styles.value}>30-90-89</Text>
          </View>
        </View>

        {/* Note Section */}
        <View style={styles.note}>
          <Text style={styles.noteText}>
            💡 <Text style={styles.noteBold}>Note:</Text> Please include your full name as the payment reference. Transfers may take 1–3 business days to appear.
          </Text>
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 Your Organization Name</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf8f5',
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  header: {
    backgroundColor: '#2b2b2b',
    padding: 15,
    textAlign: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
  detailsContainer: {
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 20,
    borderRadius: 10,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingVertical: 5,
  },
  label: {
    fontWeight: '600',
    color: '#444',
  },
  value: {
    color: '#555',
    fontWeight: '500',
  },
  note: {
    backgroundColor: '#f8f2e7',
    padding: 15,
    marginTop: 20,
    borderRadius: 8,
    fontSize: 14,
  },
  noteText: {
    color: '#555',
  },
  noteBold: {
    fontWeight: '600',
  },
  footer: {
    padding: 10,
    backgroundColor: '#fff',
    marginTop: 30,
    textAlign: 'center',
  },
  footerText: {
    fontSize: 13,
    color: '#888',
  },
});
