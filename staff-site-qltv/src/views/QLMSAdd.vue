<template>
    <div v-if="qlms" class="page">
        <h4>Thêm Mới MUON SACH</h4>
        <!-- Pass qlms prop to QLMSFormAdd -->
        <QLMSFormAdd :qlms="qlms" @submit:qlms="createQLMS" />
        <p>{{ message }}</p>
    </div>
</template>

<script>
import QLMSFormAdd from "@/components/QLMSFormAdd.vue";
import QLMSService from "@/services/QLMS.service";

export default {
    components: {
        QLMSFormAdd,
    },
    data() {
        return {
            qlms: {
                // Define default values for qlms if needed
                maSach: "",
                maDocGia: "",
                ngayMuon: "",
                ngayTra: "",
            },
            message: "",
        };
    },
    methods: {
        async createQLMS(data) {
            try {
                await QLMSService.create(data);
                this.message = "Đã thêm Mượn Sách mới thành công.";
            } catch (error) {
                console.error(error);
            }
        },
    },
};
</script>
