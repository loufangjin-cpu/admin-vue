<template>
	<Dialog v-model="dialogVisible" :title="dialogTitle">
		<el-form ref="formRef" v-loading="formLoading" :model="formData" :rules="formRules" label-width="auto">
			<el-form-item label="应用ID" prop="name">
				<el-input v-model="formData.name" :disabled="isDisable" placeholder="请输入应用ID" />
			</el-form-item>
			<el-form-item label="应用名称" prop="code">
				<el-input v-model="formData.code" :disabled="isDisable" placeholder="请输入应用名称" />
			</el-form-item>
			<el-form-item label="所属单位" prop="status">
				<el-select v-model="formData.status" class="!w-240px" clearable placeholder="请选择" :disabled="isDisable">
					<el-option v-for="dict in getIntDictOptions(DICT_TYPE.COMMON_STATUS)" :key="dict.value" :label="dict.label" :value="dict.value" />
				</el-select>
			</el-form-item>
			<el-form-item label="科室" prop="status">
				<el-select v-model="formData.status" class="!w-240px" clearable placeholder="请选择状" :disabled="isDisable">
					<el-option v-for="dict in getIntDictOptions(DICT_TYPE.COMMON_STATUS)" :key="dict.value" :label="dict.label" :value="dict.value" />
				</el-select>
			</el-form-item>
			<el-form-item label="联系人" prop="name">
				<el-input v-model="formData.name" placeholder="请输入" :disabled="isDisable" />
			</el-form-item>
			<el-form-item label="手机号" prop="phone">
				<el-input v-model="formData.phone" maxlength="11" :disabled="isDisable" placeholder="请输入" />
			</el-form-item>
			<el-form-item label="应用编辑" prop="sort">
				<el-button :disabled="isDisable">二维场景</el-button>
				<el-button :disabled="isDisable">三维场景</el-button>
				<el-button :disabled="isDisable">二三维场景</el-button>
			</el-form-item>
			<el-form-item label="备注" prop="remark">
				<el-input v-model="formData.remark" placeholder="请输备注" type="textarea" :disabled="isDisable" />
			</el-form-item>
		</el-form>
		<template #footer>
			<el-button :disabled="formLoading" type="primary" @click="submitForm">确 定</el-button>
			<el-button @click="dialogVisible = false">取 消</el-button>
		</template>
	</Dialog>
</template>
<script lang="ts" setup>
import { DICT_TYPE, getIntDictOptions } from '@/utils/dict';
import { CommonStatusEnum } from '@/utils/constants';
import * as RoleApi from '@/api/system/role';
import { fa } from 'element-plus/es/locale';

defineOptions({ name: 'SystemRoleForm' });

const { t } = useI18n(); // 国际化
const message = useMessage(); // 消息弹窗

const dialogVisible = ref(false); // 弹窗的是否展示
const dialogTitle = ref(''); // 弹窗的标题
const formLoading = ref(false); // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用
const formType = ref(''); // 表单的类型：create - 新增；update - 修改
const formData = ref({
	id: undefined,
	name: '',
	code: '',
	sort: undefined,
	status: CommonStatusEnum.ENABLE,
	remark: '',
});
const formRules = reactive({
	name: [{ required: true, message: '岗位标题不能为空', trigger: 'blur' }],
	code: [{ required: true, message: '岗位编码不能为空', trigger: 'change' }],
	sort: [{ required: true, message: '岗位顺序不能为空', trigger: 'change' }],
	status: [{ required: true, message: '岗位状态不能为空', trigger: 'change' }],
	remark: [{ required: false, message: '岗位内容不能为空', trigger: 'blur' }],
});
const formRef = ref(); // 表单 Ref

const titleInfo = {
	create: '新增',
	details: '查看',
	preview: '预览',
	update: '编辑',
};
const isDisable = ref(false);

/** 打开弹窗 */
const open = async (type: string, id?: number) => {
	dialogVisible.value = true;
	dialogTitle.value = titleInfo[type];
	formType.value = type;
	isDisable.value = type === 'details';
	resetForm();
	// 修改时，设置数据
	if (id) {
		formLoading.value = true;
		try {
			formData.value = await RoleApi.getRole(id);
		} finally {
			formLoading.value = false;
		}
	}
};

/** 重置表单 */
const resetForm = () => {
	formData.value = {
		id: undefined,
		name: '',
		code: '',
		sort: undefined,
		status: CommonStatusEnum.ENABLE,
		remark: '',
	};
	formRef.value?.resetFields();
};
defineExpose({ open }); // 提供 open 方法，用于打开弹窗

/** 提交表单 */
const emit = defineEmits(['success']); // 定义 success 事件，用于操作成功后的回调
const submitForm = async () => {
	// 校验表单
	if (!formRef) return;
	const valid = await formRef.value.validate();
	if (!valid) return;
	// 提交请求
	formLoading.value = true;
	try {
		const data = formData.value as unknown as RoleApi.RoleVO;
		if (formType.value === 'create') {
			await RoleApi.createRole(data);
			message.success(t('common.createSuccess'));
		} else {
			await RoleApi.updateRole(data);
			message.success(t('common.updateSuccess'));
		}
		dialogVisible.value = false;
		// 发送操作成功的事件
		emit('success');
	} finally {
		formLoading.value = false;
	}
};
</script>
