"use strict";(()=>{var J=Object.create;var S=Object.defineProperty;var V=Object.getOwnPropertyDescriptor;var Y=Object.getOwnPropertyNames;var Z=Object.getPrototypeOf,z=Object.prototype.hasOwnProperty;var p=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}};var Q=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Y(t))!z.call(e,o)&&o!==n&&S(e,o,{get:()=>t[o],enumerable:!(r=V(t,o))||r.enumerable});return e};var ee=(e,t,n)=>(n=e!=null?J(Z(e)):{},Q(t||!e||!e.__esModule?S(n,"default",{value:e,enumerable:!0}):n,e));var h=p(a=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0});a.PluginIframeMessageType=a.PluginHooks=void 0;var w;(function(e){e.TASK_CREATED="taskCreated",e.TASK_COMPLETE="taskComplete",e.TASK_UPDATE="taskUpdate",e.TASK_DELETE="taskDelete",e.CURRENT_TASK_CHANGE="currentTaskChange",e.FINISH_DAY="finishDay",e.LANGUAGE_CHANGE="languageChange",e.PERSISTED_DATA_CHANGED="persistedDataChanged",e.ACTION="action",e.ANY_TASK_UPDATE="anyTaskUpdate",e.PROJECT_LIST_UPDATE="projectListUpdate",e.WORK_CONTEXT_CHANGE="workContextChange"})(w||(a.PluginHooks=w={}));var E;(function(e){e.API_CALL="PLUGIN_API_CALL",e.API_RESPONSE="PLUGIN_API_RESPONSE",e.API_ERROR="PLUGIN_API_ERROR",e.HOOK_EVENT="PLUGIN_HOOK_EVENT",e.DIALOG_BUTTON_CLICK="PLUGIN_DIALOG_BUTTON_CLICK",e.DIALOG_BUTTON_RESPONSE="PLUGIN_DIALOG_BUTTON_RESPONSE",e.WORK_CONTEXT_BTN_CLICK="PLUGIN_WORK_CONTEXT_BTN_CLICK",e.MESSAGE="PLUGIN_MESSAGE",e.MESSAGE_RESPONSE="PLUGIN_MESSAGE_RESPONSE",e.MESSAGE_ERROR="PLUGIN_MESSAGE_ERROR",e.READY="plugin-ready"})(E||(a.PluginIframeMessageType=E={}))});var I=p(A=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0})});var R=p(l=>{"use strict";var te=l&&l.__createBinding||(Object.create?(function(e,t,n,r){r===void 0&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);(!o||("get"in o?!t.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}):(function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]})),_=l&&l.__exportStar||function(e,t){for(var n in e)n!=="default"&&!Object.prototype.hasOwnProperty.call(t,n)&&te(t,e,n)};Object.defineProperty(l,"__esModule",{value:!0});_(h(),l);_(I(),l)});var $=ee(R());var y={candidateId:null,since:0,lastSeenAt:0,hasFired:!1},C=(e,t,{dwellMs:n,maxGapMs:r})=>{let{matchId:o,now:i}=t;if(o===null)return{state:e,fireId:null};if(o!==e.candidateId||i-e.lastSeenAt>r)return{state:{candidateId:o,since:i,lastSeenAt:i,hasFired:!1},fireId:null};let c={...e,lastSeenAt:i};return!e.hasFired&&i-e.since>=n?{state:{...c,hasFired:!0},fireId:o}:{state:c,fireId:null}},O=(e,t,{now:n,maxAgeMs:r})=>e.candidateId===t&&n-e.lastSeenAt<=r;var ne={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},k=e=>e.replace(/[&<>"']/g,t=>ne[t]);var N=e=>(e??"").split(`
`).map(t=>t.trim()).filter(t=>t&&!t.startsWith("#")).map(t=>{let n=t.indexOf("=");return n===-1?null:{pattern:t.slice(0,n).trim().toLowerCase(),taskTitle:t.slice(n+1).trim().toLowerCase()}}).filter(t=>!!t&&!!t.pattern&&!!t.taskTitle),b=e=>{let t=e.match(/\b[A-Z][A-Z0-9]+-\d+\b/g)??[],n=(e.match(/#\d+\b/g)??[]).map(r=>r.slice(1));return[...new Set([...t,...n])]},re=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),oe=e=>/^\d+$/.test(e)?new RegExp(`#${e}\\b`):new RegExp(`\\b${re(e)}\\b`),L=e=>`${e.app}
${e.title}`.toLowerCase(),v=(e,t)=>{let n=L(e);return t.some(r=>n.includes(r.pattern))||b(e.title).length>0},ie=(e,t,n)=>{let r=L(e);for(let o of t){if(!r.includes(o.pattern))continue;let i=n.filter(c=>c.title.trim().toLowerCase()===o.taskTitle);if(i.length===1)return i[0]}return null},se=(e,t)=>{let n=new Set;for(let r of b(e.title)){let o=oe(r);for(let i of t)o.test(i.title)&&n.add(i)}return n.size===1?[...n][0]:null},le=(e,t)=>{if(!e||!e.subTaskIds?.length)return e;let n=new Map(t.map(o=>[o.id,o]));return e.subTaskIds.map(o=>n.get(o)).find(o=>o&&!o.isDone)??null},D=(e,t,n)=>{let r=n.filter(i=>!i.isDone),o=ie(e,t,r)??se(e,r);return le(o,r)};var ae=['tell application "System Events"',"set frontProc to first application process whose frontmost is true","set appName to name of frontProc",'set winTitle to ""',"try","set winTitle to name of front window of frontProc","end try",'if winTitle is missing value then set winTitle to ""',"end tell","return appName & linefeed & winTitle"],ue=`
$ErrorActionPreference = 'Stop'
$dll = Join-Path $env:TEMP 'sp-app-auto-track-v1.dll'
if (-not (Test-Path $dll)) {
  # Compile under a unique name, then move: a compile killed by the timeout must not
  # leave a half-written dll at the final path. A lost race just drops its own copy.
  $tmp = Join-Path $env:TEMP ('sp-app-auto-track-' + [guid]::NewGuid() + '.dll')
  Add-Type -OutputAssembly $tmp -TypeDefinition @'
using System;
using System.Runtime.InteropServices;
using System.Text;
public static class SpAutoTrackFg {
  [DllImport("user32.dll")] public static extern IntPtr GetForegroundWindow();
  [DllImport("user32.dll", CharSet = CharSet.Unicode)] public static extern int GetWindowText(IntPtr h, StringBuilder s, int n);
  [DllImport("user32.dll")] public static extern uint GetWindowThreadProcessId(IntPtr h, out uint pid);
}
'@
  Move-Item $tmp $dll -ErrorAction SilentlyContinue
  # The move fails if another probe won the race (drop ours) or e.g. AV holds the file
  # (use ours this once rather than failing every poll).
  if (Test-Path $tmp) {
    if (Test-Path $dll) { Remove-Item $tmp -ErrorAction SilentlyContinue } else { $dll = $tmp }
  }
}
# A dll that fails to load is deleted so the next poll recompiles it.
try { Add-Type -Path $dll } catch { Remove-Item $dll -ErrorAction SilentlyContinue; throw }
$h = [SpAutoTrackFg]::GetForegroundWindow()
$sb = New-Object System.Text.StringBuilder 1024
[void][SpAutoTrackFg]::GetWindowText($h, $sb, $sb.Capacity)
[uint32]$procId = 0
[void][SpAutoTrackFg]::GetWindowThreadProcessId($h, [ref]$procId)
# pid 0 is "Idle": no foreground window (lock screen, UAC desktop)
$name = ''
if ($procId -ne 0) { $name = [string](Get-Process -Id $procId -ErrorAction SilentlyContinue).ProcessName }
# Base64 sidesteps console code pages, BOMs and line wrapping of the hidden console.
$text = $name + [char]10 + $sb.ToString()
[Console]::Out.Write([Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes($text)))
`,ce=e=>{let t=[];for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);t.push(o&255,o>>8)}let n="";for(let r of t)n+=String.fromCharCode(r);return btoa(n)},x=()=>`
const cp = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');
// -1743: the user denied (or has not yet answered) the Automation prompt for System Events
const errorCode = (err, stderr) =>
  err.killed ? 'TIMEOUT' : /-1743/.test(stderr) ? 'AUTOMATION_DENIED' : String(err.code || 'EXEC_FAILED');
const run = (file, argv, env) => new Promise((resolve) => {
  cp.execFile(file, argv, { timeout: 25000, windowsHide: true, encoding: 'utf8', maxBuffer: 65536, env },
    (err, stdout, stderr) => resolve(err ? { error: errorCode(err, String(stderr)) } : { stdout }));
});
if (process.platform === 'darwin') {
  const argv = ${JSON.stringify(ae)}.flatMap((line) => ['-e', line]);
  return { platform: 'darwin', ...(await run('/usr/bin/osascript', argv, {})) };
}
if (process.platform === 'win32') {
  // C: first: another drive's root (a redirected or UNC home) may be user-writable, so
  // a planted powershell.exe there must not win. The home drive is only the fallback
  // for Windows installed elsewhere (where a user-created C:\\Windows would still win;
  // the stripped child env offers no trusted SystemRoot).
  const psIn = (root) => path.join(root, 'System32', 'WindowsPowerShell', 'v1.0', 'powershell.exe');
  const systemRoot = [path.join('C:/', 'Windows'), path.join(path.parse(os.homedir()).root, 'Windows')]
    .find((root) => fs.existsSync(psIn(root)));
  if (!systemRoot) return { platform: 'win32', error: 'NO_POWERSHELL' };
  const temp = path.join(os.homedir(), 'AppData', 'Local', 'Temp');
  fs.mkdirSync(temp, { recursive: true });
  const env = { SystemRoot: systemRoot, windir: systemRoot, TEMP: temp, TMP: temp };
  const argv = ['-NoProfile', '-NonInteractive', '-ExecutionPolicy', 'Bypass',
    '-EncodedCommand', ${JSON.stringify(ce(ue))}];
  const res = await run(psIn(systemRoot), argv, env);
  return { platform: 'win32', ...(res.stdout === undefined ? res
    : { stdout: Buffer.from(res.stdout.trim(), 'base64').toString('utf8') }) };
}
return { platform: process.platform, unsupported: true };
`,G=e=>{let t=e??{};if(t.unsupported)return{kind:"unsupported"};if(typeof t.stdout!="string")return{kind:"error",code:typeof t.error=="string"?t.error:"NO_OUTPUT"};let[n="",...r]=t.stdout.replace(/\r/g,"").split(`
`);return{kind:"sample",sample:{app:n.trim(),title:r.join(" ").trim()}}};var W=1e4,de=9e4,pe=3e4,fe=5*6e4,me={dwellMs:de,maxGapMs:4*W},ge=10*6e4,M="[app-auto-track]",Te=x(),m=null,s=!1,g=y,F=null,T=null,d=null,u=null,U=!1,f=0,P=(e,t)=>PluginAPI.translate(e,t),B=e=>e instanceof Error?e.name:"UNKNOWN",Pe=e=>typeof e=="object"?e.code:"EXEC_FAILED",Se=()=>d??(d=PluginAPI.getConfig().then(e=>e??{},e=>{throw d=null,e})),we=e=>{s||PluginAPI.dispatchAction({type:"[Task] SetCurrentTask",id:e})},Ee=async e=>{T=e,PluginAPI.isWindowFocused()&&await K()},K=async()=>{let e=T;if(T=null,!e||e===F||!O(g,e,{now:Date.now(),maxAgeMs:ge}))return;let t=(await PluginAPI.getTasks()).find(n=>n.id===e&&!n.isDone);!t||s||PluginAPI.showSnack({msg:P("SUGGEST",{title:k(t.title)}),ico:"timer",action:{label:P("TRACK"),onClick:()=>we(e)}})},j=()=>{let e=u;u=null,!(!e||s)&&PluginAPI.showSnack({msg:P(e),type:"WARNING"})},q=e=>{U||s||(U=!0,u=e,PluginAPI.isWindowFocused()&&j())},H=e=>{s||(console.warn(`${M} probe failed: ${e}`),q("PROBE_ERROR"))},he=async()=>{let e=await PluginAPI.executeNodeScript({script:Te,timeout:pe});return e.success?G(e.result):{kind:"error",code:Pe(e.error)}},Ae=async e=>{let t=N((await Se()).rules);return v(e,t)?D(e,t,await PluginAPI.getTasks()):null},Ie=async()=>{if(PluginAPI.isWindowFocused())return"skipped";let e=await he();if(e.kind==="unsupported")return"unsupported";if(e.kind==="error")return H(e.code),"failed";let t=await Ae(e.sample);if(s)return"ok";let n=C(g,{matchId:t?.id??null,now:Date.now()},me);return g=n.state,n.fireId&&await Ee(n.fireId),"ok"},X=()=>{if(s)return;let e=Math.min(W*2**f,fe);m=setTimeout(async()=>{let t="failed";try{t=await Ie()}catch(n){H(B(n))}if(t==="unsupported"){q("UNSUPPORTED");return}t==="ok"&&u==="PROBE_ERROR"&&(u=null),t!=="skipped"&&(f=t==="failed"?Math.min(f+1,10):0),X()},e)},_e=e=>{if(!s){if(!e){d=null;return}j(),K().catch(t=>console.warn(`${M} suggestion failed: ${B(t)}`))}};PluginAPI.registerHook($.PluginHooks.CURRENT_TASK_CHANGE,e=>{F=e.current?.id??null});PluginAPI.onUnload?.(()=>{s=!0,m&&clearTimeout(m)});PluginAPI.onReady?.(()=>{PluginAPI.cfg.platform!=="desktop"||!PluginAPI.executeNodeScript||(PluginAPI.onWindowFocusChange?.(_e),X())});})();
