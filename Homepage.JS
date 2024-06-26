import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ScrollView, Image } from 'react-native';

const transactions = [
  { id: '1', transaction: 'Apple store', image: require('./assets/Apple_Store.png'),<Text style={styles.title}>$3000</Text> },
  { id: '2', transaction: 'Spotify', image: require('./assets/Spotify.jpg') , <Text style={styles.title}>$20</Text> },
  { id: '3', transaction: 'Uber', image: require('./assets/uber.jpg'), <Text style={styles.title}>$25</Text> },
  { id: '4', transaction: 'Groceries', image: require('./assets/groceries.png'), <Text style={styles.title}>$200</Text> },
  { id: '5', transaction: 'Money Transfer', image: require('./assets/money.jpeg'),<Text style={styles.title}>$4500</Text>},
];

export default function Homepage() {
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

      <Image source={require('./assets/Card.png')} />

      <View style={styles.actionRow}>
        <View style={styles.action}>
          <Text style={styles.actionText}>SENT</Text>
          <Image source={require('./assets/sent.jpg')} style={styles.logo} />
        </View>
        <View style={styles.action}>
          <Text style={styles.actionText}>RECEIVE</Text>
          <Image source={require('./assets/Receive.png')} style={styles.logo} />
        </View>
        <View style={styles.action}>
          <Text style={styles.actionText}>Loan</Text>
          <Image source={require('./assets/dollar-coin.png')} style={styles.logo} />
        </View>
        <View style={styles.action}>
          <Text style={styles.actionText}>TOP-UP</Text>
          <Image source={require('./assets/upload.jpg')} style={styles.logo} />
        </View>
      </View>

      <View style={styles.transactionsContainer}>
        <Text style={styles.title}>Transactions</Text>
        <Text style={styles.viewAll}>See all</Text>
        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.transactionItem}>
              <Image source={item.image} style={styles.transactionImage} />
              <Text style={styles.transactionText}>{item.transaction}</Text>
            </View>
          )}
        />
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
  card: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  action: {
    alignItems: 'center',
  },
  actionText: {
    fontSize: 16,
    marginBottom: 8,
  },
  logo: {
    width: 50,
    height: 50,
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
  },
  transactionImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  transactionText: {
    fontSize: 16,
  },
});
