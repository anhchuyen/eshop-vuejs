<template>
  <div id="app">

<!-- Form -->
<el-button size="mini" type="primary" @click="dialogFormAdd = true">add category

</el-button>
 
<el-dialog title="add category" :visible.sync="dialogFormAdd">
  <el-form :model="form">
    <el-form-item label="name" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="description" :label-width="formLabelWidth">
      <el-input v-model="form.description" autocomplete="off"></el-input>
    </el-form-item>
  
  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogFormAdd = false">Cancel</el-button>
    <el-button type="primary"   @click="addCategory">Confirm</el-button>
  </span>
</el-dialog>
		{{haha}}
      <el-table class="haha"
      v-loading="loading"
    :data="listData1.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
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
      width="300">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.updated_at }}</span>
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
      label="Name"
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
              @onConfirm="deleteCategory(scope.row)"
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
{{page}}
  </div>
  
</template>

<script>

// import HelloWorld from './components/HelloWorld.vue'
import {mapState} from 'vuex'
 export default {
    data() {
      return {
        search:'',
       loading:false,
        dialogFormAdd: false,
        form: {
          name: '',
          description:''
        },
        formLabelWidth: '120px',
        editing:false,
        editingItem:{},
      };
      
    },
    methods:{
      addCategory(){
          
        return this.$store.dispatch('category/add',this.form)
        .then((res) =>{
          
            console.log(res)
            this.dialogFormAdd = false
            
            this.form.name = ''
            this.form.description = ''
            this.loadData()
            this.open1()
            
        })
      },
      handleEdit(row){
       
         this.editing=true
         this.editingItem = row
		 
      
        
      
      },
      handleUpdate(){
		   
        this.editing=false
        this.$store.dispatch('category/handleUpdate',this.editingItem).then((res)=>{
			this.loadData()
		})
        
      },
          open1() {
        this.$message({
          message: 'Success',
          type: 'success'
        });
      },
      
    

      deleteCategory(row){
         this.$store.dispatch('category/deleteCategory',row)
            this.loadData()
           
        console.log("hihi"+row)
      },
      
      loadData(){
        this.loading=true
      this.$store.dispatch('category/listCategory').then((res)=>{
       
        this.loading = false
      })
      .catch((error)=>{
        this.loading = false
      })
        
      },
      
      set_page(page){
        this.$store.commit('category/set_page',page)
         this.loadData()
    }
    },
    mounted(){
		
      this.loadData()
	
    },
    computed:{
      ...mapState({
          listData1: state => state.category.listData1,
          totalData : state => state.category.totalData,
          page: state =>state.category.page,
          limit : state =>state.category.limit,
		  haha: state =>state.category.men_fashion

      }),
     

    }

    
    
    
  };
</script>

<style>
.pagination{
  margin:0 auto;
}
</style>
