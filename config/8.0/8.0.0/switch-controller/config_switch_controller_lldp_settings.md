# config switch-controller lldp-settings

Configure FortiSwitch LLDP settings.

## Syntax

```
config switch-controller lldp-settings
    Description: Configure FortiSwitch LLDP settings.
    set device-detection [disable|enable]
    set fast-start-interval {integer}
    set management-interface [internal|mgmt]
    set tx-hold {integer}
    set tx-interval {integer}
end
```

## Parameters

+----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter            | Description                       | Type               | Size               | Default            |
+======================+===================================+====================+====================+====================+
| device-detection     | Enable/disable dynamic detection  | option             | \-                 | enable             |
|                      | of LLDP neighbor devices for VLAN |                    |                    |                    |
|                      | assignment.                       |                    |                    |                    |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                      | +-------------+--------------------------------------------------------+                         |
|                      | | Option      | Description                                            |                         |
|                      | +=============+========================================================+                         |
|                      | | *disable*   | Disable dynamic detection of LLDP neighbor devices.    |                         |
|                      | +-------------+--------------------------------------------------------+                         |
|                      | | *enable*    | Enable dynamic detection of LLDP neighbor devices.     |                         |
|                      | +-------------+--------------------------------------------------------+                         |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| fast-start-interval  | Frequency of LLDP PDU             | integer            | Minimum value: 0   | 2                  |
|                      | transmission from FortiSwitch for |                    | Maximum value: 255 |                    |
|                      | the first 4 packets when the link |                    |                    |                    |
|                      | is up (2 - 5 sec, default = 2, 0  |                    |                    |                    |
|                      | = disable fast start).            |                    |                    |                    |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| management-interface | Primary management interface to   | option             | \-                 | internal           |
|                      | be advertised in LLDP and CDP     |                    |                    |                    |
|                      | PDUs.                             |                    |                    |                    |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                      | +-------------+--------------------------------------------------------+                         |
|                      | | Option      | Description                                            |                         |
|                      | +=============+========================================================+                         |
|                      | | *internal*  | Use internal interface.                                |                         |
|                      | +-------------+--------------------------------------------------------+                         |
|                      | | *mgmt*      | Use management interface.                              |                         |
|                      | +-------------+--------------------------------------------------------+                         |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| tx-hold              | Number of tx-intervals before     | integer            | Minimum value: 1   | 4                  |
|                      | local LLDP data expires (1 - 16,  |                    | Maximum value: 16  |                    |
|                      | default = 4). Packet TTL is       |                    |                    |                    |
|                      | tx-hold \* tx-interval.           |                    |                    |                    |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| tx-interval          | Frequency of LLDP PDU             | integer            | Minimum value: 5   | 30                 |
|                      | transmission from FortiSwitch     |                    | Maximum value:     |                    |
|                      | (5 - 4095 sec, default = 30).     |                    | 4095               |                    |
|                      | Packet TTL is tx-hold \*          |                    |                    |                    |
|                      | tx-interval.                      |                    |                    |                    |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------+

