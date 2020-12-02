.. streams:
.. |Administration| image:: /images/AdministrationC.PNG
        :scale: 75 %

.. _Stream:

Streams
==========

Streams can be found next to the App Dashboard in another Tab. 

|Administration|

The Stream-resources :term:`Consumer`\ s, :term:`Producer`\ s and :term:`Connector`\ s serve the purpose of defining data streams.
There is a hierarchy to these resources in which Connectors form the foundation for Consumers and Producers. Hence, the definition of a data stream consists either of a Connector-Consumer pair or a Connector-Producer pair. Each Consumer and each Producer runs on exactly one connector. Connectors, on the other hand, can have many consumers and producers.

+ As the name suggests, Connectors take information on overall connection parameters, such as addresses and authentication details. Especially if several message streams are on a broker, server or other “data space”, Connectors contain information which can be shared by Consumers and Producers. Consequently, shared information has to be defined only once in one place.
+ Consumers are used to define the input message stream of Streamsheets. They are added to the Inbox of a Streamsheet
+ Producers are used to define outgoing message streams. They are referenced in stream functions like MQTT.PUBLISH(). 


In the following we will use MQTT as an example stream:

Connector
---------

A Connector is always the foundation of our communication architecture. Consumer and Producer reference to a Connector and define the details. The connector itself "connects" the Streamsheet to a provider, you can choose from a preconfigured list. Once a provider is choosen, there are a variety of settings, which can be applied to define the details of your data stream.

MQTT Connector
``````````````
The MQTT Connector has the following possible settings.


+ **Name:** The Name of your Connector
+ **Provider:** you can´t change the provider. You choose it while creating the connector.
+ **URL:** Choose the MQTT Broke you want to use. If you want to use our own broker, which is hosted by the Stream Sheet Server, type in ``broker``
+ **Port:** Choose the port you will be using to transfer the data.
+ **User Name & Password:** If your URL needs identification, you can type in your credentials. For local usage not neccessary.
+ **Base Topic:** The Base topic describes where the connector will be connected to.
+ **Retain Message:**
+ **QoS:** Stands for quality of service. You have the choice between: At most once, At least once, Exactly once.
+ **Protocol Versio:** MQTT Broker can run on different protocols. 

Producer
--------

A Producer is used in a Function. It directs the data stream out of the Stream Sheet. The Function together with the Producer defines where your data will be heading. A Producer is always connected to a Connector, which serves as the foundation of a Producer.
Once the Connector is choosen, there are some additional settings within the Producer.

MQTT Producer
`````````````
The MQTT Producer has the following possible settings:


+ **Name:** The Name of your Producer.
+ **Connector:** Choose the connected Connector.
+ **Data Format:** Choose the Data Format a Producer will publish the Messages in.
+ **Topic:** Extend the Base Topic of the Connector. The Message will be sent to the full topic branch defined through Connector, Producer and Function (ConnectorTopic/ProducerTopic/FunctionTopic).
+ **Clean:** turn on clean session
+ **Static Client ID:** set a static client ID if needed

Consumer
--------

A Consumer is always connected to the Inbox of a Stream Sheet. It defines the details of the data stream comming into a Stream Sheet. A Consumer is always connected to a Connector. Once the Connector is choosen, there are some additional settings within the Consumer.


MQTT Consumer
`````````````
The MQTT Consumer has the following Settings:


+ **Name:** The Name of your Consumer.
+ **Data Format:** Choose the Data Format you wish to accept in the Inbox.
+ **Static Client ID:** set a static client ID if needed
+ **Topics:** Choose one or more topics the Consumer will listen to. The topics always extend the Connector Base Topic.
+ **Clean:** turn on clean session



