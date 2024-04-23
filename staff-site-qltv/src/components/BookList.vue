<script>
export default {
    props: {
        books: { type: Array, default: [] },
        activeIndex: { type: Number, default: -1 },
    },
    emits: ["update:activeIndex"],
    methods: {
        updateActiveIndex(index) {
            this.$emit("update:activeIndex", index);
        },
        goToEdit(bookId) {
            this.$router.push({ name: 'book.edit', params: { id: bookId } });
        }
    }
};
</script>
<template>
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <div class="table-responsive">
            <table class="table table-bordered table-hover">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Ma Sach</th>
                  <th scope="col">Ten Sach</th>
                  <th scope="col">Gia</th>
                  <th scope="col">Ma NXB</th>
                  <th scope="col">Nam XB</th>
                  <th scope="col">Tac Gia</th>
                  <th scope="col">So Quyen</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(book, index) in books" :key="index" @click="goToEdit(book._id)">
                  <td>{{ book.maSach }}</td>
                  <td>{{ book.tenSach }}</td>
                  <td>{{ book.donGia }}</td>
                  <td>{{ book.maNhaXuatBan }}</td>
                  <td>{{ book.namXuatBan }}</td>
                  <td>{{ book.tacGia }}</td>
                  <td>{{ book.soQuyen }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </template>
<style scoped>
/* Add custom styles */
.table-responsive {
  overflow-x: auto; /* Enable horizontal scrolling on smaller screens */
}

.table-bordered {
  border: 1px solid #dee2e6;
}

.table-bordered th,
.table-bordered td {
  border: 1px solid #dee2e6;
}

.table-hover tbody tr:hover {
  background-color: #f5f5f5; /* Change background color on hover */
}
</style>