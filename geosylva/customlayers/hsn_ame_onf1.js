
let stylehsname = [new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: 'rgba(0, 0, 0, 255)',
            width: 0.4,
          }),
          fill: new ol.style.Fill({
            color: '#00C085', 
          })
})] ; 





let legend = { items: [] };

legend.items.push({styles:stylehsname, type: "Forêts publiques en libre évolution", geometry: "Polygon"});


let hsn_ame_onf = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "http://188.165.118.84/geoserver/cite/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=GeoSylva%3Ahsn_ame_onf&maxFeatures=50000&outputFormat=application/json&srsName=EPSG:3857",
            format: new ol.format.GeoJSON()
        }),
       
});





new CustomLayer("hsn_ame_onf", hsn_ame_onf, legend);


