ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-12682889.053304, 3612101.949855, -12228342.042095, 3907271.098720]);
var wms_layers = [];


    var projection_AerialPimaCounty2021_0 = ol.proj.get('EPSG:3857');
    var projectionExtent_AerialPimaCounty2021_0 = projection_AerialPimaCounty2021_0.getExtent();
    var size_AerialPimaCounty2021_0 = ol.extent.getWidth(projectionExtent_AerialPimaCounty2021_0) / 256;
    var resolutions_AerialPimaCounty2021_0 = new Array(14);
    var matrixIds_AerialPimaCounty2021_0 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_AerialPimaCounty2021_0[z] = size_AerialPimaCounty2021_0 / Math.pow(2, z);
        matrixIds_AerialPimaCounty2021_0[z] = z;
    }
    var lyr_AerialPimaCounty2021_0 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                              url: "https://images.tucsonaz.gov/images/rest/services/AerialImagery/ORTHO_2021/ImageServer/WMTS/1.0.0/WMTSCapabilities.xml",
    attributions: ' ',
                                "layer": "AerialImagery_ORTHO_2021",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/jpgpng',
              projection: projection_AerialPimaCounty2021_0,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_AerialPimaCounty2021_0),
                resolutions: resolutions_AerialPimaCounty2021_0,
                matrixIds: matrixIds_AerialPimaCounty2021_0
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: "Aerial - Pima County - 2021",
                            opacity: 1.0,
                            
                            
                          });

    var projection_AerialTucson2022_1 = ol.proj.get('EPSG:3857');
    var projectionExtent_AerialTucson2022_1 = projection_AerialTucson2022_1.getExtent();
    var size_AerialTucson2022_1 = ol.extent.getWidth(projectionExtent_AerialTucson2022_1) / 256;
    var resolutions_AerialTucson2022_1 = new Array(14);
    var matrixIds_AerialTucson2022_1 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_AerialTucson2022_1[z] = size_AerialTucson2022_1 / Math.pow(2, z);
        matrixIds_AerialTucson2022_1[z] = z;
    }
    var lyr_AerialTucson2022_1 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                              url: "https://images.tucsonaz.gov/images/rest/services/AerialImagery/ORTHO_2022_New/ImageServer/WMTS/1.0.0/WMTSCapabilities.xml",
    attributions: ' ',
                                "layer": "AerialImagery_ORTHO_2022_New",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/jpgpng',
              projection: projection_AerialTucson2022_1,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_AerialTucson2022_1),
                resolutions: resolutions_AerialTucson2022_1,
                matrixIds: matrixIds_AerialTucson2022_1
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: "Aerial - Tucson - 2022",
                            opacity: 1.0,
                            
                            
                          });

        var lyr_GoogleMaps_2 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelliteHybrid_3 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_4 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ResidentialUnder250k_5 = new ol.format.GeoJSON();
var features_ResidentialUnder250k_5 = format_ResidentialUnder250k_5.readFeatures(json_ResidentialUnder250k_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidentialUnder250k_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidentialUnder250k_5.addFeatures(features_ResidentialUnder250k_5);
var lyr_ResidentialUnder250k_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidentialUnder250k_5,
maxResolution:2.52824320422621,
 
                style: style_ResidentialUnder250k_5,
                popuplayertitle: "Residential Under 250k",
                interactive: true,
/*     title: 'Residential Under 250k<br />\
    <img src="styles/legend/ResidentialUnder250k_5_0.png" /> 200k - 300k<br />\
    <img src="styles/legend/ResidentialUnder250k_5_1.png" /> 100k - 200k<br />\
    <img src="styles/legend/ResidentialUnder250k_5_2.png" /> Under 100k<br />' */
        });
var format_Residential250k400k_6 = new ol.format.GeoJSON();
var features_Residential250k400k_6 = format_Residential250k400k_6.readFeatures(json_Residential250k400k_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Residential250k400k_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Residential250k400k_6.addFeatures(features_Residential250k400k_6);
var lyr_Residential250k400k_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Residential250k400k_6,
maxResolution:2.52824320422621,
 
                style: style_Residential250k400k_6,
                popuplayertitle: "Residential 250k - 400k",
                interactive: true,
/*     title: 'Residential 250k - 400k<br />\
    <img src="styles/legend/Residential250k400k_6_0.png" /> 300k - 400k<br />\
    <img src="styles/legend/Residential250k400k_6_1.png" /> 200k - 300k<br />' */
        });
var format_ResidentialAbove400k_7 = new ol.format.GeoJSON();
var features_ResidentialAbove400k_7 = format_ResidentialAbove400k_7.readFeatures(json_ResidentialAbove400k_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidentialAbove400k_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidentialAbove400k_7.addFeatures(features_ResidentialAbove400k_7);
var lyr_ResidentialAbove400k_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidentialAbove400k_7,
maxResolution:2.52824320422621,
 
                style: style_ResidentialAbove400k_7,
                popuplayertitle: "Residential Above 400k",
                interactive: true,
/*     title: 'Residential Above 400k<br />\
    <img src="styles/legend/ResidentialAbove400k_7_0.png" /> Above 2m<br />\
    <img src="styles/legend/ResidentialAbove400k_7_1.png" /> 1.75m - 2m<br />\
    <img src="styles/legend/ResidentialAbove400k_7_2.png" /> 1.5m - 1.75m<br />\
    <img src="styles/legend/ResidentialAbove400k_7_3.png" /> 1.25m - 1.5m<br />\
    <img src="styles/legend/ResidentialAbove400k_7_4.png" /> 1m - 1.25m<br />\
    <img src="styles/legend/ResidentialAbove400k_7_5.png" /> 900k - 1m<br />\
    <img src="styles/legend/ResidentialAbove400k_7_6.png" /> 800k - 900k<br />\
    <img src="styles/legend/ResidentialAbove400k_7_7.png" /> 700k - 800k<br />\
    <img src="styles/legend/ResidentialAbove400k_7_8.png" /> 600k - 700k<br />\
    <img src="styles/legend/ResidentialAbove400k_7_9.png" /> 500k - 600k<br />\
    <img src="styles/legend/ResidentialAbove400k_7_10.png" /> 400k - 500k<br />' */
        });

        var lyr_ResidentialUnder400k_8 = new ol.layer.Tile({
            'title': 'Residential Under 400k<br />\
    <img src="styles/legend/Residential250k400k_6_0.png" /> 300k - 400k<br />\
    <img src="styles/legend/Residential250k400k_6_1.png" /> 200k - 300k<br />\
    <img src="styles/legend/ResidentialUnder250k_5_1.png" /> 100k - 200k<br />\
    <img src="styles/legend/ResidentialUnder250k_5_2.png" /> Under 100k<br />',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Residential Under 400k/{z}/{x}/{y}.png'
            })
        });

        var lyr_ResidentialAbove400k_9 = new ol.layer.Tile({
            'title': 'Residential Above 400k<br />\
    <img src="styles/legend/ResidentialAbove400k_7_0.png" /> Above 2m<br />\
    <img src="styles/legend/ResidentialAbove400k_7_1.png" /> 1.75m - 2m<br />\
    <img src="styles/legend/ResidentialAbove400k_7_2.png" /> 1.5m - 1.75m<br />\
    <img src="styles/legend/ResidentialAbove400k_7_3.png" /> 1.25m - 1.5m<br />\
    <img src="styles/legend/ResidentialAbove400k_7_4.png" /> 1m - 1.25m<br />\
    <img src="styles/legend/ResidentialAbove400k_7_5.png" /> 900k - 1m<br />\
    <img src="styles/legend/ResidentialAbove400k_7_6.png" /> 800k - 900k<br />\
    <img src="styles/legend/ResidentialAbove400k_7_7.png" /> 700k - 800k<br />\
    <img src="styles/legend/ResidentialAbove400k_7_8.png" /> 600k - 700k<br />\
    <img src="styles/legend/ResidentialAbove400k_7_9.png" /> 500k - 600k<br />\
    <img src="styles/legend/ResidentialAbove400k_7_10.png" /> 400k - 500k<br />',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Residential Above 400k/{z}/{x}/{y}.png'
            })
        });
var group_Parcels = new ol.layer.Group({
                                layers: [lyr_ResidentialUnder250k_5,lyr_Residential250k400k_6,lyr_ResidentialAbove400k_7,lyr_ResidentialUnder400k_8,lyr_ResidentialAbove400k_9,],
                                fold: "open",
                                title: "Parcels"});
var group_BaseMaps = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_2,lyr_GoogleSatelliteHybrid_3,lyr_GoogleSatellite_4,],
                                fold: "open",
                                title: "Base Maps"});
var group_Aerials = new ol.layer.Group({
                                layers: [lyr_AerialPimaCounty2021_0,lyr_AerialTucson2022_1,],
                                fold: "open",
                                title: "Aerials"});

lyr_AerialPimaCounty2021_0.setVisible(true);lyr_AerialTucson2022_1.setVisible(true);lyr_GoogleMaps_2.setVisible(true);lyr_GoogleSatelliteHybrid_3.setVisible(true);lyr_GoogleSatellite_4.setVisible(true);lyr_ResidentialUnder250k_5.setVisible(true);lyr_Residential250k400k_6.setVisible(true);lyr_ResidentialAbove400k_7.setVisible(true);lyr_ResidentialUnder400k_8.setVisible(true);lyr_ResidentialAbove400k_9.setVisible(true);
var layersList = [group_Aerials,group_BaseMaps,group_Parcels];
lyr_ResidentialUnder250k_5.set('fieldAliases', {'PARCEL': 'PARCEL', 'GISACRES': 'GISACRES', 'LINK': 'LINK', 'ADDRESS_OL': 'ADDRESS_OL', 'PARCEL_USE': 'PARCEL_USE', 'LOT': 'LOT', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'TAXAREA': 'TAXAREA', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'TAXYR': 'TAXYR', 'LIMNET': 'LIMNET', 'FCV': 'FCV', });
lyr_Residential250k400k_6.set('fieldAliases', {'PARCEL': 'PARCEL', 'GISACRES': 'GISACRES', 'LINK': 'LINK', 'ADDRESS_OL': 'ADDRESS_OL', 'PARCEL_USE': 'PARCEL_USE', 'LOT': 'LOT', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'TAXAREA': 'TAXAREA', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'TAXYR': 'TAXYR', 'LIMNET': 'LIMNET', 'FCV': 'FCV', });
lyr_ResidentialAbove400k_7.set('fieldAliases', {'PARCEL': 'PARCEL', 'GISACRES': 'GISACRES', 'LINK': 'LINK', 'ADDRESS_OL': 'ADDRESS_OL', 'PARCEL_USE': 'PARCEL_USE', 'LOT': 'LOT', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'TAXAREA': 'TAXAREA', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'TAXYR': 'TAXYR', 'LIMNET': 'LIMNET', 'FCV': 'FCV', });
lyr_ResidentialUnder250k_5.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'TAXAREA': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', });
lyr_Residential250k400k_6.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'TAXAREA': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', });
lyr_ResidentialAbove400k_7.set('fieldImages', {'PARCEL': '', 'GISACRES': '', 'LINK': '', 'ADDRESS_OL': '', 'PARCEL_USE': '', 'LOT': '', 'MAIL1': '', 'MAIL2': '', 'MAIL3': '', 'MAIL4': '', 'MAIL5': '', 'TAXAREA': '', 'ZIP': '', 'ZIP4': '', 'TAXYR': '', 'LIMNET': '', 'FCV': '', });
lyr_ResidentialUnder250k_5.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', });
lyr_Residential250k400k_6.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', });
lyr_ResidentialAbove400k_7.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', });
lyr_ResidentialAbove400k_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});