<template>
    <div>
      <h2>Đăng Nhập</h2>
      <form @submit.prevent="login">
        <div>
          <label for="username">Tên Đăng Nhập (MSNV):</label>
          <input type="text" v-model="username" required>
        </div>
        <div>
          <label for="password">Mật Khẩu:</label>
          <input type="password" v-model="password" required>
        </div>
        <button type="submit">Đăng Nhập</button>
      </form>
    </div>
  </template>
  
  <script>
  import NhanVienService from "@/services/nhanvien.service";
  
  export default {
    data() {
      return {
        username: "",
        password: ""
      };
    },
    methods: {
      async login() {
        try {
          const user = await NhanVienService.authenticate(this.username, this.password);
          if (user) {
            // Lưu thông tin đăng nhập vào localStorage
            localStorage.setItem("user", JSON.stringify(user));
            // Chuyển hướng đến trang quản lý sách
            this.$router.push({ name: "book" });
          } else {
            alert("Tên đăng nhập hoặc mật khẩu không đúng!");
          }
        } catch (error) {
          console.error(error);
          alert("Đã xảy ra lỗi khi đăng nhập!");
        }
      }
    }
  };
  </script>
  