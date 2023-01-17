let interaction = document.querySelector('a:nth-of-type(12)')
let frontend = document.querySelector('a:nth-of-type(1)')
let design = document.querySelector('a:nth-of-type(2)')
let en = document.querySelector('a:nth-of-type(3)')
let development = document.querySelector('a:nth-of-type(4)')
let sprint = document.querySelector('a:nth-of-type(5)')
let fix = document.querySelector('a:nth-of-type(6)')
let flow = document.querySelector('a:nth-of-type(8)')
let user = document.querySelector('a:nth-of-type(9)')
let interface = document.querySelector('a:nth-of-type(10)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

frontend.addEventListener('click', enlargeHandler) // het is een eventlistener wat er voor zorgt dat je wanneer je klikt op een element het die functie aanroept
frontend.addEventListener('animationend', enlargeHandler) //Hier wordt de animatie gestopt nadat hij 1x is gekomen zodat je niet 2x hoeft te klikken.

function enlargeHandler() {
  frontend.classList.toggle('enlarge') //Hier word de functie opgeroepen zodat het element een enlarge class krijgt met de goeie keyframe
}

design.addEventListener('click', rotationHandler)
design.addEventListener('animationend', rotationHandler)

function rotationHandler() {
  design.classList.toggle('rotate')
}

en.addEventListener('click', upDownLeftRightHandler)
en.addEventListener('animationend', upDownLeftRightHandler)

function upDownLeftRightHandler() {
  en.classList.toggle('updownleftright')
}

development.addEventListener('mouseover', upHoverHandler)
development.addEventListener('animationend', upHoverHandler)

function upHoverHandler() {
  development.classList.toggle('uphover')
}

sprint.addEventListener('mouseleave', colorSwapHandler)
sprint.addEventListener('animationend', colorSwapHandler)

function colorSwapHandler() {
  sprint.classList.toggle('colorswap')
}

fix.addEventListener('dblclick', leftRightClickHandler)
fix.addEventListener('animationend', leftRightClickHandler)

function leftRightClickHandler() {
  fix.classList.toggle('leftrightclick')
}

document.addEventListener('long-press', function(e) {
  e.target.setAttribute('data-editing', 'true');
});

!function(t,e){"use strict";function n(){this.dispatchEvent(new CustomEvent("long-press",{bubbles:!0,cancelable:!0})),clearTimeout(o),console&&console.log&&console.log("long-press fired on "+this.outerHTML)}var o=null,u="ontouchstart"in t||navigator.MaxTouchPoints>0||navigator.msMaxTouchPoints>0,s=u?"touchstart":"mousedown",i=u?"touchcancel":"mouseout",a=u?"touchend":"mouseup",c=u?"touchmove":"mousemove";"initCustomEvent"in e.createEvent("CustomEvent")&&(t.CustomEvent=function(t,n){n=n||{bubbles:!1,cancelable:!1,detail:void 0};var o=e.createEvent("CustomEvent");return o.initCustomEvent(t,n.bubbles,n.cancelable,n.detail),o},t.CustomEvent.prototype=t.Event.prototype),e.addEventListener(s,function(t){var e=t.target,u=parseInt(e.getAttribute("data-long-press-delay")||"1500",10);o=setTimeout(n.bind(e),u)}),e.addEventListener(a,function(t){clearTimeout(o)}),e.addEventListener(i,function(t){clearTimeout(o)}),e.addEventListener(c,function(t){clearTimeout(o)})}(this,document);

flow.addEventListener('mouseenter', flowHandler)
flow.addEventListener('animationend', flowHandler)

function flowHandler() {
  flow.classList.toggle('flow')
}

user.addEventListener('touchend', userHandler)
user.addEventListener('animationend', userHandler)

function userHandler() {
  user.classList.toggle('touchend')
}

interface.addEventListener('touchstart', interfaceHandler)
interface.addEventListener('animationend', interfaceHandler)

function interfaceHandler() {
  interface.classList.toggle('touchstart')
}

