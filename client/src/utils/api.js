import axios from 'axios'

export default {
    getGames: function(search){
        return axios.post({
            method: 'GET',
            url: 'https://rawg-video-games-database.p.rapidapi.com/games/'+search,
            headers: {
              'x-rapidapi-key': '624512866fmsh364b553aa2b3c22p105710jsn1b1fd1c425a6',
              'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'
            }
          })
    },
    login: function(event){
        return axios.post("/api/login", {data: event})
    },
    signup: function(event){
        return axios.post('/api/signup', {data: event})
    },
    logout: function(event){
        return axios.post('/api/lougout')
    }
}