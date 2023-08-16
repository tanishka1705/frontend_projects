

function calculateBMI(){
   let weight =  document.getElementById("wght").value
   let height = document.getElementById("hght").value

   let result = document.getElementById("res")

    if(height == "" || weight == ""){
        alert("Please Enter Valid Input")
    }
    else if(isNaN(weight) || isNaN(height)){
        alert("Please Enter a Number")
    } 

    else{

        let bmi = ((weight) / ((height*height)/10000)).toFixed(1)
        result.innerHTML = bmi

        if(bmi <= 18.4){
            msg.innerHTML= "Under Weight"
            msg.style.color = "blue"
        }
        else if(bmi >= 18.5 && bmi<=24.9){
            msg.innerHTML = "Nomal Weight"
            msg.style.color = "green"
        }
        else if(bmi>=25 && bmi<=29.9)
        {
            msg.innerHTML = "Over Weight"
            msg.style.color = "orange"
        }
        else{
            msg.innerHTML = "Obese"
            msg.style.color = "red"
        }
    }
    
}

