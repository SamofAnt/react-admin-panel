import axios from 'axios'

const RESOURCES_REST_API_URL = 'https://webhook.site/7b205aae-fd07-4c50-938a-99b2fa2a370d'

class ResourceService{

    getResources(){
        return axios.get(RESOURCES_REST_API_URL);
    }
    addResource(data) {
        return axios.post(RESOURCES_REST_API_URL, data,
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
    deleteResources(data) {
        return axios.post(RESOURCES_REST_API_URL, data,
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

export default new ResourceService()