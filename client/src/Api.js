const API_KEY = 'f9502c45bd1a51326d1431d998684f07'
const URL = 'https://api.openweathermap.org/data/2.5/weather'

// export const coordinates = (location) => `${URL}weather?q=${location}&appid=${API_KEY}`

export const weatherForecast = (location) => `${URL}?q=${location}&appid=${API_KEY}`

// // const URL = 'https://api.openweathermap.org/data/2.5/weather'
// const URL = 'https://api.openweathermap.org/data/2.5/weather?zip='
// // export const coordinates = (location) => `${URL}weather?q=${location}&appid=${API_KEY}`

// export const weatherForecast = (location) => `${URL}${location},us&appid=${API_KEY}`