import { LngLat } from "@yandex/ymaps3-types";

export class Deposit {
    id!: number;
    name!: string;
    otk!: OTK;
}

export class OTK {
    id!: number;
    code!: number;
    name!: string;
}

export class Area {
    id!: number;
    coordinates!: LngLat;
    // category

    opi!: OPI;
    license!: License;
}

export class OPI {
    id!: number;
    code!: number;
    name!: string;
}

export class License {
    id!: number;
    registration!: Date;
    end!: Date;
    num!: string;

    owner!: Owner;
}

export class Owner {
    id!: number;
    name!: string;
    address!: string;
}