ol.proj.get("EPSG:4326").setExtent([69.148906, 34.510736, 69.195519, 34.545336]);
var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_KSBU_Z_3_0 = new ol.format.GeoJSON();
var features_KSBU_Z_3_0 = format_KSBU_Z_3_0.readFeatures(json_KSBU_Z_3_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_KSBU_Z_3_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_KSBU_Z_3_0.addFeatures(features_KSBU_Z_3_0);var lyr_KSBU_Z_3_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KSBU_Z_3_0, 
                style: style_KSBU_Z_3_0,
                title: '<img src="styles/legend/KSBU_Z_3_0.png" /> KSBU_Z_3'
            });

lyr_KSBU_Z_3_0.setVisible(true);
var layersList = [baseLayer,lyr_KSBU_Z_3_0];
lyr_KSBU_Z_3_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'House_No_': 'House_No_', 'Hous_No': 'Hous_No', 'KSBU_Zone': 'KSBU_Zone', 'Customer_I': 'Customer_I', 'Discriptio': 'Discriptio', 'Print': 'Print', });
lyr_KSBU_Z_3_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'House_No_': 'TextEdit', 'Hous_No': 'TextEdit', 'KSBU_Zone': 'TextEdit', 'Customer_I': 'TextEdit', 'Discriptio': 'TextEdit', 'Print': 'TextEdit', });
lyr_KSBU_Z_3_0.set('fieldLabels', {'OBJECTID': 'no label', 'House_No_': 'no label', 'Hous_No': 'no label', 'KSBU_Zone': 'no label', 'Customer_I': 'no label', 'Discriptio': 'no label', 'Print': 'no label', });
lyr_KSBU_Z_3_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});