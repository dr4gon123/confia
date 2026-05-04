# config switch-controller flow-tracking

Configure FortiSwitch flow tracking and export via ipfix/netflow.

## Syntax

```
config switch-controller flow-tracking
    Description: Configure FortiSwitch flow tracking and export via ipfix/netflow.
    config aggregates
        Description: Configure aggregates in which all traffic sessions matching the IP Address will be grouped into the same flow.
        edit <id>
            set ip {ipv4-classnet}
        next
    end
    config collectors
        Description: Configure collectors for the flow.
        edit <name>
            set ip {ipv4-address-any}
            set port {integer}
            set transport [udp|tcp|...]
        next
    end
    set format [netflow1|netflow5|...]
    set level [vlan|ip|...]
    set max-export-pkt-size {integer}
    set sample-mode [local|perimeter|...]
    set sample-rate {integer}
    set template-export-period {integer}
    set timeout-general {integer}
    set timeout-icmp {integer}
    set timeout-max {integer}
    set timeout-tcp {integer}
    set timeout-tcp-fin {integer}
    set timeout-tcp-rst {integer}
    set timeout-udp {integer}
end
```

## Parameters

+------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| Parameter              | Description                       | Type                 | Size                 | Default              |
+========================+===================================+======================+======================+======================+
| format                 | Configure flow tracking protocol. | option               | \-                   | netflow9             |
+------------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                        | +-------------+--------------------------------------------------------+                               |
|                        | | Option      | Description                                            |                               |
|                        | +=============+========================================================+                               |
|                        | | *netflow1*  | Netflow version 1 sampling.                            |                               |
|                        | +-------------+--------------------------------------------------------+                               |
|                        | | *netflow5*  | Netflow version 5 sampling.                            |                               |
|                        | +-------------+--------------------------------------------------------+                               |
|                        | | *netflow9*  | Netflow version 9 sampling.                            |                               |
|                        | +-------------+--------------------------------------------------------+                               |
|                        | | *ipfix*     | Ipfix sampling.                                        |                               |
|                        | +-------------+--------------------------------------------------------+                               |
+------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| level                  | Configure flow tracking level.    | option               | \-                   | ip                   |
+------------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                        | +-------------+--------------------------------------------------------+                               |
|                        | | Option      | Description                                            |                               |
|                        | +=============+========================================================+                               |
|                        | | *vlan*      | Collects srcip/dstip/srcport/dstport/protocol/tos/vlan |                               |
|                        | |             | from the sample packet.                                |                               |
|                        | +-------------+--------------------------------------------------------+                               |
|                        | | *ip*        | Collects srcip/dstip from the sample packet.           |                               |
|                        | +-------------+--------------------------------------------------------+                               |
|                        | | *port*      | Collects srcip/dstip/srcport/dstport/protocol from the |                               |
|                        | |             | sample packet.                                         |                               |
|                        | +-------------+--------------------------------------------------------+                               |
|                        | | *proto*     | Collects srcip/dstip/protocol from the sample packet.  |                               |
|                        | +-------------+--------------------------------------------------------+                               |
|                        | | *mac*       | Collects smac/dmac from the sample packet.             |                               |
|                        | +-------------+--------------------------------------------------------+                               |
+------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| max-export-pkt-size    | Configure flow max export packet  | integer              | Minimum value: 512   | 512                  |
|                        | size (512-9216, default=512       |                      | Maximum value: 9216  |                      |
|                        | bytes).                           |                      |                      |                      |
+------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| sample-mode            | Configure sample mode for the     | option               | \-                   | perimeter            |
|                        | flow tracking.                    |                      |                      |                      |
+------------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                        | +------------------+--------------------------------------------------------+                          |
|                        | | Option           | Description                                            |                          |
|                        | +==================+========================================================+                          |
|                        | | *local*          | Set local mode which samples on the specific switch    |                          |
|                        | |                  | port.                                                  |                          |
|                        | +------------------+--------------------------------------------------------+                          |
|                        | | *perimeter*      | Set perimeter mode which samples on all switch fabric  |                          |
|                        | |                  | ports and fortilink port at the ingress.               |                          |
|                        | +------------------+--------------------------------------------------------+                          |
|                        | | *device-ingress* | Set device -ingress mode which samples across all      |                          |
|                        | |                  | switch ports at the ingress.                           |                          |
|                        | +------------------+--------------------------------------------------------+                          |
+------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| sample-rate            | Configure sample rate for the     | integer              | Minimum value: 0     | 512                  |
|                        | perimeter and device-ingress      |                      | Maximum value: 99999 |                      |
|                        | sampling(0 - 99999).              |                      |                      |                      |
+------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| template-export-period | Configure template export period  | integer              | Minimum value: 1     | 5                    |
|                        | (1-60, default=5 minutes).        |                      | Maximum value: 60    |                      |
+------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| timeout-general        | Configure flow session general    | integer              | Minimum value: 60    | 3600                 |
|                        | timeout (60-604800, default=3600  |                      | Maximum value:       |                      |
|                        | seconds).                         |                      | 604800               |                      |
+------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| timeout-icmp           | Configure flow session ICMP       | integer              | Minimum value: 60    | 300                  |
|                        | timeout (60-604800, default=300   |                      | Maximum value:       |                      |
|                        | seconds).                         |                      | 604800               |                      |
+------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| timeout-max            | Configure flow session max        | integer              | Minimum value: 60    | 604800               |
|                        | timeout (60-604800,               |                      | Maximum value:       |                      |
|                        | default=604800 seconds).          |                      | 604800               |                      |
+------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| timeout-tcp            | Configure flow session TCP        | integer              | Minimum value: 60    | 3600                 |
|                        | timeout (60-604800, default=3600  |                      | Maximum value:       |                      |
|                        | seconds).                         |                      | 604800               |                      |
+------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| timeout-tcp-fin        | Configure flow session TCP FIN    | integer              | Minimum value: 60    | 300                  |
|                        | timeout (60-604800, default=300   |                      | Maximum value:       |                      |
|                        | seconds).                         |                      | 604800               |                      |
+------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| timeout-tcp-rst        | Configure flow session TCP RST    | integer              | Minimum value: 60    | 120                  |
|                        | timeout (60-604800, default=120   |                      | Maximum value:       |                      |
|                        | seconds).                         |                      | 604800               |                      |
+------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| timeout-udp            | Configure flow session UDP        | integer              | Minimum value: 60    | 300                  |
|                        | timeout (60-604800, default=300   |                      | Maximum value:       |                      |
|                        | seconds).                         |                      | 604800               |                      |
+------------------------+-----------------------------------+----------------------+----------------------+----------------------+

