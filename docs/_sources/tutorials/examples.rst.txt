.. |RCP| image:: /images/RestRequestGif.gif
    :scale: 65 %  
    
.. |RRP| image:: /images/RestRequestPost.gif
    :scale: 65 %  
.. |RRG1| image:: /images/RestRequestGet1.gif
    :scale: 65 %  
.. |RRG| image:: /images/RestRequestGet.gif
    :scale: 65 %  
.. |OPCUACPC| image:: /images/OPCUAGif.gif
    :scale: 65 %  
.. |OPCUAGif| image:: /images/OPCUAREAD.gif
    :scale: 65 %  
.. |OPCUAWrite| image:: /images/OPCUAWrite.gif
    :scale: 65 %  
.. |history| image:: /images/History.gif
    :scale: 65 %  
.. |MongoDemo| image:: /images/MongoDemo.gif
    :scale: 65 %  
.. |influx| image:: /images/InfluxDB-Demo.gif
    :scale: 65 %  
.. |SMTP1| image:: /images/smtp_connector.gif
    :scale: 65 %  
.. |SMTP2| image:: /images/Loom-speedup.gif
    :scale: 65 %  

Examples
=========

.. _resttutorial:

REST Request
-------------
This tutorial covers two different kind of REST Calls one is **POST** and the other is **GET**. 
The differences are that with a "POST" information is transmitted from the REST Client to a server and a "GET" transmits information to the REST Client from the server. 
To add a :ref:`restrequest` function to a :term:`Streamsheet` you will need a :term:`Connector` and a :term:`Producer`, based on the REST Client Provider. Start by creating the Connector in the Connector Dashboard in the :ref:`Administration` Menu. You can leave all fields empty to be able to utilize this Connector for any URL. If you want to create specific Connectors for every webpage, type in the Base URL. Same goes for the Producer. Create a Producer based on the just created Connector and leave it empty.  We can now select the Producer within the :ref:`Function Wizard <functionwizard>`. 

|RCP| 

*Creating Streams for REST*

**1. Method "Post":**
As an example, for a REST Request with the method "POST", we will create an alert service for Slack.
Slack is a messenger, which offers the possibility to add self-made applications. This option will be used to add an Alert Application to a Slack channel, posting status updates. 

To begin create such an `App in Slack <https://api.slack.com/apps/>`_
and add an Incoming `Webhook <https://api.slack.com/incoming-webhooks/>`_. This generates the REST.Request URL we will be posting information to. Choose a Channel on Slack to add your Application to. This is where we will post the information to. 
Now we can start building an App in Streamsheets. Create a new :term:`Stream Machine` and create a :term:`JSON` Range with the key Value being “text” and the Value being any message you would like to send. 
Create a REST Request function over the Function Wizard and select "POST" as the method. Add the created URL and select the JSON Range as the body. Choose a Target (e.g. :ref:`OUTBOX`\ ()) for  the response message of the server. Now with every new Step, the Stream Machine will send your message to Slack 😊 

|RRP|

*REST Request with method "POST"*

**2. Method "GET":**
The "GET" method is very similar to the "POST" method, but in this case we do not need to define any message, because we will be consuming messages. 
A good example is the “API of Ice and Fire” https://anapioficeandfire.com/. It is an REST Request based online wiki for Game of Thrones related information. 
Depending on the URL, different Information can be accessed and displayed. 
Lets choose the following URL: https://anapioficeandfire.com/api/characters/583
It displays all information regarding Jon Snow in a JSON-Object. 
So lets again create a new Stream Machine. Add a REST Request Function with the help of the Function Wizard. Enter the URL, select "GET" as the method and chose the Target, where the information should be displayed (e.g. :ref:`INBOX <inboxf>`\ ()). Confirm your input by clicking “OK”.
After starting the Stream Machine the requested information will now appear in the Target Range. 

|RRG1|

*REST Request with method "GET"*



OPC UA
-------

.. |star| image:: /images/star.svg
        

|star| This is a `Streamsheets Professional <https://cedalo.com/download/>`_ feature. 

This simple Tutorial shows how to read information of an :term:`OPC UA` Server.
To begin with we have to create Streams, which are connected the OPC UA Server of our choice. 

|OPCUACPC|

*Create Streams for OPC UA*

Open up the Administration Menu and create a new OPC UA :term:`Connector`. Enter the URL of the Server you want to connect to. In this tutorial the OPC UA Server is in the local network. You will need your own OPC UA Server or go to http://opcuaserver.com/ where you can find a series of open OPC UA Server. 

**OPC UA Consumer:**
Open up the :term:`Consumer` Dashboard and create a new Consumer, based on the created Connector. Enter the Node ID you want receive and safe your changes (the polling interval defines the interval where the Consumer requests new data from the server). Switch to the :term:`Producer` Dashboard and create a Producer, again based on the newly created Connector. 

Now we are ready to receive and send messages. Create a new Stream Machine and select the newly created Consumer. Just start the machine and the Consumer will instantly forward messages into the Inbox.

**OPCUA.READ:**
A second way to receive OPC UA Messages in a :term:`Streamsheet` is over the :ref:`OPCUA.READ <opcuaread>` function. Create a new Streamsheet by clicking the plus sign in the bottom right corner and select a cell. Open up the Function Wizard, select the :ref:`OPCUA.READ <opcuaread>` function and the created Producer. Enter the Node ID and the Target (e.g. :ref:`INBOX <inboxf>`\ ()) and confirm your input by clicking “OK”. 

With every new calculation step an :ref:`OPCUA.READ <opcuaread>` will prompt a new message in the :ref:`Inbox`. 

|OPCUAGif|

*Recieve OPC UA Data over Inbox Consumer and OPCUA.READ* 

**OPCUA.WRITE:**
It is also possible to update existing OPC UA Variables with the OPCUA.WRITE formular. Similiar to before, use the Function Wizard and select OPCUA.WRITE. Choose the right Producer, add the NODE Id and Target Range.

|OPCUAWrite|

*Change a node value on a OPC UA server with OPCUA.WRITE*

History
--------

Often it is important to not only work with single real-time data points in the moment, but to build a history and work with a series of values. The following example shows how to create a short (stepwise) data history.

    .. note:: Every :term:`sheet <Streamsheet>` is calculated from left to right and from top to bottom. Consequently, cell A1 is calculated first followed by B1, C1 etc. proceding in the next rows in the same manner. Thanks to this concept, we can use references to create a history of values.

The cell at the very bottom references to the data input and the cells above the reference to the cell below. As higher cells are calculated first, they fetch the values of lower cells before these are calculated. In the end the last cells take the latest data input. Effectively it looks as if new values enter the history at the bottom and move up before leaving the series at the top.

|history|

*Create data history in a Streamsheet*

 

MongoDB
--------

To store data and retrieve information Streamsheets are able to connect to a :term:`MongoDB<Mongo>`. :ref:`Here<mongodb>` you can learn how to add a MongoDB to your current Streamsheets installation. 

Start connecting the MongoDB to your Streamsheets by setting up a MongoDB Connector in the :ref:`Administration<administration>`.Enter the URL (or if working with Mongo for Docker the container name) in the Host(s) field. All other settings are optional.
Streamsheets offers five Mongo specific functions within the :ref:`Function Wizard<functionwizard>`: :ref:`MONGO.STORE() <mongostore>`, :ref:`MONGO.COUNT() <mongocount>`, :ref:`MONGO.DELETE() <mongodelete>`, :ref:`MONGO.QUERY() <mongoquery>` and :ref:`MONGO.AGGREGATE() <mongoaggregate>`.
Setup a Producer on top of the just created Connector and you are ready to go. 

In a Streamsheet open the “Function Wizard” to gain convenient access to the MongoDB functions.

**MONGO.STORE():**

*=MONGO.STORE("Stream","Collection","Document")*

As soon as your MongoDB Connector and Producer is set up you can start storing data.
Click on a cell, open the function wizard and select MONGO.STORE. Remember the calculation order of a Streamsheet (top to bottom, left to right), this might play a role in the structure of your logic.

*Stream:*
The “Function Wizard” automatically selects a stream. Make sure the right one is selected.

*Collection:*
MongoDB has different places to store data at. These are called collections. Type in a name of a collection. The collection will automatically be created, if not already existing.

*Document:*
The document contains your data. It is a simple cell range of key and value pairs. It is also possible to order them in a hierarchy.

With every calculation one document will be stored in the selected collection.

**MONGO.QUERY():**

*=MONGO.QUERY("Stream","Collection","Query","Target","ResultKeys","PageSize","Page","Sort","Timeout")*

To lookup data from a MongoDB collection use the function MONGO.QUERY. It is possible to access either all stored documents or a subset of them.

*Stream:*
Again select the right Producer to connect to the right database.

*Collection:*
Type in the collection you used in the MONGO.STORE function.

*Query:*
The query filters the data and only gives back documents, which are match or are composed of the query. Define one or more key value pairs the documents you are searching for have to contain. E.g. you have saved a lot of customer information and now need the information for all customer with the name “Julia”, define a horizontal cell range containing “name” on the left and “Julia” on the right.
To access all data just leave this section empty.

*Target:*
Define where the response of the database should be displayed. Choose a cell range or =INBOX(); =OUTBOX() as a target. Be careful, the cell range maybe to small to display all information.

*Result Keys:*
The Query always gives back all the information saved in a document. If you are only interested in a subset write each key in a cell and enter the cell/ cell range in the Result Key field.

*Page Size:*
The Page Size defines how many results will be shown in the response of your query per page. As a default, page 1 will be returned.

*Page:*
Select the page you want to get back. Example: Enter page size = 5 and page = 2. The query will return entry 6-10.

*Sort:*
You can either sort by time using 1 and -1 or you can sort alphabetically by using a cell range with the key to sort with and a 1 or -1.  1 = descending; -1 = ascending.

*Timeout:*
Tells the function how long to wait for a response from the database(in ms).

**MONGO.DELETE():**

*=MONGO.DELETE("Stream","Collection","Query","Target","Timeout")*

Delete documents in a collection.

*Stream:*
Select the Stream of connected to your MongoDB. 

*Collection:*
Enter the collection you want to adjust entries in. 

*Query:*
All documents with the defined key value pair/s will be deleted from the collection.

*Target:*
MONGO.DELETE returns the amount of objects that have been deleted. To get this information define either a cell range of at least 2x2 or enter =INBOX()/=OUTBOX().

*Timeout:*
Tells the function how long to wait for a response from the database(in ms).

**MONGO.COUNT():**

*=MONGO.COUNT("Stream","Collection","Query","Target","Timeout")*

If you are interested in the amount of documents stored in a collection use MONGO.COUNT().

*Stream:*
Select the Stream of connected to your MongoDB. 

*Collection:*
Enter the collection you want to count entries in. 

*Query:*
Enter a cell range of key value pairs. All documents with the defined key value pair/s will be counted.

*Target:*
MONGO.COUNT returns the amount of objects that have been counted. To get this information define either a cell range of at least 1x2 or enter =INBOX()/=OUTBOX().

*Timeout:*
Tells the function how long to wait for a response from the database(in ms).

**MONGO.REPLACE():**

*=MONGO.REPLACE("Stream","Collection","Query","Document","Upsert")*

To replace data in a collection, use the MONGO.REPLACE() function.

*Stream:*
Select the Stream of connected to your MongoDB. 

*Collection:*
Enter the collection you want to replace entries in. 

*Query:*
The query searches for documents within a collection to replace.

*Document:*
Define a document to replace existing data with and enter the cell range here. 

*Upsert:*
TRUE or FALSE. Upsert decides, if, when a query can´t be found, the document is added to the collection or dismissed.



Here is a small example:

| |MongoDemo|
| *All five Mongo functions used in one GIF.*

.. _influx:

InfluxDB
--------

To store data and retrieve information Streamsheets are able to connect to a :term:`InfluxDB<Influx>`. :ref:`Here<influxdb>` you can learn how to add a InfluxDB to your current Streamsheets installation. 

First of all we start by providing a :term:`REST` Client :term:`Connector` and the corresponding :term:`Producer`. If these are not yet available, go to the :ref:`Administration <administration>` menu and create a new Connector and Producer. If you have any questions we recommend to have a look at the :ref:`REST.REQUEST tutorial <resttutorial>`.

| **Create a Database:** 
| Create a database using the REST.REQUEST function. Click on the :ref:`functionwizard`, select the right Producer and use the POST Method. Add the desired database name at the end of the URL.

    | **URL:** *http://influxdb:8086/query?q=CREATE DATABASE <Database name>*
    | **Example URL:** *http://influxdb:8086/query?q=CREATE DATABASE mydb*

To create a database it is sufficient to execute the REST.REQUEST once.

| **Write Data:** 
| To write data into the InfluxDB, we have to use the :ref:`REQUEST` function. The ParameterJSON range of the function contains 4 parameters. The first is the :term:`URL` which must contain the name of the database. It`s also possible to add a password, precision etc. The second one is the method which is POST when writing the data into the InfluxDB. Third is the body in which the data is located. To successfully parse and write Data in InfluxDB you have to use the :term:`line protocol`! The InfluxDB line protocol is a text based format for writing points to the database. A single line of text in line protocol format represents one data point in InfluxDB. It informs InfluxDB of the point’s measurement, tag set, field set, and timestamp. Tag set and timestamp are optional. It is important that the spaces and commas are set correctly!

    | **Syntax:** *<measurement>[,<tag_key>=<tag_value>[,<tag_key>=<tag_value>]] <field_key>=<field_value>[,<field_key>=<field_value>] [<timestamp>]*
    | **Example:** *h2o_feet,location=freiburg water_level=4*

| In our example we use a measurement called "h20_feet". The measurement has one tag key (location) which has one tag values: freiburg. "water_level" is our field_key which stores float field values in the "mydb" database.
| Finally you have to add the "Json" Parameter with FALSE as value. That`s it! 

|influx|

*Write Data in InfluxDB with the REQUEST function*

| **Query Data:**
| To Query Data we use the :ref:`restrequest` function with the GET Method and write the :term:`query` into the :term:`URL`. There are plenty ways to query your Data. You can have a look at them `here <https://docs.influxdata.com/influxdb/v1.7/query_language/data_exploration/>`_. In our simple example we query all data of the last minute from our h2o_feet measurement.

    | **URL:** *http://influxdb:8086/query?db=<Database name>&q=<your query>*
    | **Example URL:** *http://influxdb:8086/query?db=mydb&q=SELECT * FROM "h2o_feet" WHERE time > now() - 1m*

Thats it! Now you receive the Data in your payload. It`s time to process the Data in this or another Streamsheet!

MAIL.SEND 
----------

In This Tutorial we will send E-Mails to a Mail Account from our :term:`Streamsheet`, using an SMTP Client.

First of all, create an SMTP_Connector. Therefore click on the :ref:`Administration<administration>` Menu and navigate to :term:`Connectors <Connector>` to create a new Connector, with a “SMTP Provider”. To be able to use the SMTP_Connector, the Host-address, the Port and the Security Protocoll of the Mail Service that is used, needs to be typed in. For example the host-address for Gmail is “smtp.gmail.com”, the Port is 465 and the Security is SSL/TLS. (This may differ from other Mail-Services, their access data can be find on the internet)

|SMTP1|

*Create SMTP_Connector*

For the next Step change to :term:`Producers<Producer>` and create a new Producer, using the previously created Connector. Now enter the sender mail address as User name and add the password below.

Even if the whole Setup is correct, there is a high chance that it will fail! For instance Gmail is blocking the access of this app, because it’s using a “low” security level. To give Streamsheets access to Gmail, enable “allow low security applications” manually on the Gmail website. After that the Connector and the Producer should be connected!

Now we are ready to switch to a Streamsheet. To insert the “\ :ref:`MAIL.SEND<mailsend>`\ ” function in the Streamsheet, use the Function Wizard and select “MAIL.SEND” as the function and the previously created Producer as Stream. For “Text, Subject, TO” etc. either type it in directly or refer to a cell on the sheet. That`s it! 

To prevent spam we recommend adding a condition to the MAIL.SEND function 😄

|SMTP2|

*Sending mail`s with a condition*

Forum 
------

To see even more possibilities of data histories (based on steps and based on time) take a look at our `Streamsheet Forum <https://forum.streamsheets.com/t/how-to-save-incoming-messages-in-a-history/28>`_.
To access and work with larger series of data connecting to and using a database is usually the best approach.

