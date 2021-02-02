import axios from 'axios'
import packageJson from '../../package.json'

const client = axios.create({
    baseURL: packageJson.proxy
})

export default client