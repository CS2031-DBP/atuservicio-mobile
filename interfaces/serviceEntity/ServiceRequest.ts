import { ServiceTag } from "../../enums/ServiceTags";

export interface ServiceRequest{
    description: string,
    name: string,
    address: string,
    latitude: number,
    longitude: number,
    suggestedPrice: number,
    tags: ServiceTag[];
}