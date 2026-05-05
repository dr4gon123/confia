# config system vxlan

Configure VXLAN devices.

## Syntax

```
config system vxlan
    Description: Configure VXLAN devices.
    edit <name>
        set dstport {integer}
        set evpn-id {integer}
        set interface {string}
        set ip-version [ipv4-unicast|ipv6-unicast|...]
        set learn-from-traffic [enable|disable]
        set multicast-ttl {integer}
        set remote-ip <ip1>, <ip2>, ...
        set remote-ip6 <ip61>, <ip62>, ...
        set vni {integer}
    next
end
```

## Parameters

+--------------------+-----------------------------------+----------------------+----------------------+----------------------+
| Parameter          | Description                       | Type                 | Size                 | Default              |
+====================+===================================+======================+======================+======================+
| dstport            | VXLAN destination port.           | integer              | Minimum value: 1     | 4789                 |
|                    |                                   |                      | Maximum value: 65535 |                      |
+--------------------+-----------------------------------+----------------------+----------------------+----------------------+
| evpn-id            | EVPN instance.                    | integer              | Minimum value: 1     | 0                    |
|                    |                                   |                      | Maximum value: 65535 |                      |
+--------------------+-----------------------------------+----------------------+----------------------+----------------------+
| interface          | Outgoing interface for VXLAN      | string               | Maximum length: 15   |                      |
|                    | encapsulated traffic.             |                      |                      |                      |
+--------------------+-----------------------------------+----------------------+----------------------+----------------------+
| ip-version         | IP version to use for the VXLAN   | option               | \-                   | ipv4-unicast         |
|                    | interface and so for              |                      |                      |                      |
|                    | communication over the VXLAN.     |                      |                      |                      |
|                    | IPv4 or IPv6 unicast or           |                      |                      |                      |
|                    | multicast.                        |                      |                      |                      |
+--------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                    | +------------------+--------------------------------------------------------+                          |
|                    | | Option           | Description                                            |                          |
|                    | +==================+========================================================+                          |
|                    | | *ipv4-unicast*   | Use IPv4 unicast addressing over the VXLAN.            |                          |
|                    | +------------------+--------------------------------------------------------+                          |
|                    | | *ipv6-unicast*   | Use IPv6 unicast addressing over the VXLAN.            |                          |
|                    | +------------------+--------------------------------------------------------+                          |
|                    | | *ipv4-multicast* | Use IPv4 multicast addressing over the VXLAN.          |                          |
|                    | +------------------+--------------------------------------------------------+                          |
|                    | | *ipv6-multicast* | Use IPv6 multicast addressing over the VXLAN.          |                          |
|                    | +------------------+--------------------------------------------------------+                          |
+--------------------+-----------------------------------+----------------------+----------------------+----------------------+
| learn-from-traffic | Enable/disable VXLAN MAC learning | option               | \-                   | disable              |
|                    | from traffic.                     |                      |                      |                      |
+--------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                    | +-------------+--------------------------------------------------------+                               |
|                    | | Option      | Description                                            |                               |
|                    | +=============+========================================================+                               |
|                    | | *enable*    | Enable VXLAN MAC learning from traffic.                |                               |
|                    | +-------------+--------------------------------------------------------+                               |
|                    | | *disable*   | Disable VXLAN MAC learning from traffic.               |                               |
|                    | +-------------+--------------------------------------------------------+                               |
+--------------------+-----------------------------------+----------------------+----------------------+----------------------+
| multicast-ttl      | VXLAN multicast TTL.              | integer              | Minimum value: 1     | 0                    |
|                    |                                   |                      | Maximum value: 255   |                      |
+--------------------+-----------------------------------+----------------------+----------------------+----------------------+
| name               | VXLAN device or interface name.   | string               | Maximum length: 15   |                      |
|                    | Must be a unique interface name.  |                      |                      |                      |
+--------------------+-----------------------------------+----------------------+----------------------+----------------------+
| remote-ip `<ip>`   | IPv4 address of the VXLAN         | string               | Maximum length: 15   |                      |
|                    | interface on the device at the    |                      |                      |                      |
|                    | remote end of the VXLAN.          |                      |                      |                      |
|                    |                                   |                      |                      |                      |
|                    | IPv4 address.                     |                      |                      |                      |
+--------------------+-----------------------------------+----------------------+----------------------+----------------------+
| remote-ip6 `<ip6>` | IPv6 IP address of the VXLAN      | string               | Maximum length: 45   |                      |
|                    | interface on the device at the    |                      |                      |                      |
|                    | remote end of the VXLAN.          |                      |                      |                      |
|                    |                                   |                      |                      |                      |
|                    | IPv6 address.                     |                      |                      |                      |
+--------------------+-----------------------------------+----------------------+----------------------+----------------------+
| vni                | VXLAN network ID.                 | integer              | Minimum value: 1     | 0                    |
|                    |                                   |                      | Maximum value:       |                      |
|                    |                                   |                      | 16777215             |                      |
+--------------------+-----------------------------------+----------------------+----------------------+----------------------+

