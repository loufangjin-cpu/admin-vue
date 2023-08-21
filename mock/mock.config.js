const utils = require('./utils');

const mockConfig = {
	enable: true, // 是否启用mock
	api: {
		'/admin-api/stzc/quest-result/get': true, // 获取问题信息
		'/admin-api/system/user/list-all-simples': true, // 获取用户列表
	},
};

Object.keys(mockConfig.api).forEach((key) => {
	let controller = mockConfig.api[key];
	if (controller) {
		mockConfig.api[key] = utils.getApi(`.${key}`, controller);
	}
});
module.exports = mockConfig;
