<template>
  <div class="home">
    <CarList :cars="cars"/>
  </div>
</template>

<script>
import CarList from "../components/CarList.vue"
export default {
  name: 'Home',
  components: {
    CarList
  },
  computed: {
    cars() {
      return this.$root.$data.cars;
    }
  }
}
</script>
