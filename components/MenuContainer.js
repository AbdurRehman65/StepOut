import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'


const MenuContainer = ({title, imageSrc, type, setType}) => {
  return (
    <TouchableOpacity className="items-center justify-center space-y-2" onPress={}>
      <View className={`w-24 h-20 shadow-sm rounded-full justify-center
       ${type === title.toLowerCase() ? "bg-gray-500" :" "}`}>
        <Image
        source={imageSrc} className="w-full h-full object-contain" />

      
      </View>
   
      <Text className="text-[#00BCC9] font-semibold">{title}</Text>
      
      </TouchableOpacity>
  )
}

export default MenuContainer