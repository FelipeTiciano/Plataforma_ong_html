
/* main.js - masks and small interactive bits */
document.addEventListener('DOMContentLoaded', function(){
  // Skip-link focus fix: ensure first focusable element is main
  document.querySelectorAll('.mask').forEach(function(el){
    el.addEventListener('input', function(e){
      const t = e.target;
      if(t.dataset.type === 'cpf'){
        let v = t.value.replace(/\D/g,'').slice(0,11);
        v = v.replace(/(\d{3})(\d)/,'$1.$2');
        v = v.replace(/(\d{3})(\d)/,'$1.$2');
        v = v.replace(/(\d{3})(\d{1,2})$/,'$1-$2');
        t.value = v;
      }
      if(t.dataset.type === 'phone'){
        let v = t.value.replace(/\D/g,'').slice(0,11);
        if(v.length>10) v = v.replace(/(\d{2})(\d{5})(\d{4})/,'($1) $2-$3');
        else v = v.replace(/(\d{2})(\d{4})(\d{0,4})/,'($1) $2-$3');
        t.value = v;
      }
      if(t.dataset.type === 'cep'){
        let v = t.value.replace(/\D/g,'').slice(0,8);
        v = v.replace(/(\d{5})(\d{3})/,'$1-$2');
        t.value = v;
      }
    });
  });

  // Simple form enhancement: show thank you on submit (client-side)
  const form = document.getElementById('cadastroForm');
  if(form){
    form.addEventListener('submit', function(e){
      if(!form.checkValidity()){ return; }
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      btn.textContent = 'Enviando...';
      setTimeout(()=> {
        btn.textContent = 'Enviado ✓';
        alert('Cadastro enviado — isso é uma simulação. Verifique marcação HTML5 e scripts.');
        btn.disabled = false;
        btn.textContent = 'Enviar';
        form.reset();
      }, 800);
    });
  }
});
