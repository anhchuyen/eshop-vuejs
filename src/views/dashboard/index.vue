<template>
  <div class="dashboard-container">

    <div class="dashboard__top">
      <el-row :gutter="20">
        <el-col :span="9" :md="24" :lg="9">
          <el-card class="box-card">
            <el-row :gutter="20">
              <el-col :span="14">
                <div class="dashboard__top__text">
                  <h2>Chào mừng bạn!</h2>
                  <span>Trang quản trị của Phí Thịnh Shop</span>
                  <span> sản phẩm có sẵn</span>
                  <span> khách hàng mới </span>
                </div>
              </el-col>
              <el-col :span="10">
                <div class="dashboard__top__img">
                  <img src="@/images/profile.png" />
                </div>
              </el-col>
            </el-row>
          </el-card>
        </el-col>

        <el-col :span="5" :md="8" :lg="5">
          <el-card class="box-card">
            <div class="box-card-flex">
              <div class="box-card-icon">
                <i class="el-icon-first-aid-kit"></i>
              </div>

              <div>
                <span>Đơn hàng thành công</span>
              </div>
            </div>
            <div style="padding-top:25px">
              <span>{{orderSuccess}} Đơn</span>

              <i style="color: #34c38f!important;" class="el-icon-arrow-up"></i>
            </div>
            <div
              style="padding-top:15px;overflow: hidden;text-overflow: ellipsis; white-space: nowrap;"
            >
              <span>
                <el-badge :hidden="true">
                  <el-button
                    style="background-color:rgba(52,195,143,.18);color:#34c38f;padding:3px"
                    size="mini"
                    >+ {{orderSuccess  }} </el-button
                  >
                </el-badge>
                So với tháng trước</span
              >
            </div>
          </el-card>
        </el-col>

        <el-col :span="5" :md="8" :lg="5">
          <el-card class="box-card">
            <div class="box-card-flex">
              <div class="box-card-icon">
                <i class="el-icon-ice-tea"></i>
              </div>
              <div>
                <span style="line-height:40px">Doanh thu</span>
              </div>
            </div>

            <div style="padding-top:25px">
              <span>{{this.revenue}}VNĐ</span>
         
              <i style="color: #34c38f!important;" class="el-icon-arrow-up"></i>
            </div>
            <div
              style="padding-top:15px;overflow: hidden;text-overflow: ellipsis; white-space: nowrap;"
            >
              <el-badge :hidden="true">
                <el-button
                  style="background-color:rgba(52,195,143,.18);color:#34c38f;padding:3px"
                  size="mini"
                  >+ {{this.revenue}}VNĐ</el-button
                >
              </el-badge>
              <span> So với tháng trước</span>
            </div>
          </el-card>
        </el-col>

        <el-col :span="5" :md="8" :lg="5">
          <el-card class="box-card">
            <div class="box-card-flex">
              <div class="box-card-icon">
                <i class="el-icon-ice-drink"></i>
              </div>
              <div>
                <span>Doanh thu trung bình 1 đơn </span>
              </div>
            </div>

            <div style="padding-top:25px">
              <span>{{averageUp}} VNĐ</span>
  
              <i style="color: #34c38f!important;" class="el-icon-arrow-up"></i>
            </div>
            <div
              style="padding-top:15px;overflow: hidden;text-overflow: ellipsis; white-space: nowrap;"
            >
              <el-badge :hidden="true">
                <el-button
                  style="background-color:rgba(52,195,143,.18);color:#34c38f;padding:3px"
                  size="mini"
                  > + {{averageUp}} VNĐ</el-button
                >
              </el-badge>
              <span> So với tháng trước</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <el-row :gutter="20">
      <el-col :span="16" :md="24" :lg="16">
        <el-card class="box-card">
          <el-row :gutter="20">
            <el-col :span="8">
              <div class="income">
                <h3>Thu nhập</h3>
                <span>Tháng này</span>
                <span>{{this.revenue}}VNĐ</span>

                <span>
                  <el-badge :hidden="true">
                    <el-button
                      style="background-color:rgba(52,195,143,.18);color:#34c38f;padding:3px"
                      size="mini"
                      > + {{this.revenue}}VNĐ</el-button
                    >
                  </el-badge>
                  so với tháng trước</span
                >
                <span>Tháng trước</span>
                <span>0 VNĐ</span>
              </div>
            </el-col>
            <el-col :span="16" :lg="16">
              <LineChart v-if="chart" :chart="chart" />
            </el-col>
          </el-row>
        </el-card>
      </el-col>

      <el-col :span="8" :md="24" :lg="8">
        <el-card class="box-card">
          <PieChart  />
        </el-card>
      </el-col>
    </el-row>

    <footer class="footer">
      <div class="footer__text">
        <div>
          <span>2021 Phí Thịnh Shop</span>
        </div>

        <div>
          <span>Design & Dev by Phan Hieu</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import PieChart from "@/components/charts/PieChart";
import { mapGetters, mapState } from "vuex";
import LineChart from "@/components/charts/LineChart";

export default {
  name: "Dashboard",
  data(){
	  return{

	  }
  },
  mounted(){
	  this.loadData()
  },
  methods:{
	  loadData(){
		  this.$store.dispatch('dashboard/dashboard')
	  }
  },
  computed: {
	...mapState({
		revenue: state => state.dashboard.revenue,
		revenueLast: state => state.dashboard.revenueLast,
		averageUp: state => state.dashboard.averageUp,
		orderSuccess : state => state.dashboard.orderSuccess,
		orderUp: state => state.dashboard.orderUp,
		chart: state => state.dashboard.chart,
	

	}),
	...mapGetters({
		total: 'dashboard/total'
	})
  },

  components: {
    PieChart,
    LineChart
  }
};
</script>

<style lang="scss" scoped>
.dashboard-container {
  width: 100%;
  background-color: rgb(237, 239, 247);
  height: 100%;
  padding: 20px;
  margin-bottom: 50px;
}
.dashboard__top {
  padding-bottom: 10px;
}
.dashboard__top__text {
  display: flex;
  flex-direction: column;
}
.dashboard__top__text h2 {
  margin: 0;
}
.dashboard__top__img img {
  position: absolute;
  top: -30px;
  right: 0;
  width: 90%;
}
.dashboard__top__text span {
  padding-top: 20px;
}
.dashboard__top__img {
  position: relative;
}
.dashboard__top .box-card {
  margin-bottom: 20px;
}
.box-card-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgb(237, 239, 247);
  margin-right: 15px;
}
.box-card-icon i {
  color: #556ee6;
}
.box-card-icon h4 {
  margin: 0;
}
.box-card-flex {
  display: flex;
}
.income span {
  margin-top: 20px;
}
.income {
  display: flex;
  flex-direction: column;
}

.footer {
  width: 100%;
  height: 50px;
  background-color: #edeff7;
  position: absolute;
  bottom: 0;
  left: 0;
}
.footer__text {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
</style>
