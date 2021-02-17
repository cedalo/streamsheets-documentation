# Main Components

The 3 main components of the Streamsheet platform are: `Streamsheet`s,
`App`s and `Streams <Stream>`. Streamsheets consume, process and produce
data streams. In Excel, one or several sheets always form part of a
Workbook. In a similar way, Streamsheets run in Apps and one App
accommodates up to four sheets. Hence strictly speaking, the App
consumes, processes, and produces data streams, and the Streamsheets
contained in the App define how this happens exactly. Streams define the
endpoints where messages are coming from and where they are sent to,
hence data sources and data sinks. These endpoints can be e.g. `MQTT`
and `Kafka` topics as well as `OPC UA` nodes, `REST` APIs, database
collections or local directories.

![StMFlow](/images/StMFlow.png)

Apps consume and produce streams. In the App\`s Streamsheets the data
flow logic is defined via functions.

<div class="toctree" maxdepth="1">

maincomponents/app maincomponents/streamsheet maincomponents/dashboard
maincomponents/streams maincomponents/administration

</div>
