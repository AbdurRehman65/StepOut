import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native';

const ItemScreen = ({route}) => {
    const navigation = useNavigation();

    const data = route?.params?.param;
    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        })
    
      }, []);

      console.log(data);
  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <ScrollView className="flex-1 px-4 py-6">
        <View className="relative bg-white shadow-lg">
            <Image 
            source = {
                {uri: 
                    data?.photo?.images?.large?.url ?
                    data?.photo?.images?.large?.url :
                    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fillustrations%2Ftea-spoon-white-background&psig=AOvVaw1z_cpcAVtVTFQ8NO6r1GpN&ust=1687465223001000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOiu4PqX1f8CFQAAAAAdAAAAABAE"
                }
            }
            className="w-full h-72 object-cover rounded-2xl"
            />
            <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">
                <TouchableOpacity
                onPress={() => navigation.navigate("Discover")}
                 className="w-10 h-10 rounded-md items-center justify-center bg-white">
                <FontAwesome5 name="chevron-left" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-[#06B2BE]">
                <FontAwesome5 name="heartbeat" size={24} color="#fff" />
                </TouchableOpacity>

            </View>
            <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">
                <TouchableOpacity
                onPress={() => navigation.navigate("Discover")}
                 className="w-10 h-10 rounded-md items-center justify-center bg-white">
                <FontAwesome5 name="chevron-left" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-[#06B2BE]">
                <FontAwesome5 name="heartbeat" size={24} color="#fff" />
                </TouchableOpacity>
                

            </View>
            <View className="absolute flex-row inset-x-0 bottom-5 justify-between px-6">
                <View className="flex-row space-x-2 items-center">
                  <Text className="text-[10px] font-bold text-gray-100">
                    {data?.price_level}
                  </Text>
                  <Text className="text-[22px] font-bold text-gray-100">
                    {data?.price}
                  </Text>
                </View>
                <View className="px-2 py-1 rounded-md bg-teal-100">
            <Text>{data?.open_now_text}</Text>
          </View>
            </View>
        
        </View>

        <View className="mt-6">
          <Text className="text-[#428288] text-[24px] font-bold">
            {data?.name}
          </Text>
          <View className="flex-row items-center space-x-2 mt-2">
            <FontAwesome name="map-marker" size={25} color="#8C9EA6"/>
            <Text className="text-[#8C9EA9] text-[17px] font-bold">
              {data?.location_string}
            </Text>

          </View>

        </View>

        <View className="mt-4 flex-row items-center justify-between">
          {data?.rating && (
            <View className="flex-row items-center justify-between">
                     <View className="w-12 h-12 rounder-2xl bg-red-100 items-center justify-center shadow-md">
                    <FontAwesome name='star' size={24} color="#D58574"/>

            </View>
            <View className="flex-rowjustify-between">
              <Text className="text-[#515151] mx-1">{data?.rating}</Text>
              <Text className="text-[#515151] mx-1">Ratings</Text>
            </View>
            </View>
          )

          }
            {data?.price_level && (
            <View className="flex-row items-center justify-between">
                     <View className="w-12 h-12 rounder-2xl bg-red-100 items-center justify-center shadow-md">
                    <FontAwesome name='money' size={24} color="#D58574"/>

            </View>
            <View className="flex-rowjustify-between">
              <Text className="text-[#515151] mx-1">{data?.price_level}</Text>
              <Text className="text-[#515151] mx-1">Price Level</Text>
            </View>
            </View>
          )

          }
            {data?.bearing && (
            <View className="flex-row items-center justify-between">
                     <View className="w-12 h-12 rounder-2xl bg-red-100 items-center justify-center shadow-md">
                    <FontAwesome name='map-signs' size={24} color="#D58574"/>

            </View>
            <View className="flex-rowjustify-between">
              <Text className="text-[#515151] mx-1 capitalize">{data?.bearing}</Text>
              <Text className="text-[#515151] mx-1">Bearing</Text>
            </View>
            </View>
          )

          }

        </View>

        
            {data?.bearing && (
            <Text className="mt-4 tracking-wide text-[16px] font-semibold text-[#97A6AF]">
              {data?.description}
            </Text>
              )}
      </ScrollView>
      </SafeAreaView>
  )
}

export default ItemScreen