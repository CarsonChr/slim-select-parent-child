import{d as o,S as s,_ as c,r as a,o as n,c as r,a as e,b as h,w as d,e as m,f as i}from"./index.js";const p=o({name:"Home",data(){return{single:null,multiple:null}},mounted(){this.single=new s({select:this.$refs.slimSingle}),this.multiple=new s({select:this.$refs.slimMulti}),setTimeout(()=>{this.single&&this.single.open(),setTimeout(()=>{this.single&&this.single.setSelected("best")},500),setTimeout(()=>{this.single&&this.single.setSelected("select")},1e3),setTimeout(()=>{this.single&&this.single.setSelected("ever")},1500),setTimeout(()=>{this.single&&this.single.close()},2e3),this.multiple&&this.multiple.open(),setTimeout(()=>{this.multiple&&this.multiple.setSelected(["best"])},500),setTimeout(()=>{this.multiple&&this.multiple.setSelected(["best","select"])},1e3),setTimeout(()=>{this.multiple&&this.multiple.setSelected(["best","select","ever"])},1500),setTimeout(()=>{this.multiple&&this.multiple.close()},2e3)},500)},unmounted(){this.single&&this.single.destroy(),this.multiple&&this.multiple.destroy()}}),t="/assets/check-mark.svg";const u={id:"home",class:"content"},_={class:"samples row"},g={class:"single"},f=e("h2",{id:"sample-select-header"},"Single Select",-1),v={ref:"slimSingle","aria-labelledby":"sample-select-header"},b=e("option",{"data-placeholder":"true"},null,-1),S=e("option",{value:"best"},"Best",-1),w=e("option",{value:"select"},"Select",-1),k=e("option",{value:"ever"},"Ever",-1),y=[b,S,w,k],T={class:"multi"},C=e("h2",null,"Multi Select",-1),x={ref:"slimMulti",multiple:""},B=e("option",{value:"best"},"Best",-1),L=e("option",{value:"select"},"Select",-1),M=e("option",{value:"ever"},"Ever",-1),H=[B,L,M],$=m('<br><div class="support"><h2 class="header">Support</h2><p>Help support creators that make development easier!</p><div class="links"><iframe src="https://github.com/sponsors/brianvoe/button" title="Sponsor brianvoe" height="35" width="116" style="border:0;"></iframe><a href="https://www.buymeacoffee.com/brianvoe" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-orange.png" alt="Buy Me A Coffee" style="height:auto !important;width:auto !important;"></a></div></div><br><div class="separator"></div><br><div class="features"><h2 class="header">Features</h2><div class="row"><ul class="list"><li><img src="'+t+'"> No Dependencies</li><li><img src="'+t+'"> ~30kb - ~5kb gzip</li><li><img src="'+t+'"> Single Select</li><li><img src="'+t+'"> Multiple Select</li><li><img src="'+t+'"> Addable Options</li><li><img src="'+t+'"> Html Options</li><li><img src="'+t+'"> Settable Data</li><li><img src="'+t+'"> Callback Events</li><li><img src="'+t+'"> Placeholders</li></ul><ul class="list"><li><img src="'+t+'"> Advanced Search</li><li><img src="'+t+'"> Tabbable</li><li><img src="'+t+'"> Disable Options</li><li><img src="'+t+'"> Light Css</li><li><img src="'+t+'"> Light Color Scheme</li><li><img src="'+t+'"> Style Inheritance</li><li><img src="'+t+'"> Clean Animations</li><li><img src="'+t+'"> Performant</li><li><img src="'+t+'"> Typescript</li></ul></div></div><br><div class="separator"></div><br>',9),N={class:"frameworks"},A=e("h2",{class:"header"},"Frameworks",-1),E=e("p",null,[i(" SlimSelect is in the process of adding a few framework integrations."),e("br"),i(" If you are an expert in any specific framework and would like to help out, please reach out! ")],-1),V={class:"row frameworks"},z=e("svg",{viewBox:"0 0 128 128",width:"100",height:"100"},[e("path",{fill:"#42b883",d:"M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"}),e("path",{fill:"#35495e",d:"M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"})],-1);function D(O,F,I,P,j,q){const l=a("router-link");return n(),r("div",u,[e("div",_,[e("div",g,[f,e("select",v,y,512)]),e("div",T,[C,e("select",x,H,512)])]),$,e("div",N,[A,E,e("div",V,[h(l,{to:"frameworks#vue"},{default:d(()=>[z]),_:1})])])])}const J=c(p,[["render",D]]);export{J as default};
