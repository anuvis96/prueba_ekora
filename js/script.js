  document.getElementById('registro').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const nombre = document.getElementById('nombre');
    const correo = document.getElementById('correo');
    const telefono = document.getElementById('telefono');
  
    let errores = [];
  
    if (nombre.value.trim() === '') {
      errores.push('El nombre es obligatorio.');
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo.value)) {
      errores.push('Ingresa un correo válido.');
    }
  
    if (telefono.value && !/^\d{7,15}$/.test(telefono.value)) {
      errores.push('El teléfono debe tener entre 7 y 15 dígitos.');
    }
  
    if (errores.length > 0) {
      alert('Errores en el formulario:\n' + errores.join('\n'));
    } else {
      alert('Gracias por inscribirte. Pronto nos pondremos en contacto contigo.');
      // Aquí podrías agregar lógica para enviar los datos a un backend
      document.getElementById('registro').reset();
    }
  });
  