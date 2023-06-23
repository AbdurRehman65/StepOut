import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons';
import { StepOut } from '../assets';

const HomeScreen = () => {

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })

  })
  return (
    <SafeAreaView >
    <View className="flex-row mt-20 mx-2 ">
      <View><Text className="text-[#3C6072] text-[25px] font-bold">StepOut</Text></View>

    </View>

    <View className="mx-2 mt-2"> 
      <Text className="text-[#3C6072] text-[28px] border rounded-2xl font-light px-2">Great Journeys Begin with 
      Simple Steps</Text>
      {/*<Text className="mt-50 text-[#3C6072] text-[17px] font-bold">Step Out with confidence with your own StepOut buddy</Text>*/}
    </View>
    <View className="w-full h-[350px] mt-20">
      <Image className="w-full h-[350px]"
      source={StepOut}
      />
    </View>

    <View className="w-[200px] h-[200px] bg-[#3e9fa8] rounded-full absolute top-10 -right-40">
      
    </View>
     <TouchableOpacity
     onPress={ () => navigation.navigate("Discover")} 
     className="mt-10 pt-40 ml-40">
    < Animatable.View animation={"pulse"} easing= "ease-in-out" iterationCount= {"infinite"} className="border absolute bottom-20 w-24 h-24 items-center justify-center bg-[#00BCC9]">
      <View className="w-20 h-20 items-center justify-center "><Text className="text-dark-50 text-[23px] font-bold">StepIn</Text>
      <FontAwesome name="long-arrow-right" size={40} color="#000000" /></View>
      
    </Animatable.View>
    </TouchableOpacity>
    <View className="w-[200px] h-[200px] bg-[#5d1141] rounded-full absolute bottom-1 -left-40">
      
      </View>
    </SafeAreaView>
   
  )
}

export default HomeScreen