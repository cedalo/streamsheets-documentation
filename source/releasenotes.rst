Release Notes
=============

We will never stop improving our :term:`Streamsheet`\ s. Stay up to date with our release notes.

.. _currently: 


v1.6-milestone
---------------

**(released April 30, 2020)**
First milestone for eclipse release. 

| **Changes:**
| + **Performance:** Performance improvments client side
| + **User Management:** Removed from OS version to professional version
| + **Bug fixes**
| + **Functions:** REST.RESPOND() was moved to the professional version; REST.REQUEST()/REST.RESPOND() now called HTTP.REQUEST()/HTTP.RESPOND()

| **Features:**
| + **Professionel:** Added Workspaces, new user management, Share Link Feature, PDF Generator, InfluxDB Connector, TIMESCALEDB Functions
| + **Charts:** New Chart Module.
| + **Functions:**  TIME.STORE(); TIME.QUERY()

1.5
------------

**(released Januar 20, 2020)**

| **Changes:**
| + **Professional:** Implemented further Pro features 
| + **Performance:** Performance improvements Server/Client side
| + **User Management:** started rework of user administration
| + **Docker:** Streamsheets now runs in only one docker container. 
| + **Sample Machines:** Added two sample machines
| + **Bug fixes**
| + **Mosquitto Broker:** Added randomly generated password. For more informations click `here <https://docs.cedalo.com/tutorials/settings.html#mosquitto-broker>`_.
| + **Database:** We had some structural changes in the database. This is why we urge user, upgrading from version 1.3 or older, to download a databse dump in the administration menu and restore it in the 1.5.

| **Features:**
| + **Added Preview Mode**
| + **Functions:** :ref:`NA`\ (); :ref:`INDIRECT`\ ()
| + **Shapes:** Removed shapes from experimental mode; added further shapes
| + **Charts:** Added more chart settings 

1.4
-----------------
**(released October 16, 2019)**

| **Changes:**
| + **We are now Open Source!** Check out our Git-Hub Page (https://github.com/cedalo/streamsheets)
| + **Version control:** We now distinguish between Professional and Open Source Features (https://cedalo.com/download/)
| + **Raspberry PI:** Release of the Raspberry Pi Version.
| + **Performance:** Performance improvements server side
| + **Bug fixes**


| **Features:**
| + **Shapes**: Added Open Beta for dynamic shape feature. (Use :ref:`drawing`\ functions and/or check the "Experimental Features" in the "Info" settings to activate the Shape Icon) 
| + **Functions:** :ref:`STDEV.S`\ (); :ref:`CORREL`\ (); :ref:`FORECAST`\ (); added Method 7 to :ref:`TIMEAGGREGATE`\() 

1.3
--------------------
**(released July 12, 2019)**

| **Changes:**
| + **Performance:** Performance improvements.
| + **Bug fixes**
| + **Charts:** Fixed Chart Bugs.
| + **Documentation:** Updated documentation and added tutorials.
| + **Raspberry Pi Version:** Open Beta

| **Features:**
| + **Events:** Added mouse events for objects and shapes.
| + **Shapes:** Added shapes as a beta  feature.


1.2 
------------------------------------  
**(released Jun 6, 2019)**

| **Changes:**
| + **Performance:** Performance improvements.
| + **Streams:** :term:`Connector`\ s aren`t able to work as :term:`Consumer`\ s anymore; added Client ID to :term:`Producer` and Consumer (:term:`MQTT` & :term:`Kafka`)
| + **New Functions:** :ref:`FRAC`\ (); :ref:`CODE`\ (); :ref:`CHAR`\ (); :ref:`CLEAN`\ (); :ref:`UNICODE`\ (); :ref:`UNICHAR`\ ()

| **Features:**
| + **Raspberry Pi:** Pi image is available
| + **Forum:** Join our Streamsheet Forum
| + **Function Helper:** implemented a function helper
| + **"None" Format:** None means that in the color selection in the toolbar,  in Fill and also in the selection of the line color, 'without color' is offered.


1.1 
---------------------------------------
**(released Apr 16, 2019)**

| **Changes:**
| + **Performance:** Performance improvements.


1.0 
--------------------------------------
**(released Feb 11, 2019)**

| **Changes:**
| + **Performance:** Performance improvements.
| + **Authentification:** Reworked authentification.
| + **Names:** Renamed "Datasources" to "Streams", renamed "Feeder" to ":term:`Consumer`\ ".
| + **Charts:** Added new features to the "Chart Wizard".

| **UI Updates**
| + **Administration:** Rework of the administration appearance and the "Streams" edit fields
| + **Inbox:** Added Consumer status indicator
| + **Export/Import:** New Export and Import UI


0.98 
--------------------------------------
**(released Dec 17, 2018)**

| **Changes:**
| + **New Functions:** :ref:`EVEN`\ (); :ref:`ODD`\ (); :ref:`MOD`\ (); :ref:`KAFKA.PUPLISH <kafkapublish>`\ (); :ref:`OPCUA.READ <opcuaread>`\ (); :ref:`OPCUA.WRITE <opcuawrite>`\ ();\ :ref:`OPCUA.VARIABLES <opcuavariables>`\ (); :ref:`MONGO.STORE <mongostore>`\ (); :ref:`MONGO.QUERY <mongoquery>`\ (); :ref:`MONGO.DELETE <mongodelete>`\ (); 
| + **Function Updates:** :ref:`TEXT`\ () now has a new parameter "Locale"; all Feeder functions now match the pattern *Technology.Action* (e.g. :ref:`MQTT.PUBLISH <mqttpublish>`\ ); RequestID now optional in :ref:`REST.RESPOND <restrespond>`\ ()
| + **New Technologies:** KSQL; :term:`OPC UA`; :term:`MONGO` Database 
|
| **UI Updates:**
| + **Chart Tool** 
| + **Function Wizard**
| + **Minimize button for every sheet**
