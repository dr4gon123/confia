# config user fsso-polling

Configure FSSO active directory servers for polling mode.

## Syntax

```
config user fsso-polling
    Description: Configure FSSO active directory servers for polling mode.
    edit <id>
        config adgrp
            Description: LDAP Group Info.
            edit <name>
            next
        end
        set default-domain {string}
        set ldap-server {string}
        set logon-history {integer}
        set password {password}
        set polling-frequency {integer}
        set port {integer}
        set server {string}
        set smb-ntlmv1-auth [enable|disable]
        set smbv1 [enable|disable]
        set status [enable|disable]
        set user {string}
    next
end
```

## Parameters

+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter         | Description                       | Type               | Size               | Default            |
+===================+===================================+====================+====================+====================+
| default-domain    | Default domain managed by this    | string             | Maximum length: 35 |                    |
|                   | Active Directory server.          |                    |                    |                    |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
| id                | Active Directory server ID.       | integer            | Minimum value: 0   | 0                  |
|                   |                                   |                    | Maximum value:     |                    |
|                   |                                   |                    | 4294967295         |                    |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ldap-server       | LDAP server name used in LDAP     | string             | Maximum length: 35 |                    |
|                   | connection strings.               |                    |                    |                    |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
| logon-history     | Number of hours of logon history  | integer            | Minimum value: 0   | 8                  |
|                   | to keep, 0 means keep all         |                    | Maximum value: 48  |                    |
|                   | history.                          |                    |                    |                    |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
| password          | Password required to log into     | password           | Not Specified      |                    |
|                   | this Active Directory server.     |                    |                    |                    |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
| polling-frequency | Polling frequency (every 1 to 30  | integer            | Minimum value: 1   | 10                 |
|                   | seconds).                         |                    | Maximum value: 30  |                    |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
| port              | Port to communicate with this     | integer            | Minimum value: 0   | 0                  |
|                   | Active Directory server.          |                    | Maximum value:     |                    |
|                   |                                   |                    | 65535              |                    |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
| server            | Host name or IP address of the    | string             | Maximum length: 63 |                    |
|                   | Active Directory server.          |                    |                    |                    |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
| smb-ntlmv1-auth   | Enable/disable support of NTLMv1  | option             | \-                 | disable            |
|                   | for Samba authentication.         |                    |                    |                    |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                   | +-------------+--------------------------------------------------------+                         |
|                   | | Option      | Description                                            |                         |
|                   | +=============+========================================================+                         |
|                   | | *enable*    | Enable support of NTLMv1 for Samba authentication.     |                         |
|                   | +-------------+--------------------------------------------------------+                         |
|                   | | *disable*   | Disable support of NTLMv1 for Samba authentication.    |                         |
|                   | +-------------+--------------------------------------------------------+                         |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
| smbv1             | Enable/disable support of SMBv1   | option             | \-                 | disable            |
|                   | for Samba.                        |                    |                    |                    |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                   | +-------------+--------------------------------------------------------+                         |
|                   | | Option      | Description                                            |                         |
|                   | +=============+========================================================+                         |
|                   | | *enable*    | Enable support of SMBv1 for Samba.                     |                         |
|                   | +-------------+--------------------------------------------------------+                         |
|                   | | *disable*   | Disable support of SMBv1 for Samba.                    |                         |
|                   | +-------------+--------------------------------------------------------+                         |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
| status            | Enable/disable polling for the    | option             | \-                 | enable             |
|                   | status of this Active Directory   |                    |                    |                    |
|                   | server.                           |                    |                    |                    |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                   | +-------------+--------------------------------------------------------+                         |
|                   | | Option      | Description                                            |                         |
|                   | +=============+========================================================+                         |
|                   | | *enable*    | Enable setting.                                        |                         |
|                   | +-------------+--------------------------------------------------------+                         |
|                   | | *disable*   | Disable setting.                                       |                         |
|                   | +-------------+--------------------------------------------------------+                         |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
| user              | User name required to log into    | string             | Maximum length: 35 |                    |
|                   | this Active Directory server.     |                    |                    |                    |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+

