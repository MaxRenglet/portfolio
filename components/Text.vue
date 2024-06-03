<script setup lang="ts">
import { onMounted } from 'vue'
const { $gsap } = useNuxtApp()

const center = ref<HTMLTextAreaElement | null>(null)
const h = ref(0)

onMounted(() => {
    const refValue: HTMLElement | null = center.value
    h.value = refValue ? refValue?.clientHeight : 0
    window.addEventListener('resize', onResize, true)
})

const onResize = () => {
    const refValue: HTMLElement | null = center.value
    h.value = refValue ? refValue?.clientHeight : 0
}

const handleScroll = () => {
    const scrollPos = window.scrollY
    const els = document.querySelectorAll('.content')
    els.forEach((element) => {
        $gsap.to(element, { '--translateYValue': -scrollPos + 'px', duration: 0.25 })
    })
}
if (process.client) {
    window.addEventListener('scroll', handleScroll)
}
</script>

<template>
    <div class="relative" :style="h ? `height: ${h}px` : ''" style="--translateYValue: 0px">
        <div class="flex fixed flex-col w-full h-[100vh] top-0 left-0">
            <div class="overflow-hidden flex-[0_0_10%]" aria-label="hidden">
                <div class="content translate_3d__normal mt-[-9.5vh] origin-top will-change-transform">
                    <slot />
                </div>
            </div>
            <div class="overflow-hidden flex-[0_0_5%] skew-x-[-15deg] origin-[center_0vh]" aria-label="hidden">
                <div class="content translate_3d__md mt-[-39.4vh] origin-top will-change-transform">
                    <slot />
                </div>
            </div>
            <div class="overflow-hidden flex-[0_0_5%] skew-x-[15deg] origin-[center_4.8vh]" aria-label="hidden">
                <div class="content translate_3d__md mt-[-44.8vh] origin-top will-change-transform">
                    <slot />
                </div>
            </div>

            <div class="overflow-hidden flex-[0_0_60%]">
                <div class="content translate_3d__normal mt-[-25vh] origin-top will-change-transform" ref="center">
                    <slot />
                </div>
            </div>

            <div class="overflow-hidden flex-[0_0_5%] skew-x-[15deg] origin-[center_0vh]" aria-label="hidden">
                <div class="content translate_3d__md mt-[-170.4vh] origin-top will-change-transform">
                    <slot />
                </div>
            </div>
            <div class="overflow-hidden flex-[0_0_5%] skew-x-[-15deg] origin-[center_5vh]" aria-label="hidden">
                <div class="content translate_3d__md mt-[-175.2vh] origin-top will-change-transform">
                    <slot />
                </div>
            </div>
            <div class="overflow-hidden flex-[0_0_10%]" aria-label="hidden">
                <div class="content translate_3d__normal mt-[-90.2vh] origin-top will-change-transform">
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>
