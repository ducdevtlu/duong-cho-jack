<script setup>
import { ref } from 'vue'

const form = ref({
  account: '',
  password: ''
})

const isShowPassword = ref(false)

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
    <h3 class="form-title text-uppercase text-bold">Đăng nhập ngay</h3>
    <v-form class="form-login-container" @submit.prevent="login">
      <div class="form-group form-group--account">
        <label class="form-label">Số điện thoại hoặc email</label>
        <v-text-field
            class="form-input"
            v-model="form.account"
            required
            placeholder="Nhập số điện thoại hoặc email..."
            variant="outlined"
            hide-details="auto"
        ></v-text-field>
      </div>
      <div class="form-group form-group--password">
        <label class="form-label">Mật khẩu</label>
        <v-text-field
            class="form-input"
            v-model="form.password"
            required
            :type="isShowPassword ? 'text' : 'password'"
            placeholder="Nhập mật khẩu..."
            variant="outlined"
            :append-inner-icon="isShowPassword ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
            hide-details="auto"
            height="44px"
            @click:append-inner="isShowPassword = !isShowPassword"
        ></v-text-field>
      </div>
      <button class="btn-login">
        Đăng nhập
      </button>
    </v-form>
    <div class="d-flex w-100 justify-end mt-4 text-white">
      <span class="forgot-password">Quên mật khẩu</span>
    </div>
  </div>
</template>

<style scoped>
.form-login-wrapper {
  width: 75%;
  padding: 4rem 0 12.5rem;
}

.form-login-container {
  background-color: #ffffff;
  border-radius: 4px;
  padding: 1.75rem;
  display: flex;
  column-gap: 1rem;
  align-items: flex-end;
}

.form-title {
  font-size: 1.125rem;
  color: #ffffff;
  margin-bottom: 1rem;
}

.btn-login {
  height: 44px;
}

.form-group--account {
  width: 45%;
}

.form-group--password {
  width: 35%;
}
</style>