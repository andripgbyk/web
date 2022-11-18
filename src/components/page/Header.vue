<template>
    <n-layout-header bordered class="!h-16 grid items-center px-8">
        <!-- Logo -->
        <n-text
            tag="div"
            class="flex items-center cursor-pointer"
            :depth="1"
        >
            <img
                src="@/assets/images/logo.png"
                height="32"
                width="32"
                alt="Logo"
            >
            <span class="ml-2 text-lg font-medium">
                {{ appConfig.title }}
            </span>
        </n-text>
        <!-- Menu -->
        <div class="flex items-center">
            <div>
                <n-menu
                    mode="horizontal"
                    :options="menuOptions"
                />
            </div>
        </div>
        <!-- Sub Menu -->
        <div class="flex items-center gap-4">
            <n-button text strong>
                Sign in
            </n-button>
            <n-button
                strong
                type="primary"
            >
                Sign up
            </n-button>
        </div>
    </n-layout-header>
</template>

<script setup>
const appConfig = useAppConfig();
const menuOptions = [
    {
        key: "index",
        label: "Home"
    },
    {
        key: "docs",
        label: "Documentation"
    }
];
</script>

<style lang="css" scoped>
    .n-layout-header {
        grid-template-columns: calc(272px - 32px) 1fr auto;
        grid-template-rows: calc(64px - 1px);
    }
</style>
