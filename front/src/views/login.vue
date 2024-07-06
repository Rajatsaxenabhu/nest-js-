
<template>
  <div class="form-container">
    <form @submit.prevent="handleLogin">
      <h2>Sign In</h2>
      <input type="text"  v-model="username" placeholder="Username"  required>
      <input type="password" v-model="password" placeholder="Password" required>
      <button type="submit">Sign In</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { mapMutations } from "vuex";
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    ...mapMutations(["setToken"]),
    async handleLogin() {
  try {
    const response = await axios.post('http://localhost:3000/users/login', {
      username: this.username,
      password: this.password
    });

    // Check if response contains valid data indicating successful login
    if (response.data && response.data.token && response.data.user._id) {
   

      // Commit user ID to Vuex state
      this.$store.commit('login', response.data.user._id);

      // Dispatch action to fetch user tasks
      await this.$store.dispatch('fetchTasks');

      // Store token in localStorage (or httpOnly cookie if desired)
      this.$store.commit('setToken', response.data.token);

      // Navigate to dashboard or any other page
      this.$router.push('/dashboard');
    } else {
      // Handle invalid credentials or other error scenarios
      alert('Wrong username or password');
    }
  } catch (error) {
    console.error('Error logging in:', error);
    // Handle network errors or other exceptions
    alert('Login failed. Please try again.');
  }
},
  }
};
</script>

<style scoped>
.form-container {
  width: 300px;
  margin:5%;
  padding:10%;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-align: center;
  position: relative;
  margin-left:30%;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

input {
  width: calc(100% - 20px);
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  width: calc(100% - 20px);
  padding: 10px;
  margin-top: 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
