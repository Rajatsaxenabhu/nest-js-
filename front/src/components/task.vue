<template>
  <div class="task" :class="{ completed: task.completed }" @click="toggleTaskCompletion(task)">
    <div>
    <span class="bullet" :class="{ completed: task.completed }"></span>
    <span class="task-name">{{ task.taskname }}</span>
    </div>
    <button class="delete-btn" @click="deleteTask(task)">Delete</button>
  </div>
</template>
  <script>
  export default {
    props: {
      task: {
        type: Object,
        required: true
      }
    },
    methods: {
      toggleTaskCompletion() {
        this.$store.dispatch('updates',this.task);

      },
      deleteTask(ids) {
       
        this.$store.dispatch('dltask',ids);
      }
    }
  }
  </script>
  
  <style scoped>
  .task {
    display: flex;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    border-bottom: 1px solid #ccc;
  }
  
  .task.completed {
    text-decoration: line-through;
    opacity: 0.7;
  }
  
  .task .bullet {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #007bff; /* Adjust color as needed */
    margin-right: 10px;
  }
  .bullet {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid black;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bullet.completed {
  background-color: green;
  border: none;
  color: white;
}
.bullet.completed::after {
  content: '✔';
}
.task-name {
  flex: 1;
} .delete-btn {
    margin-left: auto;
    padding: 5px 10px;
    font-size: 12px;
    background-color: #dc3545; /* Adjust color as needed */
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>
  