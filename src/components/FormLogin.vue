<script setup>
import { ref } from 'vue'
import { mdiEye } from '@mdi/js'
const form = ref({
  account: '',
  password: ''
})

const login = () => {
  axios.post('/login', form.value).then((response) => {
    console.log(response)
  }).catch((error) => {
    console.log(error)
  })
}
</script>

<template>
  <div class="form-login-wrapper">
    <h2 class="form-title">Đăng nhập ngay</h2>
    <v-form>
      <div class="form-group">
        <label class="form-label">Số điện thoại hoặc email</label>
        <v-text-field
            v-model="form.account"
            required
            placeholder="Nhập số điện thoại hoặc email..."
            variant="outlined"
        ></v-text-field>
      </div>
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
      <v-btn
          @click="login"
          color="primary"
      >
        Login
      </v-btn>
    </v-form>
    <div>
      <span class="forgot-password">Quên mật khẩu?</span>
    </div>
  </div>
</template>

<style scoped>

</style>