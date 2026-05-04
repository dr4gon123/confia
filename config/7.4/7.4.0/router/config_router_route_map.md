# config router route-map

Configure route maps.

## Syntax

```
config router route-map
    Description: Configure route maps.
    edit <name>
        set comments {string}
        config rule
            Description: Rule.
            edit <id>
                set action [permit|deny]
                set match-as-path {string}
                set match-community {string}
                set match-extcommunity {string}
                set match-community-exact [enable|disable]
                set match-extcommunity-exact [enable|disable]
                set match-origin [none|egp|...]
                set match-interface {string}
                set match-ip-address {string}
                set match-ip6-address {string}
                set match-ip-nexthop {string}
                set match-ip6-nexthop {string}
                set match-metric {integer}
                set match-route-type [external-type1|external-type2|...]
                set match-tag {integer}
                set match-vrf {integer}
                set set-aggregator-as {integer}
                set set-aggregator-ip {ipv4-address-any}
                set set-aspath-action [prepend|replace]
                set set-aspath <as1>, <as2>, ...
                set set-atomic-aggregate [enable|disable]
                set set-community-delete {string}
                set set-community <community1>, <community2>, ...
                set set-community-additive [enable|disable]
                set set-dampening-reachability-half-life {integer}
                set set-dampening-reuse {integer}
                set set-dampening-suppress {integer}
                set set-dampening-max-suppress {integer}
                set set-dampening-unreachability-half-life {integer}
                set set-extcommunity-rt <community1>, <community2>, ...
                set set-extcommunity-soo <community1>, <community2>, ...
                set set-ip-nexthop {ipv4-address}
                set set-ip-prefsrc {ipv4-address}
                set set-ip6-nexthop {ipv6-address}
                set set-ip6-nexthop-local {ipv6-address}
                set set-local-preference {integer}
                set set-metric {integer}
                set set-metric-type [external-type1|external-type2|...]
                set set-originator-id {ipv4-address-any}
                set set-origin [none|egp|...]
                set set-tag {integer}
                set set-weight {integer}
                set set-route-tag {integer}
                set set-priority {integer}
            next
        end
    next
end
```

## Parameters

+-----------+-----------------------------------+--------+---------+---------+
| Parameter | Description                       | Type   | Size    | Default |
+===========+===================================+========+=========+=========+
| comments  | Optional comments.                | string | Maximum |         |
|           |                                   |        | length: |         |
|           |                                   |        | 127     |         |
+-----------+-----------------------------------+--------+---------+---------+
| name      | Name.                             | string | Maximum |         |
|           |                                   |        | length: |         |
|           |                                   |        | 35      |         |
+-----------+-----------------------------------+--------+---------+---------+

