import axios from 'axios'

const REGISTERS_REST_API_URL = 'https://webhook.site/5384b6f5-24f8-468c-89b7-b06d265fc8d0'

class RegistryService{

    getRegisters(){
        return axios.get(REGISTERS_REST_API_URL);
    }
    addRegisters(data) {
        return axios.post(REGISTERS_REST_API_URL, data,
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
    deleteRegisters(data) {
        return axios.post(REGISTERS_REST_API_URL, data,
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

export default new RegistryService()