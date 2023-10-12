function tabuada(){
    let num = document.getElementById("numero")
    let tab = document.getElementById("tabuada")

    if(num.value.length != 0){
        let n = Number(num.value)
        let c= 1
        tab.innerHTML = ""
        while (c<=10){
            let item =document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}` /* Para PHP - adicionar value ao <option> */
            tab.appendChild(item)
            c++
        }
    }else{
        window.alert("Por favor, digite um número!")
        
    }
}