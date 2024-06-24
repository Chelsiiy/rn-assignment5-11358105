import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const settings = [
    { key: '1', settings: 'Language' },
    { key: '2', settings: 'My Profile' },
    { key: '3', settings: 'Contact Us' },
    { key: '4', settings: 'Change Password' },
    { key: '5', settings: 'Privacy Policy' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.randomtext}>SETTINGS</Text>
      <FlatList
        data={settings}
        renderItem={({ item }) => (
          <View style={styles.settingsItem}>
            <Text style={styles.settingsText}>{item.settings}</Text>
          </View>
        )}
      />
       ListFooterComponent={<Text style={styles.piece}>Themes</Text>}
        contentContainerStyle={styles.listContentContainer}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  randomtext: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  settingsItem: {
    padding: 20,
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#808080',
    backgroundColor: '#FFF',
    width: 350,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsText: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Times New Roman',
  },
  piece: {
    marginTop: 50,
    fontWeight: 'bold',
    paddingTop: 50,
  }
});
