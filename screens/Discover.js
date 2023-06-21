import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import MenuContainer from '../components/MenuContainer';
import { Attractions, Hotels, Restaurants } from '../assets';
import { FontAwesome } from '@expo/vector-icons';
import ItemCarContainer from '../components/ItemCarContainer';

const Discover = () => {


    const navigation = useNavigation();

    const [type, setType] = useState('restaurants')

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
        <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center">
        
        </View>
    
      </View>
      <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg mt-4">
               <GooglePlacesAutocomplete
      placeholder='Search'
      fetchDetails={true}
      GooglePlacesDetailsQuery={{fields :"geometry"}}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(details ?.geometry?.viewport);
      }}
      query={{
        key: 'AIzaSyD3HOBfvvXq9rDJdJC051OTX8xaadVE1kk',
        language: 'en',
      }}
    />

      </View>

       {/* Menu Container*/}
      <ScrollView>
        <View className="flex-row items-center justify-between px-8 mt-8">
         <MenuContainer 
             key={"hotel"}
             title="Hotels"
             imageSrc={Hotels}
             type={type}
             setType={setType}     
         />

         <MenuContainer 
             key={"attractions"}
             title="Attractions"
             imageSrc={Attractions}
             type={type}
             setType={setType}     
         />

         <MenuContainer 
             key={"restaurants"}
             title="Restaurants"
             imageSrc={Restaurants}
             type={type}
             setType={setType}     
         />
        </View>
        <View>
           <View className="flex-row items-center justify-between px-4 mt-8"> 
            <Text className="text-[#2C7379] text-[22px] font-bold">Top Suggestions</Text>
            <TouchableOpacity className="flex-row items-center justify-center space-x-2">
               <Text>Explore</Text> 
               <FontAwesome name="long-arrow-right" size={24} color="#A0C4C7" />
            </TouchableOpacity>
           </View>
           <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
               <ItemCarContainer key={"101"} imageSrc={"https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made.jpg"} title="Something" location="Islamabad"/>
               <ItemCarContainer key={"102"} imageSrc={"https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made.jpg"} title="Sample" location="Pakistan"/>

           </View>
        </View>
       
      </ScrollView>
      </SafeAreaView>
    
  )
}

export default Discover