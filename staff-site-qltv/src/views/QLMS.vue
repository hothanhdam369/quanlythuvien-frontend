<template>
    <div class="page row">
        <div class="col-md-10">

            <InputSearch v-model="searchText" />
        </div>
        <div class="mt-3 col-md-12">
            <h4>
                Danh sách Mượn Sách
                <i class="fas fa-address-book"></i>
            </h4>
            <QLMSList v-if="filteredQLMSSCount > 0" :QLMSS="filteredQLMSS"
                v-model:activeIndex="activeIndex" />
            <p v-else>Không có Ai Mượn Sách.</p>
            <div class="mt-3 row justify-content-around align-items-center">
                <button class="btn btn-sm btn-primary" @click="refreshList()">
                    <i class="fas fa-redo"></i> Làm mới
                </button>
                <button class="btn btn-sm btn-success" @click="goToAddQLMS">
                    <i class="fas fa-plus"></i> Thêm mới
                </button>
                <button class="btn btn-sm btn-danger" @click="removeAllQLMS">
                    <i class="fas fa-trash"></i> Xóa tất cả
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import InputSearch from "@/components/InputSearch.vue";
import QLMSList from "@/components/QLMSList.vue";
import QLMSService from "@/services/QLMS.service";
export default {
    components: {
        InputSearch,
        QLMSList,
    },
    // Đoạn mã xử lý đầy đủ sẽ trình bày bên dưới
    data() {
        return {
            QLMSS: [],
            activeIndex: -1,
            searchText: "",
        };
    },
    watch: {
        // Giám sát các thay đổi của biến searchText.
        // Bỏ chọn phần tử đang được chọn trong danh sách.
        searchText() {
            this.activeIndex = -1;
        },
    },
    computed: {
        // Chuyển các đối tượng contact thành chuỗi để tiện cho tìm kiếm.
        QLMSStrings() {
            return this.QLMSS.map((qlms) => {
                const { maSach, maDocGia, ngayMuon,ngayTra} = qlms;
                return [ maSach, maDocGia, ngayMuon,ngayTra].join("");
            });
        },
        // Trả về các contact có chứa thông tin cần tìm kiếm.
        filteredQLMSS() {
            if (!this.searchText) return this.QLMSS;
            return this.QLMSS.filter((_qlms, index) =>
                this.QLMSStrings[index].includes(this.searchText)
            );
        },
        activeQLMS() {
            if (this.activeIndex < 0) return null;
            return this.filteredQLMSS[this.activeIndex];
        },
        filteredQLMSSCount() {
            return this.filteredQLMSS.length;
        },
    },
    methods: {
        async retrieveQLMSS() {
            try {
                this.QLMSS = await QLMSService.getAll();
            } catch (error) {
                console.log(error);
            }
        },
        refreshList() {
            this.retrieveQLMSS();
            this.activeIndex = -1;
        },
        async removeAllQLMSS() {
            if (confirm("Bạn muốn xóa tất cả Mượn Sách?")) {
                try {
                    await QLMSService.deleteAll();
                    this.refreshList();
                } catch (error) {
                    console.log(error);
                }
            }
        },
        goToAddQLMS() {
            this.$router.push({ name: "qlms.add" });
        },
    },
    mounted() {
        this.refreshList();
    },
};
</script>
<style scoped>
</style>