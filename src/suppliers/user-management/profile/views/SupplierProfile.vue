<script setup>
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import Avatar from 'primevue/avatar';
import { getCurrentInstance, onMounted, ref } from 'vue';
import { SupplierProfileApiService } from '@/suppliers/user-management/profile/services/supplier-profile-api.service';

const profile = ref({});
const dialogVisible = ref(false);
const selectedProfile = ref(null);

const profileService = new SupplierProfileApiService();
const { proxy } = getCurrentInstance();

// Función para abrir el diálogo y cargar los datos del proveedor


// Función para guardar los cambios del perfil
const saveProfile = async () => {
    await profileService.updateSupplier(selectedProfile.value.id, selectedProfile.value);
    dialogVisible.value = false;
    // Notificación de éxito
    notifySuccessfulAction('Proveedor actualizado exitosamente');
};

// Función para mostrar una notificación de éxito
function notifySuccessfulAction(message) {
    proxy.$toast.add({
        severity: 'success',
        summary: 'Success',
        detail: message,
        life: 3000
    });
};

onMounted(async () => {

    profile.value = await profileService.getSupplierById(1);
    console.log(profile.value);

});

const openEditDialog = async () => {
    selectedProfile.value = profile.value;
    dialogVisible.value = true;
};

</script>

<template>
    <Splitter style="height: 640px">
        <SplitterPanel class="flex flex-col items-center justify-center" :size="20" :minSize="10">
            <Avatar icon="pi pi-user" class="mr-2" size="xlarge"></Avatar>
            <br>
            <p><strong>{{ profile.contactPerson }}</strong></p>
        </SplitterPanel>
        <SplitterPanel :size="80">
            <Splitter layout="vertical">
                <SplitterPanel class="flex items-center justify-center p-4" :size="15" v-if="profile">
                    <h6><strong>{{ profile.name }}</strong></h6>
                </SplitterPanel>
                <SplitterPanel :size="85">
                    <Splitter>
                        <SplitterPanel class="flex flex-col items-center justify-center p-8" :size="80" v-if="profile">
                            <div class="w-full max-w-md text-left space-y-6">
                                <p class="text-lg"><strong>Email:</strong> {{ profile.email }}</p>
                                <p class="text-lg"><strong>Addres:</strong> {{ profile.address }}</p>
                                <p class="text-lg"><strong>Business Type:</strong> {{ profile.businessType }}</p>
                                <p class="text-lg"><strong>Phone:</strong> {{ profile.phoneNumber }}</p>
                            </div>
                            <pv-button label="Update" icon="pi pi-pencil" class="p-button-success mt-8"
                                       @click="openEditDialog()" />
                        </SplitterPanel>
                    </Splitter>
                </SplitterPanel>
            </Splitter>
        </SplitterPanel>
    </Splitter>


    <pv-dialog v-model:visible="dialogVisible" modal class="p-fluid" header="Actualizar Proveedor">
        <div v-if="selectedProfile">
            <div class="p-fluid">
                <div class="p-field mt-5">
                    <pv-float-label>
                        <label for="name">Nombre</label>
                        <pv-input-text v-model="selectedProfile.name" id="name" />
                    </pv-float-label>
                </div>
                <div class="p-field mt-5">
                    <pv-float-label>
                        <label for="email">Email</label>
                        <pv-input-text v-model="selectedProfile.email" id="email" />
                    </pv-float-label>
                </div>
                <div class="p-field mt-5">
                    <pv-float-label>
                        <label for="address">Dirección</label>
                        <pv-input-text v-model="selectedProfile.address" id="address" />
                    </pv-float-label>
                </div>
                <div class="p-field mt-5">
                    <pv-float-label>
                        <label for="phoneNumber">Teléfono</label>
                        <pv-input-text v-model="selectedProfile.phoneNumber" id="phoneNumber" />
                    </pv-float-label>
                </div>
                <div class="p-field mt-5">
                    <pv-float-label>
                        <label for="contactPerson">Persona de Contacto</label>
                        <pv-input-text v-model="selectedProfile.contactPerson" id="contactPerson" />
                    </pv-float-label>
                </div>
                <div class="p-field mt-5">
                    <pv-float-label>
                        <label for="businessType">Tipo de Negocio</label>
                        <pv-input-text v-model="selectedProfile.businessType" id="businessType" />
                    </pv-float-label>
                </div>
            </div>
        </div>
        <template #footer>
            <div class="flex justify-content-end">
                <pv-button label="Cancelar" icon="pi pi-times" class="p-button-text" @click="dialogVisible = false" />
                <pv-button label="Guardar" icon="pi pi-check" class="p-button-text" @click="saveProfile" />
            </div>
        </template>
    </pv-dialog>

</template>

<style scoped lang="scss">

</style>
