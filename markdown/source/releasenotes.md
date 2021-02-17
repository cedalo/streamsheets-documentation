# Release Notes

We will never stop improving our `Streamsheet`s. Stay up to date with
our release notes.

![star](/images/star.svg) *= premium feature*

## 2.2-milestone

**Changes:**  
+ **Bug fixes**  
+ **Performance improvements**

**Features:**  
+ **New Charts:** Added further chart types. (Boxplot, Waterfall)
![star](/images/star.svg)  
+ **New Functions:** `OPENURL`(); `TABLEGET`(); `TABLEUPDATE`();

## 2.0-milestone

**(released August 21, 2020)** 2.0 milestone for Eclipse release.

**Changes:**  
+ **UI:** New User Interface Design  
+ **Menu Structure:** Streams are now part of the main Dashboard  
+ **Wording:** "Stream Machines" --&gt; "Apps & Services"  
+ **Bug fixes**  
+ **Touch displays:** better touch experience

**Features:**  
+ **Stream Wizard:** Streams can now be added/adjusted without leaving
the Streamsheet  
+ **New Functions:** `JSON.VALUE`(); `AWAIT`(); `SLEEP`();
`OUTBOX.GETIDS`()  
+ **New Charts:** Added stock, funnel and combination charts
![star](/images/star.svg)

## 1.6-milestone

**(released April 30, 2020)** First milestone for Eclipse release.

**Changes:**  
+ **Performance:** Performance improvements client side  
+ **User Management:** Improvement of premium UM  
+ **Bug fixes**  
+ **Functions:** REST.REQUEST()/REST.RESPOND() now called
HTTP.REQUEST()/HTTP.RESPOND()  
+ **Import Improved:** Reworked the import feature to be easier to use  
+ **GraphQL API Improved:** Extended GraphQL API to allow better
integration of external systems  
+ **Stream Connect Improved**: Improved the reconnect logic for
connections  
+ **Started code migration to TypeScript:** Some components were
migrated to TypeScript.  
+ **Webhooks improved:** Define Webhooks in Streamsheets that can be
called from external applications or services via HTTP.

**Features:**  
+ **User Roles:** Users can be assigned admin, developer and viewer
roles; Admins can manage users and their roles; Admins & Developers can
create, modify and delete stream machines and streams; Viewers can by
default view and interact with stream machines but not edit them. For
viewer interaction specific elements can be defined in the sheet by an
admin or developer. ![star](/images/star.svg)  
+ **Workspaces:** Added Workspaces; Each user can be assigned to several
Workspace as well as given a roles within these Workspaces;
![star](/images/star.svg)  
+ **InfluxDB Support:** Connect to influx databases and store/query data
using the new functions: INFLUX.STORE() and INFLUX.SELECT()
![star](/images/star.svg)  
+ **InfluxDB Export:** Selcet data from an influx database and save to
disk. This data can then also be downloaded as a csv file via the export
button of the machine toolbar. ![star](/images/star.svg)  
+ **PDF Generation (basic):** Take a screenshot of the current stream
machine and download it as pdf. ![star](/images/star.svg)  
+ **Chart Module Refactoring:** New Chart Module.  
+ **Sharing machines via link:** The toolbar got a new button to share a
machine with others. With this link any user can open and view, but not
edit, the machine. The link can also be an expiration date.
![star](/images/star.svg)  
+ **Custom User Function:** Implement your own Streamsheets functions in
JavaScript and Node.js. ![star](/images/star.svg)  
+ **Custom Machine Tile Images:** Give your stream machines custom
images to represent them in the tile view in the dashboard.  
+ **Unpersistent query functions:** TIME.STORE(); TIME.QUERY()  
+ **JSON.PROCESS():** This function allows you to process large messages
more effectively. This is especially true if looping at at the granular
key-value pair level is not an option. ![star](/images/star.svg)  
+ **Extendable Gateway:** New plugin system to further customize the
user management  
+ **Additional Chart Types:** Improvement of premium Charts

## 1.5

**(released Januar 20, 2020)**

**Changes:**  
+ **Premium:** Implemented further Pro features  
+ **Performance:** Performance improvements Server/Client side  
+ **User Management:** started rework of user administration  
+ **Docker:** Streamsheets now runs in only one docker container.  
+ **Sample Machines:** Added two sample machines  
+ **Bug fixes**  
+ **Mosquitto Broker:** Added randomly generated password. For more
informations click
[here](https://docs.cedalo.com/tutorials/settings.html#mosquitto-broker).  
+ **Database:** We had some structural changes in the database. This is
why we urge user, upgrading from version 1.3 or older, to download a
databse dump in the administration menu and restore it in the 1.5.

**Features:**  
+ **Added Preview Mode**  
+ **Functions:** `NA`(); `INDIRECT`()  
+ **Shapes:** Removed shapes from experimental mode; added further
shapes  
+ **Charts:** Added more chart settings

## 1.4

**(released October 16, 2019)**

**Changes:**  
+ **We are now Open Source!** Check out our Git-Hub Page
(<https://github.com/cedalo/streamsheets>)  
+ **Version control:** We now distinguish between Professional and Open
Source Features (<https://cedalo.com/download/>)  
+ **Raspberry PI:** Release of the Raspberry Pi Version.  
+ **Performance:** Performance improvements server side  
+ **Bug fixes**

**Features:**  
+ **Shapes**: Added Open Beta for dynamic shape feature. (Use drawing
functions and/or check the "Experimental Features" in the "Info"
settings to activate the Shape Icon)  
+ **Functions:** `STDEV.S`(); `CORREL`(); `FORECAST`(); added Method 7
to `TIMEAGGREGATE`()

## 1.3

**(released July 12, 2019)**

**Changes:**  
+ **Performance:** Performance improvements.  
+ **Bug fixes**  
+ **Charts:** Fixed Chart Bugs.  
+ **Documentation:** Updated documentation and added tutorials.  
+ **Raspberry Pi Version:** Open Beta

**Features:**  
+ **Events:** Added mouse events for objects and shapes.  
+ **Shapes:** Added shapes as a beta feature.

## 1.2

**(released Jun 6, 2019)**

**Changes:**  
+ **Performance:** Performance improvements.  
+ **Streams:** `Connector`s aren\`t able to work as `Consumer`s anymore;
added Client ID to `Producer` and Consumer (`MQTT` & `Kafka`)  
+ **New Functions:** `FRAC`(); `CODE`(); `CHAR`(); `CLEAN`();
`UNICODE`(); `UNICHAR`()

**Features:**  
+ **Raspberry Pi:** Pi image is available  
+ **Forum:** Join our Streamsheet Forum  
+ **Function Helper:** implemented a function helper  
+ **"None" Format:** None means that in the color selection in the
toolbar, in Fill and also in the selection of the line color, 'without
color' is offered.

## 1.1

**(released Apr 16, 2019)**

**Changes:**  
+ **Performance:** Performance improvements.

## 1.0

**(released Feb 11, 2019)**

**Changes:**  
+ **Performance:** Performance improvements.  
+ **Authentification:** Reworked authentification.  
+ **Names:** Renamed "Datasources" to "Streams", renamed "Feeder" to
"`Consumer`".  
+ **Charts:** Added new features to the "Chart Wizard".

**UI Updates**  
+ **Administration:** Rework of the administration appearance and the
"Streams" edit fields  
+ **Inbox:** Added Consumer status indicator  
+ **Export/Import:** New Export and Import UI

## 0.98

**(released Dec 17, 2018)**

**Changes:**  
+ **New Functions:** `EVEN`(); `ODD`(); `MOD`();
`KAFKA.PUPLISH <kafkapublish>`(); `OPCUA.READ <opcuaread>`();
`OPCUA.WRITE <opcuawrite>`();`OPCUA.VARIABLES <opcuavariables>`();
`MONGO.STORE <mongostore>`(); `MONGO.QUERY <mongoquery>`();
`MONGO.DELETE <mongodelete>`();  
+ **Function Updates:** `TEXT`() now has a new parameter "Locale"; all
Feeder functions now match the pattern *Technology.Action* (e.g.
`MQTT.PUBLISH <mqttpublish>`); RequestID now optional in
`REST.RESPOND <restrespond>`()  
+ **New Technologies:** KSQL; `OPC UA`; `MONGO` Database  
  
**UI Updates:**  
+ **Chart Tool**  
+ **Function Wizard**  
+ **Minimize button for every sheet**
