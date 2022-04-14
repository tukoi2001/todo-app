<template>
  <div class="footer">
      <p class="footer-content">Copyright © 2022 by Xuân Tú</p>
  </div>    
</template>

<script>

export default{
  name: "TheFooter",
};
</script>

<style scoped>
.footer {
    position: absolute;
    width: 100%;
    height: 50px;
    background-color: #62ab00;
    top: auto;
    left: 0;
    right: 0;
    bottom: 0;
}
.footer-content {
    display: flex;
    justify-content:center;
    line-height: 50px;
    font-size: 1rem;
    color: #fff;
    font-weight: 600;
}
</style>
