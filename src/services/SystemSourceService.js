import axios from 'axios'

const SOURCES_REST_API_URL = 'http:/localhost:8080/api/sources'

class SystemSourceService{

    getSources(){
        axios.get(SOURCES_REST_API_URL);
    }
}

export default new SystemSourceService()