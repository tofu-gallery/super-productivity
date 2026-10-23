import{n as E$1,o as I}from"./chunk-CKYLy748.js";import{$t as SC,K as Gc,O as DM,Pt as O,Qn as be,_ as Bv,ca as xo,dn as Te,v as CC,xt as M,ya as zy}from"./chunk-DpSPTUNa.js";import{B as en,I as an,L as bi,Mt as zi,T as Ue,Tt as x,V as eo,g as Ji,jt as za,k as Wi,lt as pd,mt as re,pt as qt,vt as se,xt as tn}from"./chunk-CCkpV3Yz.js";function at(i,t,e){let n=Math.max(Math.abs(i-e.left),Math.abs(i-e.right)),s=Math.max(Math.abs(t-e.top),Math.abs(t-e.bottom));return Math.sqrt(n*n+s*s)}var l;var E;var V;var D;var Z;var rt;var $;var j;var Y;var ot;var R;var lt;var Dt;var dt=I(()=>{"use strict";eo();DM();DM();Ji();zi();qt();Wi();l=(function(i){return i[i.FADING_IN=0]=`FADING_IN`,i[i.VISIBLE=1]=`VISIBLE`,i[i.FADING_OUT=2]=`FADING_OUT`,i[i.HIDDEN=3]=`HIDDEN`,i})(l||{}),E=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=l.HIDDEN;constructor(t,e,n,s=!1){this._renderer=t,this.element=e,this.config=n,this._animationForciblyDisabledThroughCss=s}fadeOut(){this._renderer.fadeOutRipple(this)}},V=an({passive:!0,capture:!0}),D=class{_events=new Map;addHandler(t,e,n,s){let r=this._events.get(e);if(r){let d=r.get(n);d?d.add(s):r.set(n,new Set([s]))}else this._events.set(e,new Map([[n,new Set([s])]])),t.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,V)})}removeHandler(t,e,n){let s=this._events.get(t);if(!s)return;let r=s.get(e);r&&(r.delete(n),r.size===0&&s.delete(e),s.size===0&&(this._events.delete(t),document.removeEventListener(t,this._delegateEventHandler,V)))}_delegateEventHandler=t=>{let e=se(t);e&&this._events.get(t.type)?.forEach((n,s)=>{(s===e||s.contains(e))&&n.forEach(r=>r.handleEvent(t))})}},Z={enterDuration:225,exitDuration:150},rt=800,$=an({passive:!0,capture:!0}),j=[`mousedown`,`touchstart`],Y=[`mouseup`,`mouseleave`,`touchend`,`touchcancel`],ot=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵcmp=CC({type:i,selectors:[[`ng-component`]],hostAttrs:[`mat-ripple-style-loader`,``],decls:0,vars:0,template:function(n,s){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return i})(),R=class i{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new D;constructor(t,e,n,s,r){this._target=t,this._ngZone=e,this._platform=s,s.isBrowser&&(this._containerElement=re(n)),r&&r.get(Ue).load(ot)}fadeInRipple(t,e,n={}){let s=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=E$1(E$1({},Z),n.animation);n.centered&&(t=s.left+s.width/2,e=s.top+s.height/2);let d=n.radius||at(t,e,s),J=t-s.left,K=e-s.top,u=r.enterDuration,o=document.createElement(`div`);o.classList.add(`mat-ripple-element`),o.style.left=`${J-d}px`,o.style.top=`${K-d}px`,o.style.height=`${d*2}px`,o.style.width=`${d*2}px`,n.color!=null&&(o.style.backgroundColor=n.color),o.style.transitionDuration=`${u}ms`,this._containerElement.appendChild(o);let T=window.getComputedStyle(o),Q=T.transitionProperty,I=T.transitionDuration,g=Q===`none`||I===`0s`||I===`0s, 0s`||s.width===0&&s.height===0,p=new E(this,o,n,g);o.style.transform=`scale3d(1, 1, 1)`,p.state=l.FADING_IN,n.persistent||(this._mostRecentTransientRipple=p);let m=null;return!g&&(u||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let w=()=>{m&&(m.fallbackTimer=null),clearTimeout(M),this._finishRippleTransition(p)},_=()=>this._destroyRipple(p),M=setTimeout(_,u+100);o.addEventListener(`transitionend`,w),o.addEventListener(`transitioncancel`,_),m={onTransitionEnd:w,onTransitionCancel:_,fallbackTimer:M}}),this._activeRipples.set(p,m),(g||!u)&&this._finishRippleTransition(p),p}fadeOutRipple(t){if(t.state===l.FADING_OUT||t.state===l.HIDDEN)return;let e=t.element,n=E$1(E$1({},Z),t.config.animation);e.style.transitionDuration=`${n.exitDuration}ms`,e.style.opacity=`0`,t.state=l.FADING_OUT,(t._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(t)}fadeOutAll(){this._getActiveRipples().forEach(t=>t.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(t=>{t.config.persistent||t.fadeOut()})}setupTriggerEvents(t){let e=re(t);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,j.forEach(n=>{i._eventManager.addHandler(this._ngZone,n,e,this)}))}handleEvent(t){t.type===`mousedown`?this._onMousedown(t):t.type===`touchstart`?this._onTouchStart(t):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Y.forEach(e=>{this._triggerElement.addEventListener(e,this,$)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(t){t.state===l.FADING_IN?this._startFadeOutTransition(t):t.state===l.FADING_OUT&&this._destroyRipple(t)}_startFadeOutTransition(t){let e=t===this._mostRecentTransientRipple,{persistent:n}=t.config;t.state=l.VISIBLE,!n&&(!e||!this._isPointerDown)&&t.fadeOut()}_destroyRipple(t){let e=this._activeRipples.get(t)??null;this._activeRipples.delete(t),this._activeRipples.size||(this._containerRect=null),t===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),t.state=l.HIDDEN,e!==null&&(t.element.removeEventListener(`transitionend`,e.onTransitionEnd),t.element.removeEventListener(`transitioncancel`,e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),t.element.remove()}_onMousedown(t){let e=en(t),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+rt;!this._target.rippleDisabled&&!e&&!n&&(this._isPointerDown=!0,this.fadeInRipple(t.clientX,t.clientY,this._target.rippleConfig))}_onTouchStart(t){if(!this._target.rippleDisabled&&!tn(t)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=t.changedTouches;if(e)for(let n=0;n<e.length;n++)this.fadeInRipple(e[n].clientX,e[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(t=>{let e=t.state===l.VISIBLE||t.config.terminateOnPointerUp&&t.state===l.FADING_IN;!t.config.persistent&&e&&t.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let t=this._triggerElement;t&&(j.forEach(e=>i._eventManager.removeHandler(e,t,this)),this._pointerUpEventsRegistered&&(Y.forEach(e=>t.removeEventListener(e,this,$)),this._pointerUpEventsRegistered=!1))}};lt=new O(`mat-ripple-global-options`),Dt=(()=>{class i{_elementRef=M(xo);_animationsDisabled=pd();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=M(Te),n=M(x),s=M(lt,{optional:!0}),r=M(be);this._globalOptions=s||{},this._rippleRenderer=new R(this,e,this._elementRef,n,r)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:E$1(E$1(E$1({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,n=0,s){return typeof e==`number`?this._rippleRenderer.fadeInRipple(e,n,E$1(E$1({},this.rippleConfig),s)):this._rippleRenderer.fadeInRipple(0,0,E$1(E$1({},this.rippleConfig),e))}static ɵfac=function(n){return new(n||i)};static ɵdir=SC({type:i,selectors:[[``,`mat-ripple`,``],[``,`matRipple`,``]],hostAttrs:[1,`mat-ripple`],hostVars:2,hostBindings:function(n,s){n&2&&Bv(`mat-ripple-unbounded`,s.unbounded)},inputs:{color:[0,`matRippleColor`,`color`],unbounded:[0,`matRippleUnbounded`,`unbounded`],centered:[0,`matRippleCentered`,`centered`],radius:[0,`matRippleRadius`,`radius`],animation:[0,`matRippleAnimation`,`animation`],disabled:[0,`matRippleDisabled`,`disabled`],trigger:[0,`matRippleTrigger`,`trigger`]},exportAs:[`matRipple`]})}return i})()});var It;var pt=I(()=>{"use strict";DM();It=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵcmp=CC({type:i,selectors:[[`structural-styles`]],decls:0,vars:0,template:function(n,s){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return i})()});var Nt;var ct=I(()=>{"use strict";bi();DM();Nt=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=zy({type:i});static ɵinj=Gc({imports:[za]})}return i})()});export{Z as a,l as c,R as i,lt as l,It as n,ct as o,Nt as r,dt as s,Dt as t,pt as u};