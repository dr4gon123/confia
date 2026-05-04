# config switch-controller igmp-snooping

Configure FortiSwitch IGMP snooping global settings.

## Syntax

```
config switch-controller igmp-snooping
    Description: Configure FortiSwitch IGMP snooping global settings.
    set aging-time {integer}
    set flood-unknown-multicast [enable|disable]
    set query-interval {integer}
end
```

## Parameters

+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter               | Description                       | Type               | Size               | Default            |
+=========================+===================================+====================+====================+====================+
| aging-time              | Maximum number of seconds to      | integer            | Minimum value: 15  | 300                |
|                         | retain a multicast snooping entry |                    | Maximum value:     |                    |
|                         | for which no packets have been    |                    | 3600               |                    |
|                         | seen (15 - 3600 sec, default =    |                    |                    |                    |
|                         | 300).                             |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| flood-unknown-multicast | Enable/disable unknown multicast  | option             | \-                 | disable            |
|                         | flooding.                         |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | Option      | Description                                            |                         |
|                         | +=============+========================================================+                         |
|                         | | *enable*    | Enable unknown multicast flooding.                     |                         |
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | *disable*   | Disable unknown multicast flooding.                    |                         |
|                         | +-------------+--------------------------------------------------------+                         |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| query-interval          | Maximum time after which IGMP     | integer            | Minimum value: 10  | 125                |
|                         | query will be sent (10 - 1200     |                    | Maximum value:     |                    |
|                         | sec, default = 125).              |                    | 1200               |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+

