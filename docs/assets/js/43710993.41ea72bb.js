"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[39922],{83166:(e,n,a)=>{var t=a(64836);n.Z=void 0;var r=t(a(64938)),s=a(85893),l=(0,r.default)((0,s.jsx)("path",{d:"M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.54L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66z"}),"GppGood");n.Z=l},13328:(e,n,a)=>{var t=a(64836);n.Z=void 0;var r=t(a(64938)),s=a(85893),l=(0,r.default)((0,s.jsx)("path",{d:"m23 12-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-10 5h-2v-2h2v2zm0-4h-2V7h2v6z"}),"NewReleases");n.Z=l},68958:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>E,contentTitle:()=>g,default:()=>v,frontMatter:()=>k,metadata:()=>h,toc:()=>N});var t=a(3905),r=a(78901),s=a(49044),l=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=(e,n,a)=>n in e?l(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,c=(e,n)=>{for(var a in n||(n={}))u.call(n,a)&&d(e,a,n[a]);if(p)for(var a of p(n))m.call(n,a)&&d(e,a,n[a]);return e};const k={id:"user-management-rest-api",hide_title:!0,sidebar_label:"REST API"},g=void 0,h={unversionedId:"user-management-rest-api",id:"version-2.4/user-management-rest-api",title:"user-management-rest-api",description:"User Management REST API",source:"@site/management-center_versioned_docs/version-2.4/user-management-rest-api.md",sourceDirName:".",slug:"/user-management-rest-api",permalink:"/management-center/2.4/user-management-rest-api",draft:!1,tags:[],version:"2.4",frontMatter:{id:"user-management-rest-api",hide_title:!0,sidebar_label:"REST API"},sidebar:"someSidebar",previous:{title:"User Management",permalink:"/management-center/2.4/user-management"},next:{title:"Terminal Commands",permalink:"/management-center/2.4/mc-terminal"}},E={},N=[{value:"Get users",id:"get-users",level:2},{value:"Add user",id:"add-user",level:2},{value:"Get user",id:"get-user",level:2},{value:"Edit user",id:"edit-user",level:2},{value:"Delete user",id:"delete-user",level:2},{value:"Deauthenticate / Logout",id:"deauthenticate--logout",level:2}],b={toc:N};function v(e){var n,a=e,{components:l}=a,d=((e,n)=>{var a={};for(var t in e)u.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&p)for(var t of p(e))n.indexOf(t)<0&&m.call(e,t)&&(a[t]=e[t]);return a})(a,["components"]);return(0,t.kt)("wrapper",(n=c(c({},b),d),o(n,i({components:l,mdxType:"MDXLayout"}))),(0,t.kt)("h1",null,"User Management REST API"),(0,t.kt)(r.Z,{version:"2.3",mdxType:"SinceVersion"}),(0,t.kt)(s.Z,{mdxType:"PremiumFeature"}),(0,t.kt)("p",null,"This page describes how to use the ",(0,t.kt)("strong",{parentName:"p"},"User Management REST API"),". Using this API you can automatically create, read, update and delete users that can access the Management Center."),(0,t.kt)("admonition",c({},{type:"info"}),(0,t.kt)("p",{parentName:"admonition"},"Before sending command request make sure that you have been authenticated.")),(0,t.kt)("h2",c({},{id:"get-users"}),"Get users"),(0,t.kt)("p",null,"To get a list of all users, send a ",(0,t.kt)("inlineCode",{parentName:"p"},"GET")," request to the ",(0,t.kt)("inlineCode",{parentName:"p"},"/api/user-management/users")," endpoint, as shown in the following ",(0,t.kt)("inlineCode",{parentName:"p"},"curl")," command:"),(0,t.kt)("pre",null,(0,t.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"curl --cookie .cookies \\\n    --request GET <BASE_URL>/api/user-management/users\\\n    -H 'Content-Type: application/json'\n")),(0,t.kt)("p",null,"Example:"),(0,t.kt)("pre",null,(0,t.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"curl --cookie-jar .cookies \\\n    --request POST http://localhost:8088/auth \\\n    -H 'Content-Type: application/x-www-form-urlencoded' \\\n    -d \"username=admin&password=secret\"\n")),(0,t.kt)("p",null,"The response has the following structure:"),(0,t.kt)("pre",null,(0,t.kt)("code",c({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "username": "admin",\n    "roles": [\n      "admin"\n    ]\n  },\n  {\n    "username": "bob",\n    "roles": [\n      "viewer"\n    ]\n  }\n]\n')),(0,t.kt)("h2",c({},{id:"add-user"}),"Add user"),(0,t.kt)("p",null,"To add a user, send a ",(0,t.kt)("inlineCode",{parentName:"p"},"POST")," request to the ",(0,t.kt)("inlineCode",{parentName:"p"},"/api/user-management/users")," endpoint:"),(0,t.kt)("pre",null,(0,t.kt)("code",c({parentName:"pre"},{className:"language-bash"}),'curl --cookie .cookies \\\n    --request POST <BASE_URL>/api/user-management/users \\\n    -H \'Content-Type: application/json\' \\\n    -d \'{ "username": "bob", "password": "secret", "roles": ["viewer"]}\'\n')),(0,t.kt)("p",null,"Example:"),(0,t.kt)("pre",null,(0,t.kt)("code",c({parentName:"pre"},{className:"language-bash"}),'curl --cookie .cookies \\\n    --request POST http:/localhost:8088/api/user-management/users \\\n    -H \'Content-Type: application/json\' \\\n    -d \'{ "username": "bob", "password": "secret", "roles": ["viewer"]}\'\n')),(0,t.kt)("p",null,"Example response:"),(0,t.kt)("pre",null,(0,t.kt)("code",c({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "username": "admin",\n    "roles": [\n      "admin"\n    ]\n  },\n  {\n    "username": "bob",\n    "roles": [\n      "viewer"\n    ]\n  }\n]\n')),(0,t.kt)("h2",c({},{id:"get-user"}),"Get user"),(0,t.kt)("p",null,"To get the details of a single user, send a ",(0,t.kt)("inlineCode",{parentName:"p"},"GET")," request to the ",(0,t.kt)("inlineCode",{parentName:"p"},"/api/user-management/users/<USER_NAME>")," endpoint and replace ",(0,t.kt)("inlineCode",{parentName:"p"},"<USER_NAME>")," with the name of the user:"),(0,t.kt)("pre",null,(0,t.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"curl --cookie .cookies \\\n    --request GET <BASE_URL>/api/user-management/users/<USER_NAME> \\\n    -H 'Content-Type: application/json'\n")),(0,t.kt)("p",null,"Example:"),(0,t.kt)("pre",null,(0,t.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"curl --cookie .cookies \\\n    --request GET http:/localhost:8088/api/user-management/users/admin \\\n    -H 'Content-Type: application/json'\n")),(0,t.kt)("p",null,"Example response:"),(0,t.kt)("pre",null,(0,t.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "username": "admin",\n  "roles": [\n    "admin"\n  ]\n}\n')),(0,t.kt)("h2",c({},{id:"edit-user"}),"Edit user"),(0,t.kt)("p",null,"To update the details of a single user, send a ",(0,t.kt)("inlineCode",{parentName:"p"},"PUT")," request to the ",(0,t.kt)("inlineCode",{parentName:"p"},"/api/user-management/users/<USER_NAME>")," endpoint and replace ",(0,t.kt)("inlineCode",{parentName:"p"},"<USER_NAME>")," with the name of the user:"),(0,t.kt)("pre",null,(0,t.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"curl --cookie .cookies \\\n    --request PUT <BASE_URL>/api/user-management/users/<USER_NAME> \\\n    -H 'Content-Type: application/json' \\\n    -d '{ \"password\": \"newSecretPassword\" }'\n")),(0,t.kt)("p",null,"Example:"),(0,t.kt)("pre",null,(0,t.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"curl --cookie .cookies \\\n    --request PUT http:/localhost:8088/api/user-management/users/bob \\\n    -H 'Content-Type: application/json' \\\n    -d '{ \"password\": \"newSecretPassword\" }'\n")),(0,t.kt)("h2",c({},{id:"delete-user"}),"Delete user"),(0,t.kt)("p",null,"To delete a single user, send a ",(0,t.kt)("inlineCode",{parentName:"p"},"DELETE")," request to the ",(0,t.kt)("inlineCode",{parentName:"p"},"/api/user-management/users/<USER_NAME>")," endpoint and replace ",(0,t.kt)("inlineCode",{parentName:"p"},"<USER_NAME>")," with the name of the user:"),(0,t.kt)("pre",null,(0,t.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"curl --cookie .cookies \\\n    --request PUT <BASE_URL>/api/user-management/users/<USER_NAME> \\\n    -H 'Content-Type: application/json' \\\n    -d '{ \"password\": \"newSecretPassword\" }'\n")),(0,t.kt)("p",null,"Example:"),(0,t.kt)("pre",null,(0,t.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"curl --cookie .cookies \\\n    --request DELETE http:/localhost:8088/api/user-management/users/bob \\\n    -H 'Content-Type: application/json'\n")),(0,t.kt)("h2",c({},{id:"deauthenticate--logout"}),"Deauthenticate / Logout"),(0,t.kt)("p",null,"See the process described ",(0,t.kt)("a",c({parentName:"p"},{href:"mc-dynamic-security-rest-api"}),"here"),"."))}v.isMDXComponent=!0},49044:(e,n,a)=>{a.d(n,{Z:()=>o});var t=a(67294),r=a(74889),s=a(62659),l=a(83166);function o({inline:e}){return t.createElement(r.Z,{sx:{margin:e?"0px 5px":"5px",height:e?"22px":void 0,color:"#ffffff",backgroundColor:s.Z[500]},size:"small",icon:t.createElement(l.Z,{style:{color:"white"},size:"small"}),label:"Premium"})}},78901:(e,n,a)=>{a.d(n,{Z:()=>l});var t=a(67294),r=a(74889),s=a(13328);function l({version:e}){return e?t.createElement(r.Z,{sx:{margin:"5px"},color:"info",size:"small",icon:t.createElement(s.Z,{size:"small"}),label:`${e}`}):t.createElement(t.Fragment,null)}}}]);