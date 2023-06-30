import axios from "axios";


export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:"8fc575efa2264874a6b09cd43593fc8e"
    }
})
