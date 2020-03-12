<template>
<div class="wrapper">
  <div class="cars">
    <div class="car" v-for="car in cars" :key="car.id">
      <img class="car-image" :src="car.image">
      <h2 class="car-title">{{car.year}} {{car.make}} {{car.model}}</h2>
      <div class="lower-section">
        <h3 class="price">{{car.price}}</h3>
        <button class="add-to-compare-button button" v-bind:class="inCompare(car)"
          @click="addCarToCompare(car)">Add to Compare</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'CarList',
  props: {
    cars: Array
  },
  methods: {
    addCarToCompare(car) {
      this.$root.addToCompare(car);
    },
    inCompare(car) {
      if (this.$root.$data.compare.includes(car)) {
        return "in-compare"
      }
      else {
        return ""
      }
    }
  },
  computed: {
  }
}
</script>

<style scoped>
.cars {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.car {
  width: 375px;
  margin: 20px 20px;
  border: 2px solid #808080;
  border-radius: 4px;
}

.car-image {
   object-fit: cover;
   width: 375px;
   height: 200px;
}

.car-title {
  margin: 10px 0px;
  font-family: 'Bellota Text', cursive;
}

.lower-section {
  margin: 5px 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
}

.price {
  font-family: 'Bellota Text', cursive;
}

.in-compare {
  border-color: #3a5561;
  background-color: #9aa2a6;
  color: #8d8f91;
}
</style>
