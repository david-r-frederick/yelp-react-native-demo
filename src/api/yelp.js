import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
            'Bearer ymITYCFLHwfg0H1xH8cPLdJUdz0HQij9HdR2OUCShw61JbpFYekJzxi7RClc5rTC7E23kqPARSIxrXo4AB_eOIKhDTaC2_GXL_48ABTZonELHMASoYm3gzfn4BkzX3Yx',
    },
});
