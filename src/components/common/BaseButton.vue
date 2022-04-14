<template>
  <div class="base-button">
    <button type="submit" class="base-button-item">
      {{ title }}
    </button>
  </div>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    title: {
      type: String,
      required: true,
      default: "",
    },
  },
};
</script>

<style scoped>
.base-button {
  display: inline-block;
  margin: 20px 0 20px 25px;
}
.base-button-item {
  padding: 7px 20px;
  border: 1px solid #62ab00;
  background-color: #fff;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}
.base-button-item:hover {
  background-color: #62ab00;
  color: #fff;
}
</style>
