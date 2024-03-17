const lentes = document.querySelector('#lentes');
const ojoDerecho = document.querySelector('#ojo_derecho');
const ojoIzquierdo = document.querySelector('#ojo_izquierdo');
const cejaIzquierda = document.querySelector('#ceja_izquierda');
const cejaDerecha = document.querySelector('#ceja_derecha');
const boca = document.querySelector('#boca');
const barba = document.querySelector('#barba');
const rostro = document.querySelector('#rostro')
const orejaDerecha = document.querySelector('#oreja_derecha');
const orejaIzquierda = document.querySelector('#oreja_izquierda');

let cursorPosition = { x:0, y:0 }; //Resetear la posición del puntero

// Tomamos el ancho y alto del "div" container usando offsetWidth y offsetHeight, porque toman la medida más real.
const container = document.querySelector('.container');
// clientWidth y ClientHeight me dan una medida no tan exacta.
// const containerWidth = container.clientWidth;
// const containerHeight = container.clientHeight;
let containerWidth = container.offsetWidth;
let containerHeight = container.offsetHeight;
// let windowWidth = window.innerWidth;
// let windowHeight = window.innerHeight;

function defineContainerSize() {

    containerWidth = container.offsetWidth;
    containerHeight = container.offsetHeight;
    // windowWidth = window.innerWidth;
    // windowHeight = window.innerHeight;
}

function mouseMove(e) {

    cursorPosition = { 
        x: e.clientX,
        y: e.clientY 
    };
    follow();
    
}

const followCursor = ( element, xRelation, yRelation) => {

    // getBoundingClientRect() devuelve información del tamaño y posición de un elemento.
    const elementOffSet = element.getBoundingClientRect();
    const centerX = elementOffSet.x + elementOffSet.width/2;
    const centerY = elementOffSet.y + elementOffSet.height/2;
    const distanceLeft = Math.round((( cursorPosition.x - centerX ) * 100 )/container.offsetWidth );
    const distanceTop = Math.round((( cursorPosition.y - centerY ) * 100 )/container.offsetHeight );
    // const distanceLeft = Math.round((( cursorPosition.x - centerX ) * 100 )/window.innerWidth );
    // const distanceTop = Math.round((( cursorPosition.y - centerY ) * 100 )/window.innerHeight );
    element.style.transform = `translate( ${ distanceLeft/xRelation }px, ${ distanceTop/yRelation }px )`;
}

const follow = () => {

    if ( ojoDerecho ) followCursor( ojoDerecho, 0.2, 0.2 );
    if ( ojoIzquierdo ) followCursor( ojoIzquierdo, 0.2, 0.2 );
    if ( lentes ) followCursor( lentes, 0.8, 0.8 );
    if ( cejaIzquierda ) followCursor( cejaIzquierda, 0.5, 0.5 );
    if ( cejaDerecha ) followCursor( cejaDerecha, 0.5, 0.5 );
    if ( boca ) followCursor( boca, 0.6, 0.6 );
    if ( barba ) followCursor( barba, 0.9, 0.9 );
    if ( rostro ) followCursor( rostro, 0.9, 0.9 );
    if ( orejaDerecha ) followCursor( orejaDerecha, -1.5, -1.5 );
    if ( orejaIzquierda ) followCursor( orejaIzquierda, -1.5, -1.5 );

    
    
}

container.addEventListener('resize', defineContainerSize);
container.addEventListener('mousemove', mouseMove);
// window.addEventListener('resize', defineContainerSize);
// window.addEventListener('mousemove', mouseMove);