window.onload = function () {
    var oMain = document.getElementById('main');
    var aLi = oMain.getElementsByTagName('li');
    var aBox = oMain.getElementsByClassName('box');

    for (i = 0; i < aLi.length; i++){
         aLi[i].index = i;  /*把当前的i值赋给aLi[i]的下标，所以意义在哪*/
         aLi[i].onclick = function () {
             for (n = 0; n < aLi.length; n++) aLi[n].className = '';
             this.className = 'active';
             for (n = 0; n <aBox.length; n++) aBox[n].style.display = 'none';
             aBox[this.index].style.display = 'block';
         }
    }
}