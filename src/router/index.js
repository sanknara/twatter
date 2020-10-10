import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import { users } from "../assets/users";
import Home from '../views/Home.vue'
import UserProfile from '../views/UserProfile.vue'
import Admin from '../views/Admin.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user/:userId',
    name: 'UserProfile',
    component: UserProfile
  }, {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
      requiresAdmin: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Router Guards : 
// Function runs before or after the router navigations :
router.beforeEach(async (to, from, next) => {
  const user = store.state.User.user; // Use Module Name to access user object

  if (!user) {
    // Use Module Name before to access action methods :(Optional)
    store.dispatch('setUser', users[0]); // call dispatch to execute actions, await for asyn call
  }

  const isAdmin = false;
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin);

  if (requiresAdmin && !isAdmin) next({ name: 'Home' });
  else next();

})

export default router
