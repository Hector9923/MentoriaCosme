import axios from "axios";

// function getWeather() {
//     axios.get("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m")
//     .then((res) => {
//         console.log(res.data)
//     }).catch((err) => {
//         console.error('si hubo error', err.response.data)
//     })
// }

// async function getWeather() {
//     try {
//         let result = await axios.get("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m relativehumidity_2m, windspeed_10m")
//         console.log(result.data)
//     } catch (err) {
//         console.error('si hubo error', err.response.data)
//     }
// }

// getWeather()
// console.log("aqui")

// async function getUsers() {
//     let getUsers = await axios.get("http://127.0.0.1:8000/api/users/")
//     console.log('Got Users', getUsers.data)
// }
// getUsers()

function getUsers() {
    axios.get("http://127.0.0.1:8000/api/users/")
    .then((res) => {
        let username = res.data.map(user => user.username)
        console.log(username)
        // for (let user of res.data) {
        //     console.log(user.username)
        // }
        // for (let index = 0; index < res.data.length; index++) {
        //     console.log(res.data[index].username)
        // }
        // res.data.forEach(user => console.log('STRING', user.username))
    }).catch((err) => {
        if (err.response) {
            console.error('there was an error', err.response.data)
        } else {
            console.error(err)
        }
    })
}

getUsers()

element => element > 10;