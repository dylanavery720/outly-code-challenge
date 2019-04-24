async function getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${process.env.REACT_APP_OPEN_WEATHER_APIKEY}`, {
      accept: 'application/json',
    });
    const checkedStatus = checkStatus(response);
    const parsedJson = await parseJSON(checkedStatus);
    return parsedJson;
  }

  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error, 'error'); // eslint-disable-line no-console
    throw error;
  }
  
  async function parseJSON(response) {
    return response.json();
  }

  export {
    getWeather,
  };