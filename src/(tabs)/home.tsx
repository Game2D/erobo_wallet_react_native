import { View, Text, TouchableOpacity, Image, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { icons, images } from '../../constants';

import { helpers, trending } from '../../constants/text';
import CryptoCard from '../../components/CryptoCard';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
      <View className="w-full h-full">
        <View className="flex-1 bg-pink-100">
          <View className="px-8 flex flex-row justify-between mt-8 z-30">
            <Text className="text-[32px] font-psemibold text-white">Home</Text>
            
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

          <View className="px-8 relative mt-8">
            <View className="z-20">
              <Text className="font-pmedium text-[20px] text-white">
                Affiliate program
              </Text>

              <TouchableOpacity 
                className="bg-white rounded-full px-8 py-4 mt-4 w-[140px]"
                activeOpacity={0.7}
              >
                <Text className="font-psemibold text-[14px] text-black-100">Learn more</Text>
              </TouchableOpacity>
            </View>

            <Image 
              source={images.affiliateProgram}
              className="absolute -bottom-36 right-0 z-20"
            />
            <Image 
              source={images.shadow1}
              className="absolute bottom-[-190px] right-0 z-10"
            />
          </View>

          <View className="bg-gray-100 px-8 py-8 mt-12 rounded-t-[40px] h-full z-30">
            <View className="flex flex-row gap-y-4 justify-between" style={{ flexWrap: 'wrap' }}>
              {helpers.map((btn, index) => (
                <TouchableOpacity 
                  className="flex flex-row h-[54px] w-[155px] bg-white rounded-full items-center"
                  activeOpacity={0.7}
                  key={index}
                  onPress={() => { 
                    if (btn.url !== '') navigation.navigate(btn.url) 
                  }}
                >
                  <Image 
                    source={btn.icon}
                    className="m-3"
                  />
                  <Text className="mt-1 font-pmedium text-[14px] text-black-100">
                    {btn.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <View className="mt-8">
              <Text className="font-pmedium text-[20px] text-black-100">Trending</Text>

              <View className="flex gap-4 mt-8">
                {trending.map((trend, index) => (
                  <CryptoCard 
                    key={index}
                    icon={trend.icon}
                    leftTitle={trend.name}
                    leftSubtitle={trend.shortName}
                    rightTitle={`$${trend.price}`}
                    rightSubtitle={`${trend.rate.toString().replace("-", "")}%`}
                    rightRate={trend.rate}
                  />
                ))}
              </View>
            </View>
          </View>
        </View>
      </View>
      </ScrollView>

      <StatusBar style='light' backgroundColor='#FF9AB2' />
    </SafeAreaView>
  )
}

export default Home