(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{173:function(n,r,t){"use strict";var o="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),e=new Uint8Array(16);function d(){if(!o)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return o(e)}for(var y=[],f=0;f<256;++f)y[f]=(f+256).toString(16).substr(1);var c=function(n,r){var i=r||0,t=y;return[t[n[i++]],t[n[i++]],t[n[i++]],t[n[i++]],"-",t[n[i++]],t[n[i++]],"-",t[n[i++]],t[n[i++]],"-",t[n[i++]],t[n[i++]],"-",t[n[i++]],t[n[i++]],t[n[i++]],t[n[i++]],t[n[i++]],t[n[i++]]].join("")};r.a=function(n,r,t){var i=r&&t||0;"string"==typeof n&&(r="binary"===n?new Array(16):null,n=null);var o=(n=n||{}).random||(n.rng||d)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,r)for(var e=0;e<16;++e)r[i+e]=o[e];return r||c(o)}}}]);