var myModule = angular.module('myApp', []);

function DataCtrl($scope) {    

    $scope.brandList = [
        {"brand" : "Nexen"},
        {"brand" : "Firestone"},
        {"brand" : "Potenza"},
        {"brand" : "Falken"},
        {"brand" : "Affinity"},
        {"brand" : "Ecopia"}		
    ];

    $scope.widthList = [
        {"width" : "205"},
        {"width" : "210"},
        {"width" : "215"},
        {"width" : "220"}
    ];

    $scope.ratioList = [
        {"ratio" : "55"},
        {"ratio" : "60"},
        {"ratio" : "65"},
        {"ratio" : "70"},
        {"ratio" : "75"},
        {"ratio" : "80"}		
    ];

    $scope.rimList = [
        {"rim" : "R14"},
        {"rim" : "R15"},
        {"rim" : "R16"},
        {"rim" : "R17"},
        {"rim" : "R18"}		
    ];

    $scope.typeList = [
        {"type" : "All-Season"},
        {"type" : "Winter"},
        {"type" : "Summer"},
        {"type" : "Performance"}
    ];

    $scope.rangeList = [
        {"range" : "Less than $90"},
        {"range" : "$90 - $99"},
        {"range" : "$100 - $109"},
        {"range" : "$110 - $119"},
        {"range" : "$120 - $129"}		
    ];
	
    $scope.tires = [
		{
			"tireName": "Nexen N5000",
			"brand": "nexen",
			"width": "185",
			"ratio": "65",
			"rim": "R15",			
			"type": "All-Season",
			"description": ["5-variable pitch sequence design", "Performance Tires", "Size: 185/65R15", "Wide & deepened directional groove", "Noise reduction", "Excellent drainage and braking"],
			"range": "$90 - $99",
			"price": 92.18,
			"img": "images/nexen_n5000.jpg",
			"availability": "Available in store",
			"url": "http://www.ebay.com/itm/215-60-16-Dunlop-SP-Sport-7000-A-S-USED-PAIR-OF-TIRES-82-85-TREAD-/321183071914?pt=Motors_Car_Truck_Tires&hash=item4ac800beaa&vxp=mtr"
		},
		{
			"tireName": "Nexen N5000",
			"brand": "nexen",
			"width": "195",
			"ratio": "65",
			"rim": "R14",			
			"type": "All-Season",
			"description": ["5-variable pitch sequence design", "Performance Tires", "Size: 195/65R14", "Wide & deepened directional groove", "Noise reduction", "Excellent drainage and braking"],
			"range": "$90 - $99",
			"price": 92.38,
			"img": "images/nexen_n5000.jpg",
			"availability": "Available in store",
			"url": "http://www.ebay.com/itm/215-60-16-Dunlop-SP-Sport-7000-A-S-USED-PAIR-OF-TIRES-82-85-TREAD-/321183071914?pt=Motors_Car_Truck_Tires&hash=item4ac800beaa&vxp=mtr"
		},
		{
			"tireName": "Nexen N5000",
			"brand": "nexen",
			"width": "205",
			"ratio": "40",
			"rim": "R17",			
			"type": "All-Season",
			"description": ["5-variable pitch sequence design", "Performance Tires", "Size: 205/40R17", "Wide & deepened directional groove", "Noise reduction", "Excellent drainage and braking"],
			"range": "$90 - $99",
			"price": 94.55,
			"img": "images/nexen_n5000.jpg",
			"availability": "Available in store",
			"url": "http://www.ebay.com/itm/215-60-16-Dunlop-SP-Sport-7000-A-S-USED-PAIR-OF-TIRES-82-85-TREAD-/321183071914?pt=Motors_Car_Truck_Tires&hash=item4ac800beaa&vxp=mtr"
		},
		{
			"tireName": "Nexen N5000",
			"brand": "nexen",
			"width": "195",
			"ratio": "65",
			"rim": "R15",			
			"type": "All-Season",
			"description": ["5-variable pitch sequence design", "Performance Tires", "Size: 195/65R15", "Wide & deepened directional groove", "Noise reduction", "Excellent drainage and braking"],
			"range": "$90 - $99",
			"price": 95.25,
			"img": "images/nexen_n5000.jpg",
			"availability": "Available in store",
			"url": "http://www.ebay.com/itm/215-60-16-Dunlop-SP-Sport-7000-A-S-USED-PAIR-OF-TIRES-82-85-TREAD-/321183071914?pt=Motors_Car_Truck_Tires&hash=item4ac800beaa&vxp=mtr"
		},
		{
			"tireName": "Nexen N5000",
			"brand": "nexen",
			"width": "195",
			"ratio": "60",
			"rim": "R15",			
			"type": "All-Season",
			"description": ["5-variable pitch sequence design", "Performance Tires", "Size: 195/60R15", "Wide & deepened directional groove", "Noise reduction", "Excellent drainage and braking"],
			"range": "$90 - $99",
			"price": 96.31,
			"img": "images/nexen_n5000.jpg",
			"availability": "Available in store",
			"url": "http://www.ebay.com/itm/215-60-16-Dunlop-SP-Sport-7000-A-S-USED-PAIR-OF-TIRES-82-85-TREAD-/321183071914?pt=Motors_Car_Truck_Tires&hash=item4ac800beaa&vxp=mtr"
		},
		{
			"tireName": "Nexen N5000",
			"brand": "nexen",
			"width": "205",
			"ratio": "65",
			"rim": "R15",			
			"type": "All-Season",
			"description": ["5-variable pitch sequence design", "Performance Tires", "Size: 205/65R15", "Wide & deepened directional groove", "Noise reduction", "Excellent drainage and braking"],
			"range": "$100 - $109",
			"price": 101.02,
			"img": "images/nexen_n5000.jpg",
			"availability": "Available in store",
			"url": "http://www.ebay.com/itm/215-60-16-Dunlop-SP-Sport-7000-A-S-USED-PAIR-OF-TIRES-82-85-TREAD-/321183071914?pt=Motors_Car_Truck_Tires&hash=item4ac800beaa&vxp=mtr"
		},
		{
			"tireName": "Falken Ziex 912",
			"brand": "falken",
			"width": "205",
			"ratio": "55",
			"rim": "R16",			
			"type": "All-Season",
			"description": ["40,000 mileage warranty", "Performance Tires", "Size: 205/55R16", "Load Index: 91 (1356 lbs)", "Speed Rating: V (149 mph)", "Sidewall: Black Letter/Black Wall"],
			"range": "Less than $90",
			"price": 84.99,
			"img": "images/Ziex912.png",
			"availability": "Available in store",
			"url": "http://www.ebay.com/itm/215-60-16-Dunlop-SP-Sport-7000-A-S-USED-PAIR-OF-TIRES-82-85-TREAD-/321183071914?pt=Motors_Car_Truck_Tires&hash=item4ac800beaa&vxp=mtr"
		},
		{
			"tireName": "Firestone Champion HR",
			"brand": "firestone",
			"width": "210",
			"ratio": "60",
			"rim": "R18",			
			"type": "All-Season",
			"description": ["40,000 mileage warranty", "Performance Tires", "Size: 210/60R18", "Load Index: 109 (1356 lbs)", "Speed Rating: V (130 mph)", "Sidewall: Black Letter/Black Wall"],
			"range": "$90 - $99",
			"price": 93.99,
			"img": "images/ChampionHR.png",
			"availability": "Available in store",
			"url": "http://www.ebay.com/itm/215-60-16-Dunlop-SP-Sport-7000-A-S-USED-PAIR-OF-TIRES-82-85-TREAD-/321183071914?pt=Motors_Car_Truck_Tires&hash=item4ac800beaa&vxp=mtr"
		},
		{
			"tireName": "Affinity Touring",
			"brand": "affinity",
			"width": "220",
			"ratio": "65",
			"rim": "R17",			
			"type": "All-Season",
			"description": ["70,000 mileage warranty", "Car & Minivan Tires", "Size: 220/65R17", "Load Index: 89 (1279 lbs)", "Speed Rating: T (118 mph)", "Sidewall: Black Letter/Black Wall"],
			"range": "$90 - $99",
			"price": 91.49,
			"img": "images/AffinityTouring.png",
			"availability": "Available in store",
			"url": "http://www.ebay.com/itm/215-60-16-Dunlop-SP-Sport-7000-A-S-USED-PAIR-OF-TIRES-82-85-TREAD-/321183071914?pt=Motors_Car_Truck_Tires&hash=item4ac800beaa&vxp=mtr"
		},
		{
			"tireName": "Bridgestone Ecopia EP422",
			"brand": "ecopia",
			"width": "215",
			"ratio": "70",
			"rim": "R16",			
			"type": "Performance",
			"description": ["65,000 mileage warranty", "Car & Minivan Tires", "Size: 215/70R16", "Load Index: 91 (1356 lbs)", "Speed Rating: H (130 mph)", "Sidewall: Black Letter/Black Wall"],
			"range": "$100 - $109",
			"price": 105.99,
			"img": "images/EcopiaEP422.png",
			"availability": "Available in store",
			"url": "http://www.ebay.com/itm/215-60-16-Dunlop-SP-Sport-7000-A-S-USED-PAIR-OF-TIRES-82-85-TREAD-/321183071914?pt=Motors_Car_Truck_Tires&hash=item4ac800beaa&vxp=mtr"
		},
		{
			"tireName": "Bridgestone Potenza RE970AS Pole Position",
			"brand": "potenza",
			"width": "215",
			"ratio": "60",
			"rim": "R14",			
			"type": "Performance",
			"description": ["40,000 mileage warranty", "Performance Tires", "Size: 215/60R14", "Load Index: 91 (1356 lbs)", "Speed Rating: W (168 mph)", "Sidewall: Black Letter/Black Wall"],
			"range": "$90 - $99",
			"price": 91.49,
			"img": "images/PotenzaRE970ASPolePosition.png",
			"availability": "Available in store",
			"url": "http://www.ebay.com/itm/215-60-16-Dunlop-SP-Sport-7000-A-S-USED-PAIR-OF-TIRES-82-85-TREAD-/321183071914?pt=Motors_Car_Truck_Tires&hash=item4ac800beaa&vxp=mtr"
		},
		{
			"tireName": "Firestone Firestone Winterforce",
			"brand": "firestone",
			"width": "220",
			"ratio": "80",
			"rim": "R15",			
			"type": "Winter",
			"description": ["No mileage warranty", "Winter Tires", "Size: 220/80R15", "Load Index: 91 (1356 lbs)", "Speed Rating: S (112 mph)", "Sidewall: Black Letter/Black Wall"],
			"range": "$110 - $119",
			"price": 118.99,
			"img": "images/FirestoneWinterforce.png",
			"availability": "Available in store",
			"url": "http://www.ebay.com/itm/215-60-16-Dunlop-SP-Sport-7000-A-S-USED-PAIR-OF-TIRES-82-85-TREAD-/321183071914?pt=Motors_Car_Truck_Tires&hash=item4ac800beaa&vxp=mtr"
		},
		{
			"tireName": "Firestone Firehawk Wideoval AS",
			"brand": "firestone",
			"width": "205",
			"ratio": "75",
			"rim": "R18",			
			"type": "Summer",
			"description": ["50,000 mileage warranty", "Performance Tires", "Size: 205/75R18", "Load Index: 91 (1356 lbs)", "Speed Rating: H (130 mph)", "Sidewall: Black Letter/Black Wall"],
			"range": "$120 - $129",
			"price": 125.99,
			"img": "images/FirehawkWideovalAS.png",
			"availability": "Available in store",
			"url": "http://www.ebay.com/itm/215-60-16-Dunlop-SP-Sport-7000-A-S-USED-PAIR-OF-TIRES-82-85-TREAD-/321183071914?pt=Motors_Car_Truck_Tires&hash=item4ac800beaa&vxp=mtr"
		}		
		
	];
	
  $scope.numbers = [
    {number:1},
    {number:2},
    {number:3},
    {number:4},
    {number:5},
    {number:6},
    {number:7},
    {number:8}
  ];

  $scope.number = $scope.numbers[0]; // 1

/*
<!--
	<select class="form-control" ng-model="sect" ng-options="s.order for s in section"></select>
	{{sect.value}}
-->
  $scope.section = [
    {order: 'Highest Price', value: $scope.tires[0]},
    {order: 'Lowest Price', value: -$scope.tires.price},
    {order: 'Brand', value:3},
    {order: 'Mileage Warranty', value:4},
    {order: 'Wet', value:5},
    {order: 'Dry', value:6},
    {order: 'COmfort', value:7},
    {order: 'Winter/Snow', value:8},
    {order: 'Treadwear', value:8},
  ];
  $scope.sect = $scope.section[0]; // Brand  
*/  
}