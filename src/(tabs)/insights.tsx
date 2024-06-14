import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons } from '../../constants'
import { news } from '../../constants/text'
import NewsCard from '../../components/NewsCard'

const Insights = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      <View className="px-8 py-12">
        <View className="flex flex-row justify-between z-30">
          <Text className="text-[32px] font-psemibold text-black-100">Insights</Text>
          
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

        <View className="flex gap-6 mt-8">
          {news.map((item, index) => (
            <View
              key={index}
              className="flex gap-2"
            >
              <View className="flex flex-row justify-between items-center">
                <View className="flex flex-row gap-4 items-center">
                  <Image 
                    source={item.icon}
                    className="w-[40px] h-[40px]"
                    resizeMode='contain'
                  />

                  <Text className="text-[14px] font-pmedium text-black-100">
                    {item.title}
                  </Text>
                </View>

                <Text className="font-pmedium text-indigo-100">
                  See All
                </Text>
              </View>

              <View className="flex mt-2 gap-4">
                {item.news.map((article, index) => (
                  <NewsCard
                    key={index}
                    date={article.dateAgo}
                    {...article}
                  />
                ))}
              </View>
            </View>
          ))}
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Insights