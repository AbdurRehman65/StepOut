import { data } from "autoprefixer";
import axios from "axios";

export const getPlacesData = async () => {
    try {
       {/*Destructure Data (Able to fetch Data only Array from the given url)*/} 
       const {data: {data}} =  await axios.get(`https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary`,
        {  params: {
            bl_latitude: '33.44553546028573',
            tr_latitude: '33.78669700700176',
            bl_longitude: '72.78809490020713',
            tr_longitude: '73.38412114355594',
            limit: '30',
            currency: 'USD',
            lunit: 'km',
            lang: 'en_US'
          },
          headers: {
            'X-RapidAPI-Key': 'e1493d88ebmshc72d447e56a1684p1f5a06jsnde02832a75d5',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        }
        );
        return data;
    } catch (error) {
        return null
    }
}