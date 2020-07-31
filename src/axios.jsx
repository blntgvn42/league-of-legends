import Axios from "axios";

export default Axios.create({
    baseURL: "http://ddragon.leagueoflegends.com/cdn/10.15.1/data"

});