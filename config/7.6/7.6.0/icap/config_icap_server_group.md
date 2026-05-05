# config icap server-group

Configure an ICAP server group consisting of multiple forward servers. Supports failover and load balancing.

## Syntax

```
config icap server-group
    Description: Configure an ICAP server group consisting of multiple forward servers. Supports failover and load balancing.
    edit <name>
        set ldb-method [weighted|least-session|...]
        config server-list
            Description: Add ICAP servers to a list to form a server group. Optionally assign weights to each server.
            edit <name>
                set weight {integer}
            next
        end
    next
end
```

## Parameters

+------------+-----------------------------------+----------------------+----------------------+----------------------+
| Parameter  | Description                       | Type                 | Size                 | Default              |
+============+===================================+======================+======================+======================+
| ldb-method | Load balance method.              | option               | \-                   | weighted             |
+------------+-----------------------------------+----------------------+----------------------+----------------------+
|            | +------------------+--------------------------------------------------------+                          |
|            | | Option           | Description                                            |                          |
|            | +==================+========================================================+                          |
|            | | *weighted*       | Load balance traffic to forward servers based on       |                          |
|            | |                  | assigned weights.                                      |                          |
|            | +------------------+--------------------------------------------------------+                          |
|            | | *least-session*  | Send new sessions to the server with lowest session    |                          |
|            | |                  | count.                                                 |                          |
|            | +------------------+--------------------------------------------------------+                          |
|            | | *active-passive* | Send new sessions to active server with high weight.   |                          |
|            | +------------------+--------------------------------------------------------+                          |
+------------+-----------------------------------+----------------------+----------------------+----------------------+
| name       | Configure an ICAP server group    | string               | Maximum length: 63   |                      |
|            | consisting one or multiple        |                      |                      |                      |
|            | forward servers. Supports         |                      |                      |                      |
|            | failover and load balancing.      |                      |                      |                      |
+------------+-----------------------------------+----------------------+----------------------+----------------------+

