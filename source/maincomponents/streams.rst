.. streams:
.. |Administration| image:: /images/AdministrationC.PNG
        :scale: 55 %
.. |Connector1| image:: /images/MyMongoDBConnector.JPG
        :scale: 9 %
        :align: middle
.. |Connector2| image:: /images/OPCUAConnector.JPG
        :scale: 10 %
        :align: middle
.. |Connector3| image:: /images/FileConnector.JPG
        :scale: 10 %
        :align: middle
.. |Connector4| image:: /images/RestServerConnector.JPG
        :scale: 10 %
        :align: middle
.. |Connector7| image:: /images/RestClient Connector.JPG
        :scale: 9 %
        :align: middle
.. |Connector8| image:: /images/KafkaConnector.JPG
        :scale: 7 %
        :align: middle
.. |Connector9| image:: /images/AdministrationC.PNG
        :scale: 10 %
        :align: middle
.. |Connector10| image:: /images/AdministrationC.PNG
        :scale: 10 %
        :align: middle
.. |Consumer1| image:: /images/MyMongoDBConsumer.JPG
        :scale: 11 %
        :align: middle
.. |Consumer2| image:: /images/OPCUAConsumer.JPG
        :scale: 10 %
        :align: middle
.. |Consumer4| image:: /images/RestServerConsumer.JPG
        :scale: 11 %
        :align: middle
.. |Consumer7| image:: /images/KafkaConsumer.jpg
        :scale: 7 %
        :align: middle
.. |Consumer8| image:: /images/AdministrationC.PNG
        :scale: 10 %
        :align: middle
.. |Consumer9| image:: /images/AdministrationC.PNG
        :scale: 10 %
        :align: middle
.. |Consumer10| image:: /images/AdministrationC.PNG
        :scale: 10 %
        :align: middle
.. |Producer1| image:: /images/MyMongoDBProducer.JPG
        :scale: 10 %
        :align: middle
.. |Producer2| image:: /images/OPCUAProducer.JPG
        :scale: 10 %
        :align: middle
.. |Producer3| image:: /images/FileProducer.JPG
        :scale: 10 %
        :align: middle
.. |Producer4| image:: /images/AMQPProducer.jpg
        :scale: 8 %
        :align: middle
.. |Producer6| image:: /images/RestClientProducer.JPG
        :scale: 10 %
        :align: middle
.. |Producer7| image:: /images/KafkaProducer.jpg
        :scale: 7 %
        :align: middle
.. |Producer8| image:: /images/AdministrationC.PNG
        :scale: 10 %
        :align: middle
.. |Producer9| image:: /images/AdministrationC.PNG
        :scale: 10 %
        :align: middle
.. |Producer10| image:: /images/AdministrationC.PNG
        :scale: 10 %
        :align: middle
.. |CSettings| image:: /images/MosquittoConnector.JPG
        :scale: 55 %
.. |PSettings| image:: /images/MosquittoProducer.JPG
        :scale: 55 %
.. |ConsumerSettings| image:: /images/MosquittoConsumer.JPG
        :scale: 54 %


.. _Stream:

Streams
==========

The Stream-resources :term:`Consumer`\ s, :term:`Producer`\ s and :term:`Connector`\ s serve the purpose of defining data streams.
There is a hierarchy to these resources in which Connectors form the foundation for Consumers and Producers. Hence, the definition of a data stream consists either of a Connector-Consumer pair or a Connector-Producer pair. Each Consumer and each Producer runs on exactly one connector. Connectors, on the other hand, can have many consumers and producers.

+ As the name suggests, Connectors take information on overall connection parameters, such as addresses and authentication details. Especially if several message streams are on a broker, server or other “data space”, Connectors contain information which can be shared by Consumers and Producers. Consequently, shared information has to be defined only once in one place.
+ Consumers are used to define the input message stream of Streamsheets.
+ Producers are used to define outgoing message streams.

Connectors
------------
Connectors serve the base definition of streams. They contain the information to connect to brokers, servers, clusters and other data spaces. This includes usually addresses and authentication information, such as username and password or certificates.

|CSettings|

*other Connector examples:*

|Connector1| |Connector2| |Connector3| |Connector4| |Connector7| |Connector8|

..   |Connector9| |Connector10|



.. _Consumers:

Consumers
------------
Consumers are the Stream resource to specify data streams which serve as the input for Streamsheets, thus, they deliver messages to a sheet. You must first choose a Connector and then add the missing information to complete the definition of a data stream.

|ConsumerSettings|

*other Consumer examples:*

|Consumer1| |Consumer2| |Consumer4| |Consumer7|

..   |Consumer8| |Consumer9| |Consumer10|

Producers
-----------
Producers are very similar to :ref:`Consumers` but instead of defining an input data stream, they define an outgoing data stream. They are used within all producing functions. 

|PSettings|

*other Producer examples:*

|Producer1| |Producer2| |Producer3| |Producer4| |Producer6| |Producer7|

..   |Producer8| |Producer9| |Producer10|


