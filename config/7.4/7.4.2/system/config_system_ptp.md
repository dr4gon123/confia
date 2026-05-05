# config system ptp

Configure system PTP information.

## Syntax

```
config system ptp
    Description: Configure system PTP information.
    set delay-mechanism [E2E|P2P]
    set interface {string}
    set mode [multicast|hybrid]
    set request-interval {integer}
    config server-interface
        Description: FortiGate interface(s) with PTP server mode enabled. Devices on your network can contact these interfaces for PTP services.
        edit <id>
            set server-interface-name {string}
            set delay-mechanism [E2E|P2P]
        next
    end
    set server-mode [enable|disable]
    set status [enable|disable]
end
```

## Parameters

+------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter        | Description                       | Type               | Size               | Default            |
+==================+===================================+====================+====================+====================+
| delay-mechanism  | End to end delay detection or     | option             | \-                 | E2E                |
|                  | peer to peer delay detection.     |                    |                    |                    |
+------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                  | +-------------+--------------------------------------------------------+                         |
|                  | | Option      | Description                                            |                         |
|                  | +=============+========================================================+                         |
|                  | | *E2E*       | End to end delay detection.                            |                         |
|                  | +-------------+--------------------------------------------------------+                         |
|                  | | *P2P*       | Peer to peer delay detection.                          |                         |
|                  | +-------------+--------------------------------------------------------+                         |
+------------------+-----------------------------------+--------------------+--------------------+--------------------+
| interface        | PTP client will reply through     | string             | Maximum length: 15 |                    |
|                  | this interface.                   |                    |                    |                    |
+------------------+-----------------------------------+--------------------+--------------------+--------------------+
| mode             | Multicast transmission or hybrid  | option             | \-                 | multicast          |
|                  | transmission.                     |                    |                    |                    |
+------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                  | +-------------+--------------------------------------------------------+                         |
|                  | | Option      | Description                                            |                         |
|                  | +=============+========================================================+                         |
|                  | | *multicast* | Send PTP packets with multicast.                       |                         |
|                  | +-------------+--------------------------------------------------------+                         |
|                  | | *hybrid*    | Send PTP packets with unicast and multicast.           |                         |
|                  | +-------------+--------------------------------------------------------+                         |
+------------------+-----------------------------------+--------------------+--------------------+--------------------+
| request-interval | The delay request value is the    | integer            | Minimum value: 1   | 1                  |
|                  | logarithmic mean interval in      |                    | Maximum value: 6   |                    |
|                  | seconds between the delay request |                    |                    |                    |
|                  | messages sent by the slave to the |                    |                    |                    |
|                  | master.                           |                    |                    |                    |
+------------------+-----------------------------------+--------------------+--------------------+--------------------+
| server-mode      | Enable/disable FortiGate PTP      | option             | \-                 | disable            |
|                  | server mode. Your FortiGate       |                    |                    |                    |
|                  | becomes an PTP server for other   |                    |                    |                    |
|                  | devices on your network.          |                    |                    |                    |
+------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                  | +-------------+--------------------------------------------------------+                         |
|                  | | Option      | Description                                            |                         |
|                  | +=============+========================================================+                         |
|                  | | *enable*    | Enable FortiGate PTP server mode.                      |                         |
|                  | +-------------+--------------------------------------------------------+                         |
|                  | | *disable*   | Disable FortiGate PTP server mode.                     |                         |
|                  | +-------------+--------------------------------------------------------+                         |
+------------------+-----------------------------------+--------------------+--------------------+--------------------+
| status           | Enable/disable setting the        | option             | \-                 | disable            |
|                  | FortiGate system time by          |                    |                    |                    |
|                  | synchronizing with an PTP Server. |                    |                    |                    |
+------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                  | +-------------+--------------------------------------------------------+                         |
|                  | | Option      | Description                                            |                         |
|                  | +=============+========================================================+                         |
|                  | | *enable*    | Enable synchronization with PTP Server.                |                         |
|                  | +-------------+--------------------------------------------------------+                         |
|                  | | *disable*   | Disable synchronization with PTP Server.               |                         |
|                  | +-------------+--------------------------------------------------------+                         |
+------------------+--------------------------------------------------------------------------------------------------+

