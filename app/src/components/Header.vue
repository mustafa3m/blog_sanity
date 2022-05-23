<template>
  <header>
    <div class="container-header">
      <nav class="nav_checkbox">
        <router-link to="/"
          ><img class="logo" src="images/logo.jpg" alt="image-logo"
        /></router-link>
        <input type="checkbox" id="tab-nav" class="tab-nav" />
        <label for="tab-nav" class="label">
          <div class="burger"></div>
          <div class="burger"></div>
          <div class="burger"></div>
        </label>

        <ul class="content_nav">
         
          
          <li><a href="#">HOME</a></li>
           <li><a href="#">ABOUT</a></li>
          <li><a href="#">BLOG</a></li> 
          <li><a href="#contact">CONTACT</a></li>
          
          <!--
            <router-link to="/">HOME</router-link>
             <router-link to="/footer">CONTACT</router-link> 
              <router-link to="/about">ABOUT</router-link>
          <router-link to="/blog">BLOG</router-link>
          <li><a href="#contact">CONTACT</a></li> -->
          
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="css" scope>
  header {
    background-color: rgba(0, 0, 0, 0.404);
     width: 100%;
    
    
     
     
  }
 

  

  .nav_checkbox {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding: 10px 0px;
  }

  .logo {
    text-decoration: none;
    color: white;
    padding-left: 10px;
     height: 6rem;
    width: 6rem;
    max-width: 100%;
    border-radius: 50%;
    margin-top: 1rem;
  }

  .tab-nav {
    outline: none;
    display: none;
  }

  .label {
    display: none;
    color: white;
  }

  .burger {
    width: 35px;
    height: 5px;
    background-color: white;
    margin-top: 5px;
  }

  .content_nav {
    display: flex;
    justify-content:space-between;
    /* grid-column: 3; */
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .content_nav li {
    display: inline-block;
    padding-right: 10px;
    margin: 10px;
  }

  .content_nav li a{
    padding: 20px;
    text-decoration: none;
    color: white;
    position: relative;
  }

  .content_nav li a::after {
    content: "";
    display: block;
    height: 2px;
    background-color: white;
    position: absolute;
    left: 0;
    right: 0;
    transform-origin: right;
    transform: scale(0, 1);
    transition: transform ease-in-out 0.5s;
  }

  .content_nav li a:hover::after {
    transform: scale(1, 1);
  }

 
  @media screen and (max-width: 500px) {
      .logo{
          margin-top: 1rem;
          width: 80px;
      }
      
    .label {
      display: grid;
      cursor: pointer;
      grid-column: 3;
      padding-right: 10px;
    }

    .content_nav {
      display: grid;
      gap:2rem;
      grid-template-columns: 1fr;
      grid-column: 1/4;
      text-align: center;
      max-height: 0;
      overflow: hidden;
      transition: all ease-in-out 0.6s;
    }
    .content_nav li a {
        font-size : 2rem;
    }

    .nav_checkbox input:checked ~ .content_nav {
        width: 100%;
      max-height: 500px;
    }

    .content_nav li{
      padding: 15px 0px;
    }
    
    @media (min-width: 501px) and (max-width: 767px) {
      

    }
  }
</style>
