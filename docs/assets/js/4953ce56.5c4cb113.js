"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[80906],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=l,g=u["".concat(i,".").concat(d)]||u[d]||c[d]||o;return t?a.createElement(g,r(r({ref:n},m),{},{components:t})):a.createElement(g,r({ref:n},m))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,r=new Array(o);r[0]=u;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,r[1]=s;for(var p=2;p<o;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},73083:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>k,contentTitle:()=>d,default:()=>h,frontMatter:()=>u,metadata:()=>g,toc:()=>y});var a=t(3905),l=Object.defineProperty,o=Object.defineProperties,r=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,n,t)=>n in e?l(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,c=(e,n)=>{for(var t in n||(n={}))i.call(n,t)&&m(e,t,n[t]);if(s)for(var t of s(n))p.call(n,t)&&m(e,t,n[t]);return e};const u={id:"mc-dynamic-security-rest-api",title:"Dynamic Security REST API \u2b50"},d=void 0,g={unversionedId:"mc-dynamic-security-rest-api",id:"version-2.3/mc-dynamic-security-rest-api",title:"Dynamic Security REST API \u2b50",description:"This page describes how to use the Dynamic Security REST API that is provided by the Management Center for Eclipse Mosquitto.",source:"@site/management-center_versioned_docs/version-2.3/dynamic-security-rest-api.md",sourceDirName:".",slug:"/mc-dynamic-security-rest-api",permalink:"/management-center/2.3/mc-dynamic-security-rest-api",draft:!1,tags:[],version:"2.3",frontMatter:{id:"mc-dynamic-security-rest-api",title:"Dynamic Security REST API \u2b50"},sidebar:"someSidebar",previous:{title:"Web UI",permalink:"/management-center/2.3/mc-dynamic-security"},next:{title:"Topic Tree",permalink:"/management-center/2.3/mc-topic-tree"}},k={},y=[{value:"Sending command requests",id:"sending-command-requests",level:2},{value:"List clients",id:"list-clients",level:3},{value:"Get clients",id:"get-clients",level:3},{value:"Create clients",id:"create-clients",level:3},{value:"Delete clients",id:"delete-clients",level:3},{value:"List groups",id:"list-groups",level:3},{value:"Get groups",id:"get-groups",level:3},{value:"Create groups",id:"create-groups",level:3},{value:"Delete groups",id:"delete-groups",level:3},{value:"Add clients to groups",id:"add-clients-to-groups",level:3},{value:"Remove clients from groups",id:"remove-clients-from-groups",level:3},{value:"List roles",id:"list-roles",level:3},{value:"Get roles",id:"get-roles",level:3},{value:"Create roles",id:"create-roles",level:3},{value:"Delete roles",id:"delete-roles",level:3},{value:"Add roles to clients",id:"add-roles-to-clients",level:3},{value:"Remove roles from clients",id:"remove-roles-from-clients",level:3},{value:"Add roles to groups",id:"add-roles-to-groups",level:3},{value:"Remove roles from groups",id:"remove-roles-from-groups",level:3},{value:"Add ACLs to roles",id:"add-acls-to-roles",level:3},{value:"Remove ACLs from roles",id:"remove-acls-from-roles",level:3},{value:"Deauthenticate / Logout",id:"deauthenticate--logout",level:2}],N={toc:y};function h(e){var n,t=e,{components:l}=t,m=((e,n)=>{var t={};for(var a in e)i.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&s)for(var a of s(e))n.indexOf(a)<0&&p.call(e,a)&&(t[a]=e[a]);return t})(t,["components"]);return(0,a.kt)("wrapper",(n=c(c({},N),m),o(n,r({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"This page describes how to use the ",(0,a.kt)("strong",{parentName:"p"},"Dynamic Security REST API")," that is provided by the Management Center for Eclipse Mosquitto."),(0,a.kt)("admonition",c({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"Before sending command request make sure that you have been authenticated.")),(0,a.kt)("h2",c({},{id:"sending-command-requests"}),"Sending command requests"),(0,a.kt)("p",null,"The following command shows how to authenticate using ",(0,a.kt)("inlineCode",{parentName:"p"},"curl"),". Please replace the ",(0,a.kt)("inlineCode",{parentName:"p"},"<BASE_URL>"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"<BROKER_ID>")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"<JSON_COMMAND>")," placeholders accordingly."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<BASE_URL>"),": The base URL where the installation of the Management Center is hosted."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<BROKER_ID>"),": The id of the broker where the command should be send to (as defined via the Management Center)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<JSON_COMMAND>"),": The JSON that should be send to the broker (see command documentation).")),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"curl --cookie .cookies \\\n    --request POST <BASE_URL>/api/dynamic-security/<BROKER_ID>/command \\\n    -H 'Content-Type: application/json' \\\n    -d '<JSON_COMMAND>'\n")),(0,a.kt)("admonition",c({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"For the following command documentation, note that we assume that you store the JSON command that you send in a separate JSON file and reference it in the ",(0,a.kt)("inlineCode",{parentName:"p"},"curl")," command as follows:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"curl --cookie .cookies \\\n    --request POST <BASE_URL>/api/dynamic-security/<BROKER_ID>/command \\\n    -H 'Content-Type: application/json' \\\n    -d @command.json\n")),(0,a.kt)("p",{parentName:"admonition"},"We therefore only list the content of that JSON file in the following sections.")),(0,a.kt)("h3",c({},{id:"list-clients"}),"List clients"),(0,a.kt)("p",null,"In order to send the ",(0,a.kt)("inlineCode",{parentName:"p"},"listClients")," command to a broker with the id ",(0,a.kt)("inlineCode",{parentName:"p"},"mosquitto-2.0")," on the ",(0,a.kt)("a",c({parentName:"p"},{href:"https://mosquitto.cedalo.com"}),"https://mosquitto.cedalo.com")," installation you would use the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "command": "listClients",\n  "verbose": true\n}\n')),(0,a.kt)("p",null,"The response looks like the following (formatted into readable JSON):"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "command": "listClients",\n  "data": {\n    "totalCount": 1,\n    "clients": [\n      {\n        "username": "admin",\n        "textname": "MMC admin user",\n        "roles": [\n          {\n            "rolename": "dynsec-admin"\n          },\n          {\n            "rolename": "license-admin"\n          },\n          {\n            "rolename": "sys-observe"\n          },\n          {\n            "rolename": "topic-observe"\n          }\n        ],\n        "groups": []\n      }\n    ]\n  }\n}\n')),(0,a.kt)("h3",c({},{id:"get-clients"}),"Get clients"),(0,a.kt)("p",null,"Command:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "command": "getClient",\n  "username": "admin"\n}\n')),(0,a.kt)("p",null,"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "command": "getClient",\n  "data": {\n    "client": {\n      "username": "admin",\n      "textname": "MMC admin user",\n      "roles": [\n        {\n          "rolename": "dynsec-admin"\n        },\n        {\n          "rolename": "license-admin"\n        },\n        {\n          "rolename": "sys-observe"\n        },\n        {\n          "rolename": "topic-observe"\n        }\n      ],\n      "groups": []\n    }\n  }\n}\n')),(0,a.kt)("h3",c({},{id:"create-clients"}),"Create clients"),(0,a.kt)("p",null,"Command:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "command": "createClient",\n  "username": "max",\n  "password": "5eCret",\n  "clientid": "some-id",\n  "rolename": "some-role",\n  "textname": "Max Mustermann",\n  "textdescription": "This is just a dummy user"\n}\n')),(0,a.kt)("p",null,"Response:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "command": "createClient"\n}\n')),(0,a.kt)("h3",c({},{id:"delete-clients"}),"Delete clients"),(0,a.kt)("p",null,"Commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "command": "deleteClient",\n  "username": "max"\n}\n')),(0,a.kt)("p",null,"Response:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "command": "deleteClient"\n}\n')),(0,a.kt)("h3",c({},{id:"list-groups"}),"List groups"),(0,a.kt)("p",null,"Command:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "command": "listGroups",\n  "verbose": true\n}\n')),(0,a.kt)("p",null,"Response:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "command": "listGroups",\n  "data": {\n    "totalCount": 0,\n    "groups": []\n  }\n}\n')),(0,a.kt)("h3",c({},{id:"get-groups"}),"Get groups"),(0,a.kt)("p",null,"Command:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "command": "getGroup",\n  "groupname": "example-group"\n}\n')),(0,a.kt)("p",null,"Response:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "command": "getGroup",\n  "data": {\n    "group": {\n      "groupname": "example-group",\n      "textname": "Example Group",\n      "textdescription": "An example group",\n      "clients": [],\n      "roles": []\n    }\n  }\n}\n')),(0,a.kt)("h3",c({},{id:"create-groups"}),"Create groups"),(0,a.kt)("p",null,"Command:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "command": "createGroup",\n  "groupname": "example-group",\n  "rolename": "example-role",\n  "textname": "Example Group",\n  "textdescription": "An example group"\n}\n')),(0,a.kt)("p",null,"Response:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "command": "createGroup"\n}\n')),(0,a.kt)("h3",c({},{id:"delete-groups"}),"Delete groups"),(0,a.kt)("p",null,"Command:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "command": "deleteGroup",\n  "groupname": "example-group"\n}\n')),(0,a.kt)("p",null,"Response:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "command": "deleteGroup"\n}\n')),(0,a.kt)("h3",c({},{id:"add-clients-to-groups"}),"Add clients to groups"),(0,a.kt)("p",null,"Command:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "command": "addGroupClient",\n  "username": "max",\n  "groupname": "example-group"\n}\n')),(0,a.kt)("p",null,"Response:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "command": "addGroupClient"\n}\n')),(0,a.kt)("h3",c({},{id:"remove-clients-from-groups"}),"Remove clients from groups"),(0,a.kt)("p",null,"Command:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "command": "removeGroupClient",\n  "username": "max",\n  "groupname": "example-group"\n}\n')),(0,a.kt)("p",null,"Response:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "command": "removeGroupClient"\n}\n')),(0,a.kt)("h3",c({},{id:"list-roles"}),"List roles"),(0,a.kt)("p",null,"Command:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "command": "listRoles",\n  "verbose": true\n}\n')),(0,a.kt)("p",null,"Response:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "command": "listRoles",\n  "data": {\n    "totalCount": 5,\n    "roles": [\n      {\n        "rolename": "client",\n        "textdescription": "Read/write access to the full application topic hierarchy (note: please create ACLs to restrict access as required by your application).",\n        "allowwildcardsubs": true,\n        "acls": [\n          {\n            "acltype": "publishClientSend",\n            "topic": "#",\n            "priority": 0,\n            "allow": true\n          },\n          {\n            "acltype": "publishClientReceive",\n            "topic": "#",\n            "priority": 0,\n            "allow": true\n          },\n          {\n            "acltype": "subscribePattern",\n            "topic": "#",\n            "priority": 0,\n            "allow": true\n          },\n          {\n            "acltype": "unsubscribePattern",\n            "topic": "#",\n            "priority": 0,\n            "allow": true\n          }\n        ]\n      },\n      {\n        "rolename": "dynsec-admin",\n        "textname": "",\n        "textdescription": "Grants access to administer clients/groups/roles.",\n        "allowwildcardsubs": true,\n        "acls": [\n          {\n            "acltype": "publishClientSend",\n            "topic": "$CONTROL/dynamic-security/#",\n            "priority": 0,\n            "allow": true\n          },\n          {\n            "acltype": "publishClientReceive",\n            "topic": "$CONTROL/dynamic-security/#",\n            "priority": 0,\n            "allow": true\n          },\n          {\n            "acltype": "subscribePattern",\n            "topic": "$CONTROL/dynamic-security/#",\n            "priority": 0,\n            "allow": true\n          }\n        ]\n      },\n      {\n        "rolename": "license-admin",\n        "textname": "",\n        "textdescription": "Grants access to administer licenses.",\n        "allowwildcardsubs": true,\n        "acls": [\n          {\n            "acltype": "publishClientSend",\n            "topic": "$CONTROL/cedalo/license/#",\n            "priority": 0,\n            "allow": true\n          },\n          {\n            "acltype": "publishClientReceive",\n            "topic": "$CONTROL/cedalo/license/#",\n            "priority": 0,\n            "allow": true\n          },\n          {\n            "acltype": "subscribePattern",\n            "topic": "$CONTROL/cedalo/license/#",\n            "priority": 0,\n            "allow": true\n          }\n        ]\n      },\n      {\n        "rolename": "sys-observe",\n        "textname": "",\n        "textdescription": "Observe the $SYS topic hierarchy.",\n        "allowwildcardsubs": true,\n        "acls": [\n          {\n            "acltype": "publishClientReceive",\n            "topic": "$SYS/#",\n            "priority": 0,\n            "allow": true\n          },\n          {\n            "acltype": "subscribePattern",\n            "topic": "$SYS/#",\n            "priority": 0,\n            "allow": true\n          }\n        ]\n      },\n      {\n        "rolename": "topic-observe",\n        "textdescription": "Read only access to the full application topic hierarchy.",\n        "allowwildcardsubs": true,\n        "acls": [\n          {\n            "acltype": "publishClientReceive",\n            "topic": "#",\n            "priority": 0,\n            "allow": true\n          },\n          {\n            "acltype": "subscribePattern",\n            "topic": "#",\n            "priority": 0,\n            "allow": true\n          },\n          {\n            "acltype": "unsubscribePattern",\n            "topic": "#",\n            "priority": 0,\n            "allow": true\n          }\n        ]\n      }\n    ]\n  }\n}\n')),(0,a.kt)("h3",c({},{id:"get-roles"}),"Get roles"),(0,a.kt)("p",null,"Command:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "command": "getRole",\n  "rolename": "example-role"\n}\n')),(0,a.kt)("p",null,"Response:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "command": "getRole",\n  "data": {\n    "role": {\n      "rolename": "example-role",\n      "textname": "Example Role",\n      "textdescription": "An example role",\n      "allowwildcardsubs": true,\n      "acls": []\n    }\n  }\n}\n')),(0,a.kt)("h3",c({},{id:"create-roles"}),"Create roles"),(0,a.kt)("p",null,"Command:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "command": "createRole",\n  "rolename": "example-role",\n  "textname": "Example Role",\n  "textdescription": "An example role"\n}\n')),(0,a.kt)("p",null,"Response:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "command": "createRole"\n}\n')),(0,a.kt)("h3",c({},{id:"delete-roles"}),"Delete roles"),(0,a.kt)("p",null,"Command:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "command": "deleteRole",\n  "rolename": "example-role"\n}\n')),(0,a.kt)("p",null,"Response:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "command": "deleteRole"\n}\n')),(0,a.kt)("h3",c({},{id:"add-roles-to-clients"}),"Add roles to clients"),(0,a.kt)("p",null,"Command:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "command": "addClientRole",\n  "username": "max",\n  "rolename": "example-role"\n}\n')),(0,a.kt)("p",null,"Response:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "command": "addClientRole"\n}\n')),(0,a.kt)("h3",c({},{id:"remove-roles-from-clients"}),"Remove roles from clients"),(0,a.kt)("p",null,"Command:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "command": "removeClientRole",\n  "username": "max",\n  "rolename": "example-role"\n}\n')),(0,a.kt)("p",null,"Response:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "command": "removeClientRole"\n}\n')),(0,a.kt)("h3",c({},{id:"add-roles-to-groups"}),"Add roles to groups"),(0,a.kt)("p",null,"Command:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "command": "addGroupRole",\n  "username": "example-group",\n  "rolename": "example-role",\n  "priority": 5\n}\n')),(0,a.kt)("p",null,"Response:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "command": "addGroupRole"\n}\n')),(0,a.kt)("h3",c({},{id:"remove-roles-from-groups"}),"Remove roles from groups"),(0,a.kt)("p",null,"Command:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "command": "removeGroupRole",\n  "username": "example-group",\n  "rolename": "example-role"\n}\n')),(0,a.kt)("p",null,"Response:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "command": "removeGroupRole"\n}\n')),(0,a.kt)("h3",c({},{id:"add-acls-to-roles"}),"Add ACLs to roles"),(0,a.kt)("admonition",c({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"See also the ",(0,a.kt)("a",c({parentName:"p"},{href:"/mosquitto/2.5/broker-dynamic-security/"}),"ACL documentation")," for a basic description of the different ACL types.")),(0,a.kt)("p",null,"Command:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "command": "addRoleACL",\n  "rolename": "example-role",\n  "acltype": "publishClientSend",\n  "priority": 5,\n  "topic": "/some/topic/structure",\n  "allow": true\n}\n')),(0,a.kt)("p",null,"Response:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "command": "addRoleACL"\n}\n')),(0,a.kt)("h3",c({},{id:"remove-acls-from-roles"}),"Remove ACLs from roles"),(0,a.kt)("p",null,"Command:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "command": "removeRoleACL",\n  "rolename": "example-role",\n  "acltype": "publishClientSend",\n  "topic": "/some/topic/structure"\n}\n')),(0,a.kt)("p",null,"Response:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "command": "removeRoleACL"\n}\n')),(0,a.kt)("h2",c({},{id:"deauthenticate--logout"}),"Deauthenticate / Logout"),(0,a.kt)("p",null,"To logout your client from the REST API you simply need to send the following request to the ",(0,a.kt)("inlineCode",{parentName:"p"},"/logout")," endpoint:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"curl --cookie .cookies \\\n    --request GET <BASE_URL>/logout\n")))}h.isMDXComponent=!0}}]);