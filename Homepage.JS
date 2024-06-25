import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ScrollView, Image } from 'react-native';

const transactions = [
  { key: '1', transaction: 'Apple store' },
  { key: '2', transaction: 'Spotify' },
  { key: '3', transaction: 'Uber' },
  { key: '4', transaction: 'Groceries' },
  { key: '5', transaction: 'Money Transfer' },
];

export default function Homepage() {
  return (
    <View style={styles.container}>
    <View style={styles.infocontainer}>
      <Text style={styles.subtopic}>Welcome Back</Text>
      <Text style={styles.firstTitle}>Chelsea Adeniji</Text>
      <Image source={require('./assets/Chelsss.jpg')} style={styles.picture} />
      <Image source={require('./assets/search-image.png')} style={styles.icon} />
      </View>
      <Image source={require('./assets/Card.png')}  />


      <View style={styles.actionContainer}>
        <View style={styles.action}>
          <Text>SENT</Text>
          <Image source={require('./assets/sent.jpg')} style={styles.logo} />
        </View>
      </View>

      <View style={styles.actionContainer}>
        <View style={styles.action}>
          <Text>RECEIVE</Text>
          <Image source={require('./assets/Receive.png')} style={styles.logo} />
        </View>
      </View>

      <View style={styles.actionContainer}>
        <View style={styles.action}>
          <Text>Loan</Text>
          <Image source={require('./assets/dollar-coin.png')} style={styles.logo} />
        </View>
      </View>

      <View style={styles.actionContainer}>
        <View style={styles.action}>
          <Text>TOP-UP</Text>
          <Image source={require('./assets/upload.jpg')} style={styles.logo} />
        </View>
      </View>

      <Text style={styles.firstTitle}>Transactions</Text>
      <Text style={styles.subtopic}> See all</Text>
      <ScrollView style={styles.vertical}>
        <FlatList
          data={transactions}
          renderItem={({ item }) => (
            <View style={styles.transactionItem}>
              <Text style={styles.transactionItem}>{item.transaction}</Text>
            </View>
          )}
        />
      </ScrollView>

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
  },
  infocontainer:{
    marginTop:200,


  },
  subtopic: {
    fontSize: 20,
    marginTop:100,
  },
  firstTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  picture: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginRight:200,
  },
icon:{
  width:50,
  height:50,
  borderRadius:50,
  marginLeft:250,
},
  logo: {
    width: 50,
    height: 50,
  },
  actionContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  action: {
    flex: 1,
    alignItems: 'center',
  },
  vertical: {
    flex: 1,
    marginTop: 20,
  },
  transactionItem: {
    fontSize: 18,
    padding: 10,
  },
});
