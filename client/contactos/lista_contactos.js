Template.ListaContactos.helpers({
    cantidad : function () {
        return Contactos.find().count();
    },
    contactos : function () {
        return Contactos.find();
    }
});

Template.ListaContactos.events({
    'click .del' : function (event, template) {
        var idContacto = this._id;
        Contactos.remove({ _id : idContacto });
    }
});
