Template.NuevoContacto.events({
    'submit form' : function (event, template) {
        event.preventDefault();

        var nombre    = event.target.nombre.value;
        var apellidos = event.target.apellido.value;


        // el nombre es requerido
        if (nombre == "") {
            alert('El nombre no puede ser vacío');
            return false;
        }

        Contactos.insert({
            nombre    : nombre,
            apellidos : apellidos
        });
    }
});
