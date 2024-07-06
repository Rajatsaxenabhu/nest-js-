import axios from 'axios';
import { createStore } from 'vuex';

const store = createStore({
  state: {
    userId: "null",
    token:"",
    length:0, // Assuming this is a placeholder for an actual user ID
    newTask: {
      taskname: "",
      taskdetail: "",
      completed: false
    },
    tasks: []
  },
  mutations: {
    
    setToken(state, token) {
      state.token = token;
    },
    increment(state,val){
      state.length+=val
    },
    login(state,userid){
      state.userId =userid;
    },
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    addTask(state, newTask) {
      state.tasks.push(newTask);
    },
    updateNewTask(state, updatedTask) {
      state.newTask = { ...state.newTask, ...updatedTask };
    },
    clearNewTask(state) {
      state.newTask = {
        taskname: "",
        taskdetail: "",
        userid: state.userId, // Make sure to use state.userId here
        completed: false
      };
    }
    // You can add more mutations as needed (e.g., for updating or deleting tasks)
  },
  actions: {
    
    async fetchTasks({ state, commit }) {
      try {
        // Simulate API call or replace with actual API call
        const tasks = await axios.get(`http://localhost:3000/tasks/${state.userId}`);
        state.length=tasks.data.length;
        commit('setTasks', tasks.data);
      } catch (error) {
        
      }
    },
    async addNewTask({ state, commit }, newTask) {
      const res=await axios.post(`http://localhost:3000/tasks`, newTask);
      commit('addTask', res.data);      
    },
    async dltask({ state, commit }, ids) {
    
      if(ids.completed==false){
        state.length-=1;
      }
      const tasks = await axios.delete(`http://localhost:3000/tasks/${ids._id}`);
      const tasks2 = await axios.get(`http://localhost:3000/tasks/${state.userId}`);
      commit('setTasks', tasks2.data);
      },
    async updates({ state, commit }, ids) {
      if(ids.completed==true){
        state.length-=1;
      }
      else{
        state.length+=1;
      }
      await axios.put(`http://localhost:3000/tasks`,ids);
      const tasks2 = await axios.get(`http://localhost:3000/tasks/${state.userId}`);
      commit('setTasks', tasks2.data);
    }
  },
  getters: {
    getTasks(state) {
      return state.tasks;
    },
    getNewTask(state) {
      return state.newTask;
    },
  }
});

export default store;
