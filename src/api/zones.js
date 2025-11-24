import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000",
});

export const getZones = async () => {
    const zones = [
        {
            id: 1,
            name: "Zona Residencial Norte",
            type: "Residencial",
            geometry: {
                type: "Feature",
                geometry: {
                    type: "Polygon",
                    coordinates: [
                        [
                            [-45.807120, -22.247011],
                            [-45.707117, -22.246419],
                            [-45.706941, -22.246419],
                            [-45.706941, -22.247011],
                            [-45.707117, -22.247011]
                        ]
                    ]
                },
                properties: {},
            }
        },
                {
            id: 2,
            name: "Zona Residencial Oeste",
            type: "Residencial",
            geometry: {
                type: "Feature",
                geometry: {
                    type: "Polygon",
                    coordinates: [
                        [
                            [-45.807120, -22.247011],
                            [-45.707117, -22.246419],
                            [-45.706941, -22.246419],
                            [-45.706941, -22.247011],
                            [-45.707117, -22.247011]
                        ]
                    ]
                },
                properties: {},
            }
        },
                {
            id: 3,
            name: "Zona Residencial Sul",
            type: "Residencial",
            geometry: {
                type: "Feature",
                geometry: {
                    type: "Polygon",
                    coordinates: [
                        [
                            [-45.807120, -22.247011],
                            [-45.707117, -22.246419],
                            [-45.706941, -22.246419],
                            [-45.706941, -22.247011],
                            [-45.707117, -22.247011]
                        ]
                    ]
                },
                properties: {},
            }
        },
                {
            id: 4,
            name: "Zona Residencial Lest",
            type: "Residencial",
            geometry: {
                type: "Feature",
                geometry: {
                    type: "Polygon",
                    coordinates: [
                        [
                            [-45.807120, -22.247011],
                            [-45.707117, -22.246419],
                            [-45.706941, -22.246419],
                            [-45.706941, -22.247011],
                            [-45.707117, -22.247011]
                        ]
                    ]
                },
                properties: {},
            }
        }
    ];

    return { data: zones };
};

export const createZone = (data) => api.post("/zones", data);
