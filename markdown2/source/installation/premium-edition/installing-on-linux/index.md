# Installing on Linux

In order to install Streamsheets you need to follow 3 steps: Install
Docker, set up Docker Compose and, then, deploy the Streamsheet
Platform.

## Setting up Docker

To run Streamsheets you need Docker 18.09 or higher. To set up Docker on
Linux, [follow the installation
instructions](https://docs.docker.com/engine/installation/linux/) for
the Linux distribution you are using.

## Setting up Docker Compose

To run Streamsheets you need Docker Compose 1.23 or higher. To set up
Docker Compose on Linux, [follow these installation
instructions](https://docs.docker.com/compose/install/) for the Linux
distribution of your choice.

## Setting up Streamsheets

1.  In order to install Streamsheets, first create a target folder for
    the installation. Manually add the folder or use:

    > Command: `mkdir <PATH_TO_INSTALL_DIRECTORY>`  
    > Example: `mkdir ~/streamsheets`

2.  Next run the following command to execute the installer for
    Streamsheets. Replace `<PATH_TO_INSTALL_DIRECTORY>` with the name of
    the installation directory and `<VERSION>` with the Streamsheets
    version to install (current version: `currently` ).

    > Command:
    > `docker run -v <PATH_TO_INSTALL_DIRECTORY>:/streamsheets cedalo/streamsheets-installer-pro:<VERSION>-linux`  
    > Example:
    > `docker run -v ~/streamsheets:/streamsheets cedalo/streamsheets-installer-pro:2.0-linux`

3.  Add the license file in the license folder.

    > `.../streamsheets/license`
    >
    > > If you do not own a license you can order a **14-day evaluation
    > > license** at <license@cedalo.com>. Please only use business
    > > e-mail adresses.

## Starting Streamsheets

1.  Navigate into the install directory:

    > Command: `cd <INSTALL_DIRECTORY>`  
    > Example: `cd ~/streamsheets`
    >
    > This directory contains several shell scripts (and Docker Compose
    > files) to run predefined configurations of Streamsheets.

2.  To start the default configuration, run the following command:

    > Command: `sh start.sh`

The web interface for Streamsheets is locally available under:
<http://localhost:8081/> or in the local network under
&lt;your\_ip\_adress&gt;:8081 (e.g. 192.168.178.90:8081).

Open a browser on another computer in the same local network and type
the address. On first usage you will have to accept the license
agreement, before you can login to Streamsheets. The standard username
and password is:

**Login:**

User: `admin` Password: `1234`

We strongly suggest changing the password after your first login.

Welcome to the family. 😊