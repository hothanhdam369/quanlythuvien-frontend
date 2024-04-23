<template>
    <div v-if="qlms" class="page">
        <h4>Hiệu chỉnh MUON SACH</h4>
        <QLMSForm :qlms="qlms" @submit:qlms="updateQLMS" @delete:qlms="deleteQLMS" />
        <p>{{ message }}</p>
    </div>
</template>
<script>
import QLMSForm from "@/components/QLMSForm.vue";
import QLMSService from "@/services/QLMS.service";
export default {
    components: {
        QLMSForm,
    },
    props: {
        id: { type: String, required: true },
    },
    data() {
        return {
            qlms: null,
            message: "",
        };
    },
    methods: {
        async getQLMS(id) {
            try {
                this.qlms = await QLMSService.get(id);
            } catch (error) {
                console.log(error);
                // Chuyển sang trang NotFound đồng thời giữ cho URL không đổi
                this.$router.push({
                    name: "notfound",
                    params: {
                        pathMatch: this.$route.path.split("/").slice(1)
                    },
                    query: this.$route.query,
                    hash: this.$route.hash,
                });
            }
        },
        async updateQLMS(data) {
    try {
        if (this.qlms) {
            await QLMSService.update(this.qlms._id, data);
            this.message = "Trạng Thái Mượn Sách được cập nhật thành công.";
        } else {
            console.error("QLMS is null or undefined.");
        }
    } catch (error) {
        console.log(error);
    }
},
async deleteQLMS() {
    if (this.qlms && confirm("Bạn muốn xóa loại Trang thai muon sach này?")) {
        try {
            await QLMSService.delete(this.qlms._id);
            this.$router.push({ name: "qlms" });
        } catch (error) {
            console.log(error);
        }
    } else {
        console.error("QLMS is null or undefined.");
    }
},
    },
    created() {
        this.getQLMS(this.id);
        this.message = "";
    },
};
</script>