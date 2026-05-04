# config wanopt peer

Configure WAN optimization peers.

## Syntax

```
config wanopt peer
    Description: Configure WAN optimization peers.
    edit <peer-host-id>
        set ip {ipv4-address-any}
    next
end
```

## Parameters

+--------------+-----------------------------------+------------------+-----------+---------+
| Parameter    | Description                       | Type             | Size      | Default |
+==============+===================================+==================+===========+=========+
| ip           | Peer IP address.                  | ipv4-address-any | Not       | 0.0.0.0 |
|              |                                   |                  | Specified |         |
+--------------+-----------------------------------+------------------+-----------+---------+
| peer-host-id | Peer host ID.                     | string           | Maximum   |         |
|              |                                   |                  | length:   |         |
|              |                                   |                  | 35        |         |
+--------------+-----------------------------------+------------------+-----------+---------+

