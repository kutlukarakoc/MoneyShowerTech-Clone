const thingshower = document.getElementById("thingshower");

function changeProduct(item){
    thingshower.src = "../../img/" + item.className + ".png";
}