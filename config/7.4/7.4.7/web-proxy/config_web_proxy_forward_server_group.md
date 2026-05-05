# config web-proxy forward-server-group

Configure a forward server group consisting or multiple forward servers. Supports failover and load balancing.

## Syntax

```
config web-proxy forward-server-group
    Description: Configure a forward server group consisting or multiple forward servers. Supports failover and load balancing.
    edit <name>
        set affinity [enable|disable]
        set group-down-option [block|pass]
        set ldb-method [weighted|least-session|...]
        config server-list
            Description: Add web forward servers to a list to form a server group. Optionally assign weights to each server.
            edit <name>
                set weight {integer}
            next
        end
    next
end
```

## Parameters

+-------------------+-----------------------------------+----------------------+----------------------+----------------------+
| Parameter         | Description                       | Type                 | Size                 | Default              |
+===================+===================================+======================+======================+======================+
| affinity          | Enable/disable affinity,          | option               | \-                   | enable               |
|                   | attaching a source-ip\'s traffic  |                      |                      |                      |
|                   | to the assigned forwarding server |                      |                      |                      |
|                   | until the                         |                      |                      |                      |
|                   | forward-server-affinity-timeout   |                      |                      |                      |
|                   | is reached (under web-proxy       |                      |                      |                      |
|                   | global).                          |                      |                      |                      |
+-------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                   | +-------------+--------------------------------------------------------+                               |
|                   | | Option      | Description                                            |                               |
|                   | +=============+========================================================+                               |
|                   | | *enable*    | Enable affinity.                                       |                               |
|                   | +-------------+--------------------------------------------------------+                               |
|                   | | *disable*   | Disable affinity.                                      |                               |
|                   | +-------------+--------------------------------------------------------+                               |
+-------------------+-----------------------------------+----------------------+----------------------+----------------------+
| group-down-option | Action to take when all of the    | option               | \-                   | block                |
|                   | servers in the forward server     |                      |                      |                      |
|                   | group are down: block sessions    |                      |                      |                      |
|                   | until at least one server is back |                      |                      |                      |
|                   | up or pass sessions to their      |                      |                      |                      |
|                   | destination.                      |                      |                      |                      |
+-------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                   | +-------------+--------------------------------------------------------+                               |
|                   | | Option      | Description                                            |                               |
|                   | +=============+========================================================+                               |
|                   | | *block*     | Block sessions until at least one server in the group  |                               |
|                   | |             | is back up.                                            |                               |
|                   | +-------------+--------------------------------------------------------+                               |
|                   | | *pass*      | Pass sessions to their destination bypassing servers   |                               |
|                   | |             | in the forward server group.                           |                               |
|                   | +-------------+--------------------------------------------------------+                               |
+-------------------+-----------------------------------+----------------------+----------------------+----------------------+
| ldb-method        | Load balance method: weighted or  | option               | \-                   | weighted             |
|                   | least-session.                    |                      |                      |                      |
+-------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                   | +------------------+--------------------------------------------------------+                          |
|                   | | Option           | Description                                            |                          |
|                   | +==================+========================================================+                          |
|                   | | *weighted*       | Load balance traffic to forward servers based on       |                          |
|                   | |                  | assigned weights. Weights are ratios of total number   |                          |
|                   | |                  | of sessions.                                           |                          |
|                   | +------------------+--------------------------------------------------------+                          |
|                   | | *least-session*  | Send new sessions to the server with lowest session    |                          |
|                   | |                  | count.                                                 |                          |
|                   | +------------------+--------------------------------------------------------+                          |
|                   | | *active-passive* | Send new sessions to the next active server in the     |                          |
|                   | |                  | list. Servers are selected with highest weight first   |                          |
|                   | |                  | and then in order as they are configured. Traffic      |                          |
|                   | |                  | switches back to the first server upon failure         |                          |
|                   | |                  | recovery.                                              |                          |
|                   | +------------------+--------------------------------------------------------+                          |
+-------------------+-----------------------------------+----------------------+----------------------+----------------------+
| name              | Configure a forward server group  | string               | Maximum length: 63   |                      |
|                   | consisting one or multiple        |                      |                      |                      |
|                   | forward servers. Supports         |                      |                      |                      |
|                   | failover and load balancing.      |                      |                      |                      |
+-------------------+-----------------------------------+----------------------+----------------------+----------------------+

