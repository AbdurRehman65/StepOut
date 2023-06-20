import { View, Text, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

const Discover = () => {


    const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })

  })
  return (

     <SafeAreaView className="flex-1 justify-center align-center bg-white relative">
      <View className="flex-row items-center justify-between px-8">
        <View><Text className="text-[40px] text-[#0B646B] font-bold ">Explore</Text>
        <Text className="text=[#527283] text-[36px]">the nature today</Text></View>
        <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center"></View>
    
      </View>
      </SafeAreaView>
    
  )
}

export default Discover