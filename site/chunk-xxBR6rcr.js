import{o as I}from"./chunk-CKYLy748.js";import{At as N_,Bi as ut$1,F as Ev,G as G_,Ji as wN,K as Gc,Ki as vv,Kn as as,Ni as u2,Nr as is,O as DM,Pt as O,Qr as mc,Rn as Z_,Rt as Ov,S as Cd,Ti as re,Tt as Md,U as Fs,Un as _v,Wt as Q_,Zn as bd,_ as Bv,ca as xo,fr as f2,ha as yv,hn as U_,lt as Jb,sn as Sv,un as Td,v as CC,x as C_,xt as M,ya as zy,yi as q_,yt as LN}from"./chunk-DpSPTUNa.js";import{G as gt,L as bi,O as Vr,T as Ue,_ as Jt,b as Kr,g as Ji,jt as za,k as Wi,lt as pd,pt as qt}from"./chunk-CCkpV3Yz.js";import{n as It,o as ct$1,r as Nt$1,s as dt$1,t as Dt,u as pt$1}from"./chunk-CAoNfbGC.js";var rt;var ct=I(()=>{"use strict";DM();Wi();rt=(()=>{class e{_animationsDisabled=pd();state=`unchecked`;disabled=!1;appearance=`full`;static ɵfac=function(o){return new(o||e)};static ɵcmp=CC({type:e,selectors:[[`mat-pseudo-checkbox`]],hostAttrs:[1,`mat-pseudo-checkbox`],hostVars:12,hostBindings:function(o,a){o&2&&Bv(`mat-pseudo-checkbox-indeterminate`,a.state===`indeterminate`)(`mat-pseudo-checkbox-checked`,a.state===`checked`)(`mat-pseudo-checkbox-disabled`,a.disabled)(`mat-pseudo-checkbox-minimal`,a.appearance===`minimal`)(`mat-pseudo-checkbox-full`,a.appearance===`full`)(`_mat-animation-noopable`,a._animationsDisabled)},inputs:{state:`state`,disabled:`disabled`,appearance:`appearance`},decls:0,vars:0,template:function(o,a){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--%NS%mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--%NS%mat-pseudo-checkbox-full-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--%NS%mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--%NS%mat-pseudo-checkbox-full-selected-icon-color, var(--%NS%mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-full-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2})}return e})()});function Gt(e,d,t){if(t.length){let o=d.toArray(),a=t.toArray(),s=0;for(let i=0;i<e+1;i++)o[i].group&&o[i].group===a[s]&&s++;return s}return 0}function Kt(e,d,t,o){return e<t?e:e+d>t+o?Math.max(0,e-o+d):t}var st;var lt;var Lt;var j;var dt;var mt=I(()=>{"use strict";Ji();Kr();DM();DM();mc();dt$1();ct();pt$1();qt();st=new O(`MAT_OPTION_PARENT_COMPONENT`),lt=new O(`MatOptgroup`),Lt=(()=>{class e{label;disabled=!1;_labelId=M(Jt).getId(`mat-optgroup-label-`);_inert;constructor(){let t=M(st,{optional:!0});this._inert=t?.inertGroups??!1}static ɵfac=function(o){return new(o||e)};static ɵcmp=(function(){let t=[`*`,[[`mat-option`],[`ng-container`]]];return CC({type:e,selectors:[[`mat-optgroup`]],hostAttrs:[1,`mat-mdc-optgroup`],hostVars:3,hostBindings:function(s,i){s&2&&yv(`role`,i._inert?null:`group`)(`aria-disabled`,i._inert?null:i.disabled.toString())(`aria-labelledby`,i._inert?null:i._labelId)},inputs:{label:`label`,disabled:[2,`disabled`,`disabled`,f2]},exportAs:[`matOptgroup`],features:[LN([{provide:lt,useExisting:e}])],ngContentSelectors:[`*`,`mat-option, ng-container`],decls:5,vars:4,consts:[[`role`,`presentation`,1,`mat-mdc-optgroup-label`,3,`id`],[1,`mdc-list-item__primary-text`]],template:function(s,i){s&1&&(q_(t),Td(0,`span`,0)(1,`span`,1),wN(2),G_(3),Cd()(),G_(4,1)),s&2&&(Bv(`mdc-list-item--disabled`,i.disabled),_v(`id`,i._labelId),Jb(2),Md(``,i.label,` `))},styles:[`.mat-mdc-optgroup {
  color: var(--%NS%mat-optgroup-label-text-color, var(--%NS%mat-sys-on-surface-variant));
  font-family: var(--%NS%mat-optgroup-label-text-font, var(--%NS%mat-sys-title-small-font));
  line-height: var(--%NS%mat-optgroup-label-text-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-size: var(--%NS%mat-optgroup-label-text-size, var(--%NS%mat-sys-title-small-size));
  letter-spacing: var(--%NS%mat-optgroup-label-text-tracking, var(--%NS%mat-sys-title-small-tracking));
  font-weight: var(--%NS%mat-optgroup-label-text-weight, var(--%NS%mat-sys-title-small-weight));
}

.mat-mdc-optgroup-label {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  outline: none;
}
.mat-mdc-optgroup-label.mdc-list-item--disabled {
  opacity: 0.38;
}
.mat-mdc-optgroup-label .mdc-list-item__primary-text {
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  white-space: normal;
  color: inherit;
}
`],encapsulation:2})})()}return e})(),j=class{source;isUserInput;constructor(d,t=!1){this.source=d,this.isUserInput=t}},dt=(()=>{class e{_element=M(xo);_changeDetectorRef=M(u2);_parent=M(st,{optional:!0});group=M(lt,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue=``;get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=M(Jt).getId(`mat-option-`);get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(t){this._disabled.set(t)}_disabled=is(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new ut$1;_text;_stateChanges=new re;constructor(){let t=M(Ue);t.load(It),t.load(gt),this._signalDisableRipple=!!this._parent&&as(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||``).trim()}select(t=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),t&&this._emitSelectionChangeEvent())}deselect(t=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),t&&this._emitSelectionChangeEvent())}focus(t,o){let a=this._getHostElement();typeof a.focus==`function`&&a.focus(o)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(t){(t.keyCode===13||t.keyCode===32)&&!Vr(t)&&(this._selectViaInteraction(),t.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let t=this.viewValue;t!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=t)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(t=!1){this.onSelectionChange.emit(new j(this,t))}static ɵfac=function(o){return new(o||e)};static ɵcmp=(function(){let t=[`text`],o=[[[`mat-icon`]],`*`],a=[`mat-icon`,`*`];function s(r,c){if(r&1&&Ev(0,`mat-pseudo-checkbox`,1),r&2){let n=U_();vv(`disabled`,n.disabled)(`state`,n.selected?`checked`:`unchecked`)}}function i(r,c){if(r&1&&Ev(0,`mat-pseudo-checkbox`,3),r&2){let n=U_();vv(`disabled`,n.disabled)}}function ht(r,c){if(r&1&&(Fs(0,`span`,4),wN(1),bd()),r&2){let n=U_();Jb(),Md(`(`,n.group.label,`)`)}}return CC({type:e,selectors:[[`mat-option`]],viewQuery:function(c,n){if(c&1&&Ov(t,7),c&2){let f;Q_(f=Z_())&&(n._text=f.first)}},hostAttrs:[`role`,`option`,1,`mat-mdc-option`,`mdc-list-item`],hostVars:11,hostBindings:function(c,n){c&1&&Sv(`click`,function(){return n._selectViaInteraction()})(`keydown`,function(bt){return n._handleKeydown(bt)}),c&2&&(_v(`id`,n.id),yv(`aria-selected`,n.selected)(`aria-disabled`,n.disabled.toString()),Bv(`mdc-list-item--selected`,n.selected)(`mat-mdc-option-multiple`,n.multiple)(`mat-mdc-option-active`,n.active)(`mdc-list-item--disabled`,n.disabled))},inputs:{value:`value`,id:`id`,disabled:[2,`disabled`,`disabled`,f2]},outputs:{onSelectionChange:`onSelectionChange`},exportAs:[`matOption`],ngContentSelectors:a,decls:8,vars:5,consts:[[`text`,``],[`aria-hidden`,`true`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`,`state`],[1,`mdc-list-item__primary-text`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`],[1,`cdk-visually-hidden`],[`aria-hidden`,`true`,`mat-ripple`,``,1,`mat-mdc-option-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`]],template:function(c,n){c&1&&(q_(o),C_(0,s,1,2,`mat-pseudo-checkbox`,1),G_(1),Fs(2,`span`,2,0),G_(4,1),bd(),C_(5,i,1,1,`mat-pseudo-checkbox`,3),C_(6,ht,2,1,`span`,4),Ev(7,`div`,5)),c&2&&(N_(n.multiple?0:-1),Jb(5),N_(!n.multiple&&n.selected&&!n.hideSingleSelectionIndicator?5:-1),Jb(),N_(n.group&&n.group._inert?6:-1),Jb(),vv(`matRippleTrigger`,n._getHostElement())(`matRippleDisabled`,n.disabled||n.disableRipple))},dependencies:[rt,Dt],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--%NS%mat-option-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-option-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-option-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-option-label-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-option-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-option-label-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--%NS%mat-option-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--%NS%mat-option-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--%NS%mat-option-selected-state-layer-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --%NS%mat-list-list-item-selected-container-color: var(--%NS%mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})})()}return e})()});var pt;var ut=I(()=>{"use strict";bi();DM();pt=(()=>{class e{static ɵfac=function(o){return new(o||e)};static ɵmod=zy({type:e});static ɵinj=Gc({imports:[za]})}return e})()});var Zt;var Nt=I(()=>{"use strict";bi();DM();ct$1();ut();mt();Zt=(()=>{class e{static ɵfac=function(o){return new(o||e)};static ɵmod=zy({type:e});static ɵinj=Gc({imports:[Nt$1,pt,dt,za]})}return e})()});export{Zt as a,j as c,pt as d,rt as f,Nt as i,lt as l,ut as m,Kt as n,ct as o,st as p,Lt as r,dt as s,Gt as t,mt as u};