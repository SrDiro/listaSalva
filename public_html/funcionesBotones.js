function showElement() {

    var select = document.getElementById('select1');

    document.getElementById("valores").innerHTML = '<b>Valores:</b> value(' + select.options[select.selectedIndex].value + ') \n\
    text(' + select.options[select.selectedIndex].text + ') position(' + (select.selectedIndex + 1) + ')';

}

function addElement() {

    var select = document.getElementById("select1");
    var option = document.createElement("option");
    var valor = document.getElementById("newElement").value;
    option.text = valor;
    option.value = valor;
    option.id = select.length + 1;
    select.add(option);

}

function deleteElement() {

    var select = document.getElementById("select1");
    select.remove(select.selectedIndex);

}


function lengthList() {

    document.getElementById("tamano").innerHTML = '<b>Tamaño: </b>' + document.getElementById("select1").length;

}

function deleteAllElements() {
    document.getElementById("select1").length = 0;
}

function options(id) {

    if (document.getElementById("copiar").checked) {

        if (document.getElementById(id)) {
            var select2 = document.getElementById("select2");
            var valor = document.getElementById("select1").value;
            var option = document.createElement("option");
            var options = document.getElementById("select2").options;
            var existe = false;

            option.text = valor;
            option.value = valor;
            option.id = select2.length + 1;
                        
            for (var i = 0; i < select2.length; i++) {
                if (options[i].text === valor) {
                    existe = true;
                }
            }
            
            if (select2.length === 0) {
                select2.add(option);
            }
            
            if (existe === false) {
                select2.add(option);
            }
            
        }

    } else if (document.getElementById("mover").checked) {

    }

}
