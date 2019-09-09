// import Header from "./header/index.vue"   //引入的头部的组件
import Aheader from "./header/index.vue"
const components = [   
    Aheader,
]

// console.log(Header);
const install = (Vue)=>{   //install函数中把vue当做参数传进去
    if(Vue){   //如果这个存在  就利用map  遍历components，给每个组件进行全局的注册
        components.map(item=>{   //
            Vue.component(item.name,item); //组件名称，组件
        })
    }
}

export default install;



// /*
// 这个文件是所有组件的入口文件，搜集所有，然后在main.js文件中引入
// 这个知识点用到了Vue.use  来使用，不懂访问官网：https://cn.vuejs.org/v2/api/#Vue-use

// */