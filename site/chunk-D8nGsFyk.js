import{d as N,n as E,o as I,r as F}from"./chunk-CKYLy748.js";import{At as N_,F as Ev,Ht as P_,Ji as wN,Ki as vv,Kr as lb,Nr as is,O as DM,Rn as Z_,Rt as Ov,Tn as WN,Tt as Md,U as Fs,Wt as Q_,Zn as bd,_ as Bv,an as Sh,ca as xo,ha as yv,hn as U_,lt as Jb,pt as Jv,r as $N,sa as xh,sn as Sv,v as CC,x as C_,xt as M}from"./chunk-DpSPTUNa.js";import{n as H,s as p}from"./chunk-CEMX8dCq.js";import{n as _,t as T}from"./chunk-CqP3wTqx.js";import{c as Fr,d as Gt}from"./chunk-CCkpV3Yz.js";import{S as Pr,_ as Ki,g as Jr,st as zs,x as Oe}from"./chunk-DPNJ07R1.js";import{E as ae,K as ln,a as Ce$1}from"./chunk-But8UXfI.js";import{g as y,i as F$1,n as D,p as p$1}from"./chunk-C2b4vP3n.js";import{f as s}from"./chunk-OYPD3mnM.js";import{f as ft,l as Xt}from"./chunk-wsteUQXI.js";import{n as j,t as Y}from"./chunk-m9BEdDh2.js";import{a as Ve$1,l as de}from"./chunk-BFjJaohP.js";import{E as Ui,R as hs,U as ms,V as lr,W as nr,n as $i,o as Do,v as Lo,y as Lt}from"./chunk-Dy2IczTc.js";import{i as h,n as F$2,o as k,s as z,t as A}from"./chunk-RPyw8Jya.js";var Ce;var ve=I(()=>{"use strict";Ce=`
<style id="sp-ui-kit">
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-size: 14px;
    line-height: 1.4;
    margin: 0;
  }

  h1 { font-size: 1.8em; font-weight: 700; margin: 0 0 var(--s2) 0; }
  h2 { font-size: 1.4em; font-weight: 700; margin: 0 0 var(--s2) 0; }
  h3 { font-size: 1.2em; font-weight: 700; margin: 0 0 var(--s) 0; }
  h4 { font-size: 1.05em; font-weight: 700; margin: 0 0 var(--s) 0; }
  h5 { font-size: 0.95em; font-weight: 400; margin: 0 0 var(--s) 0; }
  h6 { font-size: 0.85em; font-weight: 400; margin: 0 0 var(--s) 0; }

  p {
    margin: 0 0 var(--s2) 0;
    line-height: 1.5;
  }

  button {
    background: var(--card-bg);
    color: var(--text-color);
    border: 1px solid var(--divider-color);
    border-radius: var(--card-border-radius);
    padding: var(--s-half) var(--s2);
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
    transition: var(--transition-standard);
  }

  button:hover {
    background: var(--select-hover-bg);
    border-color: var(--c-primary);
  }

  button:active {
    filter: brightness(0.92);
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  button.btn-primary {
    background: var(--c-primary);
    border-color: var(--c-primary);
    color: #fff;
  }

  button.btn-primary:hover {
    filter: brightness(1.12);
  }

  button.btn-outline {
    background: transparent;
    border-color: var(--c-primary);
    color: var(--c-primary);
  }

  button.btn-outline:hover {
    background: var(--c-primary);
    color: #fff;
  }

  input, textarea, select {
    background: var(--card-bg);
    color: var(--text-color);
    border: none;
    border-bottom: 1px solid var(--divider-color);
    border-radius: var(--card-border-radius) var(--card-border-radius) 0 0;
    padding: var(--s) var(--s2);
    font-family: inherit;
    font-size: inherit;
    transition: var(--transition-standard);
    width: 100%;
  }

  input:focus, textarea:focus, select:focus {
    outline: none;
    border-bottom-color: var(--c-primary);
    border-bottom-width: 2px;
  }

  input:disabled, textarea:disabled, select:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  input[type="checkbox"], input[type="radio"] {
    width: auto;
    accent-color: var(--c-primary);
  }

  label {
    display: block;
    margin-bottom: var(--s-half);
    font-size: 0.85em;
    color: var(--text-color-muted);
    cursor: pointer;
  }

  select {
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23888' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right var(--s) center;
    padding-right: var(--s4);
  }

  a {
    color: var(--c-primary);
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  ul, ol {
    padding-left: var(--s3);
    margin: 0 0 var(--s2) 0;
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  th, td {
    padding: var(--s) var(--s2);
    border-bottom: 1px solid var(--divider-color);
    text-align: left;
  }

  hr {
    border: none;
    border-top: 1px solid var(--divider-color);
    margin: var(--s2) 0;
  }

  code {
    background: var(--bg-darker);
    padding: var(--s-quarter) var(--s-half);
    border-radius: 2px;
    font-size: 0.9em;
  }

  pre {
    background: var(--bg-darker);
    padding: var(--s2);
    border-radius: var(--card-border-radius);
    overflow-x: auto;
  }

  pre > code {
    background: none;
    padding: 0;
  }

  .card {
    background: var(--card-bg);
    border-radius: var(--card-border-radius);
    box-shadow: var(--whiteframe-shadow-2dp);
    padding: var(--s2);
    text-align: left;
    border: 2px solid var(--extra-border-color);
  }

  .card-clickable:hover {
    transition: transform 0.2s;
    transform: translateY(-2px);
    box-shadow: var(--whiteframe-shadow-4dp);
    border-color: var(--c-primary);
    cursor: pointer;
  }

  ::selection {
    background: color-mix(in srgb, var(--c-primary) 30%, transparent);
  }

  ::placeholder {
    color: var(--text-color-muted);
  }

  /* Utility classes */
  .text-muted { color: var(--text-color-muted); }
  .text-primary { color: var(--c-primary); }

  /* Page transition */
  .page-fade { animation: fadeIn 0.3s ease; }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
</style>
`});var je;var _e;var Ue;var W;var ze;var Fe;var xe;var Ie;var We;var Pe=I(()=>{"use strict";Lo();p();ve();je=new Set([`getTasks`,`getArchivedTasks`,`getCurrentContextTasks`,`getSelectedTask`,`getFocusedTask`,`selectTask`,`reInitData`,`updateTask`,`addTask`,`deleteTask`,`batchUpdateForProject`,`reorderTasks`,`getAllProjects`,`addProject`,`updateProject`,`deleteProject`,`getAllTags`,`addTag`,`updateTag`,`showSnack`,`notify`,`request`,`translate`,`formatDate`,`getCurrentLanguage`,`openDialog`,`showIndexHtmlAsView`,`showIndexHtmlInSidePanel`,`showInWorkContext`,`closeWorkContextView`,`getActiveWorkContext`,`getAppState`,`persistDataSynced`,`loadPersistedData`,`listSyncedDataKeys`,`registerHook`,`registerWorkContextHeaderButton`,`executeNodeScript`,`dispatchAction`,`setCounter`,`getCounter`,`incrementCounter`,`decrementCounter`,`deleteCounter`,`getAllCounters`,`getAllSimpleCounters`]),_e=t=>{let n=t.trim().replace(/\s+/g,``).toLowerCase();return!n||n===`transparent`||/^#[\da-f]{3}0$/.test(n)||/^#[\da-f]{6}00$/.test(n)||/^.+\/0(?:\.0+)?%?\)$/.test(n)?!0:/^(?:rgba?|hsla?)\([^,]+,[^,]+,[^,]+,0(?:\.0+)?%?\)$/.test(n)},Ue=(t,n,e)=>_e(t)?_e(n)?e:n:t,W=`__hasDialogButtonHandler`,ze=()=>{let t=document.body.classList.contains(`isDarkTheme`),n=getComputedStyle(document.body),e=c=>n.getPropertyValue(c).trim(),r=e(`--bg`),a=e(`--bg-lighter`),i=Ue(e(`--card-bg`),a,r);return`
    <style id="injected-theme-vars">
      :root {
        --bg: ${r};
        --bg-darker: ${e(`--bg-darker`)};
        --bg-lighter: ${a};
        --text-color: ${e(`--text-color`)};
        --text-color-less-intense: ${e(`--text-color-less-intense`)};
        --text-color-muted: ${e(`--text-color-muted`)};
        --card-bg: ${i};
        --card-shadow: ${e(`--card-shadow`)};
        --card-border-radius: ${e(`--card-border-radius`)};
        --divider-color: ${e(`--divider-color`)};
        --extra-border-color: ${e(`--extra-border-color`)};
        --select-hover-bg: ${e(`--select-hover-bg`)};
        --c-primary: ${e(`--c-primary`)};
        --c-accent: ${e(`--c-accent`)};
        --c-warn: ${e(`--c-warn`)};
        --color-success: ${e(`--color-success`)};
        --color-danger: ${e(`--color-danger`)};
        --color-warning: ${e(`--color-warning`)};
        --is-dark-theme: ${t?`1`:`0`};
        --scrollbar-thumb: ${e(`--scrollbar-thumb`)};
        --scrollbar-thumb-hover: ${e(`--scrollbar-thumb-hover`)};
        --scrollbar-track: ${e(`--scrollbar-track`)};

        /* Shadow system */
        --whiteframe-shadow-1dp: ${e(`--whiteframe-shadow-1dp`)};
        --whiteframe-shadow-2dp: ${e(`--whiteframe-shadow-2dp`)};
        --whiteframe-shadow-3dp: ${e(`--whiteframe-shadow-3dp`)};
        --whiteframe-shadow-4dp: ${e(`--whiteframe-shadow-4dp`)};
        --whiteframe-shadow-6dp: ${e(`--whiteframe-shadow-6dp`)};
        --whiteframe-shadow-8dp: ${e(`--whiteframe-shadow-8dp`)};
        --whiteframe-shadow-12dp: ${e(`--whiteframe-shadow-12dp`)};
        --whiteframe-shadow-24dp: ${e(`--whiteframe-shadow-24dp`)};

        /* Spacing system */
        --s: ${e(`--s`)};
        --s-quarter: ${e(`--s-quarter`)};
        --s-half: ${e(`--s-half`)};
        --s2: ${e(`--s2`)};
        --s3: ${e(`--s3`)};
        --s4: ${e(`--s4`)};

        /* Transition system */
        --transition-duration-xs: ${e(`--transition-duration-xs`)};
        --transition-duration-s: ${e(`--transition-duration-s`)};
        --transition-duration-m: ${e(`--transition-duration-m`)};
        --transition-duration-l: ${e(`--transition-duration-l`)};
        --transition-standard: ${e(`--transition-standard`)};
        --ani-standard-timing: ${e(`--ani-standard-timing`)};

        /* Font stack */
        --font-primary-stack: ${e(`--font-primary-stack`)};

        /* Task-related variables */
        --task-first-line-min-height: ${e(`--task-first-line-min-height`)};
        --task-icon-default-opacity: ${e(`--task-icon-default-opacity`)};
        --task-inner-padding-top-bottom: ${e(`--task-inner-padding-top-bottom`)};
        --task-is-done-dim-opacity: ${e(`--task-is-done-dim-opacity`)};
        --task-border-radius: ${e(`--task-border-radius`)};
        --task-c-bg: ${e(`--task-c-bg`)};
        --task-c-selected-bg: ${e(`--task-c-selected-bg`)};
        --sub-task-c-bg: ${e(`--sub-task-c-bg`)};
        --sub-task-c-bg-done: ${e(`--sub-task-c-bg-done`)};
        --task-c-bg-done: ${e(`--task-c-bg-done`)};
        --task-c-current-bg: ${e(`--task-c-current-bg`)};
        --task-c-drag-drop-bg: ${e(`--task-c-drag-drop-bg`)};
        --sub-task-c-bg-in-selected: ${e(`--sub-task-c-bg-in-selected`)};
        --task-shadow: ${e(`--task-shadow`)};
        --task-shadow-sub-task: ${e(`--task-shadow-sub-task`)};
        --task-current-shadow: ${e(`--task-current-shadow`)};
        --task-selected-shadow: ${e(`--task-selected-shadow`)};
        --task-detail-value-color: ${e(`--task-detail-value-color`)};
        --task-detail-bg: ${e(`--task-detail-bg`)};
        --task-detail-bg-hover: ${e(`--task-detail-bg-hover`)};
        --task-detail-shadow: ${e(`--task-detail-shadow`)};
      }

      body {
        background: transparent;
        color: var(--text-color);
        font-family: var(--font-primary-stack);
      }

      /* Custom scrollbar styles for plugins */
      :root {
        scrollbar-color: var(--scrollbar-thumb) var(--scrollbar-track);
        scrollbar-width: thin;
      }

      ::-webkit-scrollbar {
        width: 4px;
        height: 4px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        background: var(--scrollbar-track);
        border-radius: 4px;
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: var(--scrollbar-thumb);
        border-radius: 16px;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: var(--scrollbar-thumb-hover);
      }
    </style>
  `},Fe=t=>`
    <script>
      (function() {
        let callId = 0;
        const bridgeToken = ${JSON.stringify(t.bridgeToken)};
        const bridgeGeneration = ${JSON.stringify(t.bridgeGeneration)};
        const pendingCalls = new Map();
        const dialogButtonHandlers = new Map();
        const hookHandlers = new Map(); // Store hook handlers by hook type
        const workContextBtnHandlers = new Map(); // button label -> onClick

        // Handle responses from parent
        window.addEventListener('message', function(event) {
          // Accept messages only from the host (our parent window).
          // Without this check, any other iframe / sibling window could
          // spoof API responses, hook events, or work-context button
          // clicks. The host always posts via the iframe's contentWindow,
          // so event.source will be window.parent in the legitimate case.
          if (event.source !== window.parent) return;
          const data = event.data;
          if (data?.type === '${Do.API_RESPONSE}' && data.callId) {
            const resolver = pendingCalls.get(data.callId);
            if (resolver) {
              pendingCalls.delete(data.callId);
              resolver.resolve(data.result);
            }
          } else if (data?.type === '${Do.API_ERROR}' && data.callId) {
            const resolver = pendingCalls.get(data.callId);
            if (resolver) {
              pendingCalls.delete(data.callId);
              resolver.reject(new Error(data.error));
            }
          } else if (data?.type === '${Do.DIALOG_BUTTON_CLICK}') {
            // Handle dialog button clicks
            const key = data.dialogCallId + ':' + data.buttonIndex;
            const handler = dialogButtonHandlers.get(key);
            if (handler) {
              Promise.resolve()
                .then(() => handler())
                .then((result) => {
                  window.parent.postMessage({
                    type: '${Do.DIALOG_BUTTON_RESPONSE}',
                    bridgeToken: bridgeToken,
                    bridgeGeneration: bridgeGeneration,
                    dialogCallId: data.dialogCallId,
                    buttonIndex: data.buttonIndex,
                    result: result
                  }, '*');
                })
                .catch((error) => {
                  window.parent.postMessage({
                    type: '${Do.DIALOG_BUTTON_RESPONSE}',
                    bridgeToken: bridgeToken,
                    bridgeGeneration: bridgeGeneration,
                    dialogCallId: data.dialogCallId,
                    buttonIndex: data.buttonIndex,
                    error: error instanceof Error ? error.message : 'Unknown dialog button error'
                  }, '*');
                });
            }
          } else if (data?.type === '${Do.WORK_CONTEXT_BTN_CLICK}') {
            const handler = workContextBtnHandlers.get(data.buttonHandlerId);
            if (handler) {
              try {
                handler(data.ctx);
              } catch (error) {
                console.error('Plugin work-context button handler error:', error);
              }
            }
          } else if (data?.type === '${Do.HOOK_EVENT}') {
            // Handle hook events
            const handlers = hookHandlers.get(data.hook);
            if (handlers && handlers.length > 0) {
              handlers.forEach(handler => {
                try {
                  handler(data.payload);
                } catch (error) {
                  // console, not PluginLog: this runs inside the iframe, where
                  // the host's PluginLog global does not exist.
                  console.error('Plugin hook handler error:', error);
                }
              });
            }
          }
        });

        // Simple API call function
        function callApi(method, args) {
          return new Promise((resolve, reject) => {
            const id = ++callId;
            pendingCalls.set(id, { resolve, reject });

            // Special handling for openDialog to store button handlers
            let processedArgs = args;
            if (method === 'openDialog' && args && args[0] && args[0].buttons) {
              processedArgs = [...args];
              processedArgs[0] = {
                ...args[0],
                buttons: args[0].buttons.map((button, index) => {
                  if (button.onClick) {
                    // Store the handler
                    const key = id + ':' + index;
                    dialogButtonHandlers.set(key, button.onClick);
                    // Remove onClick from serialized data
                    const { onClick, ...buttonWithoutHandler } = button;
                    return { ...buttonWithoutHandler, ${W}: true };
                  }
                  return button;
                })
              };
            }

            // Special handling for registerHook to store handlers locally
            if (method === 'registerHook' && args && args.length >= 2) {
              const [hook, handler] = args;
              if (typeof handler === 'function') {
                // Store handler locally
                if (!hookHandlers.has(hook)) {
                  hookHandlers.set(hook, []);
                }
                hookHandlers.get(hook).push(handler);

                // Pass a placeholder to parent - parent will send events back to us
                processedArgs = [hook, 'IFRAME_HANDLER'];
              } else {
                processedArgs = args;
              }
            }

            window.parent.postMessage({
              type: '${Do.API_CALL}',
              bridgeToken: bridgeToken,
              bridgeGeneration: bridgeGeneration,
              method: method,
              args: processedArgs || [],
              callId: id
            }, '*');

            // Timeout after 30 seconds
            setTimeout(() => {
              if (pendingCalls.has(id)) {
                pendingCalls.delete(id);
                reject(new Error('API call timeout'));
              }
            }, 30000);
          });
        }

        function unsupportedIframeRegistration(method) {
          return () => Promise.reject(
            new Error(method + ' is only supported in plugin.js, not iframe index.html')
          );
        }

        // Create the PluginAPI object with all methods
        window.PluginAPI = {
          cfg: ${JSON.stringify(t.baseCfg)},

          // Add Hooks enum (kept in sync with PluginHooks via JSON.stringify
          // of the real source \u2014 no hand-edited mirror to drift).
          Hooks: ${JSON.stringify(E({},Lt))},

          // Task methods
          getTasks: () => callApi('getTasks'),
          getArchivedTasks: () => callApi('getArchivedTasks'),
          getCurrentContextTasks: () => callApi('getCurrentContextTasks'),
          getSelectedTask: () => callApi('getSelectedTask'),
          getFocusedTask: () => callApi('getFocusedTask'),
          selectTask: (taskId) => callApi('selectTask', [taskId]),
          reInitData: () => callApi('reInitData'),
          updateTask: (taskId, updates) => callApi('updateTask', [taskId, updates]),
          addTask: (taskData) => callApi('addTask', [taskData]),
          deleteTask: (taskId) => callApi('deleteTask', [taskId]),
          batchUpdateForProject: (request) => callApi('batchUpdateForProject', [request]),

          // Project methods
          getAllProjects: () => callApi('getAllProjects'),
          addProject: (projectData) => callApi('addProject', [projectData]),
          updateProject: (projectId, updates) => callApi('updateProject', [projectId, updates]),
          deleteProject: (projectId) => callApi('deleteProject', [projectId]),

          // Tag methods
          getAllTags: () => callApi('getAllTags'),
          addTag: (tagData) => callApi('addTag', [tagData]),
          updateTag: (tagId, updates) => callApi('updateTag', [tagId, updates]),

          // Task ordering
          reorderTasks: (taskIds, contextId, contextType) => callApi('reorderTasks', [taskIds, contextId, contextType]),

          // UI methods
          // A snack action's onClick cannot cross postMessage (DataCloneError would drop
          // the whole snack); show the message without the button instead.
          showSnack: (cfg) => {
            const { action, ...rest } = cfg || {};
            return callApi('showSnack', [rest]);
          },
          notify: (cfg) => callApi('notify', [cfg]),
          request: (url, options) => callApi('request', [url, options]),
          openDialog: (cfg) => callApi('openDialog', [cfg]),
          showIndexHtmlAsView: () => callApi('showIndexHtmlAsView'),
          showIndexHtmlInSidePanel: () => callApi('showIndexHtmlInSidePanel'),
          showInWorkContext: () => callApi('showInWorkContext'),
          closeWorkContextView: () => callApi('closeWorkContextView'),
          getActiveWorkContext: () => callApi('getActiveWorkContext'),
          getAppState: () => callApi('getAppState'),

          // Persistence methods (optional second arg = key, forwarded by callApi)
          persistDataSynced: (data, key) => callApi('persistDataSynced', [data, key]),
          loadPersistedData: (key) => callApi('loadPersistedData', [key]),
          loadSyncedData: (key) => callApi('loadPersistedData', [key]), // Alias
          listSyncedDataKeys: (prefix) => callApi('listSyncedDataKeys', [prefix]),

          // Registration methods
          registerHook: (hook, handler) => callApi('registerHook', [hook, handler]),
          registerHeaderButton: unsupportedIframeRegistration('registerHeaderButton'),
          registerMenuEntry: unsupportedIframeRegistration('registerMenuEntry'),
          registerTaskContextMenuEntry: unsupportedIframeRegistration('registerTaskContextMenuEntry'),
          registerConfigHandler: unsupportedIframeRegistration('registerConfigHandler'),
          registerShortcut: unsupportedIframeRegistration('registerShortcut'),
          unregisterShortcut: unsupportedIframeRegistration('unregisterShortcut'),
          registerSidePanelButton: unsupportedIframeRegistration('registerSidePanelButton'),
          registerWorkContextHeaderButton: (cfg) => {
            // onClick is not structured-cloneable across postMessage; keep it
            // locally, keyed by the button's label, and send the rest of the
            // cfg. The host rebuilds onClick as a proxy and posts a
            // WORK_CONTEXT_BTN_CLICK back (carrying the label) on invocation.
            // Keying by label \u2014 which the host also dedups on \u2014 means
            // re-registering a button overwrites instead of leaking.
            workContextBtnHandlers.set(cfg.label, cfg.onClick);
            const { onClick, ...rest } = cfg;
            return callApi('registerWorkContextHeaderButton', [rest]);
          },

          // Node execution (if available)
          executeNodeScript: (request) => callApi('executeNodeScript', [request]),

          // Action dispatch
          dispatchAction: (action) => callApi('dispatchAction', [action]),

          // Simple counters
          setCounter: (id, value) => callApi('setCounter', [id, value]),
          getCounter: (id) => callApi('getCounter', [id]),
          incrementCounter: (id, incrementBy) => callApi('incrementCounter', [id, incrementBy]),
          decrementCounter: (id, decrementBy) => callApi('decrementCounter', [id, decrementBy]),
          deleteCounter: (id) => callApi('deleteCounter', [id]),
          getAllCounters: () => callApi('getAllCounters'),
          getAllSimpleCounters: () => callApi('getAllSimpleCounters'),

          // i18n
          translate: (key, params) => callApi('translate', [key, params]),
          formatDate: (date, format) => callApi('formatDate', [date, format]),
          getCurrentLanguage: () => callApi('getCurrentLanguage'),

          // Readiness signal for iframe plugins.
          //
          // NOTE \u2014 semantic difference from host-side onReady:
          // The host implementation pings the Electron IPC bridge with retry before
          // firing the callback (handles cold-boot races for nodeExecution plugins).
          // Here, we just fire on the next microtask. This is acceptable because:
          //   1. Iframe plugins are rendered on user navigation, long after host
          //      startup \u2014 the cold-boot window has already passed.
          //   2. executeNodeScript calls in iframe plugins proxy through the host
          //      via callApi(); the host applies its own ping logic per call site.
          // If iframe plugins ever auto-render at startup, route this through a
          // host-side RPC that calls PluginService._fireOnReady.
          onReady: (fn) => {
            queueMicrotask(() => {
              try {
                Promise.resolve(fn()).catch((err) => {
                  console.error('[Plugin] onReady callback error:', err);
                });
              } catch (err) {
                console.error('[Plugin] onReady callback error:', err);
              }
            });
          },

          // Teardown signal \u2014 no-op in iframes: the host unmounts the iframe on
          // unload, which takes its timers/listeners with it. Provided so plugin
          // code can call onUnload unconditionally on both execution paths.
          onUnload: (fn) => {},

          // Message handling
          onMessage: (handler) => {
            // Store the handler and set up message listener
            window.__pluginMessageHandler = handler;
            window.addEventListener('message', async (event) => {
              // Same origin-check rationale as the listener above \u2014
              // accept only messages from our parent host.
              if (event.source !== window.parent) return;
              if (event.data?.type === '${Do.MESSAGE}' && window.__pluginMessageHandler) {
                try {
                  const result = await window.__pluginMessageHandler(event.data.message);
                  event.source?.postMessage({
                    type: '${Do.MESSAGE_RESPONSE}',
                    messageId: event.data.messageId,
                    result
                  }, '*');
                } catch (error) {
                  event.source?.postMessage({
                    type: '${Do.MESSAGE_ERROR}',
                    messageId: event.data.messageId,
                    error: error instanceof Error ? error.message : 'Unknown error'
                  }, '*');
                }
              }
            });
          }
        };

        // Notify parent that plugin is ready
        window.parent.postMessage({
          type: '${Do.READY}',
          bridgeToken: bridgeToken,
          bridgeGeneration: bridgeGeneration,
          pluginId: '${t.pluginId}'
        }, '*');
      })();
    <\/script>
  `,xe=t=>{let n=Fe(t),a=ze()+(t.manifest.uiKit!==!1?Ce:``)+n,i=t.indexHtml,c=i.match(/<head[^>]*>/i);if(c){let u=c.index+c[0].length;return i.slice(0,u)+a+i.slice(u)}return a+i},Ie=(t,n)=>N(null,null,function*(){let{data:e}=t;if(!(!e||typeof e!=`object`)&&We(e,n)){if(n.boundMethods||(n.boundMethods=n.pluginBridge.createBoundMethods(n.pluginId,n.manifest)),e.type===Do.API_CALL&&e.callId){let{method:r,args:a=[],callId:i}=e;try{if(!je.has(r))throw new Error(`Unknown API method: ${r}`);if(r===`registerWorkContextHeaderButton`&&a.length>=1){let d=a[0],g=d.label;if(typeof g!=`string`||!g)throw new Error(`registerWorkContextHeaderButton requires a string label`);let l=F(E({},d),{onClick:O=>{t.source?.postMessage({type:Do.WORK_CONTEXT_BTN_CLICK,buttonHandlerId:g,ctx:O},`*`)}}),v=n.boundMethods.registerWorkContextHeaderButton,I=yield v(l);t.source?.postMessage({type:Do.API_RESPONSE,callId:i,result:I},{targetOrigin:`*`});return}if(r===`registerHook`){let d=n.pluginBridge;if(a.length>=2){let[g,l]=a;H.log(`Plugin iframe registerHook:`,{hook:g,handlerPlaceholder:l,pluginId:n.pluginId});let h;if(l===`IFRAME_HANDLER`){let v=I=>{t.source?.postMessage({type:Do.HOOK_EVENT,hook:g,payload:I},`*`)};h=yield d.registerHook(n.pluginId,g,v)}else throw new Error(`Iframe registerHook calls must use IFRAME_HANDLER`);t.source?.postMessage({type:Do.API_RESPONSE,callId:i,result:h},{targetOrigin:`*`});return}}let c=n.boundMethods;if(c&&typeof c[r]==`function`){let d=yield c[r](...a||[]);t.source?.postMessage({type:Do.API_RESPONSE,callId:i,result:d},`*`);return}let u=n.pluginBridge;if(typeof u[r]!=`function`)throw new Error(`Unknown API method: ${r}`);if(r===`openDialog`&&a.length>=1){let d=a[0];d.buttons&&(d.buttons=d.buttons.map((l,h)=>{if(l[W]){let v=E({},l);return delete v[W],F(E({},v),{onClick:()=>N(null,null,function*(){return t.source?.postMessage({type:Do.DIALOG_BUTTON_CLICK,buttonIndex:h,dialogCallId:i},{targetOrigin:`*`}),new Promise((I,O)=>{let V=y=>{y.source===t.source&&y.data?.bridgeToken===n.bridgeToken&&y.data?.bridgeGeneration===n.bridgeGeneration&&y.data?.type===Do.DIALOG_BUTTON_RESPONSE&&y.data?.dialogCallId===i&&y.data?.buttonIndex===h&&(window.removeEventListener(`message`,V),y.data.error?O(new Error(y.data.error)):I(y.data.result))};window.addEventListener(`message`,V)})})})}return l}));let g=yield u[r](d);t.source?.postMessage({type:Do.API_RESPONSE,callId:i,result:g},`*`)}else{let d=yield u[r](...a||[]);t.source?.postMessage({type:Do.API_RESPONSE,callId:i,result:d},`*`)}}catch(c){t.source?.postMessage({type:Do.API_ERROR,callId:i,error:c instanceof Error?c.message:`Unknown error`},`*`)}}if(e.type===Do.MESSAGE&&e.messageId)try{let r=yield n.pluginBridge.sendMessageToPlugin(n.pluginId,e.message);t.source?.postMessage({type:Do.MESSAGE_RESPONSE,messageId:e.messageId,result:r},`*`)}catch(r){t.source?.postMessage({type:Do.MESSAGE_ERROR,messageId:e.messageId,error:r instanceof Error?r.message:`Unknown error`},`*`)}e.type===Do.READY&&e.pluginId===n.pluginId&&H.log(`Plugin ${n.pluginId} is ready`)}}),We=(t,n)=>!new Set([Do.API_CALL,Do.MESSAGE,Do.READY]).has(t.type)||t.type===Do.MESSAGE?!0:t.bridgeToken===n.bridgeToken&&t.bridgeGeneration===n.bridgeGeneration});function Ke(t,n){if(t&1&&(Fs(0,`mat-card`,3)(1,`mat-card-content`)(2,`div`,5),Ev(3,`mat-progress-spinner`,6),Fs(4,`p`),wN(5),$N(6,`translate`),bd()()()()),t&2){let e=U_(2);Jb(5),Jv(WN(6,1,e.T.PLUGINS.LOADING_INTERFACE))}}function qe(t,n){if(t&1&&(Fs(0,`div`,4),Ev(1,`mat-progress-spinner`,7),Fs(2,`p`),wN(3),$N(4,`translate`),bd()()),t&2){let e=U_(2);Jb(3),Jv(WN(4,1,e.T.PLUGINS.LOADING_PLUGIN))}}function Xe(t,n){if(t&1&&C_(0,Ke,7,3,`mat-card`,3)(1,qe,5,3,`div`,4),t&2){let e=U_();N_(e.showFullUI?0:1)}}function Je(t,n){if(t&1){let e=P_();Fs(0,`mat-card`,8)(1,`mat-card-header`)(2,`mat-card-title`)(3,`mat-icon`,10),wN(4,`error`),bd(),wN(5),$N(6,`translate`),bd()(),Fs(7,`mat-card-content`)(8,`p`),wN(9),bd(),Fs(10,`button`,11),Sv(`click`,function(){Sh(e);let a=U_(2);return xh(a.goBack())}),wN(11),$N(12,`translate`),bd()()()}if(t&2){let e=U_(2);Jb(5),Md(` `,WN(6,3,e.T.PLUGINS.ERROR_LOADING_PLUGIN),` `),Jb(4),Jv(e.error()),Jb(2),Md(` `,WN(12,5,e.T.PLUGINS.GO_BACK),` `)}}function Qe(t,n){if(t&1&&(Fs(0,`div`,9)(1,`mat-icon`),wN(2,`error_outline`),bd(),Fs(3,`p`),wN(4),bd()()),t&2){let e=U_(2);Jb(4),Jv(e.error())}}function Ye(t,n){if(t&1&&C_(0,Je,13,7,`mat-card`,8)(1,Qe,5,1,`div`,9),t&2){let e=U_();N_(e.showFullUI?0:1)}}function Ze(t,n){if(t&1){let e=P_();Fs(0,`div`,12)(1,`iframe`,13,0),Sv(`load`,function(){Sh(e);let a=U_();return xh(a.onIframeLoad())}),bd()()}if(t&2){let e=U_();Bv(`is-resizing`,e.isResizing()),Jb(),Bv(`hidden`,e.isLoading()),vv(`srcdoc`,e.iframeSrcdoc(),lb),yv(`data-plugin-id`,e.pluginId())}}var Ve;var At;var et=I(()=>{DM();ln();Fr();s();$i();ms();hs();Pe();h();Ki();_();p();de();Xt();Pr();j();DM();Ve=[`iframe`];At=(()=>{class t{constructor(){this.showFullUI=!0,this.useSidePanelConfig=!1,this.skipCleanupOnDestroy=!1,this._route=M(Ce$1),this._router=M(ae),this._elRef=M(xo),this._sanitizer=M(Gt),this._pluginService=M(Ui),this._pluginBridge=M(lr),this._cleanupService=M(nr),this._translateService=M(Oe),this._layoutService=M(Ve$1),this.T=T,this.pluginId=is(``),this.isLoading=is(!0),this.error=is(null),this.iframeSrcdoc=is(null),this.isResizing=this._layoutService.isPanelResizing,this._isDestroyed=!1}ngOnInit(){return N(this,null,function*(){if(this.directPluginId){this.pluginId.set(this.directPluginId),yield this._waitForPluginSystem();try{yield this._loadPluginIndex(this.directPluginId)}catch(e){H.err(`Failed to load plugin index:`,e),this.error.set(e instanceof Error?e.message:`Failed to load plugin`),this.isLoading.set(!1)}return}this._routeSubscription=this._route.paramMap.subscribe(e=>N(this,null,function*(){let r=e.get(`pluginId`);if(H.log(`Route paramMap changed, newPluginId:`,r,`currentPluginId:`,this.pluginId()),!r){this.error.set(`Plugin ID not provided`),this.isLoading.set(!1);return}if(this.pluginId()===r){H.log(`Same plugin ID, skipping reload`);return}H.log(`Navigating from plugin "${this.pluginId()}" to plugin "${r}"`),this._cleanupIframeCommunication(),this.isLoading.set(!0),this.error.set(null),this.pluginId.set(r),yield this._waitForPluginSystem();try{yield this._loadPluginIndex(r)}catch(a){H.err(`Failed to load plugin index:`,a),this.error.set(a instanceof Error?a.message:`Failed to load plugin`),this.isLoading.set(!1)}}))})}_waitForPluginSystem(){return N(this,null,function*(){if(!this._pluginService.isInitialized())try{yield this._pluginService.initializePlugins()}catch(e){throw H.err(`Failed to initialize plugin system:`,e),new Error(`Failed to initialize plugin system`)}})}ngOnDestroy(){this._isDestroyed=!0,this._cleanupIframeCommunication(),this._routeSubscription&&this._routeSubscription.unsubscribe()}goBack(){this._router.navigate([`/config`],{fragment:`plugins`})}_getIndexHtmlWhenLoaded(e){return N(this,null,function*(){return this._pluginService.getPluginIndexHtml(e)||(this._pluginService.pluginStates().get(e)?.status!==`loading`?null:(H.log(`Plugin ${e} is still loading, waiting before opening index`),yield this._pluginService.activatePlugin(e),this._pluginService.getPluginIndexHtml(e)))})}_loadPluginIndex(e){return N(this,null,function*(){H.log(`Loading plugin index for: ${e}`);let r=yield this._getIndexHtmlWhenLoaded(e);if(this.pluginId()!==e){H.log(`Plugin ${e} load superseded by ${this.pluginId()}`);return}if(!r){H.err(`No index.html content found for plugin: ${e}`);let l=(yield this._pluginService.getAllPlugins()).find(h=>h.manifest.id===e);throw l?l.manifest.iFrame?l.error?new Error(l.error):new Error(`Plugin index.html not loaded`):new Error(`Plugin does not support iframes`):new Error(`Plugin not found`)}let i=(yield this._pluginService.getAllPlugins()).find(g=>g.manifest.id===e);if(!i)throw new Error(`Plugin not found`);let c=yield this._pluginService.getBaseCfg();if(this._isDestroyed)return;let u={pluginId:e,manifest:i.manifest,indexHtml:r,baseCfg:c,pluginBridge:this._pluginBridge,bridgeToken:this._createBridgeToken(),bridgeGeneration:this._pluginService.getPluginIframeGeneration(e),boundMethods:this._pluginBridge.createBoundMethods(e,i.manifest)},d=xe(u);this._messageListener=g=>N(this,null,function*(){let l=g,h=this._getPluginIframeWindow();!h||l.source!==h||this._pluginService.getPluginIframeGeneration(u.pluginId)===u.bridgeGeneration&&this._pluginService.getPluginIndexHtml(u.pluginId)&&(yield Ie(l,u))}),window.addEventListener(`message`,this._messageListener),this.iframeSrcdoc.set(this._sanitizer.bypassSecurityTrustHtml(d)),this.isLoading.set(!1),H.log(`Plugin ${e} iframe srcdoc set, loading complete`)})}_createBridgeToken(){let e=new Uint8Array(16);return crypto.getRandomValues(e),Array.from(e,r=>r.toString(16).padStart(2,`0`)).join(``)}_getPluginIframeWindow(){return this._elRef.nativeElement.querySelector(`iframe[data-plugin-iframe]`)?.contentWindow??null}_cleanupIframeCommunication(){let e=this.pluginId();H.log(`Cleaning up iframe communication for plugin: ${e}`),this._messageListener&&(window.removeEventListener(`message`,this._messageListener),this._messageListener=void 0,H.log(`Removed message listener for plugin: ${e}`)),e&&!this.skipCleanupOnDestroy&&(this._cleanupService.cleanupPlugin(e),H.log(`Cleaned up plugin references for: ${e}`)),this.iframeSrcdoc.set(this._sanitizer.bypassSecurityTrustHtml(`<html><body></body></html>`)),H.log(`Reset iframe to empty document for plugin: ${e}`)}onIframeLoad(){H.log(`Plugin iframe loaded for plugin:`,this.pluginId()),this.iframeRef?.nativeElement&&this.pluginId()&&this._cleanupService.registerIframe(this.pluginId(),this.iframeRef.nativeElement)}static{this.ɵfac=function(r){return new(r||t)}}static{this.ɵcmp=CC({type:t,selectors:[[`plugin-index`]],viewQuery:function(r,a){if(r&1&&Ov(Ve,5),r&2){let i;Q_(i=Z_())&&(a.iframeRef=i.first)}},inputs:{directPluginId:`directPluginId`,showFullUI:`showFullUI`,useSidePanelConfig:`useSidePanelConfig`,skipCleanupOnDestroy:`skipCleanupOnDestroy`},decls:4,vars:4,consts:[[`iframe`,``],[1,`plugin-index-container`],[1,`iframe-container`,3,`is-resizing`],[1,`loading-card`],[1,`simple-loading`],[1,`loading-content`],[`mode`,`indeterminate`,`diameter`,`40`],[`mode`,`indeterminate`,`diameter`,`24`],[1,`error-card`],[1,`simple-error`],[`color`,`warn`],[`mat-button`,``,`color`,`primary`,3,`click`],[1,`iframe-container`],[`data-plugin-iframe`,``,`sandbox`,`allow-scripts allow-same-origin allow-forms allow-popups allow-modals`,1,`plugin-iframe`,3,`load`,`srcdoc`]],template:function(r,a){r&1&&(Fs(0,`div`,1),C_(1,Xe,2,1),C_(2,Ye,2,1),C_(3,Ze,3,6,`div`,2),bd()),r&2&&(vv(`@pluginSwitch`,a.pluginId()),Jb(),N_(a.isLoading()?1:-1),Jb(),N_(a.error()?2:-1),Jb(),N_(a.iframeSrcdoc()&&!a.error()?3:-1))},dependencies:[ft,zs,Y,A,z,F$2,k,Jr],styles:[`@media screen and (min-width:600px){.isNoMac[_ngcontent-%COMP%]{scrollbar-color:var(--%NS%scrollbar-thumb) var(--%NS%scrollbar-track);scrollbar-width:4px}.isNoMac[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar{width:4px;height:4px}.isNoMac[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-track{background:var(--%NS%scrollbar-track);border-radius:var(--%NS%card-border-radius)}.isNoMac[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:var(--%NS%scrollbar-thumb);border-radius:16px}.isNoMac[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:var(--%NS%scrollbar-thumb-hover)}}@media screen and (max-width:599px){.isNoTouchOnly[_ngcontent-%COMP%]{scrollbar-color:var(--%NS%scrollbar-thumb) var(--%NS%scrollbar-track);scrollbar-width:4px}.isNoTouchOnly[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar{width:4px;height:4px}.isNoTouchOnly[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-track{background:var(--%NS%scrollbar-track);border-radius:var(--%NS%card-border-radius)}.isNoTouchOnly[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:var(--%NS%scrollbar-thumb);border-radius:16px}.isNoTouchOnly[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:var(--%NS%scrollbar-thumb-hover)}}.plugin-index-container[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;overflow:hidden}.loading-card[_ngcontent-%COMP%], .error-card[_ngcontent-%COMP%]{margin:2rem;max-width:600px;align-self:center}.loading-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:1rem;padding:2rem}.loading-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:var(--%NS%text-color-muted)}.error-card[_ngcontent-%COMP%]   .mat-card-header[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;color:var(--%NS%color-danger)}.error-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:1rem;color:var(--%NS%text-color)}.simple-loading[_ngcontent-%COMP%], .simple-error[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:var(--%NS%s2)}.simple-error[_ngcontent-%COMP%]{color:var(--%NS%color-danger)}.simple-error[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:48px;width:48px;height:48px}.simple-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .simple-error[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;opacity:.7}.iframe-container[_ngcontent-%COMP%]{flex:1;position:relative;overflow:hidden}.iframe-container.is-resizing[_ngcontent-%COMP%], .iframe-container.is-resizing[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{pointer-events:none}.plugin-iframe[_ngcontent-%COMP%]{width:100%;height:100%;border:none;background:transparent;scrollbar-color:var(--%NS%scrollbar-thumb) var(--%NS%scrollbar-track);scrollbar-width:4px}.plugin-iframe[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar{width:4px;height:4px}.plugin-iframe[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-track{background:var(--%NS%scrollbar-track);border-radius:var(--%NS%card-border-radius)}.plugin-iframe[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:var(--%NS%scrollbar-thumb);border-radius:16px}.plugin-iframe[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:var(--%NS%scrollbar-thumb-hover)}.plugin-iframe.hidden[_ngcontent-%COMP%]{visibility:hidden}`],data:{animation:[y(`pluginSwitch`,[p$1(`:enter`,[D({opacity:0,transform:`translateX(20px)`}),F$1(`300ms ease-in-out`,D({opacity:1,transform:`translateX(0)`}))]),p$1(`* => *`,[D({opacity:0,transform:`translateX(-20px)`}),F$1(`300ms ease-in-out`,D({opacity:1,transform:`translateX(0)`}))])])]}})}}return t})()});export{et as n,At as t};