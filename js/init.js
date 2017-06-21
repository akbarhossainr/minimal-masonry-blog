function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
    /*document.getElementById("wrapper").style.marginRight = "250px";*/
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    /*document.getElementById("wrapper").style.marginRight= "0";*/
}

$(function(){
    $('#masonry-grid').masonry({
        // options
        itemSelector : '.item'
    });
});