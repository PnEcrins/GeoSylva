{
mviewer.customLayers.esp_sapro = {};
mviewer.customLayers.esp_sapro.layer = new ol.layer.Vector({
        source: new ol.source.Vector({
           //essai en ligne //
           url: "https://geonature.ecrins-parcnational.fr/dataexport/esp_saprox.geojson",
           //URL locale : //
           //url :"apps/geosylva/data/esp_saprox.geojson",
            format: new ol.format.GeoJSON()
        }),
style_sapro : new ol.style.Style({
    image: new ol.style.Circle({
        fill: new ol.style.Fill({
            color: 'rgba(149, 92, 22,0.1)'
        }),
        stroke: new ol.style.Stroke({
            color: 'rgba(149, 92, 22, 1.0)',
            width: 1
        }),
        radius: 5
    })
})      
  });
mviewer.customLayers.esp_sapro.handle = false;
} 



