import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import Aura from '@primevue/themes/aura';
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';
import Button from 'primevue/button';
import Toolbar from 'primevue/toolbar';
import Dialog from 'primevue/dialog';
import ConfirmDialog from 'primevue/confirmdialog';
import FloatLabel from 'primevue/floatlabel';
import InputNumber from 'primevue/inputnumber';
import Dropdown from 'primevue/dropdown';
import Tag from 'primevue/tag';
import InputText from 'primevue/inputtext';
import Card from "primevue/card";
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
app.component('pv-button', Button);
app.component('pv-confirm-dialog', ConfirmDialog);
app.component('pv-dialog', Dialog);
app.component('pv-toolbar', Toolbar);
app.component('pv-input-text', InputText);
app.component('pv-input-number', InputNumber);
app.component('pv-dropdown', Dropdown);
app.component('pv-float-label', FloatLabel);
app.component('pv-tag', Tag);

app.component('pv-card', Card);
app.component('pv-toolbar', Toolbar);
app.component('pv-button', Button);
app.component('pv-menubar', Menubar);
app.component('pv-dataTable', DataTable);
app.component('pv-column', Column);

app.mount('#app');
