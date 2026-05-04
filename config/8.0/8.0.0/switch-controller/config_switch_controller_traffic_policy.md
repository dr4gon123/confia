# config switch-controller traffic-policy

Configure FortiSwitch traffic policy.

## Syntax

```
config switch-controller traffic-policy
    Description: Configure FortiSwitch traffic policy.
    edit <name>
        set cos-queue {integer}
        set description {string}
        set guaranteed-bandwidth {integer}
        set guaranteed-burst {integer}
        set maximum-burst {integer}
        set policer-status [enable|disable]
        set type [ingress|egress]
    next
end
```

## Parameters

+----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter            | Description                       | Type               | Size               | Default            |
+======================+===================================+====================+====================+====================+
| cos-queue            | COS queue(0 - 7), or unset to     | integer            | Minimum value: 0   |                    |
|                      | disable.                          |                    | Maximum value: 7   |                    |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| description          | Description of the traffic        | string             | Maximum length: 63 |                    |
|                      | policy.                           |                    |                    |                    |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| guaranteed-bandwidth | Guaranteed bandwidth in kbps (max | integer            | Minimum value: 0   | 10000              |
|                      | value = 524287000).               |                    | Maximum value:     |                    |
|                      |                                   |                    | 524287000          |                    |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| guaranteed-burst     | Guaranteed burst size in bytes    | integer            | Minimum value: 0   | 45000              |
|                      | (max value = 4294967295).         |                    | Maximum value:     |                    |
|                      |                                   |                    | 4294967295         |                    |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| maximum-burst        | Maximum burst size in bytes (max  | integer            | Minimum value: 0   | 67500              |
|                      | value = 4294967295).              |                    | Maximum value:     |                    |
|                      |                                   |                    | 4294967295         |                    |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| name                 | Traffic policy name.              | string             | Maximum length: 63 |                    |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| policer-status       | Enable/disable policer config on  | option             | \-                 | enable             |
|                      | the traffic policy.               |                    |                    |                    |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                      | +-------------+--------------------------------------------------------+                         |
|                      | | Option      | Description                                            |                         |
|                      | +=============+========================================================+                         |
|                      | | *enable*    | Enable policer config on the traffic policy.           |                         |
|                      | +-------------+--------------------------------------------------------+                         |
|                      | | *disable*   | Disable policer config on the traffic policy.          |                         |
|                      | +-------------+--------------------------------------------------------+                         |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| type                 | Configure type of                 | option             | \-                 | ingress            |
|                      | policy(ingress/egress).           |                    |                    |                    |
|                      | Read-only.                        |                    |                    |                    |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                      | +-------------+--------------------------------------------------------+                         |
|                      | | Option      | Description                                            |                         |
|                      | +=============+========================================================+                         |
|                      | | *ingress*   | Ingress policy.                                        |                         |
|                      | +-------------+--------------------------------------------------------+                         |
|                      | | *egress*    | Egress policy.                                         |                         |
|                      | +-------------+--------------------------------------------------------+                         |
+----------------------+--------------------------------------------------------------------------------------------------+

