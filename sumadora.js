function SumarNumero(){
    let num1=prompt("Ingrese el Primer Numero")
    let num2=prompt("Ingrese el Segundo Numero")
    num1=Number(num1);
    num2=Number(num2);
    if(!isNaN(num1)&&!isNaN(num2)){
        let suma= num1+num2;
        alert("Resultado:" + Suma);
    }else{
        alert("Ingrese solo números");
    }
}