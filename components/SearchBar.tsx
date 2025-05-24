import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'


interface Props {
    placeholder: string;
    onPress?: () => void;
    value: string;
    onChangeText: (text: string) => void;
}


const SearchBar = ({ onPress, placeholder, value, onChangeText }: Props) => {
  return (
    <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4'>
      <Image source={icons.search} className='size-5' resizeMode='contain' tintColor={'#ab8bff'} />
      <TextInput 
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        placeholderTextColor='#A8B5DB'
        onChangeText={onChangeText}
        className='flex-1  text-white ml-2 '
        
       />
    </View>
  )
}

export default SearchBar