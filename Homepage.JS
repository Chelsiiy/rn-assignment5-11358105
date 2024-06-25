import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , FlatList, ScrollView,Image} from 'react-native';

  const Transactions = [
    { key: '1', transaction: 'Apple store' },
    { key: '2', transaction: 'Spotify' },
    { key: '3', transaction: 'Uber' },
    { key: '4', transaction: 'Groceries' },
    { key: '5', transaction: 'Money Transfer' },
  ];

export default function Homepage() {
  return (
    <View style={styles.container}>
      <Text style={styles.Subtopic}>Welcome Back</Text>
      <Text style={styles.Heading}>Chelsea Adeniji</Text>
      <Image source={require('./assets/Chelsss.jpg')} style={styles.picture}/>
      <Image source={require('./assets/search-image.png')} style={styles.logo}/>
      <Image source={require('./assets/Card.png')} style={styles.picture}/>

      <view style={styles.actioncontainer}>
      <view style={styles.action}>
      <Text>SENT</Text>
      <Image source={require('./assets/sent.jpg')} style={styles.logo}/>
      </view>
      </view>
      
      <view style={styles.actioncontainer}>
      <view style={styles.action}>
      <Text>RECEIVE</Text>
      <Image source={require('./assets/Receive.png')} style={styles.logo}/>
      </view>
      </view>

      <view style={styles.actioncontainer}>
      <view style={styles.action}>
      <Text>Loan</Text>
      <Image source={require('./assets/dollar-coin.png')} style={styles.logo}/>
      </view>
      </view>

      <view style={styles.actioncontainer}>
      <view style={styles.action}>
      <Text>TOP-UP</Text>
      <Image source={require('./assets/upload.jpg')} style={styles.logo}/>
      </view>
      </view>
      <Text style={styles.Heading}>Transactions</Text>
      <Text style={styles.Subtopic}> Sell all</Text>
      <ScrollView style={styles.Vertical}>
       <FlatList
          data={transactions}
          renderItem={({ item }) => (
            <View style={styles.transactionItem}>
              <Text style={styles.transactionItem}>{item.Transactions}</Text>
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
});




