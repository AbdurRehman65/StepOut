import { View, Text, TouchableOpacity, Image } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react'

const ItemCarContainer = ({imageSrc, title, location}) => {
  return (
   <TouchableOpacity className="rounded-md border border-gray-300 space-y-2 px-2 py-2 shadow-md bg-white w-[150px] my-2">
       <Image 
       source={{uri : imageSrc}}
       className="w-full h-40 rounded-md object-cover"
       />

<Text className="text-[#428288] text-[18px] font-bold">{title?.length > 14 ? `${title.slice(0,14)}..` : title}</Text>
      
      
       <View>
       <FontAwesome5 name="map-marker-alt" size={24} color="black" />
       <Text className="text-[#428288] text-[14px] font-bold">{location?.length > 14 ? `${title.slice(0,14)}..` : location}</Text>
       </View>
   </TouchableOpacity>
  )
}

export default ItemCarContainer