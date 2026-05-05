# config router multicast

Configure router multicast.

## Syntax

```
config router multicast
    Description: Configure router multicast.
    config interface
        Description: PIM interfaces.
        edit <name>
            set bfd [enable|disable]
            set cisco-exclude-genid [enable|disable]
            set dr-priority {integer}
            set hello-holdtime {integer}
            set hello-interval {integer}
            config igmp
                Description: IGMP configuration options.
                set access-group {string}
                set immediate-leave-group {string}
                set last-member-query-count {integer}
                set last-member-query-interval {integer}
                set query-interval {integer}
                set query-max-response-time {integer}
                set query-timeout {integer}
                set router-alert-check [enable|disable]
                set version [3|2|...]
            end
            config join-group
                Description: Join multicast groups.
                edit <address>
                next
            end
            set multicast-flow {string}
            set neighbour-filter {string}
            set passive [enable|disable]
            set pim-mode [sparse-mode|dense-mode]
            set propagation-delay {integer}
            set rp-candidate [enable|disable]
            set rp-candidate-group {string}
            set rp-candidate-interval {integer}
            set rp-candidate-priority {integer}
            set rpf-nbr-fail-back [enable|disable]
            set rpf-nbr-fail-back-filter {string}
            set state-refresh-interval {integer}
            set static-group {string}
            set ttl-threshold {integer}
        next
    end
    set multicast-routing [enable|disable]
    config pim-sm-global
        Description: PIM sparse-mode global settings.
        set accept-register-list {string}
        set accept-source-list {string}
        set bsr-allow-quick-refresh [enable|disable]
        set bsr-candidate [enable|disable]
        set bsr-hash {integer}
        set bsr-interface {string}
        set bsr-priority {integer}
        set cisco-crp-prefix [enable|disable]
        set cisco-ignore-rp-set-priority [enable|disable]
        set cisco-register-checksum [enable|disable]
        set cisco-register-checksum-group {string}
        set join-prune-holdtime {integer}
        set message-interval {integer}
        set null-register-retries {integer}
        set pim-use-sdwan [enable|disable]
        set register-rate-limit {integer}
        set register-rp-reachability [enable|disable]
        set register-source [disable|interface|...]
        set register-source-interface {string}
        set register-source-ip {ipv4-address}
        set register-supression {integer}
        config rp-address
            Description: Statically configure RP addresses.
            edit <id>
                set group {string}
                set ip-address {ipv4-address}
            next
        end
        set rp-register-keepalive {integer}
        set spt-threshold [enable|disable]
        set spt-threshold-group {string}
        set ssm [enable|disable]
        set ssm-range {string}
    end
    set route-limit {integer}
    set route-threshold {integer}
end
```

## Parameters

+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter         | Description                       | Type               | Size               | Default            |
+===================+===================================+====================+====================+====================+
| multicast-routing | Enable/disable IP multicast       | option             | \-                 | disable            |
|                   | routing.                          |                    |                    |                    |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                   | +-------------+--------------------------------------------------------+                         |
|                   | | Option      | Description                                            |                         |
|                   | +=============+========================================================+                         |
|                   | | *enable*    | Enable IP multicast routing.                           |                         |
|                   | +-------------+--------------------------------------------------------+                         |
|                   | | *disable*   | Disable IP multicast routing.                          |                         |
|                   | +-------------+--------------------------------------------------------+                         |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
| route-limit       | Maximum number of multicast       | integer            | Minimum value: 1   | 2147483647         |
|                   | routes.                           |                    | Maximum value:     |                    |
|                   |                                   |                    | 2147483647         |                    |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+
| route-threshold   | Generate warnings when the number | integer            | Minimum value: 1   |                    |
|                   | of multicast routes exceeds this  |                    | Maximum value:     |                    |
|                   | number, must not be greater than  |                    | 2147483647         |                    |
|                   | route-limit.                      |                    |                    |                    |
+-------------------+-----------------------------------+--------------------+--------------------+--------------------+

