<template>
  <div class="task">
    <div class="content">
      <h2 class="content-title">
        {{ title }}
        <span class="content-date">{{ date }}</span>
      </h2>
      <div class="content_lock" v-if="isActive">
        <p class="content-des">{{ description }}</p>
      </div>
      <div class="edit-task" v-if="isEdit">
        <div class="overlay" @click.stop="isEdit = false"></div>
        <form
          action=""
          @submit.prevent="handleUpdateTask(id)"
          class="form-edit-task"
        >
          <select
            name="status-task"
            @change="onChangeSite($event)"
            class="select-edit-task"
          >
            <option value="" selected>Select status:</option>
            <option value="todo">To Do</option>
            <option value="inprogress">Inprogress</option>
            <option value="done">Done</option>
          </select>
          <br /><br />
          <input
            type="submit"
            value="Submit"
            class="btn btn-primary btn-large"
          />
        </form>
      </div>
    </div>
    <div class="box-btn">
      <button class="btn btn-primary" @click="isActive = !isActive">
        View
      </button>
      <button class="btn btn-primary" @click="isEdit = true">Edit</button>
      <button class="btn btn-primary" @click="handleDeleteTask(id)">
        Delete
      </button>
    </div>
    <div class="status-task">
      <span v-if="status == 'inprogress'" class="status-task-item inprogress"
        >Inprogress</span
      >
      <span v-else-if="status == 'done'" class="status-task-item done"
        >Done</span
      >
      <span v-else class="status-task-item todo">To do</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "TaskItem",
  data() {
    return {
      isActive: false,
      isEdit: false,
      statusTask: "",
    };
  },
  props: {
    id: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      default: "",
    },
    date: {
      type: String,
      default: "",
    },
  },
  methods: {
    ...mapActions(["actionRemoveTask", "actionInitTasks", "actionEditTask"]),
    handleUpdateTask(id) {
      const data = {
        id: id,
        status: this.statusTask,
      };
      this.actionEditTask(data);
      this.isEdit = false;
    },
    handleDeleteTask(id) {
      this.actionRemoveTask(id);
      this.actionInitTasks();
    },
    onChangeSite(e) {
      this.statusTask = e.target.value;
    },
  },
};
</script>

<style scoped src="@/assets/css/home/task-item.css"></style>
