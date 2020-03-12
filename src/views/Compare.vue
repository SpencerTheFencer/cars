<template>
<div class="compare">
  <h1 class="title">Car Details/Comparison</h1>
  <div v-if="comparedCars.length > 0" class="cars">
    <div class="comparison-labels">
    </div>
    <div class="car" v-for="car in comparedCars" :key="car.id">
      <img class="car-image" :src="car.image">
      <h2 class="car-title info">{{car.year}} {{car.make}} {{car.model}}</h2>
      <h3 class="price info">{{car.price}}</h3>
      <h3 class="mpg info">{{car.mpg}}</h3>
      <h3 class="seats info">{{car.seats}}</h3>
      <h3 class="drivetrain info">{{car.drivetrain}}</h3>
      <button class="remove-from-compare-button button" @click="removeFromCompare(car)">Remove from Compare</button>
    </div>
  </div>
  <div v-else>
    <h2>No vehicles have been selected.</h2>
    <h4 class="suggestion">To see details about individual vehicles or to compare multiple vehicles,
       select the 'Add to Compare' button for the desired vehicle while browsing.</h4>
  </div>
</div>
</template>

<script>
export default {
  name: "Compare",
  methods: {
    removeFromCompare(car) {
      this.$root.removeFromCompare(car);
    }
  },
  computed: {
    comparedCars() {
      return this.$root.$data.compare;
    }
  }
}
</script>

<style scoped>
.title {
  font-family: 'Bellota Text', cursive;
  margin-top: 40px;
}

.cars {
  margin: 30px auto;
  width: 95%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  border: 2px solid #808080;
  border-radius: 4px;
}

.car {
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;
}

.car-image {
   object-fit: cover;
   width: 200px;
   height: 100px;
}

.info {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  border-right: 1px solid gray;
  font-family: 'Bellota Text', cursive;
}

.car-title {
  width: 25%;
  padding: 0px 0px;
}

.price {
  width: 10%;
  padding: 0px 10px;
}

.mpg {
  width: 10%;
  padding: 0px 10px;
}

.seats {
  width: 10%;
  padding: 0px 10px;
}

.drivetrain {
  width: 10%;
  padding: 0px 10px;
  border-right: none;
}

.remove-from-compare-button {
  width: 100px;
  height: 80px;
  margin-right: 5px;
}

.suggestion {
  margin: 10px auto;
  margin-bottom: 300px;
  max-width: 600px;
}

@media only screen and (max-width: 850px) {
  .car {
    justify-content: space-between;
  }

  .car-image {
    display: none;
  }

  .info {
    font-size: 16px;
    padding: 0px 5px;
  }

  .price {
    width: 20%;
  }

  .seats {
    display: none;
  }

  .remove-from-compare-button {
    font-size: 16px;
    width: 80px;
    height: 70px;
  }
}
</style>
