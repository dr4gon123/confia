# config system ftm-push

Configure FortiToken Mobile push services.

## Syntax

```
config system ftm-push
    Description: Configure FortiToken Mobile push services.
    set proxy [enable|disable]
    set server {string}
    set server-cert {string}
    set server-ip {ipv4-address}
    set server-port {integer}
    set status [enable|disable]
end
```

## Parameters

+-------------+-----------------------------------+--------------------+--------------------+---------------------+
| Parameter   | Description                       | Type               | Size               | Default             |
+=============+===================================+====================+====================+=====================+
| proxy       | Enable/disable communication to   | option             | \-                 | enable              |
|             | the proxy server in FortiGuard    |                    |                    |                     |
|             | configuration.                    |                    |                    |                     |
+-------------+-----------------------------------+--------------------+--------------------+---------------------+
|             | +-------------+--------------------------------------------------------+                          |
|             | | Option      | Description                                            |                          |
|             | +=============+========================================================+                          |
|             | | *enable*    | Enable communication to the proxy server in FortiGuard |                          |
|             | |             | configuration.                                         |                          |
|             | +-------------+--------------------------------------------------------+                          |
|             | | *disable*   | Disable communication to the proxy server in           |                          |
|             | |             | FortiGuard configuration.                              |                          |
|             | +-------------+--------------------------------------------------------+                          |
+-------------+-----------------------------------+--------------------+--------------------+---------------------+
| server      | IPv4 address or domain name of    | string             | Maximum length:    |                     |
|             | FortiToken Mobile push services   |                    | 127                |                     |
|             | server.                           |                    |                    |                     |
+-------------+-----------------------------------+--------------------+--------------------+---------------------+
| server-cert | Name of the server certificate to | string             | Maximum length: 35 | Fortinet_GUI_Server |
|             | be used for SSL.                  |                    |                    |                     |
+-------------+-----------------------------------+--------------------+--------------------+---------------------+
| server-ip   | IPv4 address of FortiToken Mobile | ipv4-address       | Not Specified      | 0.0.0.0             |
|             | push services server (format:     |                    |                    |                     |
|             | xxx.xxx.xxx.xxx).                 |                    |                    |                     |
+-------------+-----------------------------------+--------------------+--------------------+---------------------+
| server-port | Port to communicate with          | integer            | Minimum value: 1   | 4433                |
|             | FortiToken Mobile push services   |                    | Maximum value:     |                     |
|             | server.                           |                    | 65535              |                     |
+-------------+-----------------------------------+--------------------+--------------------+---------------------+
| status      | Enable/disable the use of         | option             | \-                 | disable             |
|             | FortiToken Mobile push services.  |                    |                    |                     |
+-------------+-----------------------------------+--------------------+--------------------+---------------------+
|             | +-------------+--------------------------------------------------------+                          |
|             | | Option      | Description                                            |                          |
|             | +=============+========================================================+                          |
|             | | *enable*    | Enable FortiToken Mobile push services.                |                          |
|             | +-------------+--------------------------------------------------------+                          |
|             | | *disable*   | Disable FortiToken Mobile push services.               |                          |
|             | +-------------+--------------------------------------------------------+                          |
+-------------+---------------------------------------------------------------------------------------------------+

