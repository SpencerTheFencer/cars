<template>
  <div id="app">
    <div id="header">
      <div id="home-section" class="section">
        <router-link to="/" tag="button" class="button home-button">
            <i class="fas fa-home"></i> Home
        </router-link>
      </div>
      <div id="brand-section" class="section">
        <div id="header-border">
          <i class="fas fa-car fa-6x"></i>
          <div id="title">CARS</div>
        </div>
      </div>
      <div id="side-section" class="section">
        <router-link to="/browse" tag="button" class="button">
          <i class="fas fa-search"></i> Browse Brands
        </router-link>
        <router-link to="/compare" tag="button" class="button compare-button">
          <i class="fas fa-columns"></i> Compare {{itemsInCompare}}
        </router-link>
      </div>
    </div>
    <router-view/>
    <div class="footer">
    <div class="github-section">
      <a href="https://github.com/SpencerTheFencer/cars" target="_blank" class="github-link">Github repository</a>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  computed: {
    itemsInCompare() {
      let numItems = this.$root.$data.compare.length;
      if (numItems === 0) {
        return "";
      }
      else {
        return "(" + numItems + ")";
      }
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Bellota+Text&display=swap');

#app {
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#header {
  margin-top: 24px;
  width: 100%;
  height: 150px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "home brand side";
}

.section {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

#home-section {
  grid-area: home;
  justify-content: flex-start;
  margin-left: 40px;
}

.button {
  width: 180px;
  height: 35px;
  border: 2px solid #808080;
  border-radius: 5px;
  font-size: 20px;
  font-family: 'Bellota Text', cursive;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.home-button {
  width: 110px;
}

.compare-button {
  width: 160px;
}

.button:hover {
  border-color: #5b8ca3;
  background-color: #8fa9b5;
}

#brand-section {
  grid-area: brand;
}

#header-border {
  height: 100px;
  width: 324px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #5b8ca3;
  border-radius: 4px;
}

#title {
  margin-left: 16px;
  font-family: 'Bellota Text', cursive;
  color: #308dba;
  font-size: 72px;
}

.fa-car {
  color: #307ca1;
}

#side-section {
  grid-area: side;
  margin-right: 40px;
}

.footer {
  background-color: #F6F6F4;
  height: 60px;
  width: 100%;
  margin: 0px auto;
}

.github-section {
  padding: 20px 20px;
}

.github-link,
.github-link:link,
.github-link:after {
  font-size: 18px;
  color: #505050;
}

@media only screen and (max-width: 850px) {
  #header {
    height: 250px;
    display: grid;
    grid-template-columns: 100% 0px 0px;
    grid-template-rows: 1fr 1fr 1fr;
    grid-row-gap: 24px;
    grid-template-areas: "home"
                         "brand"
                         "side";
  }

  #side-section {
    margin-right: 0px;
    justify-content: space-around;
  }
}
</style>
