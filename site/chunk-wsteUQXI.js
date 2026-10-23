import{d as N,n as E,o as I,r as F}from"./chunk-CKYLy748.js";import{$t as SC,At as N_,Bi as ut$1,C as Co,Ci as r2,Di as sI,F as Ev,G as G_,Ht as P_,Ji as wN,Jt as Rb,K as Gc,Ki as vv,Kr as lb,Ni as u2,O as DM,Pt as O,Qn as be,Qr as mc,Rn as Z_,Rt as Ov,S as Cd,Ti as re,Tn as WN,Tt as Md,U as Fs,Wt as Q_,Zn as bd,_ as Bv,_t as Ky,ai as nm,an as Sh,ca as xo,ci as oe,d as Aa$1,di as pI,dn as Te,fr as f2,ft as Js,g as Bn,ha as yv,hi as q,hn as U_,jn as Xy,li as os,lt as Jb,mr as fN,nt as Hv,on as So,or as du,ot as Iv,pt as Jv,r as $N,sa as xh,sn as Sv,ua as xv,ui as p2,un as Td,v as CC,x as C_,xt as M,ya as zy,yi as q_}from"./chunk-DpSPTUNa.js";import{n as P,t as I$1}from"./chunk-BCd2RZKS.js";import{S as w,l as Yt$1}from"./chunk-dyHZtZ-p.js";import{n as _,t as T}from"./chunk-CqP3wTqx.js";import{Ct as un,D as Vi,E as Ur,L as bi,Mt as zi,O as Vr,R as bt,T as Ue,Tt as x,V as eo,W as gs,_ as Jt,_t as sd,b as Kr,g as Ji,gt as rs,jt as za$1,k as Wi,l as Gd,lt as pd,p as Hi,pt as qt,t as $i,w as Qt,z as dd}from"./chunk-CCkpV3Yz.js";import{n as It$1,o as ct,r as Nt,u as pt$1}from"./chunk-CAoNfbGC.js";import{A as We,B as dt,E as Ua$1,F as Yt$2,K as kr,N as Ye,P as Yn$1,S as Pr,X as ni,Y as mi,Z as os$1,_ as Ki,a as De,b as Nr,c as Ga$1,f as Hr,g as Jr,j as Wr,l as Gs,n as Be,q as kt,r as Br,rt as vs,s as Fe,st as zs,w as Re,x as Oe,z as bt$1}from"./chunk-DPNJ07R1.js";function Gn(e){return e==null?void 0:p2(e)}var ka;var ut;var jt;var Un=I(()=>{"use strict";DM();DM();Ji();qt();Wr();Wi();pt$1();ka=new O(`MAT_BUTTON_CONFIG`);ut=(()=>{class e{_elementRef=M(xo);_ngZone=M(Te);_animationsDisabled=pd();_config=M(ka,{optional:!0});_focusMonitor=M(rs);_cleanupClick;_renderer=M(du);_rippleLoader=M(Ua$1);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}showProgress=r2(!1,{transform:f2});constructor(){M(Ue).load(It$1);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName===`A`,this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:`mat-mdc-button-ripple`})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t=`program`,n){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,n):this._elementRef.nativeElement.focus(n)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`click`,t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static ɵfac=function(n){return new(n||e)};static ɵdir=SC({type:e,hostAttrs:[1,`mat-mdc-button-base`],hostVars:15,hostBindings:function(n,a){n&2&&(yv(`disabled`,a._getDisabledAttribute())(`aria-disabled`,a._getAriaDisabled())(`tabindex`,a._getTabIndex()),fN(a.color?`mat-`+a.color:``),Bv(`mat-mdc-button-progress-indicator-shown`,a.showProgress())(`mat-mdc-button-disabled`,a.disabled)(`mat-mdc-button-disabled-interactive`,a.disabledInteractive)(`mat-unthemed`,!a.color)(`_mat-animation-noopable`,a._animationsDisabled))},inputs:{color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,f2],disabled:[2,`disabled`,`disabled`,f2],ariaDisabled:[2,`aria-disabled`,`ariaDisabled`,f2],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,f2],tabIndex:[2,`tabIndex`,`tabIndex`,Gn],_tabindex:[2,`tabindex`,`_tabindex`,Gn],showProgress:[1,`showProgress`]}})}return e})(),jt=(()=>{class e extends ut{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static ɵfac=function(n){return new(n||e)};static ɵcmp=(function(){let t=[`*`,[[``,`progressIndicator`,``]]],n=[`*`,`[progressIndicator]`];function a(o,i){o&1&&(Td(0,`div`,1),G_(1,1),Cd())}return CC({type:e,selectors:[[`button`,`mat-icon-button`,``],[`a`,`mat-icon-button`,``],[`button`,`matIconButton`,``],[`a`,`matIconButton`,``]],hostAttrs:[1,`mdc-icon-button`,`mat-mdc-icon-button`],exportAs:[`matButton`,`matAnchor`],features:[Ky],ngContentSelectors:n,decls:5,vars:1,consts:[[1,`mat-mdc-button-persistent-ripple`,`mdc-icon-button__ripple`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(i,r){i&1&&(q_(t),Iv(0,`span`,0),G_(1),C_(2,a,2,0,`div`,1),Iv(3,`span`,2)(4,`span`,3)),i&2&&(Jb(2),N_(r.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--%NS%mat-icon-button-state-layer-size, 40px);
  height: var(--%NS%mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--%NS%mat-icon-button-state-layer-size, 40px) - var(--%NS%mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--%NS%mat-icon-button-icon-size, 24px);
  color: var(--%NS%mat-icon-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--%NS%mat-icon-button-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface-variant) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-icon-button-touch-target-size, 48px);
  display: var(--%NS%mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--%NS%mat-icon-button-icon-size, 24px);
  height: var(--%NS%mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__determinate-circle-graphic {
  width: inherit;
  height: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__indeterminate-circle-graphic {
  height: 100%;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})})()}return e})()});function wa(e){return e.hasAttribute(`mat-raised-button`)?`elevated`:e.hasAttribute(`mat-stroked-button`)?`outlined`:e.hasAttribute(`mat-flat-button`)?`filled`:e.hasAttribute(`mat-button`)?`text`:null}var Yn;var ft;var _e;var $n;var pt;var xe;var Se;var Na;var Xt=I(()=>{"use strict";Un();DM();DM();bi();ct();Yn=new Map([[`text`,[`mat-mdc-button`]],[`filled`,[`mdc-button--unelevated`,`mat-mdc-unelevated-button`]],[`elevated`,[`mdc-button--raised`,`mat-mdc-raised-button`]],[`outlined`,[`mdc-button--outlined`,`mat-mdc-outlined-button`]],[`tonal`,[`mat-tonal-button`]]]),ft=(()=>{class e extends ut{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||`text`)}_appearance=null;constructor(){super();let t=wa(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let n=this._elementRef.nativeElement.classList,a=this._appearance?Yn.get(this._appearance):null,o=Yn.get(t);a&&n.remove(...a),n.add(...o),this._appearance=t}static ɵfac=function(n){return new(n||e)};static ɵcmp=(function(){let t=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``],[``,8,`material-symbols-outlined`,3,`iconPositionEnd`,``],[``,8,`material-symbols-rounded`,3,`iconPositionEnd`,``],[``,8,`material-symbols-sharp`,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``],[``,`iconPositionEnd`,``,8,`material-symbols-outlined`],[``,`iconPositionEnd`,``,8,`material-symbols-rounded`],[``,`iconPositionEnd`,``,8,`material-symbols-sharp`]],[[``,`progressIndicator`,``]]],n=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd]), .material-symbols-outlined:not([iconPositionEnd]), .material-symbols-rounded:not([iconPositionEnd]), .material-symbols-sharp:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd], .material-symbols-outlined[iconPositionEnd], .material-symbols-rounded[iconPositionEnd], .material-symbols-sharp[iconPositionEnd]`,`[progressIndicator]`];function a(o,i){o&1&&(Td(0,`div`,2),G_(1,3),Cd())}return CC({type:e,selectors:[[`button`,`matButton`,``],[`a`,`matButton`,``],[`button`,`mat-button`,``],[`button`,`mat-raised-button`,``],[`button`,`mat-flat-button`,``],[`button`,`mat-stroked-button`,``],[`a`,`mat-button`,``],[`a`,`mat-raised-button`,``],[`a`,`mat-flat-button`,``],[`a`,`mat-stroked-button`,``]],hostAttrs:[1,`mdc-button`],inputs:{appearance:[0,`matButton`,`appearance`]},exportAs:[`matButton`,`matAnchor`],features:[Ky],ngContentSelectors:n,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(i,r){i&1&&(q_(t),Iv(0,`span`,0),G_(1),Td(2,`span`,1),G_(3,1),Cd(),G_(4,2),C_(5,a,2,0,`div`,2),Iv(6,`span`,3)(7,`span`,4)),i&2&&(Bv(`mdc-button__ripple`,!r._isFab)(`mdc-fab__ripple`,r._isFab),Jb(5),N_(r.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--%NS%mat-button-text-horizontal-padding, 12px);
  height: var(--%NS%mat-button-text-container-height, 40px);
  font-family: var(--%NS%mat-button-text-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-text-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-text-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-text-label-text-transform);
  font-weight: var(--%NS%mat-button-text-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-text-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--%NS%mat-button-text-label-text-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded,
.material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding: 0 var(--%NS%mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-text-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-text-touch-target-size, 48px);
  display: var(--%NS%mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-filled-container-height, 40px);
  font-family: var(--%NS%mat-button-filled-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-filled-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-filled-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-filled-label-text-transform);
  font-weight: var(--%NS%mat-button-filled-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-filled-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-state-layer-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-filled-touch-target-size, 48px);
  display: var(--%NS%mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--%NS%mat-button-filled-label-text-color, var(--%NS%mat-sys-on-primary));
  background-color: var(--%NS%mat-button-filled-container-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-filled-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --%NS%mat-progress-spinner-active-indicator-color: var(--%NS%mat-button-filled-progress-active-indicator-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--%NS%mat-button-protected-container-elevation-shadow, var(--%NS%mat-sys-level1));
  height: var(--%NS%mat-button-protected-container-height, 40px);
  font-family: var(--%NS%mat-button-protected-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-protected-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-protected-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-protected-label-text-transform);
  font-weight: var(--%NS%mat-button-protected-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-protected-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-protected-touch-target-size, 48px);
  display: var(--%NS%mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--%NS%mat-button-protected-label-text-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-button-protected-container-color, var(--%NS%mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-protected-container-shape, var(--%NS%mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--%NS%mat-button-protected-hover-container-elevation-shadow, var(--%NS%mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--%NS%mat-button-protected-focus-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--%NS%mat-button-protected-pressed-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-protected-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--%NS%mat-button-protected-disabled-container-elevation-shadow, var(--%NS%mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-outlined-container-height, 40px);
  font-family: var(--%NS%mat-button-outlined-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-outlined-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-outlined-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-outlined-label-text-transform);
  font-weight: var(--%NS%mat-button-outlined-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  border-radius: var(--%NS%mat-button-outlined-container-shape, var(--%NS%mat-sys-corner-full));
  border-width: var(--%NS%mat-button-outlined-outline-width, 1px);
  padding: 0 var(--%NS%mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-outlined-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-outlined-touch-target-size, 48px);
  display: var(--%NS%mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--%NS%mat-button-outlined-label-text-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-button-outlined-outline-color, var(--%NS%mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: var(--%NS%mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-tonal-container-height, 40px);
  font-family: var(--%NS%mat-button-tonal-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-tonal-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-tonal-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-tonal-label-text-transform);
  font-weight: var(--%NS%mat-button-tonal-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--%NS%mat-button-tonal-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-tonal-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-tonal-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-tonal-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-secondary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-tonal-touch-target-size, 48px);
  display: var(--%NS%mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})})()}return e})();_e=ft,$n=new O(`mat-mdc-fab-default-options`,{providedIn:`root`,factory:()=>pt}),pt={color:`accent`},xe=(()=>{class e extends ut{_options=M($n,{optional:!0});_isFab=!0;extended=!1;constructor(){super(),this._options=this._options||pt,this.color=this._options.color||pt.color}static ɵfac=function(n){return new(n||e)};static ɵcmp=(function(){let t=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``],[``,8,`material-symbols-outlined`,3,`iconPositionEnd`,``],[``,8,`material-symbols-rounded`,3,`iconPositionEnd`,``],[``,8,`material-symbols-sharp`,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``],[``,`iconPositionEnd`,``,8,`material-symbols-outlined`],[``,`iconPositionEnd`,``,8,`material-symbols-rounded`],[``,`iconPositionEnd`,``,8,`material-symbols-sharp`]],[[``,`progressIndicator`,``]]],n=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd]), .material-symbols-outlined:not([iconPositionEnd]), .material-symbols-rounded:not([iconPositionEnd]), .material-symbols-sharp:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd], .material-symbols-outlined[iconPositionEnd], .material-symbols-rounded[iconPositionEnd], .material-symbols-sharp[iconPositionEnd]`,`[progressIndicator]`];function a(o,i){o&1&&(Td(0,`div`,2),G_(1,3),Cd())}return CC({type:e,selectors:[[`button`,`mat-fab`,``],[`a`,`mat-fab`,``],[`button`,`matFab`,``],[`a`,`matFab`,``]],hostAttrs:[1,`mdc-fab`,`mat-mdc-fab-base`,`mat-mdc-fab`],hostVars:4,hostBindings:function(i,r){i&2&&Bv(`mdc-fab--extended`,r.extended)(`mat-mdc-extended-fab`,r.extended)},inputs:{extended:[2,`extended`,`extended`,f2]},exportAs:[`matButton`,`matAnchor`],features:[Ky],ngContentSelectors:n,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(i,r){i&1&&(q_(t),Iv(0,`span`,0),G_(1),Td(2,`span`,1),G_(3,1),Cd(),G_(4,2),C_(5,a,2,0,`div`,2),Iv(6,`span`,3)(7,`span`,4)),i&2&&(Bv(`mdc-button__ripple`,!r._isFab)(`mdc-fab__ripple`,r._isFab),Jb(5),N_(r.showProgress()?5:-1))},styles:[`.mat-mdc-fab-base {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 56px;
  height: 56px;
  padding: 0;
  border: none;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  overflow: visible;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-fab-base .mat-mdc-button-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-fab-base .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-fab-base .mdc-button__label,
.mat-mdc-fab-base .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-fab-base .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-mdc-fab-base:focus-visible > .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-fab-base._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-fab-base::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mat-mdc-fab-base[hidden] {
  display: none;
}
.mat-mdc-fab-base::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mat-mdc-fab-base:active, .mat-mdc-fab-base:focus {
  outline: none;
}
.mat-mdc-fab-base:hover {
  cursor: pointer;
}
.mat-mdc-fab-base > svg {
  width: 100%;
}
.mat-mdc-fab-base .mat-icon,
.mat-mdc-fab-base .material-icons,
.mat-mdc-fab-base .material-symbols-outlined,
.mat-mdc-fab-base .material-symbols-rounded,
.mat-mdc-fab-base .material-symbols-sharp {
  transition: transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);
  fill: currentColor;
  will-change: transform;
}
.mat-mdc-fab-base .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
  border-radius: calc(var(--%NS%mat-fab-container-shape, var(--%NS%mat-sys-corner-large)) + calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px));
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base[disabled]:focus, .mat-mdc-fab-base.mat-mdc-button-disabled, .mat-mdc-fab-base.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-fab-base.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-fab {
  background-color: var(--%NS%mat-fab-container-color, var(--%NS%mat-sys-primary-container));
  border-radius: var(--%NS%mat-fab-container-shape, var(--%NS%mat-sys-corner-large));
  color: var(--%NS%mat-fab-foreground-color, var(--%NS%mat-sys-on-primary-container, inherit));
  box-shadow: var(--%NS%mat-fab-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-fab:hover {
    box-shadow: var(--%NS%mat-fab-hover-container-elevation-shadow, var(--%NS%mat-sys-level4));
  }
}
.mat-mdc-fab:focus {
  box-shadow: var(--%NS%mat-fab-focus-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-fab:active, .mat-mdc-fab:focus:active {
  box-shadow: var(--%NS%mat-fab-pressed-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-fab[disabled], .mat-mdc-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-fab-disabled-state-foreground-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-fab-disabled-state-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-fab-touch-target-size, 48px);
  display: var(--%NS%mat-fab-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-fab-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-fab .mat-ripple-element {
  background-color: var(--%NS%mat-fab-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-state-layer-color, var(--%NS%mat-sys-on-primary-container));
}
.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-disabled-state-layer-color);
}
.mat-mdc-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-mini-fab {
  width: 40px;
  height: 40px;
  background-color: var(--%NS%mat-fab-small-container-color, var(--%NS%mat-sys-primary-container));
  border-radius: var(--%NS%mat-fab-small-container-shape, var(--%NS%mat-sys-corner-medium));
  color: var(--%NS%mat-fab-small-foreground-color, var(--%NS%mat-sys-on-primary-container, inherit));
  box-shadow: var(--%NS%mat-fab-small-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-mini-fab:hover {
    box-shadow: var(--%NS%mat-fab-small-hover-container-elevation-shadow, var(--%NS%mat-sys-level4));
  }
}
.mat-mdc-mini-fab:focus {
  box-shadow: var(--%NS%mat-fab-small-focus-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-mini-fab:active, .mat-mdc-mini-fab:focus:active {
  box-shadow: var(--%NS%mat-fab-small-pressed-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-mini-fab .mat-focus-indicator::before {
  border-radius: calc(var(--%NS%mat-fab-small-container-shape, var(--%NS%mat-sys-corner-medium)) + calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px));
}
.mat-mdc-mini-fab[disabled], .mat-mdc-mini-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-fab-small-disabled-state-foreground-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-fab-small-disabled-state-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-mini-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-fab-small-touch-target-size, 48px);
  display: var(--%NS%mat-fab-small-touch-target-display);
  left: 50%;
  width: var(--%NS%mat-fab-small-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-mini-fab .mat-ripple-element {
  background-color: var(--%NS%mat-fab-small-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-small-state-layer-color, var(--%NS%mat-sys-on-primary-container));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-small-disabled-state-layer-color);
}
.mat-mdc-mini-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-small-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-mini-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-small-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-mini-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-small-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-extended-fab {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  padding-left: 20px;
  padding-right: 20px;
  width: auto;
  max-width: 100%;
  line-height: normal;
  box-shadow: var(--%NS%mat-fab-extended-container-elevation-shadow, var(--%NS%mat-sys-level3));
  height: var(--%NS%mat-fab-extended-container-height, 56px);
  border-radius: var(--%NS%mat-fab-extended-container-shape, var(--%NS%mat-sys-corner-large));
  font-family: var(--%NS%mat-fab-extended-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-fab-extended-label-text-size, var(--%NS%mat-sys-label-large-size));
  font-weight: var(--%NS%mat-fab-extended-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-fab-extended-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
@media (hover: hover) {
  .mat-mdc-extended-fab:hover {
    box-shadow: var(--%NS%mat-fab-extended-hover-container-elevation-shadow, var(--%NS%mat-sys-level4));
  }
}
.mat-mdc-extended-fab:focus {
  box-shadow: var(--%NS%mat-fab-extended-focus-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-extended-fab:active, .mat-mdc-extended-fab:focus:active {
  box-shadow: var(--%NS%mat-fab-extended-pressed-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab[disabled]:focus, .mat-mdc-extended-fab.mat-mdc-button-disabled, .mat-mdc-extended-fab.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
[dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .mat-icon, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-icons, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-symbols-outlined, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-symbols-rounded, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-symbols-sharp,
.mat-mdc-extended-fab > .mat-icon,
.mat-mdc-extended-fab > .material-icons,
.mat-mdc-extended-fab > .material-symbols-outlined,
.mat-mdc-extended-fab > .material-symbols-rounded,
.mat-mdc-extended-fab > .material-symbols-sharp {
  margin-left: -8px;
  margin-right: 12px;
}
.mat-mdc-extended-fab .mdc-button__label + .mat-icon,
.mat-mdc-extended-fab .mdc-button__label + .material-icons,
.mat-mdc-extended-fab .mdc-button__label + .material-symbols-outlined,
.mat-mdc-extended-fab .mdc-button__label + .material-symbols-rounded,
.mat-mdc-extended-fab .mdc-button__label + .material-symbols-sharp, [dir=rtl] .mat-mdc-extended-fab > .mat-icon, [dir=rtl] .mat-mdc-extended-fab > .material-icons, [dir=rtl] .mat-mdc-extended-fab > .material-symbols-outlined, [dir=rtl] .mat-mdc-extended-fab > .material-symbols-rounded, [dir=rtl] .mat-mdc-extended-fab > .material-symbols-sharp {
  margin-left: 12px;
  margin-right: -8px;
}
.mat-mdc-extended-fab .mat-mdc-button-touch-target {
  width: 100%;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  margin-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`],encapsulation:2})})()}return e})(),Se=(()=>{class e extends ut{_options=M($n,{optional:!0});_isFab=!0;constructor(){super(),this._options=this._options||pt,this.color=this._options.color||pt.color}static ɵfac=function(n){return new(n||e)};static ɵcmp=(function(){let t=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``],[``,8,`material-symbols-outlined`,3,`iconPositionEnd`,``],[``,8,`material-symbols-rounded`,3,`iconPositionEnd`,``],[``,8,`material-symbols-sharp`,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``],[``,`iconPositionEnd`,``,8,`material-symbols-outlined`],[``,`iconPositionEnd`,``,8,`material-symbols-rounded`],[``,`iconPositionEnd`,``,8,`material-symbols-sharp`]],[[``,`progressIndicator`,``]]],n=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd]), .material-symbols-outlined:not([iconPositionEnd]), .material-symbols-rounded:not([iconPositionEnd]), .material-symbols-sharp:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd], .material-symbols-outlined[iconPositionEnd], .material-symbols-rounded[iconPositionEnd], .material-symbols-sharp[iconPositionEnd]`,`[progressIndicator]`];function a(o,i){o&1&&(Td(0,`div`,2),G_(1,3),Cd())}return CC({type:e,selectors:[[`button`,`mat-mini-fab`,``],[`a`,`mat-mini-fab`,``],[`button`,`matMiniFab`,``],[`a`,`matMiniFab`,``]],hostAttrs:[1,`mdc-fab`,`mat-mdc-fab-base`,`mdc-fab--mini`,`mat-mdc-mini-fab`],exportAs:[`matButton`,`matAnchor`],features:[Ky],ngContentSelectors:n,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(i,r){i&1&&(q_(t),Iv(0,`span`,0),G_(1),Td(2,`span`,1),G_(3,1),Cd(),G_(4,2),C_(5,a,2,0,`div`,2),Iv(6,`span`,3)(7,`span`,4)),i&2&&(Bv(`mdc-button__ripple`,!r._isFab)(`mdc-fab__ripple`,r._isFab),Jb(5),N_(r.showProgress()?5:-1))},styles:[`.mat-mdc-fab-base {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 56px;
  height: 56px;
  padding: 0;
  border: none;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  overflow: visible;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-fab-base .mat-mdc-button-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-fab-base .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-fab-base .mdc-button__label,
.mat-mdc-fab-base .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-fab-base .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-mdc-fab-base:focus-visible > .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-fab-base._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-fab-base::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mat-mdc-fab-base[hidden] {
  display: none;
}
.mat-mdc-fab-base::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mat-mdc-fab-base:active, .mat-mdc-fab-base:focus {
  outline: none;
}
.mat-mdc-fab-base:hover {
  cursor: pointer;
}
.mat-mdc-fab-base > svg {
  width: 100%;
}
.mat-mdc-fab-base .mat-icon,
.mat-mdc-fab-base .material-icons,
.mat-mdc-fab-base .material-symbols-outlined,
.mat-mdc-fab-base .material-symbols-rounded,
.mat-mdc-fab-base .material-symbols-sharp {
  transition: transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);
  fill: currentColor;
  will-change: transform;
}
.mat-mdc-fab-base .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
  border-radius: calc(var(--%NS%mat-fab-container-shape, var(--%NS%mat-sys-corner-large)) + calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px));
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base[disabled]:focus, .mat-mdc-fab-base.mat-mdc-button-disabled, .mat-mdc-fab-base.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-fab-base.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-fab {
  background-color: var(--%NS%mat-fab-container-color, var(--%NS%mat-sys-primary-container));
  border-radius: var(--%NS%mat-fab-container-shape, var(--%NS%mat-sys-corner-large));
  color: var(--%NS%mat-fab-foreground-color, var(--%NS%mat-sys-on-primary-container, inherit));
  box-shadow: var(--%NS%mat-fab-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-fab:hover {
    box-shadow: var(--%NS%mat-fab-hover-container-elevation-shadow, var(--%NS%mat-sys-level4));
  }
}
.mat-mdc-fab:focus {
  box-shadow: var(--%NS%mat-fab-focus-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-fab:active, .mat-mdc-fab:focus:active {
  box-shadow: var(--%NS%mat-fab-pressed-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-fab[disabled], .mat-mdc-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-fab-disabled-state-foreground-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-fab-disabled-state-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-fab-touch-target-size, 48px);
  display: var(--%NS%mat-fab-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-fab-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-fab .mat-ripple-element {
  background-color: var(--%NS%mat-fab-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-state-layer-color, var(--%NS%mat-sys-on-primary-container));
}
.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-disabled-state-layer-color);
}
.mat-mdc-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-mini-fab {
  width: 40px;
  height: 40px;
  background-color: var(--%NS%mat-fab-small-container-color, var(--%NS%mat-sys-primary-container));
  border-radius: var(--%NS%mat-fab-small-container-shape, var(--%NS%mat-sys-corner-medium));
  color: var(--%NS%mat-fab-small-foreground-color, var(--%NS%mat-sys-on-primary-container, inherit));
  box-shadow: var(--%NS%mat-fab-small-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-mini-fab:hover {
    box-shadow: var(--%NS%mat-fab-small-hover-container-elevation-shadow, var(--%NS%mat-sys-level4));
  }
}
.mat-mdc-mini-fab:focus {
  box-shadow: var(--%NS%mat-fab-small-focus-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-mini-fab:active, .mat-mdc-mini-fab:focus:active {
  box-shadow: var(--%NS%mat-fab-small-pressed-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-mini-fab .mat-focus-indicator::before {
  border-radius: calc(var(--%NS%mat-fab-small-container-shape, var(--%NS%mat-sys-corner-medium)) + calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px));
}
.mat-mdc-mini-fab[disabled], .mat-mdc-mini-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-fab-small-disabled-state-foreground-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-fab-small-disabled-state-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-mini-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-fab-small-touch-target-size, 48px);
  display: var(--%NS%mat-fab-small-touch-target-display);
  left: 50%;
  width: var(--%NS%mat-fab-small-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-mini-fab .mat-ripple-element {
  background-color: var(--%NS%mat-fab-small-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-small-state-layer-color, var(--%NS%mat-sys-on-primary-container));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-small-disabled-state-layer-color);
}
.mat-mdc-mini-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-small-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-mini-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-small-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-mini-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-small-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-extended-fab {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  padding-left: 20px;
  padding-right: 20px;
  width: auto;
  max-width: 100%;
  line-height: normal;
  box-shadow: var(--%NS%mat-fab-extended-container-elevation-shadow, var(--%NS%mat-sys-level3));
  height: var(--%NS%mat-fab-extended-container-height, 56px);
  border-radius: var(--%NS%mat-fab-extended-container-shape, var(--%NS%mat-sys-corner-large));
  font-family: var(--%NS%mat-fab-extended-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-fab-extended-label-text-size, var(--%NS%mat-sys-label-large-size));
  font-weight: var(--%NS%mat-fab-extended-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-fab-extended-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
@media (hover: hover) {
  .mat-mdc-extended-fab:hover {
    box-shadow: var(--%NS%mat-fab-extended-hover-container-elevation-shadow, var(--%NS%mat-sys-level4));
  }
}
.mat-mdc-extended-fab:focus {
  box-shadow: var(--%NS%mat-fab-extended-focus-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-extended-fab:active, .mat-mdc-extended-fab:focus:active {
  box-shadow: var(--%NS%mat-fab-extended-pressed-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab[disabled]:focus, .mat-mdc-extended-fab.mat-mdc-button-disabled, .mat-mdc-extended-fab.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
[dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .mat-icon, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-icons, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-symbols-outlined, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-symbols-rounded, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-symbols-sharp,
.mat-mdc-extended-fab > .mat-icon,
.mat-mdc-extended-fab > .material-icons,
.mat-mdc-extended-fab > .material-symbols-outlined,
.mat-mdc-extended-fab > .material-symbols-rounded,
.mat-mdc-extended-fab > .material-symbols-sharp {
  margin-left: -8px;
  margin-right: 12px;
}
.mat-mdc-extended-fab .mdc-button__label + .mat-icon,
.mat-mdc-extended-fab .mdc-button__label + .material-icons,
.mat-mdc-extended-fab .mdc-button__label + .material-symbols-outlined,
.mat-mdc-extended-fab .mdc-button__label + .material-symbols-rounded,
.mat-mdc-extended-fab .mdc-button__label + .material-symbols-sharp, [dir=rtl] .mat-mdc-extended-fab > .mat-icon, [dir=rtl] .mat-mdc-extended-fab > .material-icons, [dir=rtl] .mat-mdc-extended-fab > .material-symbols-outlined, [dir=rtl] .mat-mdc-extended-fab > .material-symbols-rounded, [dir=rtl] .mat-mdc-extended-fab > .material-symbols-sharp {
  margin-left: 12px;
  margin-right: -8px;
}
.mat-mdc-extended-fab .mat-mdc-button-touch-target {
  width: 100%;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  margin-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`],encapsulation:2})})()}return e})(),Na=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵmod=zy({type:e});static ɵinj=Gc({imports:[Nt,za$1]})}return e})()});function Wn(e,m=0,t=100){return Math.max(m,Math.min(t,e))}var Ca;var Zn;var Ie;var qn=I(()=>{"use strict";DM();DM();Wi();bi();Ca=new O(`MAT_PROGRESS_BAR_DEFAULT_OPTIONS`),Zn=(()=>{class e{_elementRef=M(xo);_ngZone=M(Te);_changeDetectorRef=M(u2);_renderer=M(du);_cleanupTransitionEnd;constructor(){let t=$i(),n=M(Ca,{optional:!0});this._isNoopAnimation=t===`di-disabled`,t===`reduced-motion`&&this._elementRef.nativeElement.classList.add(`mat-progress-bar-reduced-motion`),n&&(n.color&&(this.color=this._defaultColor=n.color),this.mode=n.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;_defaultColor=`primary`;get value(){return this._value}set value(t){this._value=Wn(t||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(t){this._bufferValue=Wn(t||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new ut$1;get mode(){return this._mode}set mode(t){this._mode=t,this._changeDetectorRef.markForCheck()}_mode=`determinate`;ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,`transitionend`,this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode===`buffer`?this.bufferValue:100}%`}_isIndeterminate(){return this.mode===`indeterminate`||this.mode===`query`}_transitionendHandler=t=>{this.animationEnd.observers.length===0||!t.target||!t.target.classList.contains(`mdc-linear-progress__primary-bar`)||(this.mode===`determinate`||this.mode===`buffer`)&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static ɵfac=function(n){return new(n||e)};static ɵcmp=(function(){function t(n,a){n&1&&Iv(0,`div`,2)}return CC({type:e,selectors:[[`mat-progress-bar`]],hostAttrs:[`role`,`progressbar`,`aria-valuemin`,`0`,`aria-valuemax`,`100`,`tabindex`,`-1`,1,`mat-mdc-progress-bar`,`mdc-linear-progress`],hostVars:10,hostBindings:function(a,o){a&2&&(yv(`aria-valuenow`,o._isIndeterminate()?null:o.value)(`mode`,o.mode),fN(`mat-`+o.color),Bv(`_mat-animation-noopable`,o._isNoopAnimation)(`mdc-linear-progress--animation-ready`,!o._isNoopAnimation)(`mdc-linear-progress--indeterminate`,o._isIndeterminate()))},inputs:{color:`color`,value:[2,`value`,`value`,p2],bufferValue:[2,`bufferValue`,`bufferValue`,p2],mode:`mode`},outputs:{animationEnd:`animationEnd`},exportAs:[`matProgressBar`],decls:7,vars:5,consts:[[`aria-hidden`,`true`,1,`mdc-linear-progress__buffer`],[1,`mdc-linear-progress__buffer-bar`],[1,`mdc-linear-progress__buffer-dots`],[`aria-hidden`,`true`,1,`mdc-linear-progress__bar`,`mdc-linear-progress__primary-bar`],[1,`mdc-linear-progress__bar-inner`],[`aria-hidden`,`true`,1,`mdc-linear-progress__bar`,`mdc-linear-progress__secondary-bar`]],template:function(a,o){a&1&&(Td(0,`div`,0),Iv(1,`div`,1),C_(2,t,1,0,`div`,2),Cd(),Td(3,`div`,3),Iv(4,`span`,4),Cd(),Td(5,`div`,5),Iv(6,`span`,4),Cd()),a&2&&(Jb(),Hv(`flex-basis`,o._getBufferBarFlexBasis()),Jb(),N_(o.mode===`buffer`?2:-1),Jb(),Hv(`transform`,o._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --%NS%mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --%NS%mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--%NS%mat-progress-bar-track-height, 4px), var(--%NS%mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--%NS%mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--%NS%mat-progress-bar-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--%NS%mat-progress-bar-track-height, 4px);
  border-radius: var(--%NS%mat-progress-bar-track-shape, var(--%NS%mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--%NS%mat-progress-bar-track-color, var(--%NS%mat-sys-surface-variant)) calc(var(--%NS%mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--%NS%mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--%NS%mat-progress-bar-track-color, var(--%NS%mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--%NS%mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2})})()}return e})();Ie=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵmod=zy({type:e});static ɵinj=Gc({imports:[za$1]})}return e})()});var Ma;var Pa;var Ta;var Qn;var Aa;var Ia;var za;var Da;var Ba;var Vt;var Kn;var Jn=I(()=>{"use strict";nm();zi();Kr();DM();DM();eo();Ji();bi();Br();ni();gs();mc();Wi();Ma=20,Pa=new O(`mat-tooltip-scroll-strategy`,{providedIn:`root`,factory:()=>{let e=M(be);return()=>Be(e,{scrollThrottle:Ma})}}),Ta=new O(`mat-tooltip-default-options`,{providedIn:`root`,factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})}),Qn=`tooltip-panel`,Aa={passive:!0},Ia=8,za=8,Da=24,Ba=200,Vt=(()=>{class e{_elementRef=M(xo);_ngZone=M(Te);_platform=M(x);_ariaDescriber=M(Gd);_focusMonitor=M(rs);_dir=M(Ur);_injector=M(be);_viewContainerRef=M(Js);_mediaMatcher=M(bt);_document=M(os);_renderer=M(du);_animationsDisabled=pd();_defaultOptions=M(Ta,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position=`below`;_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=Kn;_viewportMargin=8;_currentPosition;_cssClassPrefix=`mat-mdc`;_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(t){t!==this._position&&(this._position=t,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(t){this._positionAtOrigin=sd(t),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(t){let n=sd(t);this._disabled!==n&&(this._disabled=n,n?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(t){this._showDelay=Qt(t)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(t){this._hideDelay=Qt(t),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures=`auto`;get message(){return this._message}set message(t){let n=this._message;this._message=t!=null?String(t).trim():``,!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(n)}_message=``;get tooltipClass(){return this._tooltipClass}set tooltipClass(t){this._tooltipClass=t,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new re;_isDestroyed=!1;constructor(){let t=this._defaultOptions;t&&(this._showDelay=t.showDelay,this._hideDelay=t.hideDelay,t.position&&(this.position=t.position),t.positionAtOrigin&&(this.positionAtOrigin=t.positionAtOrigin),t.touchGestures&&(this.touchGestures=t.touchGestures),t.tooltipClass&&(this.tooltipClass=t.tooltipClass)),this._viewportMargin=Ia}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(pI(this._destroyed)).subscribe(t=>{t?t===`keyboard`&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let t=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(n=>n()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(t,this.message,`tooltip`),this._focusMonitor.stopMonitoring(t)}show(t=this.showDelay,n){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let a=this._createOverlay(n);this._detach(),this._portal=this._portal||new Fe(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=a.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(pI(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(t)}hide(t=this.hideDelay){let n=this._tooltipInstance;n&&(n.isVisible()?n.hide(t):(n._cancelPendingAnimations(),this._detach()))}toggle(t){this._isTooltipVisible()?this.hide():this.show(void 0,t)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(t){if(this._overlayRef){let i=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!t)&&i._origin instanceof xo)return this._overlayRef;this._detach()}let n=this._injector.get(bt$1).getAncestorScrollContainers(this._elementRef),a=`${this._cssClassPrefix}-${Qn}`,o=We(this._injector,this.positionAtOrigin?t||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(n).withPopoverLocation(`global`);return o.positionChanges.pipe(pI(this._destroyed)).subscribe(i=>{this._updateCurrentPositionClass(i.connectionPair),this._tooltipInstance&&i.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=Ye(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,a]:a,scrollStrategy:this._injector.get(Pa)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(pI(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(pI(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(pI(this._destroyed)).subscribe(i=>{i.preventDefault(),i.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(pI(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(t){let n=t.getConfig().positionStrategy,a=this._getOrigin(),o=this._getOverlayPosition();n.withPositions([this._addOffset(E(E({},a.main),o.main)),this._addOffset(E(E({},a.fallback),o.fallback))])}_addOffset(t){let n=za,a=!this._dir||this._dir.value==`ltr`;return t.originY===`top`?t.offsetY=-n:t.originY===`bottom`?t.offsetY=n:t.originX===`start`?t.offsetX=a?-n:n:t.originX===`end`&&(t.offsetX=a?n:-n),t}_getOrigin(){let t=!this._dir||this._dir.value==`ltr`,n=this.position,a;n==`above`||n==`below`?a={originX:`center`,originY:n==`above`?`top`:`bottom`}:n==`before`||n==`left`&&t||n==`right`&&!t?a={originX:`start`,originY:`center`}:(n==`after`||n==`right`&&t||n==`left`&&!t)&&(a={originX:`end`,originY:`center`});let{x:o,y:i}=this._invertPosition(a.originX,a.originY);return{main:a,fallback:{originX:o,originY:i}}}_getOverlayPosition(){let t=!this._dir||this._dir.value==`ltr`,n=this.position,a;n==`above`?a={overlayX:`center`,overlayY:`bottom`}:n==`below`?a={overlayX:`center`,overlayY:`top`}:n==`before`||n==`left`&&t||n==`right`&&!t?a={overlayX:`end`,overlayY:`center`}:(n==`after`||n==`right`&&t||n==`left`&&!t)&&(a={overlayX:`start`,overlayY:`center`});let{x:o,y:i}=this._invertPosition(a.overlayX,a.overlayY);return{main:a,fallback:{overlayX:o,overlayY:i}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Rb(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(t){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=t instanceof Set?Array.from(t):t,this._tooltipInstance._markForCheck())}_invertPosition(t,n){return this.position===`above`||this.position===`below`?n===`top`?n=`bottom`:n===`bottom`&&(n=`top`):t===`end`?t=`start`:t===`start`&&(t=`end`),{x:t,y:n}}_updateCurrentPositionClass(t){let{overlayY:n,originX:a,originY:o}=t,i;if(n===`center`?this._dir&&this._dir.value===`rtl`?i=a===`end`?`left`:`right`:i=a===`start`?`left`:`right`:i=n===`bottom`&&o===`top`?`above`:`below`,i!==this._currentPosition){let r=this._overlayRef;if(r){let d=`${this._cssClassPrefix}-${Qn}-`;r.removePanelClass(d+this._currentPosition),r.addPanelClass(d+i)}this._currentPosition=i}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!==`off`&&(this._disableNativeGesturesIfNecessary(),this._addListener(`touchstart`,t=>{let n=t.targetTouches?.[0],a=n?{x:n.clientX,y:n.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,a)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener(`mouseenter`,t=>{this._setupPointerExitEventsIfNeeded();let n;t.x!==void 0&&t.y!==void 0&&(n=t),this.show(void 0,n)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener(`mouseleave`,t=>{let n=t.relatedTarget;(!n||!this._overlayRef?.overlayElement.contains(n))&&this.hide()}),this._addListener(`wheel`,t=>{if(this._isTooltipVisible()){let n=this._document.elementFromPoint(t.clientX,t.clientY),a=this._elementRef.nativeElement;n!==a&&!a.contains(n)&&this.hide()}});else if(this.touchGestures!==`off`){this._disableNativeGesturesIfNecessary();let t=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener(`touchend`,t),this._addListener(`touchcancel`,t)}}}_addListener(t,n){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,t,n,Aa))}_isTouchPlatform(){let t=this._defaultOptions?.detectHoverCapability;return typeof t==`function`?!t():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!t&&this._mediaMatcher.matchMedia(`(any-hover: none)`).matches:!1}_disableNativeGesturesIfNecessary(){let t=this.touchGestures;if(t!==`off`){let n=this._elementRef.nativeElement,a=n.style;(t===`on`||n.nodeName!==`INPUT`&&n.nodeName!==`TEXTAREA`)&&(a.userSelect=a.msUserSelect=a.webkitUserSelect=a.MozUserSelect=`none`),(t===`on`||!n.draggable)&&(a.webkitUserDrag=`none`),a.touchAction=`none`,a.webkitTapHighlightColor=`transparent`}}_syncAriaDescription(t){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,t,`tooltip`),this._isDestroyed||Rb({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,`tooltip`)}},{injector:this._injector}))}_overlayEventPredicate=t=>t.type===`keydown`?this._isTooltipVisible()&&t.keyCode===27&&!Vr(t):!0;static ɵfac=function(n){return new(n||e)};static ɵdir=SC({type:e,selectors:[[``,`matTooltip`,``]],hostAttrs:[1,`mat-mdc-tooltip-trigger`],hostVars:2,hostBindings:function(n,a){n&2&&Bv(`mat-mdc-tooltip-disabled`,a.disabled)},inputs:{position:[0,`matTooltipPosition`,`position`],positionAtOrigin:[0,`matTooltipPositionAtOrigin`,`positionAtOrigin`],disabled:[0,`matTooltipDisabled`,`disabled`],showDelay:[0,`matTooltipShowDelay`,`showDelay`],hideDelay:[0,`matTooltipHideDelay`,`hideDelay`],touchGestures:[0,`matTooltipTouchGestures`,`touchGestures`],message:[0,`matTooltip`,`message`],tooltipClass:[0,`matTooltipClass`,`tooltipClass`]},exportAs:[`matTooltip`]})}return e})(),Kn=(()=>{class e{_changeDetectorRef=M(u2);_elementRef=M(xo);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=pd();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new re;_showAnimation=`mat-mdc-tooltip-show`;_hideAnimation=`mat-mdc-tooltip-hide`;show(t){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},t)}hide(t){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},t)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:t}){(!t||!this._triggerElement.contains(t))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let t=this._elementRef.nativeElement.getBoundingClientRect();return t.height>Da&&t.width>=Ba}_handleAnimationEnd({animationName:t}){(t===this._showAnimation||t===this._hideAnimation)&&this._finalizeAnimation(t===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(t){t?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(t){let n=this._tooltip.nativeElement,a=this._showAnimation,o=this._hideAnimation;if(n.classList.remove(t?o:a),n.classList.add(t?a:o),this._isVisible!==t&&(this._isVisible=t,this._changeDetectorRef.markForCheck()),t&&!this._animationsDisabled&&typeof getComputedStyle==`function`){let i=getComputedStyle(n);(i.getPropertyValue(`animation-duration`)===`0s`||i.getPropertyValue(`animation-name`)===`none`)&&(this._animationsDisabled=!0)}t&&this._onShow(),this._animationsDisabled&&(n.classList.add(`_mat-animation-noopable`),this._finalizeAnimation(t))}static ɵfac=function(n){return new(n||e)};static ɵcmp=(function(){let t=[`tooltip`];return CC({type:e,selectors:[[`mat-tooltip-component`]],viewQuery:function(a,o){if(a&1&&Ov(t,7),a&2){let i;Q_(i=Z_())&&(o._tooltip=i.first)}},hostAttrs:[`aria-hidden`,`true`],hostBindings:function(a,o){a&1&&Sv(`mouseleave`,function(r){return o._handleMouseLeave(r)})},decls:4,vars:5,consts:[[`tooltip`,``],[1,`mdc-tooltip`,`mat-mdc-tooltip`,3,`animationend`],[1,`mat-mdc-tooltip-surface`,`mdc-tooltip__surface`]],template:function(a,o){a&1&&(Td(0,`div`,1,0),xv(`animationend`,function(r){return o._handleAnimationEnd(r)}),Td(2,`div`,2),wN(3),Cd()()),a&2&&(fN(o.tooltipClass),Bv(`mdc-tooltip--multiline`,o._isMultiline),Jb(3),Jv(o.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--%NS%mat-tooltip-container-color, var(--%NS%mat-sys-inverse-surface));
  color: var(--%NS%mat-tooltip-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-tooltip-container-shape, var(--%NS%mat-sys-corner-extra-small));
  font-family: var(--%NS%mat-tooltip-supporting-text-font, var(--%NS%mat-sys-body-small-font));
  font-size: var(--%NS%mat-tooltip-supporting-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-tooltip-supporting-text-weight, var(--%NS%mat-sys-body-small-weight));
  line-height: var(--%NS%mat-tooltip-supporting-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  letter-spacing: var(--%NS%mat-tooltip-supporting-text-tracking, var(--%NS%mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2})})()}return e})()});var oo;var ta=I(()=>{"use strict";Jn();DM();Ji();bi();Br();De();oo=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵmod=zy({type:e});static ɵinj=Gc({imports:[Vi,Nr,za$1,Re]})}return e})()});var na;var aa;var ro;var ea;var oa=I(()=>{"use strict";na=new WeakMap,aa=new WeakMap,ro=(e,m={})=>{if(e<0||!Number.isFinite(e))throw new Error(`Wait must be a positive finite number`);let t=m.leading!==!1,n=m.trailing!==!1;return(a,o,i)=>{let r=i.value;return i.value=function(...d){let b=na.get(this);b||(b=new Map,na.set(this,b));let c=b.get(o);c||(c={timeoutId:null,lastCallTime:0,lastArgs:null,lastThis:null,isLeadingInvoked:!1},b.set(o,c));let D=new Date().getTime(),I=e-(D-c.lastCallTime);(I<=0||I>e)&&(c.timeoutId&&(clearTimeout(c.timeoutId),c.timeoutId=null),c.isLeadingInvoked=!1);let ht=t&&!c.isLeadingInvoked&&(I<=0||I>e);if(ht){c.lastCallTime=D,c.isLeadingInvoked=!0;try{r.apply(this,d)}catch(nt){throw nt}c.timeoutId&&(c.lastArgs=d,c.lastThis=this)}else c.lastArgs=d,c.lastThis=this;if(n&&!c.timeoutId)c.timeoutId=setTimeout(()=>{let at=c.lastArgs!==null,vt=at&&n;if(c.timeoutId=null,c.lastCallTime=at?new Date().getTime():0,c.isLeadingInvoked=!1,vt&&c.lastArgs&&c.lastThis)try{r.apply(c.lastThis,c.lastArgs)}catch(V){throw c.lastArgs=null,c.lastThis=null,V}c.lastArgs=null,c.lastThis=null},ht?e:I>0&&I<e?I:e)},i}},ea=(e,m={})=>{if(e<0||!Number.isFinite(e))throw new Error(`Wait must be a positive finite number`);let t=!!m.leading;return(n,a,o)=>{let i=o.value;return o.value=function(...r){let d=aa.get(this);d||(d=new Map,aa.set(this,d));let b=d.get(a);b||(b={timeoutId:null,lastCallTime:0,isFirstCall:!0},d.set(a,b));let c=t&&b.isFirstCall;if(b.timeoutId&&(clearTimeout(b.timeoutId),b.timeoutId=null),c){b.isFirstCall=!1,b.lastCallTime=new Date().getTime();try{i.apply(this,r)}catch(D){throw D}}b.timeoutId=setTimeout(()=>{if(b.timeoutId=null,b.lastCallTime=new Date().getTime(),b.isFirstCall=!0,!t)try{i.apply(this,r)}catch(D){throw D}},e)},o}}});var Ht;var ia=I(()=>{"use strict";Ht={duration:3e3}});var Ra;var Y;var It;var tt;var Oa;var Fa;var La;var ja;var Gt;var Ut;var Xa;var Va;var ra;var Yt=I(()=>{"use strict";DM();DM();Ji();gs();Br();mc();Xt();eo();ni();Wi();nm();Ra=Math.pow(2,31)-1,Y=class{_overlayRef;instance;containerInstance;_afterDismissed=new re;_afterOpened=new re;_onAction=new re;_durationTimeoutId;_dismissedByAction=!1;constructor(m,t){this._overlayRef=t,this.containerInstance=m,m._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(m){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(m,Ra))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},It=new O(`MatSnackBarData`),tt=class{politeness=`polite`;announcementMessage=``;viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition=`center`;verticalPosition=`bottom`},Oa=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵdir=SC({type:e,selectors:[[``,`matSnackBarLabel`,``]],hostAttrs:[1,`mat-mdc-snack-bar-label`,`mdc-snackbar__label`]})}return e})(),Fa=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵdir=SC({type:e,selectors:[[``,`matSnackBarActions`,``]],hostAttrs:[1,`mat-mdc-snack-bar-actions`,`mdc-snackbar__actions`]})}return e})(),La=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵdir=SC({type:e,selectors:[[``,`matSnackBarAction`,``]],hostAttrs:[1,`mat-mdc-snack-bar-action`,`mdc-snackbar__action`]})}return e})(),ja=(()=>{class e{snackBarRef=M(Y);data=M(It);action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static ɵfac=function(n){return new(n||e)};static ɵcmp=(function(){function t(n,a){if(n&1){let o=P_();Fs(0,`div`,1)(1,`button`,2),Sv(`click`,function(){Sh(o);let r=U_();return xh(r.action())}),wN(2),bd()()}if(n&2){let o=U_();Jb(2),Md(` `,o.data.action,` `)}}return CC({type:e,selectors:[[`simple-snack-bar`]],hostAttrs:[1,`mat-mdc-simple-snack-bar`],exportAs:[`matSnackBar`],decls:3,vars:2,consts:[[`matSnackBarLabel`,``],[`matSnackBarActions`,``],[`matButton`,``,`matSnackBarAction`,``,3,`click`]],template:function(a,o){a&1&&(Fs(0,`div`,0),wN(1),bd(),C_(2,t,3,1,`div`,1)),a&2&&(Jb(),Md(` `,o.data.message,`
`),Jb(),N_(o.hasAction?2:-1))},dependencies:[ft,Oa,Fa,La],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2})})()}return e})(),Gt=`_mat-snack-bar-enter`,Ut=`_mat-snack-bar-exit`,Xa=(()=>{class e extends Yt$2{_ngZone=M(Te);_elementRef=M(xo);_changeDetectorRef=M(u2);_platform=M(x);_animationsDisabled=pd();snackBarConfig=M(tt);_document=M(os);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=M(be);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new re;_onExit=new re;_onEnter=new re;_animationState=`void`;_live;_label;_role;_liveElementId=M(Jt).getId(`mat-snack-bar-container-live-`);constructor(){super();let t=this.snackBarConfig;t.politeness===`assertive`&&!t.announcementMessage?this._live=`assertive`:t.politeness===`off`?this._live=`off`:this._live=`polite`,this._platform.FIREFOX&&(this._live===`polite`&&(this._role=`status`),this._live===`assertive`&&(this._role=`alert`))}attachComponentPortal(t){this._assertNotAttached();let n=this._portalOutlet.attachComponentPortal(t);return this._afterPortalAttached(),n}attachTemplatePortal(t){this._assertNotAttached();let n=this._portalOutlet.attachTemplatePortal(t);return this._afterPortalAttached(),n}attachDomPortal=t=>{this._assertNotAttached();let n=this._portalOutlet.attachDomPortal(t);return this._afterPortalAttached(),n};onAnimationEnd(t){t===Ut?this._completeExit():t===Gt&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState=`visible`,this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?Rb(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Gt)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-snack-bar-fallback-visible`),this.onAnimationEnd(Gt)},200)))}exit(){return this._destroyed?Aa$1(void 0):(this._ngZone.run(()=>{this._animationState=`hidden`,this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute(`mat-exit`,``),clearTimeout(this._announceTimeoutId),this._animationsDisabled?Rb(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Ut)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(Ut),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let t=this._elementRef.nativeElement,n=this.snackBarConfig.panelClass;n&&(Array.isArray(n)?n.forEach(i=>t.classList.add(i)):t.classList.add(n)),this._exposeToModals();let a=this._label.nativeElement,o=`mdc-snackbar__label`;a.classList.toggle(o,!a.querySelector(`.${o}`))}_exposeToModals(){let t=this._liveElementId,n=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let a=0;a<n.length;a++){let o=n[a],i=o.getAttribute(`aria-owns`);this._trackedModals.add(o),i?i.indexOf(t)===-1&&o.setAttribute(`aria-owns`,i+` `+t):o.setAttribute(`aria-owns`,t)}}_clearFromModals(){this._trackedModals.forEach(t=>{let n=t.getAttribute(`aria-owns`);if(n){let a=n.replace(this._liveElementId,``).trim();a.length>0?t.setAttribute(`aria-owns`,a):t.removeAttribute(`aria-owns`)}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let t=this._elementRef.nativeElement,n=t.querySelector(`[aria-hidden]`),a=t.querySelector(`[aria-live]`);if(n&&a){let o=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&n.contains(document.activeElement)&&(o=document.activeElement),n.removeAttribute(`aria-hidden`),a.appendChild(n),o?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static ɵfac=function(n){return new(n||e)};static ɵcmp=(function(){let t=[`label`];function n(a,o){}return CC({type:e,selectors:[[`mat-snack-bar-container`]],viewQuery:function(o,i){if(o&1&&Ov(Gs,7)(t,7),o&2){let r;Q_(r=Z_())&&(i._portalOutlet=r.first),Q_(r=Z_())&&(i._label=r.first)}},hostAttrs:[1,`mdc-snackbar`,`mat-mdc-snack-bar-container`],hostVars:6,hostBindings:function(o,i){o&1&&Sv(`animationend`,function(d){return i.onAnimationEnd(d.animationName)})(`animationcancel`,function(d){return i.onAnimationEnd(d.animationName)}),o&2&&Bv(`mat-snack-bar-container-enter`,i._animationState===`visible`)(`mat-snack-bar-container-exit`,i._animationState===`hidden`)(`mat-snack-bar-container-animations-enabled`,!i._animationsDisabled)},features:[Ky],decls:6,vars:3,consts:[[`label`,``],[1,`mdc-snackbar__surface`,`mat-mdc-snackbar-surface`],[1,`mat-mdc-snack-bar-label`],[`aria-hidden`,`true`],[`cdkPortalOutlet`,``]],template:function(o,i){o&1&&(Fs(0,`div`,1)(1,`div`,2,0)(3,`div`,3),Xy(4,n,0,0,`ng-template`,4),bd(),Ev(5,`div`),bd()()),o&2&&(Jb(5),yv(`aria-live`,i._live)(`role`,i._role)(`id`,i._liveElementId))},dependencies:[Gs],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--%NS%mat-snack-bar-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-snack-bar-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-snack-bar-container-color, var(--%NS%mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--%NS%mat-snack-bar-supporting-text-font, var(--%NS%mat-sys-body-medium-font));
  font-size: var(--%NS%mat-snack-bar-supporting-text-size, var(--%NS%mat-sys-body-medium-size));
  font-weight: var(--%NS%mat-snack-bar-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  line-height: var(--%NS%mat-snack-bar-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--%NS%mat-snack-bar-button-color, var(--%NS%mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --%NS%mat-button-text-state-layer-color: currentColor;
  --%NS%mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2,changeDetection:1})})()}return e})(),Va=new O(`mat-snack-bar-default-options`,{providedIn:`root`,factory:()=>new tt}),ra=(()=>{class e{_live=M(Hi);_injector=M(be);_breakpointObserver=M(un);_parentSnackBar=M(e,{optional:!0,skipSelf:!0});_defaultConfig=M(Va);_animationsDisabled=pd();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=ja;snackBarContainerComponent=Xa;handsetCssClass=`mat-mdc-snack-bar-handset`;get _openedSnackBarRef(){let t=this._parentSnackBar;return t?t._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(t){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=t:this._snackBarRefAtThisLevel=t}openFromComponent(t,n){return this._attach(t,n)}openFromTemplate(t,n){return this._attach(t,n)}open(t,n=``,a){let o=E(E({},this._defaultConfig),a);return o.data={message:t,action:n},o.announcementMessage===t&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(t,n){let a=n&&n.viewContainerRef&&n.viewContainerRef.injector,o=be.create({parent:a||this._injector,providers:[{provide:tt,useValue:n}]}),i=new Fe(this.snackBarContainerComponent,n.viewContainerRef,o),r=t.attach(i);return r.instance.snackBarConfig=n,r.instance}_attach(t,n){let a=E(E(E({},new tt),this._defaultConfig),n),o=this._createOverlay(a),i=this._attachSnackBarContainer(o,a),r=new Y(i,o);if(t instanceof Co){let d=new dt(t,null,{$implicit:a.data,snackBarRef:r});r.instance=i.attachTemplatePortal(d)}else{let d=this._createInjector(a,r),b=new Fe(t,void 0,d);r.instance=i.attachComponentPortal(b).instance}return this._breakpointObserver.observe(dd.HandsetPortrait).pipe(pI(o.detachments())).subscribe(d=>{o.overlayElement.classList.toggle(this.handsetCssClass,d.matches)}),a.announcementMessage&&i._onAnnounce.subscribe(()=>{this._live.announce(a.announcementMessage,a.politeness)}),this._animateSnackBar(r,a),this._openedSnackBarRef=r,this._openedSnackBarRef}_animateSnackBar(t,n){t.afterDismissed().subscribe(()=>{this._openedSnackBarRef==t&&(this._openedSnackBarRef=null),n.announcementMessage&&this._live.clear()}),n.duration&&n.duration>0&&t.afterOpened().subscribe(()=>t._dismissAfter(n.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{t.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):t.containerInstance.enter()}_createOverlay(t){let n=new kt;n.direction=t.direction;let a=mi(this._injector),o=t.direction===`rtl`,i=t.horizontalPosition===`left`||t.horizontalPosition===`start`&&!o||t.horizontalPosition===`end`&&o,r=!i&&t.horizontalPosition!==`center`;return i?a.left(`0`):r?a.right(`0`):a.centerHorizontally(),t.verticalPosition===`top`?a.top(`0`):a.bottom(`0`),n.positionStrategy=a,n.disableAnimations=this._animationsDisabled,Ye(this._injector,n)}_createInjector(t,n){let a=t&&t.viewContainerRef&&t.viewContainerRef.injector;return be.create({parent:a||this._injector,providers:[{provide:Y,useValue:n},{provide:It,useValue:t.data}]})}static ɵfac=function(n){return new(n||e)};static ɵprov=So({token:e,factory:e.ɵfac})}return e})()});function Ha(e,m){e&1&&(Fs(0,`mat-icon`,1),wN(1,`check_circle `),bd())}function Ga(e,m){e&1&&(Fs(0,`mat-icon`,1),wN(1,`error `),bd())}function Ua(e,m){e&1&&(Fs(0,`mat-icon`,1),wN(1,`warning `),bd())}function Ya(e,m){if(e&1&&(C_(0,Ha,2,0,`mat-icon`,1),C_(1,Ga,2,0,`mat-icon`,1),C_(2,Ua,2,0,`mat-icon`,1)),e&2){let t=U_();N_(t.data.type===`SUCCESS`?0:-1),Jb(),N_(t.data.type===`ERROR`?1:-1),Jb(),N_(t.data.type===`WARNING`?2:-1)}}function $a(e,m){if(e&1&&(Fs(0,`mat-icon`,1),wN(1),bd()),e&2){let t=U_();Jb(),Jv(t.data.ico)}}function Wa(e,m){if(e&1&&Ev(0,`mat-icon`,2),e&2){let t=U_();vv(`svgIcon`,t.data.svgIco)}}function Za(e,m){if(e&1){let t=P_();Fs(0,`button`,9),Sv(`click`,function(){Sh(t);let a=U_();return xh(a.actionClick())}),wN(1),$N(2,`translate`),bd()}if(e&2){let t=U_();Jb(),Md(` `,WN(2,1,t.data.actionStr),` `)}}function qa(e,m){if(e&1){let t=P_();Fs(0,`button`,10),$N(1,`translate`),$N(2,`translate`),Sv(`click`,function(a){Sh(t);let o=U_();return xh(o.close(a))}),Fs(3,`mat-icon`),wN(4,`close`),bd()()}if(e&2){let t=U_();vv(`matTooltip`,WN(1,2,t.T.G.DISMISS)),yv(`aria-label`,WN(2,4,t.T.G.DISMISS))}}function Qa(e,m){e&1&&Ev(0,`mat-progress-bar`,8)}var sa;var ma=I(()=>{"use strict";DM();Yt();mc();nm();Pr();Xt();qn();Ki();ta();_();DM();sa=(()=>{class e{constructor(){this.data=M(It),this.snackBarRef=M(Y),this.T=T,this._subs=new q}ngOnInit(){this.data.promise&&this.data.promise.finally(()=>{this.snackBarRef.dismiss()}),this.data.showWhile$&&this._subs.add(this.data.showWhile$.pipe(sI(300)).subscribe(t=>{t||this.snackBarRef.dismiss()}))}ngOnDestroy(){this._subs.unsubscribe()}actionClick(){this.data.actionFn&&this.data.actionFn(),this.snackBarRef.dismissWithAction()}close(t){return N(this,null,function*(){t?.stopPropagation(),yield this.data.dismissFn?.(),this.snackBarRef.dismiss()})}static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵcmp=CC({type:e,selectors:[[`snack-custom`]],decls:10,vars:13,consts:[[1,`wrapper`,3,`click`],[1,`snack-icon`],[1,`snack-icon`,3,`svgIcon`],[1,`message`,3,`innerHtml`],[1,`button-wrapper`],[1,`button-wrapper-inner`],[`color`,`accent`,`mat-button`,``,1,`action`],[`mat-icon-button`,``,`type`,`button`,1,`close`,3,`matTooltip`],[`mode`,`indeterminate`],[`color`,`accent`,`mat-button`,``,1,`action`,3,`click`],[`mat-icon-button`,``,`type`,`button`,1,`close`,3,`click`,`matTooltip`]],template:function(n,a){n&1&&(Fs(0,`div`,0),Sv(`click`,function(){return!a.data.actionStr&&a.close()}),C_(1,Ya,3,3),C_(2,$a,2,1,`mat-icon`,1),C_(3,Wa,1,1,`mat-icon`,2),Ev(4,`span`,3),Fs(5,`div`,4)(6,`div`,5),C_(7,Za,3,3,`button`,6),bd()(),C_(8,qa,5,6,`button`,7),C_(9,Qa,1,0,`mat-progress-bar`,8),bd()),n&2&&(Bv(`error`,a.data.type===`ERROR`)(`success`,a.data.type===`SUCCESS`)(`warning`,a.data.type===`WARNING`),Jb(),N_(a.data.ico?-1:1),Jb(),N_(a.data.ico?2:-1),Jb(),N_(a.data.svgIco?3:-1),Jb(),vv(`innerHtml`,a.data.msg,lb),Jb(3),N_(a.data.actionStr?7:-1),Jb(),N_(a.data.type===`ERROR`||a.data.type===`WARNING`?8:-1),Jb(),N_(a.data.promise||a.data.showWhile$||a.data.isSpinner?9:-1))},dependencies:[zs,ft,jt,Zn,Vt,Jr],styles:[`[_nghost-%COMP%]{background:inherit}.wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:stretch}.snack-icon[_ngcontent-%COMP%]{margin-right:var(--%NS%s2);position:relative;z-index:2}.success[_ngcontent-%COMP%]   .snack-icon[_ngcontent-%COMP%]{color:var(--%NS%success-green)}.error[_ngcontent-%COMP%]   .snack-icon[_ngcontent-%COMP%]{color:var(--%NS%c-warn)}.warning[_ngcontent-%COMP%]   .snack-icon[_ngcontent-%COMP%]{color:var(--%NS%c-accent)}.message[_ngcontent-%COMP%]{flex:1;min-width:0;overflow-wrap:anywhere}.action[_ngcontent-%COMP%]{margin:0;margin-left:calc(1.5 * var(--%NS%s))}.close[_ngcontent-%COMP%]{flex:0 0 auto;margin-left:var(--%NS%s)}.button-wrapper[_ngcontent-%COMP%]{margin-left:auto}.button-wrapper-inner[_ngcontent-%COMP%]{margin-top:-14px;margin-bottom:-14px;margin-right:-8px}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:2px;left:0;right:0}`]})}}return e})()});var Ka;var $t;var Wt;var Ja=I(()=>{"use strict";DM();I$1();Yt$1();mc();nm();ia();ma();Ki();Yt();Yn$1();Hr();oa();kr();DM();Ka=function(e,m,t,n){var a=arguments.length,o=a<3?m:n===null?n=Object.getOwnPropertyDescriptor(m,t):n,i;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)o=Reflect.decorate(e,m,t,n);else for(var r=e.length-1;r>=0;r--)(i=e[r])&&(o=(a<3?i(o):a>3?i(m,t,o):i(m,t))||o);return a>3&&o&&Object.defineProperty(m,t,o),o},$t=function(e,m){if(typeof Reflect==`object`&&typeof Reflect.metadata==`function`)return Reflect.metadata(e,m)},Wt=class e{constructor(){this._store$=M(w),this._translateService=M(Oe),this._actions$=M(vs),this._matSnackBar=M(ra),this._hasPendingPersistentAction=!1,this._actions$.pipe(os$1(Ga$1)).pipe(P()).subscribe(()=>{this.close()})}open(m){typeof m==`string`&&(m={msg:m});let t=!!(m.actionStr&&m.config?.duration===0);this._hasPendingPersistentAction&&!t||(this._hasPendingPersistentAction=t,this._openSnack(m))}hasPendingPersistentAction(){return this._hasPendingPersistentAction}close(){this._hasPendingPersistentAction=!1,this._ref&&this._ref.dismiss()}_getDefaultDuration(m,t){if(m!==`ERROR`&&m!==`WARNING`)return Ht.duration;let n=typeof t==`string`?t.length:0;return Math.min(Math.max(1e4,n*90),3e4)}_openSnack(m){let t=new re,n=()=>{t.next(!0),t.unsubscribe()},{msg:a,actionStr:o,actionId:i,actionPayload:r,config:d,type:b,isSkipTranslate:c,translateParams:D={},showWhile$:I,promise:ht,isSpinner:nt}=m,at=c?a:typeof a==`string`&&this._translateService.instant(a,D),vt=F(E(F(E({},Ht),{duration:this._getDefaultDuration(b,at)}),d),{data:F(E({},m),{msg:at})});(I||ht||nt)&&(vt.panelClass=`polling-snack`),this._ref=this._matSnackBar.openFromComponent(sa,vt);let V=this._ref;V?.afterDismissed().pipe(Bn(1)).subscribe(()=>{this._ref===V&&(this._hasPendingPersistentAction=!1)}),o&&V&&V.onAction().pipe(Bn(1)).subscribe(()=>{this._ref===V&&(this._hasPendingPersistentAction=!1)}),o&&i&&this._ref&&(this._ref.onAction().pipe(pI(t)).subscribe(()=>{this._store$.dispatch({type:i,payload:r}),n()}),this._ref.afterDismissed().pipe(pI(t)).subscribe(()=>{n()}))}static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵprov=oe({token:e,factory:e.ɵfac,providedIn:`root`})}};Ka([ea(100),$t(`design:type`,Function),$t(`design:paramtypes`,[Object]),$t(`design:returntype`,void 0)],Wt.prototype,`_openSnack`,null)});export{ro as _,Se as a,Wt as c,_e as d,ft as f,qn as g,oo as h,Na as i,Xt as l,oa as m,Ja as n,Un as o,jt as p,Jn as r,Vt as s,Ie as t,Zn as u,ta as v,xe as y};