# config wireless-controller wag-profile

Configure wireless access gateway (WAG) profiles used for tunnels on AP.

## Syntax

```
config wireless-controller wag-profile
    Description: Configure wireless access gateway (WAG) profiles used for tunnels on AP.
    edit <name>
        set comment {var-string}
        set dhcp-ip-addr {ipv4-address}
        set ping-interval {integer}
        set ping-number {integer}
        set return-packet-timeout {integer}
        set tunnel-type [l2tpv3|gre]
        set wag-ip {ipv4-address}
        set wag-port {integer}
    next
end
```

## Parameters

+-----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter             | Description                       | Type               | Size               | Default            |
+=======================+===================================+====================+====================+====================+
| comment               | Comment.                          | var-string         | Maximum length:    |                    |
|                       |                                   |                    | 255                |                    |
+-----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| dhcp-ip-addr          | IP address of the monitoring DHCP | ipv4-address       | Not Specified      | 0.0.0.0            |
|                       | request packet sent through the   |                    |                    |                    |
|                       | tunnel.                           |                    |                    |                    |
+-----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| name                  | Tunnel profile name.              | string             | Maximum length: 35 |                    |
+-----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ping-interval         | Interval between two tunnel       | integer            | Minimum value: 1   | 1                  |
|                       | monitoring echo packets (1 -      |                    | Maximum value:     |                    |
|                       | 65535 sec, default = 1).          |                    | 65535              |                    |
+-----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ping-number           | Number of the tunnel monitoring   | integer            | Minimum value: 1   | 5                  |
|                       | echo packets (1 - 65535, default  |                    | Maximum value:     |                    |
|                       | = 5).                             |                    | 65535              |                    |
+-----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| return-packet-timeout | Window of time for the return     | integer            | Minimum value: 1   | 160                |
|                       | packets from the tunnel\'s remote |                    | Maximum value:     |                    |
|                       | end (1 - 65535 sec, default =     |                    | 65535              |                    |
|                       | 160).                             |                    |                    |                    |
+-----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| tunnel-type           | Tunnel type.                      | option             | \-                 | l2tpv3             |
+-----------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                       | +-------------+--------------------------------------------------------+                         |
|                       | | Option      | Description                                            |                         |
|                       | +=============+========================================================+                         |
|                       | | *l2tpv3*    | L2TPV3 Ethernet Pseudowire.                            |                         |
|                       | +-------------+--------------------------------------------------------+                         |
|                       | | *gre*       | GRE Ethernet tunnel.                                   |                         |
|                       | +-------------+--------------------------------------------------------+                         |
+-----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| wag-ip                | IP Address of the wireless access | ipv4-address       | Not Specified      | 0.0.0.0            |
|                       | gateway.                          |                    |                    |                    |
+-----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| wag-port              | UDP port of the wireless access   | integer            | Minimum value: 0   | 1701               |
|                       | gateway.                          |                    | Maximum value:     |                    |
|                       |                                   |                    | 65535              |                    |
+-----------------------+-----------------------------------+--------------------+--------------------+--------------------+

