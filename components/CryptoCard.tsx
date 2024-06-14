import { View, Text, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import React from 'react'
import { icons } from '../constants'

type CryptoCardProps = {
    icon?: string,
    leftTitle?: string,
    leftSubtitle?: string,
    rightTitle?: string,
    rightSubtitle?: string,
    rightRate?: number,
    leftRate?: number,
    graphicImg?: string,
    id?: string,
    onPress?: () => void,
};

const CryptoCard = ({ icon, leftTitle, leftSubtitle, rightTitle, rightSubtitle, rightRate, leftRate, graphicImg, id, onPress }: CryptoCardProps) => {
  return (
    <TouchableOpacity 
        onPress={onPress}
        activeOpacity={0.7}
    >
        <View className="justify-between items-center flex flex-row h-[70px]">
            <View className="flex flex-row">
                <Image 
                source={icon}
                className="w-[50px] h-[50px]"
                />

                <View className="justify-center ml-4">
                    <Text className="font-pmedium text-[18px] text-black-100">{leftTitle}</Text>

                    <View className="flex flex-row gap-2 items-center">
                        {leftRate && (
                            <Image 
                                source={leftRate < 0 ? icons.arrowDown : icons.arrowUp}
                                className="w-[10px] h-[10px]"
                                resizeMode='contain'
                            />
                        )}

                        <Text className="text-[14px] font-pmedium text-gray-200">{leftSubtitle}</Text>
                    </View>
                </View>
            </View>

            {graphicImg && (
                <Image 
                    source={graphicImg}
                    className="ml-auto mr-4 w-[36px] h-[28px]"
                    resizeMode='contain'
                />
            )}
            
            <View className="flex justify-center items-end">
                <Text className="text-[18px] font-pmedium text-black-100">{rightTitle}</Text>
                
                <View className="flex flex-row gap-2 items-center">
                    {rightRate && (
                        <Image 
                            source={rightRate < 0 ? icons.arrowDown : icons.arrowUp}
                            className="w-[10px] h-[10px]"
                            resizeMode='contain'
                        />
                    )}

                    {rightSubtitle && (
                        <Text className="text-[14px] font-pmedium text-gray-200">{rightSubtitle}</Text>
                    )}
                </View>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default CryptoCard