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
        next
    end
    set inactive-flow-timeout {integer}
    set template-tx-counter {integer}
    set template-tx-timeout {integer}
end
```

## Parameters

+-----------------------+-----------------------------------+---------+---------+---------+
| Parameter             | Description                       | Type    | Size    | Default |
+=======================+===================================+=========+=========+=========+
| active-flow-timeout   | Timeout to report active flows.   | integer | Minimum | 1800    |
|                       |                                   |         | value:  |         |
|                       |                                   |         | 60      |         |
|                       |                                   |         | Maximum |         |
|                       |                                   |         | value:  |         |
|                       |                                   |         | 3600    |         |
+-----------------------+-----------------------------------+---------+---------+---------+
| inactive-flow-timeout | Timeout for periodic report of    | integer | Minimum | 15      |
|                       | finished flows.                   |         | value:  |         |
|                       |                                   |         | 10      |         |
|                       |                                   |         | Maximum |         |
|                       |                                   |         | value:  |         |
|                       |                                   |         | 600     |         |
+-----------------------+-----------------------------------+---------+---------+---------+
| template-tx-counter   | Counter of flowset records before | integer | Minimum | 20      |
|                       | resending a template flowset      |         | value:  |         |
|                       | record.                           |         | 10      |         |
|                       |                                   |         | Maximum |         |
|                       |                                   |         | value:  |         |
|                       |                                   |         | 6000    |         |
+-----------------------+-----------------------------------+---------+---------+---------+
| template-tx-timeout   | Timeout for periodic template     | integer | Minimum | 1800    |
|                       | flowset transmission.             |         | value:  |         |
|                       |                                   |         | 60      |         |
|                       |                                   |         | Maximum |         |
|                       |                                   |         | value:  |         |
|                       |                                   |         | 86400   |         |
+-----------------------+-----------------------------------+---------+---------+---------+

