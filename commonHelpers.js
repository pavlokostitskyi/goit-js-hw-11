import{S as p,i as u}from"./assets/vendor-8c59ed88.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function f(r,a){const s="43389395-13044f7a31a85be77891b044e",n="https://pixabay.com/api/",e=new URLSearchParams({key:s,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9});return fetch(`${n}?${e}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function m(r){return r.hits.map(({webformatURL:s,largeImageURL:n,tags:e,likes:t,views:i,comments:l,downloads:d})=>`
        <li class="card">
            <div class="place-for-image">
                <a href="${n}">
                    <img src="${s}" alt="${e}" class="picture"/>
                </a>
            </div>
            <div class="info-text">
                <div class="description">
                    <span class="bold-text">Likes</span>
                    <span class="info-value">${t}</span>
                </div>
                <div class="description">
                    <span class="bold-text">Views</span>
                    <span class="info-value">${i}</span>
                </div>
                <div class="description">
                    <span class="bold-text">Comments</span>
                    <span class="info-value">${l}</span>
                </div>
                <div class="description">
                    <span class="bold-text">Downloads</span>
                    <span class="info-value">${d}</span>
                </div>
            </div>
        </li>`).join("")}const y=document.querySelector(".search-form"),o=document.querySelector(".loader");o.style.borderColor="white";o.style.borderBottomColor="transparent";const c=document.querySelector(".images-place"),h=new p(".card .place-for-image a",{captionsData:"alt",captionDelay:250});y.addEventListener("submit",g);async function g(r){r.preventDefault(),c.innerHTML="",o.style.borderColor="black",o.style.borderBottomColor="transparent",o.style.display="block";const a=r.currentTarget.elements.inputSearch.value;f(a).then(s=>{if(s.total==0)return u.show({title:"Ops.",titleColor:"white",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",color:"red",position:"topCenter",timeout:"5000"}),0;c.insertAdjacentHTML("beforeend",m(s)),h.refresh(),r.target.reset()}).finally(()=>{o.style.borderColor="white",o.style.borderBottomColor="transparent",o.style.display="none"})}
//# sourceMappingURL=commonHelpers.js.map
