//Se crea un objeto con las suscripciones sujetas a un nombre
const tiposDeSuscripciones = {
    free: 'solo puedes tomar cursos gratuitos',
    basic: 'puedes tomar casi todos los cursos durante un mes',
    expert: 'puedes tomar casi todos los cursos durante un año',
    expertduo: 'tu y alguien más pueden tomar TODOS los cursos durante un año',
};

//para llamarlas se pueden usar dos métodos
tiposDeSuscripciones.free
tiposDeSuscripciones['free']

//definimos una variable que será el input
const suscripcionInput = 'free'

//con esa variable llamamos la información que se encuentra en el objeto
tiposDeSuscripciones[suscripcionInput]

//función
function conseguirSuscripcion(suscripcionInput){
    if (tiposDeSuscripciones[suscripcionInput]){
        console.log(tiposDeSuscripciones[suscripcionInput]);
        return;
    }
    console.warn('ese tipo de suscripción no existe')
}