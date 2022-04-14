<template>
  <div class="tasks-done">
    <h2 class="tasks-done-title">Tasks are done</h2>
    <div class="tasks-done-box" id="style">
      <task-item 
      v-for="(item, index) in getTaskDone" :key="index"
      :title="item.title"
      :id="item.id"
      :description="item.description"
      :status="item.status"
      :date="item.createdAt"
    ></task-item>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import TaskItem from "../components/home/TaskItem.vue";
export default {
  name: "DoneTasks",
  components: { TaskItem },
  computed: {
    ...mapGetters(["getTaskDone"]),
  },
  methods: {
    ...mapMutations(["initTasks"]),
  },
  mounted() {
    this.initTasks();
  }
};
</script>

<style scoped>
.tasks-done {
  padding: 0 30px 20px 30px;
}
.tasks-done-title {
  font-size: 1.3rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #62ab00;
  text-align: center;
  margin-bottom: 20px;
}
.tasks-done-box {
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
</style>
