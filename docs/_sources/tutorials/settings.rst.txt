.. |PEX| image:: /images/portex.png
    :scale: 45 % 


Settings
=========================





Ports
-----------

**What are ports?**

Ports handle communication over the internet, they make sure, that there are no conflicts in data transmission.  All data transmitted over the internet is sent and received by using different kinds of protocols. Each protocol is assigned a specific port number. This way data streams can easily be managed and adjusted.



**Which ports are allocated by Streamsheets?**

Streamsheets allocate a number of ports. 

These are all used ports:

 
* 1883 - MQTT Broker
* 1884 - Internal MQTT Broker
* 8080 - Gateway
* 8081 - Reverseproxy
* 8083 - Feeder Service
* 8088 - Gateway WebSocket API
* 8090 - Repository HTTP API
* 9000 - WebUI
* 40000-40100 - Feeder Service (UDP)
* 4840 - OPC UA
* 6379 - Redis
* 27017 - Internal MongoDB



**How can I change ports?**

Depending on your installed version, there are different ways to adjust the ports. 

**Command**

Starting with versionn 1.5 of the Streamsheets open source release you can add the port changes to the ``docker run`` command used in the installation process:

``docker run  -p 8081:8081  -p 1885:1883  -v /tmp/db:/var/lib/mongodb  cedalo/streamsheets:1.5``

The parameter ``-p port:port`` defines the port allocation. In the example above the 1883 port of the MQTT Broker was mapped to use the port 1885. 
Add another ``-p port:port`` for every port that needs adjustment.

**YML file**

If you don´t use the open source version or have an older version, the port mapping is done via a .yml file in your Installer directory in the "docker-compose" folder. 


To change each port individually open the .yml file and search for the "ports" parameter of the service.


The command and the .yml file always use the structure *port:port*. This is because we map internal docker ports to the ports of the host system. The port on the left represent the port of the host system and the port on the right represents the internal docker port. The one that interests you, is the one of the host system.

|PEX|

Changing the port to 8082 would look like this:

    8082:8081

**When do I need to change ports?**

Sometimes you already have installed other programs blocking certain ports. Then you encounter error messages like this:

    *ERROR: for streamsheets-service-feeders  Cannot start service streamsheets-service-feeders: driver failed programming external connectivity on endpoint streamsheets-service-feeders (3c98f65b49d5c5ad961c9fde5ef145f21bf385b5edc077e204a9b877834185be): Bind for 0.0.0.0:8083 failed: port is already allocated*

Changing either the port of the Streamsheets or the port of the other program is then the only option, if you want to run both at the same time on this host system.



Mosquitto Broker
-----------------------

Streamsheets comes with 2 different Mosquitto Broker.  
Within  the Streamsheets installation directory in the folder "settings" you can find the mosquitto folder. Here the randomly generated password of your Broker is stored. To change this use the password manager tool of the mosquitto broker "mosquitto_passwd". 
You can find it `here <https://mosquitto.org/man/mosquitto_passwd-1.html>`_ :