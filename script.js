
const temp=document.querySelector(".temp")
const cityName=document.querySelector(".city")
const windSpeed=document.querySelector(".wind")
const humidity=document.querySelector(".humidity")
const searchButton=document.querySelector(".search button")
const image=document.querySelector(".weather-icon")
const weather=document.querySelector(".weather")


searchButton.addEventListener("click",async()=>{
    const inputBox=document.querySelector(".search input")
    city=inputBox.value
    baseURL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b92f3bf7e585dc2d6ef6f9cdfa37cbbf&units=metric`
    response = await fetch(baseURL)
    console.log(response)
    data= await response.json()
    console.log(data)
    
    weather.style.display="block"
    temp.innerText=data["main"]["temp"] + "°C"
    cityName.innerText=data["name"]
    windSpeed.innerText=data["wind"]["speed"]
    humidity.innerText=data["main"]["humidity"] + "%"

    weatherType=data["weather"][0]["main"]
    console.log(weatherType)
    newSrc=`${weatherType}.png`
    image.src=newSrc

    
    


})