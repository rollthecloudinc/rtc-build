(self.webpackChunkspear=self.webpackChunkspear||[]).push([[592],{745:(D,u,e)=>{e.d(u,{of:()=>r});var o=e(420),d=e(7400);function r(...s){const _=(0,o.yG)(s);return(0,d.D)(s,_)}},4744:(D,u,e)=>{e.d(u,{d:()=>r});var o=e(1944),d=e(3945);function r(s){return(0,o.e)((_,g)=>{let E=!1;_.subscribe((0,d.x)(g,c=>{E=!0,g.next(c)},()=>{E||g.next(s),g.complete()}))})}},155:(D,u,e)=>{e.d(u,{P:()=>E});var o=e(4423),d=e(116),r=e(9295),s=e(4744),_=e(7354),g=e(9173);function E(c,f){const P=arguments.length>=2;return M=>M.pipe(c?(0,d.h)((m,p)=>c(m,p,M)):g.y,(0,r.q)(1),P?(0,s.d)(f):(0,_.T)(()=>new o.K))}},4503:(D,u,e)=>{e.d(u,{R:()=>r});var o=e(1944),d=e(4382);function r(s,_){return(0,o.e)((0,d.U)(s,_,arguments.length>=2,!0))}},4382:(D,u,e)=>{e.d(u,{U:()=>d});var o=e(3945);function d(r,s,_,g,E){return(c,f)=>{let P=_,M=s,m=0;c.subscribe((0,o.x)(f,p=>{const l=m++;M=P?r(M,p,l):(P=!0,p),g&&f.next(M)},E&&(()=>{P&&f.next(M),f.complete()})))}}},7354:(D,u,e)=>{e.d(u,{T:()=>s});var o=e(4423),d=e(1944),r=e(3945);function s(g=_){return(0,d.e)((E,c)=>{let f=!1;E.subscribe((0,r.x)(c,P=>{f=!0,c.next(P)},()=>f?c.complete():c.error(g())))})}function _(){return new o.K}},4423:(D,u,e)=>{e.d(u,{K:()=>d});const d=(0,e(7543).d)(r=>function(){r(this),this.name="EmptyError",this.message="no elements in sequence"})},5192:(D,u,e)=>{e.r(u),e.d(u,{CONTENT_PLUGIN:()=>m,ContentBinding:()=>f,ContentInstance:()=>P,ContentModule:()=>E,ContentPlugin:()=>c,ContentPluginEditorOptions:()=>M,ContentPluginManager:()=>p});var o=e(7451),d=e(3192),r=e(521),s=e(7868),_=e(745),g=e(840);let E=(()=>{class l{}return l.\u0275fac=function(t){return new(t||l)},l.\u0275mod=o.\u0275\u0275defineNgModule({type:l}),l.\u0275inj=o.\u0275\u0275defineInjector({imports:[[d.CommonModule]]}),l})();class c extends s.Plugin{constructor(n){super(n),this.fileTypes=[],n&&(this.name=this.id,this.handler=void 0!==n.handler?n.handler:void 0,this.selectionComponent=n.selectionComponent?n.selectionComponent:void 0,this.renderComponent=n.renderComponent?n.renderComponent:void 0,this.editorComponent=n.editorComponent?n.editorComponent:void 0)}}class f{constructor(n){n&&(this.type=n.type,this.id=n.id)}}class P{constructor(n){this.settings=[],n&&(this.pluginName=n.pluginName,n.settings&&(this.settings=n.settings.map(t=>new r.AttributeValue(t))))}}class M{constructor(n){this.fullscreen=!1,n&&(this.fullscreen=n.fullscreen)}}const m=new o.InjectionToken("ContentPlugin");let p=(()=>{class l extends s.BasePluginManager{constructor(t,i){super(t,i)}pluginDef(){return(0,_.of)(new s.PluginDef({name:"content"}))}}return l.\u0275fac=function(t){return new(t||l)(o.\u0275\u0275inject(s.PluginConfigurationManager),o.\u0275\u0275inject(g.ModuleLoaderService))},l.\u0275prov=o.\u0275\u0275defineInjectable({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},5543:(D,u,e)=>{e.r(u),e.d(u,{BasePluginManager:()=>P,ConfigDiscovery:()=>f,Plugin:()=>m,PluginConfig:()=>M,PluginConfigModule:()=>l,PluginConfigurationManager:()=>c,PluginDef:()=>p,PluginModule:()=>E});var o=e(7451),d=e(840),r=e(745),s=e(1640),_=e(635),g=e(2673);let E=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=o.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=o.\u0275\u0275defineInjector({imports:[[d.UtilsModule]]}),n})(),c=(()=>{class n{constructor(){this.configs=[]}addConfig(i){this.configs.push(i)}getConfigs(){return this.configs}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),f=(()=>{class n{constructor(i,a){this.pcm=i,this.moduleLoader=a}loadPlugins(i,a=[]){const h=this.pcm.getConfigs(),I=h.length,v=[];for(let C=0;C<I;C++){const y=h[C].modules.length;for(let O=0;O<y;O++)h[C].modules[O].plugins.has(i.name)&&(0===a.length||a.some(L=>h[C].modules[O].plugins.get(i.name).findIndex(T=>T===L)>-1))&&v.push(this.moduleLoader.loadModule(h[C].modules[O].module))}return 0===v.length?(0,r.of)(!0):(0,s.D)(v).pipe((0,_.U)(()=>!0))}}return n.\u0275fac=function(i){return new(i||n)(o.\u0275\u0275inject(c),o.\u0275\u0275inject(d.ModuleLoaderService))},n.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();class P{constructor(t,i){this.pcm=t,this.moduleLoader=i,this.pluginInstances=new Map,this.discoveryPipeline=[],this.discovery()}discovery(){this.discoveryPipeline.push(new f(this.pcm,this.moduleLoader))}addDiscovery(t){this.discoveryPipeline.push(t)}register(t){this.pluginInstances.set(t.id,t)}getPlugins(t){const i=t?t.filter(a=>!this.pluginInstances.has(a)):[];return t&&0===i.length?(0,r.of)(new Map(t.map(a=>[a,this.pluginInstances.get(a)]))):this.pluginDef().pipe((0,g.w)(a=>(0,s.D)(this.discoveryPipeline.map(h=>h.loadPlugins(a,i))).pipe((0,_.U)(()=>t?new Map(t.map(h=>[h,this.pluginInstances.get(h)])):this.pluginInstances))))}getPlugin(t){return this.pluginInstances.has(t)?(0,r.of)(this.pluginInstances.get(t)):this.pluginDef().pipe((0,g.w)(i=>(0,s.D)(this.discoveryPipeline.map(a=>a.loadPlugins(i,[t]))).pipe((0,_.U)(()=>this.pluginInstances.get(t)))))}}class M{constructor(t){this.modules=[],t&&t.modules&&(this.modules=t.modules.map(i=>new l(i)))}}class m{constructor(t){t&&(this.id=t.id,this.title=t.title)}}class p{constructor(t){t&&(this.name=t.name)}}class l{constructor(t){t&&(this.module=t.module,t.plugins&&(this.plugins=new Map([...t.plugins])))}}}}]);
//# sourceMappingURL=common.c84ad78ead1a0403.js.map