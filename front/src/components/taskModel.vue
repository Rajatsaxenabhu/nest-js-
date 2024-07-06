<template>
  <div class="modal" v-if="showModal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <h2>New Task</h2>
      <form @submit.prevent="createTask">
        <div class="form-group">
          <label for="taskName">Task Name:</label>
          <input type="text" id="taskName" name="taskname" v-model="taskname" required>
        </div>
        <div class="form-group">
          <label for="taskDetail">Task Detail:</label>
          <textarea id="taskDetail" name="taskdetail" v-model="taskdetail"></textarea>
        </div>
        <button type="submit">Create Task</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      taskname: '',
      taskdetail: ''
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.clearForm();
    },
    clearForm() {
      this.taskname = '';
      this.taskdetail = '';
    },
    createTask() {
      const data={
        taskname:this.taskname,
        taskdetail:this.taskdetail,
        completed:false,
        userid:this.$store.state.userId
      }
      this.$store.dispatch('addNewTask',data);
      this.closeModal();
    }
  }
};
</script>

<style scoped>
.modal {
  display: block;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: white;
  margin: 15% auto;
  padding: 20px;
  width: 60%;
  max-width: 600px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.close {
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.form-group {
  margin-bottom: 15px;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
}

input, textarea, button {
  padding: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

textarea {
  height: 100px;
}
</style>
