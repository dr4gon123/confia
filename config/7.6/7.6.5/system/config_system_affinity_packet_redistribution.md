# config system affinity-packet-redistribution

Configure packet redistribution.

## Syntax

```
config system affinity-packet-redistribution
    Description: Configure packet redistribution.
    edit <id>
        set affinity-cpumask {string}
        set interface {string}
        set round-robin [enable|disable]
        set rxqid {integer}
    next
end
```

## Parameters

+------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter        | Description                       | Type               | Size               | Default            |
+==================+===================================+====================+====================+====================+
| affinity-cpumask | Hexadecimal cpumask, empty value  | string             | Maximum length:    |                    |
|                  | means all CPUs.                   |                    | 127                |                    |
+------------------+-----------------------------------+--------------------+--------------------+--------------------+
| id               | ID of the packet redistribution   | integer            | Minimum value: 0   | 0                  |
|                  | setting.                          |                    | Maximum value:     |                    |
|                  |                                   |                    | 4294967295         |                    |
+------------------+-----------------------------------+--------------------+--------------------+--------------------+
| interface        | Physical interface name on which  | string             | Maximum length: 15 |                    |
|                  | to perform packet redistribution. |                    |                    |                    |
+------------------+-----------------------------------+--------------------+--------------------+--------------------+
| round-robin      | Enable/disable round-robin        | option             | \-                 | enable             |
|                  | redistribution to multiple CPUs.  |                    |                    |                    |
+------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                  | +-------------+--------------------------------------------------------+                         |
|                  | | Option      | Description                                            |                         |
|                  | +=============+========================================================+                         |
|                  | | *enable*    | Enable round-robin redistribution.                     |                         |
|                  | +-------------+--------------------------------------------------------+                         |
|                  | | *disable*   | Disable round-robin redistribution.                    |                         |
|                  | +-------------+--------------------------------------------------------+                         |
+------------------+-----------------------------------+--------------------+--------------------+--------------------+
| rxqid            | ID of the receive queue (when the | integer            | Minimum value: 0   | 255                |
|                  | interface has multiple queues) on |                    | Maximum value: 255 |                    |
|                  | which to perform packet           |                    |                    |                    |
|                  | redistribution (255 = all         |                    |                    |                    |
|                  | queues).                          |                    |                    |                    |
+------------------+-----------------------------------+--------------------+--------------------+--------------------+

