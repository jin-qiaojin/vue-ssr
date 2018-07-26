import api from './api'
import {getUrl} from '../utils/httpConfig'

const firstApi = {
    ['GETFIRSTAPI']: function(params){
        return api({
            url: getUrl('customize-manager//customize/channel/floor/query'),
            params: params
        })
    }
}

export default firstApi