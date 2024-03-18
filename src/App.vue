<script setup>
import { RouterLink, RouterView } from 'vue-router'
import FormLogin from "@/components/FormLogin.vue"
import {ref} from "vue";

const brands = ref([
  '/src/assets/images/brands/tiktok.svg',
  '/src/assets/images/brands/upos.svg',
  '/src/assets/images/brands/shopee.svg',
  '/src/assets/images/brands/oppo.svg',
  '/src/assets/images/brands/the-gioi-di-dong.svg'
])

const currentSlide = ref(0)

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
        <div class="router-content-wrapper">
          <RouterView />
        </div>
        <div class="service-wrapper">
          <div class="service-container">
            <h3 class="service-title">Dịch vụ của chúng tôi</h3>
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
      </div>
      <div class="brand-list-wrapper">
        <h3>Khách hàng tiêu biểu</h3>
        <div class="brand-list">
          <v-icon icon="mdi-chevron-left" size="32"></v-icon>
          <div class="brand-item" v-for="(brand, index) in brands" :key="index">
            <img :src="brand" alt="brand" class="brand-image">
          </div>
          <v-icon icon="mdi-chevron-right" size="32"></v-icon>
        </div>
      </div>
    </main>
  </body>
  <footer>
    <div class="footer-wrapper">
      <div class="footer-container">
        <div class="footer-left-content">
          <div class="footer-logo-box">
            <img class="footer-logo" src="@/assets/images/logo-footer.svg" alt="Vue logo"/>
          </div>
          <div class="footer-company-information">
            <p class="mb-1">CÔNG TY CỔ PHẦN ĐẦU TƯ VÀ PHÁT TRIỂN ỨNG DỤNG THÔNG MINH VIỆT</p>
            <p>
              <span>Mã Số Thuế: 0106494214</span>
              <br>
              <span>Ngày hoạt động: 27/03/2014</span>
              <br>
              <span>Sở Kế Hoạch và Đầu Tư Thành Phố Hà Nội</span>
            </p>
          </div>
          <ul class="footer-social-list">
            <li class="footer-social-item">
              <img src="@/assets/images/socials/facebook.svg" alt="facebook" class="footer-social-item-img">
            </li>
            <li class="footer-social-item">
              <img src="@/assets/images/socials/instagram.svg" alt="instagram" class="footer-social-item-img"></li>
            <li class="footer-social-item">
              <img src="@/assets/images/socials/tiktok.svg" alt="tiktok" class="footer-social-item-img"></li>
            <li class="footer-social-item">
              <img src="@/assets/images/socials/youtube.svg" alt="youtube" class="footer-social-item-img"></li>
            <li class="footer-social-item">
              <img src="@/assets/images/socials/zalo.svg" alt="zalo" class="footer-social-item-img"></li>
          </ul>
        </div>
        <div class="footer-right-content">
          <div class="footer-contact-container">
            <h3 class="text-uppercase">Liên hệ</h3>
            <ul class="footer-contact-list">
              <li class="footer-contact-item">
                <v-icon icon="mdi-email-outline"></v-icon>
                <span class="footer-contact-item--content">contact@viajsc.com</span>
              </li>
              <li class="footer-contact-item">
                <v-icon icon="mdi-phone-outline"></v-icon>
                <span class="footer-contact-item--content">1900 9999</span>
              </li>
              <li class="footer-contact-item">
                <v-icon icon="mdi-map-marker-outline"></v-icon>
                <span class="footer-contact-item--content">16, Ngõ 204, Trần Duy Hưng, Trung Hòa, Cầu Giấy, HN </span>
              </li>
            </ul>
            <div class="footer-bo-cong-thuong-box">
              <img src="@/assets/images/bo-cong-thuong.svg" alt="bo-cong-thuong" class="footer-bo-cong-thuong-img">
            </div>
          </div>
          <div class="footer-download-container">
            <h3 class="text-uppercase mb-4">Tải ứng dụng</h3>
            <div class="d-flex ">
              <div class="footer-download-qr">
                <img src="@/assets/images/download-qr.svg" alt="qr-code" class="footer-download-qr-img">
              </div>
              <div class="footer-download-store">
                <img src="@/assets/images/download-app-store.svg" alt="app-store" class="footer-download-store-img">
                <img src="@/assets/images/download-google-play.svg" alt="google-play" class="footer-download-store-img">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-privacy">
        <h3>Chính sách bảo mật</h3>
        <p>Copyright © 2021 VIA JSC. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.header-wrapper {
  display: flex;
  justify-content: space-between;
  padding: 2rem 3rem 2rem 2rem;
  background-image: url('@/assets/images/background-header.svg');
  background-size: 100%;
}

.logo-box {
  width: 33%;
}

.header-right-box {
  width: 67%;
  display: flex;
  justify-content: flex-end;
}

.main-content-wrapper {
  padding: 60px 80px;
  display: flex;
}

.router-content-wrapper {
  width: 67%;
}

.service-title {
  font-size: 1.1875rem;
  line-height: 1.4375;
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1.5rem;
}

.service-wrapper {
  width: 33%;
  padding-left: 65px;
  padding-top: 2rem;
}

.service-container {
  width: 100%;
  background-color: #F7F8F9;
  padding: 1.5rem;
  border-radius: .25rem;
}

.service-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.service-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: .25rem;
  padding: 1rem 1.125rem;
  row-gap: .5rem;
}

.service-item > p {
  font-weight: 600;
  text-transform: uppercase;
}

.service-item:last-child {
  grid-column: span 2;
}

.footer-wrapper {
  background-color: #D29B42;
  color: #ffffff;
}

.footer-container {
  padding: 3rem 5rem;
  display: flex;
}

.footer-left-content {
  width: 33%;
  padding-right: 100px;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}

.footer-company-information {
  padding-right: 3.875rem;
}

.footer-social-list {
  display: flex;
}

.footer-right-content {
  width: 67%;
  padding-left: 100px;
  display: flex;
  justify-content: space-between;
  padding-top: 3.4375rem;
}

.footer-contact-container {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}

.footer-download-store {
  display: flex;
  margin-left: 20px;
  flex-direction: column;
  row-gap: .5rem;
}

.footer-privacy {
  text-align: center;
  padding: 1rem 0;
}

.brand-list-wrapper {
  padding: 3rem 5rem;
}

.brand-list-wrapper > h3 {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.75rem;
  color: var(--main-color);
  font-weight: 600;
}

.brand-list {
  display: flex;
  column-gap: 54px;
  align-items: center;
  justify-content: center;
}

.footer-contact-item--content {
  padding-left: 8px;
}
</style>
