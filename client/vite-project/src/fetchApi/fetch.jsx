// https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}

import { useDispatch, useSelector } from 'react-redux';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { setPlan, setWeather } from '../app/slice';
import { useEffect } from 'react';


function useFetch() {
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API);
  const api = import.meta.env.VITE_WEA

  const inputValue = useSelector(state => state.sliceData.data)
  const dispatch = useDispatch()


  const prompt = `You are an expert travel planner. I want to travel to ${inputValue.travel} from ${inputValue.onGoingDate} to ${inputValue.returnDate}. My budget is ${inputValue.budget}, and I am traveling with ${inputValue.companion}. I prefer activities related to ${inputValue.preferences}.

Please provide a detailed JSON response including:

places: Top 5 places to explore at the destination.
days: A daily itinerary specifying activities for morning, afternoon, evening, and night for each day.
food: Must-try foods or local specialties in the destination.`




  const callGemini = async () => {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(prompt);
      const response = result.response;
      const text = response.text();
      dispatch(setPlan(text))
    }
    catch (error) {
      console.log(error)
      console.log("Something Went Wrong");
    }
  }

  const country=inputValue.travel.charAt(0).toUpperCase()+inputValue.travel.slice(1)

  const callWeather = async() => {
    try {
      const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${api}`)
      const weatherData=await response.json()
      console.log(weatherData)
      dispatch(setWeather(weatherData))
    } catch (error){ 
      console.log(error)
      console.log("Something Went Wrong");
    }
  }

  useEffect(()=>{
    callWeather()
  },[inputValue])

}


export default useFetch 