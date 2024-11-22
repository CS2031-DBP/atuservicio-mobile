export interface RegisterClient {
    email: string;
    password: string;
    phoneNumber: string;
    address: string;
    firstName: string;
    lastName: string;
}

export interface RegisterFreelancer {
    email: string;
    password: string;
    phoneNumber: string;
    address: string;
    firstName: string;
    lastName: string;
    age: number;
    dni: number;
}

export interface RegisterEnterprise {
    email: string;
    password: string;
    phoneNumber: string;
    ruc: string;
    name: string;
    businessSector: string;
    size: string;
    address: string;
}
  
  