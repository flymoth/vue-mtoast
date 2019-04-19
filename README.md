# vue-mtoast

## Usage

### Install:

```
npm i vue-mtoast --save
```

### Import:

```
import MToast from 'vue-mtoast'
Vue.use(MToast)
```

### Example:

```
<button @click="toast">点击</button>

toast() {
    this.$toast("hello") //基本用法
}
```
![demo1](https://github.com/flymoth/vue-mtoast/blob/HEAD/public/img/WX20190419-131501@2x.png)
```
toast() {
    this.$toast("hello",{duration: 1000}) //自定义持续时间
}
```

```
toast() {
    this.$toast.success("hello",{duration: 1000}) //成功
}
```
![demo2](https://github.com/flymoth/vue-mtoast/blob/7ef22dd8dd9f986cfe80b8e874be8caa1f22c7d2/public/img/WX20190419-131702@2x.png)
```
toast() {
    this.$toast.error("hello",{duration: 1000}) //失败
}
```
![demo3](https://github.com/flymoth/vue-mtoast/blob/7ef22dd8dd9f986cfe80b8e874be8caa1f22c7d2/public/img/WX20190419-131722@2x.png)
