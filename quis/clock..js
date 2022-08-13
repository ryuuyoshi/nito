  window.onload = function() {
    setInterval(function() {
      var dd = new Date();
      var days  = dd.getMonth + dd.getDay
      document.getElementById("T1").innerHTML = days.toLocaleString();

      var now = new Date();
      var nowhour = now.getHours();
      var nowminutes = now.getMinutes();
      var nowseconds = now.getSeconds();
  
      var text = nowhour + "：" + nowminutes + "：" + nowseconds; 
      document.getElementById("T2").innerHTML = text;
    }, 1000);
  }