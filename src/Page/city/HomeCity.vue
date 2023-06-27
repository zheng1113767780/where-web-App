<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list></city-list>
        <city-alphabet></city-alphabet>
    </div>
</template>

<script>
import CityAlphabet from './components/CityAlphabet.vue'
import CityHeader from './components/CityHeader.vue'
import CityList from './components/CityList.vue'
import CitySearch from './components/CitySearch.vue'
    export default {
  components: { CityHeader, CitySearch, CityList, CityAlphabet },
        name:"HomeCity"
    }
</script>

<style lang="stylus" scoped>

</style>