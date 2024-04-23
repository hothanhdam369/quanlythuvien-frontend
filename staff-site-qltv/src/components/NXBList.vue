<script>
export default {
    props: {
        NXBS: { type: Array, default: [] },
        activeIndex: { type: Number, default: -1 },
    },
    emits: ["update:activeIndex"],
    methods: {
        updateActiveIndex(index) {
            this.$emit("update:activeIndex", index);
        },
        goToEdit(NXBId) {
            this.$router.push({ name: 'nxb.edit', params: { id: NXBId } });
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
                  <th scope="col">MÃ NXB</th>
                  <th scope="col">Địa Chỉ</th>
                  <th scope="col">Tên NXB</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(nxb, index) in NXBS" :key="index" @click="goToEdit(nxb._id)">
                  <td>{{ nxb.maNXB }}</td>
                  <td>{{ nxb.tenNXB }}</td>
                  <td>{{ nxb.diaChi }}</td>
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