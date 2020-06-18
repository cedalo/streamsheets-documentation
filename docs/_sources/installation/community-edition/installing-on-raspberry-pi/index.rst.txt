
Installing on a Raspberry Pi 
================================

Streamsheets can be installed on a Raspberry Pi (we recommend model 3B+ or higher). If not already done, set up your Raspberry Pi with the operating system Raspian (Stretch or higher). If you don´t know how to do this follow the instructions in :ref:`Installing Raspian`. 

In order to install Streamsheets you need to follow 3 steps: Install Docker, set up Docker Compose and, then, deploy the Streamsheet Platform.

Before starting the installation process, we recommend updating your system, followed by a reboot:

``sudo apt-get update``
``sudo apt-get upgrade``
``sudo reboot``


Fast Install Streamsheets
--------------------------------

We have prepared a script, which will install everything you need to run Streamsheets. 
This script installs python3-pip, docker and docker-compose and downloads the Streamsheet images on to your Pi. At the end of the installation process you will be asked if you want to start Streamsheets. This is recommended. 
If you want to install Streamsheets step by step, go to :ref:`Manually Install Streamsheets`.

Open your shell and enter the following command to start the installation process:

``curl -fsSL raw.githubusercontent.com/cedalo/streamsheets-installer/master/pi-installer.sh -o get-streamsheets.sh && sh get-streamsheets.sh``

Now you are able to open Streamsheets from anywhere in your network, by typing in the IP-adress/hostname of your Pi together with the port 8081. 
The standard Raspberry Pi hostname is “raspberrypi”, which results in:

    | **Standard hostname adress:** raspberrypi:8081


Open a browser on another computer in the same local network and type the address. On first usage you will have to accept the license agreement, before you can login to Streamsheets.
The standard username and password is: 

**Login:**

    User: ``admin``
    Password: ``1234``

We strongly suggest changing the password after your first login. 

.. hint:: Streamsheets is designed to run on a Raspberry Pi, but we don´t recommend designing Stream Machines over the same device. Please connect to the Streamsheets application with another device over your browser.

Stopping & Starting Streamsheets
---------------------------------

    **Stopping Streamsheets:** 
                            
                            | Navigate to your shell where the application is running and simply press ``ctrl + c``.

    **Starting Streamsheets:**  
                            
                            | Navigate into the folder "~/cedalo" with your shell or with the file manager. 
                            | If you are using the shell: enter ``sudo sh start.sh``.
                            | If you are using the filemanager: double click the start.sh file and run it in the terminal. 


.. _Manually Install Streamsheets:

Manually Install Streamsheets
------------------------------------

.. toggle-header::
    :header: An alternative to the fast install script. **Click here to Show/Hide manual**
    
         
        **Setting up Docker**
        
        1. To run Streamsheets you need Docker 18.09 or higher. To set up Docker on a Raspberry Pi, use the following command:

            ``sudo curl -fsSL get.docker.com -o get-docker.sh && sh get-docker.sh``

        2. Check the installation by running the following command:

            ``docker -v``
        3. Create a docker account and login with:

            ``sudo docker login`` 


        **Setting up Docker Compose**
        

        1. To install Docker Compose on a Raspberry Pi, run the following commands:

            | ``sudo apt-get update``
            | ``sudo apt-get install -y python python-dev libffi-dev libssl-dev build-essential``
            | ``sudo pip install docker-compose``

        

        2. Check the installation by running the following command:

            ``docker-compose -v``

        **Setting up Streamsheets**
        


        1. In order to install Streamsheets first create a target folder for the installation. Choose between manually add the folder or just navigate to your prefered dircetory in your shell and use:

            | Command:  ``mkdir <PATH_TO_INSTALL_DIRECTORY>`` 
            | Example:  ``mkdir ~/cedalo``

        2. Next run the following command to execute the installer for Streamsheets. Replace ``<PATH_TO_INSTALL_DIRECTORY>`` with the name of the installation directory and ``<VERSION>`` with the Streamsheets version to install (current version: \ :ref:`currently`\).

            | Command: ``sudo docker run -v <PATH_TO_INSTALL_DIRECTORY>:/streamsheets cedalo/streamsheets-installer:<VERSION>-rpi``
            | Example: ``sudo docker run -v ~/cedalo:/streamsheets cedalo/streamsheets-installer:1.5-rpi``

        3. Navigate into the following directory:

            | Command: ``cd <PATH_TO_INSTALL_DIRECTORY>``
            | Example: ``cd ~/cedalo``

        This directory contains several shell scripts (and Docker Compose files) to run predefined configurations of Streamsheets. 

        **Starting Streamsheets**
        

        To start the default configuration, run the following command:

        ``sudo sh start.sh``


        Now you are able to open Streamsheets from anywhere in your network, by typing in the IP-adress/hostname of your Pi together with the port 8081. The standard Raspberry Pi hostname is “raspberrypi”, which results in:

        Standard host name adress: raspberrypi:8081
        Open a browser on another computer in the same local network and type the address. On first usage you will have to accept the license agreement, before you can login to Streamsheets. The standard username and password is:

        **Login:**

        User: ``admin``
        Password: ``1234``

        We strongly suggest changing the password after your first login.



Welcome to the family. 😊


