<template>
  <div>
    <keep-alive exclude="TiaoDetail">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name:"App",
  }
</script>

<style lang="scss" scoped>

</style>