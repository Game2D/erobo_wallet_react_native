import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { icons, images } from '../constants';
import { cryptoMarket } from '../constants/text';
import { CommonActions } from '@react-navigation/native';

const ViewCrypto = ({ route, navigation }) => {
  const { id } = route.params;
  const item = cryptoMarket[id - 1] === undefined ? cryptoMarket[0] : cryptoMarket[id - 1];
  const [selected, setSelected] = useState(0);

  const time = ['24H', '1W', '1Y', 'ALL', 'Point'];
  return (
    <SafeAreaView>
      <ScrollView className="bg-[#F3F5F6] h-full">
      <Image 
        source={images.blur3}
        className="absolute top-0 left-0 w-full h-full z-10"
      />
      <View className="h-screen flex py-12 z-20">
        <View className="px-8 flex flex-row justify-between items-center">
          <TouchableOpacity 
            className="p-4 bg-white/80 rounded-full h-[52px]"
            activeOpacity={0.7}
            onPress={() => navigation.dispatch(CommonActions.goBack())}
          >
            <Image 
              source={icons.back}
              resizeMode='cover'
            />
          </TouchableOpacity>

          <Text className="text-[14px] font-pmedium text-black-100">{item.label}</Text>
          
          <TouchableOpacity 
            className="p-4 bg-white/80 rounded-full h-[52px]"
            activeOpacity={0.7}
          >
            <Image 
              source={icons.menu}
              resizeMode='cover'
            />
          </TouchableOpacity>
        </View>

        <View className="px-8 flex items-center mt-6">
          <Text className="text-[28px] font-pmedium text-black-100">${item.price}</Text>

          <View className="flex flex-row items-center gap-2">
            <Image 
              source={item.rate < 0 ? icons.arrowDown : icons.arrowUp}
            />

            <Text className="text-[14px] font-pmedium text-gray-200">{item.rate.toString().replace("-", "")}%</Text>
          </View>

          <View className="flex items-center mt-6">
            <View className="relative flex flex-row gap-8 bg-[#EBEFF1] rounded-full py-4 px-5 overflow-hidden">
              {time.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  activeOpacity={1}
                  className="z-20"
                  onPress={() => setSelected(index)}
                >
                  <Text 
                    className={`text-[14px] px-2 ${selected === index ? 'text-black-100 font-psemibold' : 'text-gray-200 font-pmedium'}`}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              ))} 

              <View className="absolute h-[48px] w-[75px] bg-white shadow-lg z-10 rounded-full top-[2px]" />
            </View>
          </View>
        </View>

        <View className="px-8 flex items-center">
          <Image 
            source={images.graph}
          />

          <View className="flex flex-row gap-6 mt-12 items-center justify-center">
              <TouchableOpacity
                className="bg-white rounded-full px-12 py-5 shadow-lg"
              >
                <Text className="text-indigo-100 font-psemibold text-[15px]">
                  See Alert
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="bg-black-100 rounded-full px-12 py-5 shadow-lg"
              >
                <Text className="text-white font-psemibold text-[15px]">
                  Buy Now
                </Text>
              </TouchableOpacity>
          </View>
        </View>

        <View className="flex mt-8 bg-white rounded-t-[30px] p-8 h-full z-40">
            <Text className="font-pmedium text-[20px] text-black-100">Market Statistics</Text>

            <View className="flex flex-row justify-between mt-4">
              <Text className="text-gray-200 font-pmedium text-[14px]">Market capitalization</Text>
              <Text className="text-[14px] font-psemibold text-black-100">$231,233</Text>
            </View>

            <View className="flex flex-row justify-between mt-2">
              <Text className="text-gray-200 font-pmedium text-[14px]">Circulating Suply</Text>
              <Text className="text-[14px] font-psemibold text-black-100">114.211 ETH</Text>
            </View>
        </View>
      </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default ViewCrypto