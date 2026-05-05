# config system ntp

Configure system NTP information.

## Syntax

```
config system ntp
    Description: Configure system NTP information.
    set authentication [enable|disable]
    set interface <interface-name1>, <interface-name2>, ...
    set key {password}
    set key-id {integer}
    set key-type [MD5|SHA1|...]
    config ntpserver
        Description: Configure the FortiGate to connect to any available third-party NTP server.
        edit <id>
            set server {string}
            set ntpv3 [enable|disable]
            set authentication [enable|disable]
            set key-type [MD5|SHA1|...]
            set key {password}
            set key-id {integer}
            set ip-type [IPv6|IPv4|...]
            set interface-select-method [auto|sdwan|...]
            set interface {string}
        next
    end
    set ntpsync [enable|disable]
    set server-mode [enable|disable]
    set source-ip {ipv4-address}
    set source-ip6 {ipv6-address}
    set syncinterval {integer}
    set type [fortiguard|custom]
end
```

## Parameters

+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| Parameter          | Description                       | Type                | Size                | Default             |
+====================+===================================+=====================+=====================+=====================+
| authentication     | Enable/disable authentication.    | option              | \-                  | disable             |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                    | +-------------+--------------------------------------------------------+                            |
|                    | | Option      | Description                                            |                            |
|                    | +=============+========================================================+                            |
|                    | | *enable*    | Enable authentication.                                 |                            |
|                    | +-------------+--------------------------------------------------------+                            |
|                    | | *disable*   | Disable authentication.                                |                            |
|                    | +-------------+--------------------------------------------------------+                            |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| interface          | FortiGate interface(s) with NTP   | string              | Maximum length: 79  |                     |
| `<interface-name>` | server mode enabled. Devices on   |                     |                     |                     |
|                    | your network can contact these    |                     |                     |                     |
|                    | interfaces for NTP services.      |                     |                     |                     |
|                    |                                   |                     |                     |                     |
|                    | Interface name.                   |                     |                     |                     |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| key                | Key for authentication.           | password            | Not Specified       |                     |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| key-id             | Key ID for authentication.        | integer             | Minimum value: 0    | 0                   |
|                    |                                   |                     | Maximum value:      |                     |
|                    |                                   |                     | 4294967295          |                     |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| key-type           | Key type for authentication (MD5, | option              | \-                  | MD5                 |
|                    | SHA1, SHA256).                    |                     |                     |                     |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                    | +-------------+--------------------------------------------------------+                            |
|                    | | Option      | Description                                            |                            |
|                    | +=============+========================================================+                            |
|                    | | *MD5*       | Use MD5 to authenticate the message.                   |                            |
|                    | +-------------+--------------------------------------------------------+                            |
|                    | | *SHA1*      | Use SHA1 to authenticate the message.                  |                            |
|                    | +-------------+--------------------------------------------------------+                            |
|                    | | *SHA256*    | Use SHA256 to authenticate the message.                |                            |
|                    | +-------------+--------------------------------------------------------+                            |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| ntpsync            | Enable/disable setting the        | option              | \-                  | disable             |
|                    | FortiGate system time by          |                     |                     |                     |
|                    | synchronizing with an NTP Server. |                     |                     |                     |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                    | +-------------+--------------------------------------------------------+                            |
|                    | | Option      | Description                                            |                            |
|                    | +=============+========================================================+                            |
|                    | | *enable*    | Enable synchronization with NTP Server.                |                            |
|                    | +-------------+--------------------------------------------------------+                            |
|                    | | *disable*   | Disable synchronization with NTP Server.               |                            |
|                    | +-------------+--------------------------------------------------------+                            |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| server-mode        | Enable/disable FortiGate NTP      | option              | \-                  | disable             |
|                    | Server Mode. Your FortiGate       |                     |                     |                     |
|                    | becomes an NTP server for other   |                     |                     |                     |
|                    | devices on your network. The      |                     |                     |                     |
|                    | FortiGate relays NTP requests to  |                     |                     |                     |
|                    | its configured NTP server.        |                     |                     |                     |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                    | +-------------+--------------------------------------------------------+                            |
|                    | | Option      | Description                                            |                            |
|                    | +=============+========================================================+                            |
|                    | | *enable*    | Enable FortiGate NTP Server Mode.                      |                            |
|                    | +-------------+--------------------------------------------------------+                            |
|                    | | *disable*   | Disable FortiGate NTP Server Mode.                     |                            |
|                    | +-------------+--------------------------------------------------------+                            |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| source-ip          | Source IP address for             | ipv4-address        | Not Specified       | 0.0.0.0             |
|                    | communication to the NTP server.  |                     |                     |                     |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| source-ip6         | Source IPv6 address for           | ipv6-address        | Not Specified       | ::                  |
|                    | communication to the NTP server.  |                     |                     |                     |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| syncinterval       | NTP synchronization interval.     | integer             | Minimum value: 1    | 60                  |
|                    |                                   |                     | Maximum value: 1440 |                     |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| type               | Use the FortiGuard NTP server or  | option              | \-                  | fortiguard          |
|                    | any other available NTP Server.   |                     |                     |                     |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                    | +--------------+--------------------------------------------------------+                           |
|                    | | Option       | Description                                            |                           |
|                    | +==============+========================================================+                           |
|                    | | *fortiguard* | Use the FortiGuard NTP server.                         |                           |
|                    | +--------------+--------------------------------------------------------+                           |
|                    | | *custom*     | Use any other available NTP server.                    |                           |
|                    | +--------------+--------------------------------------------------------+                           |
+--------------------+-----------------------------------------------------------------------------------------------------+

