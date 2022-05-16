<template>
  <div class="presentation">
    <div>
      <img
        class="presentation-image"
        src="/images/5.jpg"
        alt="Presentation image"
      />
    </div>
    <div class="welcome">
      <h2>Welcome to the blog</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
        obcaecati deserunt possimus aspernatur ad et.
      </p>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  .presentation{
    margin-top: 5rem;
    display: flex;
    justify-content:center;
    align-items: center;
    gap: 5rem;
    align-content: center;
  
  }

  .presentation-image {
  
    padding: 5px;
    max-width: 100%;
    height: auto;
    width: 500px;
    transform-origin: 0px 0px;
  }
</style>
