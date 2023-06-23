import { View, Text, SafeAreaView, TouchableOpacity, ActivityIndicator, Image } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import MenuContainer from '../components/MenuContainer';
import { Attractions, Hotels, NotFound, Restaurants, SpyGlass } from '../assets';
import { FontAwesome } from '@expo/vector-icons';
import ItemCarContainer from '../components/ItemCarContainer';
import { getPlacesData } from '../api';
import { data } from 'autoprefixer';

const Discover = () => {


    const navigation = useNavigation();

    const [type, setType] = useState('restaurants')
    const [isLoading, setIsLoading] = useState(false);
    const [mainData, setMainData] = useState([]);
    const [bl_lat, setBl_lat] = useState(null);
    const [bl_lng, setBl_lng] = useState(null);
    const [tr_lat, setTr_lat] = useState(null);
    const [tr_lng, setTr_lng] = useState(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })

  }, []);

  useEffect(() => {
    setIsLoading(true);
    getPlacesData(bl_lat,bl_lng,tr_lat,tr_lng, type).then((data) => {
      setMainData(data);
      setInterval(() => {
        setIsLoading(false);
      }, 2000);
    })
  }, [bl_lat,bl_lng,tr_lat,tr_lng, type]);
  return (
 
     <SafeAreaView className="flex-1 mt-10 justify-center align-center bg-white relative">
      <View className="flex-row items-center justify-between px-8">
        <View><Text className="text-[30px] text-[#0B646B] font-bold ">Explore</Text>
        <Text className="text=[#527283] text-[28px]">the nature today</Text></View>
        <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center">
          <Image className="w-full h-14"
          source={SpyGlass}
          />
        </View>
    
      </View>
      <View className="flex-row items-center bg-white mx-4 rounded-xl border py-1 px-4 shadow-lg mt-4">
               <GooglePlacesAutocomplete
      placeholder='Search'
      fetchDetails={true}
      GooglePlacesDetailsQuery={{fields :"geometry"}}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(details?.geometry?.viewport);
        setBl_lat(details?.geometry?.viewport?.southwest?.lat)
        setBl_lng(details?.geometry?.viewport?.southwest?.lng)
        setTr_lat(details?.geometry?.viewport?.northeast?.lat)
        setTr_lng(details?.geometry?.viewport?.northeast?.lng)
      }}
      query={{
        key: 'AIzaSyD3HOBfvvXq9rDJdJC051OTX8xaadVE1kk',
        language: 'en',
      }}
    />

      </View>

       {/* Menu Container*/}
       {isLoading ? <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#0B6468" />
       </View> :
       
      <ScrollView>
        <View className="flex-row items-center justify-between px-8 mt-8">
         <MenuContainer 
             key={"hotels"}
             title="hotels"
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
                {mainData?.length > 0 ? (
                <>
                {mainData?.map((data, i) => (
                   <ItemCarContainer 
                   key={i} 
                   imageSrc={   
                    data?.photo?.images?.medium?.url ?
                    data?.photo?.images?.medium?.url :
                    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fillustrations%2Ftea-spoon-white-background&psig=AOvVaw1z_cpcAVtVTFQ8NO6r1GpN&ust=1687465223001000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOiu4PqX1f8CFQAAAAAdAAAAABAE"
                  } 
                   title={data?.name} 
                   location={data?.location_string}
                   data={data}
                   />
               
                  
                ))}
                   

               </>
                ): (<>
               <View className="w-full h-[350px] bg-red-400 items-center space-y-8 justify-center">
                      <Image source={NotFound} className="w-32 h-32 object-cover" />
              
                      <Text className="text-xl text-[#428288] font-semibold">Oops no data found</Text>             
               </View>
          
               </>
               )}
           </View>
        </View>
       
      </ScrollView>
      }
      </SafeAreaView>
    
  )
}

export default Discover