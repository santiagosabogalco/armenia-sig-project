var map = L.map('map').setView([4.53955135211556, -75.67287514864692], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

document.getElementById('select-location').addEventListener('change',function(e){
    let coords = e.target.value.split(",");
    map.flyTo(coords,17)
    });

//Mini map
var basemapUrl =
"https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=LNzwUo4zIO0uTzlYksQ8";
var basemap = new L.TileLayer(basemapUrl, {minZoom: 0, maxZoom: 13});

//Agregar el minimapa
var miniMap = new L.Control.MiniMap(basemap,
    {
        toggleDisplay: true,
        minimized: false,
        position: 'bottomleft'
    }).addTo(map);


//Iconos personalizados

var greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

    ////////////////////////////

    var markerDivisa1 = L.marker([4.542604544011222, -75.67631821604515]).addTo(map).bindPopup(
        '<b>Origen:</b> La Divisa <br><b> Municipio:</b> Armenia <br> <b>Manzana:</b> 2154 <br> <b>Hora:</b> 6:00 am <br> <b>ZAT:</b> 38 <br> <b>Macrozona:</b> 8 <br><b>Estrato:</b> 3');

    var markerComfenalco1 = L.marker([4.47494848878861, -75.75317875595083], {icon: greenIcon}).addTo(map).bindPopup(
        '<b>Destino:</b> Colegio Comfenalco <br> <b>Municipio:</b> Armenia <br> <b>Manzana:</b> 3437 <br> <b>Hora:</b> 6:30 am <br> <b>ZAT:</b> 25 <br> <b>Macrozona:</b> 15 <br><b>Estrato:</b> -');

    var markerComfenalco2 = L.marker([4.47494848878861, -75.75317875595083]).addTo(map).bindPopup(
        '<b>Origen:</b> Colegio Comfenalco <br> <b>Municipio:</b> Armenia <br> <b>Manzana:</b> 3437 <br> <b>Hora:</b> 6:30 am <br> <b>ZAT:</b> 25 <br> <b>Macrozona:</b> 15 <br><b>Estrato:</b> -');
    
    var markerDivisa2 = L.marker([4.542604544011222, -75.67631821604515],{icon: greenIcon}).addTo(map).bindPopup(
        '<b>Destino:</b> La Divisa <br> <b>Municipio:</b> Armenia <br> <b>Manzana:</b> 2154 <br> <b>Hora:</b> 7:00 am <br> <b>ZAT:</b> 38 <br> <b>Macrozona:</b> 8 <br><b>Estrato:</b> 3');
    
    var markerDivisa3 = L.marker([4.542604544011222, -75.67631821604515]).addTo(map).bindPopup(
        '<b>Origen:</b> La Divisa <br> <b>Municipio:</b> Armenia <br> <b>Manzana:</b> 2154 <br> <b>Hora:</b> 7:20 am <br> <b>ZAT:</b> 38 <br> <b>Macrozona:</b> 8 <br><b>Estrato:</b> 3');
    
    var markerPortal3 = L.marker([4.558897625664276, -75.65552514796768], {icon: greenIcon}).addTo(map).bindPopup(
        '<b>Destino:</b> Centro Comercial Portal del Quindío <br> <b>Municipio:</b> Armenia. <br> <b>Manzana:</b> 2595 <br> <b>Hora:</b> 8:05 am <br> <b>ZAT:</b> 98 <br> <b>Macrozona:</b> 10 <br><b>Estrato:</b> 5');
    
    var markerPortal4 = L.marker([4.558724967587482, -75.6556196455686]).addTo(map).bindPopup(
        '<b>Origen:</b> Centro Comercial Portal del Quindío <br> <b>Municipio:</b> Armenia. <br> <b>Manzana:</b> 2595 <br> <b>Hora:</b> 19:00 pm <br><b>ZAT:</b> 98 <br> <b>Macrozona:</b> 10 <br><b>Estrato:</b> 5');
    
    var markerDivisa4 = L.marker([4.542604544011222, -75.67631821604515],{icon: greenIcon}).addTo(map).bindPopup(
        '<b>Destino:</b> La Divisa <br> <b>Municipio:</b> Armenia <br> <b>Manzana:</b> 2154 <br><b> Hora:</b> 19:45 am <br> <b>ZAT:</b> 38 <br> <b>Macrozona:</b> 8 <br><b>Estrato:</b> 3');
    
        ////////////////////////////
    var coordRuta1_2= [
        [4.542604544011222, -75.67631821604515],
        [4.542693908936229, -75.67639062457162],
        [4.542681151111181, -75.67673873097071],
        [4.541864411809367, -75.6766863773872],
        [4.53982965772004, -75.67693243516321],
        [4.539333511293726, -75.67675348405373],
        [4.538580929043107, -75.67716171627302],
        [4.538447136560832, -75.67699954182973],
        [4.536759242186969, -75.67886139494398],
        [4.536705827905924, -75.67901606311085],
        [4.5366322181099985, -75.67901091140271],
        [4.536570591298343, -75.67892848407243],
        [4.535360297038715, -75.67785952640992],
        [4.535105041430343, -75.67758711985415],
        [4.534149817766248, -75.67669583141085],
        [4.533661669906705, -75.67717142011885],
        [4.533468517784896, -75.67738279287796],
        [4.533292924902082, -75.67761882579231],
        [4.532815312022093, -75.67808736870379],
        [4.532144546373688, -75.67896104277477],
        [4.531572112337477, -75.67964448130388],
        [4.5307854538260175, -75.68049349521965],
        [4.530202483126977, -75.68103249575537],
        [4.529047075923207, -75.68188503251184],
        [4.527849524270526, -75.68243460167524],
        [4.52673274410984, -75.68258608548048],
        [4.52652554255773, -75.68268824896084],
        [4.52280147813372, -75.68572055246185],
        [4.522193640203298, -75.6865774791283],
        [4.520017245228962, -75.68920525052009],
        [4.519547253760416, -75.69034249613391],
        [4.519101805048674, -75.69090104363225],
        [4.51882463683495, -75.69093828013366],
        [4.518139328165529, -75.69081182725854],
        [4.51798346763469, -75.69091989428073],
        [4.5178431105377035, -75.69091844279014],
        [4.517672366808809, -75.69108681568335],
        [4.516435092410379, -75.69263835813847],
        [4.516193144970849, -75.69319475069607],
        [4.516127509134952, -75.69390412642525],
        [4.516192055982971, -75.69531827161879],
        [4.516175979362277, -75.69551211615249],
        [4.515998771010233, -75.696006826308],
        [4.5158148755047725, -75.69632042223708],
        [4.515148832076359, -75.6970316870724],
        [4.514613862577086, -75.69770918843791],
        [4.513360920338116, -75.6997805587236],
        [4.5124877399280185, -75.70118079305233],
        [4.512461075780771, -75.70133716047025],
        [4.512366725713437, -75.70140094191703],
        [4.512194434239869, -75.70162109075187],
        [4.509900684613541, -75.7056609726874],
        [4.509562572588527, -75.70632163217469],
        [4.508963832139852, -75.70778426863072],
        [4.508594021627555, -75.70829301176532],
        [4.508273519016567, -75.70905965936585],
        [4.508118550677574, -75.7093387615022],
        [4.507459699788074, -75.70979812672657],
        [4.50499733023824, -75.71293848655672],
        [4.501491257297948, -75.71602808516064],
        [4.5010588461553, -75.71760013938598],
        [4.500359679657724, -75.72175710850557],
        [4.500372391766841, -75.72360606711192],
        [4.500245270517996, -75.72462618225855],
        [4.499647800315065, -75.72581206602821],
        [4.4974037675885254, -75.7302906265011],
        [4.495617941710396, -75.73245117740099],
        [4.494125122744133, -75.7352640189804],
        [4.4932673690506935, -75.73661252838019],
        [4.492821996520958, -75.73768802656022],
        [4.492327137859607, -75.73843260230242],
        [4.491089989737188, -75.73961565042616],
        [4.489110548318002, -75.74268495700383],
        [4.487502248185459, -75.74469531139933],
        [4.4830600586835505, -75.7490522404919],
        [4.48028023454647, -75.75085675264519],
        [4.479424360782163, -75.75149861928608],
        [4.47900842170973, -75.75204420584231],
        [4.478248532516639, -75.75340817245419],
        [4.476398702192464, -75.75621918007096],
        [4.475540637642398, -75.7577286302567],
        [4.472795313362888, -75.76199278559737],
        [4.471493638868594, -75.76407300041075],
        [4.47124268055648, -75.76438465927687],
        [4.470955870951669, -75.76443260679473],
        [4.470832383448343, -75.76409297854319],
        [4.47113114350128, -75.76374136341221],
        [4.471413969572481, -75.76376533717114],
        [4.471688828607492, -75.76365745525594],
        [4.47373995360953, -75.76029089847887],
        [4.475671925488954, -75.75732614368634],
        [4.476670487454064, -75.75560351003675],
        [4.47730317040305, -75.75463523469699],
        [4.476605680039485, -75.75419769565856],
        [4.474962791848873, -75.75319261309613]
    ];

    var coordRuta3_4= [
        [4.542600830443169, -75.67631364891076],
        [4.542682331592995, -75.6763845112589],
        [4.542682331592995, -75.6763845112589],
        [4.543037153525472, -75.67679682203583],
        [4.543284404900074, -75.67673078788833],
        [4.543918588248926, -75.67618318763375],
        [4.544263776415073, -75.67611071112887],
        [4.544465398459121, -75.67499228561384],
        [4.543778233209249, -75.67511307978886],
        [4.543657713100797, -75.67516945040524],
        [4.543657713100797, -75.67516945040524],
        [4.542553007925106, -75.6754621137288],
        [4.542553007925106, -75.6754621137288],
        [4.541942103581281, -75.67515318069624],
        [4.5418316386285476, -75.6749147649847],
        [4.540897442399833, -75.67406677902447],
        [4.540052314024828, -75.67325678420313],
        [4.540708410257393, -75.67276148396049],
        [4.540188621208425, -75.67226777554949],
        [4.539680496959536, -75.67183611766423],
        [4.538002157531879, -75.67033390571461],
        [4.537498325096201, -75.66992772870495],
        [4.53650285975269, -75.66898643078889],
        [4.5365882196633605, -75.66893438228949],
        [4.536970048119465, -75.66853380399186],
        [4.5387681477429975, -75.66657445023905],
        [4.539404143706132, -75.66598202445945],
        [4.542080881304149, -75.66335277052988],
        [4.542641160921126, -75.66301858162625],
        [4.543114369726106, -75.6628704751787],
        [4.543697362524951, -75.662737559141],
        [4.54484441842996, -75.66267299991647],
        [4.545703762748922, -75.66240337023727],
        [4.5478615831726765, -75.66150333876705],
        [4.54835371674007, -75.66118434027656],
        [4.54884963562678, -75.66064508090565],
        [4.549973920240564, -75.65930191845388],
        [4.550582185515262, -75.6590212317246],
        [4.5527757029199405, -75.65802359670309],
        [4.553286643787994, -75.65784664203271],
        [4.554880290393465, -75.65751714022406],
        [4.555652781924323, -75.65722424973518],
        [4.558897625664276, -75.65552514796768]
    ];





    ////////////////////////////

    var ruta1= L.polyline(coordRuta1_2,{color:'red'}).addTo(map).bindPopup('<b>Tipo de actividad:</b> Buscar/Dejar a alguien. <br><b>Modo de transporte:</b> Vehiculo privado como conductor.');

    var ruta2= L.polyline(coordRuta1_2,{color:'green'}).addTo(map).bindPopup('<b>Tipo de actividad:</b> Volver a casa. <br><b>Modo de transporte:</b> Vehiculo privado como conductor.');

    var ruta3= L.polyline(coordRuta3_4,{color:'brown'}).addTo(map).bindPopup('<b>Tipo de actividad:</b> Trabajar. <br><b>Modo de transporte:</b> Bus urbano.');

    var ruta4= L.polyline(coordRuta3_4,{color:'blue'}).addTo(map).bindPopup('<b>Tipo de actividad:</b> Volver a casa. <br><b>Modo de transporte:</b> Bus urbano.');


    ////////////////////////////
    // Función para ocultar todos los elementos
    function hideAll() {
        map.removeLayer(markerDivisa1);
        map.removeLayer(markerComfenalco1);
        map.removeLayer(markerComfenalco2);
        map.removeLayer(markerDivisa2);
        map.removeLayer(markerDivisa3);
        map.removeLayer(markerPortal3);
        map.removeLayer(markerPortal4);
        map.removeLayer(markerDivisa4);
        map.removeLayer(ruta1);
        map.removeLayer(ruta2);
        map.removeLayer(ruta3);
        map.removeLayer(ruta4);
    }

    hideAll(); 
    document.getElementById('select-location').addEventListener('change', function() {
        hideAll(); // Ocultar todos los elementos antes de mostrar el seleccionado
        var selectedOption = this.options[this.selectedIndex];
        var id = selectedOption.getAttribute('data-ruta');
        if (id === "1") {
            markerDivisa1.addTo(map);
            markerComfenalco1.addTo(map);
            ruta1.addTo(map);
            map.fitBounds(ruta1.getBounds()); // Ajustar el zoom a la ruta 1
        } else if (id === "2") {
            markerComfenalco2.addTo(map);
            markerDivisa2.addTo(map);
            ruta2.addTo(map);
            map.fitBounds(ruta2.getBounds()); // Ajustar el zoom a la ruta 2
        } else if (id === "3") {
            markerDivisa3.addTo(map);
            markerPortal3.addTo(map);
            ruta3.addTo(map);
            map.fitBounds(ruta3.getBounds()); // Ajustar el zoom a la ruta 3
        } else if (id === "4") {
            markerPortal4.addTo(map);
            markerDivisa4.addTo(map);
            ruta4.addTo(map);
            map.fitBounds(ruta4.getBounds()); // Ajustar el zoom a la ruta 4
        }
    });

    //////// Leyenda ////////
    const legend= L.control.legend({
        position: "bottomright",
        collapsed: false,
        symbolWidth: 24,
        opacity: 1,
        column: 1,
        legends: [
            {
                label: "Origen",
                type: "image",
                url: "./assets/images/blueIcon.png",
                layers:  [markerDivisa1, markerComfenalco2, markerDivisa3, markerPortal4],
                inactive: false
        },
        {
            label: "Destino",
            type: "image",
            url: "./assets/images/greenIcon.png",
            layers:  [markerComfenalco1, markerDivisa2, markerPortal3, markerDivisa4],
            inactive: false
    },
    {
        label: "Ruta",
        type: "image",
        url: "./assets/images/lineIcon.png",
        layers:  [ruta1, ruta2, ruta3, ruta4],
        inactive: false
}]
    }).addTo(map);


       