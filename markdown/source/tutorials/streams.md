# Working with Streams

Streams build the link to the outside wolrd for any data stream you want
to build. Architectural we are working with Connectors, Consumer and
Producer. To access or create your streams go to the apps dashboard and
select the tab "streams".

## Connector

A Connector is always the foundation of our communication architecture.
Consumer and Producer reference to a Connector and define the details.
The connector itself "connects" the Streamsheet to a provider, you can
choose from a preconfigured list. Once a provider is choosen, there are
a variety of settings, which can be applied to define the details of
your data stream.

### MQTT Connector

The MQTT Connector has the following possible settings.

-   **Name:** The Name of your Connector
-   **Provider:** you can´t change the provider. You choose it while
    creating the connector.
-   **URL:** Choose the MQTT Broke you want to use. If you want to use
    our own broker, which is hosted by the Stream Sheet Server, type in
    `broker`
-   **Port:** Choose the port you will be using to transfer the data.
-   **User Name & Password:** If your URL needs identification, you can
    type in your credentials. For local usage not neccessary.
-   **Base Topic:** The Base topic describes where the connector will be
    connected to.
-   **Retain Message:**
-   **QoS:** Stands for quality of service. You have the choice between:
    At most once, At least once, Exactly once.
-   **Label:** Choose a label to categorize the Connector and to
    possibly administer usage rights over our Label system.

## Producer

A Producer is used in a Function. It directs the data stream out of the
Stream Sheet. The Function together with the Producer defines where your
data will be heading. A Producer is always connected to a Connector,
which serves as the foundation of a Producer. Once the Connector is
choosen, there are some additional settings within the Producer.

### MQTT Producer

The MQTT Producer has the following possible settings:

-   **Name:** The Name of your Producer.
-   **Connector:** Choose the connected Connector.
-   **Data Format:** Choose the Data Format a Producer will publish the
    Messages in.
-   **Topic:** Extend the Base Topic of the Connector. The Message will
    be sent to the full topic branch defined through Connector, Producer
    and Function (ConnectorTopic/ProducerTopic/FunctionTopic).
-   **Label:** Choose a label to categorize the Connector and to
    possibly administer usage rights over our Label system.

## Consumer

A Consumer is always connected to the Inbox of a Stream Sheet. It
defines the details of the data stream comming into a Stream Sheet. A
Consumer is always connected to a Connector. Once the Connector is
choosen, there are some additional settings within the Consumer.

### MQTT Consumer

The MQTT Consumer has the following Settings:

-   **Name:** The Name of your Consumer.
-   **Connector:** Choose the connected Connector.
-   **Data Format:** Choose the Data Format you wish to accept in the
    Inbox.
-   **Client ID:**
-   **Topics:** Choose one or more topics the Consumer will listen to.
    Use the comma "," to seperate topics from another. The topics always
    extend the Connector Base Topic.
-   **Filter:**
-   **Label Attribute:**
-   **ID Attribute:**
-   **Label:** Choose a label to categorize the Connector and to
    possibly administer usage rights over our Label system.