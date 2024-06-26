import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ScrollView, Image, Button, Alert } from 'react-native';

const transactions = [
  { id: '1', transaction: 'Apple store', image: require('./assets/Apple_Store.png'), amount: '$3000' },
  { id: '2', transaction: 'Spotify', image: require('./assets/Spotify.jpg'), amount: '$20' },
  { id: '3', transaction: 'Uber', image: require('./assets/uber.jpg'), amount: '$25' },
  { id: '4', transaction: 'Groceries', image: require('./assets/groceries.png'), amount: '$200' },
  { id: '5', transaction: 'Money Transfer', image: require('./assets/money.jpeg'), amount: '$4500' },
];

export default function Homepage() {
  const handlePress = (action) => {
    Alert.alert(`Button pressed: ${action}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Image source={require('./assets/Chelsss.jpg')} style={styles.picture} />
        <View style={styles.textContainer}>
          <Text style={styles.subtitle}>Welcome Back</Text>
          <Text style={styles.title}>Chelsea Adeniji</Text>
        </View>
        <Image source={require('./assets/search-image.png')} style={styles.icon} />
      </View>

      <Image source={require('./assets/Card.png')} style={styles.cardImage} />

      <View style={styles.actionRow}>
        <View style={styles.action}>
          <Button title="SENT" onPress={() => handlePress('Sent')}
          <Image source={require('./assets/sent.jpg')} style={styles.logo} />
        </View>
        />
        <View style={styles.action}>
          <Button title="RECEIVE" onPress={() => handlePress('Receive')} 
          <Image source={require('./assets/Receive.png')} style={styles.logo} />
        </View>
        />
        <View style={styles.action}>
          <Button title="LOAN" onPress={() => handlePress('Loan')} 
          <Image source={require('./assets/dollar-coin.png')} style={styles.logo} />
        </View>
        />
        <View style={styles.action}>
          <Button title="TOP-UP" onPress={() => handlePress('Top-Up')} 
          <Image source={require('./assets/upload.jpg')} style={styles.logo} />
        </View>
        />
      </View>

      <View style={styles.transactionsContainer}>
        <Text style={styles.title}>Transactions</Text>
        <Text style={styles.viewAll}>See all</Text>
        <ScrollView horizontal>
          <FlatList
            data={transactions}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.transactionItem}>
                <Image source={item.image} style={styles.transactionImage} />
                <View style={styles.transactionDetails}>
                  <Text style={styles.transactionText}>{item.transaction}</Text>
                  <Text style={styles.transactionAmount}>{item.amount}</Text>
                </View>
              </View>
            )}
          />
        </ScrollView>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  subtitle: {
    fontSize: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  picture: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  action: {
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    marginTop: 8,
  },
  transactionsContainer: {
    flex: 1,
    marginTop: 20,
  },
  viewAll: {
    fontSize: 16,
    textAlign: 'right',
    marginBottom: 8,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    width:350,
  },
  transactionImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  transactionDetails: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  transactionText: {
    fontSize: 16,
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
