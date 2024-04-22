import { Area } from "./domain";

export async function fetchAreas(params: { is_not_license: string, opi: string }): Promise<Area[]> {
    const queryParams = new URLSearchParams(params).toString();
    const response = await fetch(`http://127.0.0.1:8000/api/area/?${queryParams}`, {
        method: 'GET',
    })

    const data = await response.json()

    return data.map((obj: any) => {
        const area = new Area();
        area.name = obj.name;
        area.location = [obj.coordinates[0].long, obj.coordinates[0].lat];
        area.opiList = obj.opi;
        area.ownerList = obj.owners;
        return area;
    })
}



export async function fetchAreasMock(params: { is_not_license: string, opi: string }): Promise<Area[]> {
    console.log(params);
    console.log(MOCK_DATA);
    const data = MOCK_DATA.filter((obj: any) => {
        if (params.is_not_license == 'True' && obj.owners.length != 0) {
            return false;
        }
        if (obj.opi.filter((o: any) => o.name.includes(params.opi)).length == 0) {
            return false;
        }
        return true;
    });
    return data.map((obj: any) => {
        const area = new Area();
        area.name = obj.name;
        area.location = [obj.coordinates[0].long, obj.coordinates[0].lat];
        area.opiList = obj.opi;
        area.ownerList = obj.owners;
        return area;
    })
}

const MOCK_DATA = [
    {
        "owners": [
            {
                "address": "г. Екатеринбург",
                "name": "Иванов Иван Иванович",
                "registration": "2024-01-26",
                "end_date": "2024-07-26"
            }
        ],
        "coordinates": [
            {
                "id": 2,
                "title": "123",
                "long": "50.100",
                "lat": "55.100"
            }
        ],
        "name": "Участок 1",
        "opi": [
            {
                "id": 4,
                "code": 321,
                "name": "Железо"
            }
        ],
        "category_a": 1,
        "category_b": 2,
        "category_c1": 3,
        "category_c2": 4
    },
    {
        "owners": [],
        "coordinates": [
            {
                "id": 3,
                "title": "49.3 58.2",
                "long": "49.300",
                "lat": "58.200"
            }
        ],
        "name": "Участок 2",
        "opi": [
            {
                "id": 5,
                "code": 7,
                "name": "Известняк"
            }
        ],
        "category_a": 4,
        "category_b": 2,
        "category_c1": 1,
        "category_c2": 6
    },
    {
        "owners": [
            {
                "address": "г. Екатеринбург",
                "name": "Иванов Иван Иванович",
                "registration": "2024-01-26",
                "end_date": "2024-02-26"
            }
        ],
        "coordinates": [
            {
                "id": 4,
                "title": "57.7 56.2",
                "long": "57.700",
                "lat": "56.200"
            }
        ],
        "name": "Участок 3",
        "opi": [
            {
                "id": 5,
                "code": 7,
                "name": "Известняк"
            }
        ],
        "category_a": 3,
        "category_b": 6,
        "category_c1": 3,
        "category_c2": 1
    }
]