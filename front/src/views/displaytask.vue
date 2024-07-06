<template>
  <div v-if="$store.state.token">
  <div class="task-list">
    <h2 class="headline">My Task</h2>
    
    <!-- Button to open modal for adding new tasks -->
    <div class="add-task-container">
      <button @click="openModal" class="add-task-btn">+  Add a task</button>
    </div>

    <!-- Section for incomplete tasks -->
    <div class="task-container">
      <div v-for="task in $store.state.tasks" :key="task.id">
        <div v-if="!task.completed">
        <Task :task="task" @toggle-complete="toggleComplete(task)" />
        </div>
      </div>
    </div>

    <!-- Section for completed tasks -->
    <div class="task-container">
      <h2>Completed  <span class="" style="color: red;">{{$store.state.length}}</span>
      </h2>
      

      
      <div v-for="task in $store.state.tasks" :key="task.id">
        <div v-if="task.completed">
        <Task :task="task" @toggle-complete="toggleComplete(task)"/>
        </div>
      </div>
    </div>

    <!-- NewTaskModal component to add new tasks -->
    <NewTaskModal @new-task="addTask" ref="newTaskModal" />
  </div>
  </div>
</template>

<script>
import Task from '../components/task.vue'; // Importing Task component
import NewTaskModal from '../components/taskModel.vue'; // Importing NewTaskModal component

export default {
  components: {
    Task,
    NewTaskModal
  },
  data() {
    return {
      tasks:this.$store.state.tasks// Initializing tasks array
    };
  },
  computed: {
  incompleteTasks() {
    
    return this.tasks.filter(task => !task.completed);
  },
  completedTasks() {
    return this.tasks.filter(task => task.completed);
  },
  countt(){
    $store.state.clen=this.completedTasks.length;
  },
  alltask(){
    this.tasks=this.$store.state.getters.getTasks;
  },
},
  methods: {
    // Method to open the new task modal
    openModal() {
      this.$refs.newTaskModal.openModal();
    },
    // Method to add a new task to the tasks array
    addTask(newTask) {
      this.tasks.push({
        name: newTask.taskname,
        detail: newTask.taskdetail,
        completed: false
      });
    },
    // Method to toggle the completed status of a task
    toggleComplete(task) {
      task.completed = !task.completed;
      if(task.completed==true){
        this.$store.commit('increment',+1);
       
      }
      else if(task.completed==false){
        this.$store.commit('increment',-1);
      }
    }
  }
}
</script>


<style scoped>
.task-list {
  display: flex;
  flex-direction: column;
  
  padding: 20px;
  margin-left:15%;
  margin-right:15%;
  background-color: #e2dee9;
  border-radius: 50px;
}

h1 {
  text-align: left;
  position: relative;

  margin-bottom: 20px;
}

.add-task-container {
  margin-bottom: 20px;
}

.task-container {
  width: 100%;
  max-width: 600px; /* Adjust width as needed */
  margin-bottom: 20px;
}

.task-container h2 {
  margin-bottom: 10px;
}

.no-tasks {
  padding: 10px;
  text-align: center;
  color: #999;
}
.headline{
  font-style: normal;
  font-family:Arial, Helvetica, sans-serif;
  color: #999

}

.add-task-btn {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #ffffff; /* Adjust color as needed */
  color: rgb(0, 0, 0);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.task-container {
  display: flex;
  flex-direction: column;
}
</style>
