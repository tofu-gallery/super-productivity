import{n as E,o as I,r as F}from"./chunk-CKYLy748.js";import{$ as Hn,$t as SC,Ar as iI,At as N_,Bi as ut,C as Co,F as Ev,G as G_,Ht as P_,Jt as Rb,K as Gc,Ki as vv,Ni as u2,Nr as is,O as DM,Pt as O$1,Q as Hh,Qn as be,Qr as mc,Rn as Z_,Rt as Ov,S as Cd,T as Cs,Ti as re,U as Fs,Un as _v,Wt as Q_,Zn as bd,Zt as Rv,_ as Bv,_t as Ky,ai as nm,an as Sh,ca as xo,d as Aa,di as pI,dn as Te,dr as ev,fr as f2,ft as Js,g as Bn,ha as yv,hi as q,hn as U_,li as os,lt as Jb,mr as fN,or as du,p as BI,pr as fI,sa as xh,sn as Sv,ua as xv,un as Td,v as CC,va as zf,vi as qT,w as Cr,x as C_,xt as M,ya as zy,yi as q_,yt as LN}from"./chunk-DpSPTUNa.js";import{B as en$1,E as Ur,L as bi,O as Vr,T as Ue,V as eo,_ as Jt$1,b as Kr,g as Ji,gt as rs,jt as za,k as Wi,kt as yn,lt as pd,pt as qt,vt as se,xt as tn$1,yt as sn}from"./chunk-CCkpV3Yz.js";import{n as It$1,o as ct,r as Nt,s as dt,t as Dt,u as pt}from"./chunk-CAoNfbGC.js";import{A as We,B as dt$1,N as Ye,O as Ut,U as ht,X as ni,a as De,b as Nr,n as Be,q as kt,r as Br,w as Re,z as bt}from"./chunk-DPNJ07R1.js";var ne;var te;var tt;var Zt;var Ct;var ee;var O;var N;var It;var g;var nt;var Jt;var en;var tn;var wt=I(()=>{"use strict";ni();DM();DM();mc();Ji();Kr();nm();qt();pt();dt();Wi();bi();Br();eo();De();ct();ne=new O$1(`MAT_MENU_PANEL`),te=(()=>{class s{_isAnchor;_elementRef=M(xo);_document=M(os);_focusMonitor=M(rs);_parentMenu=M(ne,{optional:!0});_changeDetectorRef=M(u2);role=`menuitem`;disabled=!1;disabledInteractive=!1;disableRipple=!1;_hovered=new re;_focused=new re;_highlighted=!1;_triggersSubmenu=!1;constructor(){M(Ue).load(It$1),this._parentMenu?.addItem?.(this),this._isAnchor=this._elementRef.nativeElement.tagName===`A`}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled&&!this.disabledInteractive?`-1`:`0`}_getAriaDisabled(){return this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabled(){return this.disabledInteractive||!this.disabled?null:!0}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll(`mat-icon, .material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp`);for(let n=0;n<t.length;n++)t[n].remove();return e.textContent?.trim()||``}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static ɵfac=function(t){return new(t||s)};static ɵcmp=(function(){let e=[[[`mat-icon`],[``,`matMenuItemIcon`,``]],`*`],t=[`mat-icon, [matMenuItemIcon]`,`*`];function n(a,i){a&1&&(Hh(),Fs(0,`svg`,2),Ev(1,`polygon`,3),bd())}return CC({type:s,selectors:[[``,`mat-menu-item`,``]],hostAttrs:[1,`mat-mdc-menu-item`,`mat-focus-indicator`],hostVars:12,hostBindings:function(i,r){i&1&&Sv(`click`,function(l){return r._checkDisabled(l)})(`mouseenter`,function(){return r._handleMouseEnter()}),i&2&&(yv(`role`,r.role)(`tabindex`,r._getTabIndex())(`aria-disabled`,r._getAriaDisabled())(`disabled`,r._getDisabled()),Bv(`mat-mdc-menu-item-highlighted`,r._highlighted)(`mat-mdc-menu-item-submenu-trigger`,r._triggersSubmenu)(`mat-mdc-menu-item-disabled`,r.disabled)(`mat-mdc-menu-item-disabled-interactive`,r.disabledInteractive))},inputs:{role:`role`,disabled:[2,`disabled`,`disabled`,f2],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,f2],disableRipple:[2,`disableRipple`,`disableRipple`,f2]},exportAs:[`matMenuItem`],ngContentSelectors:t,decls:5,vars:3,consts:[[1,`mat-mdc-menu-item-text`],[`matRipple`,``,1,`mat-mdc-menu-ripple`,3,`matRippleDisabled`,`matRippleTrigger`],[`viewBox`,`0 0 5 10`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-menu-submenu-icon`],[`points`,`0,0 5,5 0,10`]],template:function(i,r){i&1&&(q_(e),G_(0),Fs(1,`span`,0),G_(2,1),bd(),Ev(3,`div`,1),C_(4,n,2,0,`svg`,2)),i&2&&(Jb(3),vv(`matRippleDisabled`,r.disableRipple||r.disabled)(`matRippleTrigger`,r._getHostElement()),Jb(),N_(r._triggersSubmenu?4:-1))},dependencies:[Dt],encapsulation:2})})()}return s})(),tt=new O$1(`MatMenuContent`),Zt=(()=>{class s{_template=M(Co);_appRef=M(Cr);_injector=M(be);_viewContainerRef=M(Js);_document=M(os);_changeDetectorRef=M(u2);_portal;_outlet;_attached=new re;attach(e={}){this._portal||(this._portal=new dt$1(this._template,this._viewContainerRef)),this.detach(),this._outlet||(this._outlet=new Ut(this._document.createElement(`div`),this._appRef,this._injector));let t=this._template.elementRef.nativeElement;t.parentNode.insertBefore(this._outlet.outletElement,t),this._changeDetectorRef.markForCheck(),this._portal.attach(this._outlet,e),this._attached.next()}detach(){this._portal?.isAttached&&this._portal.detach()}ngOnDestroy(){this.detach(),this._outlet?.dispose()}static ɵfac=function(t){return new(t||s)};static ɵdir=SC({type:s,selectors:[[`ng-template`,`matMenuContent`,``]],features:[LN([{provide:tt,useExisting:s}])]})}return s})(),Ct=new O$1(`mat-menu-default-options`,{providedIn:`root`,factory:()=>({overlapTrigger:!1,xPosition:`after`,yPosition:`below`,backdropClass:`cdk-overlay-transparent-backdrop`})}),ee=`_mat-menu-enter`,O=`_mat-menu-exit`,N=(()=>{class s{_elementRef=M(xo);_changeDetectorRef=M(u2);_injector=M(be);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=pd();_allItems;_directDescendantItems=new Cs;_classList={};_panelAnimationState=`void`;_animationDone=new re;_isAnimating=is(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let t=this._previousPanelClass,n=E({},this._classList);t&&t.length&&t.split(` `).forEach(a=>{n[a]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(` `).forEach(a=>{n[a]=!0}),this._elementRef.nativeElement.className=``),this._classList=n}_previousPanelClass=``;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new ut;close=this.closed;panelId=M(Jt$1).getId(`mat-menu-panel-`);constructor(){let e=M(Ct);this.overlayPanelClass=e.overlayPanelClass||``,this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new yn(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd().skipPredicate(e=>e.disabled&&!e.disabledInteractive),this._keyManager.tabOut.subscribe(()=>this.closed.emit(`tab`)),this._directDescendantItems.changes.pipe(zf(this._directDescendantItems),fI(e=>iI(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState===`enter`&&t.activeItem?._hasFocus()){let n=e.toArray(),a=Math.max(0,Math.min(n.length-1,t.activeItemIndex||0));n[a]&&!n[a].disabled?t.setActiveItem(a):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(zf(this._directDescendantItems),fI(t=>iI(...t.map(n=>n._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,n=this._keyManager;switch(t){case 27:Vr(e)||(e.preventDefault(),this.closed.emit(`keydown`));break;case 37:this.parentMenu&&this.direction===`ltr`&&this.closed.emit(`keydown`);break;case 39:this.parentMenu&&this.direction===`rtl`&&this.closed.emit(`keydown`);break;default:(t===38||t===40)&&n.setFocusOrigin(`keyboard`),n.onKeydown(e);return}}focusFirstItem(e=`program`){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Rb(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(e).setFirstItemActive(),!n.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=F(E({},this._classList),{"mat-menu-before":e===`before`,"mat-menu-after":e===`after`,"mat-menu-above":t===`above`,"mat-menu-below":t===`below`}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===O;(t||e===ee)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?`void`:`enter`),this._isAnimating.set(!1))}_onAnimationStart(e){(e===ee||e===O)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?`enter`:`void`,e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(O),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?ee:O)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(zf(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest(`[role="menu"]`)),e}static ɵfac=function(t){return new(t||s)};static ɵcmp=(function(){let e=[`*`];function t(n,a){if(n&1){let i=P_();Td(0,`div`,0),xv(`click`,function(){Sh(i);let m=U_();return xh(m.closed.emit(`click`))})(`animationstart`,function(m){Sh(i);let l=U_();return xh(l._onAnimationStart(m.animationName))})(`animationend`,function(m){Sh(i);let l=U_();return xh(l._onAnimationDone(m.animationName))})(`animationcancel`,function(m){Sh(i);let l=U_();return xh(l._onAnimationDone(m.animationName))}),Td(1,`div`,1),G_(2),Cd()()}if(n&2){let i=U_();fN(i._classList),Bv(`mat-menu-panel-animations-disabled`,i._animationsDisabled)(`mat-menu-panel-exit-animation`,i._panelAnimationState===`void`)(`mat-menu-panel-animating`,i._isAnimating()),_v(`id`,i.panelId),yv(`aria-label`,i.ariaLabel||null)(`aria-labelledby`,i.ariaLabelledby||null)(`aria-describedby`,i.ariaDescribedby||null)}}return CC({type:s,selectors:[[`mat-menu`]],contentQueries:function(a,i,r){if(a&1&&Rv(r,tt,5)(r,te,5)(r,te,4),a&2){let m;Q_(m=Z_())&&(i.lazyContent=m.first),Q_(m=Z_())&&(i._allItems=m),Q_(m=Z_())&&(i.items=m)}},viewQuery:function(a,i){if(a&1&&Ov(Co,5),a&2){let r;Q_(r=Z_())&&(i.templateRef=r.first)}},hostVars:3,hostBindings:function(a,i){a&2&&yv(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null)},inputs:{backdropClass:`backdropClass`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],xPosition:`xPosition`,yPosition:`yPosition`,overlapTrigger:[2,`overlapTrigger`,`overlapTrigger`,f2],hasBackdrop:[2,`hasBackdrop`,`hasBackdrop`,n=>n==null?null:f2(n)],panelClass:[0,`class`,`panelClass`],classList:`classList`},outputs:{closed:`closed`,close:`close`},exportAs:[`matMenu`],features:[LN([{provide:ne,useExisting:s}])],ngContentSelectors:e,decls:1,vars:0,consts:[[`tabindex`,`-1`,`role`,`menu`,1,`mat-mdc-menu-panel`,3,`click`,`animationstart`,`animationend`,`animationcancel`,`id`],[1,`mat-mdc-menu-content`]],template:function(a,i){a&1&&(q_(),ev(0,t,3,12,`ng-template`))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--%NS%mat-menu-item-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-menu-item-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-menu-item-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-menu-item-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-menu-item-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--%NS%mat-menu-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-menu-container-color, var(--%NS%mat-sys-surface-container));
  box-shadow: var(--%NS%mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--%NS%mat-menu-divider-color, var(--%NS%mat-sys-surface-variant));
  margin-bottom: var(--%NS%mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--%NS%mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--%NS%mat-menu-item-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--%NS%mat-menu-item-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--%NS%mat-menu-item-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled], .mat-mdc-menu-item.mat-mdc-menu-item-disabled {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after, .mat-mdc-menu-item.mat-mdc-menu-item-disabled::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--%NS%mat-menu-item-spacing, 12px);
  height: var(--%NS%mat-menu-item-icon-size, 24px);
  width: var(--%NS%mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--%NS%mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--%NS%mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--%NS%mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--%NS%mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--%NS%mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--%NS%mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2})})()}return s})(),It=new O$1(`mat-menu-scroll-strategy`,{providedIn:`root`,factory:()=>{let s=M(be);return()=>Be(s)}}),g=new WeakMap,nt=(()=>{class s{_canHaveBackdrop;_element=M(xo);_viewContainerRef=M(Js);_menuItemInstance=M(te,{optional:!0,self:!0});_dir=M(Ur,{optional:!0});_focusMonitor=M(rs);_ngZone=M(Te);_injector=M(be);_scrollStrategy=M(It);_changeDetectorRef=M(u2);_animationsDisabled=pd();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=q.EMPTY;_menuCloseSubscription=q.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t===`click`||t===`tab`)&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=M(ne,{optional:!0});this._parentMaterialMenu=t instanceof N?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&g.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let n=g.get(t);g.set(t,this),n&&n!==this&&n._closeMenu();let a=this._createOverlay(t),i=a.getConfig(),r=i.positionStrategy;this._setPosition(t,r),this._canHaveBackdrop?i.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:i.hasBackdrop=t.hasBackdrop??!1,a.hasAttached()||(a.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||`program`),this._setIsMenuOpen(!0),t instanceof N&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(pI(t.close)).subscribe(()=>{r.withLockedPosition(!1).reapplyLastPosition(),r.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,n=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),n instanceof N&&this._ownsMenu(n)?(this._pendingRemoval=n._animationDone.pipe(Bn(1)).subscribe(()=>{t.detach(),g.has(n)||n.lazyContent?.detach()}),n._setIsOpen(!1)):(t.detach(),n?.lazyContent?.detach()),n&&this._ownsMenu(n)&&g.delete(n),this.restoreFocus&&(e===`keydown`||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=Ye(this._injector,t),this._overlayRef.keydownEvents().subscribe(n=>{this._menu instanceof N&&this._menu._handleKeydown(n)})}return this._overlayRef}_getOverlayConfig(e){return new kt({positionStrategy:We(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(`.mat-menu-panel, .mat-mdc-menu-panel`),backdropClass:e.backdropClass||`cdk-overlay-transparent-backdrop`,panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||`ltr`,disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(n=>{this._ngZone.run(()=>{let a=n.connectionPair.overlayX===`start`?`after`:`before`,i=n.connectionPair.overlayY===`top`?`below`:`above`;e.setPositionClasses(a,i)})})}_setPosition(e,t){let[n,a]=e.xPosition===`before`?[`end`,`start`]:[`start`,`end`],[i,r]=e.yPosition===`above`?[`bottom`,`top`]:[`top`,`bottom`],[m,l]=[i,r],[E,F]=[n,a],h=0;if(this._triggersSubmenu()){if(F=n=e.xPosition===`before`?`start`:`end`,a=E=n===`end`?`start`:`end`,this._parentMaterialMenu){if(this._parentInnerPadding==null){let ie=this._parentMaterialMenu.items.first;this._parentInnerPadding=ie?ie._getHostElement().offsetTop:0}h=i===`bottom`?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(m=i===`top`?`bottom`:`top`,l=r===`top`?`bottom`:`top`);t.withPositions([{originX:n,originY:m,overlayX:E,overlayY:i,offsetY:h},{originX:a,originY:m,overlayX:F,overlayY:i,offsetY:h},{originX:n,originY:l,overlayX:E,overlayY:r,offsetY:-h},{originX:a,originY:l,overlayX:F,overlayY:r,offsetY:-h}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),n=this._parentMaterialMenu?this._parentMaterialMenu.closed:Aa(),a=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Hn(i=>this._menuOpen&&i!==this._menuItemInstance)):Aa();return iI(e,n,a,t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new dt$1(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return g.get(e)===this}_triggerIsAriaDisabled(){return f2(this._element.nativeElement.getAttribute(`aria-disabled`))}static ɵfac=function(t){qT()};static ɵdir=SC({type:s})}return s})(),Jt=(()=>{class s extends nt{_cleanupTouchstart;_hoverSubscription=q.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new ut;onMenuOpen=this.menuOpened;menuClosed=new ut;onMenuClose=this.menuClosed;constructor(){super(!0);let e=M(du);this._cleanupTouchstart=e.listen(this._element.nativeElement,`touchstart`,t=>{tn$1(t)||(this._openedBy=`touch`)},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){en$1(e)||(this._openedBy=e.button===0?`mouse`:void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy=`keyboard`),this.triggersSubmenu()&&(t===39&&this.dir===`ltr`||t===37&&this.dir===`rtl`)&&(this._openedBy=`keyboard`,this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!==`void`&&(this._openedBy=`mouse`,this._openMenu(!1))}))}static ɵfac=function(t){return new(t||s)};static ɵdir=SC({type:s,selectors:[[``,`mat-menu-trigger-for`,``],[``,`matMenuTriggerFor`,``]],hostAttrs:[1,`mat-mdc-menu-trigger`],hostVars:3,hostBindings:function(t,n){t&1&&Sv(`click`,function(i){return n._handleClick(i)})(`mousedown`,function(i){return n._handleMousedown(i)})(`keydown`,function(i){return n._handleKeydown(i)}),t&2&&yv(`aria-haspopup`,n.menu?`menu`:null)(`aria-expanded`,n.menuOpen)(`aria-controls`,n.menuOpen?n.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,`mat-menu-trigger-for`,`_deprecatedMatMenuTriggerFor`],menu:[0,`matMenuTriggerFor`,`menu`],menuData:[0,`matMenuTriggerData`,`menuData`],restoreFocus:[0,`matMenuTriggerRestoreFocus`,`restoreFocus`]},outputs:{menuOpened:`menuOpened`,onMenuOpen:`onMenuOpen`,menuClosed:`menuClosed`,onMenuClose:`onMenuClose`},exportAs:[`matMenuTrigger`],features:[Ky]})}return s})(),en=(()=>{class s extends nt{_point={x:0,y:0,initialX:0,initialY:0,initialScrollX:0,initialScrollY:0};_triggerPressedControl=!1;_rootNode;_document=M(os);_viewportRuler=M(ht);_scrollDispatcher=M(bt);_scrollSubscription;get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;disabled=!1;menuOpened=new ut;menuClosed=new ut;constructor(){super(!1)}ngOnDestroy(){super.ngOnDestroy(),this._scrollSubscription?.unsubscribe()}_handleContextMenuEvent(e){this.disabled||(e.preventDefault(),this.menuOpen?(this._initializePoint(e.clientX,e.clientY),this._updatePosition()):this._openContextMenu(e))}_destroyMenu(e){super._destroyMenu(e),this._scrollSubscription?.unsubscribe()}_getOverlayOrigin(){return this._point}_getOutsideClickStream(e){return e.outsidePointerEvents().pipe(BI((t,n)=>t.type===`contextmenu`?this._isWithinMenuOrTrigger(se(t)):t.type===`auxclick`?n===0?!0:(this._rootNode??=sn(this._element.nativeElement)||this._document,this._isWithinMenuOrTrigger(this._rootNode.elementFromPoint(t.clientX,t.clientY))):this._triggerPressedControl&&n===0&&t.ctrlKey))}_isWithinMenuOrTrigger(e){if(!e)return!1;let t=this._element.nativeElement;if(e===t||t.contains(e))return!0;let n=this._overlayRef?.hostElement;return n===e||!!n?.contains(e)}_openContextMenu(e){e.button===2?this._openedBy=`mouse`:this._openedBy=e.button===0?`keyboard`:void 0,this._initializePoint(e.clientX,e.clientY),this._triggerPressedControl=e.ctrlKey,super._openMenu(!0),this._scrollSubscription?.unsubscribe(),this._scrollSubscription=this._scrollDispatcher.scrolled(0).subscribe(()=>{let t=this._viewportRuler.getViewportScrollPosition(),n=this._point;n.y=n.initialY+(n.initialScrollY-t.top),n.x=n.initialX+(n.initialScrollX-t.left),this._updatePosition()})}_initializePoint(e,t){let n=this._viewportRuler.getViewportScrollPosition(),a=this._point;a.x=a.initialX=e,a.y=a.initialY=t,a.initialScrollX=n.left,a.initialScrollY=n.top}_updatePosition(){let e=this._overlayRef;e&&(e.getConfig().positionStrategy.setOrigin(this._point),e.updatePosition())}static ɵfac=function(t){return new(t||s)};static ɵdir=SC({type:s,selectors:[[``,`matContextMenuTriggerFor`,``]],hostAttrs:[1,`mat-context-menu-trigger`],hostVars:3,hostBindings:function(t,n){t&1&&Sv(`contextmenu`,function(i){return n._handleContextMenuEvent(i)}),t&2&&(yv(`aria-controls`,n.menuOpen?n.menu?.panelId:null),Bv(`mat-context-menu-trigger-disabled`,n.disabled))},inputs:{menu:[0,`matContextMenuTriggerFor`,`menu`],menuData:[0,`matContextMenuTriggerData`,`menuData`],restoreFocus:[0,`matContextMenuTriggerRestoreFocus`,`restoreFocus`],disabled:[2,`matContextMenuTriggerDisabled`,`disabled`,f2]},outputs:{menuOpened:`menuOpened`,menuClosed:`menuClosed`},exportAs:[`matContextMenuTrigger`],features:[Ky]})}return s})(),tn=(()=>{class s{static ɵfac=function(t){return new(t||s)};static ɵmod=zy({type:s});static ɵinj=Gc({imports:[Nt,Nr,za,Re]})}return s})()});export{te as a,en as i,N as n,tn as o,Zt as r,wt as s,Jt as t};