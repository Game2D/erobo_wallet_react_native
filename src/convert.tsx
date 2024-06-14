import { View, Text, TouchableOpacity, Image, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons, images } from '../constants'
import { keyboard } from '../constants/text'
import { CommonActions } from '@react-navigation/native';

const Convert = ({ navigation }) => {
  const [input, setInput] = useState(['0', '0']);

  const [selected, setSelected] = useState(0);

  const setInputById = (id: number, value: string) => {
    if (id === 0) {
      setInput([
        value,
        input[1],
      ]);
    }
    else {
      setInput([
        input[0],
        value,
      ]);
    }
  }

  const isFull = () => {
    try {
      return input[selected].length >= 15;
    } catch (error) {
      return false;
    }
  }

  return (
    <SafeAreaView>
      <View className="bg-[#FFB783] h-full flex pt-12">
        <View className="flex px-8 flex-row items-center justify-between z-20">
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

          <Text className="text-[20px] font-pmedium text-white">
            Converter
          </Text>

          <TouchableOpacity 
            className="p-4 bg-white/80 rounded-full h-[52px] opacity-0"
            activeOpacity={0.7}
            onPress={() => navigation.dispatch(CommonActions.goBack())}
          >
            <Image 
              source={icons.back}
              resizeMode='cover'
            />
          </TouchableOpacity>
        </View>

        <View className="flex bg-white rounded-3xl p-5 mt-12 mx-8 z-20">
            <View className="flex flex-row items-center pb-4">
                <Image 
                    source={icons.bitcoin}
                    className="w-[50px] h-[50px]"
                />

                <View className="ml-4 flex justify-center">
                    <View className="flex flex-row gap-2 items-center">
                        <Text className="font-pmedium text-[18px] text-black-100">
                            BTC
                        </Text>

                        <Image 
                            source={icons.arrowUp}
                            className="rotate-180 mb-1"
                        />
                    </View>

                    <Text className="font-pmedium text-[14px] text-gray-200">
                        Bitcoin
                    </Text>
                </View>

                <TouchableOpacity 
                    activeOpacity={1} 
                    className="text-black-100 font-pmedium text-right text-[15px] flex-1 mt-1 h-[50px] items-end justify-center"
                    keyboardType='numeric'
                    inputMode='numeric'
                    onPress={() => setSelected(0)}
                >
                    <Text className="font-pmedium text-[18px] text-black-100"
                    >
                        {input[0]}
                    </Text>
                </TouchableOpacity>
            </View>

            <View className="flex flex-row items-center pt-4 border-t border-[#E5E7F3]/70">
                <Image 
                    source={icons.etherium}
                    className="w-[50px] h-[50px]"
                />

                <View className="ml-4 flex justify-center">
                    <View className="flex flex-row gap-2 items-center">
                        <Text className="font-pmedium text-[18px] text-black-100">
                            ETH
                        </Text>

                        <Image 
                            source={icons.arrowUp}
                            className="rotate-180 mb-1"
                        />
                    </View>

                    <Text className="font-pmedium text-[14px] text-gray-200">
                        Etherium
                    </Text>
                </View>

                <TouchableOpacity 
                    activeOpacity={1} 
                    className="text-black-100 font-pmedium text-right text-[15px] flex-1 mt-1 h-[50px] items-end justify-center"
                    keyboardType='numeric'
                    inputMode='numeric'
                    onPress={() => setSelected(1)}
                >
                    <Text className="font-pmedium text-[18px] text-black-100">
                        {input[1]}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>

        <View className="flex mt-auto bg-white rounded-t-[40px] pt-12 p-4 max-h-[385px] justify-center z-20">
          {keyboard.map((group, index) => (
            <View 
              key={index}
              className="flex flex-row justify-center"
            >
              {group.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  activeOpacity={0.8}
                  className="mx-auto"
                  onPress={() => {
                    if (item <= 49 && !isFull()) {
                      if (input[selected] !== '0') {
                        setInputById(selected,
                          input[selected] + 
                          ['1', '2', '3', '4', '5', '6', '7', '8', '9'][item-41]
                        );
                      } else {
                        setInputById(selected, ['1', '2', '3', '4', '5', '6', '7', '8', '9'][item-41]);
                      }
                    }

                    if (item === 52 && !isFull()) {
                      if (!input[selected].includes(',')) {
                        setInputById(selected, input[selected] + ',');
                      }
                    }

                    if (item === 51) {
                      setInputById(selected, input[selected].slice(0, -1));

                      if (input[selected].length === 1 || input[selected] === '0') { 
                        setInputById(selected, '0');
                      }
                    }

                    if (item === 50 && input[selected].length < 15) {
                      if (input[selected] !== '0') {
                        setInputById(selected, input[selected] + '0');
                      }
                    }
                  }}
                >
                  <Image 
                    source={item}
                    className={`my-11 w-[18px] h-[18px]`}
                    resizeMode='contain'
                  />
                  
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>

        <Image 
          source={images.converter1}
          className="absolute z-10 bottom-44"
        />

        <Image 
          source={images.converter2}
          className="absolute z-10 right-0 top-48"
        />
      </View>
    </SafeAreaView>
  )
}

export default Convert