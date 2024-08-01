<template>
  <div class="background">
    <div class="titlebar">
      <p class="title">任务管理</p>
      <div class="right">
        <button class="taskCreateButton">任务创建</button>
        <button class="returnButton">返回</button>
      </div>
    </div>
    <div class="taskbar">
      <div class="tasklist">
        <p class="tasktitle">任务名称</p>
        <p class="tasktitle">任务状态</p>
        <el-table
          :show-header="false"
          v-loading="loading"
          :data="TaskListData"
          @row-click="handleRowClick"
        >
          <el-table-column key="taskname" align="center" prop="name" />
          <el-table-column
            key="taskstate"
            align="center"
            prop="state"
            border-style:hidden
          />
        </el-table>
      </div>
      <div class="taskInfo" :ref="task_name">
        <!-- <TaskInfoLink /> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "Menu",
  inheritAttrs: false,
});

import MenuAPI, { MenuQuery, MenuForm, MenuVO } from "@/api/menu";
import { MenuTypeEnum } from "@/enums/MenuTypeEnum";
import TaskAPI, { Tasklist } from "@/api/taskmanage";
const Suite_name = "11";
const TaskListData = ref<Tasklist[]>();
const loading = ref(false);
const task_name = ref<string | undefined>();

function handleRowClick(row: Tasklist) {
  task_name.value = row.name;
  console.info("handleRowClick-----------------", task_name.value);
}

function fetchData() {
  TaskAPI.gettasklist({ Suite_name: Suite_name })
    .then((data) => {
      loading.value = true;
      TaskListData.value = data;
    })
    .catch((err) => {
      console.info("gettasklist error", err);
      loading.value = false;
    })
    .finally(() => {
      loading.value = false;
    });
}
const queryFormRef = ref(ElForm);
const menuFormRef = ref(ElForm);

const dialog = reactive({
  title: "新增菜单",
  visible: false,
});

// 查询参数
const queryParams = reactive<MenuQuery>({});
// 菜单表格数据
const menuTableData = ref<MenuVO[]>([]);
// 顶级菜单下拉选项
const menuOptions = ref<OptionType[]>([]);

// 初始菜单表单数据
const initialMenuFormData = ref<MenuForm>({
  id: undefined,
  parentId: 0,
  visible: 1,
  sort: 1,
  type: MenuTypeEnum.MENU, // 默认菜单
  alwaysShow: 0,
  keepAlive: 1,
  params: [],
});

// 菜单表单数据
const formData = ref({ ...initialMenuFormData.value });

// 表单验证规则
// const rules = reactive({
//   parentId: [{ required: true, message: "请选择顶级菜单", trigger: "blur" }],
//   name: [{ required: true, message: "请输入菜单名称", trigger: "blur" }],
//   type: [{ required: true, message: "请选择菜单类型", trigger: "blur" }],
//   routeName: [{ required: true, message: "请输入路由名称", trigger: "blur" }],
//   routePath: [{ required: true, message: "请输入路由路径", trigger: "blur" }],
//   component: [{ required: true, message: "请输入组件路径", trigger: "blur" }],
//   visible: [{ required: true, message: "请输入路由路径", trigger: "blur" }],
// });

// 选择表格的行菜单ID
const selectedMenuId = ref<number | undefined>();

// 查询
function handleQuery() {
  loading.value = true;
  MenuAPI.getList(queryParams)
    .then((data) => {
      menuTableData.value = data;
    })
    .finally(() => {
      loading.value = false;
    });
}

// 重置查询
function handleResetQuery() {
  queryFormRef.value.resetFields();
  handleQuery();
}

// 行点击事件
// function handleRowClick(row: MenuVO) {
//   // 记录表格选择的菜单ID，新增子菜单作为父菜单ID
//   selectedMenuId.value = row.id;
// }

/**
 * 打开表单弹窗
 *
 * @param parentId 父菜单ID
 * @param menuId 菜单ID
 */
function handleOpenDialog(parentId?: number, menuId?: number) {
  MenuAPI.getOptions()
    .then((data) => {
      menuOptions.value = [{ value: 0, label: "顶级菜单", children: data }];
    })
    .then(() => {
      dialog.visible = true;
      if (menuId) {
        dialog.title = "编辑菜单";
        MenuAPI.getFormData(menuId).then((data) => {
          initialMenuFormData.value = { ...data };
          formData.value = data;
        });
      } else {
        dialog.title = "新增菜单";
        formData.value.parentId = parentId;
      }
    });
}

// 删除菜单
function handleDelete(menuId: number) {
  if (!menuId) {
    ElMessage.warning("请勾选删除项");
    return false;
  }

  ElMessageBox.confirm("确认删除已选中的数据项?", "警告", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  }).then(
    () => {
      loading.value = true;
      MenuAPI.deleteById(menuId)
        .then(() => {
          ElMessage.success("删除成功");
          handleQuery();
        })
        .finally(() => {
          loading.value = false;
        });
    },
    () => {
      ElMessage.info("已取消删除");
    }
  );
}

// 关闭弹窗
function handleCloseDialog() {
  dialog.visible = false;
  menuFormRef.value.resetFields();
  menuFormRef.value.clearValidate();
  formData.value.id = undefined;
}
onMounted(() => {
  fetchData();
});
</script>
<style>
.el-table .el-table__row > td {
  border-bottom: none;
}
</style>
