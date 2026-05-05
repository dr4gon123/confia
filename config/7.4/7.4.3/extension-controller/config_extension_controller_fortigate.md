# config extension-controller fortigate

FortiGate controller configuration.

## Syntax

```
config extension-controller fortigate
    Description: FortiGate controller configuration.
    edit <name>
        set authorized [discovered|disable|...]
        set description {string}
        set device-id {integer}
        set hostname {string}
        set id {string}
        set profile {string}
        set vdom {integer}
    next
end
```

## Parameters

+-------------+-----------------------------------+---------------------+---------------------+---------------------+
| Parameter   | Description                       | Type                | Size                | Default             |
+=============+===================================+=====================+=====================+=====================+
| authorized  | Enable/disable FortiGate          | option              | \-                  | discovered          |
|             | administration.                   |                     |                     |                     |
+-------------+-----------------------------------+---------------------+---------------------+---------------------+
|             | +--------------+--------------------------------------------------------+                           |
|             | | Option       | Description                                            |                           |
|             | +==============+========================================================+                           |
|             | | *discovered* | Controller discovered this FortiGate.                  |                           |
|             | +--------------+--------------------------------------------------------+                           |
|             | | *disable*    | Controller is configured to not provide service to     |                           |
|             | |              | this FortiGate.                                        |                           |
|             | +--------------+--------------------------------------------------------+                           |
|             | | *enable*     | Controller is configured to provide service to this    |                           |
|             | |              | FortiGate.                                             |                           |
|             | +--------------+--------------------------------------------------------+                           |
+-------------+-----------------------------------+---------------------+---------------------+---------------------+
| description | Description.                      | string              | Maximum length: 255 |                     |
+-------------+-----------------------------------+---------------------+---------------------+---------------------+
| device-id   | Device ID.                        | integer             | Minimum value: 0    | 128                 |
|             |                                   |                     | Maximum value:      |                     |
|             |                                   |                     | 4294967295          |                     |
+-------------+-----------------------------------+---------------------+---------------------+---------------------+
| hostname    | FortiGate hostname.               | string              | Maximum length: 31  |                     |
+-------------+-----------------------------------+---------------------+---------------------+---------------------+
| id          | FortiGate serial number.          | string              | Maximum length: 19  |                     |
+-------------+-----------------------------------+---------------------+---------------------+---------------------+
| name        | FortiGate entry name.             | string              | Maximum length: 19  |                     |
+-------------+-----------------------------------+---------------------+---------------------+---------------------+
| profile     | FortiGate profile configuration.  | string              | Maximum length: 31  |                     |
+-------------+-----------------------------------+---------------------+---------------------+---------------------+
| vdom        | VDOM. Read-only.                  | integer             | Minimum value: 0    | 0                   |
|             |                                   |                     | Maximum value:      |                     |
|             |                                   |                     | 4294967295          |                     |
+-------------+-----------------------------------+---------------------+---------------------+---------------------+

