<template>
  <div >

   <h6 style="text-align:center">Nhập Thông Tin Sản Phẩm</h6>
	  <el-row  v-loading="loading">
		<el-col :span="12">
			<el-form>
				<el-form-item label="Tên sản phẩm" >
					<el-input
							type="text"
							autosize
							placeholder="Nhập tên sản phẩm"
							v-model="form.name">
					</el-input>
				</el-form-item>

					<el-form-item label="Mã sản phẩm" >
					<el-input
							type="text"
							autosize
							placeholder="Nhập mã sản phẩm"
							v-model="form.sku">
					</el-input>
				</el-form-item>

					<el-form-item label="Gía nhập sản phẩm" >
					<el-input
							type="text"
							autosize
							placeholder="Nhập giá nhập sản phẩm "
							v-model="form.import_price">
					</el-input>
				</el-form-item>

					<el-form-item label="Gía bán sản phẩm" >
					<el-input
							type="text"
							autosize
							placeholder="Nhập giá bán sản phẩm"
							v-model="form.price">
					</el-input>
				</el-form-item>

					<el-form-item label="Mô tả ngắn sản phẩm" >
					<el-input
							type="textarea"
							:autosize="{ minRows: 5, maxRows: 5}"
							
							placeholder="Nhập mô tả ngắn sản phẩm"
							v-model="form.summary">
					</el-input>
				</el-form-item>
					<el-form-item label="mô tả" >
					<el-input
							type="text"
							autosize
							placeholder="Nhập mô tả"
							v-model="form.description">
					</el-input>
				</el-form-item>
					<el-form-item label="meta tiêu đề" >
					<el-input
							type="text"
							autosize
							placeholder="Nhập meta tiêu đề"
							v-model="form.meta_title">
					</el-input>
				</el-form-item>

					<el-form-item label="meta mô tả" >
					<el-input
							type="text"
							autosize
							placeholder="Nhập meta mô tả"
							v-model="form.meta_description">
					</el-input>
				</el-form-item>
			</el-form>

		</el-col>
	
		<el-col :span="12">
			<h5>Danh mục sản phẩm</h5>
					<el-select v-model="form.value1" placeholder="Chọn danh mục sản phấm">
				<el-option
				v-for="item in listData"
				:key="item.id"
				:label="item.name"
				:value="item.id">
				</el-option>
			</el-select>
				<h5>Thương hiệu</h5>
				<el-select v-model="form.value"  placeholder="Chọn thương hiệu">
				<el-option
				v-for="item in listData1"
				:key="item.id"
				:label="item.name"
				:value="item.id">
				</el-option>
			</el-select> 
				<h5>Nhà cung cấp</h5>
				<el-select v-model="form.value2"  placeholder="Chọn nhà cung cấp">
				<el-option
				v-for="item in listData2"
				:key="item.id"
				:label="item.name"
				:value="item.id">
				</el-option>
			</el-select>
			<el-form>
				
					<el-form-item label="Số lượng" >
					<el-input
							type="text"
							autosize
							placeholder="Nhập số lượng sản phẩm"
							v-model="form.amount">
					</el-input>
				</el-form-item>

					 <el-form-item label="Màu sắc" >
				
					<el-input
							type="text"
							autosize
							placeholder="Nhập màu sắc sản phẩm"
							v-model="form.colors">
					</el-input>
				</el-form-item>

					<el-form-item label="kích thước" >
			
					<el-input
							type="text"
							autosize
							placeholder="Nhập size sản phẩm"
							v-model="form.sizes">
					</el-input>
				</el-form-item> 
				<el-form-item label="Giam">
						<el-input
							type="text"
							autosize
							placeholder="Số % giảm"
							v-model="form.discount">
					</el-input>
				</el-form-item>

				 	       <template slot-scope="">
			
						<div class="delete__images"  v-for="(item) in form.images" :key="item.id" >
							
							 <el-image  style="width: 100px; height: 100px" 
								
            					:src="item" ></el-image> <i @click="delete__images" class="el-icon-circle-close icon"></i>
						</div>
			
			
     			 </template>  
     			
      
  
				 <el-form-item>
					<input type="file" multiple ref="files"   @change="handleFileUpload">
				</el-form-item> 
    		
			</el-form>
				 
			
		</el-col>
	</el-row>
	  <div style="text-align:center">
		  <el-button @click="handleUpdate()" style="margin:0 auto" type="primary">Sửa sản phẩm</el-button>
	 </div> 
	 


  </div>
</template>

<script>


import {mapState} from 'vuex'
export default {
  data() {
    return {
		formLabelWidth: '120px',
		form:{
			value1:'',
			value2:'',
			value:'',
			colors:''

		},
		loading:false
	
    }
  },
  methods:{

    handleFileUpload(){
        //  this.form.images = event.target.files;
		  this.form.images = this.$refs.files.files;
		
      
      },
		     open1() {
        this.$message({
          message: 'Success',
          type: 'success'
        });
      },
  
	     loadData(){
         this.loading=true
		 this.$store.dispatch('brand/listBrand')
			this.$store.dispatch('supplier/listSupplier')
          this.$store.dispatch('category/listCategory').then((res)=>{
       
         this.loading = false
       })
       .catch((error)=>{
         this.loading = false
       })
    
       },
	       handleUpdate(){
		
       		 this.loading=true
		
		let data_send = {
			id:this.form.id,
			 name:this.form.name,
			 sku:this.form.sku,
			 import_price:this.form.import_price,
			  price:this.form.price,
			   amount:this.form.amount,
			   images:this.form.images,
			    old_images:JSON.stringify(this.form.images_origin),
			     colors:this.form.colors,
			     sizes:this.form.sizes,
			  category_id:this.form.value1,
			  supplier_id:this.form.value2,
		  status:this.form.status,
			   brand_id:this.form.value,
			   description:this.form.description,
			   discount:this.form.discount
			  
			
			
				
		}
		
		console.log(data_send)
        this.$store.dispatch('product/handleUpdate',data_send).then((res) =>{
          this.loadData()
		  this.open1()
		
		  this.$router.push('/product/product1')
        })
         
      },
		delete__images(index){
			this.form.images.splice(index,1)
			this.form.images_origin.splice(index,1)
		},
		



  },
    mounted(){
		
	
		this.loadData()

		this.form = this.current
		console.log(this.form)
		this.form.sizes = this.current.sizes.join()
	  	 this.form.colors = this.current.colors.join()
		
    },
      computed:{
      ...mapState({
          current: state => {
			//   console.log(state.product.listData)
			  return state.product.current;
		  },
		  listData : state => state.category.listData1,
		  listData2 :state =>state.supplier.listData2,
		  listData1 :state =>state.brand.listData
		
         
      }),
     

    }
}
</script>

<style>
.el-form-item__label{
	line-height: 25px;
	padding-left: 10px;
	color: black;
}
.el-form-item__content {
	
	padding: 10px;
}
.delete__images {
	display: flex;
	
	cursor: pointer;
	position: relative;
	display:inline-block
}
.delete__images:hover .icon{
	display: block;
	position: absolute;
	top:0;
}
.icon{
	position: absolute;
	font-size: 30px;
	left: 70%;
	display: none;
}
.el-form-item {
	margin: 0;
	width: 98%;
}
.el-select{
	width: 98%;
}
h5{
	font-size: 15px;
	font-weight: 600;
	margin: 4px;
	
}
.el-select .el-input__inner{
	margin-bottom: 10px;
}
.hover:hover {
	cursor: pointer;
}
</style>
