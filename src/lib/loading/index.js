import Loading from "./index.vue";
import Vue from "vue";

class LoadingComponent{
    constructor(){
        //执行
        this.init()
    }
    init(){
        let Vm = Vue.extend(Loading)  //这句话的的意思是，Loading继承了vue的家产，vm就是继承后的新大佬Loading
                    // Vue.component()   要明白这两种创的组件有啥区别 Vue.extend(Loading)
                    //  Vue.component() 只能挂载App上面，Vue.extend(Loading)可以挂载粉盒地方
        // console.log(new this.Vm());

        this.vm = new Vm({
            el:document.createElement("div")
        })
    }
    open(){  //放入到挂载点
        document.body.appendChild(this.vm.$mount().$el)
    }
    close(){  //移除挂载点
        document.body.removeChild(this.vm.$mount().$el)
    }
}
//导出
export default new LoadingComponent()
