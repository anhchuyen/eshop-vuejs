import request from '@/utils/request'

class BrandsAPI {
    addBrand(data) {
        return request({
            url: '/brands',
            method: 'post',
            data
        })
    }

    listBrand(data) {
        return request({
            url: '/brands',
            method: 'get',
            params: data
        })
    }
    deleteBrand(data) {
        return request({
            url: `/brands/${data.id}`,
            method: 'delete',
        })
    }
    handleUpdate(data) {
        return request({
            url: `/brands/${data.id}`,
            method: 'put',
            data
        })
    }
}
const Brands = new BrandsAPI("brands");
export { Brands as default };