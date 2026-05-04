# config router ospf

Configure OSPF.

## Syntax

```
config router ospf
    Description: Configure OSPF.
    set abr-type [cisco|ibm|...]
    config area
        Description: OSPF area configuration.
        edit <id>
            set authentication [none|text|...]
            set comments {var-string}
            set default-cost {integer}
            config filter-list
                Description: OSPF area filter-list configuration.
                edit <id>
                    set direction [in|out]
                    set list {string}
                next
            end
            set nssa-default-information-originate [enable|always|...]
            set nssa-default-information-originate-metric {integer}
            set nssa-default-information-originate-metric-type [1|2]
            set nssa-redistribution [enable|disable]
            set nssa-translator-role [candidate|never|...]
            config range
                Description: OSPF area range configuration.
                edit <id>
                    set advertise [disable|enable]
                    set prefix {ipv4-classnet-any}
                    set substitute {ipv4-classnet-any}
                    set substitute-status [enable|disable]
                next
            end
            set shortcut [disable|enable|...]
            set stub-type [no-summary|summary]
            set type [regular|nssa|...]
            config virtual-link
                Description: OSPF virtual link configuration.
                edit <name>
                    set authentication [none|text|...]
                    set authentication-key {password}
                    set dead-interval {integer}
                    set hello-interval {integer}
                    set keychain {string}
                    config md5-keys
                        Description: MD5 key.
                        edit <id>
                            set key-string {password}
                        next
                    end
                    set peer {ipv4-address-any}
                    set retransmit-interval {integer}
                    set transmit-delay {integer}
                next
            end
        next
    end
    set auto-cost-ref-bandwidth {integer}
    set bfd [enable|disable]
    set database-overflow [enable|disable]
    set database-overflow-max-lsas {integer}
    set database-overflow-time-to-recover {integer}
    set default-information-metric {integer}
    set default-information-metric-type [1|2]
    set default-information-originate [enable|always|...]
    set default-information-route-map {string}
    set default-metric {integer}
    set distance {integer}
    set distance-external {integer}
    set distance-inter-area {integer}
    set distance-intra-area {integer}
    config distribute-list
        Description: Distribute list configuration.
        edit <id>
            set access-list {string}
            set protocol [connected|static|...]
        next
    end
    set distribute-list-in {string}
    set distribute-route-map-in {string}
    set log-neighbour-changes [enable|disable]
    set lsa-refresh-interval {integer}
    config neighbor
        Description: OSPF neighbor configuration are used when OSPF runs on non-broadcast media.
        edit <id>
            set cost {integer}
            set ip {ipv4-address}
            set poll-interval {integer}
            set priority {integer}
        next
    end
    config network
        Description: OSPF network configuration.
        edit <id>
            set area {ipv4-address-any}
            set comments {var-string}
            set prefix {ipv4-classnet}
        next
    end
    config ospf-interface
        Description: OSPF interface configuration.
        edit <name>
            set authentication [none|text|...]
            set authentication-key {password}
            set bfd [global|enable|...]
            set comments {var-string}
            set cost {integer}
            set database-filter-out [enable|disable]
            set dead-interval {integer}
            set hello-interval {integer}
            set hello-multiplier {integer}
            set interface {string}
            set ip {ipv4-address}
            set keychain {string}
            set linkdown-fast-failover [enable|disable]
            config md5-keys
                Description: MD5 key.
                edit <id>
                    set key-string {password}
                next
            end
            set mtu {integer}
            set mtu-ignore [enable|disable]
            set network-type [broadcast|non-broadcast|...]
            set prefix-length {integer}
            set priority {integer}
            set resync-timeout {integer}
            set retransmit-interval {integer}
            set status [disable|enable]
            set transmit-delay {integer}
        next
    end
    set passive-interface <name1>, <name2>, ...
    config redistribute
        Description: Redistribute configuration. Read-only.
        edit <name>
            set metric {integer}
            set metric-type [1|2]
            set routemap {string}
            set status [enable|disable]
            set tag {integer}
        next
    end
    set restart-mode [none|lls|...]
    set restart-on-topology-change [enable|disable]
    set restart-period {integer}
    set rfc1583-compatible [enable|disable]
    set router-id {ipv4-address-any}
    set spf-timers {user}
    config summary-address
        Description: IP address summary configuration.
        edit <id>
            set advertise [disable|enable]
            set prefix {ipv4-classnet}
            set tag {integer}
        next
    end
end
```

## Parameters

+-----------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| Parameter                         | Description                       | Type                   | Size                   | Default                |
+===================================+===================================+========================+========================+========================+
| abr-type                          | Area border router type.          | option                 | \-                     | standard               |
+-----------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                   | +-------------+--------------------------------------------------------+                                     |
|                                   | | Option      | Description                                            |                                     |
|                                   | +=============+========================================================+                                     |
|                                   | | *cisco*     | Cisco.                                                 |                                     |
|                                   | +-------------+--------------------------------------------------------+                                     |
|                                   | | *ibm*       | IBM.                                                   |                                     |
|                                   | +-------------+--------------------------------------------------------+                                     |
|                                   | | *shortcut*  | Shortcut.                                              |                                     |
|                                   | +-------------+--------------------------------------------------------+                                     |
|                                   | | *standard*  | Standard.                                              |                                     |
|                                   | +-------------+--------------------------------------------------------+                                     |
+-----------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| auto-cost-ref-bandwidth           | Reference bandwidth in terms of   | integer                | Minimum value: 1       | 1000                   |
|                                   | megabits per second.              |                        | Maximum value: 1000000 |                        |
+-----------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| bfd                               | Bidirectional Forwarding          | option                 | \-                     | disable                |
|                                   | Detection (BFD).                  |                        |                        |                        |
+-----------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                   | +-------------+--------------------------------------------------------+                                     |
|                                   | | Option      | Description                                            |                                     |
|                                   | +=============+========================================================+                                     |
|                                   | | *enable*    | Enable setting.                                        |                                     |
|                                   | +-------------+--------------------------------------------------------+                                     |
|                                   | | *disable*   | Disable setting.                                       |                                     |
|                                   | +-------------+--------------------------------------------------------+                                     |
+-----------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| database-overflow                 | Enable/disable database overflow. | option                 | \-                     | disable                |
+-----------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                   | +-------------+--------------------------------------------------------+                                     |
|                                   | | Option      | Description                                            |                                     |
|                                   | +=============+========================================================+                                     |
|                                   | | *enable*    | Enable setting.                                        |                                     |
|                                   | +-------------+--------------------------------------------------------+                                     |
|                                   | | *disable*   | Disable setting.                                       |                                     |
|                                   | +-------------+--------------------------------------------------------+                                     |
+-----------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| database-overflow-max-lsas        | Database overflow maximum LSAs.   | integer                | Minimum value: 0       | 10000                  |
|                                   |                                   |                        | Maximum value:         |                        |
|                                   |                                   |                        | 4294967295             |                        |
+-----------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| database-overflow-time-to-recover | Database overflow time to recover | integer                | Minimum value: 0       | 300                    |
|                                   | (sec).                            |                        | Maximum value: 65535   |                        |
+-----------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| default-information-metric        | Default information metric.       | integer                | Minimum value: 1       | 10                     |
|                                   |                                   |                        | Maximum value:         |                        |
|                                   |                                   |                        | 16777214               |                        |
+-----------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| default-information-metric-type   | Default information metric type.  | option                 | \-                     | 2                      |
+-----------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                   | +-------------+--------------------------------------------------------+                                     |
|                                   | | Option      | Description                                            |                                     |
|                                   | +=============+========================================================+                                     |
|                                   | | *1*         | Type 1.                                                |                                     |
|                                   | +-------------+--------------------------------------------------------+                                     |
|                                   | | *2*         | Type 2.                                                |                                     |
|                                   | +-------------+--------------------------------------------------------+                                     |
+-----------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| default-information-originate     | Enable/disable generation of      | option                 | \-                     | disable                |
|                                   | default route.                    |                        |                        |                        |
+-----------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                   | +-------------+--------------------------------------------------------+                                     |
|                                   | | Option      | Description                                            |                                     |
|                                   | +=============+========================================================+                                     |
|                                   | | *enable*    | Enable setting.                                        |                                     |
|                                   | +-------------+--------------------------------------------------------+                                     |
|                                   | | *always*    | Always advertise the default route.                    |                                     |
|                                   | +-------------+--------------------------------------------------------+                                     |
|                                   | | *disable*   | Disable setting.                                       |                                     |
|                                   | +-------------+--------------------------------------------------------+                                     |
+-----------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| default-information-route-map     | Default information route map.    | string                 | Maximum length: 35     |                        |
+-----------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| default-metric                    | Default metric of redistribute    | integer                | Minimum value: 1       | 10                     |
|                                   | routes.                           |                        | Maximum value:         |                        |
|                                   |                                   |                        | 16777214               |                        |
+-----------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| distance                          | Distance of the route.            | integer                | Minimum value: 1       | 110                    |
|                                   |                                   |                        | Maximum value: 255     |                        |
+-----------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| distance-external                 | Administrative external distance. | integer                | Minimum value: 1       | 110                    |
|                                   |                                   |                        | Maximum value: 255     |                        |
+-----------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| distance-inter-area               | Administrative inter-area         | integer                | Minimum value: 1       | 110                    |
|                                   | distance.                         |                        | Maximum value: 255     |                        |
+-----------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| distance-intra-area               | Administrative intra-area         | integer                | Minimum value: 1       | 110                    |
|                                   | distance.                         |                        | Maximum value: 255     |                        |
+-----------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| distribute-list-in                | Filter incoming routes.           | string                 | Maximum length: 35     |                        |
+-----------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| distribute-route-map-in           | Filter incoming external routes   | string                 | Maximum length: 35     |                        |
|                                   | by route-map.                     |                        |                        |                        |
+-----------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| log-neighbour-changes             | Log of OSPF neighbor changes.     | option                 | \-                     | enable                 |
+-----------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                   | +-------------+--------------------------------------------------------+                                     |
|                                   | | Option      | Description                                            |                                     |
|                                   | +=============+========================================================+                                     |
|                                   | | *enable*    | Enable setting.                                        |                                     |
|                                   | +-------------+--------------------------------------------------------+                                     |
|                                   | | *disable*   | Disable setting.                                       |                                     |
|                                   | +-------------+--------------------------------------------------------+                                     |
+-----------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| lsa-refresh-interval              | The minimal OSPF LSA update time  | integer                | Minimum value: 0       | 5                      |
|                                   | interval.                         |                        | Maximum value: 5       |                        |
+-----------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| passive-interface `<name>`        | Passive interface configuration.  | string                 | Maximum length: 79     |                        |
|                                   |                                   |                        |                        |                        |
|                                   | Passive interface name.           |                        |                        |                        |
+-----------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| restart-mode                      | OSPF restart mode (graceful or    | option                 | \-                     | none                   |
|                                   | LLS).                             |                        |                        |                        |
+-----------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                   | +--------------------+--------------------------------------------------------+                              |
|                                   | | Option             | Description                                            |                              |
|                                   | +====================+========================================================+                              |
|                                   | | *none*             | Hitless restart disabled.                              |                              |
|                                   | +--------------------+--------------------------------------------------------+                              |
|                                   | | *lls*              | LLS mode.                                              |                              |
|                                   | +--------------------+--------------------------------------------------------+                              |
|                                   | | *graceful-restart* | Graceful Restart Mode.                                 |                              |
|                                   | +--------------------+--------------------------------------------------------+                              |
+-----------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| restart-on-topology-change        | Enable/disable continuing         | option                 | \-                     | disable                |
|                                   | graceful restart upon topology    |                        |                        |                        |
|                                   | change.                           |                        |                        |                        |
+-----------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                   | +-------------+--------------------------------------------------------+                                     |
|                                   | | Option      | Description                                            |                                     |
|                                   | +=============+========================================================+                                     |
|                                   | | *enable*    | Continue graceful restart upon topology change.        |                                     |
|                                   | +-------------+--------------------------------------------------------+                                     |
|                                   | | *disable*   | Exit graceful restart upon topology change.            |                                     |
|                                   | +-------------+--------------------------------------------------------+                                     |
+-----------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| restart-period                    | Graceful restart period.          | integer                | Minimum value: 1       | 120                    |
|                                   |                                   |                        | Maximum value: 3600    |                        |
+-----------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| rfc1583-compatible                | Enable/disable RFC1583            | option                 | \-                     | disable                |
|                                   | compatibility.                    |                        |                        |                        |
+-----------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                   | +-------------+--------------------------------------------------------+                                     |
|                                   | | Option      | Description                                            |                                     |
|                                   | +=============+========================================================+                                     |
|                                   | | *enable*    | Enable setting.                                        |                                     |
|                                   | +-------------+--------------------------------------------------------+                                     |
|                                   | | *disable*   | Disable setting.                                       |                                     |
|                                   | +-------------+--------------------------------------------------------+                                     |
+-----------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| router-id                         | Router ID.                        | ipv4-address-any       | Not Specified          | 0.0.0.0                |
+-----------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| spf-timers                        | SPF calculation frequency.        | user                   | Not Specified          |                        |
+-----------------------------------+-----------------------------------+------------------------+------------------------+------------------------+

