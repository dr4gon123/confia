# config system netflow

Configure NetFlow.

## Syntax

```
config system netflow
    Description: Configure NetFlow.
    set active-flow-timeout {integer}
    set collector-ip {string}
    set collector-port {integer}
    set inactive-flow-timeout {integer}
    set interface {string}
    set interface-select-method [auto|sdwan|...]
    set source-ip {string}
    set template-tx-counter {integer}
    set template-tx-timeout {integer}
end
```

## Parameters

+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter               | Description                       | Type               | Size               | Default            |
+=========================+===================================+====================+====================+====================+
| active-flow-timeout     | Timeout to report active flows.   | integer            | Minimum value: 60  | 1800               |
|                         |                                   |                    | Maximum value:     |                    |
|                         |                                   |                    | 3600               |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| collector-ip            | Collector IP.                     | string             | Maximum length: 63 |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| collector-port          | NetFlow collector port number.    | integer            | Minimum value: 0   | 2055               |
|                         |                                   |                    | Maximum value:     |                    |
|                         |                                   |                    | 65535              |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| inactive-flow-timeout   | Timeout for periodic report of    | integer            | Minimum value: 10  | 15                 |
|                         | finished flows.                   |                    | Maximum value: 600 |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| interface               | Specify outgoing interface to     | string             | Maximum length: 15 |                    |
|                         | reach server.                     |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| interface-select-method | Specify how to select outgoing    | option             | \-                 | auto               |
|                         | interface to reach server.        |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | Option      | Description                                            |                         |
|                         | +=============+========================================================+                         |
|                         | | *auto*      | Set outgoing interface automatically.                  |                         |
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | *sdwan*     | Set outgoing interface by SD-WAN or policy routing     |                         |
|                         | |             | rules.                                                 |                         |
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | *specify*   | Set outgoing interface manually.                       |                         |
|                         | +-------------+--------------------------------------------------------+                         |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| source-ip               | Source IP address for             | string             | Maximum length: 63 |                    |
|                         | communication with the NetFlow    |                    |                    |                    |
|                         | agent.                            |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| template-tx-counter     | Counter of flowset records before | integer            | Minimum value: 10  | 20                 |
|                         | resending a template flowset      |                    | Maximum value:     |                    |
|                         | record.                           |                    | 6000               |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| template-tx-timeout     | Timeout for periodic template     | integer            | Minimum value: 60  | 1800               |
|                         | flowset transmission.             |                    | Maximum value:     |                    |
|                         |                                   |                    | 86400              |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+

