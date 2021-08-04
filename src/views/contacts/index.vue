<template>
  <div>
    aa
    <el-table v-loading="loading" :data="listContact" style="width: 100%">
      <el-table-column prop="id" label="ID" width="80px"> </el-table-column>
      <el-table-column width="200px" label="Tên">
        <template slot-scope="scope">
          <a class="nameClient" @click="handleClient(scope.row)">{{
            scope.row.name
          }}</a>
        </template>
      </el-table-column>
      <el-table-column prop="email" width="200px" label="Email">
      </el-table-column>
      <el-table-column prop="phone" label="Số điện thoại"> </el-table-column>
      <el-table-column prop="created_at" label="Ngày tạo"> </el-table-column>

      <el-table-column label="Trạng thái">
        <template slot-scope="scope">
          <span class="unread" v-if="scope.row.status == 1">
            chưa đọc
          </span>
          <span class="read" v-else>
            đã đọc
          </span>
        </template>
      </el-table-column>

      <el-table-column label="Hành động">
        <template slot-scope="scope">
          <el-popconfirm
            confirm-button-text="OK"
            cancel-button-text="No, Thanks"
            icon="el-icon-info"
            icon-color="red"
            title="Are you sure to delete this?"
            @onConfirm="deleteContact(scope.row)"
          >
            <el-button slot="reference" size="mini" type="danger"
              ><i class="el-icon-delete"></i> Delete
            </el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      loading: false
    };
  },
  methods: {
    loadData() {
      this.loading = true;
      this.$store.dispatch("contact/listContact").then(res => {
        this.loading = false;
      });
    },
    handleClient(row) {
      this.$store.commit("contact/SET_CURRENT", row);

      this.$router.push("/handleContact");
    },
    deleteContact(row) {
      this.$store.dispatch("contact/deleteContact", row).then(res => {
        this.loadData();
      });
    }
  },
  mounted() {
    this.loadData();
  },
  computed: {
    ...mapState({
      listContact: state => state.contact.listContact
    })
  }
};
</script>

<style>
.read {
  width: 100px;
  color: white;
  border-radius: 5px;
  color: #34c38f;
}
.unread {
  width: 100px;
  color: white;
  border-radius: 5px;
  color: red;
}
.nameClient:hover {
  color: blue;
}
</style>
