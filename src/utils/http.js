import axios from "axios";

const http =axios.create({//创建服务
    timeout:1000,
    withCredentials:true    // 携带凭证，允许携带,比如cookie之类的
})

//拦截器
http.interceptors.request.use(config=>{
    if(config.method=="get"){
        config.params={...config.data};
    }else if(config.method=="post"){

    }

    return config;
},err=>{
    return Promise.reject(err);
})
//响应拦截
http.interceptors.response.use(res=>{
    if(res.status==200){
        return res.data;
    }
})

export default http;