<template>
  
   
    
    
    <RouterView />
    
    
  
</template>

<script>


 

  export default {
    components: { },
  };
</script>

<style>
  @import "../style/reset.css";
  @import "../style/variables.css";
  @import "../style/fonts.css";
  @import "../style/style.css";

  .container {
    min-height: 100vh;
    display: grid;
    grid:
      "header" auto
      "home" 1fr
      "footer" auto /
      auto;
  }
  .header {
    grid-area: header;
  }
  .home {
    grid-area: home;
  }

  .footer {
    grid-area: footer;
  }



</style>
