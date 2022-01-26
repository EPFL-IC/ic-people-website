### IC-People guidelines & best practices
IC-People is a local hosting service with an EPFL domain name provided by the School of Computer and Communication Sciences (IC) for:
* All PhD and MA students to showcase their research
* and made available to professors for their personal research pages.

Keep in mind that :
* Each user has a quota of 1Gb
* After your departure from EPFL, there will be a grace period based on the Leave Process https://www.epfl.ch/campus/services/en/it-services/mail-lists-and-calendar/mail/persons-arrival-and-departure/

### Templates
#### 1) Modular Template
* We’ve created an easy and ready-to-use modular based template with CSS/JS/html blocks that can be customized and adapted to your content.

#### 2) Minimalist Template
* If you do not wish to use any of the modular blocks, we’ve created a minimalist template with a branded header and footer. You can fill in your content freely

#### 3) If you do not wish to use the above templates, it’s possible to request an empty page for you to import your content. We do however encourage the use of one of the two templates at your disposal which incorporates an EPFL visual identity elements.

### Summary
* EPFL domain name: ic-people.epfl.ch/~username/
* Personal page/business card to showcase research
* No retrieval of contact information, etc. from EPFL databases
* Content is added manually
* Freedom to choose between the available templates: 1) ready-to-use modular based, 2) minimalist header + footer, or 3) blank page.
* Files on GitHub: Readme guidelines, CSS/JS/html that can be customized and adapted as needed
* Minimal support needed
* Data compliance + end of report (delete page/content) according to LEX and the data protection officer (according to the EPFL policy).

### EPFL identity with graphical elements.

#### Getting started

1. Setup

For hosting the files, we use an SFTP server. You have to be connected to EPFL VPN (https://www.epfl.ch/campus/services/ressources-informatiques/network-services-reseau/acces-intranet-a-distance/clients-vpn-disponibles/).  <br />

2. Access infos :
* Host: ic-people-files.epfl.ch <br />
* Username: Gaspar Username <br />
* Password: Gaspar Password <br />
* Index folder: public_html <br />

If you don't know how to acess an SFTP server, here is two tutorials.

##### 1.1 Windows/MacOS
1. Go to https://cyberduck.io/download/
2. Download and install it
3. Go on the application and click on the button circled in red on the image. Once in this menu press the + at the bottom left
<img src="https://user-images.githubusercontent.com/45627872/121321032-083ef180-c90e-11eb-8a45-ab0f3c7bb348.png" width="750"/>
4. At the top click on SFTP
5. In the server field enter: ic-people-files.epfl.ch
6. For the field username and password: use your GasparAccount.

![image](https://user-images.githubusercontent.com/45627872/117404521-5aa18280-af0a-11eb-9bd2-b8f395b06322.png)

7. Next, close the window
8. Double click on the connection and click on allow
9. Double click on public_html
10. Here you can place your files
11. Your site will be accessible on the following URL: https://ic-people.epfl.ch/~username/

##### 1.2 Linux
1. Connect to the EPFL VPN
2. Use ``` sftp username@ic-people-files.epfl.ch ```
3. Enter your Gaspar password
4. Get into public_html dir with ``` cd public_html ```
5. Use ``` put myFile ``` to put your files in your directory
6. Your site will be accessible on the following URL: https://ic-people.epfl.ch/~username/
7. That's it!

### Confidentiality and sharing data 
As a cloud-based service provider, Slack has a privacy policy within the scope of the General Data Protection Regulation (GDPR). However, we strongly recommend not to share personal data and confidential data. Particular attention needs to be given to Research Data or data that could lead to patents. 

The EPFL-IC slack account is based on an educational license. Information and discussions should therefore relate to educational topics or projects.
Any data added to slack will remain available even after the departure of the user or if the slack account has been deactivated.

### File storage
##### Administrators
The main administrators of the IC-People platform with full access to all content:
* Set-up & IT support: support-icit@epfl.ch
* Templates and guidelines: Deirdre.Rochat@epfl.ch
