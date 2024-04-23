<template>
    <Form @submit="submitBook" :validation-schema="bookFormSchema">
        <div class="form-group">
            <label for="maSach">Mã Sách</label>
            <Field name="maSach" type="text" class="form-control" v-model="book.maSach" />
            <ErrorMessage name="maSach" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="tenSach">Tên Sách</label>
            <Field name="tenSach" type="text" class="form-control" v-model="book.tenSach" />
            <ErrorMessage name="tenSach" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="donGia">Giá</label>
            <Field name="donGia" type="text" class="form-control" v-model="book.donGia" />
            <ErrorMessage name="donGia" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="namXuatBan">Năm Xuất Bản</label>
            <Field name="namXuatBan" type="text" class="form-control" v-model="book.namXuatBan" />
            <ErrorMessage name="namXuatBan" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="soLuong">Số Lượng</label>
            <Field name="soLuong" type="number" class="form-control" v-model="book.soQuyen" />
            <ErrorMessage name="soLuong" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="tacGia">Tác giả</label>
            <Field name="tacGia" type="text" class="form-control" v-model="book.tacGia" />
            <ErrorMessage name="tacGia" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="maNXB">Mã NXB</label>
            <select name="maNXB" class="form-control" v-model="book.maNXB" @change="handleMaNXBChange">
                <option value="" disabled>Select Mã NXB</option>
                <option v-for="nxb in NXBS" :key="nxb._id" :value="nxb.maNXB">{{ nxb.maNXB }}</option>
            </select>
            
            <ErrorMessage name="maNXB" class="error-feedback" />
          </div>
        <div class="form-group">
            <button class="btn btn-primary">Lưu</button>
            <button v-if="bookLocal._id" type="button" class="ml-2 btn btn-danger" @click="deleteBook">
                Xóa
            </button>
        </div>
    </Form>
    
</template>
<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
import NXBService from "@/services/NXB.service";

export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    emits: ["submit:book", "delete:book"],
    props: {
        book: { type: Object, required: true },
    },
    data() {
        const bookFormSchema = yup.object().shape({
            maSach: yup
                .string()
                .required("Mã Sách không để trống.")
                .min(2, "Tên phải ít nhất 2 ký tự.")
                .max(16, "Tên có nhiều nhất 16 ký tự."),
            tenSach: yup
                .string()
                .required("Tên Sách không được để trống.")
                .max(50, "Tên Sách tối đa 50 ký tự."),
            soLuong: yup.number().required("Vui lòng nhập Số Lượng."),
        });
        return {
            NXBS: [],
            // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
            // contactLocal để liên kết với các input trên form
            bookLocal: this.book,
            bookFormSchema,
        };
    },
    methods: {
        submitBook() {
            this.$emit("submit:book", this.bookLocal);
        },
        deleteBook() {
            this.$emit("delete:book", this.bookLocal.id);
        },
        async retrieveNXBS() {
            try {
                this.NXBS = await NXBService.getAll();
            } catch (error) {
                console.log(error);
            }
        },
        handleMaNXBChange(event) {
        this.bookLocal.maNXB = event.target.value;
    },
    },
    mounted() {
    this.retrieveNXBS(); // Gọi phương thức để lấy danh sách NXB khi component được tạo
}

};
</script>
<style scoped>
@import "@/assets/form.css";
</style>