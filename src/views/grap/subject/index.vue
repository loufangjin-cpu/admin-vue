<template>
	<ContentWrap>
		<!-- 搜索工作栏 -->
		<el-form ref="queryFormRef" :inline="true" :model="queryParams" class="-mb-15px" label-width="auto">
			<el-form-item label="专题ID" prop="name">
				<el-input v-model="queryParams.name" class="!w-240px" clearable placeholder="请输入角色名称" @keyup.enter="handleQuery" />
			</el-form-item>
			<el-form-item label="专题名称" prop="code">
				<el-input v-model="queryParams.code" class="!w-240px" clearable placeholder="请输入角色标识" @keyup.enter="handleQuery" />
			</el-form-item>
			<el-form-item label="专题状态" prop="status">
				<el-select v-model="queryParams.status" class="!w-240px" clearable placeholder="请选择状态">
					<el-option v-for="dict in getIntDictOptions(DICT_TYPE.COMMON_STATUS)" :key="dict.value" :label="dict.label" :value="dict.value" />
				</el-select>
			</el-form-item>
			<el-form-item label="专题类别" prop="status">
				<el-select v-model="queryParams.status" class="!w-240px" clearable placeholder="请选择状态">
					<el-option v-for="dict in getIntDictOptions(DICT_TYPE.COMMON_STATUS)" :key="dict.value" :label="dict.label" :value="dict.value" />
				</el-select>
			</el-form-item>
			<el-form-item label="管理应用" prop="name">
				<el-input v-model="queryParams.name" class="!w-240px" clearable placeholder="请输入角色名称" @keyup.enter="handleQuery" />
			</el-form-item>
			<el-form-item label="日期范围" prop="createTime">
				<el-date-picker
					v-model="queryParams.createTime"
					:default-time="[new Date('1 00:00:00'), new Date('1 23:59:59')]"
					class="!w-240px"
					end-placeholder="结束日期"
					start-placeholder="开始日期"
					type="daterange"
					value-format="YYYY-MM-DD HH:mm:ss"
				/>
			</el-form-item>
			<el-form-item>
				<el-button @click="handleQuery">
					<Icon class="mr-5px" icon="ep:search" />
					搜索
				</el-button>
				<el-button @click="resetQuery">
					<Icon class="mr-5px" icon="ep:refresh" />
					重置
				</el-button>
			</el-form-item>
		</el-form>
	</ContentWrap>

	<!-- 列表 -->
	<ContentWrap>
		<div style="display: flex; justify-content: space-between">
			<el-button v-hasPermi="['system:role:create']" plain type="primary" @click="openForm('create')">
				<Icon class="mr-5px" icon="ep:plus" />
				新增
			</el-button>
			<CustomTabs :curTabIndex="curTabIndex" @showTabs="showTabs" />
		</div>
		<template v-if="curTabIndex === 0">
			<div class="add-box">
				<ModelSettings />
				<ModelSettings />
				<ModelSettings />
				<ModelSettings />
				<ModelSettings />
				<ModelSettings />
				<ModelSettings />
				<ModelSettings />
				<ModelSettings />
				<ModelSettings />
			</div>
		</template>
		<template v-if="curTabIndex === 1">
			<el-table stripe v-loading="loading" :data="list">
				<el-table-column align="center" label="应用ID" prop="id" />
				<el-table-column align="center" label="应用名称" prop="name" />
				<el-table-column align="center" label="应用状态" prop="type" />
				<el-table-column align="center" label="应用类别" prop="code" />
				<el-table-column align="center" label="所属单位" prop="sort" />
				<el-table-column align="center" label="科室" prop="remark" />
				<el-table-column align="center" label="状态" prop="status">
					<template #default="scope">
						<dict-tag :type="DICT_TYPE.COMMON_STATUS" :value="scope.row.status" />
					</template>
				</el-table-column>
				<el-table-column :formatter="dateFormatter" align="center" label="创建时间" prop="createTime" width="180" />
				<el-table-column :width="300" align="center" label="操作">
					<template #default="scope">
						<el-button link type="primary" @click="openForm('details', scope.row.id)"> 详情 </el-button>
						<el-button link type="primary"> 预览 </el-button>
						<el-button link type="primary" @click="openForm('update', scope.row.id)"> 编辑 </el-button>
						<el-button link type="primary"> 发布 </el-button>
						<el-button v-hasPermi="['system:role:delete']" link type="danger" @click="handleDelete(scope.row.id)"> 删除 </el-button>
					</template>
				</el-table-column>
			</el-table>
		</template>
		<!-- 分页 -->
		<Pagination v-model:limit="queryParams.pageSize" v-model:page="queryParams.pageNo" :total="total" @pagination="getList" />
	</ContentWrap>

	<!-- 表单弹窗：添加/修改 -->
	<SubjectForm ref="formRef" @success="getList" />
</template>
<script lang="ts" setup>
import { DICT_TYPE, getIntDictOptions } from '@/utils/dict';
import { dateFormatter } from '@/utils/formatTime';
import download from '@/utils/download';
import * as RoleApi from '@/api/system/role';
import CustomTabs from '@/components/CustomTabs/CustomTabsModel.vue';
import ModelSettings from '@/components/ModelSettings/ModelSettingsModel.vue';
import SubjectForm from './SubjectForm.vue';

defineOptions({ name: 'Application' });

const message = useMessage(); // 消息弹窗
const { t } = useI18n(); // 国际化

const loading = ref(true); // 列表的加载中
const total = ref(0); // 列表的总页数
const list = ref([]); // 列表的数据
const queryParams = reactive({
	pageNo: 1,
	pageSize: 10,
	code: '',
	name: '',
	status: undefined,
	remark: '',
	mapId: '',
	mapName: '',
	mapState: '',
	mapType: '',
	mapFunction: '',
	mapCode: '',
	mapThumbnail: '',
	createTime: [],
});
const queryFormRef = ref(); // 搜索的表单
const exportLoading = ref(false); // 导出的加载中
const curTabIndex = ref(0);

/** 查询角色列表 */
const getList = async () => {
	loading.value = true;
	try {
		const data = await RoleApi.getRolePage(queryParams);
		list.value = data.list;
		total.value = data.total;
	} finally {
		loading.value = false;
	}
};

/** 搜索按钮操作 */
const handleQuery = () => {
	queryParams.pageNo = 1;
	getList();
};

/** 重置按钮操作 */
const resetQuery = () => {
	queryFormRef.value.resetFields();
	handleQuery();
};

/** 添加/修改操作 */
const formRef = ref();
const openForm = (type: string, id?: number) => {
	console.log('type', type, id);
	formRef.value.open(type, id);
};

/** 数据权限操作 */
const dataPermissionFormRef = ref();
const openDataPermissionForm = async (row: RoleApi.RoleVO) => {
	dataPermissionFormRef.value.open(row);
};

/** 菜单权限操作 */
const assignMenuFormRef = ref();
const openAssignMenuForm = async (row: RoleApi.RoleVO) => {
	assignMenuFormRef.value.open(row);
};

const showTabs = (index) => {
	curTabIndex.value = index;
};
/** 删除按钮操作 */
const handleDelete = async (id: number) => {
	try {
		// 删除的二次确认
		await message.delConfirm();
		// 发起删除
		await RoleApi.deleteRole(id);
		message.success(t('common.delSuccess'));
		// 刷新列表
		await getList();
	} catch {}
};

/** 导出按钮操作 */
const handleExport = async () => {
	try {
		// 导出的二次确认
		await message.exportConfirm();
		// 发起导出
		exportLoading.value = true;
		const data = await RoleApi.exportRole(queryParams);
		download.excel(data, '角色列表.xls');
	} catch {
	} finally {
		exportLoading.value = false;
	}
};

/** 初始化 **/
onMounted(() => {
	getList();
});
</script>
