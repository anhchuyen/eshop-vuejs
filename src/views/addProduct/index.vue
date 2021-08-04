<template>
  <div>

	 
	  <h6 style="text-align:center">Nhập Thông Tin Sản Phẩm</h6>
	  <el-row>
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
			<el-select v-model="value1" placeholder="Chọn danh mục sản phấm">
				<el-option
				v-for="item in listData1"
				:key="item.id"
				:label="item.name"
				:value="item.id">
				</el-option>
			</el-select>
				<h5>Thương hiệu</h5>
				<el-select v-model="value" placeholder="Chọn thương hiệu">
				<el-option
				v-for="item in listData"
				:key="item.id"
				:label="item.name"
				:value="item.id">
				</el-option>
			</el-select>
				<h5>Nhà cung cấp</h5>
				<el-select v-if="listData2" v-model="value2"  placeholder="Chọn nhà cung cấp">
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
				<el-form-item label="Giảm giá " >
					<el-input
							type="text"
							autosize
							placeholder="Số % giảm"
							v-model="form.discount">
					</el-input>
				</el-form-item>

				 	 
     			
      
  
				<el-form-item>
					<input type="file" multiple ref="files"   @change="handleFileUpload">
				</el-form-item>
    		
			</el-form>
				 
			
		</el-col>
	</el-row>
	 <div style="text-align:center">
		  <el-button @click="submitFile" style="margin:0 auto" type="primary">Thêm sản phẩm</el-button>
	 </div>
	 


  </div>
</template>

<script>
import { getToken } from '@/utils/auth'
import axios from 'axios'
import {mapState} from 'vuex'
export default {
  data() {
    return {
		formLabelWidth: '120px',
     form:{
		  images:'',
		 name:'',
		 sku:'',
		 import_price:'',
		 price:'',
		 amount:'',
		 summary:'',
		 colors:'',
		 sizes:'',
		meta_title:'',
		meta_description:'',
		description:'',
		discount:''
	 },
	 value:'',
	 value1:'',
	 value2:''
	
    }
  },
  methods:{
	   submitFile(){
		   console.log(this.form)
		
        /*  
                Initialize the form data
            */

            let formData = new FormData();
              this.dialogFormAdd = false
               
                  for( var i = 0; i < this.form.images.length; i++ ){
          let file = this.form.images[i];

          formData.append('images[' + i + ']', file);
		  formData.append('name', this.form.name);
			formData.append('sku', this.form.sku);
            formData.append('import_price', this.form.import_price);
			formData.append('price', this.form.price);
			formData.append('amount', this.form.amount);
			formData.append('summary', this.form.summary);
			formData.append('colors', this.form.colors);
			formData.append('sizes', this.form.sizes);
			formData.append('meta_title', this.form.meta_title);
			formData.append('description', this.form.description);
			formData.append('meta_description', this.form.meta_description);
			formData.append('discount',this.form.discount)
			formData.append('category_id', this.value1);
			formData.append('brand_id', this.value);
			formData.append('supplier_id', this.value2);
        }
           
            /*
                Add the form data we need to submit
            */
            // formData.append('images[]', this.form.images);
            // formData.append('name', this.form.name);
			// formData.append('sku', this.form.sku);
            // formData.append('import_price', this.form.import_price);
			// formData.append('price', this.form.price);
			// formData.append('amount', this.form.amount);
			// formData.append('summary', this.form.summary);
			// formData.append('colors', this.form.colors);
			// formData.append('sizes', this.form.sizes);
			// formData.append('meta_title', this.form.meta_title);
			// formData.append('description', this.form.description);
			// formData.append('meta_description', this.form.meta_description);
			// formData.append('category_id', this.value1);
			// formData.append('brand_id', this.value);
			// formData.append('supplier_id', this.value2);
            // console.log(formData)
            
       
        /*
          Make the request to the POST /single-file URL
        */
            axios.post( 'https://api.phanhieu.tokyo/v1/admin/products',
              
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    ['Authorization'] : `Bearer ${getToken()}`
                    
                }
              },
               
            ).then((res) =>{
				this.open1()
			})
				
                
                 
                  
           
        .catch(function(){
          console.log('FAILURECC!!');
        });
      },
	        open1() {
        this.$message({
          message: 'Success',
          type: 'success'
        });
      },

      /*
        Handles a change on the file upload
      */
      handleFileUpload(){
        //  this.form.images = event.target.files;
		  this.form.images = this.$refs.files.files;
		
      
      },
	
	      loadData(){
          this.loading=true
	  	 this.$store.dispatch('supplier/listSupplier')
	  	 this.$store.dispatch('category/listCategory')
           this.$store.dispatch('brand/listBrand').then((res)=>{
       
          this.loading = false
        })
        .catch((error)=>{
          this.loading = false
        })
    
        },

  },
    mounted(){
//    this.loadData1()
      this.loadData()
	console.log('kiki')
    },
	  watch:{
		  listData(newVal,oldVal){
			 
		  }
	  },
      computed:{
      ...mapState({
          listData: state => state.brand.listData,
			listData1: state => state.category.listData1,
			listData2: state => state.supplier.listData2,
         
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
</style>
