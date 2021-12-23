var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "Fakerlandia"
    ],
    "map": {
        "debug": false,
        "cacheTag": "1640239508",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "Este",
            "zoomLevels": 8,
            "defaultZoom": 1,
            "maxZoom": 8,
            "path": "este",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "Fakerlandia",
            "last_rendertime": 1640233090,
            "imgextension": "jpg",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -180,
                64,
                548
            ],
            "minZoom": 0,
            "spawn": [
                0,
                104,
                0
            ],
            "north_direction": 0
        },
        {
            "name": "Oeste",
            "zoomLevels": 8,
            "defaultZoom": 1,
            "maxZoom": 8,
            "path": "oeste",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "Fakerlandia",
            "last_rendertime": 1640233090,
            "imgextension": "jpg",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -180,
                64,
                548
            ],
            "minZoom": 0,
            "spawn": [
                0,
                104,
                0
            ],
            "north_direction": 2
        }
    ]
};
