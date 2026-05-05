# config system geneve

Configure GENEVE devices.

## Syntax

```
config system geneve
    Description: Configure GENEVE devices.
    edit <name>
        set dstport {integer}
        set interface {string}
        set ip-version [ipv4-unicast|ipv6-unicast]
        set remote-ip {ipv4-address}
        set remote-ip6 {ipv6-address}
        set type [ethernet|ppp]
        set vni {integer}
    next
end
```

## Parameters

+------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| Parameter  | Description                       | Type                  | Size                  | Default               |
+============+===================================+=======================+=======================+=======================+
| dstport    | GENEVE destination port.          | integer               | Minimum value: 1      | 6081                  |
|            |                                   |                       | Maximum value: 65535  |                       |
+------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| interface  | Outgoing interface for GENEVE     | string                | Maximum length: 15    |                       |
|            | encapsulated traffic.             |                       |                       |                       |
+------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| ip-version | IP version to use for the GENEVE  | option                | \-                    | ipv4-unicast          |
|            | interface and so for              |                       |                       |                       |
|            | communication over the GENEVE.    |                       |                       |                       |
|            | IPv4 or IPv6 unicast.             |                       |                       |                       |
+------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|            | +----------------+--------------------------------------------------------+                               |
|            | | Option         | Description                                            |                               |
|            | +================+========================================================+                               |
|            | | *ipv4-unicast* | Use IPv4 unicast addressing over the GENEVE.           |                               |
|            | +----------------+--------------------------------------------------------+                               |
|            | | *ipv6-unicast* | Use IPv6 unicast addressing over the GENEVE.           |                               |
|            | +----------------+--------------------------------------------------------+                               |
+------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| name       | GENEVE device or interface name.  | string                | Maximum length: 15    |                       |
|            | Must be an unique interface name. |                       |                       |                       |
+------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| remote-ip  | IPv4 address of the GENEVE        | ipv4-address          | Not Specified         | 0.0.0.0               |
|            | interface on the device at the    |                       |                       |                       |
|            | remote end of the GENEVE.         |                       |                       |                       |
+------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| remote-ip6 | IPv6 IP address of the GENEVE     | ipv6-address          | Not Specified         | ::                    |
|            | interface on the device at the    |                       |                       |                       |
|            | remote end of the GENEVE.         |                       |                       |                       |
+------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| type       | GENEVE type.                      | option                | \-                    | ethernet              |
+------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|            | +-------------+--------------------------------------------------------+                                  |
|            | | Option      | Description                                            |                                  |
|            | +=============+========================================================+                                  |
|            | | *ethernet*  | Internal packet includes Ethernet header.              |                                  |
|            | +-------------+--------------------------------------------------------+                                  |
|            | | *ppp*       | Internal packet does not include Ethernet header.      |                                  |
|            | +-------------+--------------------------------------------------------+                                  |
+------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| vni        | GENEVE network ID.                | integer               | Minimum value: 0      | 0                     |
|            |                                   |                       | Maximum value:        |                       |
|            |                                   |                       | 16777215              |                       |
+------------+-----------------------------------+-----------------------+-----------------------+-----------------------+

