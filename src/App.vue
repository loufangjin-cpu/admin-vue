<script lang="ts" setup>
import { isDark } from '@/utils/is';
// import { getInfo } from '@/api/login';
import { useUserStoreWithOut } from '@/store/modules/user';

import { useAppStore } from '@/store/modules/app';
import { useDesign } from '@/hooks/web/useDesign';
import { CACHE_KEY, useCache } from '@/hooks/web/useCache';
import routerSearch from '@/components/RouterSearch/index.vue';

defineOptions({ name: 'APP' });
const userStore = useUserStoreWithOut();

const { getPrefixCls } = useDesign();
const prefixCls = getPrefixCls('app');
const appStore = useAppStore();
const currentSize = computed(() => appStore.getCurrentSize);
const greyMode = computed(() => appStore.getGreyMode);
const { wsCache } = useCache();
onMounted(async () => {
	// let userInfo = wsCache.get(CACHE_KEY.USER);
	// userInfo = await getInfo();
	// wsCache.set(CACHE_KEY.ROLE_ROUTERS, userInfo.menus);
	await userStore.setUserInfoAction();
});
// 根据浏览器当前主题设置系统主题色
const setDefaultTheme = () => {
	let isDarkTheme = wsCache.get(CACHE_KEY.IS_DARK);
	if (isDarkTheme === null) {
		isDarkTheme = isDark();
	}
	appStore.setIsDark(isDarkTheme);
};
setDefaultTheme();
</script>
<template>
	<ConfigGlobal :size="currentSize">
		<RouterView :class="greyMode ? `${prefixCls}-grey-mode` : ''" />
		<routerSearch />
	</ConfigGlobal>
</template>
<style lang="scss">
$prefix-cls: #{$namespace}-app;

.size {
	width: 100%;
	height: 100%;
}

html,
body {
	@extend .size;

	padding: 0 !important;
	margin: 0;
	overflow: hidden;

	#app {
		@extend .size;
	}
}

.#{$prefix-cls}-grey-mode {
	filter: grayscale(100%);
}
</style>
