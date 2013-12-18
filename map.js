
var mapoptions = {
								theme: null,
								maxExtent: new OpenLayers.Bounds(-20037508.34,-20037508.34,20037508.34,20037508.34),
								maxResolution: 156543.0399,
								numZoomLevels: 20,
								units: 'm',
								projection: new OpenLayers.Projection("EPSG:900913"),
							    displayProjection: new OpenLayers.Projection("EPSG:4326"),

			 		 controls:[
					 		      new OpenLayers.Control.PanZoomBar(),
					 		      new OpenLayers.Control.Navigation(),
					 		      new OpenLayers.Control.LayerSwitcher(),
					 		      new OpenLayers.Control.MousePosition()
		                      ]
			 		};
			 		      function init() {
			 		        map = new OpenLayers.Map("bmap", mapoptions);
							
							 var lonLat = new OpenLayers.LonLat( -6.42120 ,53.28940 )
                             .transform(
                              new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
                              new OpenLayers.Projection("EPSG:900913") // to Spherical Mercator Projection
                              );
                             var zoom=15;
							 
			 		        var mapnik = new OpenLayers.Layer.OSM.Mapnik("OSM Mapnik");
			 		        map.addLayer(mapnik);

			 		        var cyclemap = new OpenLayers.Layer.OSM.CycleMap("OSM CycleMap");
			 		        map.addLayer(cyclemap);
							
							 var markers = new OpenLayers.Layer.Markers( "Markers");
                             map.addLayer(markers);
							 var size = new OpenLayers.Size(41,45);
							
					         var icon = new OpenLayers.Icon('images/building.gif', size);		
                             markers.addMarker(new OpenLayers.Marker(lonLat, icon));
							
                             map.setCenter(lonLat, zoom);
			 		      }