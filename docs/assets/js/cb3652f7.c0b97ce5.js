"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[7291],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),c=i,k=d["".concat(p,".").concat(c)]||d[c]||m[c]||a;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74222:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],l={id:"release-notes",title:"Release Notes",sidebar_label:"Release Notes"},p=void 0,s={unversionedId:"release-notes",id:"version-2.1/release-notes",title:"Release Notes",description:"We will never stop improving Eclipse Mosquitto. Stay up to date with our release notes.",source:"@site/mosquitto_versioned_docs/version-2.1/NEW_release-notes.md",sourceDirName:".",slug:"/release-notes",permalink:"/mosquitto/2.1/release-notes",tags:[],version:"2.1",frontMatter:{id:"release-notes",title:"Release Notes",sidebar_label:"Release Notes"},sidebar:"someSidebar",previous:{title:"Mosquitto Manpage rr",permalink:"/mosquitto/2.1/mosquitto-manpage-rr"}},u=[{value:"Mosquitto MQTT Broker 2.0",id:"mosquitto-mqtt-broker-20",children:[{value:"Broker features:",id:"broker-features",children:[],level:3},{value:"Broker fixes:",id:"broker-fixes",children:[],level:3}],level:2}],m={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We will never stop improving Eclipse Mosquitto. Stay up to date with our release notes."),(0,a.kt)("p",null,"If you have found any bugs or have feature requests, please submit these ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/eclipse/mosquitto/issues"},"here"),"."),(0,a.kt)("h2",{id:"mosquitto-mqtt-broker-20"},"Mosquitto MQTT Broker 2.0"),(0,a.kt)("h3",{id:"broker-features"},"Broker features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"New plugin interface which is more flexible, easier to develop for and easier to extend.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"New dynamic security plugin, which allows clients, groups, and roles to be defined and updated as the broker is running.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Performance improvements, particularly for higher numbers of clients.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'When running as root, if dropping privileges to the "mosquitto" user fails, then try "nobody" instead. This reduces the burden on users installing Mosquitto themselves.')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Add support for Unix domain socket listeners.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Add ",(0,a.kt)("inlineCode",{parentName:"p"},"bridge_outgoing_retain")," option, to allow outgoing messages from a bridge to have the retain bit completely disabled, which is useful when bridging to e.g. Amazon or Google.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Add support for MQTT v5 bridges to handle the "retain-available" property being false.')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Allow MQTT v5.0 outgoing bridges to fall back to MQTT v3.1.1 if connecting to a v3.x only broker.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"DLT logging is now configurable at runtime with ",(0,a.kt)("inlineCode",{parentName:"p"},"log_dest")," dlt. Closes #1735.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Add ",(0,a.kt)("inlineCode",{parentName:"p"},"mosquitto_plugin_publish()")," function, which can be used by plugins to publish messages.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Add ",(0,a.kt)("inlineCode",{parentName:"p"},"mosquitto_client_protocol_version()")," function which can be used by plugins to determine which version of MQTT a client has connected with.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Add ",(0,a.kt)("inlineCode",{parentName:"p"},"mosquitto_kick_client_by_clientid()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"mosquitto_kick_client_by_username()")," functions, which can be used by plugins to disconnect clients.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Add support for handling ",(0,a.kt)("inlineCode",{parentName:"p"},"$CONTROL/")," topics in plugins.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Add support for ",(0,a.kt)("inlineCode",{parentName:"p"},"PBKDF2-SHA512")," password hashing.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Enabling certificate based TLS encryption is now through ",(0,a.kt)("inlineCode",{parentName:"p"},"certfile")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"keyfile"),", not ",(0,a.kt)("inlineCode",{parentName:"p"},"capath")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"cafile"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Added support for controlling ",(0,a.kt)("inlineCode",{parentName:"p"},"UNSUBSCRIBE")," calls in v5 plugin ACL checks.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Add "deny" acl type. Closes #1611.')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The broker now sends the receive-maximum property for MQTT v5 CONNACKs.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Add the ",(0,a.kt)("inlineCode",{parentName:"p"},"bridge_max_packet_size")," option. Closes #265.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Add the ",(0,a.kt)("inlineCode",{parentName:"p"},"bridge_bind_address")," option. Closes #1311.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"TLS certificates for the server are now reloaded on ",(0,a.kt)("inlineCode",{parentName:"p"},"SIGHUP"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Default for ",(0,a.kt)("inlineCode",{parentName:"p"},"max_queued_messages")," has been changed to 1000.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Add ",(0,a.kt)("inlineCode",{parentName:"p"},"ciphers_tls1.3")," option, to allow setting TLS v1.3 ciphersuites. Closes #1825.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Bridges now obey MQTT v5 ",(0,a.kt)("inlineCode",{parentName:"p"},"server-keepalive"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Add bridge support for the MQTT v5 ",(0,a.kt)("inlineCode",{parentName:"p"},"maximum-qos")," property.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Log client port on new connections. Closes #1911."))),(0,a.kt)("h3",{id:"broker-fixes"},"Broker fixes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Send ",(0,a.kt)("inlineCode",{parentName:"p"},"DISCONNECT")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"malformed-packet")," reason code on invalid ",(0,a.kt)("inlineCode",{parentName:"p"},"PUBLISH"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"SUBSCRIBE"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"UNSUBSCRIBE")," packets.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Document that ",(0,a.kt)("inlineCode",{parentName:"p"},"X509_free()")," must be called after using ",(0,a.kt)("inlineCode",{parentName:"p"},"mosquitto_client_certificate()"),". Closes #1842.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Fix listener not being reassociated with client when reloading a persistence file and ",(0,a.kt)("inlineCode",{parentName:"p"},"per_listener_settings")," true is set and the client did not set a username. Closes #1891.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Fix bridge sock not being removed from sock hash on error. Closes #1897. ",(0,a.kt)("inlineCode",{parentName:"p"},"mosquitto_password")," now forbids the ",(0,a.kt)("inlineCode",{parentName:"p"},":")," character. Closes #1833.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Fix ",(0,a.kt)("inlineCode",{parentName:"p"},"log_timestamp_format")," not applying to ",(0,a.kt)("inlineCode",{parentName:"p"},"log_dest")," topic. Closes #1862.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Fix crash on Windows if loading a plugin fails. Closes #1866.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Fix file logging on Windows. Closes #1880.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Report an error if the config file is set to a directory. Closes #1814.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Fix bridges incorrectly setting Wills to manage remote notifications when ",(0,a.kt)("inlineCode",{parentName:"p"},"notifications_local_only")," was set true. Closes #1902."))))}d.isMDXComponent=!0}}]);