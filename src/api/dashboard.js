import request from '@/utils/request'

class DashboardAPI {
    dashboard() {
        return request({
            url: '',
            method: 'get',
       
        })
    }


}
const Dashboard = new DashboardAPI("dashboard");
export { Dashboard as default };