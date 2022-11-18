<template>
    <NuxtLayout name="error">
        {{ error }}
        <button @click="handleError">
            Clear errors
        </button>
    </NuxtLayout>
</template>

<script setup>
defineProps({
    error: {
        type: Object,
        default: () => ({})
    }
});

const handleError = () => clearError({ redirect: "/" });
</script>
