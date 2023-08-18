<template>
	<div class="tabs-custom-box">
		<template v-for="(item, index) in tabsViewList">
			<div class="item-status" v-bind:class="{ active: isActiveIndex === index }" @click="handleClick(index)">{{ item }}</div>
		</template>
	</div>
</template>

<script>
export default {
	name: 'CustomTabs',
	props: {
		tabsList: {
			type: Array,
			default: () => ['卡片视图', '列表视图'],
		},
		curTabIndex: {
			type: Number,
			default: () => 0,
		},
	},
	data() {
		return {
			tabsViewList: this.tabsList,
			isActiveIndex: this.curTabIndex,
		};
	},
	methods: {
		handleClick(index) {
			if (this.isActiveIndex === index) {
				return;
			}
			this.isActiveIndex = index;
			this.$emit('showTabs', index);
		},
	},
};
</script>

<style lang="scss" scoped>
.tabs-custom-box {
	display: flex;
	font-size: 16px;
}

.tabs-custom-box > div:nth-of-type(1)::after {
	margin: 0 10px;
	content: '/';
}

.active {
	color: #3c6fff;
}

.item-status:hover {
	cursor: pointer;
}
</style>
