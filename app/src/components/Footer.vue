<template>
  <footer>
    <div class="icon">
      <p>Let s get in touch.</p>
      <div class="image">
        <a href="#"><img src="/images/1.svg" alt="image facebook" /></a>
        <a href="#"><img src="/images/2.svg" alt="image twitter" /></a>
        <a href="#"> <img src="/images/3.svg" alt="image envelope" /></a>
    
        
       
      </div>
    </div>
  </footer>
</template>
;

<script>
  export default {};
</script>

<style>
  footer {
    background: black;
    padding: 30px;
    font-size: 1.8rem;
    text-align: center;
    color: white;
  }

  .icon li {
    color: white;
    font-size: 30px;
    height: 60px;
    width: 60px;
    text-align: center;
    line-height: 60px;
    border-radius: 50%;
    margin: 0 15px;
  }
  .image {
    display: flex;
    justify-content: center;
    cursor: pointer;
  }
  .image:hover{
    transform-origin: 0px 0px;
  }
  p {
    margin-bottom: 3rem;
  }
</style>
