# config router multicast

Configure router multicast.

## Syntax

```
config router multicast
    Description: Configure router multicast.
    config interface
        Description: PIM interfaces.
        edit <name>
            set ttl-threshold {integer}
            set pim-mode [sparse-mode|dense-mode]
            set passive [enable|disable]
            set bfd [enable|disable]
            set neighbour-filter {string}
            set hello-interval {integer}
            set hello-holdtime {integer}
            set cisco-exclude-genid [enable|disable]
            set dr-priority {integer}
            set propagation-delay {integer}
            set state-refresh-interval {integer}
            set rp-candidate [enable|disable]
            set rp-candidate-group {string}
            set rp-candidate-priority {integer}
            set rp-candidate-interval {integer}
            set multicast-flow {string}
            set static-group {string}
            set rpf-nbr-fail-back [enable|disable]
            set rpf-nbr-fail-back-filter {string}
            config join-group
                Description: Join multicast groups.
                edit <address>
                next
            end
            config igmp
                Description: IGMP configuration options.
                set access-group {string}
                set version [3|2|...]
                set immediate-leave-group {string}
                set last-member-query-interval {integer}
                set last-member-query-count {integer}
                set query-max-response-time {integer}
                set query-interval {integer}
                set query-timeout {integer}
                set router-alert-check [enable|disable]
            end
        next
    end
    set multicast-routing [enable|disable]
    config pim-sm-global
        Description: PIM sparse-mode global settings.
        set message-interval {integer}
        set join-prune-holdtime {integer}
        set accept-register-list {string}
        set accept-source-list {string}
        set bsr-candidate [enable|disable]
        set bsr-interface {string}
        set bsr-priority {integer}
        set bsr-hash {integer}
        set bsr-allow-quick-refresh [enable|disable]
        set cisco-register-checksum [enable|disable]
        set cisco-register-checksum-group {string}
        set cisco-crp-prefix [enable|disable]
        set cisco-ignore-rp-set-priority [enable|disable]
        set register-rp-reachability [enable|disable]
        set register-source [disable|interface|...]
        set register-source-interface {string}
        set register-source-ip {ipv4-address}
        set register-supression {integer}
        set null-register-retries {integer}
        set rp-register-keepalive {integer}
        set spt-threshold [enable|disable]
        set spt-threshold-group {string}
        set ssm [enable|disable]
        set ssm-range {string}
        set register-rate-limit {integer}
        set pim-use-sdwan [enable|disable]
        config rp-address
            Description: Statically configure RP addresses.
            edit <id>
                set ip-address {ipv4-address}
                set group {string}
            next
        end
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

