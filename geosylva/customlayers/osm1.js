let stylerefuges = [new ol.style.Style({
        image: new ol.style.Circle({
            radius: 3,
            fill: new ol.style.Fill({
                color: '#8A5700'
            }),
            stroke: new ol.style.Stroke({color: 'black', width: 1})
        })
    })];

let styleruines = [new ol.style.Style({
        image: new ol.style.Circle({
            radius: 3,
            fill: new ol.style.Fill({
                color: '#7A7976'
            }),
            stroke: new ol.style.Stroke({color: 'black', width: 1})
        })
    })] ; 

let stylefontaine = [new ol.style.Style({
        image: new ol.style.Circle({
            radius: 3,
            fill: new ol.style.Fill({
                color: '#341D98'
            }),
            stroke: new ol.style.Stroke({color: 'black', width: 1})
        })
    })] ; 

let stylecroix = [new ol.style.Style({
        image: new ol.style.Circle({
            radius: 3,
            fill: new ol.style.Fill({
                color: '#7582F5'
            }),
            stroke: new ol.style.Stroke({color: 'black', width: 1})
        })
    })] ; 

let stylepdv = [new ol.style.Style({
        image: new ol.style.Circle({
            radius: 3,
            fill: new ol.style.Fill({
                color: '#FFF431'
            }),
            stroke: new ol.style.Stroke({color: 'black', width: 1})
        })
    })] ; 

let stylepdo = [new ol.style.Style({
        image: new ol.style.Circle({
            radius: 3,
            fill: new ol.style.Fill({
                color: '#49CCFF'
            }),
            stroke: new ol.style.Stroke({color: 'black', width: 1})
        })
    })] ; 


let legend = { items: [] };

legend.items.push({styles:stylerefuges, type: "Refuges", geometry: "Point"});
legend.items.push({styles:styleruines, type: "Ruines", geometry: "Point"});
legend.items.push({styles:stylepdo, type: "Points d'eau", geometry: "Point"});
legend.items.push({styles:stylecroix, type: "Croix", geometry: "Point"});
legend.items.push({styles:stylepdv, type: "Points de vue", geometry: "Point"});
legend.items.push({styles:stylefontaine, type: "Fontaine", geometry: "Point"});

let osm = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "http://188.165.118.84/geoserver/cite/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=GeoSylva%3Aosm__fusion&maxFeatures=1000&outputFormat=application/json&srsName=EPSG:3857",
            format: new ol.format.GeoJSON()
        }),
        style: function(feature, resolution) {
            var stl;
            if(feature.get('type') === 'Refuge') {
                stl = stylerefuges;
            } else if(feature.get('type') === "Ruines") {
                stl = styleruines;
            } else if(feature.get('type') === "Croix") {
                stl = stylecroix;
            } else if(feature.get('type') === "Fontaine") {
                stl = stylefontaine;
            } else if(feature.get('type') === "Point de vue") {
                stl = stylepdv;
            } else if(feature.get('type') === "Eau potable") {
                stl = stylepdo;
            } 
            return stl;
        }

});



new CustomLayer("osm__fusion", osm, legend);

