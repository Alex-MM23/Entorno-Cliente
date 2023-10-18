function Fcomprobar(){
    const input = document.getElementById("in1").value;
    const div = document.getElementById("campo");

    let html = "<p>" + input;
    if(input <= 9){
        html += "<a style='padding-left:10px;background-color: green;'>Correcto!</a>";
    }else{
        html += "<a style='padding-left:10px;background-color: red'>Incorrecto!</a>";
    }

    html += "</p>";
    div.innerHTML = html;
}