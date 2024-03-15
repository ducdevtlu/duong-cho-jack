<script setup>
import {onMounted, ref} from 'vue'

const form = ref({
  store_name: '',
  phone_number: '',
  email: '',
  password: '',
  confirm_password: '',
  address: '',
  ward_id: '',
  district_id: '',
  province_id: ''
})

const confirmSecurity = ref(false)
const provinces = ref([])
const districts = ref([])
const wards = ref([])

const getProvinces = () => {
  axios.get('/provinces').then((response) => {
    provinces.value = response.data.data
  }).catch((error) => {
    console.log(error)
  })
}

const getDistricts = (provinceId) => {
  axios.get(`/districts?province_id=${provinceId}`).then((response) => {
    districts.value = response.data.data
  }).catch((error) => {
    console.log(error)
  })
}

const getWards = (districtId) => {
  axios.get(`/wards?district_id=${districtId}`).then((response) => {
    wards.value = response.data.data
  }).catch((error) => {
    console.log(error)
  })
}

onMounted(() => {
  getProvinces()
})

</script>

<template>
  <div class="form-register-wrapper">
    <h3 class="form-register-title text-uppercase text-main text-bold">Đăng ký tài khoản</h3>
    <v-form>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Tên cửa hàng</label>
          <v-text-field
              v-model="form.store_name"
              required
              placeholder="Nhập tên cửa hàng..."
              variant="outlined"
          ></v-text-field>
        </div>
        <div class="form-group">
          <label class="form-label">Số điện thoại</label>
          <v-text-field
              v-model="form.phone_number"
              required
              placeholder="Nhập số điện thoại"
              variant="outlined"
          ></v-text-field>
        </div>
        <div class="form-group">
          <label class="form-label">Email</label>
          <v-text-field
              v-model="form.email"
              required
              placeholder="Nhập email..."
              variant="outlined"
          ></v-text-field>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Mật khẩu</label>
          <v-text-field
              v-model="form.password"
              required
              type="password"
              placeholder="Nhập mật khẩu..."
              variant="outlined"
          ></v-text-field>
        </div>
        <div class="form-group">
          <label class="form-label">Xác nhận mật khẩu</label>
          <v-text-field
              v-model="form.confirm_password"
              required
              type="password"
              placeholder="Xác nhận mật khẩu..."
              variant="outlined"
          ></v-text-field>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Địa chỉ</label>
          <v-text-field
              v-model="form.address"
              required
              placeholder="Nhập số nhà, tòa nhà, tên đường"
              variant="outlined"
          ></v-text-field>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Phường/Xã</label>
          <v-select
              v-model="form.ward_id"
              :items="wards"
              required
              placeholder="Chọn Phường/Xã"
              variant="outlined"
              item-text="name"
              item-value="id"
          ></v-select>
        </div>
        <div class="form-group">
          <label class="form-label">Quận/Huyện</label>
          <v-select
              v-model="form.district_id"
              :items="districts"
              required
              placeholder="Chọn Quận/Huyện"
              variant="outlined"
              item-text="name"
              item-value="id"
              @change="getWards(form.district_id)"
          ></v-select>
        </div>
        <div class="form-group">
          <label class="form-label">Thành phố</label>
          <v-select
              v-model="form.province_id"
              :items="provinces"
              required
              placeholder="Chọn thành phố"
              variant="outlined"
              item-text="name"
              item-value="id"
              @change="getDistricts(form.province_id)"
          ></v-select>
        </div>
      </div>
      <div class="form-row">
        <div class="form-checkbox-box">
          <input type="checkbox" class="form-checkbox" v-model="confirmSecurity">
          <label @click="confirmSecurity = !confirmSecurity">Tôi đã đọc và đồng ý với <span class="form-checkbox--label-highlight">Chính sách bảo mật thông tin</span>></label>
        </div>
        <button class="btn-submit">Đăng ký ngay</button>
      </div>
    </v-form>
  </div>
</template>

<style scoped>
.form-register-title {
  font-size: 1.5625rem;
  margin-bottom: 1.25rem;
  text-align: center;
}
</style>