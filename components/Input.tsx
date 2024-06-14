import { View, Text, TextInput, Image } from 'react-native'

type InputProps = {
  placeholder?: string,
  leftIcon?: any,
  rightIcon?: any,
  iconClassName?: string,
  className?: string,
};

const Input = ({ placeholder, leftIcon, rightIcon, iconClassName, className }: InputProps) => {
  return (
    <View className={`flex flex-row items-center bg-white w-full h-[55px] rounded-full ${className}`}>
      {leftIcon && (
        <Image 
          source={leftIcon}
          className={`w-[32px] h-[32px] m-3 ${iconClassName}`}
          resizeMode='contain'
        />
      )}

      <TextInput 
        placeholder={placeholder}
        className="text-black-100 placeholder:text-gray-200 font-pregular text-[15px] h-full flex-1 mt-1"
      />
      
      {rightIcon && (
        <Image 
          source={rightIcon}
          className={`w-[32px] h-[32px] m-3 ${iconClassName}`}
          resizeMode='contain'
        />
      )}
    </View>
  )
}

export default Input