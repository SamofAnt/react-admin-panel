import axios from 'axios'

const SOURCES_REST_API_URL = 'https://webhook.site/ef2b8eff-1788-4cc8-91c4-76c90aefbb94'

class ServerService{

    get(url){
        return axios.get(SOURCES_REST_API_URL.concat(url));
    }
    add(data, url) {
        return axios.post(SOURCES_REST_API_URL.concat(url), data,
            {
                headers: [
                    { "Access-Control-Allow-Origin": '*' },
                    { "Access-Control-Allow-Headers": 'Origin, X-Requested-With, Content-Type, Accept ' },
                    { "Access-Control-Allow-Methods": "POST, GET, PUT, OPTIONS, DELETE" },
                    { "Access-Control-Max-Age": 3600 },
                    { 'Content-Type': 'application/json' }
                  ]   
            })
    }
    delete(data, url) {
        return axios.post(SOURCES_REST_API_URL.concat(url), data,
            {
                headers: [
                    { "Access-Control-Allow-Origin": '*' },
                    { "Access-Control-Allow-Headers": 'Origin, X-Requested-With, Content-Type, Accept ' },
                    { "Access-Control-Allow-Methods": "POST, GET, PUT, OPTIONS, DELETE" },
                    { "Access-Control-Max-Age": 3600 },
                    { 'Content-Type': 'application/json' }
                  ]   
            })
    }
}   

export default new ServerService()