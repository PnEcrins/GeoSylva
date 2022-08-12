
{
mviewer.customLayers.com_pne = {};
var com_pne = mviewer.customLayers.com_pne;

// Génération de la liste des légendes
com_pne.legend = {items: [{
        geometry: "Polygon",
        label: "com_pne",
        styles: [new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: 'RGBA(0,70,112,1)',
            width: 2
          }),
          fill: new ol.style.Fill({
            color: 'rgba(0, 0, 0, 0)',
            opacity : 0 
          })
})]
    }]
};

// Appel de la source de donnée (attention à la projection) et affichage du style sur la carte
mviewer.customLayers.com_pne.layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "http://188.165.118.84/geoserver/cite/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=GeoSylva%3Acom_pne&maxFeatures=500&outputFormat=application/json&srsName=EPSG:3857",
            format: new ol.format.GeoJSON()
        }),
        style: function(feature, resolution) {
            return com_pne.legend.items[0].styles;
        }
});
mviewer.customLayers.com_pne.handle = falé;
}

