<template>
  <div class="table-view">
    <el-row class="card-two">
      <div class="form-border form-main">
        <el-col>
          <el-card shadow="hover">
            <div class="main-button">
              <!-- paging -->
              <div class="paging">
                <el-pagination
                  class="pagination"
                  background
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :pager-count="5"
                  :page-sizes="[5, 10, 20, 50]"
                  :page-size="5"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="totalCount"
                >
                </el-pagination>
              </div>
            </div>
            <!-- table -->
            <el-table :data="pageList" style="width: 100%">
              <el-table-column prop="name" label="名称" width="180">
              </el-table-column>
              <el-table-column prop="type" label="类型" width="180">
              </el-table-column>
              <el-table-column prop="belong" label="数据">
              </el-table-column>
            </el-table>
          </el-card>
        </el-col>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "newinput",
  mounted() {
    this.totalCount = this.tableData.length;
    for (var i = 0; i < 5; i++) {
      this.pageList.push(this.tableData[i]);
    }
  },
  methods: {
    handleSizeChange: function (val) {
      this.pageSize = val;
      var currentPage = this.currentPage;
      this.handleCurrentChange(currentPage);
    },
    handleCurrentChange: function (currentPage) {
      var tableData = this.tableData;
      this.currentChangePage(tableData, currentPage);
    },
    currentChangePage(tableData, currentPage) {
      let from = (currentPage - 1) * this.pageSize;
      let to = currentPage * this.pageSize;
      this.pageList = [];
      for (; from < to; from++) {
        if (tableData[from]) {
          this.pageList.push(tableData[from]);
        }
      }
    },
  },
  data() {
    return {
      pageList: [],
      spreadFlag: false,
      currentPage: 1,
      totalCount: 0,
      pageSize: "5",
      tableData: [
        {
          name: "用户中签",
          type: "数据中据",
          belong: "大数据",
        },
        {
          name: "进件息",
          type: "内部据",
          belong: "审统",
        },
        {
          name: "贷中d端接口",
          type: "内据",
          belong: "渠统",
        },
        {
          name: "用户信息查询",
          type: "内据",
          belong: "用心",
        },
        {
          name: "用户中机标签",
          type: "数据中台型数据",
          belong: "数据",
        },
         {
          name: "用户中签",
          type: "数据中据",
          belong: "大数据",
        },
        {
          name: "进件息",
          type: "内部据",
          belong: "审统",
        },
        {
          name: "贷中d端接口",
          type: "内据",
          belong: "渠统",
        },
        {
          name: "用户信息查询",
          type: "内据",
          belong: "用心",
        },
        {
          name: "用户中机标签",
          type: "数据中台型数据",
          belong: "数据",
        },
        {
          name: "贷中申请录入岗pad端接口",
          type: "内部数据",
          belong: "渠道系统",
        },
        {
          name: "用户中心申请人信息查询",
          type: "内部数据",
          belong: "用户中心",
        },
        {
          name: "用户中签",
          type: "数据中据",
          belong: "大数据",
        },
        {
          name: "进件息",
          type: "内部据",
          belong: "审统",
        },
        {
          name: "贷中d端接口",
          type: "内据",
          belong: "渠统",
        },
        {
          name: "用户信息查询",
          type: "内据",
          belong: "用心",
        },
        {
          name: "用户中机标签",
          type: "数据中台型数据",
          belong: "数据",
        },
        {
          name: "用户中签",
          type: "数据中据",
          belong: "大数据",
        },
        {
          name: "进件息",
          type: "内部据",
          belong: "审统",
        },
        {
          name: "贷中d端接口",
          type: "内据",
          belong: "渠统",
        },
        {
          name: "用户信息查询",
          type: "内据",
          belong: "用心",
        },
        {
          name: "用户中机标签",
          type: "数据中台型数据",
          belong: "数据",
        },
        {
          name: "用户中心配偶手机标签",
          type: "数据中台模型数据",
          belong: "大数据平台(标准层封装)",
        },
        {
          name: "进件申请信息",
          type: "内部数据",
          belong: "审批系统",
        },
        {
          name: "用户中签",
          type: "数据中据",
          belong: "大数据",
        },
        {
          name: "进件息",
          type: "内部据",
          belong: "审统",
        },
        {
          name: "贷中d端接口",
          type: "内据",
          belong: "渠统",
        },
        {
          name: "用户信息查询",
          type: "内据",
          belong: "用心",
        },
        {
          name: "用户中机标签",
          type: "数据中台型数据",
          belong: "数据",
        },
        {
          name: "用户中签",
          type: "数据中据",
          belong: "大数据",
        },
        {
          name: "进件息",
          type: "内部据",
          belong: "审统",
        },
        {
          name: "贷中d端接口",
          type: "内据",
          belong: "渠统",
        },
        {
          name: "用户信息查询",
          type: "内据",
          belong: "用心",
        },
        {
          name: "用户中机标签",
          type: "数据中台型数据",
          belong: "数据",
        },
      ],
      formInline: {
        user: "",
        region: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped>

</style>