import React from "react";
import { Image, StatusBar, Text, TouchableOpacity, View } from "react-native";
import './global.css';
import Input from "../components/Input";
import { icons, images } from "../constants";
import { socials } from "../constants/text";
import { SafeAreaView } from "react-native-safe-area-context";

const Startup = ({ navigation }: { navigation: any }) => {
    return (
        <SafeAreaView className="relative bg-gray-100 w-full h-full">
            <View className="h-full flex items-center justify-center px-8 z-20">
                <Image
                source={images.getStarted}
                />
                <Text className="text-3xl text-black-100 font-psemibold">Register</Text>

                <View className="flex flex-col gap-y-4 mt-8">
                <Input 
                    placeholder="Username"
                    leftIcon={icons.user}
                />
                <Input 
                    placeholder="Email"
                    leftIcon={icons.email}
                />
                <Input 
                    placeholder="Password"
                    leftIcon={icons.password}
                />

                <TouchableOpacity 
                    className="bg-black-100 rounded-full flex py-4 items-center justify-center"
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate('(tabs)')}
                >
                    <Text className="text-white font-psemibold">
                    Register
                    </Text>
                </TouchableOpacity>
                </View>

                <View className="flex flex-row gap-8 items-center justify-center mt-8">
                {socials.map((social, index) => (
                    <TouchableOpacity 
                    key={index}
                    className="bg-white rounded-full flex p-4 items-center justify-center"
                    activeOpacity={0.7}
                    >
                    <Image 
                        source={social.icon}
                        className="w-[24px] h-[24px]"
                        resizeMode='cover'
                    />
                    </TouchableOpacity>
                ))}
                </View>

                <StatusBar style="auto" />
            </View>

            <Image
                source={images.blur1}
                className="absolute top-20 left-0 w-full h-full z-10"
            />
        </SafeAreaView>
    )
}

export default Startup;