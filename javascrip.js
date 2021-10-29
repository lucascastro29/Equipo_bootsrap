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
function validity(){
  var num =document.getElementById("validationCustom06").value
  return(6<num && num<9)
 
}

(function () {
  'use strict'

  var form =  document.getElementById("mainform")

 
    
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()||validity() ) {
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
