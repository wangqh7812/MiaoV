window.onload = function () {
    var oNav = document.getElementById('nav');
    var aLi = oNav.getElementsByTagName('li');

    var aA = [];
    var aDiv = [];
    var oTimer = null;
    var i = 0;

    for (i = 0; i < aLi.length; i++) {
        aA.push(aLi[i].getElementsByTagName('a')[0]);
        aDiv.push(aLi[i].getElementsByTagName('div')[0]);
    }

    for (i =0; i < aLi.length; i++) {
        aA[i].index = i;
        aA[i].onmouseover = function () {
            if (oTimer){
                clearTimeout(oTimer);
                oTimer = null;
            }
            for (i = 0; i < aLi.length; i++) {
                aA[i].className = 'button';
                aDiv[i].style.display = 'none';
            }

            aA[this.index].className = 'button active';
            aDiv[this.index].style.display = 'block';
        };
        
        aA[i].onmouseout = function () {
            var index = this.index;
            oTimer = setTimeout(
                function () {
                    aDiv[index].style.display = 'none';
                    oTimer = null;
                },1000
            )
        };

        aDiv[i].index = i;
        aDiv[i].onmouseover = function () {
            if (oTimer){
                clearTimeout(oTimer);
                oTimer = null;
            }
        };

        aDiv[i].onmouseout = function () {
            var index = this.index;
            oTimer = setTimeout(
                function () {
                    aDiv[index].style.display = 'none';
                    oTimer = null;
                },1000
            )
        }
    }
}
