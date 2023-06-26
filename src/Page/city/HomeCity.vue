<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list></city-list>
    </div>
</template>

<script>
import CityHeader from './components/CityHeader.vue'
import CityList from './components/CityList.vue'
import CitySearch from './components/CitySearch.vue'
    export default {
  components: { CityHeader, CitySearch, CityList },
        name:"HomeCity"
    }
</script>

<style lang="stylus" scoped>

</style>