function iniciarMap(){
    var coord = {lat:19.4362095, lng:-99.1546422};   
    
    //var src = 'https://developers.google.com/maps/documentation/javascript/examples/kml/westcampus.kml';
    //var src='https://docs.google.com/uc?export=download&id=1eVhC_Ih6dwYHXBInYD7x8U7zHZCx0_Zw';
    //var src='https://docs.google.com/uc?export=download&id=1hyprgLbnLh139bOcoRRTCk0xttu_wbT8'
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 20,
      mapTypeId: 'satellite',/* mapTypeId: google.maps.MapTypeId.HYBRID*/  
      center: coord,
      controlSize: 40,      
      streetViewControl: true,
      rotateControlOptions: true,
      mapTypeControl: true,        
      heading:90,     
      mapId:'791e85b0dc7e195d'
    });
    //var fileId = '1H38iuEfCfS3nOHt7-PCCPrDjJdWFoSBn';
    //var urlC = await google.colab.kernel.invokeFunction('getCacheUrl', [fileId]);
    function getCacheBustedUrl(url) {
      return url + '&cachebust=1659435200' + new Date().getTime();
    }
    var kmlUrl = getCacheBustedUrl('https://docs.google.com/uc?export=download&id=1Pj9KVnn0wOuQIKLmOzRuR7i_zKp_kdCz');
   
      var kmlLayer = new google.maps.KmlLayer({
      url:kmlUrl,//KML      
      map: map,// 'map' es una referencia a tu objeto Google Map
      clickable: true,//activa el clic en el icono
      preserveViewport: false,// centra el mapa      
      suppressInfoWindows: false, //oculta la popup

    });    
    
    
      kmlLayer.addListener('click', function(event) {
      var content = event.featureData.infoWindowHtml;
      var testimonial = document.getElementById('capture');
      testimonial.innerHTML = content;
    });  
    
    map.setTilt(45);
    var marker = new google.maps.Marker({
      position: coord,
      title: 'CDMX',
      map: map,
      
    });

    }
//https://mygeodata.cloud/result


    
    
    
    















