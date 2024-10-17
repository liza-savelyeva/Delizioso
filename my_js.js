(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

const alertTrigger = document.querySelector('.needs-validation')
alertTrigger.addEventListener('submit', event => {
  if (alertTrigger.checkValidity()){
    if (alertTrigger.id == 'loginForm') {
      event.preventDefault()
      let wrapper = document.createElement('div')
      wrapper.innerHTML = [
        `<div class="alert alert-dismissible" role="alert">`,
        `   <div>You logged in!</div>`,
        '   <a type="button" class="btn-close btn-close-white" href="index.html"></a>',
        '</div>'
      ].join('')

      alertPlaceholder.append(wrapper)
    } else if (alertTrigger.id == 'signupForm') {
      event.preventDefault()
      let wrapper = document.createElement('div')
      wrapper.innerHTML = [
        `<div class="alert alert-dismissible" role="alert">`,
        `   <div>You signed up!</div>`,
        '   <a type="button" class="btn-close btn-close-white" href="index.html"></a>',
        '</div>'
      ].join('')

      alertPlaceholder.append(wrapper)
    }
  }
})

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
