ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-12437122.412360, 3724398.184484, -12266784.647429, 3834107.253423]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ResidentialCommonAreaOverview_3 = new ol.format.GeoJSON();
var features_ResidentialCommonAreaOverview_3 = format_ResidentialCommonAreaOverview_3.readFeatures(json_ResidentialCommonAreaOverview_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidentialCommonAreaOverview_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidentialCommonAreaOverview_3.addFeatures(features_ResidentialCommonAreaOverview_3);
var lyr_ResidentialCommonAreaOverview_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidentialCommonAreaOverview_3, minResolution:16.802679691357177,

                style: style_ResidentialCommonAreaOverview_3,
                popuplayertitle: "Residential Common Area Overview",
                interactive: true,
                title: '<img src="styles/legend/ResidentialCommonAreaOverview_3.png" /> Residential Common Area Overview'
            });
var format_RemainingParcels_4 = new ol.format.GeoJSON();
var features_RemainingParcels_4 = format_RemainingParcels_4.readFeatures(json_RemainingParcels_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RemainingParcels_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RemainingParcels_4.addFeatures(features_RemainingParcels_4);
var lyr_RemainingParcels_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RemainingParcels_4,
maxResolution:5.600893230452393,
 
                style: style_RemainingParcels_4,
                popuplayertitle: "Remaining Parcels",
                interactive: true,
                title: '<img src="styles/legend/RemainingParcels_4.png" /> Remaining Parcels'
            });
var format_Subdivisions_5 = new ol.format.GeoJSON();
var features_Subdivisions_5 = format_Subdivisions_5.readFeatures(json_Subdivisions_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Subdivisions_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Subdivisions_5.addFeatures(features_Subdivisions_5);
var lyr_Subdivisions_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Subdivisions_5,
maxResolution:16.802679691357177,
 
                style: style_Subdivisions_5,
                popuplayertitle: "Subdivisions",
                interactive: true,
                title: '<img src="styles/legend/Subdivisions_5.png" /> Subdivisions'
            });
var format_Indian_6 = new ol.format.GeoJSON();
var features_Indian_6 = format_Indian_6.readFeatures(json_Indian_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Indian_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Indian_6.addFeatures(features_Indian_6);
var lyr_Indian_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Indian_6, 
                style: style_Indian_6,
                popuplayertitle: "Indian",
                interactive: true,
                title: '<img src="styles/legend/Indian_6.png" /> Indian'
            });
var format_Federal_7 = new ol.format.GeoJSON();
var features_Federal_7 = format_Federal_7.readFeatures(json_Federal_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Federal_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Federal_7.addFeatures(features_Federal_7);
var lyr_Federal_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Federal_7, 
                style: style_Federal_7,
                popuplayertitle: "Federal",
                interactive: true,
                title: '<img src="styles/legend/Federal_7.png" /> Federal'
            });
var format_State_8 = new ol.format.GeoJSON();
var features_State_8 = format_State_8.readFeatures(json_State_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_State_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_State_8.addFeatures(features_State_8);
var lyr_State_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_State_8, 
                style: style_State_8,
                popuplayertitle: "State",
                interactive: true,
                title: '<img src="styles/legend/State_8.png" /> State'
            });
var format_County_9 = new ol.format.GeoJSON();
var features_County_9 = format_County_9.readFeatures(json_County_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_County_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_County_9.addFeatures(features_County_9);
var lyr_County_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_County_9, 
                style: style_County_9,
                popuplayertitle: "County",
                interactive: true,
                title: '<img src="styles/legend/County_9.png" /> County'
            });
var format_Municipal_10 = new ol.format.GeoJSON();
var features_Municipal_10 = format_Municipal_10.readFeatures(json_Municipal_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipal_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipal_10.addFeatures(features_Municipal_10);
var lyr_Municipal_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municipal_10, 
                style: style_Municipal_10,
                popuplayertitle: "Municipal",
                interactive: true,
                title: '<img src="styles/legend/Municipal_10.png" /> Municipal'
            });
var format_Industrial_11 = new ol.format.GeoJSON();
var features_Industrial_11 = format_Industrial_11.readFeatures(json_Industrial_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Industrial_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Industrial_11.addFeatures(features_Industrial_11);
var lyr_Industrial_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Industrial_11, 
                style: style_Industrial_11,
                popuplayertitle: "Industrial",
                interactive: true,
                title: '<img src="styles/legend/Industrial_11.png" /> Industrial'
            });
var format_Commercial_12 = new ol.format.GeoJSON();
var features_Commercial_12 = format_Commercial_12.readFeatures(json_Commercial_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Commercial_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Commercial_12.addFeatures(features_Commercial_12);
var lyr_Commercial_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Commercial_12, 
                style: style_Commercial_12,
                popuplayertitle: "Commercial",
                interactive: true,
                title: '<img src="styles/legend/Commercial_12.png" /> Commercial'
            });
var format_Condos_13 = new ol.format.GeoJSON();
var features_Condos_13 = format_Condos_13.readFeatures(json_Condos_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Condos_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Condos_13.addFeatures(features_Condos_13);
var lyr_Condos_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Condos_13, 
                style: style_Condos_13,
                popuplayertitle: "Condos",
                interactive: true,
                title: '<img src="styles/legend/Condos_13.png" /> Condos'
            });
var format_Residential_14 = new ol.format.GeoJSON();
var features_Residential_14 = format_Residential_14.readFeatures(json_Residential_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Residential_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Residential_14.addFeatures(features_Residential_14);
var lyr_Residential_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Residential_14, 
                style: style_Residential_14,
                popuplayertitle: "Residential",
                interactive: true,
                title: '<img src="styles/legend/Residential_14.png" /> Residential'
            });
var format_IncompleteSubdivisionParcels_15 = new ol.format.GeoJSON();
var features_IncompleteSubdivisionParcels_15 = format_IncompleteSubdivisionParcels_15.readFeatures(json_IncompleteSubdivisionParcels_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IncompleteSubdivisionParcels_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IncompleteSubdivisionParcels_15.addFeatures(features_IncompleteSubdivisionParcels_15);
var lyr_IncompleteSubdivisionParcels_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IncompleteSubdivisionParcels_15, 
                style: style_IncompleteSubdivisionParcels_15,
                popuplayertitle: "Incomplete Subdivision Parcels",
                interactive: true,
                title: '<img src="styles/legend/IncompleteSubdivisionParcels_15.png" /> Incomplete Subdivision Parcels'
            });
var format_PartiallyCompleteStructures_16 = new ol.format.GeoJSON();
var features_PartiallyCompleteStructures_16 = format_PartiallyCompleteStructures_16.readFeatures(json_PartiallyCompleteStructures_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PartiallyCompleteStructures_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PartiallyCompleteStructures_16.addFeatures(features_PartiallyCompleteStructures_16);
var lyr_PartiallyCompleteStructures_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PartiallyCompleteStructures_16, 
                style: style_PartiallyCompleteStructures_16,
                popuplayertitle: "Partially Complete Structures",
                interactive: true,
                title: '<img src="styles/legend/PartiallyCompleteStructures_16.png" /> Partially Complete Structures'
            });
var format_ApartmentsSmall_17 = new ol.format.GeoJSON();
var features_ApartmentsSmall_17 = format_ApartmentsSmall_17.readFeatures(json_ApartmentsSmall_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ApartmentsSmall_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ApartmentsSmall_17.addFeatures(features_ApartmentsSmall_17);
var lyr_ApartmentsSmall_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ApartmentsSmall_17, 
                style: style_ApartmentsSmall_17,
                popuplayertitle: "Apartments - Small",
                interactive: true,
                title: '<img src="styles/legend/ApartmentsSmall_17.png" /> Apartments - Small'
            });
var format_ApartmentsMedium_18 = new ol.format.GeoJSON();
var features_ApartmentsMedium_18 = format_ApartmentsMedium_18.readFeatures(json_ApartmentsMedium_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ApartmentsMedium_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ApartmentsMedium_18.addFeatures(features_ApartmentsMedium_18);
var lyr_ApartmentsMedium_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ApartmentsMedium_18, 
                style: style_ApartmentsMedium_18,
                popuplayertitle: "Apartments - Medium",
                interactive: true,
                title: '<img src="styles/legend/ApartmentsMedium_18.png" /> Apartments - Medium'
            });
var format_ApartmentsLarge_19 = new ol.format.GeoJSON();
var features_ApartmentsLarge_19 = format_ApartmentsLarge_19.readFeatures(json_ApartmentsLarge_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ApartmentsLarge_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ApartmentsLarge_19.addFeatures(features_ApartmentsLarge_19);
var lyr_ApartmentsLarge_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ApartmentsLarge_19, 
                style: style_ApartmentsLarge_19,
                popuplayertitle: "Apartments - Large",
                interactive: true,
                title: '<img src="styles/legend/ApartmentsLarge_19.png" /> Apartments - Large'
            });
var format_TownhouseCondoCommonArea_20 = new ol.format.GeoJSON();
var features_TownhouseCondoCommonArea_20 = format_TownhouseCondoCommonArea_20.readFeatures(json_TownhouseCondoCommonArea_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TownhouseCondoCommonArea_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TownhouseCondoCommonArea_20.addFeatures(features_TownhouseCondoCommonArea_20);
var lyr_TownhouseCondoCommonArea_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TownhouseCondoCommonArea_20, 
                style: style_TownhouseCondoCommonArea_20,
                popuplayertitle: "Townhouse & Condo Common Area",
                interactive: true,
                title: '<img src="styles/legend/TownhouseCondoCommonArea_20.png" /> Townhouse & Condo Common Area'
            });
var format_ResidentialCommonArea_21 = new ol.format.GeoJSON();
var features_ResidentialCommonArea_21 = format_ResidentialCommonArea_21.readFeatures(json_ResidentialCommonArea_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidentialCommonArea_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidentialCommonArea_21.addFeatures(features_ResidentialCommonArea_21);
var lyr_ResidentialCommonArea_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidentialCommonArea_21,
maxResolution:16.802679691357177,
 
                style: style_ResidentialCommonArea_21,
                popuplayertitle: "Residential Common Area",
                interactive: true,
                title: '<img src="styles/legend/ResidentialCommonArea_21.png" /> Residential Common Area'
            });
var format_Under100k_22 = new ol.format.GeoJSON();
var features_Under100k_22 = format_Under100k_22.readFeatures(json_Under100k_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Under100k_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Under100k_22.addFeatures(features_Under100k_22);
var lyr_Under100k_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Under100k_22,
maxResolution:5.600893230452393,
 
                style: style_Under100k_22,
                popuplayertitle: "Under 100k",
                interactive: true,
                title: '<img src="styles/legend/Under100k_22.png" /> Under 100k'
            });
var format_100k200k_23 = new ol.format.GeoJSON();
var features_100k200k_23 = format_100k200k_23.readFeatures(json_100k200k_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_100k200k_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_100k200k_23.addFeatures(features_100k200k_23);
var lyr_100k200k_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_100k200k_23,
maxResolution:5.600893230452393,
 
                style: style_100k200k_23,
                popuplayertitle: "100k - 200k",
                interactive: true,
                title: '<img src="styles/legend/100k200k_23.png" /> 100k - 200k'
            });
var format_200k300k_24 = new ol.format.GeoJSON();
var features_200k300k_24 = format_200k300k_24.readFeatures(json_200k300k_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_200k300k_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_200k300k_24.addFeatures(features_200k300k_24);
var lyr_200k300k_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_200k300k_24,
maxResolution:5.600893230452393,
 
                style: style_200k300k_24,
                popuplayertitle: "200k - 300k",
                interactive: true,
                title: '<img src="styles/legend/200k300k_24.png" /> 200k - 300k'
            });
var format_300k400k_25 = new ol.format.GeoJSON();
var features_300k400k_25 = format_300k400k_25.readFeatures(json_300k400k_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_300k400k_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_300k400k_25.addFeatures(features_300k400k_25);
var lyr_300k400k_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_300k400k_25,
maxResolution:5.600893230452393,
 
                style: style_300k400k_25,
                popuplayertitle: "300k - 400k",
                interactive: true,
                title: '<img src="styles/legend/300k400k_25.png" /> 300k - 400k'
            });
var format_400k500k_26 = new ol.format.GeoJSON();
var features_400k500k_26 = format_400k500k_26.readFeatures(json_400k500k_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_400k500k_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_400k500k_26.addFeatures(features_400k500k_26);
var lyr_400k500k_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_400k500k_26,
maxResolution:5.600893230452393,
 
                style: style_400k500k_26,
                popuplayertitle: "400k - 500k",
                interactive: true,
                title: '<img src="styles/legend/400k500k_26.png" /> 400k - 500k'
            });
var format_500k600k_27 = new ol.format.GeoJSON();
var features_500k600k_27 = format_500k600k_27.readFeatures(json_500k600k_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_500k600k_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_500k600k_27.addFeatures(features_500k600k_27);
var lyr_500k600k_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_500k600k_27, 
                style: style_500k600k_27,
                popuplayertitle: "500k - 600k",
                interactive: true,
                title: '<img src="styles/legend/500k600k_27.png" /> 500k - 600k'
            });
var format_600k700k_28 = new ol.format.GeoJSON();
var features_600k700k_28 = format_600k700k_28.readFeatures(json_600k700k_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_600k700k_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_600k700k_28.addFeatures(features_600k700k_28);
var lyr_600k700k_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_600k700k_28, 
                style: style_600k700k_28,
                popuplayertitle: "600k - 700k",
                interactive: true,
                title: '<img src="styles/legend/600k700k_28.png" /> 600k - 700k'
            });
var format_700k800k_29 = new ol.format.GeoJSON();
var features_700k800k_29 = format_700k800k_29.readFeatures(json_700k800k_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_700k800k_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_700k800k_29.addFeatures(features_700k800k_29);
var lyr_700k800k_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_700k800k_29, 
                style: style_700k800k_29,
                popuplayertitle: "700k - 800k",
                interactive: true,
                title: '<img src="styles/legend/700k800k_29.png" /> 700k - 800k'
            });
var format_800k900k_30 = new ol.format.GeoJSON();
var features_800k900k_30 = format_800k900k_30.readFeatures(json_800k900k_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_800k900k_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_800k900k_30.addFeatures(features_800k900k_30);
var lyr_800k900k_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_800k900k_30, 
                style: style_800k900k_30,
                popuplayertitle: "800k - 900k",
                interactive: true,
                title: '<img src="styles/legend/800k900k_30.png" /> 800k - 900k'
            });
var format_900k1m_31 = new ol.format.GeoJSON();
var features_900k1m_31 = format_900k1m_31.readFeatures(json_900k1m_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_900k1m_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_900k1m_31.addFeatures(features_900k1m_31);
var lyr_900k1m_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_900k1m_31, 
                style: style_900k1m_31,
                popuplayertitle: "900k - 1m",
                interactive: true,
                title: '<img src="styles/legend/900k1m_31.png" /> 900k - 1m'
            });
var format_1m125m_32 = new ol.format.GeoJSON();
var features_1m125m_32 = format_1m125m_32.readFeatures(json_1m125m_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1m125m_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1m125m_32.addFeatures(features_1m125m_32);
var lyr_1m125m_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1m125m_32, 
                style: style_1m125m_32,
                popuplayertitle: "1m - 1.25m",
                interactive: true,
                title: '<img src="styles/legend/1m125m_32.png" /> 1m - 1.25m'
            });
var format_125m15m_33 = new ol.format.GeoJSON();
var features_125m15m_33 = format_125m15m_33.readFeatures(json_125m15m_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_125m15m_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_125m15m_33.addFeatures(features_125m15m_33);
var lyr_125m15m_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_125m15m_33, 
                style: style_125m15m_33,
                popuplayertitle: "1.25m - 1.5m",
                interactive: true,
                title: '<img src="styles/legend/125m15m_33.png" /> 1.25m - 1.5m'
            });
var format_15m175m_34 = new ol.format.GeoJSON();
var features_15m175m_34 = format_15m175m_34.readFeatures(json_15m175m_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15m175m_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15m175m_34.addFeatures(features_15m175m_34);
var lyr_15m175m_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15m175m_34, 
                style: style_15m175m_34,
                popuplayertitle: "1.5m - 1.75m",
                interactive: true,
                title: '<img src="styles/legend/15m175m_34.png" /> 1.5m - 1.75m'
            });
var format_175m2m_35 = new ol.format.GeoJSON();
var features_175m2m_35 = format_175m2m_35.readFeatures(json_175m2m_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_175m2m_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_175m2m_35.addFeatures(features_175m2m_35);
var lyr_175m2m_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_175m2m_35, 
                style: style_175m2m_35,
                popuplayertitle: "1.75m - 2m",
                interactive: true,
                title: '<img src="styles/legend/175m2m_35.png" /> 1.75m - 2m'
            });
var format_2m25m_36 = new ol.format.GeoJSON();
var features_2m25m_36 = format_2m25m_36.readFeatures(json_2m25m_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2m25m_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2m25m_36.addFeatures(features_2m25m_36);
var lyr_2m25m_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2m25m_36, 
                style: style_2m25m_36,
                popuplayertitle: "2m - 2.5m",
                interactive: true,
                title: '<img src="styles/legend/2m25m_36.png" /> 2m - 2.5m'
            });
var format_25mAbove_37 = new ol.format.GeoJSON();
var features_25mAbove_37 = format_25mAbove_37.readFeatures(json_25mAbove_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_25mAbove_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_25mAbove_37.addFeatures(features_25mAbove_37);
var lyr_25mAbove_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_25mAbove_37, 
                style: style_25mAbove_37,
                popuplayertitle: "2.5m & Above",
                interactive: true,
                title: '<img src="styles/legend/25mAbove_37.png" /> 2.5m & Above'
            });
var group_ResidentialHomesbyValue = new ol.layer.Group({
                                layers: [lyr_Under100k_22,lyr_100k200k_23,lyr_200k300k_24,lyr_300k400k_25,lyr_400k500k_26,lyr_500k600k_27,lyr_600k700k_28,lyr_700k800k_29,lyr_800k900k_30,lyr_900k1m_31,lyr_1m125m_32,lyr_125m15m_33,lyr_15m175m_34,lyr_175m2m_35,lyr_2m25m_36,lyr_25mAbove_37,],
                                fold: "open",
                                title: "Residential Homes by Value"});
var group_CommonArea = new ol.layer.Group({
                                layers: [lyr_TownhouseCondoCommonArea_20,lyr_ResidentialCommonArea_21,],
                                fold: "open",
                                title: "Common Area"});
var group_Apartments = new ol.layer.Group({
                                layers: [lyr_ApartmentsSmall_17,lyr_ApartmentsMedium_18,lyr_ApartmentsLarge_19,],
                                fold: "open",
                                title: "Apartments"});
var group_VacantLand = new ol.layer.Group({
                                layers: [lyr_Indian_6,lyr_Federal_7,lyr_State_8,lyr_County_9,lyr_Municipal_10,lyr_Industrial_11,lyr_Commercial_12,lyr_Condos_13,lyr_Residential_14,lyr_IncompleteSubdivisionParcels_15,lyr_PartiallyCompleteStructures_16,],
                                fold: "open",
                                title: "Vacant Land"});
var group_Parcels = new ol.layer.Group({
                                layers: [lyr_RemainingParcels_4,lyr_Subdivisions_5,],
                                fold: "open",
                                title: "Parcels"});
var group_TestLayers = new ol.layer.Group({
                                layers: [lyr_ResidentialCommonAreaOverview_3,],
                                fold: "open",
                                title: "Test Layers"});
var group_BaseMaps = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_GoogleSatelliteHybrid_1,lyr_GoogleSatellite_2,],
                                fold: "open",
                                title: "Base Maps"});

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_ResidentialCommonAreaOverview_3.setVisible(true);lyr_RemainingParcels_4.setVisible(true);lyr_Subdivisions_5.setVisible(true);lyr_Indian_6.setVisible(true);lyr_Federal_7.setVisible(true);lyr_State_8.setVisible(true);lyr_County_9.setVisible(true);lyr_Municipal_10.setVisible(true);lyr_Industrial_11.setVisible(true);lyr_Commercial_12.setVisible(true);lyr_Condos_13.setVisible(true);lyr_Residential_14.setVisible(true);lyr_IncompleteSubdivisionParcels_15.setVisible(true);lyr_PartiallyCompleteStructures_16.setVisible(true);lyr_ApartmentsSmall_17.setVisible(true);lyr_ApartmentsMedium_18.setVisible(true);lyr_ApartmentsLarge_19.setVisible(true);lyr_TownhouseCondoCommonArea_20.setVisible(true);lyr_ResidentialCommonArea_21.setVisible(true);lyr_Under100k_22.setVisible(true);lyr_100k200k_23.setVisible(true);lyr_200k300k_24.setVisible(true);lyr_300k400k_25.setVisible(true);lyr_400k500k_26.setVisible(true);lyr_500k600k_27.setVisible(true);lyr_600k700k_28.setVisible(true);lyr_700k800k_29.setVisible(true);lyr_800k900k_30.setVisible(true);lyr_900k1m_31.setVisible(true);lyr_1m125m_32.setVisible(true);lyr_125m15m_33.setVisible(true);lyr_15m175m_34.setVisible(true);lyr_175m2m_35.setVisible(true);lyr_2m25m_36.setVisible(true);lyr_25mAbove_37.setVisible(true);
var layersList = [group_BaseMaps,group_TestLayers,group_Parcels,group_VacantLand,group_Apartments,group_CommonArea,group_ResidentialHomesbyValue];
lyr_ResidentialCommonAreaOverview_3.set('fieldAliases', {'FID': 'FID', });
lyr_RemainingParcels_4.set('fieldAliases', {'ADDRESS_OL': 'ADDRESS_OL', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'LIMNET': 'LIMNET', 'FCV': 'FCV', 'GISACRES': 'GISACRES', 'TAXYR': 'TAXYR', 'PARCEL_USE': 'PARCEL_USE', 'LOT': 'LOT', 'TAXAREA': 'TAXAREA', 'PARCEL': 'PARCEL', 'LINK': 'LINK', });
lyr_Subdivisions_5.set('fieldAliases', {'SUB_NAME': 'SUB_NAME', 'PAR_DENS': 'PAR_DENS', });
lyr_Indian_6.set('fieldAliases', {'ADDRESS_OL': 'ADDRESS_OL', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'LIMNET': 'LIMNET', 'FCV': 'FCV', 'GISACRES': 'GISACRES', 'TAXYR': 'TAXYR', 'PARCEL_USE': 'PARCEL_USE', 'LOT': 'LOT', 'TAXAREA': 'TAXAREA', 'PARCEL': 'PARCEL', 'LINK': 'LINK', });
lyr_Federal_7.set('fieldAliases', {'ADDRESS_OL': 'ADDRESS_OL', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'LIMNET': 'LIMNET', 'FCV': 'FCV', 'GISACRES': 'GISACRES', 'TAXYR': 'TAXYR', 'PARCEL_USE': 'PARCEL_USE', 'LOT': 'LOT', 'TAXAREA': 'TAXAREA', 'PARCEL': 'PARCEL', 'LINK': 'LINK', });
lyr_State_8.set('fieldAliases', {'ADDRESS_OL': 'ADDRESS_OL', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'LIMNET': 'LIMNET', 'FCV': 'FCV', 'GISACRES': 'GISACRES', 'TAXYR': 'TAXYR', 'PARCEL_USE': 'PARCEL_USE', 'LOT': 'LOT', 'TAXAREA': 'TAXAREA', 'PARCEL': 'PARCEL', 'LINK': 'LINK', });
lyr_County_9.set('fieldAliases', {'ADDRESS_OL': 'ADDRESS_OL', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'LIMNET': 'LIMNET', 'FCV': 'FCV', 'GISACRES': 'GISACRES', 'TAXYR': 'TAXYR', 'PARCEL_USE': 'PARCEL_USE', 'LOT': 'LOT', 'TAXAREA': 'TAXAREA', 'PARCEL': 'PARCEL', 'LINK': 'LINK', });
lyr_Municipal_10.set('fieldAliases', {'ADDRESS_OL': 'ADDRESS_OL', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'LIMNET': 'LIMNET', 'FCV': 'FCV', 'GISACRES': 'GISACRES', 'TAXYR': 'TAXYR', 'PARCEL_USE': 'PARCEL_USE', 'LOT': 'LOT', 'TAXAREA': 'TAXAREA', 'PARCEL': 'PARCEL', 'LINK': 'LINK', });
lyr_Industrial_11.set('fieldAliases', {'ADDRESS_OL': 'ADDRESS_OL', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'LIMNET': 'LIMNET', 'FCV': 'FCV', 'GISACRES': 'GISACRES', 'TAXYR': 'TAXYR', 'PARCEL_USE': 'PARCEL_USE', 'LOT': 'LOT', 'TAXAREA': 'TAXAREA', 'PARCEL': 'PARCEL', 'LINK': 'LINK', });
lyr_Commercial_12.set('fieldAliases', {'ADDRESS_OL': 'ADDRESS_OL', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'LIMNET': 'LIMNET', 'FCV': 'FCV', 'GISACRES': 'GISACRES', 'TAXYR': 'TAXYR', 'PARCEL_USE': 'PARCEL_USE', 'LOT': 'LOT', 'TAXAREA': 'TAXAREA', 'PARCEL': 'PARCEL', 'LINK': 'LINK', });
lyr_Condos_13.set('fieldAliases', {'ADDRESS_OL': 'ADDRESS_OL', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'LIMNET': 'LIMNET', 'FCV': 'FCV', 'GISACRES': 'GISACRES', 'TAXYR': 'TAXYR', 'PARCEL_USE': 'PARCEL_USE', 'LOT': 'LOT', 'TAXAREA': 'TAXAREA', 'PARCEL': 'PARCEL', 'LINK': 'LINK', });
lyr_Residential_14.set('fieldAliases', {'ADDRESS_OL': 'ADDRESS_OL', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'LIMNET': 'LIMNET', 'FCV': 'FCV', 'GISACRES': 'GISACRES', 'TAXYR': 'TAXYR', 'PARCEL_USE': 'PARCEL_USE', 'LOT': 'LOT', 'TAXAREA': 'TAXAREA', 'PARCEL': 'PARCEL', 'LINK': 'LINK', });
lyr_IncompleteSubdivisionParcels_15.set('fieldAliases', {'ADDRESS_OL': 'ADDRESS_OL', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'LIMNET': 'LIMNET', 'FCV': 'FCV', 'GISACRES': 'GISACRES', 'TAXYR': 'TAXYR', 'PARCEL_USE': 'PARCEL_USE', 'LOT': 'LOT', 'TAXAREA': 'TAXAREA', 'PARCEL': 'PARCEL', 'LINK': 'LINK', });
lyr_PartiallyCompleteStructures_16.set('fieldAliases', {'ADDRESS_OL': 'ADDRESS_OL', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'LIMNET': 'LIMNET', 'FCV': 'FCV', 'GISACRES': 'GISACRES', 'TAXYR': 'TAXYR', 'PARCEL_USE': 'PARCEL_USE', 'LOT': 'LOT', 'TAXAREA': 'TAXAREA', 'PARCEL': 'PARCEL', 'LINK': 'LINK', });
lyr_ApartmentsSmall_17.set('fieldAliases', {'ADDRESS_OL': 'ADDRESS_OL', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'LIMNET': 'LIMNET', 'FCV': 'FCV', 'GISACRES': 'GISACRES', 'TAXYR': 'TAXYR', 'PARCEL_USE': 'PARCEL_USE', 'LOT': 'LOT', 'TAXAREA': 'TAXAREA', 'PARCEL': 'PARCEL', 'LINK': 'LINK', });
lyr_ApartmentsMedium_18.set('fieldAliases', {'ADDRESS_OL': 'ADDRESS_OL', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'LIMNET': 'LIMNET', 'FCV': 'FCV', 'GISACRES': 'GISACRES', 'TAXYR': 'TAXYR', 'PARCEL_USE': 'PARCEL_USE', 'LOT': 'LOT', 'TAXAREA': 'TAXAREA', 'PARCEL': 'PARCEL', 'LINK': 'LINK', });
lyr_ApartmentsLarge_19.set('fieldAliases', {'ADDRESS_OL': 'ADDRESS_OL', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'LIMNET': 'LIMNET', 'FCV': 'FCV', 'GISACRES': 'GISACRES', 'TAXYR': 'TAXYR', 'PARCEL_USE': 'PARCEL_USE', 'LOT': 'LOT', 'TAXAREA': 'TAXAREA', 'PARCEL': 'PARCEL', 'LINK': 'LINK', });
lyr_TownhouseCondoCommonArea_20.set('fieldAliases', {'ADDRESS_OL': 'ADDRESS_OL', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'LIMNET': 'LIMNET', 'FCV': 'FCV', 'GISACRES': 'GISACRES', 'TAXYR': 'TAXYR', 'PARCEL_USE': 'PARCEL_USE', 'LOT': 'LOT', 'TAXAREA': 'TAXAREA', 'PARCEL': 'PARCEL', 'LINK': 'LINK', });
lyr_ResidentialCommonArea_21.set('fieldAliases', {'ADDRESS_OL': 'ADDRESS_OL', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'LIMNET': 'LIMNET', 'FCV': 'FCV', 'GISACRES': 'GISACRES', 'TAXYR': 'TAXYR', 'PARCEL_USE': 'PARCEL_USE', 'LOT': 'LOT', 'TAXAREA': 'TAXAREA', 'PARCEL': 'PARCEL', 'LINK': 'LINK', });
lyr_Under100k_22.set('fieldAliases', {'ADDRESS_OL': 'ADDRESS_OL', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'LIMNET': 'LIMNET', 'FCV': 'FCV', 'GISACRES': 'GISACRES', 'TAXYR': 'TAXYR', 'PARCEL_USE': 'PARCEL_USE', 'LOT': 'LOT', 'TAXAREA': 'TAXAREA', 'PARCEL': 'PARCEL', 'LINK': 'LINK', });
lyr_100k200k_23.set('fieldAliases', {'ADDRESS_OL': 'ADDRESS_OL', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'LIMNET': 'LIMNET', 'FCV': 'FCV', 'GISACRES': 'GISACRES', 'TAXYR': 'TAXYR', 'PARCEL_USE': 'PARCEL_USE', 'LOT': 'LOT', 'TAXAREA': 'TAXAREA', 'PARCEL': 'PARCEL', 'LINK': 'LINK', });
lyr_200k300k_24.set('fieldAliases', {'ADDRESS_OL': 'ADDRESS_OL', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'LIMNET': 'LIMNET', 'FCV': 'FCV', 'GISACRES': 'GISACRES', 'TAXYR': 'TAXYR', 'PARCEL_USE': 'PARCEL_USE', 'LOT': 'LOT', 'TAXAREA': 'TAXAREA', 'PARCEL': 'PARCEL', 'LINK': 'LINK', });
lyr_300k400k_25.set('fieldAliases', {'ADDRESS_OL': 'ADDRESS_OL', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'LIMNET': 'LIMNET', 'FCV': 'FCV', 'GISACRES': 'GISACRES', 'TAXYR': 'TAXYR', 'PARCEL_USE': 'PARCEL_USE', 'LOT': 'LOT', 'TAXAREA': 'TAXAREA', 'PARCEL': 'PARCEL', 'LINK': 'LINK', });
lyr_400k500k_26.set('fieldAliases', {'ADDRESS_OL': 'ADDRESS_OL', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'LIMNET': 'LIMNET', 'FCV': 'FCV', 'GISACRES': 'GISACRES', 'TAXYR': 'TAXYR', 'PARCEL_USE': 'PARCEL_USE', 'LOT': 'LOT', 'TAXAREA': 'TAXAREA', 'PARCEL': 'PARCEL', 'LINK': 'LINK', });
lyr_500k600k_27.set('fieldAliases', {'ADDRESS_OL': 'ADDRESS_OL', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'LIMNET': 'LIMNET', 'FCV': 'FCV', 'GISACRES': 'GISACRES', 'TAXYR': 'TAXYR', 'PARCEL_USE': 'PARCEL_USE', 'LOT': 'LOT', 'TAXAREA': 'TAXAREA', 'PARCEL': 'PARCEL', 'LINK': 'LINK', });
lyr_600k700k_28.set('fieldAliases', {'ADDRESS_OL': 'ADDRESS_OL', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'LIMNET': 'LIMNET', 'FCV': 'FCV', 'GISACRES': 'GISACRES', 'TAXYR': 'TAXYR', 'PARCEL_USE': 'PARCEL_USE', 'LOT': 'LOT', 'TAXAREA': 'TAXAREA', 'PARCEL': 'PARCEL', 'LINK': 'LINK', });
lyr_700k800k_29.set('fieldAliases', {'ADDRESS_OL': 'ADDRESS_OL', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'LIMNET': 'LIMNET', 'FCV': 'FCV', 'GISACRES': 'GISACRES', 'TAXYR': 'TAXYR', 'PARCEL_USE': 'PARCEL_USE', 'LOT': 'LOT', 'TAXAREA': 'TAXAREA', 'PARCEL': 'PARCEL', 'LINK': 'LINK', });
lyr_800k900k_30.set('fieldAliases', {'ADDRESS_OL': 'ADDRESS_OL', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'LIMNET': 'LIMNET', 'FCV': 'FCV', 'GISACRES': 'GISACRES', 'TAXYR': 'TAXYR', 'PARCEL_USE': 'PARCEL_USE', 'LOT': 'LOT', 'TAXAREA': 'TAXAREA', 'PARCEL': 'PARCEL', 'LINK': 'LINK', });
lyr_900k1m_31.set('fieldAliases', {'ADDRESS_OL': 'ADDRESS_OL', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'LIMNET': 'LIMNET', 'FCV': 'FCV', 'GISACRES': 'GISACRES', 'TAXYR': 'TAXYR', 'PARCEL_USE': 'PARCEL_USE', 'LOT': 'LOT', 'TAXAREA': 'TAXAREA', 'PARCEL': 'PARCEL', 'LINK': 'LINK', });
lyr_1m125m_32.set('fieldAliases', {'ADDRESS_OL': 'ADDRESS_OL', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'LIMNET': 'LIMNET', 'FCV': 'FCV', 'GISACRES': 'GISACRES', 'TAXYR': 'TAXYR', 'PARCEL_USE': 'PARCEL_USE', 'LOT': 'LOT', 'TAXAREA': 'TAXAREA', 'PARCEL': 'PARCEL', 'LINK': 'LINK', });
lyr_125m15m_33.set('fieldAliases', {'ADDRESS_OL': 'ADDRESS_OL', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'LIMNET': 'LIMNET', 'FCV': 'FCV', 'GISACRES': 'GISACRES', 'TAXYR': 'TAXYR', 'PARCEL_USE': 'PARCEL_USE', 'LOT': 'LOT', 'TAXAREA': 'TAXAREA', 'PARCEL': 'PARCEL', 'LINK': 'LINK', });
lyr_15m175m_34.set('fieldAliases', {'ADDRESS_OL': 'ADDRESS_OL', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'LIMNET': 'LIMNET', 'FCV': 'FCV', 'GISACRES': 'GISACRES', 'TAXYR': 'TAXYR', 'PARCEL_USE': 'PARCEL_USE', 'LOT': 'LOT', 'TAXAREA': 'TAXAREA', 'PARCEL': 'PARCEL', 'LINK': 'LINK', });
lyr_175m2m_35.set('fieldAliases', {'ADDRESS_OL': 'ADDRESS_OL', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'LIMNET': 'LIMNET', 'FCV': 'FCV', 'GISACRES': 'GISACRES', 'TAXYR': 'TAXYR', 'PARCEL_USE': 'PARCEL_USE', 'LOT': 'LOT', 'TAXAREA': 'TAXAREA', 'PARCEL': 'PARCEL', 'LINK': 'LINK', });
lyr_2m25m_36.set('fieldAliases', {'ADDRESS_OL': 'ADDRESS_OL', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'LIMNET': 'LIMNET', 'FCV': 'FCV', 'GISACRES': 'GISACRES', 'TAXYR': 'TAXYR', 'PARCEL_USE': 'PARCEL_USE', 'LOT': 'LOT', 'TAXAREA': 'TAXAREA', 'PARCEL': 'PARCEL', 'LINK': 'LINK', });
lyr_25mAbove_37.set('fieldAliases', {'ADDRESS_OL': 'ADDRESS_OL', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'LIMNET': 'LIMNET', 'FCV': 'FCV', 'GISACRES': 'GISACRES', 'TAXYR': 'TAXYR', 'PARCEL_USE': 'PARCEL_USE', 'LOT': 'LOT', 'TAXAREA': 'TAXAREA', 'PARCEL': 'PARCEL', 'LINK': 'LINK', });
lyr_ResidentialCommonAreaOverview_3.set('fieldImages', {'FID': '', });
lyr_RemainingParcels_4.set('fieldImages', {'ADDRESS_OL': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', 'GISACRES': 'TextEdit', 'TAXYR': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'TAXAREA': 'TextEdit', 'PARCEL': 'TextEdit', 'LINK': 'TextEdit', });
lyr_Subdivisions_5.set('fieldImages', {'SUB_NAME': 'TextEdit', 'PAR_DENS': 'TextEdit', });
lyr_Indian_6.set('fieldImages', {'ADDRESS_OL': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', 'GISACRES': 'TextEdit', 'TAXYR': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'TAXAREA': 'TextEdit', 'PARCEL': 'TextEdit', 'LINK': 'TextEdit', });
lyr_Federal_7.set('fieldImages', {'ADDRESS_OL': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', 'GISACRES': 'TextEdit', 'TAXYR': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'TAXAREA': 'TextEdit', 'PARCEL': 'TextEdit', 'LINK': 'TextEdit', });
lyr_State_8.set('fieldImages', {'ADDRESS_OL': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', 'GISACRES': 'TextEdit', 'TAXYR': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'TAXAREA': 'TextEdit', 'PARCEL': 'TextEdit', 'LINK': 'TextEdit', });
lyr_County_9.set('fieldImages', {'ADDRESS_OL': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', 'GISACRES': 'TextEdit', 'TAXYR': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'TAXAREA': 'TextEdit', 'PARCEL': 'TextEdit', 'LINK': 'TextEdit', });
lyr_Municipal_10.set('fieldImages', {'ADDRESS_OL': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', 'GISACRES': 'TextEdit', 'TAXYR': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'TAXAREA': 'TextEdit', 'PARCEL': 'TextEdit', 'LINK': 'TextEdit', });
lyr_Industrial_11.set('fieldImages', {'ADDRESS_OL': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'LIMNET': 'TextEdit', 'FCV': 'TextEdit', 'GISACRES': 'TextEdit', 'TAXYR': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'TAXAREA': 'TextEdit', 'PARCEL': 'TextEdit', 'LINK': 'TextEdit', });
lyr_Commercial_12.set('fieldImages', {'ADDRESS_OL': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'LIMNET': 'TextEdit', 'FCV': 'TextEdit', 'GISACRES': 'TextEdit', 'TAXYR': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'TAXAREA': 'TextEdit', 'PARCEL': 'TextEdit', 'LINK': 'TextEdit', });
lyr_Condos_13.set('fieldImages', {'ADDRESS_OL': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'LIMNET': 'TextEdit', 'FCV': 'TextEdit', 'GISACRES': 'TextEdit', 'TAXYR': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'TAXAREA': 'TextEdit', 'PARCEL': 'TextEdit', 'LINK': 'TextEdit', });
lyr_Residential_14.set('fieldImages', {'ADDRESS_OL': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', 'GISACRES': 'TextEdit', 'TAXYR': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'TAXAREA': 'TextEdit', 'PARCEL': 'TextEdit', 'LINK': 'TextEdit', });
lyr_IncompleteSubdivisionParcels_15.set('fieldImages', {'ADDRESS_OL': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'LIMNET': 'TextEdit', 'FCV': 'TextEdit', 'GISACRES': 'TextEdit', 'TAXYR': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'TAXAREA': 'TextEdit', 'PARCEL': 'TextEdit', 'LINK': 'TextEdit', });
lyr_PartiallyCompleteStructures_16.set('fieldImages', {'ADDRESS_OL': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'LIMNET': 'TextEdit', 'FCV': 'TextEdit', 'GISACRES': 'TextEdit', 'TAXYR': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'TAXAREA': 'TextEdit', 'PARCEL': 'TextEdit', 'LINK': 'TextEdit', });
lyr_ApartmentsSmall_17.set('fieldImages', {'ADDRESS_OL': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', 'GISACRES': 'TextEdit', 'TAXYR': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'TAXAREA': 'TextEdit', 'PARCEL': 'TextEdit', 'LINK': 'TextEdit', });
lyr_ApartmentsMedium_18.set('fieldImages', {'ADDRESS_OL': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', 'GISACRES': 'TextEdit', 'TAXYR': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'TAXAREA': 'TextEdit', 'PARCEL': 'TextEdit', 'LINK': 'TextEdit', });
lyr_ApartmentsLarge_19.set('fieldImages', {'ADDRESS_OL': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', 'GISACRES': 'TextEdit', 'TAXYR': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'TAXAREA': 'TextEdit', 'PARCEL': 'TextEdit', 'LINK': 'TextEdit', });
lyr_TownhouseCondoCommonArea_20.set('fieldImages', {'ADDRESS_OL': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', 'GISACRES': 'TextEdit', 'TAXYR': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'TAXAREA': 'TextEdit', 'PARCEL': 'TextEdit', 'LINK': 'TextEdit', });
lyr_ResidentialCommonArea_21.set('fieldImages', {'ADDRESS_OL': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', 'GISACRES': 'TextEdit', 'TAXYR': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'TAXAREA': 'TextEdit', 'PARCEL': 'TextEdit', 'LINK': 'TextEdit', });
lyr_Under100k_22.set('fieldImages', {'ADDRESS_OL': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', 'GISACRES': 'TextEdit', 'TAXYR': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'TAXAREA': 'TextEdit', 'PARCEL': 'TextEdit', 'LINK': 'TextEdit', });
lyr_100k200k_23.set('fieldImages', {'ADDRESS_OL': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', 'GISACRES': 'TextEdit', 'TAXYR': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'TAXAREA': 'TextEdit', 'PARCEL': 'TextEdit', 'LINK': 'TextEdit', });
lyr_200k300k_24.set('fieldImages', {'ADDRESS_OL': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', 'GISACRES': 'TextEdit', 'TAXYR': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'TAXAREA': 'TextEdit', 'PARCEL': 'TextEdit', 'LINK': 'TextEdit', });
lyr_300k400k_25.set('fieldImages', {'ADDRESS_OL': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', 'GISACRES': 'TextEdit', 'TAXYR': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'TAXAREA': 'TextEdit', 'PARCEL': 'TextEdit', 'LINK': 'TextEdit', });
lyr_400k500k_26.set('fieldImages', {'ADDRESS_OL': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', 'GISACRES': 'TextEdit', 'TAXYR': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'TAXAREA': 'TextEdit', 'PARCEL': 'TextEdit', 'LINK': 'TextEdit', });
lyr_500k600k_27.set('fieldImages', {'ADDRESS_OL': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', 'GISACRES': 'TextEdit', 'TAXYR': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'TAXAREA': 'TextEdit', 'PARCEL': 'TextEdit', 'LINK': 'TextEdit', });
lyr_600k700k_28.set('fieldImages', {'ADDRESS_OL': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', 'GISACRES': 'TextEdit', 'TAXYR': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'TAXAREA': 'TextEdit', 'PARCEL': 'TextEdit', 'LINK': 'TextEdit', });
lyr_700k800k_29.set('fieldImages', {'ADDRESS_OL': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', 'GISACRES': 'TextEdit', 'TAXYR': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'TAXAREA': 'TextEdit', 'PARCEL': 'TextEdit', 'LINK': 'TextEdit', });
lyr_800k900k_30.set('fieldImages', {'ADDRESS_OL': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', 'GISACRES': 'TextEdit', 'TAXYR': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'TAXAREA': 'TextEdit', 'PARCEL': 'TextEdit', 'LINK': 'TextEdit', });
lyr_900k1m_31.set('fieldImages', {'ADDRESS_OL': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', 'GISACRES': 'TextEdit', 'TAXYR': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'TAXAREA': 'TextEdit', 'PARCEL': 'TextEdit', 'LINK': 'TextEdit', });
lyr_1m125m_32.set('fieldImages', {'ADDRESS_OL': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', 'GISACRES': 'TextEdit', 'TAXYR': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'TAXAREA': 'TextEdit', 'PARCEL': 'TextEdit', 'LINK': 'TextEdit', });
lyr_125m15m_33.set('fieldImages', {'ADDRESS_OL': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', 'GISACRES': 'TextEdit', 'TAXYR': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'TAXAREA': 'TextEdit', 'PARCEL': 'TextEdit', 'LINK': 'TextEdit', });
lyr_15m175m_34.set('fieldImages', {'ADDRESS_OL': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', 'GISACRES': 'TextEdit', 'TAXYR': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'TAXAREA': 'TextEdit', 'PARCEL': 'TextEdit', 'LINK': 'TextEdit', });
lyr_175m2m_35.set('fieldImages', {'ADDRESS_OL': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', 'GISACRES': 'TextEdit', 'TAXYR': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'TAXAREA': 'TextEdit', 'PARCEL': 'TextEdit', 'LINK': 'TextEdit', });
lyr_2m25m_36.set('fieldImages', {'ADDRESS_OL': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', 'GISACRES': 'TextEdit', 'TAXYR': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'TAXAREA': 'TextEdit', 'PARCEL': 'TextEdit', 'LINK': 'TextEdit', });
lyr_25mAbove_37.set('fieldImages', {'ADDRESS_OL': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', 'GISACRES': 'TextEdit', 'TAXYR': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'TAXAREA': 'TextEdit', 'PARCEL': 'TextEdit', 'LINK': 'TextEdit', });
lyr_ResidentialCommonAreaOverview_3.set('fieldLabels', {'FID': 'inline label - visible with data', });
lyr_RemainingParcels_4.set('fieldLabels', {'ADDRESS_OL': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'PARCEL': 'inline label - visible with data', 'LINK': 'inline label - visible with data', });
lyr_Subdivisions_5.set('fieldLabels', {'SUB_NAME': 'inline label - visible with data', 'PAR_DENS': 'inline label - visible with data', });
lyr_Indian_6.set('fieldLabels', {'ADDRESS_OL': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'PARCEL': 'inline label - visible with data', 'LINK': 'inline label - visible with data', });
lyr_Federal_7.set('fieldLabels', {'ADDRESS_OL': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'PARCEL': 'inline label - visible with data', 'LINK': 'inline label - visible with data', });
lyr_State_8.set('fieldLabels', {'ADDRESS_OL': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'PARCEL': 'inline label - visible with data', 'LINK': 'inline label - visible with data', });
lyr_County_9.set('fieldLabels', {'ADDRESS_OL': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'PARCEL': 'inline label - visible with data', 'LINK': 'inline label - visible with data', });
lyr_Municipal_10.set('fieldLabels', {'ADDRESS_OL': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'PARCEL': 'inline label - visible with data', 'LINK': 'inline label - visible with data', });
lyr_Industrial_11.set('fieldLabels', {'ADDRESS_OL': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'PARCEL': 'inline label - visible with data', 'LINK': 'inline label - visible with data', });
lyr_Commercial_12.set('fieldLabels', {'ADDRESS_OL': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'PARCEL': 'inline label - visible with data', 'LINK': 'inline label - visible with data', });
lyr_Condos_13.set('fieldLabels', {'ADDRESS_OL': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'PARCEL': 'inline label - visible with data', 'LINK': 'inline label - visible with data', });
lyr_Residential_14.set('fieldLabels', {'ADDRESS_OL': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'PARCEL': 'inline label - visible with data', 'LINK': 'inline label - visible with data', });
lyr_IncompleteSubdivisionParcels_15.set('fieldLabels', {'ADDRESS_OL': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'PARCEL': 'inline label - visible with data', 'LINK': 'inline label - visible with data', });
lyr_PartiallyCompleteStructures_16.set('fieldLabels', {'ADDRESS_OL': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'PARCEL': 'inline label - visible with data', 'LINK': 'inline label - visible with data', });
lyr_ApartmentsSmall_17.set('fieldLabels', {'ADDRESS_OL': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'PARCEL': 'inline label - visible with data', 'LINK': 'inline label - visible with data', });
lyr_ApartmentsMedium_18.set('fieldLabels', {'ADDRESS_OL': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'PARCEL': 'inline label - visible with data', 'LINK': 'inline label - visible with data', });
lyr_ApartmentsLarge_19.set('fieldLabels', {'ADDRESS_OL': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'PARCEL': 'inline label - visible with data', 'LINK': 'inline label - visible with data', });
lyr_TownhouseCondoCommonArea_20.set('fieldLabels', {'ADDRESS_OL': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'PARCEL': 'inline label - visible with data', 'LINK': 'inline label - visible with data', });
lyr_ResidentialCommonArea_21.set('fieldLabels', {'ADDRESS_OL': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'PARCEL': 'inline label - visible with data', 'LINK': 'inline label - visible with data', });
lyr_Under100k_22.set('fieldLabels', {'ADDRESS_OL': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'PARCEL': 'inline label - visible with data', 'LINK': 'inline label - visible with data', });
lyr_100k200k_23.set('fieldLabels', {'ADDRESS_OL': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'PARCEL': 'inline label - visible with data', 'LINK': 'inline label - visible with data', });
lyr_200k300k_24.set('fieldLabels', {'ADDRESS_OL': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'PARCEL': 'inline label - visible with data', 'LINK': 'inline label - visible with data', });
lyr_300k400k_25.set('fieldLabels', {'ADDRESS_OL': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'PARCEL': 'inline label - visible with data', 'LINK': 'inline label - visible with data', });
lyr_400k500k_26.set('fieldLabels', {'ADDRESS_OL': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'PARCEL': 'inline label - visible with data', 'LINK': 'inline label - visible with data', });
lyr_500k600k_27.set('fieldLabels', {'ADDRESS_OL': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'PARCEL': 'inline label - visible with data', 'LINK': 'inline label - visible with data', });
lyr_600k700k_28.set('fieldLabels', {'ADDRESS_OL': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'PARCEL': 'inline label - visible with data', 'LINK': 'inline label - visible with data', });
lyr_700k800k_29.set('fieldLabels', {'ADDRESS_OL': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'PARCEL': 'inline label - visible with data', 'LINK': 'inline label - visible with data', });
lyr_800k900k_30.set('fieldLabels', {'ADDRESS_OL': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'PARCEL': 'inline label - visible with data', 'LINK': 'inline label - visible with data', });
lyr_900k1m_31.set('fieldLabels', {'ADDRESS_OL': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'PARCEL': 'inline label - visible with data', 'LINK': 'inline label - visible with data', });
lyr_1m125m_32.set('fieldLabels', {'ADDRESS_OL': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'PARCEL': 'inline label - visible with data', 'LINK': 'inline label - visible with data', });
lyr_125m15m_33.set('fieldLabels', {'ADDRESS_OL': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'PARCEL': 'inline label - visible with data', 'LINK': 'inline label - visible with data', });
lyr_15m175m_34.set('fieldLabels', {'ADDRESS_OL': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'PARCEL': 'inline label - visible with data', 'LINK': 'inline label - visible with data', });
lyr_175m2m_35.set('fieldLabels', {'ADDRESS_OL': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'PARCEL': 'inline label - visible with data', 'LINK': 'inline label - visible with data', });
lyr_2m25m_36.set('fieldLabels', {'ADDRESS_OL': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'PARCEL': 'inline label - visible with data', 'LINK': 'inline label - visible with data', });
lyr_25mAbove_37.set('fieldLabels', {'ADDRESS_OL': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'PARCEL': 'inline label - visible with data', 'LINK': 'inline label - visible with data', });
lyr_25mAbove_37.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});