<template>
  <div class="table-view">
    <el-row class="card-one">
      <el-col>
        <el-card shadow="hover">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <div>
              <el-form-item label="数据名称">
                <el-input
                  v-model="formInline.user"
                  placeholder="请输入查询条件"
                ></el-input>
              </el-form-item>
              <el-form-item label="变量文件名称">
                <el-input
                  v-model="formInline.user"
                  placeholder="请输入查询条件"
                ></el-input>
              </el-form-item>
              <el-form-item label="变量文件简称">
                <el-input
                  v-model="formInline.user"
                  placeholder="请输入查询条件"
                ></el-input>
              </el-form-item>
              <el-form-item label="数据类型">
                <el-select v-model="formInline.region" placeholder="请选择">
                  <el-option label="内部数据" value="内部数据"></el-option>
                  <el-option label="第三方数据" value="第三方数据"></el-option>
                  <el-option
                    label="数据中台模型数据"
                    value="数据中台模型数据"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-button @click="onClear">清空</el-button>
                <el-button type="primary" @click="onSubmit">查询</el-button>
              </el-form-item>
              <el-form-item>

              </el-form-item>
            </div>
            <div v-show="spreadFlag">
              <el-form-item label="数据归属">
                <el-input
                  v-model="formInline.user"
                  placeholder="请输入查询条件"
                ></el-input>
              </el-form-item>
              <el-form-item label="变量库状态">
                <el-select v-model="formInline.region" placeholder="请选择">
                  <el-option label="内部数据" value="内部数据"></el-option>
                  <el-option label="第三方数据" value="第三方数据"></el-option>
                  <el-option
                    label="数据中台模型数据"
                    value="数据中台模型数据"
                  ></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-form>
        </el-card>
      </el-col>
    </el-row>

    <el-row class="card-two">
      <div class="form-border form-main">
        <el-col>
          <el-card shadow="hover">
            <div class="main-button">
              <div class="optionbutton">
                <el-button type="primary" @click="onCreate" icon="el-icon-plus">新建</el-button>
                <el-button @click="onRefresh" icon="el-icon-refresh-right">刷新</el-button>
              </div>
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
              <div class="optionbutton2">

              </div>
            </div>
            <!-- table -->
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="name" label="数据名称" width="180">
              </el-table-column>
              <el-table-column prop="type" label="数据类型" width="180">
              </el-table-column>
              <el-table-column prop="belong" label="数据归属"> </el-table-column>
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
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    onClear() {
      console.log("clear!");
    },
    onCreate() {
      console.log("create!");
    },
    onRefresh() {
      console.log("refresh!");
    },
    upload() {
      console.log("upload!");
    },
    handleSizeChange(val) {
      this.pageSize = val;
      console.log(this.pageSize)
      this.getList();
    },
    handleCurrentChange(page) {
      this.getList(page);
    },
    async getList(page) {
      this.totalCount = this.tableData.length;
    },
  },
  data() {
    return {
      spreadFlag: false,
      currentPage: 1,
      totalCount: 0,
      pageSize: "5",
      tableData: [
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
          name: "贷中申请录入岗pad端接口",
          type: "内部数据",
          belong: "渠道系统",
        },
        {
          name: "用户中心申请人信息查询",
          type: "内部数据",
          belong: "用户中心",
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
.card-two {
  margin-top: 10px;
  margin-bottom: 10px;
}
.main-button {
  height: 55px;
  position: relative;
  .optionbutton {
    position: absolute;
  }
  .paging {
    text-align: center;
    padding-top: 4px;
  }
  .optionbutton2 {
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
  }
}
</style>