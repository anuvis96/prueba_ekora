const form = document.getElementById('registro');
const usuariosDiv = document.getElementById('usuariosGuardados');
const usuarios = [];

form.addEventListener('submit', function (e) {
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
    // Guardar localmente en array (DOM)
    const nuevoUsuario = {
      nombre: nombre.value,
      correo: correo.value,
      telefono: telefono.value
    };

    usuarios.push(nuevoUsuario);
    mostrarUsuarios();
    form.reset();
    alert('Gracias por inscribirte. Pronto nos pondremos en contacto contigo.');
  }
});

function mostrarUsuarios() {
  usuariosDiv.innerHTML = '<h3>Usuarios registrados:</h3><ul>';
  usuarios.forEach((u, i) => {
    usuariosDiv.innerHTML += `<li><strong>${i + 1}.</strong> ${u.nombre} - ${u.correo}${u.telefono ? ' - ' + u.telefono : ''}</li>`;
  });
  usuariosDiv.innerHTML += '</ul>';
}

  