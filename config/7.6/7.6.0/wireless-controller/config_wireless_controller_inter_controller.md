# config wireless-controller inter-controller

Configure inter wireless controller operation.

## Syntax

```
config wireless-controller inter-controller
    Description: Configure inter wireless controller operation.
    set fast-failover-max {integer}
    set fast-failover-wait {integer}
    set inter-controller-key {password}
    set inter-controller-mode [disable|l2-roaming|...]
    config inter-controller-peer
        Description: Fast failover peer wireless controller list.
        edit <id>
            set peer-ip {ipv4-address}
            set peer-port {integer}
            set peer-priority [primary|secondary]
        next
    end
    set inter-controller-pri [primary|secondary]
    set l3-roaming [enable|disable]
end
```

## Parameters

+-----------------------+-----------------------------------+---------------------+---------------------+---------------------+
| Parameter             | Description                       | Type                | Size                | Default             |
+=======================+===================================+=====================+=====================+=====================+
| fast-failover-max     | Maximum number of retransmissions | integer             | Minimum value: 3    | 10                  |
|                       | for fast failover HA messages     |                     | Maximum value: 64   |                     |
|                       | between peer wireless controllers |                     |                     |                     |
|                       | (3 - 64, default = 10).           |                     |                     |                     |
+-----------------------+-----------------------------------+---------------------+---------------------+---------------------+
| fast-failover-wait    | Minimum wait time before an AP    | integer             | Minimum value: 10   | 10                  |
|                       | transitions from secondary        |                     | Maximum value:      |                     |
|                       | controller to primary controller  |                     | 86400               |                     |
|                       | (10 - 86400 sec, default = 10).   |                     |                     |                     |
+-----------------------+-----------------------------------+---------------------+---------------------+---------------------+
| inter-controller-key  | Secret key for inter-controller   | password            | Not Specified       |                     |
|                       | communications.                   |                     |                     |                     |
+-----------------------+-----------------------------------+---------------------+---------------------+---------------------+
| inter-controller-mode | Configure inter-controller mode   | option              | \-                  | disable             |
|                       | (disable, l2-roaming, 1+1,        |                     |                     |                     |
|                       | default = disable).               |                     |                     |                     |
+-----------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                       | +--------------+--------------------------------------------------------+                           |
|                       | | Option       | Description                                            |                           |
|                       | +==============+========================================================+                           |
|                       | | *disable*    | Disable inter-controller mode.                         |                           |
|                       | +--------------+--------------------------------------------------------+                           |
|                       | | *l2-roaming* | Enable layer 2 roaming support between                 |                           |
|                       | |              | inter-controllers.                                     |                           |
|                       | +--------------+--------------------------------------------------------+                           |
|                       | | *1+1*        | Enable 1+1 fast failover mode.                         |                           |
|                       | +--------------+--------------------------------------------------------+                           |
+-----------------------+-----------------------------------+---------------------+---------------------+---------------------+
| inter-controller-pri  | Configure inter-controller\'s     | option              | \-                  | primary             |
|                       | priority (primary or secondary,   |                     |                     |                     |
|                       | default = primary).               |                     |                     |                     |
+-----------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                       | +-------------+--------------------------------------------------------+                            |
|                       | | Option      | Description                                            |                            |
|                       | +=============+========================================================+                            |
|                       | | *primary*   | Primary fast failover mode.                            |                            |
|                       | +-------------+--------------------------------------------------------+                            |
|                       | | *secondary* | Secondary fast failover mode.                          |                            |
|                       | +-------------+--------------------------------------------------------+                            |
+-----------------------+-----------------------------------+---------------------+---------------------+---------------------+
| l3-roaming            | Enable/disable layer 3 roaming    | option              | \-                  | disable             |
|                       | (default = disable).              |                     |                     |                     |
+-----------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                       | +-------------+--------------------------------------------------------+                            |
|                       | | Option      | Description                                            |                            |
|                       | +=============+========================================================+                            |
|                       | | *enable*    | Enable layer 3 roaming.                                |                            |
|                       | +-------------+--------------------------------------------------------+                            |
|                       | | *disable*   | Disable layer 3 roaming.                               |                            |
|                       | +-------------+--------------------------------------------------------+                            |
+-----------------------+-----------------------------------------------------------------------------------------------------+

