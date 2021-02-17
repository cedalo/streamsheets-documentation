# Add-Ons

Adding components to the Streamsheets architecture is possible.

## MongoDB

Streamsheets come with the option to connect to any MongoDB you need. If
you don´t have a MongoDB yet, it is fairly simple to setup. While
Streamsheets run with docker, the same possibility exists for MongoDB.

**Setup Mongo Database**

Open a terminal of your choice and enter:

> Command:
> `docker run --name <container-name> --net streamsheets mongo`  
> Example: `docker run --name mymongodb --net streamsheets mongo`

If you have the Raspberry Pi version use:

> Command:
> `sudo docker run --name <container-name> --net streamsheets andresvidal/rpi3-mongodb3`  
> Example:
> `sudo docker run --name mymongodb --net streamsheets andresvidal/rpi3-mongodb3`

This command downloads a MongoDB image and runs it in a container named
&lt;container-name&gt; in the docker network “streamsheets”. It is
important that the container name does not contain capital letters!
Done!

Now you can create a new MongoDB Connector in the Administration Menu of
your Streamsheet installation. Check the “External Host” checkbox and
enter the &lt;container-name&gt; under “Host(s)”. All other settings are
optional. Add a Producer and use the MONGO.STORE function to safe your
first datapoints to your very own MongoDB.

**Start Stop MongoDB**

To properly stop and start your created container enter:

> Command: `docker stop <container-name>`
> `docker start <container-name>`  
> Example: `docker stop mymongodb` `docker start mymongodb`

**Further Settings**

You can add these commands to the `docker run` command above.

| Command                                    | Description                                                                                                     |
|--------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `-publish 27017:27017`                     | set the MongoDB port to 27017                                                                                   |
| `-e MONGO_INITDB_ROOT_USERNAME=mongoadmin` | adds root user                                                                                                  |
| `-e MONGO_INITDB_ROOT_PASSWORD=secret`     | adds root password                                                                                              |
| `-v ./<directory>:/data/db`                | add the container data to a folder outside of the docker environment. (change &lt;directory&gt; to a real path) |

More can be found [here](https://hub.docker.com/_/mongo).

<div id="influxdb">

</div>
