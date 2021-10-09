ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3857").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_acc_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "acc",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/acc_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8304374.452427, -1324480.951114, -8220853.483741, -1249270.086735]
                            })
                        });
var lyr_AP_26680_FBS_F6950_RT1dem_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "AP_26680_FBS_F6950_RT1.dem",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/AP_26680_FBS_F6950_RT1dem_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8304374.452427, -1324480.951114, -8220853.483741, -1249270.086735]
                            })
                        });
var lyr_dir_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "dir",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/dir_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8304374.452427, -1324480.951114, -8220853.483741, -1249270.086735]
                            })
                        });
var lyr_fill_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "fill",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/fill_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8304374.452427, -1324480.951114, -8220853.483741, -1249270.086735]
                            })
                        });
var lyr_c_fill_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "c_fill",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/c_fill_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8285677.838497, -1317661.253815, -8243507.465722, -1270107.671958]
                            })
                        });
var lyr_c_acc_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "c_acc",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/c_acc_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8285677.838497, -1317661.253815, -8243507.465722, -1270107.671958]
                            })
                        });
var lyr_c_cauce_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "c_cauce",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/c_cauce_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8285677.838497, -1317661.253815, -8243507.465722, -1270107.671958]
                            })
                        });
var format_c_curvas_8 = new ol.format.GeoJSON();
var features_c_curvas_8 = format_c_curvas_8.readFeatures(json_c_curvas_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_c_curvas_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_c_curvas_8.addFeatures(features_c_curvas_8);
var lyr_c_curvas_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_c_curvas_8, 
                style: style_c_curvas_8,
                interactive: true,
                title: '<img src="styles/legend/c_curvas_8.png" /> c_curvas'
            });
var lyr_c_reclass_9 = new ol.layer.Image({
                            opacity: 1,
                            title: "c_reclass",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/c_reclass_9.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8285677.838497, -1317661.253815, -8243507.465722, -1270107.671958]
                            })
                        });
var format_c_rios_10 = new ol.format.GeoJSON();
var features_c_rios_10 = format_c_rios_10.readFeatures(json_c_rios_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_c_rios_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_c_rios_10.addFeatures(features_c_rios_10);
var lyr_c_rios_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_c_rios_10, 
                style: style_c_rios_10,
                interactive: true,
                title: '<img src="styles/legend/c_rios_10.png" /> c_rios'
            });
var format_c_shp_11 = new ol.format.GeoJSON();
var features_c_shp_11 = format_c_shp_11.readFeatures(json_c_shp_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_c_shp_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_c_shp_11.addFeatures(features_c_shp_11);
var lyr_c_shp_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_c_shp_11, 
                style: style_c_shp_11,
                interactive: true,
                title: '<img src="styles/legend/c_shp_11.png" /> c_shp'
            });
var format_UniHidroMen_ANA_geogpsperu_12 = new ol.format.GeoJSON();
var features_UniHidroMen_ANA_geogpsperu_12 = format_UniHidroMen_ANA_geogpsperu_12.readFeatures(json_UniHidroMen_ANA_geogpsperu_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UniHidroMen_ANA_geogpsperu_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UniHidroMen_ANA_geogpsperu_12.addFeatures(features_UniHidroMen_ANA_geogpsperu_12);
var lyr_UniHidroMen_ANA_geogpsperu_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UniHidroMen_ANA_geogpsperu_12, 
                style: style_UniHidroMen_ANA_geogpsperu_12,
                interactive: true,
                title: '<img src="styles/legend/UniHidroMen_ANA_geogpsperu_12.png" /> UniHidroMen_ANA_geogpsperu'
            });
var format_H_C_LUISCASAS_13 = new ol.format.GeoJSON();
var features_H_C_LUISCASAS_13 = format_H_C_LUISCASAS_13.readFeatures(json_H_C_LUISCASAS_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_H_C_LUISCASAS_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_H_C_LUISCASAS_13.addFeatures(features_H_C_LUISCASAS_13);
var lyr_H_C_LUISCASAS_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_H_C_LUISCASAS_13, 
                style: style_H_C_LUISCASAS_13,
                interactive: true,
                title: '<img src="styles/legend/H_C_LUISCASAS_13.png" /> H_C_LUIS CASAS '
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_acc_1.setVisible(true);lyr_AP_26680_FBS_F6950_RT1dem_2.setVisible(true);lyr_dir_3.setVisible(true);lyr_fill_4.setVisible(true);lyr_c_fill_5.setVisible(true);lyr_c_acc_6.setVisible(true);lyr_c_cauce_7.setVisible(true);lyr_c_curvas_8.setVisible(true);lyr_c_reclass_9.setVisible(true);lyr_c_rios_10.setVisible(true);lyr_c_shp_11.setVisible(true);lyr_UniHidroMen_ANA_geogpsperu_12.setVisible(true);lyr_H_C_LUISCASAS_13.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_acc_1,lyr_AP_26680_FBS_F6950_RT1dem_2,lyr_dir_3,lyr_fill_4,lyr_c_fill_5,lyr_c_acc_6,lyr_c_cauce_7,lyr_c_curvas_8,lyr_c_reclass_9,lyr_c_rios_10,lyr_c_shp_11,lyr_UniHidroMen_ANA_geogpsperu_12,lyr_H_C_LUISCASAS_13];
lyr_c_curvas_8.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CONTOUR': 'CONTOUR', 'LENGTH': 'LENGTH', });
lyr_c_rios_10.set('fieldAliases', {'SEGMENT_ID': 'SEGMENT_ID', 'NODE_A': 'NODE_A', 'NODE_B': 'NODE_B', 'BASIN': 'BASIN', 'ORDER': 'ORDER', 'ORDER_CELL': 'ORDER_CELL', 'LENGTH': 'LENGTH', });
lyr_c_shp_11.set('fieldAliases', {'ID': 'ID', 'VALUE': 'VALUE', 'NAME': 'NAME', 'Area': 'Area', 'perimetro': 'perimetro', });
lyr_UniHidroMen_ANA_geogpsperu_12.set('fieldAliases', {'ID': 'ID', 'NIVEL1': 'NIVEL1', 'NIVEL2': 'NIVEL2', 'NIVEL3': 'NIVEL3', 'NIVEL4': 'NIVEL4', 'NIVEL5': 'NIVEL5', 'NIVEL6': 'NIVEL6', 'NIVEL7': 'NIVEL7', 'NIVEL8': 'NIVEL8', 'NOMB_UH_N1': 'NOMB_UH_N1', 'NOMB_UH_N2': 'NOMB_UH_N2', 'NOMB_UH_N3': 'NOMB_UH_N3', 'NOMB_UH_N4': 'NOMB_UH_N4', 'NOMB_UH_N5': 'NOMB_UH_N5', 'NOMB_UH_N6': 'NOMB_UH_N6', 'NOMB_UH_N7': 'NOMB_UH_N7', 'NOMB_UH_N8': 'NOMB_UH_N8', 'AREA_KM2': 'AREA_KM2', 'AREA_FINAL': 'AREA_FINAL', 'NIVEL': 'NIVEL', 'IMPAR': 'IMPAR', 'last': 'last', 'Nombre_UH': 'Nombre_UH', 'CODIGO': 'CODIGO', 'AREALBERS': 'AREALBERS', 'Area': 'Area', 'DESCARGAR': 'DESCARGAR', });
lyr_H_C_LUISCASAS_13.set('fieldAliases', {'item': 'item', 'NOMBRES Y APELLIDOS': 'NOMBRES Y APELLIDOS', 'CORREO ELECTRONICO': 'CORREO ELECTRONICO', 'CELULAR': 'CELULAR', 'X': 'X', 'Y': 'Y', 'Z': 'Z', 'LUGAR': 'LUGAR', });
lyr_c_curvas_8.set('fieldImages', {'fid': '', 'ID': '', 'CONTOUR': '', 'LENGTH': '', });
lyr_c_rios_10.set('fieldImages', {'SEGMENT_ID': 'TextEdit', 'NODE_A': 'TextEdit', 'NODE_B': 'TextEdit', 'BASIN': 'TextEdit', 'ORDER': 'TextEdit', 'ORDER_CELL': 'TextEdit', 'LENGTH': 'TextEdit', });
lyr_c_shp_11.set('fieldImages', {'ID': 'TextEdit', 'VALUE': 'TextEdit', 'NAME': 'TextEdit', 'Area': '', 'perimetro': '', });
lyr_UniHidroMen_ANA_geogpsperu_12.set('fieldImages', {'ID': 'TextEdit', 'NIVEL1': 'TextEdit', 'NIVEL2': 'TextEdit', 'NIVEL3': 'TextEdit', 'NIVEL4': 'TextEdit', 'NIVEL5': 'TextEdit', 'NIVEL6': 'TextEdit', 'NIVEL7': 'TextEdit', 'NIVEL8': 'TextEdit', 'NOMB_UH_N1': 'TextEdit', 'NOMB_UH_N2': 'TextEdit', 'NOMB_UH_N3': 'TextEdit', 'NOMB_UH_N4': 'TextEdit', 'NOMB_UH_N5': 'TextEdit', 'NOMB_UH_N6': 'TextEdit', 'NOMB_UH_N7': 'TextEdit', 'NOMB_UH_N8': 'TextEdit', 'AREA_KM2': 'TextEdit', 'AREA_FINAL': 'TextEdit', 'NIVEL': 'Range', 'IMPAR': 'Range', 'last': 'Range', 'Nombre_UH': 'TextEdit', 'CODIGO': 'TextEdit', 'AREALBERS': 'TextEdit', 'Area': 'TextEdit', 'DESCARGAR': 'TextEdit', });
lyr_H_C_LUISCASAS_13.set('fieldImages', {'item': 'Range', 'NOMBRES Y APELLIDOS': 'TextEdit', 'CORREO ELECTRONICO': 'TextEdit', 'CELULAR': 'Range', 'X': 'TextEdit', 'Y': 'TextEdit', 'Z': 'TextEdit', 'LUGAR': 'TextEdit', });
lyr_c_curvas_8.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'CONTOUR': 'no label', 'LENGTH': 'no label', });
lyr_c_rios_10.set('fieldLabels', {'SEGMENT_ID': 'no label', 'NODE_A': 'no label', 'NODE_B': 'no label', 'BASIN': 'no label', 'ORDER': 'no label', 'ORDER_CELL': 'no label', 'LENGTH': 'no label', });
lyr_c_shp_11.set('fieldLabels', {'ID': 'no label', 'VALUE': 'no label', 'NAME': 'no label', 'Area': 'no label', 'perimetro': 'no label', });
lyr_UniHidroMen_ANA_geogpsperu_12.set('fieldLabels', {'ID': 'no label', 'NIVEL1': 'no label', 'NIVEL2': 'no label', 'NIVEL3': 'no label', 'NIVEL4': 'no label', 'NIVEL5': 'no label', 'NIVEL6': 'no label', 'NIVEL7': 'no label', 'NIVEL8': 'no label', 'NOMB_UH_N1': 'no label', 'NOMB_UH_N2': 'no label', 'NOMB_UH_N3': 'no label', 'NOMB_UH_N4': 'no label', 'NOMB_UH_N5': 'no label', 'NOMB_UH_N6': 'no label', 'NOMB_UH_N7': 'no label', 'NOMB_UH_N8': 'no label', 'AREA_KM2': 'no label', 'AREA_FINAL': 'no label', 'NIVEL': 'no label', 'IMPAR': 'no label', 'last': 'no label', 'Nombre_UH': 'no label', 'CODIGO': 'no label', 'AREALBERS': 'no label', 'Area': 'no label', 'DESCARGAR': 'no label', });
lyr_H_C_LUISCASAS_13.set('fieldLabels', {'item': 'no label', 'NOMBRES Y APELLIDOS': 'no label', 'CORREO ELECTRONICO': 'no label', 'CELULAR': 'no label', 'X': 'no label', 'Y': 'no label', 'Z': 'no label', 'LUGAR': 'no label', });
lyr_H_C_LUISCASAS_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});