<template>
	<div class="chart-box">
		<slot></slot>
	</div>
</template>
<script lang="ts" setup>
defineOptions({ name: 'ContentBox' });
</script>

<style lang="scss" scoped>
.chart-box {
	min-height: 390px;
	margin-top: 20px;
	background: #fff;
	border-radius: 8px;
	box-shadow: 3px 3px 9px 0 rgb(91 141 255 / 22%);
}
</style>
