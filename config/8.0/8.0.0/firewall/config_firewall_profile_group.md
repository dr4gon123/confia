# config firewall profile-group

Configure profile groups.

## Syntax

```
config firewall profile-group
    Description: Configure profile groups.
    edit <name>
        set application-list {string}
        set av-profile {string}
        set casb-profile {string}
        set diameter-filter-profile {string}
        set dlp-profile {string}
        set dnsfilter-profile {string}
        set emailfilter-profile {string}
        set fabric-force-sync [enable|disable]
        set fabric-object [enable|disable]
        set fabric-object-source [member|local|...]
        set file-filter-profile {string}
        set icap-profile {string}
        set ips-sensor {string}
        set ips-voip-filter {string}
        set llm-profile {string}
        set profile-protocol-options {string}
        set sctp-filter-profile {string}
        set ssh-filter-profile {string}
        set ssl-ssh-profile {string}
        set telemetry-profile {string}
        set uuid {uuid}
        set videofilter-profile {string}
        set virtual-patch-profile {string}
        set voip-profile {string}
        set waf-profile {string}
        set webfilter-profile {string}
    next
end
```

## Parameters

+--------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| Parameter                | Description                       | Type               | Size               | Default                              |
+==========================+===================================+====================+====================+======================================+
| application-list         | Name of an existing Application   | string             | Maximum length: 47 |                                      |
|                          | list.                             |                    |                    |                                      |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| av-profile               | Name of an existing Antivirus     | string             | Maximum length: 47 |                                      |
|                          | profile.                          |                    |                    |                                      |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| casb-profile \*          | Name of an existing CASB profile. | string             | Maximum length: 47 |                                      |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| diameter-filter-profile  | Name of an existing Diameter      | string             | Maximum length: 47 |                                      |
|                          | filter profile.                   |                    |                    |                                      |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| dlp-profile              | Name of an existing DLP profile.  | string             | Maximum length: 47 |                                      |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| dnsfilter-profile        | Name of an existing DNS filter    | string             | Maximum length: 47 |                                      |
|                          | profile.                          |                    |                    |                                      |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| emailfilter-profile      | Name of an existing email filter  | string             | Maximum length: 47 |                                      |
|                          | profile.                          |                    |                    |                                      |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| fabric-force-sync \*     | Enable/disable forced             | option             | \-                 | disable                              |
|                          | synchronization of configuration  |                    |                    |                                      |
|                          | objects from the root FortiGate   |                    |                    |                                      |
|                          | unit to the downstream devices.   |                    |                    |                                      |
|                          | Configuration conflict check is   |                    |                    |                                      |
|                          | skipped.                          |                    |                    |                                      |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                          | +-------------+--------------------------------------------------------+                                           |
|                          | | Option      | Description                                            |                                           |
|                          | +=============+========================================================+                                           |
|                          | | *enable*    | Enable forced synchronization of configuration objects |                                           |
|                          | |             | from the root FortiGate unit to the downstream         |                                           |
|                          | |             | devices.                                               |                                           |
|                          | +-------------+--------------------------------------------------------+                                           |
|                          | | *disable*   | Disable forced synchronization of configuration        |                                           |
|                          | |             | objects from the root FortiGate unit to the downstream |                                           |
|                          | |             | devices.                                               |                                           |
|                          | +-------------+--------------------------------------------------------+                                           |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| fabric-object \*         | Security Fabric global object     | option             | \-                 | disable                              |
|                          | setting.                          |                    |                    |                                      |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                          | +-------------+--------------------------------------------------------+                                           |
|                          | | Option      | Description                                            |                                           |
|                          | +=============+========================================================+                                           |
|                          | | *enable*    | Object is set as a security fabric-wide global object. |                                           |
|                          | +-------------+--------------------------------------------------------+                                           |
|                          | | *disable*   | Object is local to this security fabric member.        |                                           |
|                          | +-------------+--------------------------------------------------------+                                           |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| fabric-object-source \*  | Source of truth for fabric        | option             | \-                 | root                                 |
|                          | object.                           |                    |                    |                                      |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                          | +-------------+--------------------------------------------------------+                                           |
|                          | | Option      | Description                                            |                                           |
|                          | +=============+========================================================+                                           |
|                          | | *member*    | Source of truth for this object is a non-root member   |                                           |
|                          | |             | of fabric.                                             |                                           |
|                          | +-------------+--------------------------------------------------------+                                           |
|                          | | *local*     | Source of truth for this object is this security       |                                           |
|                          | |             | fabric member.                                         |                                           |
|                          | +-------------+--------------------------------------------------------+                                           |
|                          | | *root*      | Source of truth for this object is the root of the     |                                           |
|                          | |             | fabric.                                                |                                           |
|                          | +-------------+--------------------------------------------------------+                                           |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| file-filter-profile      | Name of an existing file-filter   | string             | Maximum length: 47 |                                      |
|                          | profile.                          |                    |                    |                                      |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| icap-profile \*          | Name of an existing ICAP profile. | string             | Maximum length: 47 |                                      |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| ips-sensor               | Name of an existing IPS sensor.   | string             | Maximum length: 47 |                                      |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| ips-voip-filter          | Name of an existing VoIP (ips)    | string             | Maximum length: 47 |                                      |
|                          | profile.                          |                    |                    |                                      |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| llm-profile \*           | Name of an existing LLM profile.  | string             | Maximum length: 47 |                                      |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| name                     | Profile group name.               | string             | Maximum length: 47 |                                      |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| profile-protocol-options | Name of an existing Protocol      | string             | Maximum length: 47 | default                              |
|                          | options profile.                  |                    |                    |                                      |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| sctp-filter-profile      | Name of an existing SCTP filter   | string             | Maximum length: 47 |                                      |
|                          | profile.                          |                    |                    |                                      |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| ssh-filter-profile \*    | Name of an existing SSH filter    | string             | Maximum length: 47 |                                      |
|                          | profile.                          |                    |                    |                                      |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| ssl-ssh-profile          | Name of an existing SSL SSH       | string             | Maximum length: 47 | certificate-inspection               |
|                          | profile.                          |                    |                    |                                      |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| telemetry-profile \*     | Name of an existing telemetry     | string             | Maximum length: 47 |                                      |
|                          | profile.                          |                    |                    |                                      |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| uuid \*                  | Universally Unique Identifier     | uuid               | Not Specified      | 00000000-0000-0000-0000-000000000000 |
|                          | (UUID; automatically assigned but |                    |                    |                                      |
|                          | can be manually reset).           |                    |                    |                                      |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| videofilter-profile \*   | Name of an existing VideoFilter   | string             | Maximum length: 47 |                                      |
|                          | profile.                          |                    |                    |                                      |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| virtual-patch-profile    | Name of an existing virtual-patch | string             | Maximum length: 47 |                                      |
|                          | profile.                          |                    |                    |                                      |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| voip-profile             | Name of an existing VoIP (voipd)  | string             | Maximum length: 47 |                                      |
|                          | profile.                          |                    |                    |                                      |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| waf-profile \*           | Name of an existing Web           | string             | Maximum length: 47 |                                      |
|                          | application firewall profile.     |                    |                    |                                      |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| webfilter-profile        | Name of an existing Web filter    | string             | Maximum length: 47 |                                      |
|                          | profile.                          |                    |                    |                                      |
+--------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+

