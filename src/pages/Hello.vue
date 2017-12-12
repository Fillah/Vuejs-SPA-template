<template>
  <div class="hello content">
    <img src="./../assets/images/logo.png" class="img-center" alt="Vue.js PWA">
    <div class="grid-x">
      <div class="small-6 cell">
        <h1 class="text-center">{{ msg }}</h1>
      </div>
      <div class="small-6 cell">
        <h1 class="text-center">https://material.io/icons/ <i class="material-icons">check_circle</i></h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  }
}
</script>
