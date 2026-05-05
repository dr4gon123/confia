# config system netflow

Configure NetFlow.

## Syntax

```
config system netflow
    Description: Configure NetFlow.
    set active-flow-timeout {integer}
    config collectors
        Description: Netflow collectors.
        edit <id>
            set collector-ip {string}
            set collector-port {integer}
            set interface {string}
            set interface-select-method [auto|sdwan|...]
            set source-ip {string}
            set source-ip-interface {string}
            set vrf-select {integer}
        next
    end
    config exclusion-filters
        Description: Exclusion filters
        edit <id>
            set destination-ip {user}
            set destination-port {user}
            set protocol {integer}
            set source-ip {user}
            set source-port {user}
        next
    end
    set inactive-flow-timeout {integer}
    set session-cache-size [min|default|...]
    set template-tx-counter {integer}
    set template-tx-timeout {integer}
end
```

## Parameters

+-----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter             | Description                       | Type               | Size               | Default            |
+=======================+===================================+====================+====================+====================+
| active-flow-timeout   | Timeout to report active flows    | integer            | Minimum value: 60  | 1800               |
|                       | (60 - 3600 sec, default = 1800).  |                    | Maximum value:     |                    |
|                       |                                   |                    | 3600               |                    |
+-----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| inactive-flow-timeout | Timeout for periodic report of    | integer            | Minimum value: 10  | 15                 |
|                       | finished flows (10 - 600 sec,     |                    | Maximum value: 600 |                    |
|                       | default = 15).                    |                    |                    |                    |
+-----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| session-cache-size    | Maximum RAM usage allowed for     | option             | \-                 | default            |
|                       | Netflow session cache.            |                    |                    |                    |
+-----------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                       | +-------------+--------------------------------------------------------+                         |
|                       | | Option      | Description                                            |                         |
|                       | +=============+========================================================+                         |
|                       | | *min*       | Up to 0.5% of system RAM.                              |                         |
|                       | +-------------+--------------------------------------------------------+                         |
|                       | | *default*   | Up to 1% of system RAM.                                |                         |
|                       | +-------------+--------------------------------------------------------+                         |
|                       | | *max*       | Up to 2% of system RAM.                                |                         |
|                       | +-------------+--------------------------------------------------------+                         |
+-----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| template-tx-counter   | Counter of flowset records before | integer            | Minimum value: 10  | 20                 |
|                       | resending a template flowset      |                    | Maximum value:     |                    |
|                       | record.                           |                    | 6000               |                    |
+-----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| template-tx-timeout   | Timeout for periodic template     | integer            | Minimum value: 60  | 1800               |
|                       | flowset transmission (60 - 86400  |                    | Maximum value:     |                    |
|                       | sec, default = 1800).             |                    | 86400              |                    |
+-----------------------+-----------------------------------+--------------------+--------------------+--------------------+

