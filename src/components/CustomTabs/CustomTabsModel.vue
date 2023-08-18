<template>
	<div class="tabs-custom-box">
		<template v-for="(item, index) in data.tabsViewList">
			<div class="item-status" v-bind:class="{ active: data.isActiveIndex === index }" @click="handleClick(index)">{{ item }}</div>
		</template>
	</div>
</template>

<script lang="ts" setup>
defineOptions({ name: 'CustomTabs' });
const emit = defineEmits(['showTabs']);
const props = defineProps({
	tabsList: {
		type: Array,
		default: () => ['卡片视图', '列表视图'],
	},
	curTabIndex: {
		type: Number,
		default: () => 0,
	},
});
const data = reactive({
	tabsViewList: props.tabsList,
	isActiveIndex: props.curTabIndex,
});

const handleClick = (index) => {
	if (data.isActiveIndex === index) {
		return;
	}
	data.isActiveIndex = index;
	emit('showTabs', index);
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
