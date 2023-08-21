module.exports = function () {
	return {
		code: 0,
		data: [
			{
				id: 1283,
				parentId: 0,
				name: '调查问卷管理1111',
				path: '/',
				component: 'views/answer/trade/main',
				icon: 'user',
				visible: true,
				keepAlive: true,
				children: null,
			},
			{
				id: 1,
				parentId: 0,
				name: '系统管理',
				path: '/system',
				component: null,
				icon: 'system',
				visible: true,
				keepAlive: true,
				children: [
					{
						id: 1224,
						parentId: 1,
						name: '租户管理',
						path: 'tenant',
						component: null,
						icon: 'peoples',
						visible: true,
						keepAlive: true,
						children: [
							{
								id: 1138,
								parentId: 1224,
								name: '租户列表',
								path: 'list',
								component: 'system/tenant/index',
								icon: 'peoples',
								visible: true,
								keepAlive: true,
								children: null,
							},
							{
								id: 1225,
								parentId: 1224,
								name: '租户套餐',
								path: 'package',
								component: 'system/tenantPackage/index',
								icon: 'eye',
								visible: true,
								keepAlive: true,
								children: null,
							},
						],
					},
					{
						id: 100,
						parentId: 1,
						name: '用户管理',
						path: 'user',
						component: 'system/user/index',
						icon: 'user',
						visible: true,
						keepAlive: true,
						children: null,
					},
					{
						id: 101,
						parentId: 1,
						name: '角色管理',
						path: 'role',
						component: 'system/role/index',
						icon: 'peoples',
						visible: true,
						keepAlive: true,
						children: null,
					},
					{
						id: 102,
						parentId: 1,
						name: '菜单管理',
						path: 'menu',
						component: 'system/menu/index',
						icon: 'tree-table',
						visible: true,
						keepAlive: true,
						children: null,
					},
					{
						id: 103,
						parentId: 1,
						name: '部门管理',
						path: 'dept',
						component: 'system/dept/index',
						icon: 'tree',
						visible: true,
						keepAlive: true,
						children: null,
					},
					{
						id: 104,
						parentId: 1,
						name: '岗位管理',
						path: 'post',
						component: 'system/post/index',
						icon: 'post',
						visible: true,
						keepAlive: true,
						children: null,
					},
					{
						id: 105,
						parentId: 1,
						name: '字典管理',
						path: 'dict',
						component: 'system/dict/index',
						icon: 'dict',
						visible: true,
						keepAlive: true,
						children: null,
					},
					{
						id: 107,
						parentId: 1,
						name: '通知公告',
						path: 'notice',
						component: 'system/notice/index',
						icon: 'message',
						visible: true,
						keepAlive: true,
						children: null,
					},
					{
						id: 108,
						parentId: 1,
						name: '审计日志',
						path: 'log',
						component: '',
						icon: 'log',
						visible: true,
						keepAlive: true,
						children: [
							{
								id: 500,
								parentId: 108,
								name: '操作日志',
								path: 'operate-log',
								component: 'system/operatelog/index',
								icon: 'form',
								visible: true,
								keepAlive: true,
								children: null,
							},
							{
								id: 501,
								parentId: 108,
								name: '登录日志',
								path: 'login-log',
								component: 'system/loginlog/index',
								icon: 'logininfor',
								visible: true,
								keepAlive: true,
								children: null,
							},
						],
					},
					{
						id: 1261,
						parentId: 1,
						name: 'OAuth 2.0',
						path: 'oauth2',
						component: null,
						icon: 'people',
						visible: true,
						keepAlive: true,
						children: [
							{
								id: 1263,
								parentId: 1261,
								name: '应用管理',
								path: 'oauth2/application',
								component: 'system/oauth2/client/index',
								icon: 'tool',
								visible: true,
								keepAlive: true,
								children: null,
							},
							{
								id: 109,
								parentId: 1261,
								name: '令牌管理',
								path: 'token',
								component: 'system/oauth2/token/index',
								icon: 'online',
								visible: true,
								keepAlive: true,
								children: null,
							},
						],
					},
					{
						id: 1093,
						parentId: 1,
						name: '短信管理',
						path: 'sms',
						component: null,
						icon: 'validCode',
						visible: true,
						keepAlive: true,
						children: [
							{
								id: 1094,
								parentId: 1093,
								name: '短信渠道',
								path: 'sms-channel',
								component: 'system/sms/smsChannel',
								icon: 'phone',
								visible: true,
								keepAlive: true,
								children: null,
							},
							{
								id: 1100,
								parentId: 1093,
								name: '短信模板',
								path: 'sms-template',
								component: 'system/sms/smsTemplate',
								icon: 'phone',
								visible: true,
								keepAlive: true,
								children: null,
							},
							{
								id: 1107,
								parentId: 1093,
								name: '短信日志',
								path: 'sms-log',
								component: 'system/sms/smsLog',
								icon: 'phone',
								visible: true,
								keepAlive: true,
								children: null,
							},
						],
					},
					{
						id: 1110,
						parentId: 1,
						name: '错误码管理',
						path: 'error-code',
						component: 'system/errorCode/index',
						icon: 'code',
						visible: true,
						keepAlive: true,
						children: null,
					},
					{
						id: 1247,
						parentId: 1,
						name: '敏感词管理',
						path: 'sensitive-word',
						component: 'system/sensitiveWord/index',
						icon: 'education',
						visible: true,
						keepAlive: true,
						children: null,
					},
				],
			},
			{
				id: 1117,
				parentId: 0,
				name: '支付管理',
				path: '/pay',
				component: null,
				icon: 'money',
				visible: true,
				keepAlive: true,
				children: [
					{
						id: 1179,
						parentId: 1117,
						name: '商户信息',
						path: 'merchant',
						component: 'pay/merchant/index',
						icon: 'merchant',
						visible: true,
						keepAlive: true,
						children: null,
					},
					{
						id: 1126,
						parentId: 1117,
						name: '应用信息',
						path: 'app',
						component: 'pay/app/index',
						icon: 'table',
						visible: true,
						keepAlive: true,
						children: null,
					},
					{
						id: 1173,
						parentId: 1117,
						name: '支付订单',
						path: 'order',
						component: 'pay/order/index',
						icon: 'pay',
						visible: true,
						keepAlive: true,
						children: null,
					},
					{
						id: 1161,
						parentId: 1117,
						name: '退款订单',
						path: 'refund',
						component: 'pay/refund/index',
						icon: 'order',
						visible: true,
						keepAlive: true,
						children: null,
					},
				],
			},
			{
				id: 1281,
				parentId: 0,
				name: '可视化报表',
				path: '/visualization',
				component: null,
				icon: 'chart',
				visible: true,
				keepAlive: true,
				children: [
					{
						id: 1282,
						parentId: 1281,
						name: '积木报表',
						path: 'jimu-report',
						component: 'visualization/jmreport/index',
						icon: 'example',
						visible: true,
						keepAlive: true,
						children: null,
					},
				],
			},
			{
				id: 2,
				parentId: 0,
				name: '基础设施',
				path: '/infra',
				component: null,
				icon: 'monitor',
				visible: true,
				keepAlive: true,
				children: [
					{
						id: 115,
						parentId: 2,
						name: '代码生成',
						path: 'codegen',
						component: 'infra/codegen/index',
						icon: 'code',
						visible: true,
						keepAlive: true,
						children: null,
					},
					{
						id: 1070,
						parentId: 2,
						name: '代码生成示例',
						path: 'test-demo',
						component: 'infra/testDemo/index',
						icon: 'validCode',
						visible: true,
						keepAlive: true,
						children: null,
					},
					{
						id: 1255,
						parentId: 2,
						name: '数据源配置',
						path: 'data-source-config',
						component: 'infra/dataSourceConfig/index',
						icon: 'rate',
						visible: true,
						keepAlive: true,
						children: null,
					},
					{
						id: 114,
						parentId: 2,
						name: '表单构建',
						path: 'build',
						component: 'infra/build/index',
						icon: 'build',
						visible: true,
						keepAlive: true,
						children: null,
					},
					{
						id: 116,
						parentId: 2,
						name: '系统接口',
						path: 'swagger',
						component: 'infra/swagger/index',
						icon: 'swagger',
						visible: true,
						keepAlive: true,
						children: null,
					},
					{
						id: 1076,
						parentId: 2,
						name: '数据库文档',
						path: 'db-doc',
						component: 'infra/dbDoc/index',
						icon: 'table',
						visible: true,
						keepAlive: true,
						children: null,
					},
					{
						id: 1243,
						parentId: 2,
						name: '文件管理',
						path: 'file',
						component: null,
						icon: 'download',
						visible: true,
						keepAlive: true,
						children: [
							{
								id: 1237,
								parentId: 1243,
								name: '文件配置',
								path: 'file-config',
								component: 'infra/fileConfig/index',
								icon: 'config',
								visible: true,
								keepAlive: true,
								children: null,
							},
							{
								id: 1090,
								parentId: 1243,
								name: '文件列表',
								path: 'file',
								component: 'infra/file/index',
								icon: 'upload',
								visible: true,
								keepAlive: true,
								children: null,
							},
						],
					},
					{
						id: 106,
						parentId: 2,
						name: '配置管理',
						path: 'config',
						component: 'infra/config/index',
						icon: 'edit',
						visible: true,
						keepAlive: true,
						children: null,
					},
					{
						id: 1083,
						parentId: 2,
						name: 'API 日志',
						path: 'log',
						component: null,
						icon: 'log',
						visible: true,
						keepAlive: true,
						children: [
							{
								id: 1078,
								parentId: 1083,
								name: '访问日志',
								path: 'api-access-log',
								component: 'infra/apiAccessLog/index',
								icon: 'log',
								visible: true,
								keepAlive: true,
								children: null,
							},
							{
								id: 1084,
								parentId: 1083,
								name: '错误日志',
								path: 'api-error-log',
								component: 'infra/apiErrorLog/index',
								icon: 'log',
								visible: true,
								keepAlive: true,
								children: null,
							},
						],
					},
					{
						id: 111,
						parentId: 2,
						name: 'MySQL 监控',
						path: 'druid',
						component: 'infra/druid/index',
						icon: 'druid',
						visible: true,
						keepAlive: true,
						children: null,
					},
					{
						id: 113,
						parentId: 2,
						name: 'Redis 监控',
						path: 'redis',
						component: 'infra/redis/index',
						icon: 'redis',
						visible: true,
						keepAlive: true,
						children: null,
					},
					{
						id: 112,
						parentId: 2,
						name: 'Java 监控',
						path: 'admin-server',
						component: 'infra/server/index',
						icon: 'server',
						visible: true,
						keepAlive: true,
						children: null,
					},
					{
						id: 110,
						parentId: 2,
						name: '定时任务',
						path: 'job',
						component: 'infra/job/index',
						icon: 'job',
						visible: true,
						keepAlive: true,
						children: null,
					},
					{
						id: 1077,
						parentId: 2,
						name: '监控平台',
						path: 'skywalking',
						component: 'infra/skywalking/index',
						icon: 'eye-open',
						visible: true,
						keepAlive: true,
						children: null,
					},
				],
			},
			{
				id: 1185,
				parentId: 0,
				name: '工作流程',
				path: '/bpm',
				component: null,
				icon: 'tool',
				visible: true,
				keepAlive: true,
				children: [
					{
						id: 1186,
						parentId: 1185,
						name: '流程管理',
						path: 'manager',
						component: null,
						icon: 'nested',
						visible: true,
						keepAlive: true,
						children: [
							{
								id: 1187,
								parentId: 1186,
								name: '流程表单',
								path: 'form',
								component: 'bpm/form/index',
								icon: 'form',
								visible: true,
								keepAlive: true,
								children: null,
							},
							{
								id: 1209,
								parentId: 1186,
								name: '用户分组',
								path: 'user-group',
								component: 'bpm/group/index',
								icon: 'people',
								visible: true,
								keepAlive: true,
								children: null,
							},
							{
								id: 1193,
								parentId: 1186,
								name: '流程模型',
								path: 'model',
								component: 'bpm/model/index',
								icon: 'guide',
								visible: true,
								keepAlive: true,
								children: null,
							},
						],
					},
					{
						id: 1200,
						parentId: 1185,
						name: '任务管理',
						path: 'task',
						component: null,
						icon: 'cascader',
						visible: true,
						keepAlive: true,
						children: [
							{
								id: 1201,
								parentId: 1200,
								name: '我的流程',
								path: 'my',
								component: 'bpm/processInstance/index',
								icon: 'people',
								visible: true,
								keepAlive: true,
								children: null,
							},
							{
								id: 1207,
								parentId: 1200,
								name: '待办任务',
								path: 'todo',
								component: 'bpm/task/todo',
								icon: 'eye-open',
								visible: true,
								keepAlive: true,
								children: null,
							},
							{
								id: 1208,
								parentId: 1200,
								name: '已办任务',
								path: 'done',
								component: 'bpm/task/done',
								icon: 'eye',
								visible: true,
								keepAlive: true,
								children: null,
							},
						],
					},
					{
						id: 5,
						parentId: 1185,
						name: 'OA 示例',
						path: 'oa',
						component: null,
						icon: 'people',
						visible: true,
						keepAlive: true,
						children: [
							{
								id: 1118,
								parentId: 5,
								name: '请假查询',
								path: 'leave',
								component: 'bpm/oa/leave/index',
								icon: 'user',
								visible: true,
								keepAlive: true,
								children: null,
							},
						],
					},
				],
			},
		],
		msg: '',
	};
};
