# config system switch-interface

Configure software switch interfaces by grouping physical and WiFi interfaces.

## Syntax

```
config system switch-interface
    Description: Configure software switch interfaces by grouping physical and WiFi interfaces.
    edit <name>
        set intra-switch-policy [implicit|explicit]
        set mac-ttl {integer}
        set member <interface-name1>, <interface-name2>, ...
        set span [disable|enable]
        set span-dest-port {string}
        set span-direction [rx|tx|...]
        set span-source-port <interface-name1>, <interface-name2>, ...
        set type [switch|hub]
        set vdom {string}
    next
end
```

## Parameters

+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter           | Description                       | Type               | Size               | Default            |
+=====================+===================================+====================+====================+====================+
| intra-switch-policy | Allow any traffic between switch  | option             | \-                 | implicit           |
|                     | interfaces or require firewall    |                    |                    |                    |
|                     | policies to allow traffic between |                    |                    |                    |
|                     | switch interfaces.                |                    |                    |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                     | +-------------+--------------------------------------------------------+                         |
|                     | | Option      | Description                                            |                         |
|                     | +=============+========================================================+                         |
|                     | | *implicit*  | Traffic between switch members is implicitly allowed.  |                         |
|                     | +-------------+--------------------------------------------------------+                         |
|                     | | *explicit*  | Traffic between switch members must match firewall     |                         |
|                     | |             | policies.                                              |                         |
|                     | +-------------+--------------------------------------------------------+                         |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| mac-ttl             | Duration for which MAC addresses  | integer            | Minimum value: 300 | 300                |
|                     | are held in the ARP table.        |                    | Maximum value:     |                    |
|                     |                                   |                    | 8640000            |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| member              | Names of the interfaces that      | string             | Maximum length: 79 |                    |
| `<interface-name>`  | belong to the virtual switch.     |                    |                    |                    |
|                     |                                   |                    |                    |                    |
|                     | Physical interface name.          |                    |                    |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| name                | Interface name (name cannot be in | string             | Maximum length: 15 |                    |
|                     | use by any other interfaces,      |                    |                    |                    |
|                     | VLANs, or inter-VDOM links).      |                    |                    |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| span                | Enable/disable port spanning.     | option             | \-                 | disable            |
|                     | Port spanning echoes traffic      |                    |                    |                    |
|                     | received by the software switch   |                    |                    |                    |
|                     | to the span destination port.     |                    |                    |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                     | +-------------+--------------------------------------------------------+                         |
|                     | | Option      | Description                                            |                         |
|                     | +=============+========================================================+                         |
|                     | | *disable*   | Disable port spanning.                                 |                         |
|                     | +-------------+--------------------------------------------------------+                         |
|                     | | *enable*    | Enable port spanning.                                  |                         |
|                     | +-------------+--------------------------------------------------------+                         |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| span-dest-port      | SPAN destination port name. All   | string             | Maximum length: 15 |                    |
|                     | traffic on the SPAN source ports  |                    |                    |                    |
|                     | is echoed to the SPAN destination |                    |                    |                    |
|                     | port.                             |                    |                    |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| span-direction      | The direction in which the SPAN   | option             | \-                 | both               |
|                     | port operates, either: rx, tx, or |                    |                    |                    |
|                     | both.                             |                    |                    |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                     | +-------------+--------------------------------------------------------+                         |
|                     | | Option      | Description                                            |                         |
|                     | +=============+========================================================+                         |
|                     | | *rx*        | Copies only received packets from source SPAN ports to |                         |
|                     | |             | the destination SPAN port.                             |                         |
|                     | +-------------+--------------------------------------------------------+                         |
|                     | | *tx*        | Copies only transmitted packets from source SPAN ports |                         |
|                     | |             | to the destination SPAN port.                          |                         |
|                     | +-------------+--------------------------------------------------------+                         |
|                     | | *both*      | Copies both received and transmitted packets from      |                         |
|                     | |             | source SPAN ports to the destination SPAN port.        |                         |
|                     | +-------------+--------------------------------------------------------+                         |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| span-source-port    | Physical interface name. Port     | string             | Maximum length: 79 |                    |
| `<interface-name>`  | spanning echoes all traffic on    |                    |                    |                    |
|                     | the SPAN source ports to the SPAN |                    |                    |                    |
|                     | destination port.                 |                    |                    |                    |
|                     |                                   |                    |                    |                    |
|                     | Physical interface name.          |                    |                    |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| type                | Type of switch based on           | option             | \-                 | switch             |
|                     | functionality: switch for normal  |                    |                    |                    |
|                     | functionality, or hub to          |                    |                    |                    |
|                     | duplicate packets to all port     |                    |                    |                    |
|                     | members.                          |                    |                    |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                     | +-------------+--------------------------------------------------------+                         |
|                     | | Option      | Description                                            |                         |
|                     | +=============+========================================================+                         |
|                     | | *switch*    | Switch for normal switch functionality (available in   |                         |
|                     | |             | NAT mode only).                                        |                         |
|                     | +-------------+--------------------------------------------------------+                         |
|                     | | *hub*       | Hub to duplicate packets to all member ports.          |                         |
|                     | +-------------+--------------------------------------------------------+                         |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| vdom                | VDOM that the software switch     | string             | Maximum length: 31 |                    |
|                     | belongs to.                       |                    |                    |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+

