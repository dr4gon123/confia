# config telemetry-controller global

Configure FortiTelemetry global settings.

## Syntax

```
config telemetry-controller global
    Description: Configure FortiTelemetry global settings.
    set auto-group-telemetry-addr [enable|disable]
    set region {option}
    set retry-interval {integer}
    set telemetry-ca-certificate {string}
end
```

## Parameters

+---------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter                 | Description                       | Type               | Size               | Default            |
+===========================+===================================+====================+====================+====================+
| auto-group-telemetry-addr | Enable/disable automatically      | option             | \-                 | enable             |
|                           | adding the telemetry address to   |                    |                    |                    |
|                           | the default addrgrp TELEMETRY.    |                    |                    |                    |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                           | +-------------+--------------------------------------------------------+                         |
|                           | | Option      | Description                                            |                         |
|                           | +=============+========================================================+                         |
|                           | | *enable*    | Automatically add telemetry address to the default     |                         |
|                           | |             | addrgrp TELEMETRY.                                     |                         |
|                           | +-------------+--------------------------------------------------------+                         |
|                           | | *disable*   | Do not automatically add telemetry address to the      |                         |
|                           | |             | default addrgrp TELEMETRY.                             |                         |
|                           | +-------------+--------------------------------------------------------+                         |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| region                    | Configure telemetry cloud region. | option             | \-                 | global             |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                           | +-------------+--------------------------------------------------------+                         |
|                           | | Option      | Description                                            |                         |
|                           | +=============+========================================================+                         |
|                           | | *global*    | Set region to gloabl.                                  |                         |
|                           | +-------------+--------------------------------------------------------+                         |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| retry-interval            | Configure telemetry cloud retry   | integer            | Minimum value: 1   | 60                 |
|                           | interval (1 - 999, default = 60). |                    | Maximum value: 999 |                    |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| telemetry-ca-certificate  | Name of the CA certificate used   | string             | Maximum length: 79 |                    |
|                           | to verify the telemetry agent     |                    |                    |                    |
|                           | certificate.                      |                    |                    |                    |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------+

