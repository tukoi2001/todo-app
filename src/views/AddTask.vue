<template>
  <div class="add-task">
    <h2 class="add-task-title">Add new task</h2>
    <form action="" @submit.prevent="handleSubmitAddTask">
      <div class="form-item">
        <label for="title">Title:</label>
        <input type="text" required id="title" v-model.trim="newTask.title" />
      </div>
      <div class="form-item">
        <label for="description">Description:</label>
        <textarea
          required
          type="text"
          id="description"
          v-model.trim="newTask.description"
        ></textarea>
      </div>
      <div class="form-item">
        <base-button class="m-0" :title="'Add new task'"/>
      </div>
    </form>
  </div>
</template>

<script>
import BaseButton from "../components/common/BaseButton.vue";
import { mapActions, mapMutations } from 'vuex';
export default{
  components: { BaseButton },
  name: "AddTask",
  data() {
    return {
      newTask: {
        title: "",
        description: "",
      },
    };
  },
  methods: { 
    ...mapActions(['actionAddNewTask']),
    ...mapMutations(['initTasks']),
    handleSubmitAddTask() {
      this.actionAddNewTask(this.newTask);
      this.initTasks();
      this.$router.push('/');
    }
  }
  
};
</script>

<style scoped>
.add-task {
  padding: 0 30px 20px 30px;
}
.add-task-title {
  font-size: 1.3rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #62ab00;
  text-align: center;
  margin-bottom: 20px;
}
.form-item {
  margin-bottom: 20px;
}
.form-item label {
  display: block;
  font-size: 15px;
  color: #999;
  font-weight: 500;
  margin-bottom: 10px;
}
.form-item input {
  min-width: calc(100% - 40px);
  padding: 10px 20px;
  display: block;
  border-radius: 5px;
  font-size: 16px;
  border: 1px solid #000;
}
.form-item textarea {
  min-width: calc(100% - 40px);
  padding: 10px 20px;
  display: block;
  border-radius: 5px;
  font-size: 16px;
  height: 70px;
  border: 1px solid #000;
}
.m-0 {
  margin: 0 !important;
}
</style>
