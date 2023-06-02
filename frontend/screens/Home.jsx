import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors, defaultStyle } from '../styles/styles';
import Header from '../components/Header';
import { Avatar } from 'react-native-paper';

const Home = () => {
  const categories = ['Men', 'Women', 'Children', 'Shoes'];
  return (
    <View style={{ ...defaultStyle, flex: 1 }}>
      <Header />
      <View
        style={{
          paddingTop: 70,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Heading */}
        <View>
          <Text style={{ fontSize: 25 }}>Our</Text>
          <Text style={{ fontSize: 25, fontWeight: '900' }}>Products</Text>
        </View>
        {/* SearchBar */}
        <View>
          <TouchableOpacity>
            <Avatar.Icon
              icon={'magnify'}
              color='gray'
              size={50}
              style={{ backgroundColor: colors.color2, elevation: 12 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Categories */}
      <View
        style={{
          flexDirection: 'row ',
          height: 80,
        }}
      >
        <ScrollAreaView horizontal
        contentContainerStyle={{
          alignItems: 'center'
        }}
        showHorizontalScrollIndicator={false}>
          {categories.map((item, index) => {
            <Button
              key={crypto.randomUUID()}
              style={{
                backgroundColor: colors.color5,
                borderRadius: 100,
                margin: 5,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: 'gray',
                }}
              >
                {item}
              </Text>
            </Button>;
          })}
        </ScrollAreaView>
      </View>
    </View>
  );
};

export default Home;
