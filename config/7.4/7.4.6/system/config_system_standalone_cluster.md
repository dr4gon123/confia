# config system standalone-cluster

Configure FortiGate Session Life Support Protocol (FGSP) cluster attributes.

## Syntax

```
config system standalone-cluster
    Description: Configure FortiGate Session Life Support Protocol (FGSP) cluster attributes.
    set asymmetric-traffic-control [cps-preferred|strict-anti-replay]
    config cluster-peer
        Description: Configure FortiGate Session Life Support Protocol (FGSP) session synchronization.
        edit <sync-id>
            set down-intfs-before-sess-sync <name1>, <name2>, ...
            set hb-interval {integer}
            set hb-lost-threshold {integer}
            set ipsec-tunnel-sync [enable|disable]
            set peerip {ipv4-address}
            set peervd {string}
            set secondary-add-ipsec-routes [enable|disable]
            config session-sync-filter
                Description: Add one or more filters if you only want to synchronize some sessions. Use the filter to configure the types of sessions to synchronize.
                config custom-service
                    Description: Only sessions using these custom services are synchronized. Use source and destination port ranges to define these custom services.
                    edit <id>
                        set dst-port-range {user}
                        set src-port-range {user}
                    next
                end
                set dstaddr {ipv4-classnet-any}
                set dstaddr6 {ipv6-network}
                set dstintf {string}
                set srcaddr {ipv4-classnet-any}
                set srcaddr6 {ipv6-network}
                set srcintf {string}
            end
            set syncvd <name1>, <name2>, ...
        next
    end
    set encryption [enable|disable]
    set group-member-id {integer}
    set layer2-connection [available|unavailable]
    set psksecret {password-3}
    set session-sync-dev {user}
    set standalone-group-id {integer}
end
```

## Parameters

+----------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| Parameter                  | Description                       | Type                  | Size                  | Default               |
+============================+===================================+=======================+=======================+=======================+
| asymmetric-traffic-control | Asymmetric traffic control mode.  | option                | \-                    | cps-preferred         |
+----------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                            | +----------------------+--------------------------------------------------------+                         |
|                            | | Option               | Description                                            |                         |
|                            | +======================+========================================================+                         |
|                            | | *cps-preferred*      | Connection per second (CPS) preferred.                 |                         |
|                            | +----------------------+--------------------------------------------------------+                         |
|                            | | *strict-anti-replay* | Strict anti-replay check.                              |                         |
|                            | +----------------------+--------------------------------------------------------+                         |
+----------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| encryption                 | Enable/disable encryption when    | option                | \-                    | disable               |
|                            | synchronizing sessions.           |                       |                       |                       |
+----------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                            | +-------------+--------------------------------------------------------+                                  |
|                            | | Option      | Description                                            |                                  |
|                            | +=============+========================================================+                                  |
|                            | | *enable*    | Enable encryption when synchronizing sessions.         |                                  |
|                            | +-------------+--------------------------------------------------------+                                  |
|                            | | *disable*   | Disable encryption when synchronizing sessions.        |                                  |
|                            | +-------------+--------------------------------------------------------+                                  |
+----------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| group-member-id            | Cluster member ID.                | integer               | Minimum value: 0      | 0                     |
|                            |                                   |                       | Maximum value: 15     |                       |
+----------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| layer2-connection          | Indicate whether layer 2          | option                | \-                    | unavailable           |
|                            | connections are present among     |                       |                       |                       |
|                            | FGSP members.                     |                       |                       |                       |
+----------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                            | +---------------+--------------------------------------------------------+                                |
|                            | | Option        | Description                                            |                                |
|                            | +===============+========================================================+                                |
|                            | | *available*   | There exist layer 2 connections among FGSP members.    |                                |
|                            | +---------------+--------------------------------------------------------+                                |
|                            | | *unavailable* | There does not exist layer 2 connection among FGSP     |                                |
|                            | |               | members.                                               |                                |
|                            | +---------------+--------------------------------------------------------+                                |
+----------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| psksecret                  | Pre-shared secret for session     | password-3            | Not Specified         |                       |
|                            | synchronization (ASCII string or  |                       |                       |                       |
|                            | hexadecimal encoded with a        |                       |                       |                       |
|                            | leading 0x).                      |                       |                       |                       |
+----------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| session-sync-dev           | Offload session-sync process to   | user                  | Not Specified         |                       |
|                            | kernel and sync sessions using    |                       |                       |                       |
|                            | connected interface(s) directly.  |                       |                       |                       |
+----------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| standalone-group-id        | Cluster group ID. Must be the     | integer               | Minimum value: 0      | 0                     |
|                            | same for all members.             |                       | Maximum value: 255    |                       |
+----------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+

