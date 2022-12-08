
# Weather App

This weather app allows for instant display of the current weather just by providing the city. It uses WeathrAPI to connect to the weather databse and information




## Features

- Click heart to favor cities. They will be stored into the databse
- WeatherApi
- Search bar for entering in cities



## Tech Stack

<table align="center">
  <tr>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168923681-ece848fc-5700-430b-957f-e8de784e9847.png" width="48" height="48" alt="html" />
      <br>html
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168924521-589f95da-069a-496a-bcc1-ee6dd132ff12.png" width="48" height="48" alt="CSS" />
      <br>CSS
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168977094-6a5073a2-2f48-4f5a-ae0e-ed1421a678c6.png" width="48" height="48" alt="JavaScript" />
      <br>JavaScript
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168976819-15a1f4e0-29cf-4ac0-94a7-1f15eee374a1.png" width="48" height="48" alt="postgreSQL" />
      <br>postgreSQL
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168978951-5ac2af5e-c911-4e59-b493-683071cf1860.png" width="48" height="48" alt="Express" />
      <br>Express
    </td>
    </tr>
  <tr>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168979311-4a486cad-32c8-46f4-a5da-912fdc51b2d6.png" width="48" height="48" alt="React" />
      <br>React
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168979848-733f7090-0f78-401a-9ceb-4267231abef7.png" width="48" height="48" alt="Node" />
      <br>Node
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168980647-1690f9de-bf0e-4318-93cb-1b2ba3701ded.png" width="48" height="48" alt="Bootstrap" />
      <br>Bootstrap
    </td>   
    <td align="center" width="96">
        <img src="https://s3.amazonaws.com/ionic-marketplace/api-weather-app/icon.png" width="48" height="48" alt="Weather Api" />
      <br>Open Weather API
    </td>
  </tr>
</table>


## Installation

1. Clone the repo: 
   ```
   git clone https://github.com/MiaSmartyPants/Pringle_Mingle
   ```
2. Take out the owner's git:
    ```
    git init
    ```

3. Go to server folder 
    ```
    cd server
    ```

4. Install all NPM packages using this in the root directory:
    ```
    npm install
    ```
5. Database setup:
    - Inside your server folder, create an .env file with:
        ```
         touch .env
         ```
      
    - Inside your .env add:
        ```
         postgres://localhost:5432/final_project
         ```
    - Go Back to Terminal

    - Run the following to restore the DB dump file that the project already contain:
         ```
        psql -U postgres -f db.sql
         ```
6. Start the app by using in client and server folder:    
    ```
    npm start
    ```


## Testing

To run tests on the terminal:
* On client side run the following command:
    ```
    npm test
    ```


## Future Development
- Allow for sign in feature
- Display five day weather forecast
