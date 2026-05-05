# config router bgp

Configure BGP.

## Syntax

```
config router bgp
    Description: Configure BGP.
    set additional-path [enable|disable]
    set additional-path-select {integer}
    set additional-path-select-vpnv4 {integer}
    set additional-path-select6 {integer}
    set additional-path-vpnv4 [enable|disable]
    set additional-path6 [enable|disable]
    config admin-distance
        Description: Administrative distance modifications.
        edit <id>
            set neighbour-prefix {ipv4-classnet}
            set route-list {string}
            set distance {integer}
        next
    end
    config aggregate-address
        Description: BGP aggregate address table.
        edit <id>
            set prefix {ipv4-classnet-any}
            set as-set [enable|disable]
            set summary-only [enable|disable]
        next
    end
    config aggregate-address6
        Description: BGP IPv6 aggregate address table.
        edit <id>
            set prefix6 {ipv6-prefix}
            set as-set [enable|disable]
            set summary-only [enable|disable]
        next
    end
    set always-compare-med [enable|disable]
    set as {user}
    set bestpath-as-path-ignore [enable|disable]
    set bestpath-cmp-confed-aspath [enable|disable]
    set bestpath-cmp-routerid [enable|disable]
    set bestpath-med-confed [enable|disable]
    set bestpath-med-missing-as-worst [enable|disable]
    set client-to-client-reflection [enable|disable]
    set cluster-id {ipv4-address-any}
    set confederation-identifier {integer}
    set confederation-peers <peer1>, <peer2>, ...
    set cross-family-conditional-adv [enable|disable]
    set dampening [enable|disable]
    set dampening-max-suppress-time {integer}
    set dampening-reachability-half-life {integer}
    set dampening-reuse {integer}
    set dampening-route-map {string}
    set dampening-suppress {integer}
    set dampening-unreachability-half-life {integer}
    set default-local-preference {integer}
    set deterministic-med [enable|disable]
    set distance-external {integer}
    set distance-internal {integer}
    set distance-local {integer}
    set ebgp-multipath [enable|disable]
    set enforce-first-as [enable|disable]
    set fast-external-failover [enable|disable]
    set graceful-end-on-timer [enable|disable]
    set graceful-restart [enable|disable]
    set graceful-restart-time {integer}
    set graceful-stalepath-time {integer}
    set graceful-update-delay {integer}
    set holdtime-timer {integer}
    set ibgp-multipath [enable|disable]
    set ignore-optional-capability [enable|disable]
    set keepalive-timer {integer}
    set log-neighbour-changes [enable|disable]
    set multipath-recursive-distance [enable|disable]
    config neighbor
        Description: BGP neighbor table.
        edit <ip>
            set advertisement-interval {integer}
            set allowas-in-enable [enable|disable]
            set allowas-in-enable6 [enable|disable]
            set allowas-in-enable-vpnv4 [enable|disable]
            set allowas-in-enable-evpn [enable|disable]
            set allowas-in {integer}
            set allowas-in6 {integer}
            set allowas-in-vpnv4 {integer}
            set allowas-in-evpn {integer}
            set attribute-unchanged {option1}, {option2}, ...
            set attribute-unchanged6 {option1}, {option2}, ...
            set attribute-unchanged-vpnv4 {option1}, {option2}, ...
            set activate [enable|disable]
            set activate6 [enable|disable]
            set activate-vpnv4 [enable|disable]
            set activate-evpn [enable|disable]
            set bfd [enable|disable]
            set capability-dynamic [enable|disable]
            set capability-orf [none|receive|...]
            set capability-orf6 [none|receive|...]
            set capability-graceful-restart [enable|disable]
            set capability-graceful-restart6 [enable|disable]
            set capability-graceful-restart-vpnv4 [enable|disable]
            set capability-graceful-restart-evpn [enable|disable]
            set capability-route-refresh [enable|disable]
            set capability-default-originate [enable|disable]
            set capability-default-originate6 [enable|disable]
            set dont-capability-negotiate [enable|disable]
            set ebgp-enforce-multihop [enable|disable]
            set link-down-failover [enable|disable]
            set stale-route [enable|disable]
            set next-hop-self [enable|disable]
            set next-hop-self6 [enable|disable]
            set next-hop-self-rr [enable|disable]
            set next-hop-self-rr6 [enable|disable]
            set next-hop-self-vpnv4 [enable|disable]
            set override-capability [enable|disable]
            set passive [enable|disable]
            set remove-private-as [enable|disable]
            set remove-private-as6 [enable|disable]
            set remove-private-as-vpnv4 [enable|disable]
            set remove-private-as-evpn [enable|disable]
            set route-reflector-client [enable|disable]
            set route-reflector-client6 [enable|disable]
            set route-reflector-client-vpnv4 [enable|disable]
            set route-reflector-client-evpn [enable|disable]
            set route-server-client [enable|disable]
            set route-server-client6 [enable|disable]
            set route-server-client-vpnv4 [enable|disable]
            set route-server-client-evpn [enable|disable]
            set shutdown [enable|disable]
            set soft-reconfiguration [enable|disable]
            set soft-reconfiguration6 [enable|disable]
            set soft-reconfiguration-vpnv4 [enable|disable]
            set soft-reconfiguration-evpn [enable|disable]
            set as-override [enable|disable]
            set as-override6 [enable|disable]
            set strict-capability-match [enable|disable]
            set default-originate-routemap {string}
            set default-originate-routemap6 {string}
            set description {string}
            set distribute-list-in {string}
            set distribute-list-in6 {string}
            set distribute-list-in-vpnv4 {string}
            set distribute-list-out {string}
            set distribute-list-out6 {string}
            set distribute-list-out-vpnv4 {string}
            set ebgp-multihop-ttl {integer}
            set filter-list-in {string}
            set filter-list-in6 {string}
            set filter-list-in-vpnv4 {string}
            set filter-list-out {string}
            set filter-list-out6 {string}
            set filter-list-out-vpnv4 {string}
            set interface {string}
            set maximum-prefix {integer}
            set maximum-prefix6 {integer}
            set maximum-prefix-vpnv4 {integer}
            set maximum-prefix-evpn {integer}
            set maximum-prefix-threshold {integer}
            set maximum-prefix-threshold6 {integer}
            set maximum-prefix-threshold-vpnv4 {integer}
            set maximum-prefix-threshold-evpn {integer}
            set maximum-prefix-warning-only [enable|disable]
            set maximum-prefix-warning-only6 [enable|disable]
            set maximum-prefix-warning-only-vpnv4 [enable|disable]
            set maximum-prefix-warning-only-evpn [enable|disable]
            set prefix-list-in {string}
            set prefix-list-in6 {string}
            set prefix-list-in-vpnv4 {string}
            set prefix-list-out {string}
            set prefix-list-out6 {string}
            set prefix-list-out-vpnv4 {string}
            set remote-as {user}
            set local-as {user}
            set local-as-no-prepend [enable|disable]
            set local-as-replace-as [enable|disable]
            set retain-stale-time {integer}
            set route-map-in {string}
            set route-map-in6 {string}
            set route-map-in-vpnv4 {string}
            set route-map-in-evpn {string}
            set route-map-out {string}
            set route-map-out-preferable {string}
            set route-map-out6 {string}
            set route-map-out6-preferable {string}
            set route-map-out-vpnv4 {string}
            set route-map-out-vpnv4-preferable {string}
            set route-map-out-evpn {string}
            set send-community [standard|extended|...]
            set send-community6 [standard|extended|...]
            set send-community-vpnv4 [standard|extended|...]
            set send-community-evpn [standard|extended|...]
            set keep-alive-timer {integer}
            set holdtime-timer {integer}
            set connect-timer {integer}
            set unsuppress-map {string}
            set unsuppress-map6 {string}
            set update-source {string}
            set weight {integer}
            set restart-time {integer}
            set additional-path [send|receive|...]
            set additional-path6 [send|receive|...]
            set additional-path-vpnv4 [send|receive|...]
            set adv-additional-path {integer}
            set adv-additional-path6 {integer}
            set adv-additional-path-vpnv4 {integer}
            set password {password}
            config conditional-advertise
                Description: Conditional advertisement.
                edit <advertise-routemap>
                    set condition-routemap <name1>, <name2>, ...
                    set condition-type [exist|non-exist]
                next
            end
            config conditional-advertise6
                Description: IPv6 conditional advertisement.
                edit <advertise-routemap>
                    set condition-routemap <name1>, <name2>, ...
                    set condition-type [exist|non-exist]
                next
            end
        next
    end
    config neighbor-group
        Description: BGP neighbor group table.
        edit <name>
            set advertisement-interval {integer}
            set allowas-in-enable [enable|disable]
            set allowas-in-enable6 [enable|disable]
            set allowas-in-enable-vpnv4 [enable|disable]
            set allowas-in-enable-evpn [enable|disable]
            set allowas-in {integer}
            set allowas-in6 {integer}
            set allowas-in-vpnv4 {integer}
            set allowas-in-evpn {integer}
            set attribute-unchanged {option1}, {option2}, ...
            set attribute-unchanged6 {option1}, {option2}, ...
            set attribute-unchanged-vpnv4 {option1}, {option2}, ...
            set activate [enable|disable]
            set activate6 [enable|disable]
            set activate-vpnv4 [enable|disable]
            set activate-evpn [enable|disable]
            set bfd [enable|disable]
            set capability-dynamic [enable|disable]
            set capability-orf [none|receive|...]
            set capability-orf6 [none|receive|...]
            set capability-graceful-restart [enable|disable]
            set capability-graceful-restart6 [enable|disable]
            set capability-graceful-restart-vpnv4 [enable|disable]
            set capability-graceful-restart-evpn [enable|disable]
            set capability-route-refresh [enable|disable]
            set capability-default-originate [enable|disable]
            set capability-default-originate6 [enable|disable]
            set dont-capability-negotiate [enable|disable]
            set ebgp-enforce-multihop [enable|disable]
            set link-down-failover [enable|disable]
            set stale-route [enable|disable]
            set next-hop-self [enable|disable]
            set next-hop-self6 [enable|disable]
            set next-hop-self-rr [enable|disable]
            set next-hop-self-rr6 [enable|disable]
            set next-hop-self-vpnv4 [enable|disable]
            set override-capability [enable|disable]
            set passive [enable|disable]
            set remove-private-as [enable|disable]
            set remove-private-as6 [enable|disable]
            set remove-private-as-vpnv4 [enable|disable]
            set remove-private-as-evpn [enable|disable]
            set route-reflector-client [enable|disable]
            set route-reflector-client6 [enable|disable]
            set route-reflector-client-vpnv4 [enable|disable]
            set route-reflector-client-evpn [enable|disable]
            set route-server-client [enable|disable]
            set route-server-client6 [enable|disable]
            set route-server-client-vpnv4 [enable|disable]
            set route-server-client-evpn [enable|disable]
            set shutdown [enable|disable]
            set soft-reconfiguration [enable|disable]
            set soft-reconfiguration6 [enable|disable]
            set soft-reconfiguration-vpnv4 [enable|disable]
            set soft-reconfiguration-evpn [enable|disable]
            set as-override [enable|disable]
            set as-override6 [enable|disable]
            set strict-capability-match [enable|disable]
            set default-originate-routemap {string}
            set default-originate-routemap6 {string}
            set description {string}
            set distribute-list-in {string}
            set distribute-list-in6 {string}
            set distribute-list-in-vpnv4 {string}
            set distribute-list-out {string}
            set distribute-list-out6 {string}
            set distribute-list-out-vpnv4 {string}
            set ebgp-multihop-ttl {integer}
            set filter-list-in {string}
            set filter-list-in6 {string}
            set filter-list-in-vpnv4 {string}
            set filter-list-out {string}
            set filter-list-out6 {string}
            set filter-list-out-vpnv4 {string}
            set interface {string}
            set maximum-prefix {integer}
            set maximum-prefix6 {integer}
            set maximum-prefix-vpnv4 {integer}
            set maximum-prefix-evpn {integer}
            set maximum-prefix-threshold {integer}
            set maximum-prefix-threshold6 {integer}
            set maximum-prefix-threshold-vpnv4 {integer}
            set maximum-prefix-threshold-evpn {integer}
            set maximum-prefix-warning-only [enable|disable]
            set maximum-prefix-warning-only6 [enable|disable]
            set maximum-prefix-warning-only-vpnv4 [enable|disable]
            set maximum-prefix-warning-only-evpn [enable|disable]
            set prefix-list-in {string}
            set prefix-list-in6 {string}
            set prefix-list-in-vpnv4 {string}
            set prefix-list-out {string}
            set prefix-list-out6 {string}
            set prefix-list-out-vpnv4 {string}
            set remote-as {user}
            set local-as {user}
            set local-as-no-prepend [enable|disable]
            set local-as-replace-as [enable|disable]
            set retain-stale-time {integer}
            set route-map-in {string}
            set route-map-in6 {string}
            set route-map-in-vpnv4 {string}
            set route-map-in-evpn {string}
            set route-map-out {string}
            set route-map-out-preferable {string}
            set route-map-out6 {string}
            set route-map-out6-preferable {string}
            set route-map-out-vpnv4 {string}
            set route-map-out-vpnv4-preferable {string}
            set route-map-out-evpn {string}
            set send-community [standard|extended|...]
            set send-community6 [standard|extended|...]
            set send-community-vpnv4 [standard|extended|...]
            set send-community-evpn [standard|extended|...]
            set keep-alive-timer {integer}
            set holdtime-timer {integer}
            set connect-timer {integer}
            set unsuppress-map {string}
            set unsuppress-map6 {string}
            set update-source {string}
            set weight {integer}
            set restart-time {integer}
            set additional-path [send|receive|...]
            set additional-path6 [send|receive|...]
            set additional-path-vpnv4 [send|receive|...]
            set adv-additional-path {integer}
            set adv-additional-path6 {integer}
            set adv-additional-path-vpnv4 {integer}
            set password {password}
        next
    end
    config neighbor-range
        Description: BGP neighbor range table.
        edit <id>
            set prefix {ipv4-classnet}
            set max-neighbor-num {integer}
            set neighbor-group {string}
        next
    end
    config neighbor-range6
        Description: BGP IPv6 neighbor range table.
        edit <id>
            set prefix6 {ipv6-network}
            set max-neighbor-num {integer}
            set neighbor-group {string}
        next
    end
    config network
        Description: BGP network table.
        edit <id>
            set prefix {ipv4-classnet}
            set network-import-check [global|enable|...]
            set backdoor [enable|disable]
            set route-map {string}
        next
    end
    set network-import-check [enable|disable]
    config network6
        Description: BGP IPv6 network table.
        edit <id>
            set prefix6 {ipv6-network}
            set network-import-check [global|enable|...]
            set backdoor [enable|disable]
            set route-map {string}
        next
    end
    set recursive-inherit-priority [enable|disable]
    set recursive-next-hop [enable|disable]
    config redistribute
        Description: BGP IPv4 redistribute table.
        edit <name>
            set status [enable|disable]
            set route-map {string}
        next
    end
    config redistribute6
        Description: BGP IPv6 redistribute table.
        edit <name>
            set status [enable|disable]
            set route-map {string}
        next
    end
    set router-id {ipv4-address-any}
    set scan-time {integer}
    set synchronization [enable|disable]
    set tag-resolve-mode [disable|preferred|...]
    config vrf
        Description: BGP VRF leaking table.
        edit <vrf>
            set role [standalone|ce|...]
            set rd {string}
            set export-rt <route-target1>, <route-target2>, ...
            set import-rt <route-target1>, <route-target2>, ...
            set import-route-map {string}
            config leak-target
                Description: Target VRF table.
                edit <vrf>
                    set route-map {string}
                    set interface {string}
                next
            end
        next
    end
    config vrf6
        Description: BGP IPv6 VRF leaking table.
        edit <vrf>
            config leak-target
                Description: Target VRF table.
                edit <vrf>
                    set route-map {string}
                    set interface {string}
                next
            end
        next
    end
end
```

## Parameters

+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter                          | Description                       | Type               | Size               | Default            |
+====================================+===================================+====================+====================+====================+
| additional-path                    | Enable/disable selection of BGP   | option             | \-                 | disable            |
|                                    | IPv4 additional paths.            |                    |                    |                    |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | Option      | Description                                            |                         |
|                                    | +=============+========================================================+                         |
|                                    | | *enable*    | Enable setting.                                        |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | *disable*   | Disable setting.                                       |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| additional-path-select             | Number of additional paths to be  | integer            | Minimum value: 2   | 2                  |
|                                    | selected for each IPv4 NLRI.      |                    | Maximum value: 255 |                    |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| additional-path-select-vpnv4       | Number of additional paths to be  | integer            | Minimum value: 2   | 2                  |
|                                    | selected for each VPNv4 NLRI.     |                    | Maximum value: 255 |                    |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| additional-path-select6            | Number of additional paths to be  | integer            | Minimum value: 2   | 2                  |
|                                    | selected for each IPv6 NLRI.      |                    | Maximum value: 255 |                    |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| additional-path-vpnv4              | Enable/disable selection of BGP   | option             | \-                 | disable            |
|                                    | VPNv4 additional paths.           |                    |                    |                    |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | Option      | Description                                            |                         |
|                                    | +=============+========================================================+                         |
|                                    | | *enable*    | Enable setting.                                        |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | *disable*   | Disable setting.                                       |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| additional-path6                   | Enable/disable selection of BGP   | option             | \-                 | disable            |
|                                    | IPv6 additional paths.            |                    |                    |                    |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | Option      | Description                                            |                         |
|                                    | +=============+========================================================+                         |
|                                    | | *enable*    | Enable setting.                                        |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | *disable*   | Disable setting.                                       |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| always-compare-med                 | Enable/disable always compare     | option             | \-                 | disable            |
|                                    | MED.                              |                    |                    |                    |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | Option      | Description                                            |                         |
|                                    | +=============+========================================================+                         |
|                                    | | *enable*    | Enable setting.                                        |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | *disable*   | Disable setting.                                       |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| as                                 | Router AS number,                 | user               | Not Specified      |                    |
|                                    | asplain/asdot/asdot+ format, 0 to |                    |                    |                    |
|                                    | disable BGP.                      |                    |                    |                    |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| bestpath-as-path-ignore            | Enable/disable ignore AS path.    | option             | \-                 | disable            |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | Option      | Description                                            |                         |
|                                    | +=============+========================================================+                         |
|                                    | | *enable*    | Enable setting.                                        |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | *disable*   | Disable setting.                                       |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| bestpath-cmp-confed-aspath         | Enable/disable compare federation | option             | \-                 | disable            |
|                                    | AS path length.                   |                    |                    |                    |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | Option      | Description                                            |                         |
|                                    | +=============+========================================================+                         |
|                                    | | *enable*    | Enable setting.                                        |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | *disable*   | Disable setting.                                       |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| bestpath-cmp-routerid              | Enable/disable compare router ID  | option             | \-                 | disable            |
|                                    | for identical EBGP paths.         |                    |                    |                    |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | Option      | Description                                            |                         |
|                                    | +=============+========================================================+                         |
|                                    | | *enable*    | Enable setting.                                        |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | *disable*   | Disable setting.                                       |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| bestpath-med-confed                | Enable/disable compare MED among  | option             | \-                 | disable            |
|                                    | confederation paths.              |                    |                    |                    |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | Option      | Description                                            |                         |
|                                    | +=============+========================================================+                         |
|                                    | | *enable*    | Enable setting.                                        |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | *disable*   | Disable setting.                                       |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| bestpath-med-missing-as-worst      | Enable/disable treat missing MED  | option             | \-                 | disable            |
|                                    | as least preferred.               |                    |                    |                    |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | Option      | Description                                            |                         |
|                                    | +=============+========================================================+                         |
|                                    | | *enable*    | Enable setting.                                        |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | *disable*   | Disable setting.                                       |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| client-to-client-reflection        | Enable/disable client-to-client   | option             | \-                 | enable             |
|                                    | route reflection.                 |                    |                    |                    |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | Option      | Description                                            |                         |
|                                    | +=============+========================================================+                         |
|                                    | | *enable*    | Enable setting.                                        |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | *disable*   | Disable setting.                                       |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| cluster-id                         | Route reflector cluster ID.       | ipv4-address-any   | Not Specified      | 0.0.0.0            |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| confederation-identifier           | Confederation identifier.         | integer            | Minimum value: 1   | 0                  |
|                                    |                                   |                    | Maximum value:     |                    |
|                                    |                                   |                    | 4294967295         |                    |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| confederation-peers `<peer>`       | Confederation peers.              | string             | Maximum length: 79 |                    |
|                                    |                                   |                    |                    |                    |
|                                    | Peer ID.                          |                    |                    |                    |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| cross-family-conditional-adv       | Enable/disable cross address      | option             | \-                 | disable            |
|                                    | family conditional advertisement. |                    |                    |                    |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | Option      | Description                                            |                         |
|                                    | +=============+========================================================+                         |
|                                    | | *enable*    | Enable setting.                                        |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | *disable*   | Disable setting.                                       |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| dampening                          | Enable/disable route-flap         | option             | \-                 | disable            |
|                                    | dampening.                        |                    |                    |                    |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | Option      | Description                                            |                         |
|                                    | +=============+========================================================+                         |
|                                    | | *enable*    | Enable setting.                                        |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | *disable*   | Disable setting.                                       |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| dampening-max-suppress-time        | Maximum minutes a route can be    | integer            | Minimum value: 1   | 60                 |
|                                    | suppressed.                       |                    | Maximum value: 255 |                    |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| dampening-reachability-half-life   | Reachability half-life time for   | integer            | Minimum value: 1   | 15                 |
|                                    | penalty (min).                    |                    | Maximum value: 45  |                    |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| dampening-reuse                    | Threshold to reuse routes.        | integer            | Minimum value: 1   | 750                |
|                                    |                                   |                    | Maximum value:     |                    |
|                                    |                                   |                    | 20000              |                    |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| dampening-route-map                | Criteria for dampening.           | string             | Maximum length: 35 |                    |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| dampening-suppress                 | Threshold to suppress routes.     | integer            | Minimum value: 1   | 2000               |
|                                    |                                   |                    | Maximum value:     |                    |
|                                    |                                   |                    | 20000              |                    |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| dampening-unreachability-half-life | Unreachability half-life time for | integer            | Minimum value: 1   | 15                 |
|                                    | penalty (min).                    |                    | Maximum value: 45  |                    |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| default-local-preference           | Default local preference.         | integer            | Minimum value: 0   | 100                |
|                                    |                                   |                    | Maximum value:     |                    |
|                                    |                                   |                    | 4294967295         |                    |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| deterministic-med                  | Enable/disable enforce            | option             | \-                 | disable            |
|                                    | deterministic comparison of MED.  |                    |                    |                    |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | Option      | Description                                            |                         |
|                                    | +=============+========================================================+                         |
|                                    | | *enable*    | Enable setting.                                        |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | *disable*   | Disable setting.                                       |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| distance-external                  | Distance for routes external to   | integer            | Minimum value: 1   | 20                 |
|                                    | the AS.                           |                    | Maximum value: 255 |                    |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| distance-internal                  | Distance for routes internal to   | integer            | Minimum value: 1   | 200                |
|                                    | the AS.                           |                    | Maximum value: 255 |                    |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| distance-local                     | Distance for routes local to the  | integer            | Minimum value: 1   | 200                |
|                                    | AS.                               |                    | Maximum value: 255 |                    |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ebgp-multipath                     | Enable/disable EBGP multi-path.   | option             | \-                 | disable            |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | Option      | Description                                            |                         |
|                                    | +=============+========================================================+                         |
|                                    | | *enable*    | Enable setting.                                        |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | *disable*   | Disable setting.                                       |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| enforce-first-as                   | Enable/disable enforce first AS   | option             | \-                 | enable             |
|                                    | for EBGP routes.                  |                    |                    |                    |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | Option      | Description                                            |                         |
|                                    | +=============+========================================================+                         |
|                                    | | *enable*    | Enable setting.                                        |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | *disable*   | Disable setting.                                       |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| fast-external-failover             | Enable/disable reset peer BGP     | option             | \-                 | enable             |
|                                    | session if link goes down.        |                    |                    |                    |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | Option      | Description                                            |                         |
|                                    | +=============+========================================================+                         |
|                                    | | *enable*    | Enable setting.                                        |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | *disable*   | Disable setting.                                       |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| graceful-end-on-timer              | Enable/disable to exit graceful   | option             | \-                 | disable            |
|                                    | restart on timer only.            |                    |                    |                    |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | Option      | Description                                            |                         |
|                                    | +=============+========================================================+                         |
|                                    | | *enable*    | Enable setting.                                        |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | *disable*   | Disable setting.                                       |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| graceful-restart                   | Enable/disable BGP graceful       | option             | \-                 | disable            |
|                                    | restart capabilities.             |                    |                    |                    |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | Option      | Description                                            |                         |
|                                    | +=============+========================================================+                         |
|                                    | | *enable*    | Enable setting.                                        |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | *disable*   | Disable setting.                                       |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| graceful-restart-time              | Time needed for neighbors to      | integer            | Minimum value: 1   | 120                |
|                                    | restart (sec).                    |                    | Maximum value:     |                    |
|                                    |                                   |                    | 3600               |                    |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| graceful-stalepath-time            | Time to hold stale paths of       | integer            | Minimum value: 1   | 360                |
|                                    | restarting neighbor (sec).        |                    | Maximum value:     |                    |
|                                    |                                   |                    | 3600               |                    |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| graceful-update-delay              | Route advertisement/selection     | integer            | Minimum value: 1   | 120                |
|                                    | delay after restart (sec).        |                    | Maximum value:     |                    |
|                                    |                                   |                    | 3600               |                    |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| holdtime-timer                     | Number of seconds to mark peer as | integer            | Minimum value: 3   | 180                |
|                                    | dead.                             |                    | Maximum value:     |                    |
|                                    |                                   |                    | 65535              |                    |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ibgp-multipath                     | Enable/disable IBGP multi-path.   | option             | \-                 | disable            |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | Option      | Description                                            |                         |
|                                    | +=============+========================================================+                         |
|                                    | | *enable*    | Enable setting.                                        |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | *disable*   | Disable setting.                                       |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ignore-optional-capability         | Do not send unknown optional      | option             | \-                 | enable             |
|                                    | capability notification message.  |                    |                    |                    |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | Option      | Description                                            |                         |
|                                    | +=============+========================================================+                         |
|                                    | | *enable*    | Enable setting.                                        |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | *disable*   | Disable setting.                                       |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| keepalive-timer                    | Frequency to send keep alive      | integer            | Minimum value: 0   | 60                 |
|                                    | requests.                         |                    | Maximum value:     |                    |
|                                    |                                   |                    | 65535              |                    |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| log-neighbour-changes              | Log BGP neighbor changes.         | option             | \-                 | enable             |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | Option      | Description                                            |                         |
|                                    | +=============+========================================================+                         |
|                                    | | *enable*    | Enable setting.                                        |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | *disable*   | Disable setting.                                       |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| multipath-recursive-distance       | Enable/disable use of recursive   | option             | \-                 | disable            |
|                                    | distance to select multipath.     |                    |                    |                    |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | Option      | Description                                            |                         |
|                                    | +=============+========================================================+                         |
|                                    | | *enable*    | Enable setting.                                        |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | *disable*   | Disable setting.                                       |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| network-import-check               | Enable/disable ensure BGP network | option             | \-                 | enable             |
|                                    | route exists in IGP.              |                    |                    |                    |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | Option      | Description                                            |                         |
|                                    | +=============+========================================================+                         |
|                                    | | *enable*    | Enable setting.                                        |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | *disable*   | Disable setting.                                       |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| recursive-inherit-priority         | Enable/disable priority           | option             | \-                 | disable            |
|                                    | inheritance for recursive         |                    |                    |                    |
|                                    | resolution.                       |                    |                    |                    |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | Option      | Description                                            |                         |
|                                    | +=============+========================================================+                         |
|                                    | | *enable*    | Enable setting.                                        |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | *disable*   | Disable setting.                                       |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| recursive-next-hop                 | Enable/disable recursive          | option             | \-                 | disable            |
|                                    | resolution of next-hop using BGP  |                    |                    |                    |
|                                    | route.                            |                    |                    |                    |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | Option      | Description                                            |                         |
|                                    | +=============+========================================================+                         |
|                                    | | *enable*    | Enable setting.                                        |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | *disable*   | Disable setting.                                       |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| router-id                          | Router ID.                        | ipv4-address-any   | Not Specified      |                    |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| scan-time                          | Background scanner interval       | integer            | Minimum value: 5   | 60                 |
|                                    | (sec), 0 to disable it.           |                    | Maximum value: 60  |                    |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| synchronization                    | Enable/disable only advertise     | option             | \-                 | disable            |
|                                    | routes from iBGP if routes        |                    |                    |                    |
|                                    | present in an IGP.                |                    |                    |                    |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | Option      | Description                                            |                         |
|                                    | +=============+========================================================+                         |
|                                    | | *enable*    | Enable setting.                                        |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | *disable*   | Disable setting.                                       |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| tag-resolve-mode                   | Configure tag-match mode.         | option             | \-                 | disable            |
|                                    | Resolves BGP routes with other    |                    |                    |                    |
|                                    | routes containing the same tag.   |                    |                    |                    |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | Option      | Description                                            |                         |
|                                    | +=============+========================================================+                         |
|                                    | | *disable*   | Disable tag-match mode.                                |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | *preferred* | Use tag-match if a BGP route resolution with another   |                         |
|                                    | |             | route containing the same tag is successful.           |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
|                                    | | *merge*     | Merge tag-match with best-match if they are using      |                         |
|                                    | |             | different routes. The result will exclude the next     |                         |
|                                    | |             | hops of tag-match whose interfaces have appeared in    |                         |
|                                    | |             | best-match.                                            |                         |
|                                    | +-------------+--------------------------------------------------------+                         |
+------------------------------------+--------------------------------------------------------------------------------------------------+

