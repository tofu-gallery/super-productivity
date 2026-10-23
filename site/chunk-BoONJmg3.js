import{n as E,o as I,r as F}from"./chunk-CKYLy748.js";import{$ as Hn,Ar as iI,Bi as ut,K as Gc,O as DM,Pt as O,Qn as be,Qr as mc,Ti as re,_ as Bv,_t as Ky,ai as nm,g as Bn,ha as yv,jn as Xy,on as So,sn as Sv,v as CC,xt as M,ya as zy}from"./chunk-DpSPTUNa.js";import{Ct as un,L as bi,O as Vr,W as gs,b as Kr,jt as za,k as Wi,lt as pd,z as dd}from"./chunk-CCkpV3Yz.js";import{H as hi,V as ei,X as ni,Y as mi,l as Gs,r as Br}from"./chunk-DPNJ07R1.js";import{i as X$1,l as jt,n as J,t as Bt$1}from"./chunk-CHc6jpnL.js";import{_ as co,s as Ta}from"./chunk-ungUn0It.js";var X;var $;var ot;var it;var u;var b;var st;var rt;var Bt;var mt=I(()=>{"use strict";DM();DM();jt();Br();gs();ni();Wi();Kr();mc();nm();bi();X=`_mat-bottom-sheet-enter`,$=`_mat-bottom-sheet-exit`,ot=(()=>{class e extends X$1{_breakpointSubscription;_animationsDisabled=pd();_animationState=`void`;_animationStateChanged=new ut;_destroyed=!1;constructor(){super();let t=M(un);this._breakpointSubscription=t.observe([dd.Medium,dd.Large,dd.XLarge]).subscribe(()=>{let o=this._elementRef.nativeElement.classList;o.toggle(`mat-bottom-sheet-container-medium`,t.isMatched(dd.Medium)),o.toggle(`mat-bottom-sheet-container-large`,t.isMatched(dd.Large)),o.toggle(`mat-bottom-sheet-container-xlarge`,t.isMatched(dd.XLarge))})}enter(){this._destroyed||(this._animationState=`visible`,this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._animationsDisabled&&this._simulateAnimation(X))}exit(){this._destroyed||(this._elementRef.nativeElement.setAttribute(`mat-exit`,``),this._animationState=`hidden`,this._changeDetectorRef.markForCheck(),this._animationsDisabled&&this._simulateAnimation($))}ngOnDestroy(){super.ngOnDestroy(),this._breakpointSubscription.unsubscribe(),this._destroyed=!0}_simulateAnimation(t){this._ngZone.run(()=>{this._handleAnimationEvent(!0,t,this._elementRef.nativeElement),setTimeout(()=>this._handleAnimationEvent(!1,t,this._elementRef.nativeElement))})}_trapFocus(){super._trapFocus({preventScroll:!0})}_handleAnimationEvent(t,o,n){if(n===this._elementRef.nativeElement){let a=o===X;(a||o===$)&&this._animationStateChanged.emit({toState:a?`visible`:`hidden`,phase:t?`start`:`done`})}}static ɵfac=function(o){return new(o||e)};static ɵcmp=(function(){function t(o,n){}return CC({type:e,selectors:[[`mat-bottom-sheet-container`]],hostAttrs:[`tabindex`,`-1`,1,`mat-bottom-sheet-container`],hostVars:9,hostBindings:function(n,a){n&1&&Sv(`animationstart`,function(i){return a._handleAnimationEvent(!0,i.animationName,i.target)})(`animationend`,function(i){return a._handleAnimationEvent(!1,i.animationName,i.target)})(`animationcancel`,function(i){return a._handleAnimationEvent(!1,i.animationName,i.target)}),n&2&&(yv(`role`,a._config.role)(`aria-modal`,a._config.ariaModal)(`aria-label`,a._config.ariaLabel),Bv(`mat-bottom-sheet-container-animations-enabled`,!a._animationsDisabled)(`mat-bottom-sheet-container-enter`,a._animationState===`visible`)(`mat-bottom-sheet-container-exit`,a._animationState===`hidden`))},features:[Ky],decls:1,vars:0,consts:[[`cdkPortalOutlet`,``]],template:function(n,a){n&1&&Xy(0,t,0,0,`ng-template`,0)},dependencies:[Gs],styles:[`@keyframes _mat-bottom-sheet-enter {
  from {
    transform: translateY(100%);
  }
  to {
    transform: none;
  }
}
@keyframes _mat-bottom-sheet-exit {
  from {
    transform: none;
  }
  to {
    transform: translateY(100%);
  }
}
.mat-bottom-sheet-container {
  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);
  padding: 8px 16px;
  min-width: 100vw;
  box-sizing: border-box;
  display: block;
  outline: 0;
  max-height: 80vh;
  overflow: auto;
  position: relative;
  background: var(--%NS%mat-bottom-sheet-container-background-color, var(--%NS%mat-sys-surface-container-low));
  color: var(--%NS%mat-bottom-sheet-container-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-bottom-sheet-container-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-bottom-sheet-container-text-size, var(--%NS%mat-sys-body-large-size));
  line-height: var(--%NS%mat-bottom-sheet-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-weight: var(--%NS%mat-bottom-sheet-container-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-bottom-sheet-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
@media (forced-colors: active) {
  .mat-bottom-sheet-container {
    outline: 1px solid;
  }
}

.mat-bottom-sheet-container-animations-enabled {
  transform: translateY(100%);
}
.mat-bottom-sheet-container-animations-enabled.mat-bottom-sheet-container-enter {
  animation: _mat-bottom-sheet-enter 195ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-bottom-sheet-container-animations-enabled.mat-bottom-sheet-container-exit {
  animation: _mat-bottom-sheet-exit 375ms cubic-bezier(0.4, 0, 1, 1) backwards;
}

.mat-bottom-sheet-container-xlarge, .mat-bottom-sheet-container-large, .mat-bottom-sheet-container-medium {
  border-top-left-radius: var(--%NS%mat-bottom-sheet-container-shape, 28px);
  border-top-right-radius: var(--%NS%mat-bottom-sheet-container-shape, 28px);
}

.mat-bottom-sheet-container-medium {
  min-width: 384px;
  max-width: calc(100vw - 128px);
}

.mat-bottom-sheet-container-large {
  min-width: 512px;
  max-width: calc(100vw - 256px);
}

.mat-bottom-sheet-container-xlarge {
  min-width: 576px;
  max-width: calc(100vw - 384px);
}
`],encapsulation:2,changeDetection:1})})()}return e})(),it=new O(`MatBottomSheetData`),u=class{viewContainerRef;injector;panelClass;direction;data=null;hasBackdrop=!0;backdropClass;disableClose=!1;ariaLabel=null;ariaModal=!1;closeOnNavigation=!0;autoFocus=`first-tabbable`;restoreFocus=!0;scrollStrategy;height=``;minHeight;maxHeight;bindings},b=class{_ref;get instance(){return this._ref.componentInstance}get componentRef(){return this._ref.componentRef}containerInstance;disableClose;_afterOpened=new re;_result;_closeFallbackTimeout;constructor(s,t,o){this._ref=s,this.containerInstance=o,this.disableClose=t.disableClose,o._animationStateChanged.pipe(Hn(n=>n.phase===`done`&&n.toState===`visible`),Bn(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),o._animationStateChanged.pipe(Hn(n=>n.phase===`done`&&n.toState===`hidden`),Bn(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._ref.close(this._result)}),s.overlayRef.detachments().subscribe(()=>{this._ref.close(this._result)}),iI(this.backdropClick(),this.keydownEvents().pipe(Hn(n=>n.keyCode===27))).subscribe(n=>{!this.disableClose&&(n.type!==`keydown`||!Vr(n))&&(n.preventDefault(),this.dismiss())})}dismiss(s){this.containerInstance&&(this.containerInstance._animationStateChanged.pipe(Hn(t=>t.phase===`start`),Bn(1)).subscribe(()=>{this._closeFallbackTimeout=setTimeout(()=>this._ref.close(this._result),500),this._ref.overlayRef.detachBackdrop()}),this._result=s,this.containerInstance.exit(),this.containerInstance=null)}afterDismissed(){return this._ref.closed}afterOpened(){return this._afterOpened}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}},st=new O(`mat-bottom-sheet-default-options`),rt=(()=>{class e{_injector=M(be);_parentBottomSheet=M(e,{optional:!0,skipSelf:!0});_animationsDisabled=pd();_defaultOptions=M(st,{optional:!0});_bottomSheetRefAtThisLevel=null;_dialog=M(J);get _openedBottomSheetRef(){let t=this._parentBottomSheet;return t?t._openedBottomSheetRef:this._bottomSheetRefAtThisLevel}set _openedBottomSheetRef(t){this._parentBottomSheet?this._parentBottomSheet._openedBottomSheetRef=t:this._bottomSheetRefAtThisLevel=t}open(t,o){let n=E(E({},this._defaultOptions||new u),o),a;return this._dialog.open(t,F(E({},n),{disableClose:!0,closeOnOverlayDetachments:!1,maxWidth:`100%`,container:ot,scrollStrategy:n.scrollStrategy||hi(this._injector),positionStrategy:mi(this._injector).centerHorizontally().bottom(`0`),disableAnimations:this._animationsDisabled,templateContext:()=>({bottomSheetRef:a}),providers:(l,i,G)=>(a=new b(l,n,G),[{provide:b,useValue:a},{provide:it,useValue:n.data}])})),a.afterDismissed().subscribe(()=>{this._openedBottomSheetRef===a&&(this._openedBottomSheetRef=null)}),this._openedBottomSheetRef?(this._openedBottomSheetRef.afterDismissed().subscribe(()=>a.containerInstance?.enter()),this._openedBottomSheetRef.dismiss()):a.containerInstance.enter(),this._openedBottomSheetRef=a,a}dismiss(t){this._openedBottomSheetRef&&this._openedBottomSheetRef.dismiss(t)}ngOnDestroy(){this._bottomSheetRefAtThisLevel&&this._bottomSheetRefAtThisLevel.dismiss()}static ɵfac=function(o){return new(o||e)};static ɵprov=So({token:e,factory:e.ɵfac})}return e})(),Bt=(()=>{class e{static ɵfac=function(o){return new(o||e)};static ɵmod=zy({type:e});static ɵinj=Gc({providers:[rt],imports:[Bt$1,ei,za]})}return e})()});var Rt;var lt=I(()=>{"use strict";co();Rt=e=>{if(!Ta(e))return{x:e.clientX,y:e.clientY};let s=e.touches[0]??e.changedTouches?.[0];return s?{x:s.clientX,y:s.clientY}:null}});export{lt as a,it as i,Rt as n,mt as o,b as r,rt as s,Bt as t};