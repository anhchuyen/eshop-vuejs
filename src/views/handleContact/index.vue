<template>
 	 <div class="handleContact">
		<div>
			<el-card class="box-card">
				<h2>{{current.name}}</h2>
				<span>{{current.phone}}</span><br>
				<span>{{current.email}}</span><br>
				<span>{{current.message}}</span>
				{{current}}
			</el-card>
		</div>
	
		
		<div>
			<el-card class="box-card">
				<h2>Trạng thái</h2>
					<el-select v-model="current.status" clearable placeholder="Select">
					<el-option
					v-for="(item, index) in status"
					:key="index"
					:label="item.label"
					:value="item.status">
					</el-option>
				</el-select>
				<el-button @click="handleUpdate" type="primary">Cập nhập</el-button>
			</el-card>
		</div>
  	</div>
</template>

<script>

import { mapState } from 'vuex'

export default {
	data(){
		return{
			loading:false,
			status:[
				{
					label:'chưa đọc', status:1
				},
					{
					label:'đã đọc', status:2
				},
			]
			
		}
	},
	mounted(){
		this.current1 = this.current
	},
	methods:{
		handleUpdate(){
		

		this.$store.dispatch('contact/handleUpdate',{
				id:this.current.id,
				status:this.current.status
			})
			.then((res) =>{
			this.open()
		})

		},
			 open() {
        this.$notify.success({
          title: 'Success',
          message: 'Cập nhập thành công ',
          offset: 100
        });
      }
	},
	computed:{
		...mapState({
			current: state => state.contact.current,
			listContact : state => state.contact.listContact
		})
	}


}
</script>

<style>
.handleContact{
	padding: 20px;
	display: flex;
	justify-content: space-between;
}
.box-card{
	width: 700px;
}
</style>