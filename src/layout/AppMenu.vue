<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    {
        label: 'Home',
        items: [
            { label: 'Start Learning', icon: 'pi pi-fw pi-home', to: '/' },
            { label: 'My Library', icon: 'pi pi-fw pi-book', to: '/blocks', badge: 'NEW' },
            { label: 'Community', icon: 'pi pi-fw pi-users', to: '/community' },
            { label: 'View a video', icon: 'pi pi-fw pi-youtube', to: '/learning' }
        ]
    },
   /* {
        label: 'Browse',
        items: [
            { label: 'Getting Started', icon: 'pi pi-fw pi-id-card', to: '/uikit/formlayout' },
            { label: 'Account Management', icon: 'pi pi-fw pi-cog', to: '/uikit/input' },
            { label: 'Campaigns', icon: 'pi pi-fw pi-database', to: '/uikit/floatlabel' },
            { label: 'Reports', icon: 'pi pi-fw pi-file-pdf', to: '/uikit/invalidstate' },
            { label: 'Dashboards', icon: 'pi pi-fw pi-th-large', to: '/uikit/button', class: 'rotated-icon' },
            { label: 'White Label', icon: 'pi pi-fw pi-wrench', to: '/uikit/table' },
            { label: 'Integrations', icon: 'pi pi-fw pi-star', to: '/uikit/list' },
            { label: 'Rankings', icon: 'pi pi-fw pi-chart-line', to: '/uikit/tree' },
            { label: 'Site Audits', icon: 'pi pi-fw pi-search-plus', to: '/uikit/panel' },
            { label: 'Google Sheets App', icon: 'pi pi-fw pi-clone', to: '/uikit/overlay' },
            { label: 'Labs', icon: 'pi pi-fw pi-hourglass', to: '/uikit/media' },
            { label: 'Backlinks', icon: 'pi pi-fw pi-directions-alt', to: '/uikit/menu', preventExact: true },
            { label: 'Tasks', icon: 'pi pi-fw pi-check-circle', to: '/uikit/file' },
            { label: 'Enterprise', icon: 'pi pi-fw pi-building', to: '/uikit/file' }
        ]
    },*/
    {
        label: 'Level',
        items: [
            { label: 'Beginner', icon: 'pi pi-fw pi-send', to: '/utilities/icons' },
            { label: 'Intermediate', icon: 'pi pi-fw pi-car', to: '/utilities/icons' },
            { label: 'Advanced', icon: 'pi pi-fw pi-truck', to: '/utilities/icons' }
        ]
    }
    // {
    //     label: 'Pages',
    //     icon: 'pi pi-fw pi-briefcase',
    //     to: '/pages',
    //     items: [
    //         {
    //             label: 'Landing',
    //             icon: 'pi pi-fw pi-globe',
    //             to: '/landing'
    //         },
    //         {
    //             label: 'Auth',
    //             icon: 'pi pi-fw pi-user',
    //             items: [
    //                 {
    //                     label: 'Login',
    //                     icon: 'pi pi-fw pi-sign-in',
    //                     to: '/auth/login'
    //                 },
    //                 {
    //                     label: 'Error',
    //                     icon: 'pi pi-fw pi-times-circle',
    //                     to: '/auth/error'
    //                 },
    //                 {
    //                     label: 'Access Denied',
    //                     icon: 'pi pi-fw pi-lock',
    //                     to: '/auth/access'
    //                 }
    //             ]
    //         },
    //         {
    //             label: 'Crud',
    //             icon: 'pi pi-fw pi-pencil',
    //             to: '/pages/crud'
    //         },
    //         {
    //             label: 'Timeline',
    //             icon: 'pi pi-fw pi-calendar',
    //             to: '/pages/timeline'
    //         },
    //         {
    //             label: 'Not Found',
    //             icon: 'pi pi-fw pi-exclamation-circle',
    //             to: '/pages/notfound'
    //         },
    //         {
    //             label: 'Empty',
    //             icon: 'pi pi-fw pi-circle-off',
    //             to: '/pages/empty'
    //         }
    //     ]
    // },
    // {
    //     label: 'Hierarchy',
    //     items: [
    //         {
    //             label: 'Submenu 1',
    //             icon: 'pi pi-fw pi-bookmark',
    //             items: [
    //                 {
    //                     label: 'Submenu 1.1',
    //                     icon: 'pi pi-fw pi-bookmark',
    //                     items: [
    //                         { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
    //                         { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
    //                         { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' }
    //                     ]
    //                 },
    //                 {
    //                     label: 'Submenu 1.2',
    //                     icon: 'pi pi-fw pi-bookmark',
    //                     items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }]
    //                 }
    //             ]
    //         },
    //         {
    //             label: 'Submenu 2',
    //             icon: 'pi pi-fw pi-bookmark',
    //             items: [
    //                 {
    //                     label: 'Submenu 2.1',
    //                     icon: 'pi pi-fw pi-bookmark',
    //                     items: [
    //                         { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
    //                         { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' }
    //                     ]
    //                 },
    //                 {
    //                     label: 'Submenu 2.2',
    //                     icon: 'pi pi-fw pi-bookmark',
    //                     items: [{ label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' }]
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     label: 'Get Started',
    //     items: [
    //         {
    //             label: 'Documentation',
    //             icon: 'pi pi-fw pi-question',
    //             to: '/documentation'
    //         },
    //         {
    //             label: 'View Source',
    //             icon: 'pi pi-fw pi-search',
    //             url: 'https://github.com/primefaces/sakai-vue',
    //             target: '_blank'
    //         },
    //         {
    //             label: 'Nuxt Version',
    //             url: 'https://github.com/primefaces/sakai-nuxt',
    //             icon: 'pi pi-fw pi-star'
    //         }
    //     ]
    // }
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>
