<template>
	<ContentWrap>
		<QueryCondition ref="queryCondition" :opts="opts" :isShowOpen="true" :loading="loading" @submit="conditionEnter" />
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
			<CustomTable title="某列render渲染" :table="table" :columns="table.columns" :isShowPagination="false" />
		</template>
		<!-- 分页 -->
		<Pagination v-model:limit="queryParams.pageSize" v-model:page="queryParams.pageNo" :total="total" @pagination="getList" />
	</ContentWrap>

	<!-- 表单弹窗：添加/修改 -->
	<SceneForm ref="formRef" @success="getList" />
</template>
<script lang="tsx" setup>
import * as RoleApi from '@/api/system/role';
import CustomTabs from '@/components/CustomTabs/CustomTabsModel.vue';
import QueryCondition from '@/components/QueryCondition/src/index.vue';
import CustomTable from '@/components/CustomTable/src/index.vue';
import ModelSettings from '@/components/ModelSettings/ModelSettingsModel.vue';
import SceneForm from './SceneForm.vue';

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
// 查询数据
const opts = computed(() => {
	return {
		// 基本输入框
		mapId: {
			label: '场景ID',
			comp: 'el-input',
		},
		mapName: {
			label: '场景名称',
			comp: 'el-input',
		},
		// 联动查询
		mapState: {
			label: '场景状态',
			comp: 'el-select',
			defaultVal: 'W1',
			event: {
				change: (val) => {
					// this.rowVal = val;
					// this.likeBookNoList1 = ADDRESS_TYPES1;
					return val;
				},
			},
			// child: this?.likeBookNoList?.reduce((acc, cur) => {
			// 	acc.push({
			// 		comp: 'el-option',
			// 		value: cur.key,
			// 		bind: {
			// 			label: cur.label,
			// 			key: cur.key,
			// 		},
			// 	});
			// 	return acc;
			// }, []),
		},
		// 联动查询
		mapType: {
			label: '场景类别',
			comp: 'el-select',
			placeholder: '请先选择货源编号',
			bind: (row) => {
				console.log('row', row);
				return {
					// disabled: !this.rowVal,
				};
			},
			// child: this?.likeBookNoList1?.reduce((acc, cur) => {
			// 	acc.push({
			// 		comp: 'el-option',
			// 		value: cur.key,
			// 		bind: {
			// 			label: cur.label,
			// 			key: cur.key,
			// 		},
			// 	});
			// 	return acc;
			// }, []),
		},
		mapThumbnail: {
			label: '管理应用',
			comp: 'el-select',
			placeholder: '请先选择货源编号',
			bind: (row) => {
				console.log('row', row);
				return {
					// disabled: !this.rowVal,
				};
			},
			// child: this?.likeBookNoList1?.reduce((acc, cur) => {
			// 	acc.push({
			// 		comp: 'el-option',
			// 		value: cur.key,
			// 		bind: {
			// 			label: cur.label,
			// 			key: cur.key,
			// 		},
			// 	});
			// 	return acc;
			// }, []),
		},
		// 自定义删格
		createTime: {
			label: '日期范围',
			comp: 'el-date-picker',
			// span: 2,
			defaultVal: [new Date('1 00:00:00'), new Date('1 23:59:59')],
			bind: {
				type: 'daterange',
				rangeSeparator: '-',
				startPlaceholder: '开始日期',
				endPlaceholder: '结束日期',
				valueFormat: 'YYYY-MM-DD HH:mm:ss',
			},
		},
	};
});

const table = computed(() => {
	return {
		// 接口返回数据
		data: [
			{
				id: '1',
				date: '2019-09-25',
				date1: '2019-09-26',
				name: '张三',
				status: '2',
				address: '广东省广州市天河区',
			},
			{
				id: '2',
				date: '2019-09-26',
				date1: '2019-09-27',
				name: '张三1',
				status: '1',
				address: '广东省广州市天广东省广州市天河区2广东省广州市天河区2河区2',
			},
			{
				id: '3',
				date: '2019-09-26',
				date1: '2019-09-28',
				name: '张三1',
				status: '1',
				address: '广东省广州市天广东省广州市天河区2广东省广州市天河区2河区2',
			},
			{
				id: '4',
				date: '2019-09-26',
				date1: '2019-09-29',
				name: '张三1',
				status: '1',
				address: '广东省广州市天广东省广州市天河区2广东省广州市天河区2河区2',
			},
		],
		// 表头数据
		columns: [
			{ prop: 'mapId', label: '场景ID', minWidth: '100' },
			{ prop: 'mapName', label: '场景名称', minWidth: '180' },
			{
				prop: 'mapCode',
				label: '场景类别',
				minWidth: '220',
				render: (val) => {
					let label;
					switch (val) {
						case '1':
							label = '待办';
							break;
						case '2':
							label = '待提交';
							break;
						case '3':
							label = '完成';
							break;
					}
					return <div>{label}</div>;
				},
			},
			{
				prop: 'mapState',
				label: '场景状态',
				minWidth: '220',
				render: (val) => {
					let label;
					switch (val) {
						case '1':
							label = '已发布';
							break;
						case '2':
							label = '未发布';
							break;
					}
					return <div>{label}</div>;
				},
			},
			{
				prop: 'remark',
				label: '关联应用',
				minWidth: '220',
			},
			{
				prop: 'mapThumbnail',
				label: '场景缩略图',
				minWidth: '220',
			},
			{
				prop: 'createTime',
				label: '更新时间',
				minWidth: '220',
			},
		],
		operator: [
			{
				text: '详情',
				fun: (row, index) => {
					console.log('row', row, index);
				},
			},
			{
				text: '预览',
				fun: (row, index) => {
					console.log('row', row, index);
				},
			},
			{
				text: '编辑',
				fun: (row, index) => {
					console.log('row', row, index);
				},
			},
			{
				text: '发布',
				fun: (row, index) => {
					console.log('row', row, index);
				},
			},
			{
				text: '复制',
				fun: (row, index) => {
					console.log('row', row, index);
				},
			},
			{
				text: '删除',
				fun: async (row, index) => {
					console.log('row', row, index);
					try {
						// 删除的二次确认
						await message.delConfirm();
						// 发起删除
						// await RoleApi.deleteRole(id);
						message.success(t('common.delSuccess'));
						// 刷新列表
						// await getList();
					} catch {}
				},
			},
		],
		operatorConfig: {
			fixed: 'right', // 固定列表右边（left则固定在左边）
			width: 160,
			label: '操作',
		},
	};
});
// 点击查询按钮
const conditionEnter = (data) => {
	console.log('查询条件', data);
	console.log('params', queryParams);
	loading.value = true;
	// queryParams = data;
	console.log('data', data);
	setTimeout(() => {
		loading.value = false;
	}, 2000);
};
/** 添加/修改操作 */
const formRef = ref();
const openForm = (type: string, id?: number) => {
	console.log('type', type, id);
	formRef.value.open(type, id);
};

const showTabs = (index) => {
	curTabIndex.value = index;
};
/** 初始化 **/
onMounted(() => {
	getList();
});
</script>
