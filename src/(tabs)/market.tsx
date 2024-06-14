import { View, Text, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Input from '../../components/Input'

import { icons, images } from '../../constants'
import { cryptoMarket, marketLinks } from '../../constants/text'
import CryptoCard from '../../components/CryptoCard'

const Market = ({ navigation }) => {
  return (
    <SafeAreaView className="relative">
      <ScrollView className="z-20">
      <View className="px-8 py-12">
        <Text className="font-psemibold text-[32px] text-black-100">Market</Text>

        <Input 
          placeholder="Search"
          className="mt-12"
          leftIcon={icons.search}
          rightIcon={icons.filters}
          iconClassName="!w-[24px] !h-[24px] mx-5"
        />

        <View className="flex flex-row justify-between mt-6">
          {marketLinks.map((link, index) => (
            <TouchableOpacity 
              key={index}
              className="flex justify-center items-center px-4 py-6 bg-white rounded-3xl max-w-[98px] w-full max-h-[115px]"
              activeOpacity={0.7}
            >
              <Image 
                source={link.icon}
              />
              <Text className="font-pmedium text-[12px] mt-4 text-black-100">{link.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View className="flex gap-6 mt-8">
          {cryptoMarket.map((crypto, index) => (
            <CryptoCard 
              key={index}
              icon={crypto.icon}
              leftTitle={crypto.label}
              leftSubtitle={`${crypto.rate.toString().replace("-", "")}%`}
              leftRate={crypto.rate}
              rightTitle={`$${crypto.price}`}
              rightSubtitle={`MCap ${crypto.mcap}`}
              graphicImg={crypto.graphic === 1 ? icons.graphDown : icons.graphUp}
              onPress={() => navigation.navigate('View', { id: index + 1 })}
            />
          ))}
        </View>
      </View>
      </ScrollView>

      <Image 
        source={images.blur2}
        className="absolute top-0 left-0 w-full h-full z-10"
      />

      <StatusBar style='dark' />
    </SafeAreaView>
  )
}

export default Market