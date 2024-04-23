<template>
    <Form @submit="submitNXB" :validation-schema="NXBFormSchema">
        <div class="form-group">
            <label for="maNXB">Mã NXB</label>
            <Field name="maNXB" type="text" class="form-control" v-model="nxb.maNXB" />
            <ErrorMessage name="maSach" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="tenNXB">Tên NXB</label>
            <Field name="tenNXB" type="text" class="form-control" v-model="nxb.tenNXB" />
            <ErrorMessage name="tenNXB" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="diaChi">Địa Chỉ</label>
            <Field name="diaChi" type="text" class="form-control" v-model="nxb.diaChi" />
            <ErrorMessage name="diaChi" class="error-feedback" />
        </div>
        <div class="form-group">
            <button class="btn btn-primary">Lưu</button>
            <button v-if="nxbLocal._id" type="button" class="ml-2 btn btn-danger" @click="deleteNXB">
                Xóa
            </button>
        </div>
    </Form>
    
</template>
<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    emits: ["submit:nxb", "delete:nxb"],
    props: {
        nxb: { type: Object, required: true }
    },
    data() {
        const NXBFormSchema = yup.object().shape({
            maNXB: yup
                .string()
                .required("Mã Sách không để trống.")
                .min(2, "Ma NXB phải ít nhất 2 ký tự.")
                .max(16, "Ma NXB có nhiều nhất 16 ký tự."),
            tenNXB: yup
                .string()
                .required("Tên Sách không được để trống.")
                .max(50, "Tên Sách tối đa 50 ký tự."),
        });
        return {
            // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
            // contactLocal để liên kết với các input trên form
            nxbLocal: this.nxb,
            NXBFormSchema,
        };
    },
    methods: {
        submitNXB() {
            this.$emit("submit:nxb", this.nxbLocal);
        },
        deleteNXB() {
            this.$emit("delete:nxb", this.nxbLocal.id);
        },
    },
};
</script>
<style scoped>
@import "@/assets/form.css";
</style>