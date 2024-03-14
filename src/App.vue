<script setup>
import { RouterLink, RouterView } from 'vue-router'
import FormLogin from "@/components/FormLogin.vue"

const brands = [
  {id: 1, src: '@/assets/images/brands/tiktok.svg'},
  {id: 2, src: '@/assets/images/brands/upos.svg'},
  {id: 3, src: '@/assets/images/brands/shopee.svg'},
  {id: 4, src: '@/assets/images/brands/oppo.svg'},
  {id: 5, src: '@/assets/images/brands/the-gioi-di-dong.svg'},
]
</script>

<template>
  <header>
    <div class="header-wrapper">
      <div class="logo-box">
        <img class="logo" src="@/assets/images/logo-header.svg" alt="Vue logo"/>
      </div>
      <div class="header-right-box">
        <form-login></form-login>
      </div>
    </div>
  </header>

  <body>
    <main>
      <div class="main-content-wrapper">
        <RouterView />
        <div class="service-wrapper">
          <h2>Dịch vụ của chúng tôi</h2>
          <div class="service-list">
            <div class="service-item">
              <img class="service-image" src="@/assets/images/services/express.svg" alt="service" width="40px" height="40px"/>
              <p class="service-name">VIA Express</p>
            </div>
            <div class="service-item">
              <img class="service-image" src="@/assets/images/services/fast.svg" alt="service" width="40px" height="40px"/>
              <p class="service-name">VIA Fast</p>
            </div>
            <div class="service-item">
              <img class="service-image" src="@/assets/images/services/super.svg" alt="service" width="40px" height="40px"/>
              <p class="service-name">VIA Super</p>
            </div>
            <div class="service-item">
              <img class="service-image" src="@/assets/images/services/fresh.svg" alt="service" width="40px" height="40px"/>
              <p class="service-name">VIA Fresh</p>
            </div>
            <div class="service-item">
              <img class="service-image" src="@/assets/images/services/international.svg" alt="service" width="40px" height="40px"/>
              <p class="service-name">VIA International</p>
            </div>
          </div>
        </div>
      </div>
      <div class="brand-list-wrapper">
        <p>Khách hàng tiêu biểu</p>
        <v-carousel hide-delimiters>
          <v-carousel-item
              v-for="(brand,i) in brands"
              :key="i"
              :src="brand.src"
              cover
          ></v-carousel-item>
        </v-carousel>
      </div>
    </main>
  </body>
</template>

<style scoped>
</style>
