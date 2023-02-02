function getCountryByIP() {
    var a = new XMLHttpRequest();
    var b = document.getElementById("input").value;

    a.open('GET', 'http://www.geoplugin.net/xml.gp?ip=xx.xx.xx.xx', true);


    a.onload = function () {
        if (a.readyState === 4 && a.status === 200) {
            var c = a.responseXML;
            //console.log(c);
            //var countryName = c.getElementsByTagName("geoplugin_countryName");
            var countryName = c.getElementsByTagName('geoplugin_countryName')[0].innerHTML;
            console.log(countryName);
            //[0].childNodes[0].nodeValue; = [0].innerHtml
            document.getElementById("result").textContent = countryName;
        }
    };
    a.send();
};

