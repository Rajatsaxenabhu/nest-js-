<template>
  <div class="split-container">
    <div class="left-half">
      <h1 class="big"><ul>TASK</ul>
        <ul> MANAGER</ul></h1>
    </div>
    <div class="right-half">
      <ul>
        <ul>
          <button class="button-63" @click="navigateTo('/login')">Login</button>
        </ul>
        <ul>
          <button class="button-63" @click="navigateTo('/signup')">Signup</button>
        </ul>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SplitPage',
  methods: {
    navigateTo(path) {
      // Navigate to the specified path
      this.$router.push(path);
    }
  }
};
</script>

<style scoped>
.split-container {
  display: flex;
  margin:-2.5%;
  height: 100vh; /* Full height of the viewport */
}

.big {
  position:relative;
}

.left-half {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(11deg, rgba(0, 164, 255, 1) 0%, rgba(215, 215, 215, 0.706) 100%);
  flex: 1; /* Take up all available horizontal space */

}

.right-half {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, rgba(255, 93, 162, 1) 3%, rgba(148, 187, 233, 1) 100%);
  flex: 1; /* Take up all available horizontal space */
  row-gap: 10;
}

.button-63 {
  align-items: center;
  background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  color: #ffffff;
  cursor: pointer;
  display: inline-flex;
  font-family: 'Phantomsans', sans-serif;
  font-size: 5rem; /* Adjust font size as needed */
  margin:5%;
  padding:15%;
  justify-content: center;
  line-height: 1;
  padding: 0.75rem 1rem; /* Adjust padding as needed */
  text-decoration: none;
  transition: background-color 0.3s ease;
  white-space: nowrap;
}

.button-63:hover {
  background-color: #0056b3; /* Adjust hover background color */
}

@media (min-width: 768px) {
  .big {
    font-size: 3rem; /* Adjust font size for larger screens */
  }
}
</style>
