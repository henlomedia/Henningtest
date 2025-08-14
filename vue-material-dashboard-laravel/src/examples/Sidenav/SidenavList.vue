<template>
  <div class="w-auto h-auto collapse navbar-collapse max-height-vh-100 h-100" id="sidenav-collapse-main">
    <ul class="navbar-nav">

      <li class="nav-item">
        <sidenav-collapse url="#" :aria-controls="''" v-bind:collapse="false" collapseRef="dashboard" navText="Dashboard">
          <template v-slot:icon>
            <i class="material-icons-round opacity-10 fs-5">dashboard</i>
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse url="#" :aria-controls="''" v-bind:collapse="false" collapseRef="booking" navText="Booking">
          <template v-slot:icon>
            <i class="material-icons-round opacity-10 fs-5">event</i>
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse url="#" :aria-controls="''" v-bind:collapse="false" collapseRef="members" navText="Members">
          <template v-slot:icon>
            <i class="material-icons-round opacity-10 fs-5">people</i>
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse url="#" :aria-controls="''" v-bind:collapse="false" collapseRef="messages" navText="Messages">
          <template v-slot:icon>
            <i class="material-icons-round opacity-10 fs-5">message</i>
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse url="#" :aria-controls="''" v-bind:collapse="false" collapseRef="resources" navText="Resources">
          <template v-slot:icon>
            <i class="material-icons-round opacity-10 fs-5">folder</i>
          </template>
        </sidenav-collapse>
      </li>

      <li class="nav-item">
        <sidenav-collapse url="#" :aria-controls="''" v-bind:collapse="false" collapseRef="support" navText="Support">
          <template v-slot:icon>
            <i class="material-icons-round opacity-10 fs-5">help</i>
          </template>
        </sidenav-collapse>
      </li>

      <li class="mt-3 nav-item">
        <h6 class="text-xs ps-4 text-uppercase font-weight-bolder text-white"
          :class="this.$store.state.isRTL ? 'me-4' : 'ms-2'">
          ACCOUNT
        </h6>
      </li>

      <li class="nav-item">
        <sidenav-collapse url="#" :aria-controls="''" v-bind:collapse="false" collapseRef="user-profile" navText="Profile">
          <template v-slot:icon>
            <i class="material-icons-round opacity-10 fs-5">person</i>
          </template>
        </sidenav-collapse>
      </li>
    </ul>
    <div class="sidenav-footer position-absolute w-100 bottom-0">
      <div class="mx-3">
        <div class="text-center text-white text-sm mt-4">
          <p class="mb-0">CoWork Space</p>
          <p class="mb-0 text-xs opacity-8">Management Dashboard</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SidenavCollapse from "./SidenavCollapse.vue";

export default {
  name: "SidenavList",
  props: {
    cardBg: String
  },
  data() {
    return {
      title: "Soft UI Dashboard PRO",
      controls: "dashboardsExamples",
      isActive: "active"
    };
  },
  components: {
    SidenavCollapse
  },
  methods: {
    getRoute() {
      const routeArr = this.$route.path.split("/");
      return routeArr[1];
    },
    logout() {
      this.$store.dispatch("auth/logout");
    }
  }
};
</script>
