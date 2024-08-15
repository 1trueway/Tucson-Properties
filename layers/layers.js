ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-12465954.172499, 3714714.473685, -12244439.673106, 3848326.393954]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_25mAboveSaved_1 = new ol.format.GeoJSON();
var features_25mAboveSaved_1 = format_25mAboveSaved_1.readFeatures(json_25mAboveSaved_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_25mAboveSaved_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_25mAboveSaved_1.addFeatures(features_25mAboveSaved_1);
var lyr_25mAboveSaved_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_25mAboveSaved_1, 
                style: style_25mAboveSaved_1,
                popuplayertitle: "2.5m & Above (Saved)",
                interactive: true,
                title: '<img src="styles/legend/25mAboveSaved_1.png" /> 2.5m & Above (Saved)'
            });

var jsonSource_25mAbove_2 = new ol.source.VectorTile({
	attributions: ' ',
	format: new ol.format.MVT(),
	url: 'Vector/{z}/{x}/{y}.pbf'
});
var lyr_25mAbove_2 = new ol.layer.VectorTile({
	'title': '2.5m & Above',
	//'type': 'base',
	'opacity': 1.000000,
	
	source: jsonSource_25mAbove_2
});
var group_Vectors = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Vectors"});
var group_ResidentialHomesbyValue = new ol.layer.Group({
                                layers: [lyr_25mAboveSaved_1,lyr_25mAbove_2,],
                                fold: "open",
                                title: "Residential Homes by Value"});
var group_CommonArea = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Common Area"});
var group_Apartments = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Apartments"});
var group_VacantLand = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Vacant Land"});
var group_Parcels = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Parcels"});
var group_Commercial = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Commercial"});
var group_BaseMaps = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,],
                                fold: "open",
                                title: "Base Maps"});
var group_Aerials = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Aerials"});

lyr_GoogleSatellite_0.setVisible(true);lyr_25mAboveSaved_1.setVisible(true);lyr_25mAbove_2.setVisible(true);
var layersList = [group_BaseMaps,group_ResidentialHomesbyValue];
lyr_25mAboveSaved_1.set('fieldAliases', {'ADDRESS_OL': 'ADDRESS_OL', 'MAIL1': 'MAIL1', 'MAIL2': 'MAIL2', 'MAIL3': 'MAIL3', 'MAIL4': 'MAIL4', 'MAIL5': 'MAIL5', 'ZIP': 'ZIP', 'ZIP4': 'ZIP4', 'LIMNET': 'LIMNET', 'FCV': 'FCV', 'GISACRES': 'GISACRES', 'TAXYR': 'TAXYR', 'PARCEL_USE': 'PARCEL_USE', 'LOT': 'LOT', 'TAXAREA': 'TAXAREA', 'PARCEL': 'PARCEL', 'LINK': 'LINK', });
lyr_25mAboveSaved_1.set('fieldImages', {'ADDRESS_OL': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'LIMNET': 'TextEdit', 'FCV': 'TextEdit', 'GISACRES': 'TextEdit', 'TAXYR': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'TAXAREA': 'TextEdit', 'PARCEL': 'TextEdit', 'LINK': 'TextEdit', });
lyr_25mAboveSaved_1.set('fieldLabels', {'ADDRESS_OL': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'PARCEL': 'inline label - visible with data', 'LINK': 'inline label - visible with data', });
lyr_25mAboveSaved_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
