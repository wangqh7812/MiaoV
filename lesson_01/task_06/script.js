window.onload = function () {
    var oMain = document.getElementById('main');
    var aLi = oMain.getElementsByTagName('li');
    var aBox = oMain.getElementsByClassName('box');

    for (i = 0; i < aLi.length; i++){
         aLi[i].index = i;
         aLi[i].onclick = function () {
             for (var n = 0; n < aLi.length; n++) aLi[n].className = '';
             this.className = 'active';
             for (var n = 0; n <aBox.length; n++) aBox[n].style.display = 'none';
             aBox[this.index].style.display = 'block';
         }
    }
}