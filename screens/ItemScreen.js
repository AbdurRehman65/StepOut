import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
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

        </View>

      </ScrollView>
      </SafeAreaView>
  )
}

export default ItemScreen