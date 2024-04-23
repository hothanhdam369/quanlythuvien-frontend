<template>
    <div class="page row">
        <div class="col-md-10">

            <InputSearch v-model="searchText" />
        </div>
        <div class="mt-3 col-md-12">
            <h4>
                Danh sách NXB
                <i class="fas fa-address-book"></i>
            </h4>
            <NXBList v-if="filteredNXBSCount > 0" :NXBS="filteredNXBS"
                v-model:activeIndex="activeIndex" />
            <p v-else>Không có NXB nào.</p>
            <div class="mt-3 row justify-content-around align-items-center">
                <button class="btn btn-sm btn-primary" @click="refreshList()">
                    <i class="fas fa-redo"></i> Làm mới
                </button>
                <button class="btn btn-sm btn-success" @click="goToAddNXB">
                    <i class="fas fa-plus"></i> Thêm mới
                </button>
                <button class="btn btn-sm btn-danger" @click="removeAllNXBS">
                    <i class="fas fa-trash"></i> Xóa tất cả
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import InputSearch from "@/components/InputSearch.vue";
import NXBList from "@/components/NXBList.vue";
import NXBService from "@/services/NXB.service";
export default {
    components: {
        InputSearch,
        NXBList,
    },
    // Đoạn mã xử lý đầy đủ sẽ trình bày bên dưới
    data() {
        return {
            NXBS: [],
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
        NXBSStrings() {
            return this.NXBS.map((nxb) => {
                const { maNXB, tenNXB, diaChi} = nxb;
                return [maNXB, tenNXB, diaChi].join("");
            });
        },
        // Trả về các contact có chứa thông tin cần tìm kiếm.
        filteredNXBS() {
            if (!this.searchText) return this.NXBS;
            return this.NXBS.filter((_nxb, index) =>
                this.NXBSStrings[index].includes(this.searchText)
            );
        },
        activeNXB() {
            if (this.activeIndex < 0) return null;
            return this.filteredNXBS[this.activeIndex];
        },
        filteredNXBSCount() {
            return this.filteredNXBS.length;
        },
    },
    methods: {
        async retrieveNXBS() {
            try {
                this.NXBS = await NXBService.getAll();
            } catch (error) {
                console.log(error);
            }
        },
        refreshList() {
            this.retrieveNXBS();
            this.activeIndex = -1;
        },
        async removeAllNXBS() {
            if (confirm("Bạn muốn xóa tất cả NXB?")) {
                try {
                    await NXBService.deleteAll();
                    this.refreshList();
                } catch (error) {
                    console.log(error);
                }
            }
        },
        goToAddNXB() {
            this.$router.push({ name: "nxb.add" });
        },
    },
    mounted() {
        this.refreshList();
    },
};
</script>
<style scoped>
</style>