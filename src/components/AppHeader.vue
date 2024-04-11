<script>
export default {
  data() {
    return {
      menuItems: [
        'Donna', 'Uomo', 'Bambino'
      ],
      menuIcons: [
        '&#9825;', '&#128100;', '&#128717;'
      ]
    }
  }
}
</script>

<template>

<header class="page-header">
        <div class="container">
            <nav class="row">
                <!-- LINKS TO STORE SECTIONS -->
                <ul class="col-4 col-flex">
<!--                     <li><a href="#">Donna</a></li>
                    <li><a href="#">Uomo</a></li>
                    <li><a href="#">Bambini</a></li> -->
                    <li v-for="(item, i) in menuItems" :key="i" ><a href="#">{{ item }}</a></li>
                </ul>
                <!-- LOGO -->
                <div class="col=4">
                    <a href=""><img src="/img/boolean-logo.png" alt="Logo boolean" class="logo"></a>
                </div>
                <!-- STORE NAV -->
                <ul class="col=4 col-flex">
<!--                     <li><a href="#">&#9825;</a></li>
                    <li><a href="#">&#128100;</a></li>
                    <li><a href="#">&#128717;</a></li> -->
                    <li v-for="(icon, i) in menuIcons " :key="i" ><a href="#" v-html="icon"></a></li>
                </ul>
            </nav>
        </div>
    </header>

</template>