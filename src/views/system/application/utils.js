export const ADDRESS_TYPES = [
	{
		label: '前纺一车间',
		key: 'W1',
	},
	{
		label: '前纺二车间',
		key: 'W2',
	},
	{
		label: '前纺三车间',
		key: 'W3',
	},
];
export const ADDRESS_TYPES1 = [
	{
		label: '前纺一车间1',
		key: 'W11',
	},
	{
		label: '前纺二车间1',
		key: 'W21',
	},
	{
		label: '前纺三车间1',
		key: 'W31',
	},
];
export const ADDRESS_TYPES2 = [
	{
		label: '前纺一车间2',
		key: 'W11',
	},
	{
		label: '前纺二车间2',
		key: 'W21',
	},
	{
		label: '前纺三车间2',
		key: 'W31',
	},
];

export const TABLE_LIST = [
	{
		id: '1',
		date: '2019-09-25',
		name: '张三',
		status: '2',
		address: '广东省广州市天河区',
	},
	{
		id: '2',
		date: '2019-09-26',
		name: '张三1',
		status: '1',
		address: '广东省广州市天广东省广州市天河区2广东省广州市天河区2河区2',
	},
	{
		id: '3',
		date: '2019-09-27',
		name: '张三2',
		status: '3',
		address: '广东省广州市天河区3',
	},
];
export const COLUMNSLIST = [
	{ prop: 'name', label: '姓名', minWidth: '100', status: '1', sort: true },
	{ prop: 'date', label: '日期', minWidth: '180', status: '2', sort: true },
	{ prop: 'address', label: '地址', minWidth: '220', status: '3', sort: true, noShowTip: true },
	{ prop: 'date', label: '日期', minWidth: '180', status: '3', sort: true },
	{
		prop: 'address',
		label: '地址',
		minWidth: '220',
		customRender: {
			comps: [
				{
					comp: 'el-link',
					text: '编辑',
					bind: {
						type: 'primary',
					},
					event(scope) {
						return {
							click() {
								self.handleEditTable('编辑', scope.row);
							},
						};
					},
				},
				{
					comp: 'el-popconfirm',
					bind: {
						title: '确认删除该条数据？',
					},
					event(scope) {
						return {
							confirm() {
								self.handledeleteTable(scope.row);
							},
						};
					},
					child: [
						{
							slot: 'reference',
							comp: 'el-link',
							text: '删除',
							bind: {
								type: 'primary',
							},
						},
					],
				},
			],
		},
	},
];
