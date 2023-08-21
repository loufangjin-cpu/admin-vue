<template>
	<div class="chart-content">
		<slot></slot>
	</div>
</template>
<script lang="ts" setup>
defineOptions({ name: 'ContentTitle' });
</script>

<style lang="scss" scoped>
.chart-content {
	margin-top: 14px;
	font-family: PingFangSC-Medium, 'PingFang SC';
	font-size: 17px;
	font-weight: 500;
	line-height: 24px;
	color: rgb(31 31 31 / 85%);
}
// .chart-content > div:nth-of-type(1) {
// 	padding-left: 25px;
// }
</style>
