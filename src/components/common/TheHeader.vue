<template>
  <div class="wrapper">
    <div class="content">
      <div class="content-logo">
        <a href="" class="logo-link">
          <img class="logo-img" src="@/assets/images/home/icon.png" alt="" />
          To Do App
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default{
  name: "TheHeader",
 
};
</script>

<style scoped>
.wrapper {
  background-color: #f2f2f2;
}
.content {
    display: flex;
    align-items: center;
}
.logo-link {    
    display: flex;
    align-items: center;
    margin-right: 30px;
    flex-shrink: 0;
    text-decoration: none;
    font-size: 21px;
    font-weight: bold;
    color: #62ab00;
}
.logo-img {
  width: 100px;
  height: 75px;
}
</style>
