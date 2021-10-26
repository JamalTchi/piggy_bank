//fonction qui additionne et retourne la valeur dans un span
function somme() {
    var tbody = document.getElementById('tbody');
    var firstTable = tbody.getElementsByTagName("tr");
    
    var total = 0
    console.log(firstTable)
    
    for (var i = 0; i < firstTable.length; i++) {
        
        var tr = firstTable[i];
        var result = tr.getElementsByTagName('td')[2].textContent;// je récupere la valeur dans le tableau
        
        total += Number(result); //convertie la string en integer
        console.log(total)
        finalTotal = total.toFixed(2)// permet de laisser jusqu'à 2chiffre aprés la virgule
    }
    //if (firstTable.length === 0) {
    //    var finalTotal = 0
    //}
    if (finalTotal >= 0) {
        modifColor = document.getElementById("total");
        modifColor.innerHTML= finalTotal;// affichage de la valeur dans la <span> avec l'id=total
        modifColor.style.color = 'green';
    } else {
        modifColor.innerHTML= finalTotal;
        modifColor.style.color = "red";
    }
}

// Fonction qui supprime une ligne du tableau (<tr>) et qui appel la fonction somme() permettant de mettrer a jour la somme totale
function supprimer() {
    var removeLinks = document.getElementsByClassName('Supprimer');

    for (var i = 0; i < removeLinks.length; i++) {
        removeLinks[i].addEventListener('click', function (e) {
          this.parentNode.remove();
          somme()
          e.preventDefault();
        });
    }
    
}

getIdName = document.getElementById('name');
getIdPrice = document.getElementById('price');

getIdName.addEventListener('click', function(e) {
    getIdName.style.border = null;
    document.getElementById("error-message").textContent = "";
})
getIdPrice.addEventListener('click', function(e) {
    getIdPrice.style.border = null;
    document.getElementById("error-message-price").textContent = "";
})

document.getElementById('submit').addEventListener('click', function(e) {
    
    var names = getIdName.value;
    var price = getIdPrice.value;
    var description = document.getElementById("description").value;
    
   
    if (names === "") {
        getIdName.style.border = '2px solid red';
        document.getElementById("error-message").textContent = 'veuillez remplir le champs :)';
    }
    if (price === "" || isNaN(price)) {
        getIdPrice.style.border = '2px solid red';
        document.getElementById("error-message-price").textContent = 'veuillez remplir le champs :)';
        if (isNaN(price)) {
            document.getElementById("error-message-price").textContent = 'seul les chiffres sont acceptés';
        }
    } 
    else {
        var table = document.getElementById("myTable");
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
    
        cell1.innerHTML = names;
        cell2.innerHTML = description;
        cell3.innerHTML = price;
        cell4.innerHTML = "X"
    
        cell4.classList.add('Supprimer');
    }

    getIdName.value = '';
    document.getElementById('description').value = '';
    getIdPrice.value = '';
    
    
    somme()
    supprimer()
    e.preventDefault();
});

supprimer()
somme()
