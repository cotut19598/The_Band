var header = document.getElementById('header');
var mobileBtn = document.getElementById('mobile-btn');
var headerHeight = header.clientHeight;
var sliders = document.querySelectorAll('.slider');

    mobileBtn.onclick = function() {
        var IsClosed = header.clientHeight === headerHeight;
            if (IsClosed) {
                header.style.height = 'auto';
            } else {
                header.style.height = null;
            }
    }
var menuItems = document.querySelectorAll('#nav li  a');
for (var i = 0; i<menuItems.length; i++) {
    var menuItem = menuItems[i];
    menuItem.onclick = function(event) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('sub-nav');
        if (!isParentMenu) {
            header.style.height = null;           
        } else {
            return false;
        }
    }
}

var indexCurrent = 0;
function moveSlider(){
    sliders.forEach(element => {
        element.style.display = 'none';
    });
    
    indexCurrent++;
    if(indexCurrent > sliders.length){
        indexCurrent = 1;
    }
    sliders[indexCurrent-1].style.display = 'block';
    setTimeout(moveSlider,3000);
}

moveSlider();





































