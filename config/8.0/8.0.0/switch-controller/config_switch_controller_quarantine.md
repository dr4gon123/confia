# config switch-controller quarantine

Configure FortiSwitch quarantine support.

## Syntax

```
config switch-controller quarantine
    Description: Configure FortiSwitch quarantine support.
    set quarantine [enable|disable]
    config targets
        Description: Quarantine MACs.
        edit <mac>
            set description {string}
            set tag <tags1>, <tags2>, ...
        next
    end
end
```

## Parameters

+------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter  | Description                       | Type               | Size               | Default            |
+============+===================================+====================+====================+====================+
| quarantine | Enable/disable quarantine.        | option             | \-                 | disable            |
+------------+-----------------------------------+--------------------+--------------------+--------------------+
|            | +-------------+--------------------------------------------------------+                         |
|            | | Option      | Description                                            |                         |
|            | +=============+========================================================+                         |
|            | | *enable*    | Enable quarantine.                                     |                         |
|            | +-------------+--------------------------------------------------------+                         |
|            | | *disable*   | Disable quarantine.                                    |                         |
|            | +-------------+--------------------------------------------------------+                         |
+------------+--------------------------------------------------------------------------------------------------+

