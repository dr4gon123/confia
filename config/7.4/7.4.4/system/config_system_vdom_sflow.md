# config system vdom-sflow

Configure sFlow per VDOM to add or change the IP address and UDP port that FortiGate sFlow agents in this VDOM use to send sFlow datagrams to an sFlow collector.

## Syntax

```
config system vdom-sflow
    Description: Configure sFlow per VDOM to add or change the IP address and UDP port that FortiGate sFlow agents in this VDOM use to send sFlow datagrams to an sFlow collector.
    config collectors
        Description: sFlow collectors.
        edit <id>
            set collector-ip {ipv4-address}
            set collector-port {integer}
            set source-ip {ipv4-address}
            set interface-select-method [auto|sdwan|...]
            set interface {string}
        next
    end
    set vdom-sflow [enable|disable]
end
```

## Parameters

+------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter  | Description                       | Type               | Size               | Default            |
+============+===================================+====================+====================+====================+
| vdom-sflow | Enable/disable the sFlow          | option             | \-                 | disable            |
|            | configuration for the current     |                    |                    |                    |
|            | VDOM.                             |                    |                    |                    |
+------------+-----------------------------------+--------------------+--------------------+--------------------+
|            | +-------------+--------------------------------------------------------+                         |
|            | | Option      | Description                                            |                         |
|            | +=============+========================================================+                         |
|            | | *enable*    | Enable sFlow for this VDOM.                            |                         |
|            | +-------------+--------------------------------------------------------+                         |
|            | | *disable*   | Disable sFlow for this VDOM.                           |                         |
|            | +-------------+--------------------------------------------------------+                         |
+------------+--------------------------------------------------------------------------------------------------+

