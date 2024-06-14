import { View, Text, Image } from 'react-native'
import React from 'react'
import { icons } from '../constants'

type NewsCardProps = {
  title: string;
  image: string;
  date: string;
  size: 'lg' | 'sm' | undefined ;
};

const NewsCard = ({ title, image, date, size }: NewsCardProps) => {
  return (
    <View className={`flex ${size === 'lg' ? '' : 'items-center flex-row'}`}>
      <Image
        source={image}
        className={`${size === 'lg' ? 'w-full h-[190px]' : 'w-[110px] h-[110px]' }`}
        resizeMode='cover'
      />

      <View className={`flex justify-center ${size === 'lg' ? '' : 'max-w-[220px] ml-6'}`}>
        <Text className="font-pmedium text-[14px] mt-4 break-all text-black-100">
            {title}
        </Text>

        <View className="flex flex-row gap-2 mt-2">
            <Image 
                source={icons.time}
                className="mt-0.5"
            />

            <Text className="font-pmedium text-[14px] text-gray-200">
                {date}
            </Text>
        </View>
      </View>
    </View>
  )
}

export default NewsCard