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
    this.$toast.show("hello") //基本用法
}

toast() {
    this.$toast.show("hello",{duration: 1000}) //自定义持续时间
}
```
