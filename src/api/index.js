import http from "@utils/http.js"

export const classifyApi = () =>http({
    method:"get",
    url:"server/category/default.json",
    
})
export const homeApi = () =>http({
    method:"get",
    url:"server/content/index.json",  
})
// export const searchApi = () =>http({
//     method:"get",
//     url:"server/search/moreSearch.json",  
// })