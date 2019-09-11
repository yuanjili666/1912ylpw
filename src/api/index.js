import http from "@utils/http.js"

//分类
export const classifyApi = () =>http({
    method:"get",
    url:"server/category/default.json",
})

// 活动页面数据的请求
export const fenleiApi = () =>http({
    method:"get",
    url:"server/subject/list.json",
})

// 永乐说戏   https://m.228.cn/server/opera/list.json

export const shuoxiApi = () =>http({
    method:"get",
    url:"server/opera/list.json",
})

/* 城市列表： https://m.228.cn/server/content/city/list.json
"hotCitys":热门城市
"fcitys":普通城市
*/
export const cityApi = () =>http({
    method:"get",
    url:"server/content/city/list.json",
})
