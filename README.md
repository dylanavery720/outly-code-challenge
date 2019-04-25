Outside Analytics Code Challenge (Dylan Avery)
=========

Summary
---
This application provides a user with a world map that the user can click on in order to obtain weather information about the clicked on location. The code was written in the VSCode IDE. I chose the third party library "react-map-gl" so that I could more easily render the map in a react component. 

### Setup and Run
 * Install dependencies
    ```
    #!sh
    yarn
    ```

 * Add a file to the root directory named '.env', add to it the following enviroment varibles.

    ```
    REACT_APP_MAPBOX_ACCESS_TOKEN = ''
    REACT_APP_OPEN_WEATHER_APIKEY = ''
    ```
    API Keys can be obtained from [Mapbox](https://account.mapbox.com/access-tokens/) and [Openweather API](https://openweathermap.org/appid). 

 * Run application
    ```
    #!sh
    yarn start
    ```

 ### Public URL

 * The application is deployed to https://warm-scrubland-44009.herokuapp.com/

### EdgeCases

* One edge case I encountered was the bad request that occurs when a user clicks on an area of the map with an invalid longitide. Rather than make the map non repeating, I chose to force the longitude within valid boundaries if an invalid input is detected.   

