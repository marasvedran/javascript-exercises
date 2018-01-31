function myFunction() {

     var link = document.getElementById("links");
     var id = link.getAttribute("id");
    var href = link.getAttribute("href");
    var hreflang = link.getAttribute("hreflang");
    var target = link.getAttribute("target");



    console.log(id, href, hreflang, target);

}