<template>
  <div class="browse">
    <h1 class="title">Search Cars by Brand</h1>
    <div class="brand-buttons">
      <div class="button brand-button" v-bind:class="isSelected('Chevrolet')" @click="changeSelectedBrand('Chevrolet')">Chevrolet</div>
      <div class="button brand-button" v-bind:class="isSelected('Ford')" @click="changeSelectedBrand('Ford')">Ford</div>
      <div class="button brand-button" v-bind:class="isSelected('Honda')" @click="changeSelectedBrand('Honda')">Honda</div>
      <div class="button brand-button" v-bind:class="isSelected('Hyundai')" @click="changeSelectedBrand('Hyundai')">Hyundai</div>
      <div class="button brand-button" v-bind:class="isSelected('Mazda')" @click="changeSelectedBrand('Mazda')">Mazda</div>
      <div class="button brand-button" v-bind:class="isSelected('Toyota')" @click="changeSelectedBrand('Toyota')">Toyota</div>
    </div>
    <CarList :cars="selectedCars"/>
  </div>
</template>

<script>
import CarList from "../components/CarList.vue"
export default {
  name: 'Browse',
  components: {
    CarList
  },
  data() {
    return {
      selectedBrand: '',
    }
  },
  methods: {
    changeSelectedBrand(newBrand) {
      this.selectedBrand = newBrand;
    },
    isSelected(brand) {
      if (brand === this.selectedBrand) {
        return "selected";
      }
      else {
        return "";
      }
    }
  },
  computed: {
    selectedCars() {
      return this.$root.$data.cars.filter(car => car.make === this.selectedBrand);
    },
  }
}
</script>

<style >
.brand-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 100px;
}

.brand-button {
  margin: 5px 10px;
}

.selected {
  border-color: #3a5561;
  background-color: #9aa2a6;
  color: #FFFFFF;
}
</style>
