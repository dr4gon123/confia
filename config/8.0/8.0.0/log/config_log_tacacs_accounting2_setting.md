# config log tacacs+accounting2 setting

Settings for TACACS+ accounting.

## Syntax

```
config log tacacs+accounting2 setting
    Description: Settings for TACACS+ accounting.
    set interface {string}
    set interface-select-method [auto|sdwan|...]
    set port {integer}
    set server {string}
    set server-key {password}
    set source-ip {string}
    set status [enable|disable]
    set timeout {integer}
    set vrf-select {integer}
end
```

## Parameters

+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter               | Description                       | Type               | Size               | Default            |
+=========================+===================================+====================+====================+====================+
| interface               | Specify outgoing interface to     | string             | Maximum length: 15 |                    |
|                         | reach server.                     |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| interface-select-method | Specify how to select outgoing    | option             | \-                 | auto               |
|                         | interface to reach server.        |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | Option      | Description                                            |                         |
|                         | +=============+========================================================+                         |
|                         | | *auto*      | Set outgoing interface automatically.                  |                         |
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | *sdwan*     | Set outgoing interface by SD-WAN or policy routing     |                         |
|                         | |             | rules.                                                 |                         |
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | *specify*   | Set outgoing interface manually.                       |                         |
|                         | +-------------+--------------------------------------------------------+                         |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| port \*                 | Server listen port.               | integer            | Minimum value: 1   | 49                 |
|                         |                                   |                    | Maximum value:     |                    |
|                         |                                   |                    | 65535              |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| server                  | Address of TACACS+ server.        | string             | Maximum length: 63 |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| server-key              | Key to access the TACACS+ server. | password           | Not Specified      |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| source-ip               | Source IP address for             | string             | Maximum length: 63 |                    |
|                         | communication to TACACS+ server.  |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| status                  | Enable/disable TACACS+            | option             | \-                 | disable            |
|                         | accounting.                       |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | Option      | Description                                            |                         |
|                         | +=============+========================================================+                         |
|                         | | *enable*    | Enable TACACS+ accounting.                             |                         |
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | *disable*   | Disable TACACS+ accounting.                            |                         |
|                         | +-------------+--------------------------------------------------------+                         |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| timeout \*              | connection time-out in seconds.   | integer            | Minimum value: 1   | 5                  |
|                         |                                   |                    | Maximum value:     |                    |
|                         |                                   |                    | 3600               |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| vrf-select              | VRF ID used for connection to     | integer            | Minimum value: 0   | 0                  |
|                         | server.                           |                    | Maximum value: 511 |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+

