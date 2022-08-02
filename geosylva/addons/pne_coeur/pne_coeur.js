
 // Définition de la couche représentant le custom layer
  const coeur = new ol.layer.Vector({
      source: new ol.source.Vector({
            url: "http://localhost:8080/geoserver/GeoSylva/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=GeoSylva%3Acom&maxFeatures=500&outputFormat=application/json&srsName=EPSG:3857",
          maxZoom: 20
      })
  });

  // Votre code ici
  ...

  /* Créer le custom layer à partir du code ci-dessus */
  // Le custom layer aura pour id "monCustomLayer" et pour couche aerial définit dans l'exemple
  new CustomLayer("monCustomLayer", coeur);


