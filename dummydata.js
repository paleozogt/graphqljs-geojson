exports.dummyFeature = {
    type: "Feature",
    geometry: {
        type: "LineString",
        coordinates: [
            [102.0, 0.0], [103.0, 1.0], [104.0, 0.0], [105.0, 1.0]
        ]
    },
    properties: {
        prop0: "value0",
        prop1: 0.0,
        prop3: "dummy"
    }
}

exports.dummyFeatureCollection = {
    type: "FeatureCollection",
    features: [
        this.dummyFeature
    ]
}
