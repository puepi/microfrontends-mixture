<template>
  <div class="container">
    <div>Name: vue-app</div>
    <div>Framework: vue2</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <toys></toys>
  </div>
</template>
<script>
  import Toys from '@/components/Toys.vue'
  export default{
    components:{
      Toys
    }
  }
</script>
