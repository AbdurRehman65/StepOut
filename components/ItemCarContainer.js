import { View, Text, TouchableOpacity, Image } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const ItemCarContainer = ({imageSrc, title, location, data}) => {

  const navigation = useNavigation();
  return (
   <TouchableOpacity
   onPress={() => navigation.navigate("ItemScreen", {param : data})}
    className="rounded-md border border-gray-300 space-y-2 px-2 py-2 shadow-md bg-white w-[150px] my-2">
       <Image 
       source={{uri : imageSrc}}
       className="w-full h-40 rounded-md object-cover"
       />

       {title ? (

 <>
<Text className="text-[#428288] text-[18px] font-bold">{title?.length > 14 ? `${title.slice(0,14)}..` : title}</Text>
      
      
<View className="flex-row items-center space-x-1">
<FontAwesome5 name="map-marker-alt" size={20} color="#859782" />
<Text className="text-[#428288] text-[14px] font-bold">{location?.length > 14 ? `${title.slice(0,14)}..` : location}</Text>
</View>
</>

  ) : (<></>


    )}


   </TouchableOpacity>
  )
}

export default ItemCarContainer