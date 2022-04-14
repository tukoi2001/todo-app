<template>
  <div class="nav">
      <router-link to="/" class="nav-item">All Tasks</router-link>
      <router-link to="/tasks-done" class="nav-item">Tasks Done</router-link>
      <router-link to="/add-task" class="nav-item">Add New Task</router-link>
  </div>
</template>

<script>
export default {
  name: "NavButton",
};
</script>

<style scoped>
.nav {
    margin: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.nav-item {
    text-decoration: none;
    font-size: 1rem;
    font-weight: 600;
    color: #62ab00;
    padding: 7px 10px;
    border-radius: 10px;
    border: 1px solid #62ab00;
}
.router-link-exact-active {
    background-color: #62ab00;
    color: #FFF;
}
</style>
