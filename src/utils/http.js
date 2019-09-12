import axios from "axios";
import loading from "@lib/loading/index.js"   //引入loading

const http = axios.create({
    timeout:3000,
    withCredentials:true
})

//拦截器
http.interceptors.request.use(config=>{
    if(config.method == "get"){
        config.params = {...config.data};
    }else if(config.method == "post"){
        //config.headers["content-type"] = "application/x-www-form-urlencoded"
    }
    loading.open();  //没有获取数据的时候执行loading，请求数据没有完成的时候执行
    return config;
},err=>{
    return Promise.reject(err);
})


http.interceptors.response.use(res=>{
    if(res.status == 200){
        loading.close();    //执行移除loading，也就是获取到数据的时候移除
        return res.data;
    }
})

export default http;

