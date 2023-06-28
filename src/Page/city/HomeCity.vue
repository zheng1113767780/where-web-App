<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :cities="cities" :hotCities="hotCities"
        :letter="letter"
        ></city-list>
        <city-alphabet @change="handleLetterChange" :cities="cities"></city-alphabet>
    </div>
</template>

<script>
import axios from 'axios';
import CityAlphabet from './components/CityAlphabet.vue'
import CityHeader from './components/CityHeader.vue'
import CityList from './components/CityList.vue'
import CitySearch from './components/CitySearch.vue'
export default {
    components: { CityHeader, CitySearch, CityList, CityAlphabet },
    name: "HomeCity",
    data() {
        return {
            cities: {},
            hotCities: [],
            letter:""
        }
    },
    methods: {
        getCityInfo() {
            axios.get("mock/city.json")
                .then(res => {
                    // console.log(res.data.data.hotCities)
                    if (res.data.ret && res.data.data) {
                        const data = res.data.data;
                        this.cities = data.cities;
                        this.hotCities = data.hotCities;
                    }

                })
        },
        handleLetterChange(letter) {
            this.letter = letter;
        }
    },
    mounted() {
        this.getCityInfo();
    }
}
</script>

<style lang="stylus" scoped>

</style>