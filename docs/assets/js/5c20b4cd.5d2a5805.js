"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[93554],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31562:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>y,frontMatter:()=>d,metadata:()=>h,toc:()=>k});var o=n(3905),r=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&c(e,n,t[n]);return e};const d={id:"docker-high-availability",title:"High Availability",sidebar_label:"High Availability"},m=void 0,h={unversionedId:"deployment/on-premises/deployment/installation/docker/docker-high-availability",id:"version-3.0/deployment/on-premises/deployment/installation/docker/docker-high-availability",title:"High Availability",description:"The following is a step-by-step tutorial to guide you through the installation process of Pro Mosquitto for an High",source:"@site/mosquitto_versioned_docs/version-3.0/deployment/on-premises/deployment/installation/docker/docker-high-availability.md",sourceDirName:"deployment/on-premises/deployment/installation/docker",slug:"/deployment/on-premises/deployment/installation/docker/docker-high-availability",permalink:"/mosquitto/deployment/on-premises/deployment/installation/docker/docker-high-availability",draft:!1,tags:[],version:"3.0",frontMatter:{id:"docker-high-availability",title:"High Availability",sidebar_label:"High Availability"},sidebar:"someSidebar",previous:{title:"Single Node",permalink:"/mosquitto/deployment/on-premises/deployment/installation/docker/docker-single-node"},next:{title:"Basic Configurations On-Premises Broker",permalink:"/mosquitto/deployment/on-premises/deployment/administrating/configuring-on-premises"}},f={},k=[{value:"Install Docker Environment",id:"install-docker-environment",level:2},{value:"Start the Pro Mosquitto Cluster Setup",id:"start-the-pro-mosquitto-cluster-setup",level:2},{value:"Check Status",id:"check-status",level:3},{value:"Access the Cedalo MQTT Platform",id:"access-the-cedalo-mqtt-platform",level:3},{value:"Connect a client",id:"connect-a-client",level:4},{value:"Configuration",id:"configuration",level:2},{value:"Adjusting Docker Settings for Linux Environment",id:"adjusting-docker-settings-for-linux-environment",level:3},{value:"Reconfiguring the Cluster for separate servers",id:"reconfiguring-the-cluster-for-separate-servers",level:3}],g={toc:k};function y(e){var t,r=e,{components:c}=r,d=((e,t)=>{var n={};for(var o in e)s.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&l)for(var o of l(e))t.indexOf(o)<0&&u.call(e,o)&&(n[o]=e[o]);return n})(r,["components"]);return(0,o.kt)("wrapper",(t=p(p({},g),d),a(t,i({components:c,mdxType:"MDXLayout"}))),(0,o.kt)("p",null,"The following is a step-by-step tutorial to guide you through the installation process of Pro Mosquitto for an High\nAvailability cluster on Docker.\nThe tutorial assumes you have downloaded the Mosquitto Installer from us and have a valid license to work with. You can\nget a trial license by setting up an account on our website ",(0,o.kt)("a",p({parentName:"p"},{href:"https://cedalo.com"}),"www.cedalo.com"),"."),(0,o.kt)("h2",p({},{id:"install-docker-environment"}),"Install Docker Environment"),(0,o.kt)("p",null,"To run Cedalo Docker products, you need an installed version of docker and docker compose.\nDocker is not system depended and can be installed on Windows, Mac or Linux. Please see more information about docker\nand usage specifications on their website."),(0,o.kt)("p",null,"Open the following link and install ",(0,o.kt)("a",p({parentName:"p"},{href:"https://docs.docker.com/engine/install/"}),"Docker"),".\nIf you have not installed a version of docker desktop and only installed the docker engine, make sure to further\ninstall ",(0,o.kt)("a",p({parentName:"p"},{href:"https://docs.docker.com/compose/"}),"Docker Compose"),"."),(0,o.kt)("img",{className:"docimagemb",src:n(41467).Z,width:"50%"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Figure 1 - Docker Desktop Installer")),(0,o.kt)("p",null,"Make sure your system meets the minimum requirements."),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{}),"\u25cf 64 - bit processor with Second Level Address Translation (SLAT)\n\u25cf 4GB system RAM\n\u25cf BIOS-level hardware virtualization support must be enabled in the BIOS settings. The status can be\nchecked in your Task Manger:\n")),(0,o.kt)("admonition",p({},{type:"info"}),(0,o.kt)("p",{parentName:"admonition"},"If you choose Hyper-V make sure visualization is enabled. If Visualization is not enabled, you will have to turn it on\nin your BIOS.\nIf you don \u0301t know how: Here is a very good\nstep-by-step ",(0,o.kt)("a",p({parentName:"p"},{href:"https://mashtips.com/enable-virtualization-windows-10/"}),"tutorial"),".")),(0,o.kt)("p",null,"After installing make sure docker is running.\nOn a typical installation the Docker daemon is started by a system utility, not manually by a user. This makes it easier\nto automatically start Docker when the machine reboots.\nThe command to start Docker depends on your operating system. Check the correct page under\nInstall ",(0,o.kt)("a",p({parentName:"p"},{href:"https://docs.docker.com/engine/install/"}),"Docker"),"."),(0,o.kt)("h2",p({},{id:"start-the-pro-mosquitto-cluster-setup"}),"Start the Pro Mosquitto Cluster Setup"),(0,o.kt)("p",null,"Download the shared setup via our platform. You either have access through our trial or through a valid subscription to\nan on-premises plan. A trial license gives full access to all features. The downloaded setup has set reasonable default\nconfigurations and can be started without further changes. If you already know, which changes you want to make, you can\ndo so now."),(0,o.kt)("p",null,"The default setup runs an preconfigured cluster on a single device. This is a good and easy start for testing. For a\nreal implementation we recommend to run each Mosquitto node on a different server. This is explained in a later step."),(0,o.kt)("p",null,'If you have downloaded your setup via the Cedalo Platfrom, the license file, named "license.lic," is already included\nand can be found at ',(0,o.kt)("inlineCode",{parentName:"p"},"./license/license.lic")," in each server folder.\nIf not, please manually add your license file."),(0,o.kt)("p",null,"To start Pro Mosquitto and the Cedalo MQTT Platform, navigate to the setup folder using the terminal and run the\nfollowing command:"),(0,o.kt)("p",null,'Depending on which operating system you are, choose the scripts to be used.\n".sh" files are for Linux/MacOS and ".bat" files can be used in a Windows\nenvironment.\nThe scripts have to be started via shell. The example setup may simply be\nstarted using:'),(0,o.kt)("p",null,"Linux/Mac:"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-sh"}),"./start.sh up -d\n")),(0,o.kt)("p",null,"Windows:"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-bat"}),".\\start.bat up -d\n")),(0,o.kt)("admonition",p({},{type:"info"}),(0,o.kt)("p",{parentName:"admonition"},"In-between Docker Desktop can warn you about file-sharing. File-sharing is intended by Cedalo. The Docker container\nwould otherwise not be able to access certain files from the platform configuration that are stored in a regular Windows\nfolder. Make sure to allow this access. Docker Desktop in general is only recommended for testing and developing\nsituations and for real implementations it is suggested to use Docker CE.")),(0,o.kt)("h3",p({},{id:"check-status"}),"Check Status"),(0,o.kt)("p",null,"During installation, a Docker environment will be created for Mosquitto Pro, consisting of multiple containers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"3 Pro Mosquitto container"),(0,o.kt)("li",{parentName:"ul"},"3 HA Proxy container"),(0,o.kt)("li",{parentName:"ul"},"1 Cedalo Platform container")),(0,o.kt)("p",null,"To verify that both containers are running, use the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{}),"docker ps\n")),(0,o.kt)("p",null,"You should see both the Mosquitto broker and the Cedalo MQTT platform listed as running."),(0,o.kt)("p",null,"For more detailed information, you can check the logs of the containers. To view the logs, run the following command"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{}),"docker logs <containerid>\n")),(0,o.kt)("h3",p({},{id:"access-the-cedalo-mqtt-platform"}),"Access the Cedalo MQTT Platform"),(0,o.kt)("p",null,"By default, the test setup is accessible only on localhost, with MQTT port 1883 (via HAProxy) and HTTP port 3000 bound\nto the local machine. If you need external access to this setup, adjust the port configuration in the docker-compose.yml\nfile accordingly."),(0,o.kt)("p",null,"To access the UI for your initial broker setup, go to http://localhost:3000/. You will be prompted to create your admin\ncredentials when you first log in."),(0,o.kt)("p",null,"If you're using the Enterprise version of the Cedalo Platform, you can configure additional users within each project's\nsettings."),(0,o.kt)("h4",p({},{id:"connect-a-client"}),"Connect a client"),(0,o.kt)("p",null,'To connect your first client to the Pro Mosquitto broker, create a new client account and assign it a role. For full\npermissions to publish and subscribe, choose the role "client". For a detailed walkthrough of this process, please refer\nto our ',(0,o.kt)("a",p({parentName:"p"},{href:"../../../../../getting-started/trial-broker-onboarding"}),"Onboarding Guide"),"."),(0,o.kt)("p",null,"To connect to your Mosquitto instance, use the address localhost:1883 and the credentials you set up during the client\naccount creation."),(0,o.kt)("p",null,"If you need to enable anonymous access, add the following line to your mosquitto.conf file under the listener\nconfiguration:\n",(0,o.kt)("inlineCode",{parentName:"p"},"allow_anonymous true")),(0,o.kt)("h2",p({},{id:"configuration"}),"Configuration"),(0,o.kt)("p",null,"The configuration of the entire setup is managed through multiple files. Here are the details of each file:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"docker-compose.yml: This file controls various settings related to the docker environment. It manages configurations\nsuch as port mappings and environment variables.")),(0,o.kt)("p",null,"Additionally, there are other configuration files:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"mosquitto.conf: This file is located in the ",(0,o.kt)("inlineCode",{parentName:"p"},"\\mosquitto\\config")," directory. It contains specific configurations for the\nMosquitto component.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"haproxy.cfg: This file is located in the ",(0,o.kt)("inlineCode",{parentName:"p"},"\\haproxy")," directory. It contains the configuration for the incoming ports\nfrom clients and maps them to the three Pro Mosquitto broker nodes. It directs the traffic from mqtt clients to the\nbroker leader."))),(0,o.kt)("p",null,"These files play a crucial role in customizing and fine-tuning the settings of the entire system."),(0,o.kt)("h3",p({},{id:"adjusting-docker-settings-for-linux-environment"}),"Adjusting Docker Settings for Linux Environment"),(0,o.kt)("p",null,"If you're using Linux for your Docker operations, there's one important setting you need to tweak. By default, Docker\nuses something called ",(0,o.kt)("inlineCode",{parentName:"p"},"userland-proxy"),", but for smooth client communication, we need to turn this off."),(0,o.kt)("p",null,"Follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Locate the Configuration File"))),(0,o.kt)("p",null,"Open your file explorer and go to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/docker/")," directory. Inside, you'll find a file named ",(0,o.kt)("inlineCode",{parentName:"p"},"daemon.json"),"."),(0,o.kt)("ol",p({},{start:2}),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Edit the Configuration"))),(0,o.kt)("p",null,"Open ",(0,o.kt)("inlineCode",{parentName:"p"},"daemon.json")," with a text editor (like nano or VSCode) to make changes. If the file doesn't exist, you can create\nit."),(0,o.kt)("ol",p({},{start:3}),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Adjust the Settings"))),(0,o.kt)("p",null,"Replace the existing content with the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-json"}),'{\n  "userland-proxy": false,\n  "log-driver": "json-file",\n  "log-opts": {\n    "max-size": "100m",\n    "max-file": "10",\n    "labels": "production_status",\n    "env": "os,customer"\n  }\n}\n')),(0,o.kt)("p",null,"This configuration ensures that the userland-proxy is turned off and sets up some useful logging options."),(0,o.kt)("ol",p({},{start:4}),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Save and Apply"))),(0,o.kt)("p",null,"Save the file and close the text editor."),(0,o.kt)("ol",p({},{start:5}),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Restart Docker"))),(0,o.kt)("p",null,"You'll need to restart Docker to apply these changes. You can do this by opening your terminal and running:\n",(0,o.kt)("inlineCode",{parentName:"p"},"sudo systemctl restart docker")),(0,o.kt)("h3",p({},{id:"reconfiguring-the-cluster-for-separate-servers"}),"Reconfiguring the Cluster for separate servers"),(0,o.kt)("p",null,"The setup is designed to be easily transferred from the existing test configuration to a full implementation across\nthree separate servers."),(0,o.kt)("p",null,"We recommend running the three servers within a private network, with access to each node available from an external\nnetwork. For more details, refer to our cluster design\ndocumentation ",(0,o.kt)("a",p({parentName:"p"},{href:"/mosquitto/clustering/overview-clusters"}),"here"),"."),(0,o.kt)("p",null,"Once you have transferred the individual subfolders named ",(0,o.kt)("inlineCode",{parentName:"p"},"server1"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"server2"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"server3"),", it's crucial to remove\nthe existing cluster to allow for reconfiguration at a later step and update the configurations to match the new\nenvironment."),(0,o.kt)("p",null,"You can find more details for these steps ",(0,o.kt)("a",p({parentName:"p"},{href:"/mosquitto/clustering/setting-up-ha-clusters"}),"here"),"."))}y.isMDXComponent=!0},41467:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/dockerdesktop-848606ac0f247d7a1b3412ab7f9bc01b.png"}}]);