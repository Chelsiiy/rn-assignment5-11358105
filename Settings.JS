import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Switch } from 'react-native';

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const settings = [
    { key: '1', settings: 'Language', type: 'normal' },
    { key: '2', settings: 'My Profile', type: 'normal' },
    { key: '3', settings: 'Contact Us', type: 'normal' },
    { key: '4', settings: 'Change Password', type: 'normal' },
    { key: '5', settings: 'Privacy Policy', type: 'normal' },
    { key: '6', settings: 'Themes', type: 'themes' },
  ];

  const renderItem = ({ item }) => {
    if (item.type === 'themes') {
      return (
        <View style={styles.themesContainer}>
          <Text style={styles.piece}>{item.settings}</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      );
    } else {
      return (
        <View style={styles.settingsItem}>
          <Text style={styles.settingsText}>{item.settings}</Text>
          <Text style={styles.arrow}>{'>'}</Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.randomtext}>SETTINGS</Text>
      <FlatList
        data={settings}
        renderItem={renderItem}
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
  },
  listContentContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  settingsItem: {
    padding: 20,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: '#FFF',
    width: 350,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
    borderBottomWidth: 1,
    borderBottomColor: '#808080',
  },
  settingsText: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Times New Roman',
  },
  arrow: {
    fontSize: 20,
  },
  themesContainer: {
    marginTop: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: 350,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  piece: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
