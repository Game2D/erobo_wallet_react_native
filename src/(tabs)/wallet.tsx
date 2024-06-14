import { View, Text, TouchableOpacity, ScrollView, Image, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { transactions } from '../../constants/text';

import CryptoCard from '../../components/CryptoCard';
import { images } from '../../constants';

const Wallet = () => {
  const items = ['Portfolio', 'History'];
  const [selected, setSelected] = useState(0);

  const regex = new RegExp(/^[0-9].+$/);

  return (
    <SafeAreaView>
      <ScrollView>
      <View className="px-8 py-12 z-20">
        <View>
          <Text className="font-pmedium text-[20px] text-black-100">Total Wallet Value</Text>
          <Text className="font-psemibold text-[32px] text-black-100">$29,100.50</Text>
        </View>

        <View className="flex items-center mt-6">
          <View className="relative flex flex-row gap-8 bg-[#EBEFF1] rounded-full py-4 px-5 overflow-hidden">
            {items.map((item, index) => (
              <TouchableOpacity
                key={index}
                activeOpacity={1}
                className="z-20"
                onPress={() => setSelected(index)}
              >
                <Text 
                  className={`text-[14px] px-9 ${selected === index ? 'text-black-100 font-psemibold' : 'text-gray-200 font-pmedium'}`}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))} 

            <View className="absolute h-[48px] bg-white shadow-lg z-10 rounded-full top-[2px]" style={{
              left: selected === 0 ? 3 : 155,
              width: selected === 0 ? 155 : 140,
            }} />
          </View>
        </View>

        <View className="flex gap-8 mt-8">
            {transactions.map((item, index) => (
              <View key={index}>
                <Text className="text-[18px] font-pmedium text-gray-200 mb-4">{item.date}</Text>

                {item.transactions.map((transaction, index) => (
                  <CryptoCard 
                    key={index}
                    icon={transaction.icon}
                    leftTitle={transaction.name}
                    leftSubtitle={transaction.time}
                    rightTitle={
                      <>
                        <Text className={transaction.name === "Withdraw" ? "text-red-400" : "text-green-400"} >
                          {transaction.name === "Withdraw" ? "-" : "+"}  
                        </Text>{" "}
                        {regex.test(transaction.price) ? '$' : ''}
                        {transaction.price}
                      </>
                    }
                    rightSubtitle={transaction.get && (
                      <>
                        <Text className="text-red-400" >-</Text>{" "}

                        <Text className="!text-[#000]">
                          ${transaction.get}
                        </Text>
                      </>
                    )}
                  />
                ))}
              </View>
            ))}
        </View>
      </View>

      <Image 
        source={images.blur4}
        className="absolute top-0 left-0 w-full h-full z-10"
      />
      </ScrollView>

      <StatusBar style='dark' />
    </SafeAreaView>
  )
}

export default Wallet