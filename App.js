import {
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
  TouchableOpacity,
  Image,
  View,
  FlatList,
} from 'react-native';
import { Appbar,Badge } from 'react-native-paper';
import React, { useState } from 'react';

function App() {
  const [filteredData] = useState([
    {
      id: '1',
      name: 'Home',
      lastmsg:'Java Institiute.pdf',
      phone: '0701893294',
      badge:'2',
      img: require('./assets/snack-icon.png'),
    },
    {
      id: '2',
      name: 'Amma',
      lastmsg:'Hello!',
      phone: '0710598458',
      badge:'9',
      img: require('./assets/snack-icon.png'),
    },
    {
      id: '3',
      name: 'Thatha',
      lastmsg:'Hello!',
      phone: '0716687742',
      badge:'1',
      img: require('./assets/snack-icon.png'),
    },
    {
      id: '4',
      name: 'Menula 1',
      lastmsg:'Hello!',
      phone: '0705747794',
      badge:'1',
      img: require('./assets/snack-icon.png'),
    },
    {
      id: '5',
      name: 'Menula 2',
      lastmsg:'Hello!',
      phone: '0705747793',
      badge:'3',
      img: require('./assets/snack-icon.png'),
    },
    {
      id: '6',
      name: 'Bappa Kalu Phone',
      lastmsg:'Hello!',
      phone: '0761883000',
      badge:'6',
      img: require('./assets/bappa.png'),
    },
    {
      id: '7',
      name: 'Bappa',
      lastmsg:'Ship',
      badge:'1',
      phone: '0718366080',
      img: require('./assets/bappas.png'),
    },
    {
      id: '7',
      name: 'Loku Amma',
      lastmsg:'Hello!',
      badge:'7',
      phone: '0718366080',
      img: require('./assets/akka.png'),
    },
    {
      id: '8',
      name: 'Punchi',
      lastmsg:'Hello!',
      phone: '0717618171',
      badge:'4',
      img: require('./assets/punchi.png'),
    },
    {
      id: '9',
      name: 'Winn-Dixie',
      lastmsg:'🐶🐶🐕‍🦺🐕‍🦺🐕🐕',
      phone: '0701893294',
      badge:'3',
      img: require('./assets/snack-icon.png'),
    },
    {
      id: '10',
      name: 'Java Institute',
      lastmsg:'Java Institute For Advanced...',
      phone: '0717618171',
      badge:'1',
      img: require('./assets/javains.png'),
    },
  ]);

  const Design = ({ item }) => {
  return (
    <View style={styles.view}>
      <Image source={item.img} style={styles.profileImage} />
      <TouchableOpacity style={styles.textContainer}>
        <Text style={styles.text}>{item.name}</Text>
        <Text style={styles.textsm}>{item.lastmsg}</Text>
      </TouchableOpacity>
      <View style={styles.badgeContainer}>
        <Badge style={styles.badges}>{item.badge}</Badge>
      </View>
    </View>
  );
};

  const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

  const Navigation = () => (
    <Appbar.Header style={styles.navigation}>
      <Appbar.Content title="WhatsApp" />
      <Appbar.Action icon="camera" onPress={() => {}} />
      <Appbar.Action icon="magnify" onPress={() => {}} />
      <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
    </Appbar.Header>
  );

  return (
    <SafeAreaView style={styles.bg}>
      <StatusBar />
      <Navigation />
<FlatList
  data={filteredData}
  renderItem={Design}
  keyExtractor={(item) => item.id}
  showsVerticalScrollIndicator={false} // Hides default scrollbar
/>    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  navigation: {
    backgroundColor: '#2c2c2c',
  },
  bg: {
    backgroundColor: '#2c2c2c',
    flex: 1,
  },
  view: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center', // Vertically aligns content
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textContainer: {
    marginLeft: 10,
    justifyContent: 'center',
    flex: 1, // Ensures text occupies available space
  },
  text: {
    fontSize: 16,
    color: '#fff',
  },
  textsm: {
    fontSize: 14,
    color: '#bbb',
  },
  badgeContainer: {
    justifyContent: 'center', // Center the badge vertically
    alignItems: 'flex-end', // Align to the far right
  },
  badges: {
    backgroundColor: 'lime',
    color: '#000', // Optional: Change text color for better visibility
  },
});

export default App;
