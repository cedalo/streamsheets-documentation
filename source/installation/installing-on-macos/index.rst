Installing on macOS
======================

In order to install Streamsheets you need to follow 3 steps: Install Docker, set up Docker Compose and, then, deploy the Streamsheet Platform.

Setting up Docker
----------------------

To run Streamsheets you need Docker 18.09 or higher. To set up "Docker for Mac", `follow the installation instructions <https://docs.docker.com/docker-for-mac/install/>`_.

Setting up Docker Compose
--------------------------

Docker Compose is already included in "Docker for Mac", so there is no separate step necessary.

Setting up Streamsheets
---------------------------


1. In order to install Streamsheets first create a target folder for the installation. Choose between manually add the folder or just navigate to your prefered dircetory in your shell and use:

    | Command:  ``mkdir <PATH_TO_INSTALL_DIRECTORY>`` 
    | Example:  ``mkdir ~/streamsheets``

2. Next run the following command to execute the installer for Streamsheets. Replace ``<PATH_TO_INSTALL_DIRECTORY>`` with the name of the installation directory and ``<VERSION>`` with the Streamsheets version to install (current version: \ :ref:`currently`\ ).

    | Command: ``docker run -v <PATH_TO_INSTALL_DIRECTORY>:/streamsheets cedalo/streamsheets-installer:<VERSION>-macos``
    | Example: ``docker run -v ~/streamsheets:/streamsheets cedalo/streamsheets-installer:1.4-macos``


Starting Streamsheets
----------------------

**A:**  

    1. Navigate into the following directory:

        | Command: ``cd <PATH_TO_INSTALL_DIRECTORY>/services/scripts/macos``
        | Example: ``cd ~/streamsheets/services/scripts/macos`` 

      This directory contains several shell scripts (and Docker Compose files) to run predefined configurations of Streamsheets. 

    2. To start the default configuration, run the following command:

        | Command: ``sh start.sh``

**B:**  
   
    Alternatively, close the terminal window, open your repository and navigate into the folder. Once, you are in the “win” folder, simply double-click on “Start”.

        | Example: ``~/streamsheets/services/scripts/macos``
 
 

The web interface for Streamsheets is locally available under: http://localhost:8081/ or in the local network under <your_ip_adress>:8081  (e.g. 192.168.178.90:8081).

Open a browser on another computer in the same local network and type the address. On first usage you will have to accept the license agreement, before you can login to Streamsheets. The standard username and password is:

**User:** admin
**Password:** 1234

We strongly suggest changing the password after your first login.

Welcome to the family. 😊 

 
 