{
mviewer.customLayers.esp_rem = {};
mviewer.customLayers.esp_rem.layer = new ol.layer.Vector({
        source: new ol.source.Vector({
           //essai en ligne //
           // url: "https://geonature.ecrins-parcnational.fr/dataexport/Geosylva_especes_com.geojson",//
           //URL locale : //
           url :"apps/geosylva/data/Geosylva_especes_com.geojson",
            format: new ol.format.GeoJSON()
        }),
style: new ol.style.Style({
    image: new ol.style.Circle({
        fill: new ol.style.Fill({
            color: 'rgba(152, 29, 144,0.1)'
        }),
        stroke: new ol.style.Stroke({
            color: 'rgba(152, 29, 144, 0.8)',
            width: 1
        }),
        radius: 3
    })
})      
  });
mviewer.customLayers.esp_rem.handle = false;
} 



