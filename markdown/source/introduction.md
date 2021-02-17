# Introduction

## Quick Overview

Streamsheets are server-based spreadsheets that consume, process and
produce data streams. Data streams can originate from many sources, such
as sensors, machines, websites, data bases, applications and many more.
How incoming data streams are processed, analysed, visualized and
combined as well as which outgoing data streams are produced is modelled
entirely with spreadsheet formulas and especially without writing a
single line of program code.

One important characteristic of Streamsheets is that they are
recalculated automatically, e.g. every time a new message arrives or
continuously with a certain cycle time (can be as small as a few
Milliseconds). Consequently, conditions and formulas are considered
continuously and based on these decisions are taken and visualizations
are updated dynamically. All of this is happening in real-time.

What´s more, Streamsheets allow you to send, publish, store or provide
data, hence, they not only consume data streams but produce them as
well. In a similar way as Excel worksheets form part of a workbook,
Streamsheets run in Apps. Find out more about Streamsheets, Apps and how
Streams are configured under `Main Components`.

![StSIntro](/images/StSIntro.png)

A `Streamsheet` runs in an `App`, processes and publishes data streams.

## Protocols

Streamsheets support a number of external connections. These connections
can either be leveraged to consume or produce data:

-   MQTT
-   OPCUA\*
-   REST
-   SMPTP/IPOP3 (Mail)
-   MongoDB
-   InfluxDB\*
-   AMQP\*
-   UPD\*
-   Kafka
-   TimescaleDB\*
-   local storage

\*only available in the premium version

## Use Cases

Streamsheets can be used for many different scenarios and use cases.
Among the most common are the following:

-   Data stream analytics and data stream synchronization
-   Rule Engines, conditional alerting & actions as well as soft PLCs
-   Monitoring and real-time dashboards
-   Edge-cloud and cloud-cloud connectivity
-   Protocol conversion and Semantic Mappings (e.g. `MQTT` ↔ `OPC UA`)
-   Pre-processing on the edge
-   Pre-Processing for AI-Systems
-   Simulation of data sources and devices
-   Automation of Workflows

**Examples videos**

-   [A first introduction](https://www.youtube.com/watch?v=TdefETldLbA)
-   [Windmill Cockpit](https://www.youtube.com/watch?v=fNJcIVSneH4&t=1s)
-   [Merging MQTT streams and expose them as OPC UA
    server](https://www.youtube.com/watch?v=nFQ7yAoDZr0&t=3s)
-   [Real-Time Quality
    Control](https://www.youtube.com/watch?v=8Psom4xRarU) (German)
