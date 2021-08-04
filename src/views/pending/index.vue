<template>
  <div>

	    <el-table 
    :data="list"
    border
    style="width: 100%">

	
    <el-table-column
      prop="id"
      label="ID"
      width="50">
    </el-table-column>

    <el-table-column
     
      label="Khách hàng"
      width="300px">
	  <template slot-scope="scope">
		  <span class="user__name">{{scope.row.name}}</span><br>
		  <span>{{scope.row.phone}}</span><br>
		  <span>{{scope.row.email}}</span><br>
		  <span>{{scope.row.address}}</span><br>
		  <span @click="shipOrders(scope.row.id)" style="margin-right:10px;color:#34c38f;cursor: pointer;"  v-if="scope.row.status == 'Pending'">xác nhận</span>
		  <span style="color:red;cursor: pointer;">Hủy đơn</span> 
		  
	  </template>
    </el-table-column>

    <el-table-column
    
      label="Sản Phẩm"
      width="400px">
	  	  <template slot-scope="scope" >
				<div class="pending__product" v-for="(item, index) in scope.row.products" :key="index">
					<el-image
						style="width: 70px; height: 70px,margiin-left:20px"
						
						:src="item.image">
      				</el-image>
					 
						<div style="margin-left:20px" class="pending__quantity">
							<span style="color:black;">{{index +1}}.{{item.name}} ( {{item.color}}/{{item.size}} )</span>
							<span>0{{item.quantity}} x {{(item.price*((100 - item.discount)/100))}}</span>
						</div>
					  
					 
				</div>
			
	  	</template>
    </el-table-column>

    <el-table-column
      
      label="Tổng tiền">

		 <template slot-scope="scope" >
			 <span>{{scope.row.total.toLocaleString('it-IT')}}đ</span>
			
	  	</template>
	  
    </el-table-column>

	    <el-table-column
      
      label="Đặt lúc">

		 <template slot-scope="scope" >
			 <span>{{scope.row.updated_at}}</span>
			
	  	</template>
	  
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import { mapState} from 'vuex'
export default {
	data(){
		return{
			
		}
	},
	mounted(){
		this.listOrders()
	},
	methods:{
		listOrders(){
			this.$store.dispatch('orders/listOrders',
				1
			)
		},
		 shipOrders(id){
		 	this.$store.dispatch('orders/shipOrders',id).then((res)=>{
				this.open2()
				
			 })
			 
		 },
		 open2() {
        this.$message({
          message: 'Xác Nhận đơn hàng.',
          type: 'success'
        });
      },

	},
	computed:{
		...mapState({
			list : state => state.orders.listOrders
		}),
	
	}

}
</script>

<style>
.pending__product{
	display: flex;
	
}
.pending__product{
	padding: 20px;
}
.user__name{
	text-transform: uppercase;
	color: blue;
}
.pending__quantity{
	display: flex;
	flex-direction: column;
}
</style>