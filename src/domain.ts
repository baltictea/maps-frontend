import { LngLat } from "@yandex/ymaps3-types";

export class Area {
    id!: Number;

    deposit!: Deposit;
    opiList!: OPI[];
    coordinatesList!: LngLat[];
    license: License | undefined;
    reserves!: Reserves;
}

export class OPI {
    id!: Number;
    code!: Number;
    name!: String;
}

export class Owner {
    name!: String;
    address!: String;
    registration!: Date;
    registrationEnd!: Date;
}

export class Deposit {

}

export class License {

}

export class Reserves {
    A!: Number;
    B!: Number;
    C!: Number;
    C1!: Number;
}