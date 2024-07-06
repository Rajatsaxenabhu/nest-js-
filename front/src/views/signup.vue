<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="form-container w-full max-w-md bg-white rounded-lg shadow-md p-8">
      <h2 class="text-2xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>
      <form @submit.prevent="signup">
        <div class="mb-4">
          <label for="username" class="block text-gray-700 text-sm font-bold mb-2">Username</label>
          <input
            type="text"
            id="username"
            v-model="username"
            placeholder="Enter your username"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Enter your password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div class="mb-6">
          <label for="confirmPassword" class="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            v-model="confirmPassword"
            placeholder="Confirm your password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            type="submit"
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    async signup() {
      // Simple client-side validation
      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      if (this.password.length < 6) {
        alert("Password must be at least 6 characters long");
        return;
      }
      
      try {
        const response = await axios.post('http://localhost:3000/users/register', {
          username: this.username,
          password: this.password
        });
        
        if (response.data.username == null) {
          alert("Username already exists");
        } else {
          alert("Sign up successful");
          this.$router.push({ path: '/login' });
        }
      } catch (error) {
        console.error(error);
        alert("An error occurred during signup");
      }
    }
  }
};
</script>
<style scoped>
.form-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  width: 100%;
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
