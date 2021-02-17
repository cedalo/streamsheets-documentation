# Create & Use Streams

## HTTP/REST Request

This tutorial covers two different kind of HTTP/REST Calls, one is
**POST** and the other is **GET**. (In older versions of Streamsheets we
use the term REST, which is changed to HTTP starting v1.6) The
differences are that with a "POST" information is transmitted from the
HTTP Client to a server and a "GET" transmits information to the HTTP
Client from the server. To add a HTTP function to a `Streamsheet` you
will need a `Connector` and a `Producer`, based on the HTTP Client
Provider. Start by creating the Connector in the Stream Tab of your
Dashboard. You can leave all fields empty to be able to utilize this
Connector for any URL. If you want to create specific Connectors for
every webpage, type in the Base URL. Same goes for the Producer. Create
a Producer based on the just created Connector and leave it empty. We
can now select the Producer within the
`Function Wizard <functionwizard>`.

**1. Method "Post":** As an example, for a HTTP Request with the method
"POST", we will create an alert service for Slack. Slack is a messenger,
which offers the possibility to add self-made applications. This option
will be used to add an Alert Application to a Slack channel, posting
status updates.

To begin create such an [App in Slack](https://api.slack.com/apps/) and
add an Incoming [Webhook](https://api.slack.com/incoming-webhooks/).
This generates the HTTP.Request URL we will be posting information to.
Choose a Channel on Slack to add your Application to. This is where we
will post the information to. Now we can start building an App in
Streamsheets. Create a new `App` and create a `JSON` Range with the key
Value being “text” and the Value being any message you would like to
send. Create a HTTP Request function over the Function Wizard and select
"POST" as the method. Add the created URL and select the JSON Range as
the body. Choose a Target (e.g. a cell range) for the response message
of the server. Now with every new Step, the App will send your message
to Slack 😊

**2. Method "GET":** The "GET" method is very similar to the "POST"
method, but in this case we do not need to define any message, because
we will be consuming messages. A good example is the “API of Ice and
Fire” <https://anapioficeandfire.com/>. It is an HTTP Request based
online wiki for Game of Thrones related information. Depending on the
URL, different Information can be accessed and displayed. Lets choose
the following URL: <https://anapioficeandfire.com/api/characters/583> It
displays all information regarding Jon Snow in a JSON-Object. So lets
again create a new App. Add a HTTP Request Function with the help of the
Function Wizard. Enter the URL, select "GET" as the method and chose the
Target, where the information should be displayed (e.g.
`INBOX <inboxf>`()). Confirm your input by clicking “OK”. After starting
the App the requested information will now appear in the Target Range.

## OPC UA

![star](/images/star.svg) This is a [Streamsheets
Professional](https://cedalo.com/download/) feature.

This simple Tutorial shows how to read information of an `OPC UA`
Server. To begin with we have to create Streams, which are connected the
OPC UA Server of our choice.

Open up the Stream Tab of your Dashboard and create a new OPC UA
`Connector`. Enter the URL of the Server you want to connect to. In this
tutorial the OPC UA Server is in the local network. You will need your
own OPC UA Server or go to <http://opcuaserver.com/> where you can find
a series of open OPC UA Server.

<div class="note">

<div class="title">

Note

</div>

To connect to the Streamsheets internal OPC UA server use
*streamsheets-service-opcua* as host name and
*api/v1.0/OPCUA/cedalo/machineserver* as the resource path.

</div>

**OPC UA Consumer & Producer:** Create a new Consumer, based on the
created Connector. Enter the Node ID you want receive and safe your
changes (the polling interval defines the interval where the Consumer
requests new data from the server). Create a Producer, again based on
the newly created Connector.

Now we are ready to poll and send information to the specified server.
Create a new App and select the newly created Consumer. Just start the
App and the Consumer will instantly forward messages into the Inbox.

**OPCUA.READ:** A second way to receive OPC UA Messages in a
`Streamsheet` is over the `OPCUA.READ <opcuaread>` function. Create a
new Streamsheet by clicking the plus sign in the bottom right corner and
select a cell. Open up the Function Wizard, select the
`OPCUA.READ <opcuaread>` function and the created Producer. Enter the
Node ID and the Target (e.g. `INBOX <inboxf>`()) and confirm your input
by clicking “OK”.

With every new calculation step an `OPCUA.READ <opcuaread>` will prompt
a new message in the `Inbox`.

**OPCUA.WRITE:** It is also possible to update existing OPC UA Variables
with the OPCUA.WRITE formular. Similiar to before, use the Function
Wizard and select OPCUA.WRITE. Choose the right Producer, add the NODE
Id and Target Range.

## MongoDB

To store data and retrieve information Streamsheets are able to connect
to a `MongoDB<Mongo>`. `Here<mongodb>` you can learn how to add a
MongoDB to your current Streamsheets installation.

Start connecting the MongoDB to your Streamsheets by setting up a
MongoDB Connector. Enter the URL (or if working with Mongo for Docker
the container name) in the Host(s) field. All other settings are
optional. Streamsheets offers five Mongo specific functions within the
`Function Wizard<functionwizard>`: `MONGO.STORE() <mongostore>`,
`MONGO.COUNT() <mongocount>`, `MONGO.DELETE() <mongodelete>`,
`MONGO.QUERY() <mongoquery>` and `MONGO.AGGREGATE() <mongoaggregate>`.
Setup a Producer on top of the just created Connector and you are ready
to go.

In a Streamsheet open the “Function Wizard” to gain convenient access to
the MongoDB functions.

**MONGO.STORE():**

*=MONGO.STORE("Stream","Collection","Document")*

![MongoS](/images/MongoStore.png)

As soon as your MongoDB Connector and Producer is set up you can start
storing data. Click on a cell, open the function wizard and select
MONGO.STORE. Remember the calculation order of a Streamsheet (top to
bottom, left to right), this might play a role in the structure of your
logic.

*Stream:* The “Function Wizard” automatically selects a stream. Make
sure the right one is selected.

*Collection:* MongoDB has different places to store data at. These are
called collections. Type in a name of a collection. The collection will
automatically be created, if not already existing.

*Document:* The document contains your data. It is a simple cell range
of key and value pairs. It is also possible to order them in a
hierarchy.

With every calculation one document will be stored in the selected
collection.

**MONGO.QUERY():**

*=MONGO.QUERY("Stream","Collection","Query","Target","ResultKeys","PageSize","Page","Sort","Timeout")*

![MongoQ](/images/MongoQuery.png)

To lookup data from a MongoDB collection use the function MONGO.QUERY.
It is possible to access either all stored documents or a subset of
them.

*Stream:* Again select the right Producer to connect to the right
database.

*Collection:* Type in the collection you used in the MONGO.STORE
function.

*Query:* The query filters the data and only gives back documents, which
are match or are composed of the query. Define one or more key value
pairs the documents you are searching for have to contain. E.g. you have
saved a lot of customer information and now need the information for all
customer with the name “Julia”, define a horizontal cell range
containing “name” on the left and “Julia” on the right. To access all
data just leave this section empty.

*Target:* Define where the response of the database should be displayed.
Choose a cell range or =INBOX(); =OUTBOX() as a target. Be careful, the
cell range maybe to small to display all information.

*Result Keys:* The Query always gives back all the information saved in
a document. If you are only interested in a subset write each key in a
cell and enter the cell/ cell range in the Result Key field.

*Page Size:* The Page Size defines how many results will be shown in the
response of your query per page. As a default, page 1 will be returned.

*Page:* Select the page you want to get back. Example: Enter page size =
5 and page = 2. The query will return entry 6-10.

*Sort:* You can either sort by time using 1 and -1 or you can sort
alphabetically by using a cell range with the key to sort with and a 1
or -1. 1 = descending; -1 = ascending.

*Timeout:* Tells the function how long to wait for a response from the
database(in ms).

**MONGO.DELETE():**

*=MONGO.DELETE("Stream","Collection","Query","Target","Timeout")*

![MongoD](/images/MongoDelete.png)

Delete documents in a collection.

*Stream:* Select the Stream connected to your MongoDB.

*Collection:* Enter the collection you want to adjust entries in.

*Query:* All documents with the defined key value pair/s will be deleted
from the collection.

*Target:* MONGO.DELETE returns the amount of objects that have been
deleted. To get this information define either a cell range of at least
2x2 or enter =INBOX()/=OUTBOX().

*Timeout:* Tells the function how long to wait for a response from the
database(in ms).

**MONGO.COUNT():**

*=MONGO.COUNT("Stream","Collection","Query","Target","Timeout")*

![MongoC](/images/MongoCount.png)

If you are interested in the amount of documents stored in a collection
use MONGO.COUNT().

*Stream:* Select the Stream connected to your MongoDB.

*Collection:* Enter the collection you want to count entries in.

*Query:* Enter a cell range of key value pairs. All documents with the
defined key value pair/s will be counted.

*Target:* MONGO.COUNT returns the amount of objects that have been
counted. To get this information define either a cell range of at least
1x2 or enter =INBOX()/=OUTBOX().

*Timeout:* Tells the function how long to wait for a response from the
database(in ms).

**MONGO.REPLACE():**

*=MONGO.REPLACE("Stream","Collection","Query","Document","Upsert")*

![MongoR](/images/MongoReplace.png)

To replace data in a collection, use the MONGO.REPLACE() function.

*Stream:* Select the Stream connected to your MongoDB.

*Collection:* Enter the collection you want to replace entries in.

*Query:* The query searches for documents within a collection to
replace.

*Document:* Define a document to replace existing data with and enter
the cell range here.

*Upsert:* TRUE or FALSE. Upsert decides, if, when a query can´t be
found, the document is added to the collection or dismissed.

Here is a small example:

![MongoDemo](/images/MongoDemo.gif)  
*All five Mongo functions used in one GIF.*  
*Note: In version 1.5 the icon for the stream functions was changed*
![StreamF](/images/Streamfunction.png)

## InfluxDB

To store data and retrieve information Streamsheets are able to connect
to a `InfluxDB<Influx>`. `Here<influxdb>` you can learn how to add a
InfluxDB to your current Streamsheets installation.

First of all we start by providing a `REST` Client `Connector` and the
corresponding `Producer`. If these are not yet available, go to the
`Administration <administration>` menu and create a new Connector and
Producer. If you have any questions we recommend to have a look at the
`REST.REQUEST tutorial <resttutorial>`.

**Create a Database:**  
Create a database using the REST.REQUEST function. Click on the
`functionwizard`, select the right Producer and use the POST Method. Add
the desired database name at the end of the URL.

> **URL:** *http://influxdb:8086/query?q=CREATE DATABASE &lt;Database
> name&gt;*  
> **Example URL:** *http://influxdb:8086/query?q=CREATE DATABASE mydb*

To create a database it is sufficient to execute the REST.REQUEST once.

**Write Data:**  
To write data into the InfluxDB, we have to use the `REQUEST` function.
The ParameterJSON range of the function contains 4 parameters. The first
is the `URL` which must contain the name of the database. It\`s also
possible to add a password, precision etc. The second one is the method
which is POST when writing the data into the InfluxDB. Third is the body
in which the data is located. To successfully parse and write Data in
InfluxDB you have to use the `line protocol`! The InfluxDB line protocol
is a text based format for writing points to the database. A single line
of text in line protocol format represents one data point in InfluxDB.
It informs InfluxDB of the point’s measurement, tag set, field set, and
timestamp. Tag set and timestamp are optional. It is important that the
spaces and commas are set correctly!

> **Syntax:**
> *&lt;measurement&gt;\[,&lt;tag\_key&gt;=&lt;tag\_value&gt;\[,&lt;tag\_key&gt;=&lt;tag\_value&gt;\]\]
> &lt;field\_key&gt;=&lt;field\_value&gt;\[,&lt;field\_key&gt;=&lt;field\_value&gt;\]
> \[&lt;timestamp&gt;\]*  
> **Example:** *h2o\_feet,location=freiburg water\_level=4*

In our example we use a measurement called "h20\_feet". The measurement
has one tag key (location) which has one tag values: freiburg.
"water\_level" is our field\_key which stores float field values in the
"mydb" database.  
Finally you have to add the "Json" Parameter with FALSE as value.
That\`s it!

![influx](/images/InfluxDB-Demo.gif)

*Write Data in InfluxDB with the REQUEST function*

**Query Data:**  
To Query Data we use the `restrequest` function with the GET Method and
write the `query` into the `URL`. There are plenty ways to query your
Data. You can have a look at them
[here](https://docs.influxdata.com/influxdb/v1.7/query_language/data_exploration/).
In our simple example we query all data of the last minute from our
h2o\_feet measurement.

> **URL:** *http://influxdb:8086/query?db=&lt;Database
> name&gt;&q=&lt;your query&gt;*  
> **Example URL:** *http://influxdb:8086/query?db=mydb&q=SELECT* FROM
> "h2o\_feet" WHERE time &gt; now() - 1m\*

Thats it! Now you receive the Data in your payload. It\`s time to
process the Data in this or another Streamsheet!

## TimescaleDB

![star](/images/star.svg) This is a [Streamsheets
Professional](https://cedalo.com/download/) feature.

The TimescaleDB is a timeseries database based on PostgreSQL. To learn
more check their [website](https://docs.timescale.com/latest/main) .

As of right now, the usage of the timescaledb is limited to the internal
timescaledb of Streamsheets. We are working on allowing the creation of
custom Streams. Until then the creation of timescaledb Streams is
dispensable. When using timescaledb functions simply leave the Stream
parameter empty and Streamsheets takes care of the rest.

**TIMESCALE.INSERT():**

*=TIMESCALE.INSERT(Stream, TableName, ValuesJSON, \[Target,
TableSchemaJSON\])*

![TI](/images/TI.png)

To store information in the timescaledb add a TIMESCALE.INSERT function.

*Stream:* Leave empty for now.

*TableName:* Define the name of the table to store the data in.

*ValuesJSON:* A JSON Range over all key value pairs to be stored.

*Target:* Optinal. To get feedback about the request status, define a
target range or use INBOX().

*TableSchemaJSON:* Optional. A JSON Range to setup a schema for the used
table. If you have not already used setup your table via
TIMESCALE.CREATE\_TABLE() add the schema in this parameter to
automatically create a table.

**TIMESCALE.SELECT():**

*=TIMESCALE.SELECT(Stream, SelectJSON \[, Target, XValue,\])*

![TSA](/images/TSA.png)  
*Select all from table "TimescaleDbTable", but limit response to 10.*

![TSAVG](/images/TSAVG.png)  
*Select the maximum time value and the average of the parameter "Cats"
from the table "TimescaleDbTable".*

To access stored information use the TIMESCALE.SELECT function.

*Stream:* Leave empty for now.

*SelectJSON:* JSON Range with a specified select statement. For every
statement use another key value pair in the sheet. E.g. Select: x; from:
y; where: z; group by: a; order by: b; limit: c

*Target:* Optional. It is not necessary to select a target, if left
empty the data is hold with the cell. This is convinient, if you are
interested in displaying the data in a chart and don´t want to waste
space on the Streamsheet. You can reference the select query as the
chart source.

*XValue:* Optional. If you would like to use the data in a chart, set a
key parameter as XValue to define the X axis.

## MAIL.SEND

In This Tutorial we will send E-Mails to a Mail Account from our
`Streamsheet`, using an SMTP Client.

First of all, create an SMTP\_Connector. Therefore click on the
`Administration<administration>` Menu and navigate to
`Connectors <Connector>` to create a new Connector, with a “SMTP
Provider”. To be able to use the SMTP\_Connector, the Host-address, the
Port and the Security Protocoll of the Mail Service that is used, needs
to be typed in. For example the host-address for Gmail is
“smtp.gmail.com”, the Port is 465 and the Security is SSL/TLS. (This may
differ from other Mail-Services, their access data can be find on the
internet)

For the next Step change to `Producers<Producer>` and create a new
Producer, using the previously created Connector. Now enter the sender
mail address as User name and add the password below.

Even if the whole Setup is correct, there is a high chance that it will
fail! For instance Gmail is blocking the access of this app, because
it’s using a “low” security level. To give Streamsheets access to Gmail,
enable “allow low security applications” manually on the Gmail website.
After that the Connector and the Producer should be connected!

Now we are ready to switch to a Streamsheet. To insert the
“`MAIL.SEND<mailsend>`” function in the Streamsheet, use the Function
Wizard and select “MAIL.SEND” as the function and the previously created
Producer as Stream. For “Text, Subject, TO” etc. either type it in
directly or refer to a cell on the sheet. That\`s it!

To prevent spam we recommend adding a condition to the MAIL.SEND
function 😄

![SMTP2](/images/Loom-speedup.gif)  
*Sending mail\`s with a condition*  
*Note: In version 1.5 the icon for the stream functions was changed*
![StreamF](/images/Streamfunction.png)
