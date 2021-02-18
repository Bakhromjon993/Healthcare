import VueRouter from 'vue-router'
import main from './views/main.vue'
import patients from './views/patients.vue'
import doctors from './views/doctors.vue'
import appointments from './views/appointments.vue'
import departments from './views/departments.vue'


export default new VueRouter({
  routes: [
    {
      path: '',
      components: main
    },
    {
      path: '/patients',
      component: patients
    },
    {
      path: '/doctors',
      component: doctors
    },
    {
      path: '/appointments',
      component: appointments
    },
    {
      path: '/departments',
      component: departments
    },
  ],
  mode: 'history'
})