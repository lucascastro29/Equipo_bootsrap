var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})
var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}

function inputsVacios(){
  let a=document.getElementById("validationCustom01").value
  let b=document.getElementById("validationCustom02").value
  let c=document.getElementById("validationCustom03").value
  let d=document.getElementById("validationout1").value
  let e=document.getElementById("validationout2").value
  let f=document.getElementById("validationout3").value
  let flag1,flag2
  flag1=(
      (a==null&&b!=null&&c!=null) ||
      (a!=null&&b==null&&c!=null) ||
      (a!=null&&b!=null&&c==null) 
  )
  flag2=(
    (d==null&&e!=null&&f!=null) ||
    (d!=null&&e==null&&f!=null) ||
    (d!=null&&e!=null&&f==null) 
)
return (flag1&&flag2)
}
//si mando todo excepto lo no necesario como telefono y edad aparece el alert verde, sino se recarga la page.
//entonces funca gente clap clap.
function validity(){
  var num =parseInt( document.getElementById("validationCustom06").value);
  var name= document.getElementById("validationCustom01").value.length;
var captcha = parseInt(document.getElementById("validationout3").value);
  alert(( 6<num && num<9 ) && ( 8<name && name<14 ) && ( captcha > 5 && captcha <10 ) && inputsVacios())
  return( ( 6<num && num<9 ) && ( 8<name && name<14 ) && ( captcha > 5 && captcha <10 ) && inputsVacios() )
 
}

(function () {
  'use strict'

  var form =  document.getElementById("mainform")

 
  
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity() && !validity() ) {
          event.preventDefault()
          event.stopPropagation()
        }else{ event.preventDefault()
        let content= `<div class="alert alert-success" role="alert">
            A simple success alert—check it out!
          </div>`
          document.getElementById("result").innerHTML=content
          

        }

        form.classList.add('was-validated')
      }, false)
    
})()
