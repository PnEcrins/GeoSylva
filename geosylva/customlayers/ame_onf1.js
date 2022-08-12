
let styleONFAME = [new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: 'rgba(0, 0, 0, 255)',
            width: 0.4,
          }),
          fill: new ol.style.Fill({
            color: '#3BB109', 
          })
})] ; 

let styleONFATT = [new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: 'rgba(0, 0, 0, 255)',
            width: 0.4,
          }),
          fill: new ol.style.Fill({
            color: '#00D209)', 
          })
})] ; 

let styleONFREG = [new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: 'rgba(0, 0, 0, 255)',
            width: 0.4,
          }),
          fill: new ol.style.Fill({
            color: '#87E97B', 
          })
})] ; 

let styleONFTAI = [new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: 'rgba(0, 0, 0, 255)',
            width: 0.4,
          }),
          fill: new ol.style.Fill({
            color: '#83970B', 
          })
})] ; 

let styleONFPAR = [new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: 'rgba(0, 0, 0, 255)',
            width: 0.4,
          }),
          fill: new ol.style.Fill({
            color: '#D80808', 
          })
})] ; 

let styleONFIRR = [new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: 'rgba(0, 0, 0, 255)',
            width: 0.4,
          }),
          fill: new ol.style.Fill({
            color: '#15FF00', 
          })
})] ; 

let styleONFTSF = [new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: 'rgba(0, 0, 0, 255)',
            width: 0.4,
          }),
          fill: new ol.style.Fill({
            color: '#C3FF00', 
          })
})] ; 

let styleONFHSY = [new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: 'rgba(0, 0, 0, 255)',
            width: 0.4,
          }),
          fill: new ol.style.Fill({
            color: '#58C3A8', 
          })
})] ; 

let styleONFHSN = [new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: 'rgba(0, 0, 0, 255)',
            width: 0.4,
          }),
          fill: new ol.style.Fill({
            color: '#00C085', 
          })
})] ; 

let styleONFILS = [new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: 'rgba(0, 0, 0, 255)',
            width: 0.4,
          }),
          fill: new ol.style.Fill({
            color: '#007FC0', 
          })
})] ; 

let styleONFILV = [new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: 'rgba(0, 0, 0, 255)',
            width: 0.4,
          }),
          fill: new ol.style.Fill({
            color: '#0099E7', 
          })
})] ; 

let styleONFX = [new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: 'rgba(0, 0, 0, 255)',
            width: 0.4,
          }),
          fill: new ol.style.Fill({
            color: '#A7A7A7', 
          })
})] ; 
















let legend = { items: [] };

legend.items.push({styles:styleONFAME, type: "Amélioration", geometry: "Polygon"});
legend.items.push({styles:styleONFATT, type: "Attente", geometry: "Polygon"});
legend.items.push({styles:styleONFREG, type: "Regénération", geometry: "Polygon"});
legend.items.push({styles:styleONFTAI, type: "Taillis", geometry: "Polygon"});
legend.items.push({styles:styleONFPAR, type: "Parquet", geometry: "Polygon"});
legend.items.push({styles:styleONFIRR, type: "Irrégulier", geometry: "Polygon"});
legend.items.push({styles:styleONFTSF, type: "Taillis sous futaie", geometry: "Polygon"});
legend.items.push({styles:styleONFHSY, type: "Hors sylviculture", geometry: "Polygon"});
legend.items.push({styles:styleONFHSN, type: "Hors sylviculture en libre évolution", geometry: "Polygon"});
legend.items.push({styles:styleONFILS, type: "Îlot de sénescence", geometry: "Polygon"});
legend.items.push({styles:styleONFILV, type: "Îlot de vieillissement", geometry: "Polygon"});
legend.items.push({styles:styleONFX, type: "Non aménagé", geometry: "Polygon"});


let ame_onf = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "http://188.165.118.84/geoserver/cite/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=GeoSylva%3Aame_onf&maxFeatures=50000&outputFormat=application/json&srsName=EPSG:3857",
            format: new ol.format.GeoJSON()
        }),
        style: function(feature, resolution) {
            var stl;
            if(feature.get('code_ame') === 'AME') {
                stl = styleONFAME;
            } else if(feature.get('code_ame') === "ATT") {
                stl = styleONFATT;
            } else if(feature.get('code_ame') === "REG") {
                stl = styleONFREG;
            } else if(feature.get('code_ame') === "TAI") {
                stl = styleONFTAI;
            } else if(feature.get('code_ame') === "PAR") {
                stl = styleONFPAR;
            } else if(feature.get('code_ame') === "IRR") {
                stl = styleONFIRR;
            } else if(feature.get('code_ame') === "TSF") {
                stl = styleONFTSF;
            } else if(feature.get('code_ame') === "HSY") {
                stl = styleONFHSY;
            } else if(feature.get('code_ame') === "HSN") {
                stl = styleONFHSN;
            } else if(feature.get('code_ame') === "ILS") {
                stl = styleONFILS;
            } else if(feature.get('code_ame') === "ILV") {
                stl = styleONFILV;
            } else if(feature.get('code_ame') === "X") {
                stl = styleONFX;
            } 
            return stl;
        }

});



new CustomLayer("ame_onf", ame_onf, legend);

