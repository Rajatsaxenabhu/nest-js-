<!-- <template>
    <div class="task-list">
      <h1>Task Manager</h1>
      <div class="add-task-container">
        <button @click="openModal" class="add-task-btn">+ New Task</button>
      </div>    
      <!-- NewTaskModal component -->
      <NewTaskModal @new-task="addTask" ref="newTaskModal" />
    </div>
  </template>
  
  <script>
  import Task from './task.vue';
  import NewTaskModal from './taskModel.vue';
  
  export default {
    components: {
      Task,
      NewTaskModal
    },
    data() {
      return {
        tasks: []
      };
    },
    created() {
      this.fetchTasks();
    },
    computed: {
      incompleteTasks() {
        return this.tasks.filter(task => !task.completed);
      },
      completedTasks() {
        return this.tasks.filter(
          task => task.completed
        )
      },
      
    },
    methods: {
      openModal() {
        this.$refs.newTaskModal.openModal();
      },
     
    }
  }
  </script>
  
  <style scoped>
  .task-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  
  h1 {
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
  
  .add-task-btn {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #28a745; /* Adjust color as needed */
    color: white;
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
   -->