<template>
  <div id="app">

<!-- Form -->
<el-button size="mini" type="primary" @click="dialogFormAdd = true">add slider

</el-button>
 
<el-dialog title="add category" :visible.sync="dialogFormAdd">
  <el-form :model="form">
    <el-form-item label="name" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="description" :label-width="formLabelWidth">
      <el-input v-model="form.description" autocomplete="off"></el-input>
    </el-form-item>
   <el-form-item label="description" :label-width="formLabelWidth">
      <input type="file"   @change="handleFileUpload">
      
    </el-form-item>
  
  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogFormAdd = false">Cancel</el-button>
    <el-button type="primary"   @click="submitFile">Confirm</el-button>
  </span>
</el-dialog>

      <el-table class="haha"
      v-loading="loading"
    :data="listData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
     <el-table-column
      label="ID"
      width="100">
      <template slot-scope="scope">
        
        <span style="margin-left: 10px">{{ scope.row.id}}</span>
      </template>
     
    </el-table-column>
    <el-table-column
      label="Date"
      width="200">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.created_at  }}</span>
      </template>
     
    </el-table-column>
     <el-table-column
      label="Images"
      width="150">
       <template slot-scope="scope">
          <el-image
            style="width: 100px; height: 100px"
            :src="scope.row.images"
            ></el-image>
      
      </template> 

    </el-table-column>
    <el-table-column
       label="Description"
      width="250">>
        <template slot-scope="scope">
            <el-input size="mini" v-if="editing && editingItem.id == scope.row.id" v-model="editingItem.description"></el-input>
        <el-tag v-else style="margin-left: 10px">{{ scope.row.description }}</el-tag>
      </template>
    </el-table-column>  
    <el-table-column
      label="Tên Thương Hiệu"
      width="250">
      <template slot-scope="scope">
          <el-input size="mini" v-if="editing && editingItem.id == scope.row.id" v-model="editingItem.name"></el-input>
            <el-tag v-else size="medium">{{ scope.row.name }}</el-tag>

           
      
      </template>
    </el-table-column>
    <el-table-column>
      
         <template slot="header" slot-scope="" >
        <el-input
          v-model="search"
          size="mini"
          placeholder="Type to search"/>
      </template>
      
      <template slot-scope="scope">
        <el-button v-if="editing && editingItem.id==scope.row.id "
        @click="handleUpdate(scope.row)"
        size="mini"
        >Update</el-button>
        <el-button v-else
          size="mini"
         
          @click="handleEdit( scope.row)"><i class="el-icon-edit"></i> Edit</el-button>
       
          <el-popconfirm
              confirm-button-text='OK'
              cancel-button-text='No, Thanks'
              icon="el-icon-info"
              icon-color="red"
              title="Are you sure to delete this?"
              @onConfirm="deleteSlider(scope.row)"
            >
              <el-button  slot="reference" size="mini" type="danger" ><i class="el-icon-delete"></i> Delete </el-button>
            </el-popconfirm>
      </template>
    </el-table-column>
  </el-table>

<!--  -->

    <!--  -->
 

    <el-pagination  class="pagination"
      
      background layout="prev, pager, next" @current-change="set_page" :page-size="limit" :total="totalData">
    </el-pagination>

  </div>
  
</template>

<script>

// import HelloWorld from './components/HelloWorld.vue'
import { getToken } from '@/utils/auth'
import axios from 'axios'
import {mapState} from 'vuex'
 export default {
    data() {
      return {
        search:'',
       loading:false,
        dialogFormAdd: false,
        form: {
          name: '',
          description:'',
          images:''
        },
        formLabelWidth: '120px',
        editing:false,
        editingItem:{},
      };
      
    },
    methods:{
      addBrand(){
          
        return this.$store.dispatch('slider/add',this.form)
        .then((res) =>{
          
            console.log(res)
            this.dialogFormAdd = false
            
            
            this.loadData()
            
            
        })
      },
      submitFile(){
        /*  
                Initialize the form data
            */

            let formData = new FormData();
              this.dialogFormAdd = false
               
           
            /*
                Add the form data we need to submit
            */
            formData.append('images', this.form.images);
            formData.append('name', this.form.name);
            formData.append('description', this.form.description);
            console.log(formData)
            
       
        /*
          Make the request to the POST /single-file URL
        */
            axios.post( 'https://api.phanhieu.tokyo/v1/admin/sliders',
              
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    ['Authorization'] : `Bearer ${getToken()}`
                    
                }
              },
               
            ).then((res) =>{
				this.loadData()
				
					this.open1()
				
			})
        .catch(function(){
          console.log('FAILURE!!');
        });
      },

      /*
        Handles a change on the file upload
      */
      handleFileUpload(event){
         this.form.images = event.target.files[0];
      
      },
      handleEdit(row){
        console.log('kaka'+row)
         this.editing=true
         this.editingItem = row
         console.log('dfdf' +this.editingItem)
        
      
      },
      handleUpdate(){
        this.editing=false
        this.$store.dispatch('slider/handleUpdate',this.editingItem).then((res) =>{
          this.loadData()
        })
         
      },
          open1() {
        this.$message({
          message: 'Success',
          type: 'success'
        });
      },
      
    

      deleteSlider(row){
         this.$store.dispatch('slider/deleteSlider',row).then((res)=>{
            this.loadData()
         })
           
           
      
      },
      
      loadData(){
        this.loading=true
         this.$store.dispatch('slider/listSlider').then((res)=>{
       
        this.loading = false
      })
      .catch((error)=>{
        this.loading = false
      })
        
      },
      
      set_page(page){
        this.$store.commit('slider/set_page',page)
         this.loadData()
    }
    },
    mounted(){
   
      this.loadData()
    },
    computed:{
      ...mapState({
          listData: state => state.slider.listData,
          totalData : state => state.slider.totalData,
          page: state =>state.slider.page,
          limit : state =>state.slider.limit
      }),
     

    }

    
    
    
  };
</script>

<style>
.pagination{
  margin:0 auto;
}
</style>
