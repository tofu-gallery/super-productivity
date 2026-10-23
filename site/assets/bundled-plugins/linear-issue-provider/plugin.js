"use strict";(()=>{var g=e=>PluginAPI.registerIssueProvider(e),a=(e,n)=>{try{return PluginAPI.translate(e,n)}catch{return e}},o=e=>e,p=async(e,n=()=>!0)=>{try{return n(await e())}catch{return!1}};var c={authorField:"author",bodyField:"body",createdField:"created",avatarField:"avatarUrl"},m=({issueField:e="state",done:n="closed",open:i="open",isDone:s=t=>t===n}={})=>({taskField:"isDone",issueField:e,defaultDirection:"pullOnly",toIssueValue:t=>t?n:i,toTaskValue:s});var y=(...e)=>n=>Object.fromEntries(e.map(i=>[i,n[i]]));var f="https://api.linear.app/graphql",P=["completed","canceled"],w=`
  query SearchIssues($first: Int!, $team: TeamFilter, $project: NullableProjectFilter) {
    viewer {
      assignedIssues(
        first: $first,
        filter: {
          state: { type: { in: ["backlog", "unstarted", "started"] } },
          team: $team,
          project: $project
        }
      ) {
        nodes {
          id identifier number title updatedAt url
          state { id name type }
        }
      }
    }
  }
`,A=`
  query GetIssue($id: String!) {
    issue(id: $id) {
      id identifier number title description priority
      createdAt updatedAt completedAt canceledAt dueDate url
      state { id name type }
      team { id name key }
      assignee { id name avatarUrl }
      creator { id name }
      labels(first: 50) { nodes { id name color } }
      comments(first: 50) {
        nodes { id body createdAt user { id name avatarUrl } }
      }
    }
  }
`,b="query GetViewer { viewer { id name } }",l=async(e,n,i)=>{let s=await e.post(f,{query:n,variables:i});if(s?.errors?.length)throw new Error(s.errors[0].message||"Linear GraphQL error");if(!s?.data)throw new Error("No data returned from Linear");return s.data},T=e=>({id:e.id,title:`${e.identifier} ${e.title}`,url:e.url,status:e.state?.name,identifier:e.identifier,stateType:e.state?.type}),I=async(e,n,i)=>{let s={first:50};n.teamId&&(s.team={id:{eq:n.teamId}}),n.projectId&&(s.project={id:{eq:n.projectId}});let r=(await l(i,w,s)).viewer?.assignedIssues?.nodes||[],d=e.trim().toLowerCase();return d&&(r=r.filter(u=>u.title.toLowerCase().includes(d)||u.identifier.toLowerCase().includes(d))),r.map(T)};g({configFields:[{key:"apiKey",type:"password",label:a("CFG.API_KEY"),required:!0},{key:"apiKeyHelp",type:"link",label:a("CFG.HOW_TO_GET_TOKEN"),url:"https://linear.app/settings/account/security"},{key:"teamId",type:"input",label:a("CFG.TEAM_ID"),advanced:!0},{key:"projectId",type:"input",label:a("CFG.PROJECT_ID"),advanced:!0}],getHeaders:e=>({"Content-Type":"application/json",Authorization:o(e).apiKey||""}),searchIssues(e,n,i){return I(e,o(n),i)},async getById(e,n,i){let t=(await l(i,A,{id:e})).issue;if(!t)throw new Error("No issue data returned from Linear");return{id:t.id,title:t.title,body:t.description||"",url:t.url,state:t.state?.name,lastUpdated:new Date(t.updatedAt).getTime(),assignee:t.assignee?.name,labels:(t.labels?.nodes||[]).map(r=>r.name),comments:(t.comments?.nodes||[]).filter(r=>!!r.user).map(r=>({author:r.user.name,body:r.body||"",created:new Date(r.createdAt).getTime(),avatarUrl:r.user.avatarUrl})),identifier:t.identifier,number:t.number,summary:`${t.identifier} ${t.title}`,stateType:t.state?.type,priority:t.priority,creator:t.creator?.name,createdAt:new Date(t.createdAt).getTime(),completedAt:t.completedAt?new Date(t.completedAt).getTime():void 0}},getIssueLink(){return""},testConnection:(e,n)=>p(()=>l(n,b,{})),getNewIssuesForBacklog(e,n){return I("",o(e),n)},issueDisplay:[{field:"summary",label:a("DISPLAY.SUMMARY"),type:"link",linkField:"url"},{field:"state",label:a("DISPLAY.STATE"),type:"text",hideEmpty:!0},{field:"priority",label:a("DISPLAY.PRIORITY"),type:"text",hideEmpty:!0},{field:"assignee",label:a("DISPLAY.ASSIGNEE"),type:"text",hideEmpty:!0},{field:"labels",label:a("DISPLAY.LABELS"),type:"list",hideEmpty:!0},{field:"body",label:a("DISPLAY.DESCRIPTION"),type:"markdown"}],commentsConfig:c,fieldMappings:[m({issueField:"stateType",done:"completed",open:"unstarted",isDone:e=>P.includes(e)})],extractSyncValues:y("stateType","title","body")});})();
