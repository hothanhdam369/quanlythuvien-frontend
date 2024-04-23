<template>
    <Form @submit="submitQLMS" :validation-schema="QLMSFormSchema">
        <div class="form-group">
            <label for="maSach">Mã Sách</label>
            <Field name="maSach" type="text" class="form-control" v-model="qlmsLocal.maSach" />
            <ErrorMessage name="maSach" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="maDocGia">Mã Độc Giả</label>
            <Field name="maDocGia" type="text" class="form-control" v-model="qlmsLocal.maDocGia" />
            <ErrorMessage name="maDocGia" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="ngayMuon">Ngày Mượn</label>
            <Field name="ngayMuon" type="text" class="form-control" v-model="qlmsLocal.ngayMuon" />
            <ErrorMessage name="ngayMuon" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="ngayTra">Ngày Trả</label>
            <Field name="ngayTra" type="text" class="form-control" v-model="qlmsLocal.ngayTra" />
            <ErrorMessage name="ngayTra" class="error-feedback" />
        </div>
        <div class="form-group">
            <button class="btn btn-primary">Lưu</button>
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
    emits: ["submit:qlms"],
    data() {
        const QLMSFormSchema = yup.object().shape({
            maSach: yup
                .string()
                .required("Mã Sách không để trống.")
                .min(2, "Ma NXB phải ít nhất 2 ký tự.")
                .max(16, "Ma NXB có nhiều nhất 16 ký tự."),
            maDocGia: yup
                .string()
                .required("Mã Độc Giả không để trống.")
                .min(2, "Ma Độc Giả phải ít nhất 2 ký tự.")
                .max(16, "Ma Độc Giả có nhiều nhất 16 ký tự."),
            ngayMuon: yup.string().required("Ngày Mượn không được để trống."),
        });
        return {
            qlmsLocal: {
                maSach: "",
                maDocGia: "",
                ngayMuon: "",
                ngayTra: "",
            },
            QLMSFormSchema,
        };
    },
    methods: {
        submitQLMS() {
            this.$emit("submit:qlms", this.qlmsLocal);
        },
    },
};
</script>

<style scoped>
@import "@/assets/form.css";
</style>
