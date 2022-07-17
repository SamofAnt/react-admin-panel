import axios from 'axios'

const RESOURCES_REST_API_URL = 'https://webhook.site/6f908c2e-e6a5-4651-aff6-84b0f5fef309'

class GroupResourcesService{

    getGroups(){
        return axios.get(RESOURCES_REST_API_URL);
    }
    addGroup(data) {
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
    deleteGroup(data) {
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

export default new GroupResourcesService()