/**
 * Created by Pharrell_WANG on 18/3/2017.
 */

var ChartsAmcharts_cust = function() {

    var initChartSample_cust = function() {
        var map = AmCharts.makeChart("map_hk", {
        "type": "map",
        "theme": "light",
        "colorSteps": 20,
        "dataProvider": {
            "map": "hongKongHigh",
            "getAreasFromMap": true,
            "areas": [{
                "id": "HK-KI",
                "value": 4447100
            }, {
                "id": "HK-WT",
                "value": 626932
            }, {
                "id": "HK-TM",
                "value": 5130632
            }, {
                "id": "HK-SS",
                "value": 2673400
            }, {
                "id": "HK-KC",
                "value": 1111
            }, {
                "id": "HK-KU",
                "value": 4301261
            }, {
                "id": "HK-YT",
                "value": 3405565
            }, {
                "id": "HK-IS",
                "value": 783600
            }, {
                "id": "HK-NO",
                "value": 15982378
            }, {
                "id": "HK-YL",
                "value": 8186453
            }, {
                "id": "HK-TP",
                "value": 1211537
            }, {
                "id": "HK-ST",
                "value": 1293953
            }, {
                "id": "HK-EA",
                "value": 12419293
            }, {
                "id": "HK-CW",
                "value": 6080485
            }, {
                "id": "HK-TW",
                "value": 2926324
            }, {
                "id": "HK-WC",
                "value": 2688418
            }, {
                "id": "HK-SK",
                "value": 4041769
            }, {
                "id": "HK-SO",
                "value": 4468976
            }]
        },

        "areasSettings": {
            "autoZoom": false,
            "color": "#CDCDCD",
            "colorSolid": "#5EB7DE",
            "selectedColor": "#F36A5A",
            "outlineColor": "#FFFFFF",
            "rollOverColor": "#F36A5A",
            "rollOverOutlineColor": "#FFFFFF",
            "selectable": true
        },

        "listeners": [{
            "event": "clickMapObject",
            "method": function (event) {
                // deselect the area by assigning all of the dataProvider as selected object
                map.selectedObject = map.dataProvider;

                // map.selectObject();
                // clearMap();
                // toggle showAsSelected
                event.mapObject.showAsSelected = !event.mapObject.showAsSelected;

                // bring it to an appropriate color
                map.returnInitialColor(event.mapObject);

                // let's build a list of currently selected states
                var states = [];
                for (var i in map.dataProvider.areas) {
                    var area = map.dataProvider.areas[i];
                    // console.log(area)
                    if (area.showAsSelected) {
                        states.push(area.title);
                    }
                }
                console.log(states)
            }
        }],

        "imagesSettings": {
            "labelPosition": "middle",
            "labelFontSize": 9
        },

        valueLegend: {
            "right": 100,
            "minValue": "low",
            "maxValue": "high"
        }

    });

        map.addListener("init", function () {
                setTimeout(function () {
                    // iterate through areas and put a label over center of each
                    map.dataProvider.images = [];
                    for (x in map.dataProvider.areas) {
                        var area = map.dataProvider.areas[x];
                        var image = new AmCharts.MapImage();
                        image.latitude = map.getAreaCenterLatitude(area);
                        image.longitude = map.getAreaCenterLongitude(area);
                        image.label = area.id.substr(3) + "\n" + area.value;
                        image.title = area.title;
                        image.linkToObject = area;
                        map.dataProvider.images.push(image);
                    }
                    map.validateData();
                    // console.log( map.dataProvider );
                }, 100)
            }
        );

        $('#chart_hk').closest('.portlet').find('.fullscreen').click(function() {
            map.invalidateSize();
        });
    }

    return {
        init: function() {
            initChartSample_cust();
        }
    };
}();

jQuery(document).ready(function() {
   ChartsAmcharts_cust.init();
});