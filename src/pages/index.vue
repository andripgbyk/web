<template>
    <div>
        <!-- Banner -->
        <div class="px-8 text-white bg-primary-900 py-36">
            <div class="container mx-auto">
                <div class="flex items-center justify-between gap-10">
                    <div class="flex-1">
                        <h1 class="pb-3 text-5xl font-medium text-primary-500">
                            Transform your business
                        </h1>
                        <h3 class="py-5 text-xl font-normal">
                            Engage audiences, accelerate sales and drive better
                            customer support outcomes on the platform with more than
                            2 billion users around the world.
                        </h3>
                        <n-button
                            size="large"
                            strong
                            round
                            type="primary"
                        >
                            Try {{ appConfig.title }} for Free
                        </n-button>
                        <n-p class="!text-slate-400">
                            14 day free trial. No credit card required.
                        </n-p>
                    </div>
                    <div class="flex-1">
                        <img
                            src="@/assets/images/landing_banner.png"
                            alt="WhatsApp Messaging on Phone and Message Templates screenshot"
                            class="max-w-lg mx-auto"
                        >
                    </div>
                </div>
            </div>
        </div>

        <div class="px-8 py-10">
            <div class="container mx-auto">
                <div class="pb-5 text-center">
                    <h2 class="text-2xl font-medium">
                        2 billion monthly active users spread across 180 countries.
                    </h2>
                    <h3 class="text-xl font-normal">
                        Now, WhatsApp became most popular messaging app. 9 out of 10
                        customers prefer to message a brand in place of calling.
                        Reach more customer and get many benefit with a WhatsApp
                        Business API
                    </h3>
                </div>

                <div class="grid grid-cols-4 gap-5">
                    <n-card class="!rounded-lg" title="Send Notifications">
                        <template #cover>
                            <img
                                src="https://botika.online/wabotika/assets/images/icons/2%20icon%20notif-min.png"
                                class="object-contain w-auto h-20"
                            >
                        </template>
                        Send notifications & promotions to your existing &
                        prospective customers
                    </n-card>
                    <n-card class="!rounded-lg" title="Deflect calls to WhatsApp">
                        <template #cover>
                            <img
                                src="https://botika.online/wabotika/assets/images/icons/3%20icon%20toa-min.png"
                                class="object-contain w-auto h-20"
                            >
                        </template>
                        Promote WhatsApp as your primary support on all your key
                        digital assets
                    </n-card>
                    <n-card class="!rounded-lg" title="Increase Conversion.">
                        <template #cover>
                            <img
                                src="https://botika.online/wabotika/assets/images/icons/4%20icon%20conversation-min.png"
                                class="object-contain w-auto h-20"
                            >
                        </template>
                        Capture 100% of your leads from digital channels and
                        converse with them instantaneously
                    </n-card>
                    <n-card class="!rounded-lg" title="Save Costs">
                        <template #cover>
                            <img
                                src="https://botika.online/wabotika/assets/images/icons/5%20icon%20coin-min.png"
                                class="object-contain w-auto h-20"
                            >
                        </template>
                        Increase CSAT by offering 24x7 meaningful engagement, while
                        reducing 30% OPEX
                    </n-card>
                </div>
            </div>
        </div>

        <div class="px-8 py-10 text-white bg-primary-900">
            <div class="container mx-auto">
                <div class="flex items-center justify-between gap-10">
                    <div class="flex-1">
                        <h2 class="text-2xl font-medium">
                            Automate respond 80% customer chat on WhatsApp
                        </h2>
                    </div>
                    <div class="flex-1">
                        <img
                            src="https://botika.online/wabotika/assets/images/5-image-automate-80-min.png"
                            alt="WhatsApp Messaging on Phone and Message Templates screenshot"
                            class="max-w-md mx-auto"
                        >
                    </div>
                </div>
            </div>
        </div>

        <div class="px-8 py-10">
            <div class="container mx-auto">
                <div class="text-center">
                    <h2 class="text-2xl font-medium">
                        Businnes initiated template messages that can be sent any
                        time
                    </h2>
                </div>

                <div class="flex items-center justify-between gap-10">
                    <div class="flex-1">
                        <h2 class="text-2xl font-medium">
                            Push Notifications
                        </h2>
                        <h3 class="text-xl font-normal">
                            Send personalized mobile push notifications to different
                            user segments with our AI-powerd campaign manager
                        </h3>
                    </div>
                    <div class="flex-1">
                        <img
                            src="https://botika.online/wabotika/assets/images/features/6%20push%20notification-min.png"
                            alt="WhatsApp Messaging on Phone and Message Templates screenshot"
                            class="max-w-md mx-auto"
                        >
                    </div>
                </div>

                <div class="flex items-center justify-between gap-10">
                    <div class="flex-1 order-last">
                        <h2 class="text-2xl font-medium">
                            Lead Capture
                        </h2>
                        <h3 class="text-xl font-normal">
                            Direct users from digital campaigns to your WhatsApp
                            virtual assistant. Accurate lead generation and lead
                            qualification is just a click away
                        </h3>
                    </div>
                    <div class="flex-1">
                        <img
                            src="https://botika.online/wabotika/assets/images/features/7%20lead%20capture-min.png"
                            alt="WhatsApp Messaging on Phone and Message Templates screenshot"
                            class="max-w-md mx-auto"
                        >
                    </div>
                </div>

                <div class="flex items-center justify-between gap-10">
                    <div class="flex-1">
                        <h2 class="text-2xl font-medium">
                            Smart Promotions
                        </h2>
                        <h3 class="text-xl font-normal">
                            Market new products, relevant developments & upcoming
                            updates/reminders to your consumers on WhatsApp so they
                            can share it with their contacts
                        </h3>
                    </div>
                    <div class="flex-1">
                        <img
                            src="https://botika.online/wabotika/assets/images/features/8%20Launch%20Smart%20Promotions-min.png"
                            alt="WhatsApp Messaging on Phone and Message Templates screenshot"
                            class="max-w-md mx-auto"
                        >
                    </div>
                </div>

                <div class="flex items-center justify-between gap-10">
                    <div class="flex-1 order-last">
                        <h2 class="text-2xl font-medium">
                            On Demand CS
                        </h2>
                        <h3 class="text-xl font-normal">
                            Reduce query resolution time by responding and
                            addressing queries in a matter of seconds, on the
                            preferred channel WhatsApp
                        </h3>
                    </div>
                    <div class="flex-1">
                        <img
                            src="https://botika.online/wabotika/assets/images/features/9%20On%20demand%20CS-min.png"
                            alt="WhatsApp Messaging on Phone and Message Templates screenshot"
                            class="max-w-md mx-auto"
                        >
                    </div>
                </div>
            </div>
        </div>

        <div class="py-20 text-white bg-primary-900">
            <div class="container mx-auto">
                <div class="mx-8 text-center">
                    <div class="mb-5">
                        <h1 class="pb-3 text-3xl font-medium text-primary-500">
                            Take the next step
                        </h1>
                        <h3 class="text-xl font-normal">
                            Start transforming your customer experience on WhatsApp
                            Business Platform.
                        </h3>
                    </div>

                    <n-button
                        size="large"
                        strong
                        round
                        type="primary"
                    >
                        Try {{ appConfig.title }} for Free
                    </n-button>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <!-- <page-footer /> -->
    </div>
</template>

<script setup>
definePageMeta({
    key: route => route.fullPath,
    title: "Wabis"
});
const appConfig = useAppConfig();
</script>
