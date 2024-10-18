import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue';
import HealthServicesView from '@/views/services/HealthServicesView.vue';
import BusinessPermitsView from '@/views/services/BusinessPermitsView.vue';
import CommunityEventsView from '@/views/services/CommunityEventsView.vue';
import AnnouncementsView from '@/views/AnnouncementsView.vue';
import ReportsView from '@/views/ReportsView.vue';
import EventsView from '@/views/EventsView.vue';
import ResourcesView from '@/views/ResourcesView.vue';
import ContactView from '@/views/ContactView.vue';
import FAQsView from '@/views/FAQsView.vue';
import FeedbackView from '@/views/FeedbackView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/services/health', component: HealthServicesView },
  { path: '/services/business', component: BusinessPermitsView },
  { path: '/services/community-events', component: CommunityEventsView },
  { path: '/announcements', component: AnnouncementsView },
  { path: '/reports', component: ReportsView },
  { path: '/events', component: EventsView },
  { path: '/resources', component: ResourcesView },
  { path: '/contact', component: ContactView },
  { path: '/faqs', component: FAQsView },
  { path: '/feedback', component: FeedbackView },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
