# Installing on Windows

In order to install Streamsheets you need to follow 3 steps: Install
Docker, set up Docker Compose and, then, deploy the Streamsheet
Platform.

## Setting up Docker

To run Streamsheets you need Docker 18.09 or higher. To set up "Docker
for Windows", [follow the installation
instructions](https://docs.docker.com/docker-for-windows/install/).

## Setting up Docker Compose

Docker Compose is already included in "Docker for Windows", so there is
no separate step necessary.

## Setting up Streamsheets

1.  In order to install Streamsheets, first create a target folder for
    the installation. Manually add the folder or use:

    > Command: `mkdir <PATH_TO_INSTALL_DIRECTORY>`  
    > Example: `mkdir C:\Streamsheets`

2.  Next run the following command to execute the installer for
    Streamsheets. Replace `<PATH_TO_INSTALL_DIRECTORY>` with the
    absolute path to the installation directory and `<VERSION>` with the
    Streamsheets version to install (current version: `currently` ).

    > Command:
    > `docker run -v <PATH_TO_INSTALL_DIRECTORY>:/streamsheets cedalo/streamsheets-installer-pro:<VERSION>-win`  
    > Example:
    > `docker run -v C:\Streamsheets:/streamsheets cedalo/streamsheets-installer-pro:2.0-win`

3.  Add the license file in the license folder.

    > `.../streamsheets/license`
    >
    > > If you do not own a license you can order a **14-day evaluation
    > > license** at <license@cedalo.com>. Please only use business
    > > e-mail adresses.

## Starting Streamsheets

**A:**

> 1.  Navigate into the install directory:
>
>     > Command: `cd <INSTALL_DIRECTORY>`  
>     > Example: `cd C:\Streamsheets`
>
> > This directory contains several shell scripts (and Docker Compose
> > files) to run predefined configurations of Streamsheets.
>
> 2.  To start the default configuration, run the following command:
>
>     > Command: `start.bat`

**B:**

> Alternatively, close the terminal window, open your repository and
> navigate into the folder. Simply double-click the “start” file.
>
> > Example: `C:\Streamsheets`

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