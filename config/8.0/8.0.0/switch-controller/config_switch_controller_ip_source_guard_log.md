# config switch-controller ip-source-guard-log

Configure FortiSwitch ip source guard log.

## Syntax

```
config switch-controller ip-source-guard-log
    Description: Configure FortiSwitch ip source guard log.
    set log-violations [enable|disable]
    set violation-timer {integer}
end
```

## Parameters

+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter       | Description                       | Type               | Size               | Default            |
+=================+===================================+====================+====================+====================+
| log-violations  | Enable/Disable log violations for | option             | \-                 | disable            |
|                 | IP source guard logging.          |                    |                    |                    |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
|                 | +-------------+--------------------------------------------------------+                         |
|                 | | Option      | Description                                            |                         |
|                 | +=============+========================================================+                         |
|                 | | *enable*    | Enable log violations for IP source guard logging.     |                         |
|                 | +-------------+--------------------------------------------------------+                         |
|                 | | *disable*   | Disable log violations for IP source guard logging.    |                         |
|                 | +-------------+--------------------------------------------------------+                         |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| violation-timer | IP source gurad log violation     | integer            | Minimum value: 0   | 0                  |
|                 | timer in seconds (0 - 1500,       |                    | Maximum value:     |                    |
|                 | default = 0).                     |                    | 1500               |                    |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+

