<script setup>
import {onMounted, ref} from 'vue'

const form = ref({
  store_name: '',
  phone_number: '',
  email: '',
  password: '',
  confirm_password: '',
  address: '',
  ward_id: null,
  district_id: null,
  province_id: null
})

const confirmSecurity = ref(false)
const provinces = ref([])
const districts = ref([])
const wards = ref([])
const isShowPassword = ref(false)
const isShowConfirmPassword = ref(false)

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
          <label class="form-label require">Tên cửa hàng</label>
          <v-text-field
              v-model="form.store_name"
              required
              placeholder="Nhập tên cửa hàng..."
              variant="outlined"
              hide-details
          ></v-text-field>
        </div>
        <div class="form-group">
          <label class="form-label require">Số điện thoại</label>
          <v-text-field
              v-model="form.phone_number"
              required
              placeholder="Nhập số điện thoại"
              variant="outlined"
              hide-details
          ></v-text-field>
        </div>
        <div class="form-group">
          <label class="form-label">Email</label>
          <v-text-field
              v-model="form.email"
              required
              placeholder="Nhập email..."
              variant="outlined"
              hide-details
          ></v-text-field>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label require">Mật khẩu</label>
          <v-text-field
              v-model="form.password"
              required
              :type="isShowPassword ? 'text': 'password'"
              placeholder="Nhập mật khẩu..."
              variant="outlined"
              hide-details="auto"
              :append-inner-icon="isShowPassword ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
              @click:append-inner="isShowPassword = !isShowPassword"
          ></v-text-field>
        </div>
        <div class="form-group">
          <label class="form-label require">Xác nhận mật khẩu</label>
          <v-text-field
              v-model="form.confirm_password"
              required
              :type="isShowConfirmPassword ? 'text': 'password'"
              placeholder="Xác nhận mật khẩu..."
              variant="outlined"
              hide-details="auto"
              :append-inner-icon="isShowConfirmPassword ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
              @click:append-inner="isShowConfirmPassword = !isShowConfirmPassword"
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
              hide-details
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
              hide-details
              item-title="name"
              item-value="id"
              menu-icon="mdi-chevron-down"
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
              hide-details
              item-title="name"
              item-value="id"
              menu-icon="mdi-chevron-down"
              @update:model-value="getWards(form.district_id)"
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
              hide-details
              item-title="name"
              item-value="id"
              menu-icon="mdi-chevron-down"
              @update:model-value="getDistricts(form.province_id)"
          ></v-select>
        </div>
      </div>

      <div class="form-row justify-space-between">
        <label class="form-checkbox-label">
          <input type="checkbox" class="form-checkbox" v-model="confirmSecurity">
          <span>
            Tôi đã đọc và đồng ý với
            <span class="form-checkbox--label-highlight" @click="confirmSecurity = !confirmSecurity"
              >Chính sách bảo mật thông tin
            </span>
          </span>
        </label>
        <button class="btn-submit">Đăng ký ngay</button>
      </div>
    </v-form>
  </div>
</template>

<style scoped>
.form-register-wrapper {
  padding-right: 65px;
}

.form-register-title {
  font-size: 1.5625rem;
  margin-bottom: 1.25rem;
  text-align: center;
}

.form-row {
  display: flex;
  column-gap: 1.5rem;
  margin-bottom: 27px;
}

.form-row:last-child {
  margin-bottom: 0;
}

.form-row .form-group {
  flex: 1;
}

.require::after {
  content: '*';
  color: var(--main-color);
  margin-left: .25rem;
}

.form-checkbox-label {
  display: flex;
  column-gap: 1rem;
  align-items: center;
}

.form-checkbox--label-highlight {
  color: var(--main-color);
}

.form-checkbox-label span {
  cursor: pointer;
  user-select: none;
}
</style>