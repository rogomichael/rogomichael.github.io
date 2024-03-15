(()=>{"use strict";var m={};function l(){return window.StacksProvider||window.BlockstackProvider}function q(){return!!l()}const R="refs/tags/v6.5.1",y=null,S=null,w="22189f3d97dfcbb14a5b45a07f9c4a4efe4d040e",h=null,_="MISSING_ENV_VAR".TEST_ENV==="true",b=null,v=null,L=null,P=null,A=null,W="MISSING_ENV_VAR".LEDGER_BITCOIN_ENABLED==="true",T="MISSING_ENV_VAR".SWAP_ENABLED==="true";let r=function(e){return e.request="request",e.authenticationRequest="hiroWalletStacksAuthenticationRequest",e.signatureRequest="hiroWalletSignatureRequest",e.structuredDataSignatureRequest="hiroWalletStructuredDataSignatureRequest",e.transactionRequest="hiroWalletStacksTransactionRequest",e.profileUpdateRequest="hiroWalletProfileUpdateRequest",e.psbtRequest="hiroWalletPsbtRequest",e}({});const f="stacks-wallet",I="content-script";let i=function(e){return e.transactionRequest="hiroWalletTransactionRequest",e.transactionResponse="hiroWalletTransactionResponse",e.authenticationRequest="hiroWalletAuthenticationRequest",e.authenticationResponse="hiroWalletAuthenticationResponse",e.signatureRequest="hiroWalletSignatureRequest",e.signatureResponse="hiroWalletSignatureResponse",e.structuredDataSignatureRequest="hiroWalletStructuredDataSignatureRequest",e.structuredDataSignatureResponse="hiroWalletStructuredDataSignatureResponse",e.profileUpdateRequest="hiroWalletProfileUpdateRequest",e.profileUpdateResponse="hiroWalletProfileUpdateResponse",e.psbtRequest="hiroWalletPsbtRequest",e.psbtResponse="hiroWalletPsbtResponse",e}({}),N=function(e){return e.RequestDerivedStxAccounts="RequestDerivedStxAccounts",e.OriginatingTabClosed="OriginatingTabClosed",e}({});async function g(e,o={}){return new Promise((s,n)=>{const a=setTimeout(()=>{n("Unable to get response from Blockstack extension")},1e3),t=d=>{d.data.source==="blockstack-extension"&&d.data.method===`${e}Response`&&(clearTimeout(a),window.removeEventListener("message",t),s(d.data))};window.addEventListener("message",t),window.postMessage({method:e,source:"blockstack-app",...o},window.location.origin)})}function u(e,o){const{data:s}=e,n=s.source===f,a=s.method===o;return n&&a&&!!s.payload}const p={isHiroWallet:!0,getURL:async()=>{const{url:e}=await g("getURL");return e},structuredDataSignatureRequest:async e=>{const o=new CustomEvent(r.structuredDataSignatureRequest,{detail:{signatureRequest:e}});return document.dispatchEvent(o),new Promise((s,n)=>{const a=t=>{if(u(t,i.signatureResponse)&&t.data.payload?.signatureRequest===e){if(window.removeEventListener("message",a),t.data.payload.signatureResponse==="cancel"){n(t.data.payload.signatureResponse);return}typeof t.data.payload.signatureResponse!="string"&&s(t.data.payload.signatureResponse)}};window.addEventListener("message",a)})},signatureRequest:async e=>{const o=new CustomEvent(r.signatureRequest,{detail:{signatureRequest:e}});return document.dispatchEvent(o),new Promise((s,n)=>{const a=t=>{if(u(t,i.signatureResponse)&&t.data.payload?.signatureRequest===e){if(window.removeEventListener("message",a),t.data.payload.signatureResponse==="cancel"){n(t.data.payload.signatureResponse);return}typeof t.data.payload.signatureResponse!="string"&&s(t.data.payload.signatureResponse)}};window.addEventListener("message",a)})},authenticationRequest:async e=>{const o=new CustomEvent(r.authenticationRequest,{detail:{authenticationRequest:e}});return document.dispatchEvent(o),new Promise((s,n)=>{const a=t=>{if(u(t,i.authenticationResponse)&&t.data.payload?.authenticationRequest===e){if(window.removeEventListener("message",a),t.data.payload.authenticationResponse==="cancel"){n(t.data.payload.authenticationResponse);return}s(t.data.payload.authenticationResponse)}};window.addEventListener("message",a)})},transactionRequest:async e=>{const o=new CustomEvent(r.transactionRequest,{detail:{transactionRequest:e}});return document.dispatchEvent(o),new Promise((s,n)=>{const a=t=>{if(u(t,i.transactionResponse)&&t.data.payload?.transactionRequest===e){if(window.removeEventListener("message",a),t.data.payload.transactionResponse==="cancel"){n(t.data.payload.transactionResponse);return}typeof t.data.payload.transactionResponse!="string"&&s(t.data.payload.transactionResponse)}};window.addEventListener("message",a)})},psbtRequest:async e=>{const o=new CustomEvent(r.psbtRequest,{detail:{psbtRequest:e}});return document.dispatchEvent(o),new Promise((s,n)=>{const a=t=>{if(u(t,i.psbtResponse)&&t.data.payload?.psbtRequest===e){if(window.removeEventListener("message",a),t.data.payload.psbtResponse==="cancel"){n(t.data.payload.psbtResponse);return}typeof t.data.payload.psbtResponse!="string"&&s(t.data.payload.psbtResponse)}};window.addEventListener("message",a)})},profileUpdateRequest:async e=>{const o=new CustomEvent(r.profileUpdateRequest,{detail:{profileUpdateRequest:e}});return document.dispatchEvent(o),new Promise((s,n)=>{const a=t=>{if(u(t,i.profileUpdateResponse)&&t.data.payload?.profileUpdateRequest===e){if(window.removeEventListener("message",a),t.data.payload.profileUpdateResponse==="cancel"){n(t.data.payload.profileUpdateResponse);return}typeof t.data.payload.profileUpdateResponse!="string"&&s(t.data.payload.profileUpdateResponse)}};window.addEventListener("message",a)})},getProductInfo(){return{version:"6.5.1",name:"Leather",meta:{tag:R,commit:w}}},request(e,o){const s=crypto.randomUUID(),n={jsonrpc:"2.0",id:s,method:e,params:o};return document.dispatchEvent(new CustomEvent(r.request,{detail:n})),new Promise((a,t)=>{function d(E){const c=E.data;if(c.id===s)return window.removeEventListener("message",d),"error"in c?t(c):a(c)}window.addEventListener("message",d)})}};window.StacksProvider=p,window.LeatherProvider=p,window.HiroWalletProvider=p,typeof window.btc>"u"&&(window.btc={request:l()?.request,listen(e,o){function s(n){n.data&&n.event===e&&o(n.event)}return window.addEventListener("message",s),()=>window.removeEventListener("message",s)}})})();