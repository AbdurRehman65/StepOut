import { View, Text, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })

  })
  return (
    <SafeAreaView className="flex-1 justify-center align-center">
    <View className="flex-row">
      <View><Text>StepOut</Text></View>

    </View>

    <View>
      <Text className="text-[#3C6072] text-[32px]">Great Journeys Begin with Simple Steps</Text>
      <Text>Step Out with confidence with your own StepOut buddy</Text>
    </View>

    <View className="absolute bottom-20 w-24 h-24 bg-slate-300 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounder-full items-center justify-center ">
      <View className="w-20 h-20 items-center justify-center "><Text>StepIn</Text></View>
    </View>
    </SafeAreaView>
   
  )
}

export default HomeScreen