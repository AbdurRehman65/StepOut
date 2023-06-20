import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import * as Animatable from 'react-native-animatable';
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
    <View className="flex-row absolute top-20 mt-5">
      <View><Text>StepOut</Text></View>

    </View>

    <View>
      <Text className="text-[#3C6072] text-[32px]">Great Journeys Begin with Simple Steps</Text>
      <Text>Step Out with confidence with your own StepOut buddy</Text>
    </View>
     <TouchableOpacity
     onPress={ () => navigation.navigate("Discover")} 
     className="mt-40 pt-40 ml-20">
    < Animatable.View animation={"pulse"} easing= "ease-in-out" iterationCount= {"infinite"} className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 items-center justify-center rounded-full bg-[#00BCC9]">
      <View className="w-20 h-20 items-center justify-center "><Text className="text-gray-50 text-[23px]">StepIn</Text></View>
      
    </Animatable.View>
    </TouchableOpacity>
   
    </SafeAreaView>
   
  )
}

export default HomeScreen