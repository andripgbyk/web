<template>
    <n-layout class="container mx-auto" position="absolute" has-sider>
        <n-layout-sider :native-scrollbar="false" bordered>
            <n-menu :options="menuOptions" />
        </n-layout-sider>
        <n-layout :native-scrollbar="false">
            <n-h2>Pingshan Road</n-h2>
            <n-h2>Pingshan Road</n-h2>
            <n-h2>Pingshan Road</n-h2>
            <n-h2>Pingshan Road</n-h2>
            <n-h2>Pingshan Road</n-h2>
            <n-h2>Pingshan Road</n-h2>
            <n-h2>Pingshan Road</n-h2>
            <n-h2>Pingshan Road</n-h2>
            <n-h2>Pingshan Road</n-h2>
            <n-h2>Pingshan Road</n-h2>
            <n-h2>Pingshan Road</n-h2>
            <n-h2>Pingshan Road</n-h2>
        </n-layout>
    </n-layout>
</template>

<script setup>
definePageMeta({
    key: route => route.fullPath,
    title: "Documentation - Wabis"
});

const menuOptions = ref([
    {
        type: "group",
        label: "Introduction",
        key: "introduction",
        children: [
            {
                key: "introduction.what-is",
                label: "What is Wabis ?"
            }
        ]
    },
    {
        type: "group",
        label: "Release Notes",
        key: "release",
        children: [
            {
                key: "release.version",
                label: "Version"
            }
        ]
    }
]);
</script>
