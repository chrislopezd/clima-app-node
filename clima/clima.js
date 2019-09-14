const axios = require('axios');
const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=b3eebb4c88a4b9bba51293a1566ee737&units=metric`);
    return resp.data.main.temp;
};

module.exports = {
    getClima
}