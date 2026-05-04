# config switch-controller traffic-sniffer

Configure FortiSwitch RSPAN/ERSPAN traffic sniffing parameters.

## Syntax

```
config switch-controller traffic-sniffer
    Description: Configure FortiSwitch RSPAN/ERSPAN traffic sniffing parameters.
    set erspan-ip {ipv4-address}
    set mode [erspan-auto|rspan|...]
    config target-ip
        Description: Sniffer IPs to filter.
        edit <ip>
            set description {string}
        next
    end
    config target-mac
        Description: Sniffer MACs to filter.
        edit <mac>
            set description {string}
        next
    end
    config target-port
        Description: Sniffer ports to filter.
        edit <switch-id>
            set description {string}
            set in-ports <name1>, <name2>, ...
            set out-ports <name1>, <name2>, ...
        next
    end
end
```

## Parameters

+-----------+-----------------------------------+----------------------+----------------------+----------------------+
| Parameter | Description                       | Type                 | Size                 | Default              |
+===========+===================================+======================+======================+======================+
| erspan-ip | Configure ERSPAN collector IP     | ipv4-address         | Not Specified        | 0.0.0.0              |
|           | address.                          |                      |                      |                      |
+-----------+-----------------------------------+----------------------+----------------------+----------------------+
| mode      | Configure traffic sniffer mode.   | option               | \-                   | erspan-auto          |
+-----------+-----------------------------------+----------------------+----------------------+----------------------+
|           | +---------------+--------------------------------------------------------+                             |
|           | | Option        | Description                                            |                             |
|           | +===============+========================================================+                             |
|           | | *erspan-auto* | Mirror traffic using a GRE tunnel.                     |                             |
|           | +---------------+--------------------------------------------------------+                             |
|           | | *rspan*       | Mirror traffic on a layer2 VLAN.                       |                             |
|           | +---------------+--------------------------------------------------------+                             |
|           | | *none*        | Disable traffic mirroring (sniffer).                   |                             |
|           | +---------------+--------------------------------------------------------+                             |
+-----------+--------------------------------------------------------------------------------------------------------+

