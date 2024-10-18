<template>
  <Menubar :model="items">
    <template #end>
      <div class="flex items-center gap-2">
        <Avatar
          icon="pi pi-user"
          class="mr-2"
          size="large"
          style="background-color: #ece9fc; color: #2a1261"
          shape="circle"
        />
      </div>
    </template>
  </Menubar>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-fw pi-home',
    command: () => router.push('/'),
  },
  {
    label: 'About Us',
    icon: 'pi pi-fw pi-info',
    command: () => router.push('/about'),
  },
  {
    label: 'Services',
    icon: 'pi pi-fw pi-briefcase',
    items: [
      // Submenu for Services
      {
        label: 'Health Services',
        icon: 'pi pi-fw pi-heart',
        command: () => router.push('/services/health'),
      },
      {
        label: 'Business Permits',
        icon: 'pi pi-fw pi-file',
        command: () => router.push('/services/business'),
      },
      {
        label: 'Community Events',
        icon: 'pi pi-fw pi-calendar',
        command: () => router.push('/services/events'),
      },
      { separator: true }, // Optional separator
      {
        label: 'Announcements',
        icon: 'pi pi-fw pi-bell',
        command: () => router.push('/announcements'),
      },
      {
        label: 'Reports and Complaints',
        icon: 'pi pi-fw pi-exclamation-triangle',
        command: () => router.push('/reports'),
      },
      {
        label: 'Events Calendar',
        icon: 'pi pi-fw pi-calendar',
        command: () => router.push('/events'),
      },
      {
        label: 'Community Resources',
        icon: 'pi pi-fw pi-users',
        command: () => router.push('/resources'),
      },
    ],
  },
  {
    label: 'Help & Support',
    icon: 'pi pi-fw pi-question-circle',
    items: [
      // Submenu for Help & Support
      {
        label: 'Contact Us',
        icon: 'pi pi-fw pi-envelope',
        command: () => router.push('/contact'),
      },
      {
        label: 'FAQs',
        icon: 'pi pi-fw pi-question',
        command: () => router.push('/faqs'),
      },
      {
        label: 'Feedback/Suggestions',
        icon: 'pi pi-fw pi-comment',
        command: () => router.push('/feedback'),
      },
    ],
  },
])
</script>

<style scoped>
/* You can add custom styles here if needed */
.p-menubar {
  /* @apply bg-white; */
}
</style>
