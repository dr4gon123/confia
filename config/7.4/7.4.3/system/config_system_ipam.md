# config system ipam

Configure IP address management services.

## Syntax

```
config system ipam
    Description: Configure IP address management services.
    set automatic-conflict-resolution [disable|enable]
    set manage-lan-addresses [disable|enable]
    set manage-lan-extension-addresses [disable|enable]
    set manage-ssid-addresses [disable|enable]
    config pools
        Description: Configure IPAM pools.
        edit <name>
            set description {string}
            set subnet {ipv4-classnet}
        next
    end
    set require-subnet-size-match [disable|enable]
    config rules
        Description: Configure IPAM allocation rules.
        edit <name>
            set description {string}
            set device <name1>, <name2>, ...
            set dhcp [enable|disable]
            set interface <name1>, <name2>, ...
            set pool <name1>, <name2>, ...
            set role [any|lan|...]
        next
    end
    set server-type {option}
    set status [enable|disable]
end
```

## Parameters

+--------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| Parameter                      | Description                       | Type                 | Size                 | Default              |
+================================+===================================+======================+======================+======================+
| automatic-conflict-resolution  | Enable/disable automatic conflict | option               | \-                   | disable              |
|                                | resolution.                       |                      |                      |                      |
+--------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                                | +-------------+--------------------------------------------------------+                               |
|                                | | Option      | Description                                            |                               |
|                                | +=============+========================================================+                               |
|                                | | *disable*   | Disable automatic conflict resolution.                 |                               |
|                                | +-------------+--------------------------------------------------------+                               |
|                                | | *enable*    | Enable automatic conflict resolution.                  |                               |
|                                | +-------------+--------------------------------------------------------+                               |
+--------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| manage-lan-addresses           | Enable/disable default management | option               | \-                   | disable              |
|                                | of LAN interface addresses.       |                      |                      |                      |
+--------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                                | +-------------+--------------------------------------------------------+                               |
|                                | | Option      | Description                                            |                               |
|                                | +=============+========================================================+                               |
|                                | | *disable*   | Disable LAN interface address management by default.   |                               |
|                                | +-------------+--------------------------------------------------------+                               |
|                                | | *enable*    | Enable LAN interface address management by default.    |                               |
|                                | +-------------+--------------------------------------------------------+                               |
+--------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| manage-lan-extension-addresses | Enable/disable default management | option               | \-                   | disable              |
|                                | of FortiExtender LAN extension    |                      |                      |                      |
|                                | interface addresses.              |                      |                      |                      |
+--------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                                | +-------------+--------------------------------------------------------+                               |
|                                | | Option      | Description                                            |                               |
|                                | +=============+========================================================+                               |
|                                | | *disable*   | Disable FortiExtender LAN extension interface address  |                               |
|                                | |             | management by default.                                 |                               |
|                                | +-------------+--------------------------------------------------------+                               |
|                                | | *enable*    | Enable FortiExtender LAN extension interface address   |                               |
|                                | |             | management by default.                                 |                               |
|                                | +-------------+--------------------------------------------------------+                               |
+--------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| manage-ssid-addresses          | Enable/disable default management | option               | \-                   | disable              |
|                                | of FortiAP SSID addresses.        |                      |                      |                      |
+--------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                                | +-------------+--------------------------------------------------------+                               |
|                                | | Option      | Description                                            |                               |
|                                | +=============+========================================================+                               |
|                                | | *disable*   | Disable FortiAP SSID address management by default.    |                               |
|                                | +-------------+--------------------------------------------------------+                               |
|                                | | *enable*    | Enable FortiAP SSID address management by default.     |                               |
|                                | +-------------+--------------------------------------------------------+                               |
+--------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| require-subnet-size-match      | Enable/disable reassignment of    | option               | \-                   | enable               |
|                                | subnets to make requested and     |                      |                      |                      |
|                                | actual sizes match.               |                      |                      |                      |
+--------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                                | +-------------+--------------------------------------------------------+                               |
|                                | | Option      | Description                                            |                               |
|                                | +=============+========================================================+                               |
|                                | | *disable*   | Disable requiring subnet sizes to match.               |                               |
|                                | +-------------+--------------------------------------------------------+                               |
|                                | | *enable*    | Enable requiring subnet sizes to match.                |                               |
|                                | +-------------+--------------------------------------------------------+                               |
+--------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| server-type                    | Configure the type of IPAM server | option               | \-                   | fabric-root          |
|                                | to use.                           |                      |                      |                      |
+--------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                                | +---------------+--------------------------------------------------------+                             |
|                                | | Option        | Description                                            |                             |
|                                | +===============+========================================================+                             |
|                                | | *fabric-root* | Use the IPAM server running on the Security Fabric     |                             |
|                                | |               | root.                                                  |                             |
|                                | +---------------+--------------------------------------------------------+                             |
+--------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| status                         | Enable/disable IP address         | option               | \-                   | disable              |
|                                | management services.              |                      |                      |                      |
+--------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                                | +-------------+--------------------------------------------------------+                               |
|                                | | Option      | Description                                            |                               |
|                                | +=============+========================================================+                               |
|                                | | *enable*    | Enable integration with IP address management          |                               |
|                                | |             | services.                                              |                               |
|                                | +-------------+--------------------------------------------------------+                               |
|                                | | *disable*   | Disable integration with IP address management         |                               |
|                                | |             | services.                                              |                               |
|                                | +-------------+--------------------------------------------------------+                               |
+--------------------------------+--------------------------------------------------------------------------------------------------------+

