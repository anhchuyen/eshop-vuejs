,<template>
  <div class="profile">


	  <el-card  class="box-card">
  <div slot="header" class="clearfix">
    <span>Thông tin cá nhân</span>
   
  </div>
  <div >
	  <h5>Name: {{profile.name}}</h5>
	  <h5>Email: {{profile.email}}</h5>
	  

	  
  </div>
</el-card>


	  <el-card  class="box-card">
  <div slot="header" class="clearfix">
    <span>Chỉnh sửa thông tin </span>
   
  </div>
  <div >
	  <h5>Name:<el-input style="width:50%" size="mini"   v-model="form_information.name"></el-input> </h5>
	  <h5>Email:<el-input style="width:50%" size="mini"   v-model="form_information.email"></el-input>  </h5>
	  <h5>password:<el-input type="password" style="width:50%" size="mini"   v-model="form_information.password"></el-input>  </h5>
	  <h5>c_password:<el-input type="password" style="width:50%" size="mini"   v-model="form_information.c_password"></el-input>  </h5>
	  
		 <el-button @click="updateProfile" type="primary">Cập nhập</el-button>
	  
  </div>
</el-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	data(){
		return{
			form_information:{
				password:'',
				c_password:''
			}
		}
	},
	methods:{
		updateProfile(){
			this.$store.dispatch('user/updateProfile',this.form_information).then((res) =>{
				
			})
		}
	},
	  computed:{
      ...mapState({
          profile: state => state.user.profile,
		  
         
      }),
	  

    },
	mounted(){
		this.form_information = JSON.parse(JSON.stringify(this.profile))

	}

}
</script>

<style>
.box-card{
	width: 50%;
	text-align: center;
}
.profile{
	display: flex;
	justify-content: space-between;
}
</style>