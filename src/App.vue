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
        <div class="router-content-wrapper">
          <RouterView />
        </div>
        <div class="service-wrapper">
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

    <footer>
      <div class="footer-wrapper">
        <div class="footer-container">
          <div class="footer-left-content">
            <div class="footer-logo-box">
              <img class="footer-logo" src="@/assets/images/logo-footer.svg" alt="Vue logo"/>
            </div>
            <div class="footer-company-infomation">
              <p>CÔNG TY CỔ PHẦN ĐẦU TƯ VÀ PHÁT TRIỂN ỨNG DỤNG THÔNG MINH VIỆT</p>
              <p>
                <span>Mã Số Thuế: 0106494214</span>
                <br>
                <span>Ngày hoạt động: 27/03/2014</span>
                <br>
                <span>Sở Kế Hoạch và Đầu Tư Thành Phố Hà Nội</span>
              </p>
            </div>
            <div class="footer-social-list">
              <ul>
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
          </div>
          <div class="footer-right-content">
            <div class="footer-contact-container">
              <h3 class="text-uppercase">Liên hệ</h3>
              <ul class="footer-contact-list">
                <li class="footer-contact-item">
                  <v-icon icon="mdi-mail"></v-icon>
                  <span class="footer-contact-item--content">contact@viajsc.com</span>
                </li>
                <li class="footer-contact-item">
                  <v-icon icon="mdi-phone"></v-icon>
                  <span class="footer-contact-item--content">1900 9999</span>
                </li>
                <li class="footer-contact-item">
                  <v-icon icon="mdi-locale"></v-icon>
                  <span class="footer-contact-item--content">16, Ngõ 204, Trần Duy Hưng, Trung Hòa, Cầu Giấy, HN </span>
                </li>
              </ul>
              <div class="footer-bo-cong-thuong-box">
                <img src="@/assets/images/bo-cong-thuong.svg" alt="bo-cong-thuong" class="footer-bo-cong-thuong-img">
              </div>
            </div>
            <div class="footer-download-container">
              <h3 class="text-uppercase">Tải ứng dụng</h3>
              <div>
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
  </body>
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
}
</style>
