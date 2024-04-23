<template>
    <div>
      <h4>Thêm Sách Mới</h4>
      <BookForm :book="newBook" @submit:book="addBook" />
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
  import BookForm from "@/components/BookForm.vue";
  import BookService from "@/services/book.service";
  
  export default {
    components: {
      BookForm,
    },
    data() {
      return {
        newBook: {
          maSach: "",
          tenSach: "",
          donGia: null,
          namXuatBan: null,
          soLuong: null,
          tacGia: "",
          maNXB: "", // Giá trị của dropdown "Mã NXB"
        },
        message: "",
        NXBS: [], // Danh sách các NXB cho dropdown
      };
    },
    methods: {
      async addBook(bookData) {
        try {
          await BookService.create(bookData);
          this.message = "Sách được thêm mới thành công.";
          // Reset form after successful submission
          this.newBook = {
            maSach: "",
            tenSach: "",
            donGia: null,
            namXuatBan: null,
            soLuong: null,
            tacGia: "",
            maNXB: "",
          };
        } catch (error) {
          console.log(error);
        }
      },
      async retrieveNXBS() {
        try {
          this.NXBS = await NXBService.getAll();
        } catch (error) {
          console.log(error);
        }
      },
      handleMaNXBChange(event) {
        // Lưu giá trị được chọn vào newBook.maNXB khi dropdown thay đổi
        this.newBook.maNXB = event.target.value;
      },
    },
    mounted() {
      this.retrieveNXBS();
    },
  };
  </script>
  