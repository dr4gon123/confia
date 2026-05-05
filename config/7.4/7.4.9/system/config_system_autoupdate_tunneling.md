# config system autoupdate tunneling

Configure web proxy tunneling for the FDN.

## Syntax

```
config system autoupdate tunneling
    Description: Configure web proxy tunneling for the FDN.
    set address {string}
    set password {password}
    set port {integer}
    set status [enable|disable]
    set username {string}
end
```

## Parameters

+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter | Description                       | Type               | Size               | Default            |
+===========+===================================+====================+====================+====================+
| address   | Web proxy IP address or FQDN.     | string             | Maximum length: 63 |                    |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| password  | Web proxy password.               | password           | Not Specified      |                    |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| port      | Web proxy port.                   | integer            | Minimum value: 0   | 0                  |
|           |                                   |                    | Maximum value:     |                    |
|           |                                   |                    | 65535              |                    |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| status    | Enable/disable web proxy          | option             | \-                 | disable            |
|           | tunneling.                        |                    |                    |                    |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
|           | +-------------+--------------------------------------------------------+                         |
|           | | Option      | Description                                            |                         |
|           | +=============+========================================================+                         |
|           | | *enable*    | Enable setting.                                        |                         |
|           | +-------------+--------------------------------------------------------+                         |
|           | | *disable*   | Disable setting.                                       |                         |
|           | +-------------+--------------------------------------------------------+                         |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| username  | Web proxy username.               | string             | Maximum length: 49 |                    |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+

