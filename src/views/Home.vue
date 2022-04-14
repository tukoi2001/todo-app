<template>
  <div>
    <div class="all-tasks">
      <h2 class="all-tasks-title">All Tasks</h2>
      <div class="box-tasks" id="style">
        <task-item
          v-for="(item, index) in getAllTasks"
          :key="index"
          :title="item.title"
          :id="item.id"
          :description="item.description"
          :status="item.status"
          :date="item.createdAt"
        ></task-item>
      </div>
    </div>
    <div class="remove-all-tasks" v-if="getAllTasks">
      <button class="btn btn-primary" @click="actionRemoveAllTasks">
        Remove all tasks
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import TaskItem from "../components/home/TaskItem.vue";
export default {
  components: { TaskItem },
  name: "Home",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getAllTasks"]),
  },
  methods: {
    ...mapActions(["actionInitTasks", "actionRemoveAllTasks"]),
  },
  mounted() {
    this.actionInitTasks();
  },
};
</script>

<style scoped>
.all-tasks,
.remove-all-tasks {
  padding: 0 30px 20px 30px;
}
.remove-all-tasks {
  margin-top: 15px;
}
.btn {
  padding: 7px 14px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 10px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.btn:hover {
  background-color: #333;
  border-color: #333;
}
.btn-primary {
  background-color: #62ab00;
  border-color: #62ab00;
  color: #fff;
}
.all-tasks-title {
  font-size: 1.3rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #62ab00;
  text-align: center;
  margin-bottom: 20px;
}
.box-tasks {
  max-height: 400px;
  overflow-y: scroll;
}
#style::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
}

#style::-webkit-scrollbar {
  width: 6px;
  background-color: #f5f5f5;
}

#style::-webkit-scrollbar-thumb {
  background-color: #000000;
}
@media (max-width: 391px) {
  .box-tasks {
    max-height: 520px;
}
}
</style>
