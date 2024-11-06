export class SupplierProfile{
    constructor({id, name, address, email, phoneNumber, contactPerson, description, businessType,ordersFinished,ordersPending,password}) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.contactPerson = contactPerson;
        this.description = description;
        this.businessType = businessType;
        this.ordersFinished = ordersFinished;
        this.ordersPending = ordersPending;
        this.password = password;
    }

    static fromApiResponse(apiData) {
        return new SupplierProfile(apiData.id, apiData.name,
            apiData.address, apiData.email, apiData.phoneNumber, apiData.contactPerson,
            apiData.description, apiData.businessType, apiData.ordersFinished, apiData.ordersPending,
            apiData.password);
    }
}
