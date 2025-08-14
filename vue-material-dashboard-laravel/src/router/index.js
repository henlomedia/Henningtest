import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Booking from "../views/Booking.vue";
import Members from "../views/Members.vue";
import Messages from "../views/Messages.vue";
import Resources from "../views/Resources.vue";
import Support from "../views/Support.vue";
import Login from "../views/examples-api/Login.vue";
import Signup from "../views/examples-api/Signup.vue";
import PasswordForgot from "../views/examples-api/PasswordForgot.vue";
import PasswordReset from "../views/examples-api/PasswordReset.vue";
import UserProfile from "../views/examples-api/profile/UserProfile.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/login",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/booking",
    name: "Booking",
    component: Booking,
  },
  {
    path: "/members",
    name: "Members",
    component: Members,
  },
  {
    path: "/messages",
    name: "Messages",
    component: Messages,
  },
  {
    path: "/resources",
    name: "Resources",
    component: Resources,
  },
  {
    path: "/support",
    name: "Support",
    component: Support,
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup
  },
  {
    path: "/password-forgot",
    name: "Password Forgot",
    component: PasswordForgot
  },
  {
    path: "/password-reset",
    name: "Password Reset",
    component: PasswordReset
  },
  {
    path: "/user-profile",
    name: "User Profile",
    component: UserProfile
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
