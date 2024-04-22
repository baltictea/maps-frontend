import { LngLat } from "@yandex/ymaps3-types";

export class Deposit {
    constructor(name: string, coordinates: LngLat, area: LngLat[]) {
        this.name = name;
        this.coordinates = coordinates;
        this.area = area;
    }

    name: string;
    coordinates: LngLat;
    area: LngLat[];
}