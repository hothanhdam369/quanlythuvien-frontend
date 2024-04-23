<template>
    <div v-if="nxb" class="page">
        <h4>Hiệu chỉnh NXB</h4>
        <NXBForm :nxb="nxb" @submit:nxb="updateNXB" @delete:nxb="deleteNXB" />
        <p>{{ message }}</p>
    </div>
</template>
<script>
import NXBForm from "@/components/NXBForm.vue";
import NXBService from "@/services/NXB.service";
export default {
    components: {
        NXBForm,
    },
    props: {
        id: { type: String, required: true },
    },
    data() {
        return {
            nxb: null,
            message: "",
        };
    },
    methods: {
        async getNXB(id) {
            try {
                this.nxb = await NXBService.get(id);
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
        async updateNXB(data) {
            try {
                await NXBService.update(this.nxb._id, data);
                this.message = "NXB được cập nhật thành công.";
            } catch (error) {
                console.log(error);
            }
        },
        async deleteNXB() {
            if (confirm("Bạn muốn xóa loại NXB này?")) {
                try {
                    await NXBService.delete(this.nxb._id);
                    this.$router.push({ name: "nxb" });
                } catch (error) {
                    console.log(error);
                }
            }
        },
    },
    created() {
        this.getNXB(this.id);
        this.message = "";
    },
};
</script>