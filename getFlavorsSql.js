$( document ).ready(function(){
    var data = [];
    var html = document.getElementsByClassName('detailed-dropdown')[0];
    var options = html.getElementsByTagName("option");
    for (var i = 0; i < options.length; i++) {
       var x = options[i].innerHTML.split(':');
        var y = x[1].split(',');

      if(y[0].indexOf('vCPU') != -1){
                	
            let jsn = {
                name:   x[0],
                vCPU:   parseFloat(y[0]),
                Memory: parseFloat(y[1])*1024,
                price: y[3].replace(' ', '').replace('&nbsp;', '').replace('US$', '')+'.'+y[4].replace('/hora', ''),
                location: 'South america (Sao paulo)',
                currency: 'USD',
                OsType: 'linux'
            };
           
            data.push(jsn);
             
             }
    }
    // console.log(data);
    var sql = "INSERT INTO flavorsazure (name, vCPU, memory, price, currency, versionDate, location, osType) VALUES ";
    data.forEach( function(x, index) {
        sql+="('"+x.name+"', ";
        sql+="'"+x.vCPU+"', ";
        sql+="'"+x.Memory+"', ";
        sql+="'"+x.price+"', ";
        sql+="'"+x.currency+"', ";
        sql+="'"+moment().format('YYYY-MM-DD HH:mm:ss')+"',";
        sql+="'South America (Sao Paulo)', ";
        sql+="'"+x.OsType+"'), ";
    });
    var nsql = sql.substr(0,(sql.length - 2));
       sql = nsql;
    sql+= ";";
    console.log(sql);

});

/*
 CREATE TABLE `flavorsazure` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `vCPU` bigint(20) DEFAULT NULL,
  `memory` bigint(20) DEFAULT NULL,
  `osType` varchar(255) DEFAULT NULL,
  `price` decimal(19,6) DEFAULT NULL,
  `currency` varchar(11) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `versionDate` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53011 DEFAULT CHARSET=latin1
*/

