<template>
<div class="main">
  <h3>Base App 组件基站项目</h3>
  <img src="./logo.png">
  <Content />
  <Button @click="inc" text="增加" />
  <Button @click="dec" text="减少" />
  <p>COUNT:{{count}}</p>
</div>
</template>

<script>
import {
  ref,
  defineAsyncComponent
} from "vue";
export default {
  components: {
    Content: defineAsyncComponent(() => import("./components/Content")),
    Button: defineAsyncComponent(() => import("./components/Button")),
  },
  setup() {
    const count = ref(0);
    const inc = () => {
      count.value++;
    };
    const dec = () => {
      count.value--;
    };
    return {
      count,
      inc,
      dec
    };
  },
};
</script>

<style scoped>
.main{
  text-align: center;
}
img {
  width: 200px;
}

h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
