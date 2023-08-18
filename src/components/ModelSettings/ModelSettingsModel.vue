<template>
	<div class="model-box">
		<div class="model-box-title">智慧城市灯杆专题</div>
		<div class="model-box-time">
			<span>2023-10-10</span>
			<span>10:10:10</span>
		</div>
		<div class="model-box-img">
			<img :src="sceneImg" alt="" srcset="" />
		</div>
		<div class="model-box-footer">
			<div class="model-box-btn">详情</div>
			<div class="model-box-btn">编辑</div>
			<div class="model-box-btn">发布</div>
			<div class="model-box-btn">复制</div>
			<div class="model-box-btn">删除</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
defineOptions({ name: 'ModelSettingsModel' });
import sceneImg from '@/assets/imgs/scene.png';
</script>

<style lang="scss" scoped>
.model-box {
	// width: 300px;
	// height: 300px;
	width: 16%;
	padding: 15px;
	margin-top: 20px;
	margin-right: 10px;
	background: #fff;
	border-radius: 6px;
	box-shadow: 3px 3px 9px 0 rgb(91 141 255 / 22%);

	.model-box-title {
		font-size: 18px;
	}

	.model-box-time {
		margin-top: 10px;
		font-size: 16px;
	}

	.model-box-img {
		width: 100%;
		height: auto;
		margin-top: 10px;
	}

	.model-box-img > img {
		width: 100%;
	}

	.model-box-footer {
		display: flex;

		.model-box-btn {
			padding: 2px 5px;
			margin-top: 10px;
			font-size: 16px;
			text-align: center;
			border: 1px solid #ccc;
			flex: 1;
		}

		.model-box-btn:hover {
			cursor: pointer;
		}
	}
}

.model-box:nth-child(5n) {
	margin-right: 0;
}
</style>
