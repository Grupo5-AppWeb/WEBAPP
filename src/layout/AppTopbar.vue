<script setup>
import { useLayout } from '@/layout/composables/layout';

const { onMenuToggle, toggleDarkMode, isDarkTheme } = useLayout();
</script>

<template>
    <div class="layout-topbar">
        <div class="layout-topbar-logo-container">
            <button class="layout-menu-button layout-topbar-action" @click="onMenuToggle">
                <i class="pi pi-bars"></i>
            </button>
            <router-link to="/supplier/dashboard" class="layout-topbar-logo">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
                    <defs>
                        <clipPath id="imagebot_5">
                            <path
                                id="imagebot_12"
                                d="m110.84 92.08v385.63h385.63v-385.63h-385.63z"
                            />
                        </clipPath>
                    </defs>
                    <g id="imagebot_2" label="Layer 1">
                        <g
                            id="imagebot_3"
                            transform="translate(33) matrix(1.5718 0 0 1.5718 379.84 209.97)"
                            label="Layer 1"
                        >
                            <g
                                id="imagebot_4"
                                transform="translate(-413 -263.09)"
                                fill="#161413"
                                clip-path="url(#imagebot_5)"
                            >
                                <path
                                    id="imagebot_9"
                                    d="m441.18 134.42c-3.75 0-7.06 3.31-7.06 7.2v83.37c-0.14 12.31-7.78 22.75-18.43 26.86-3.1 1.15-6.48 1.8-9.94 1.8v182.88c0 3.17 3.17 7.05 7.2 7.05 1.01 0 1.95-0.14 2.74-0.5 2.52-1.08 4.17-3.6 4.17-6.55v-171.07c16.71-5.48 28.37-21.6 28.37-40.18v-84.24c0-3.89-3.31-6.62-7.05-6.62z"
                                    fill="#FF7300"
                                />
                                <path
                                    id="imagebot_8"
                                    d="m415.54 211.17h0.15c3.89 0 7.05-3.17 7.05-7.06v-62.49c0-3.82-3.16-6.99-7.05-6.99v-0.07h-0.15c-3.88 0-7.05 3.17-7.05 7.06v62.49c0 3.89 3.17 7.06 7.05 7.06z"
                                    fill="#FF7300"
                                />
                                <path
                                    id="imagebot_7"
                                    d="m390.06 134.63v-0.07h-0.15c-3.89 0-7.05 3.17-7.05 7.06v62.49c0 3.89 3.16 7.06 7.05 7.06h0.15c3.88 0 7.05-3.17 7.05-7.06v-62.49c0-3.82-3.17-6.99-7.05-6.99z"
                                    fill="#FF7300"
                                />
                                <path
                                    id="imagebot_6"
                                    d="m365.86 134.56h-184.03c-3.17 0-5.76 2.59-5.76 5.76v107.71c0 44.07 33.84 82.95 76.61 89.71v29.24c0 34.56-28.22 62.49-62.21 62.49-4.32 0-8.35 2.31-8.35 6.91 0 6.34 5.76 7.2 8.06 7.2 42.05 0 76.61-34.56 76.61-76.6v-33.99c0.43-4.61-2.16-8.21-5.61-8.49-38.02-4.04-70.85-33.99-70.85-76.47v-99.21h167.04v99.21c0 35.86-23.4 62.79-53.57 72.79-5.54 1.8-11.38 3.1-17.28 3.68-3.46 0.28-6.05 3.88-5.62 8.49v33.99c0 21.24 8.79 40.6 22.9 54.5 13.9 13.68 32.83 22.1 53.71 22.1 2.31 0 8.07-0.86 8.07-7.2 0-4.6-4.04-6.9-8.36-6.91-39.26-0.05-61.59-32.71-62.2-62.49v-29.24c2.95-0.43 5.9-1.08 8.78-1.87 38.52-10.37 67.82-46.8 67.82-87.84v-107.71c0-3.17-2.59-5.76-5.76-5.76z"
                                    fill="#FF7300"
                                />
                            </g>
                        </g>
                        <title>Layer 1</title>
                    </g>
                </svg>

                <span>RE-GRILL</span>
            </router-link>
        </div>

        <div class="layout-topbar-actions">
            <div class="layout-config-menu">
                <button type="button" class="layout-topbar-action" @click="toggleDarkMode">
                    <i :class="['pi', { 'pi-moon': isDarkTheme, 'pi-sun': !isDarkTheme }]"></i>
                </button>
            </div>

        </div>
    </div>
</template>
