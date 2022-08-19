
let styleCom = [new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: 'rgba(0, 0, 0, 255)',
            width: 0.4,
          }),
          fill: new ol.style.Fill({
            color: '#3BB109', 
          })
})] ; 


let legend = { items: [] };

legend.items.push({styles:styleCom, type: "Communes", geometry: "Polygon"});


let com = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "https://geoserver.ecrins.net/geoserver/cite/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=GeoSylva%3Acom&maxFeatures=50000&outputFormat=application/json&srsName=EPSG:3857",
            format: new ol.format.GeoJSON()
        }),
       
});



new CustomLayer("com", com, legend);





