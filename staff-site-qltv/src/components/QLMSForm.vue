<template>
    <Form @submit="submitQLMS" :validation-schema="QLMSFormSchema">
        <div class="form-group">
            <label for="maSach">Mã Sách</label>
            <Field name="maSach" type="text" class="form-control" v-model="qlms.maSach" />
            <ErrorMessage name="maSach" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="maDocGia">Mã Độc Giả</label>
            <Field name="maDocGia" type="text" class="form-control" v-model="qlms.maDocGia" />
            <ErrorMessage name="maDocGia" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="ngayMuon">Ngày Mượn</label>
            <Field name="ngayMuon" type="text" class="form-control" v-model="qlms.ngayMuon" />
            <ErrorMessage name="ngayMuon" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="ngayTra">Ngày Trả</label>
            <Field name="ngayTra" type="text" class="form-control" v-model="qlms.ngayTra" />
            <ErrorMessage name="ngayTra" class="error-feedback" />
        </div>
        <div class="form-group">
            <button class="btn btn-primary">Lưu</button>
            <button v-if="qlmsLocal._id" type="button" class="ml-2 btn btn-danger" @click="deleteQLMS">
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
    emits: ["submit:qlms", "delete:qlms"],
    props: {
        qlms: { type: Object, required: true }
    },
    data() {
    const QLMSFormSchema = yup.object().shape({
        maSach: yup
            .string()
            .required("Mã Sách không để trống.")
            .min(2, "Ma NXB phải ít nhất 2 ký tự.")
            .max(16, "Ma NXB có nhiều nhất 16 ký tự."),
        maDocGia: yup
            .string()  // <-- Ensure you call yup.string() here
            .required("Mã Sách không để trống.")
            .min(2, "Ma NXB phải ít nhất 2 ký tự.")
            .max(16, "Ma NXB có nhiều nhất 16 ký tự."),
    });
    return {
        qlmsLocal: this.qlms,
        QLMSFormSchema,
    };
},

    methods: {
        submitQLMS() {
            this.$emit("submit:qlms", this.qlmsLocal);
        },
        deleteQLMS() {
            this.$emit("delete:qlms", this.qlmsLocal.id);
        },
    },
};
</script>
<style scoped>
@import "@/assets/form.css";
</style>