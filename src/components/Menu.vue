<template>
      <!-- Add Jorge Candia 31/10/2023 -->
  <!--<nav>
    <router-link to="/">Home</router-link> 
    <router-link to="/about">About</router-link>
  </nav>-->
  <nav class="nav-extended">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
    <div class="nav-content">
      <ul class="tabs tabs-transparent">
        <li class="tab"><router-link to="/">Home</router-link></li>
        <li class="tab"><router-link to="/about">About</router-link></li>
        <li class="tab"><router-link to="/category">Categorias</router-link></li>
        <li class="tab"><router-link to="/areas">Áreas</router-link></li>
        <li class="tab"><router-link to="/activos">Activos</router-link></li>
      </ul>
    </div>
  </nav>
<!--
  <ul class="sidenav" id="mobile-demo">
    <li><a href="sass.html">Sass</a></li>
    <li><a href="badges.html">Components</a></li>
    <li><a href="collapsible.html">JavaScript</a></li>
  </ul>

  <div id="test1" class="col s12">Test 1</div>
  <div id="test2" class="col s12">Test 2</div>
  <div id="test3" class="col s12">Test 3</div>
  <div id="test4" class="col s12">Test 4</div>
-->
  <!-- End Add Jorge Candia 31/10/2023 -->
</template>
<script>
export default {
    name: 'menu',
    props: {
        msg: String
    },
    mounted(){
        /*
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, options);
        });

        // Or with jQuery

        $(document).ready(function(){
            $('.sidenav').sidenav();
        });
        */
    }
}
</script>
<style>
</style>