<script>
export default {
    props: {
        QLMSS: { type: Array, default: [] },
        activeIndex: { type: Number, default: -1 },
    },
    emits: ["update:activeIndex"],
    methods: {
        updateActiveIndex(index) {
            this.$emit("update:activeIndex", index);
        },
        goToEdit(SLMSId) {
            this.$router.push({ name: 'qlms.edit', params: { id: SLMSId } });
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
                  <th scope="col">Mã Sách</th>
                  <th scope="col">Mã Độc Giả</th>
                  <th scope="col">Ngày Mượn</th>
                  <th scope="col">Ngày Trả</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(qlms, index) in QLMSS" :key="index" @click="goToEdit(qlms._id)">
                  <td>{{ qlms.maSach }}</td>
                  <td>{{ qlms.maDocGia }}</td>
                  <td>{{ qlms.ngayMuon }}</td>
                  <td>{{ qlms.ngayTra }}</td>
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