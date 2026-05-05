# config wireless-controller lw-profile

Configure LoRaWAN profile.

## Syntax

```
config wireless-controller lw-profile
    Description: Configure LoRaWAN profile.
    edit <name>
        set comment {string}
        set cups-api-key {password}
        set cups-server {string}
        set cups-server-port {integer}
        set lw-protocol [basics-station|packet-forwarder]
        set tc-api-key {password}
        set tc-server {string}
        set tc-server-port {integer}
    next
end
```

## Parameters

+------------------+-----------------------------------+------------------------+------------------------+------------------------+
| Parameter        | Description                       | Type                   | Size                   | Default                |
+==================+===================================+========================+========================+========================+
| comment          | Comment.                          | string                 | Maximum length: 63     |                        |
+------------------+-----------------------------------+------------------------+------------------------+------------------------+
| cups-api-key     | CUPS API key of LoRaWAN device.   | password               | Not Specified          |                        |
+------------------+-----------------------------------+------------------------+------------------------+------------------------+
| cups-server      | CUPS (Configuration and Update    | string                 | Maximum length: 255    |                        |
|                  | Server) domain name or IP address |                        |                        |                        |
|                  | of LoRaWAN device.                |                        |                        |                        |
+------------------+-----------------------------------+------------------------+------------------------+------------------------+
| cups-server-port | CUPS Port value of LoRaWAN        | integer                | Minimum value: 0       | 0                      |
|                  | device.                           |                        | Maximum value: 65535   |                        |
+------------------+-----------------------------------+------------------------+------------------------+------------------------+
| lw-protocol      | Configure LoRaWAN protocol        | option                 | \-                     | basics-station         |
|                  | (default = basics-station)        |                        |                        |                        |
+------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                  | +--------------------+--------------------------------------------------------+                              |
|                  | | Option             | Description                                            |                              |
|                  | +====================+========================================================+                              |
|                  | | *basics-station*   | Configure LoRaWAN protocol to Basics Station.          |                              |
|                  | +--------------------+--------------------------------------------------------+                              |
|                  | | *packet-forwarder* | Configure LoRaWAN protocol to UDP Packet Forwarder.    |                              |
|                  | +--------------------+--------------------------------------------------------+                              |
+------------------+-----------------------------------+------------------------+------------------------+------------------------+
| name             | LoRaWAN profile name.             | string                 | Maximum length: 35     |                        |
+------------------+-----------------------------------+------------------------+------------------------+------------------------+
| tc-api-key       | TC API key of LoRaWAN device.     | password               | Not Specified          |                        |
+------------------+-----------------------------------+------------------------+------------------------+------------------------+
| tc-server        | TC (Traffic Controller) domain    | string                 | Maximum length: 255    |                        |
|                  | name or IP address of LoRaWAN     |                        |                        |                        |
|                  | device.                           |                        |                        |                        |
+------------------+-----------------------------------+------------------------+------------------------+------------------------+
| tc-server-port   | TC Port value of LoRaWAN device.  | integer                | Minimum value: 0       | 0                      |
|                  |                                   |                        | Maximum value: 65535   |                        |
+------------------+-----------------------------------+------------------------+------------------------+------------------------+

