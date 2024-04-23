<template>
    <div class="page">
        <h4>Thêm NXB Mới</h4>
        <NXBForm :nxb="newNXB" @submit:nxb="addNXB" />
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
    data() {
        return {
            newNXB: {
                maNXB: "",
                tenNXB: "",
                diaChi: "",
            },
            message: "",
        };
    },
    methods: {
        async addNXB(data) {
            try {
                await NXBService.create(data);
                this.message = "NXB đã được thêm mới thành công.";
                // Clear form
                this.newNXB = {
                    maNXB: "",
                    tenNXB: "",
                    diaChi: "",
                };
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>
