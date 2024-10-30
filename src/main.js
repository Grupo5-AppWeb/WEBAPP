import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import Aura from '@primevue/themes/aura';
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';
import Card from "primevue/card";
import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import Menubar from "primevue/menubar";
import DataTable from "primevue/datatable";
import Column from "primevue/column";


import '@/assets/styles.scss';
import '@/assets/tailwind.css';

const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.app-dark'
        }
    }
});
app.use(ToastService);
app.use(ConfirmationService);

app.component('pv-card', Card);
app.component('pv-toolbar', Toolbar);
app.component('pv-button', Button);
app.component('pv-menubar', Menubar);
app.component('pv-dataTable', DataTable);
app.component('pv-column', Column);

app.mount('#app');
