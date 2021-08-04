<template>
  <div id="app">

<!-- Form -->
<el-button size="mini" type="primary" @click="dialogFormAdd = true">add Supplier

</el-button>
 
<el-dialog title="add category" :visible.sync="dialogFormAdd">
  <el-form :model="form">
    <el-form-item label="name" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="phone" :label-width="formLabelWidth">
      <el-input v-model="form.phone" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="email" :label-width="formLabelWidth">
      <el-input v-model="form.email" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="address" :label-width="formLabelWidth">
      <el-input v-model="form.address" autocomplete="off"></el-input>
    </el-form-item>
     <el-form-item label="website" :label-width="formLabelWidth">
      <el-input v-model="form.website" autocomplete="off"></el-input>
    </el-form-item>
   
    <el-form-item label="description" :label-width="formLabelWidth">
      <el-input v-model="form.description" autocomplete="off"></el-input>
    </el-form-item>
  
  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogFormAdd = false">Cancel</el-button>
    <el-button type="primary"   @click="addSupplier">Confirm</el-button>
  </span>
</el-dialog>

      <el-table class="haha"
      v-loading="loading"
    :data="listData2"
    style="width: 100%">
      <el-table-column
      label="ID"
      width="60">
      <template slot-scope="scope">
        
        <span >{{ scope.row.id}}</span>
      </template>
     
    </el-table-column>
         <el-table-column
      label="Webtise"
      width="190">
      <template slot-scope="scope">
        
         <el-link :href="scope.row.website" target="_blank">{{scope.row.website}}</el-link>
      </template>
     
    </el-table-column>

         <el-table-column
      label="phone"
      width="120">
      <template slot-scope="scope">
        
        <span >{{ scope.row.phone}}</span>
      </template>
     
    </el-table-column>
         <el-table-column
      label="email"
      width="220">
      <template slot-scope="scope">
        
        <span>{{ scope.row.email}}</span>
      </template>
     
    </el-table-column>
         <el-table-column
      label="Address"
      width="200">
      <template slot-scope="scope">
        
        <span >{{ scope.row.address}}</span>
      </template>
     
    </el-table-column>
    <el-table-column
      label="Name"
      width="150">
      <template slot-scope="scope">
          <el-input size="mini" v-if="editing && editingItem.id == scope.row.id" v-model="editingItem.name"></el-input>
            <span v-else size="medium">{{ scope.row.name }}</span>

           
      
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
              @onConfirm="deleteSupplier(scope.row)"
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
import {mapState} from 'vuex'
 export default {
    data() {
      return {
        search:'',
       loading:false,
        dialogFormAdd: false,
        form: {
          name: '',
          phone:'',
          email:'',
          address:'',
          website:'',
          description:''
        },
        formLabelWidth: '120px',
        editing:false,
        editingItem:{},
      };
      
    },
    methods:{
      addSupplier(){
          
        return this.$store.dispatch('supplier/add',this.form)
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
        console.log('kaka'+row)
         this.editing=true
         this.editingItem = row
         console.log('dfdf' +this.editingItem)
        
      
      },
      handleUpdate(){
        this.editing=false
        this.$store.dispatch('supplier/handleUpdate',this.editingItem).then((res)=>{
			 this.loadData()
		})
        
      },
          open1() {
        this.$message({
          message: 'Success',
          type: 'success'
        });
      },
      
    

      deleteSupplier(row){
         this.$store.dispatch('supplier/deleteSupplier',row)
            this.loadData()
           
        console.log("hihi"+row)
      },
      
      loadData(){
        this.loading=true
      this.$store.dispatch('supplier/listSupplier').then((res)=>{
       
        this.loading = false
      })
      .catch((error)=>{
        this.loading = false
      })
        
      },
      
      set_page(page){
        this.$store.commit('supplier/set_page',page)
         this.loadData()
    }
    },
    mounted(){
   
      this.loadData()
    },
    computed:{
      ...mapState({
          listData2: state => state.supplier.listData2,
          totalData : state => state.supplier.totalData,
          page: state =>state.supplier.page,
          limit : state =>state.supplier.limit
      }),
     

    }

    
    
    
  };
</script>

<style>
.pagination{
  margin:0 auto;
}
</style>
