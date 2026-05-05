# config router ospf6

Configure IPv6 OSPF.

## Syntax

```
config router ospf6
    Description: Configure IPv6 OSPF.
    set abr-type [cisco|ibm|...]
    config area
        Description: OSPF6 area configuration.
        edit <id>
            set default-cost {integer}
            set nssa-translator-role [candidate|never|...]
            set stub-type [no-summary|summary]
            set type [regular|nssa|...]
            set nssa-default-information-originate [enable|disable]
            set nssa-default-information-originate-metric {integer}
            set nssa-default-information-originate-metric-type [1|2]
            set nssa-redistribution [enable|disable]
            set authentication [none|ah|...]
            set key-rollover-interval {integer}
            set ipsec-auth-alg [md5|sha1|...]
            set ipsec-enc-alg [null|des|...]
            config ipsec-keys
                Description: IPsec authentication and encryption keys.
                edit <spi>
                    set auth-key {password}
                    set enc-key {password}
                next
            end
            config range
                Description: OSPF6 area range configuration.
                edit <id>
                    set prefix6 {ipv6-network}
                    set advertise [disable|enable]
                next
            end
            config virtual-link
                Description: OSPF6 virtual link configuration.
                edit <name>
                    set dead-interval {integer}
                    set hello-interval {integer}
                    set retransmit-interval {integer}
                    set transmit-delay {integer}
                    set peer {ipv4-address-any}
                    set authentication [none|ah|...]
                    set key-rollover-interval {integer}
                    set ipsec-auth-alg [md5|sha1|...]
                    set ipsec-enc-alg [null|des|...]
                    config ipsec-keys
                        Description: IPsec authentication and encryption keys.
                        edit <spi>
                            set auth-key {password}
                            set enc-key {password}
                        next
                    end
                next
            end
        next
    end
    set auto-cost-ref-bandwidth {integer}
    set bfd [enable|disable]
    set default-information-metric {integer}
    set default-information-metric-type [1|2]
    set default-information-originate [enable|always|...]
    set default-information-route-map {string}
    set default-metric {integer}
    set log-neighbour-changes [enable|disable]
    config ospf6-interface
        Description: OSPF6 interface configuration.
        edit <name>
            set area-id {ipv4-address-any}
            set interface {string}
            set retransmit-interval {integer}
            set transmit-delay {integer}
            set cost {integer}
            set priority {integer}
            set dead-interval {integer}
            set hello-interval {integer}
            set status [disable|enable]
            set network-type [broadcast|point-to-point|...]
            set bfd [global|enable|...]
            set mtu {integer}
            set mtu-ignore [enable|disable]
            set authentication [none|ah|...]
            set key-rollover-interval {integer}
            set ipsec-auth-alg [md5|sha1|...]
            set ipsec-enc-alg [null|des|...]
            config ipsec-keys
                Description: IPsec authentication and encryption keys.
                edit <spi>
                    set auth-key {password}
                    set enc-key {password}
                next
            end
            config neighbor
                Description: OSPFv3 neighbors are used when OSPFv3 runs on non-broadcast media.
                edit <ip6>
                    set poll-interval {integer}
                    set cost {integer}
                    set priority {integer}
                next
            end
        next
    end
    set passive-interface <name1>, <name2>, ...
    config redistribute
        Description: Redistribute configuration.
        edit <name>
            set status [enable|disable]
            set metric {integer}
            set routemap {string}
            set metric-type [1|2]
        next
    end
    set restart-mode [none|graceful-restart]
    set restart-on-topology-change [enable|disable]
    set restart-period {integer}
    set router-id {ipv4-address-any}
    set spf-timers {user}
    config summary-address
        Description: IPv6 address summary configuration.
        edit <id>
            set prefix6 {ipv6-network}
            set advertise [disable|enable]
            set tag {integer}
        next
    end
end
```

## Parameters

+---------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| Parameter                       | Description                       | Type                   | Size                   | Default                |
+=================================+===================================+========================+========================+========================+
| abr-type                        | Area border router type.          | option                 | \-                     | standard               |
+---------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                 | +-------------+--------------------------------------------------------+                                     |
|                                 | | Option      | Description                                            |                                     |
|                                 | +=============+========================================================+                                     |
|                                 | | *cisco*     | Cisco.                                                 |                                     |
|                                 | +-------------+--------------------------------------------------------+                                     |
|                                 | | *ibm*       | IBM.                                                   |                                     |
|                                 | +-------------+--------------------------------------------------------+                                     |
|                                 | | *standard*  | Standard.                                              |                                     |
|                                 | +-------------+--------------------------------------------------------+                                     |
+---------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| auto-cost-ref-bandwidth         | Reference bandwidth in terms of   | integer                | Minimum value: 1       | 1000                   |
|                                 | megabits per second.              |                        | Maximum value: 1000000 |                        |
+---------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| bfd                             | Enable/disable Bidirectional      | option                 | \-                     | disable                |
|                                 | Forwarding Detection (BFD).       |                        |                        |                        |
+---------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                 | +-------------+--------------------------------------------------------+                                     |
|                                 | | Option      | Description                                            |                                     |
|                                 | +=============+========================================================+                                     |
|                                 | | *enable*    | Enable Bidirectional Forwarding Detection (BFD).       |                                     |
|                                 | +-------------+--------------------------------------------------------+                                     |
|                                 | | *disable*   | Disable Bidirectional Forwarding Detection (BFD).      |                                     |
|                                 | +-------------+--------------------------------------------------------+                                     |
+---------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| default-information-metric      | Default information metric.       | integer                | Minimum value: 1       | 10                     |
|                                 |                                   |                        | Maximum value:         |                        |
|                                 |                                   |                        | 16777214               |                        |
+---------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| default-information-metric-type | Default information metric type.  | option                 | \-                     | 2                      |
+---------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                 | +-------------+--------------------------------------------------------+                                     |
|                                 | | Option      | Description                                            |                                     |
|                                 | +=============+========================================================+                                     |
|                                 | | *1*         | Type 1.                                                |                                     |
|                                 | +-------------+--------------------------------------------------------+                                     |
|                                 | | *2*         | Type 2.                                                |                                     |
|                                 | +-------------+--------------------------------------------------------+                                     |
+---------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| default-information-originate   | Enable/disable generation of      | option                 | \-                     | disable                |
|                                 | default route.                    |                        |                        |                        |
+---------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                 | +-------------+--------------------------------------------------------+                                     |
|                                 | | Option      | Description                                            |                                     |
|                                 | +=============+========================================================+                                     |
|                                 | | *enable*    | Enable setting.                                        |                                     |
|                                 | +-------------+--------------------------------------------------------+                                     |
|                                 | | *always*    | Always advertise the default router.                   |                                     |
|                                 | +-------------+--------------------------------------------------------+                                     |
|                                 | | *disable*   | Disable setting.                                       |                                     |
|                                 | +-------------+--------------------------------------------------------+                                     |
+---------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| default-information-route-map   | Default information route map.    | string                 | Maximum length: 35     |                        |
+---------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| default-metric                  | Default metric of redistribute    | integer                | Minimum value: 1       | 10                     |
|                                 | routes.                           |                        | Maximum value:         |                        |
|                                 |                                   |                        | 16777214               |                        |
+---------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| log-neighbour-changes           | Log OSPFv3 neighbor changes.      | option                 | \-                     | enable                 |
+---------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                 | +-------------+--------------------------------------------------------+                                     |
|                                 | | Option      | Description                                            |                                     |
|                                 | +=============+========================================================+                                     |
|                                 | | *enable*    | Enable setting.                                        |                                     |
|                                 | +-------------+--------------------------------------------------------+                                     |
|                                 | | *disable*   | Disable setting.                                       |                                     |
|                                 | +-------------+--------------------------------------------------------+                                     |
+---------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| passive-interface `<name>`      | Passive interface configuration.  | string                 | Maximum length: 79     |                        |
|                                 |                                   |                        |                        |                        |
|                                 | Passive interface name.           |                        |                        |                        |
+---------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| restart-mode                    | OSPFv3 restart mode (graceful or  | option                 | \-                     | none                   |
|                                 | none).                            |                        |                        |                        |
+---------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                 | +--------------------+--------------------------------------------------------+                              |
|                                 | | Option             | Description                                            |                              |
|                                 | +====================+========================================================+                              |
|                                 | | *none*             | Disable hitless restart.                               |                              |
|                                 | +--------------------+--------------------------------------------------------+                              |
|                                 | | *graceful-restart* | Enable graceful restart mode.                          |                              |
|                                 | +--------------------+--------------------------------------------------------+                              |
+---------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| restart-on-topology-change      | Enable/disable continuing         | option                 | \-                     | disable                |
|                                 | graceful restart upon topology    |                        |                        |                        |
|                                 | change.                           |                        |                        |                        |
+---------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                 | +-------------+--------------------------------------------------------+                                     |
|                                 | | Option      | Description                                            |                                     |
|                                 | +=============+========================================================+                                     |
|                                 | | *enable*    | Continue graceful restart upon topology change.        |                                     |
|                                 | +-------------+--------------------------------------------------------+                                     |
|                                 | | *disable*   | Exit graceful restart upon topology change.            |                                     |
|                                 | +-------------+--------------------------------------------------------+                                     |
+---------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| restart-period                  | Graceful restart period in        | integer                | Minimum value: 1       | 120                    |
|                                 | seconds.                          |                        | Maximum value: 3600    |                        |
+---------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| router-id                       | A.B.C.D, in IPv4 address format.  | ipv4-address-any       | Not Specified          | 0.0.0.0                |
+---------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| spf-timers                      | SPF calculation frequency.        | user                   | Not Specified          |                        |
+---------------------------------+-----------------------------------+------------------------+------------------------+------------------------+

