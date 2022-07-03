import axios from 'axios'

const SOURCES_REST_API_URL = 'https://webhook.site/81f23ae1-cf64-4775-853b-a00d8e8ff29e'

class SystemSourceService{

    getSources(){
        return axios.get(SOURCES_REST_API_URL);
    }
}

export default new SystemSourceService()