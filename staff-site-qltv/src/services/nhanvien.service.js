import createApiClient from "./api.service";
class NhanVienService {
    constructor(baseUrl = "/api/nhanvien") {
        this.api = createApiClient(baseUrl);
    }
    async getAll() {
        return (await this.api.get("/")).data;
    }
    async create(data) {
        return (await this.api.post("/", data)).data;
    }
    async deleteAll() {
        return (await this.api.delete("/")).data;
    }
    async get(id) {
        return (await this.api.get(`/${id}`)).data;
    }
    async update(id, data) {
        return (await this.api.put(`/${id}`, data)).data;
    }
    async delete(id) {
        return (await this.api.delete(`/${id}`)).data;
    }
    // async authenticate(username, password) {
    //     try {
    //         const response = await this.api.post("/login", { username, password });
    //         return response.data;
    //     } catch (error) {
    //         console.error("Error occurred during authentication:", error);
    //         throw error;
    //     }
    // }
}

export default new NhanVienService();