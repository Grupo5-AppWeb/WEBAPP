import {SupplierProfile} from '@/suppliers/user-management/profile/model/supplier-profile.entity';
import http from '@/shared/http-common';
import axios from 'axios';

export class SupplierProfileApiService {
    async getSupplierProfile(){
        const url = 'http://localhost:3000/Suppliers'
        const response = await axios.get(url);
        return response.data.map(supplierProfileData =>{
            return new SupplierProfile({
                id: supplierProfileData.id,
                name: supplierProfileData.name,
                address: supplierProfileData.address,
                email: supplierProfileData.email,
                phoneNumber: supplierProfileData.phoneNumber,
                contactPerson: supplierProfileData.contactPerson,
                description: supplierProfileData.description,
                businessType: supplierProfileData.businessType,
                ordersFinished: supplierProfileData.ordersFinished,
                ordersPending: supplierProfileData.ordersPending,
                password: supplierProfileData.password,
            })
        })
    }
    getAll() {
        return http.get(`/Suppliers`);
    }
    // Servicio para obtener un proveedor por su ID
    async getSupplierById(id) {
        const url = `http://localhost:3000/Suppliers/${id}`;
        try {
            const response = await axios.get(url);
            return new SupplierProfile({
                id: response.data.id,
                name: response.data.name,
                address: response.data.address,
                email: response.data.email,
                phoneNumber: response.data.phoneNumber,
                contactPerson: response.data.contactPerson,
                description: response.data.description,
                businessType: response.data.businessType,
                ordersFinished: response.data.ordersFinished,
                ordersPending: response.data.ordersPending,
            });
        } catch (error) {
            console.error('Error fetching supplier by ID:', error);
            throw error;
        }
    }

    // Servicio para actualizar un proveedor
    async updateSupplier(id, updatedData) {
        const url = `http://localhost:3000/Suppliers/${id}`;
        try {
            const response = await axios.put(url, updatedData);
            return new SupplierProfile({
                id: response.data.id,
                name: response.data.name,
                address: response.data.address,
                email: response.data.email,
                phoneNumber: response.data.phoneNumber,
                contactPerson: response.data.contactPerson,
                description: response.data.description,
                businessType: response.data.businessType,
                ordersFinished: response.data.ordersFinished,
                ordersPending: response.data.ordersPending,
            });
        } catch (error) {
            console.error('Error updating supplier:', error);
            throw error;
        }
    }
}
