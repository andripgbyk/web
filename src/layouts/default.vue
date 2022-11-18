<template>
    <div>
        <n-layout position="absolute">
            <!-- Header -->
            <n-layout-header bordered class="!h-16">
                <div class="container mx-auto px-4 lg:px-6 flex flex-wrap justify-between items-center h-full">
                    <!-- Logo -->
                    <NuxtLink to="/" class="flex items-center gap-2">
                        <img src="@/assets/images/logo.png" class="h-8" alt="Wabis Logo">
                        <span class="self-center text-xl font-semibold whitespace-nowrap">Wabis</span>
                    </NuxtLink>
                    <!-- Menu -->
                    <div class="items-center flex font-medium">
                        <div class="hidden md:block">
                            <n-menu
                                mode="horizontal"
                                :options="menuOptions"
                            />
                        </div>
                        <div class="block md:hidden">
                            <n-button quaternary circle>
                                <template #icon>
                                    <n-icon><mdi-menu /></n-icon>
                                </template>
                            </n-button>
                        </div>
                    </div>
                </div>
            </n-layout-header>
            <!-- Main -->
            <n-layout position="absolute" class="!top-16">
                <!-- Main Content -->
                <slot />
                <!-- Footer -->
            </n-layout>
        </n-layout>
    </div>
</template>

<script setup>
const menuOptions = ref([
    {
        label: "Pricing",
        key: "pricing"
    },
    {
        label: "Docs",
        key: "docs"
    },
    {
        label: "Sign In",
        key: "login"
    },
    {
        label: "Start Free Trial",
        key: "free_trial"
    }
]);
</script>
