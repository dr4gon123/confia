# config system np6

Configure NP6 attributes.

## Syntax

```
config system np6
    Description: Configure NP6 attributes.
    edit <name>
        set fastpath [disable|enable]
        config fp-anomaly
            Description: NP6 IPv4 anomaly protection. trap-to-host forwards anomaly sessions to the CPU.
            set icmp-csum-err [drop|trap-to-host]
            set icmp-frag [allow|drop|...]
            set icmp-land [allow|drop|...]
            set ipv4-csum-err [drop|trap-to-host]
            set ipv4-land [allow|drop|...]
            set ipv4-optlsrr [allow|drop|...]
            set ipv4-optrr [allow|drop|...]
            set ipv4-optsecurity [allow|drop|...]
            set ipv4-optssrr [allow|drop|...]
            set ipv4-optstream [allow|drop|...]
            set ipv4-opttimestamp [allow|drop|...]
            set ipv4-proto-err [allow|drop|...]
            set ipv4-unknopt [allow|drop|...]
            set ipv6-daddr-err [allow|drop|...]
            set ipv6-land [allow|drop|...]
            set ipv6-optendpid [allow|drop|...]
            set ipv6-opthomeaddr [allow|drop|...]
            set ipv6-optinvld [allow|drop|...]
            set ipv6-optjumbo [allow|drop|...]
            set ipv6-optnsap [allow|drop|...]
            set ipv6-optralert [allow|drop|...]
            set ipv6-opttunnel [allow|drop|...]
            set ipv6-proto-err [allow|drop|...]
            set ipv6-saddr-err [allow|drop|...]
            set ipv6-unknopt [allow|drop|...]
            set tcp-csum-err [drop|trap-to-host]
            set tcp-fin-noack [allow|drop|...]
            set tcp-fin-only [allow|drop|...]
            set tcp-land [allow|drop|...]
            set tcp-no-flag [allow|drop|...]
            set tcp-syn-data [allow|drop|...]
            set tcp-syn-fin [allow|drop|...]
            set tcp-winnuke [allow|drop|...]
            set udp-csum-err [drop|trap-to-host]
            set udp-land [allow|drop|...]
        end
        set garbage-session-collector [disable|enable]
        config hpe
            Description: HPE configuration.
            set arp-max {integer}
            set enable-shaper [disable|enable]
            set esp-max {integer}
            set icmp-max {integer}
            set ip-frag-max {integer}
            set ip-others-max {integer}
            set l2-others-max {integer}
            set pri-type-max {integer}
            set sctp-max {integer}
            set tcp-max {integer}
            set tcpfin-rst-max {integer}
            set tcpsyn-ack-max {integer}
            set tcpsyn-max {integer}
            set udp-max {integer}
        end
        set ipsec-ob-hash-function [switch-group-hash|global-hash|...]
        set ipsec-outbound-hash [disable|enable]
        set low-latency-mode [disable|enable]
        set per-session-accounting [disable|traffic-log-only|...]
        set session-collector-interval {integer}
        set session-timeout-fixed [disable|enable]
        set session-timeout-interval {integer}
        set session-timeout-random-range {integer}
    next
end
```

## Parameters

+------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| Parameter                    | Description                       | Type                     | Size                     | Default                  |
+==============================+===================================+==========================+==========================+==========================+
| fastpath                     | Enable/disable NP6 offloading     | option                   | \-                       | enable                   |
|                              | (also called fast path).          |                          |                          |                          |
+------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                              | +-------------+--------------------------------------------------------+                                           |
|                              | | Option      | Description                                            |                                           |
|                              | +=============+========================================================+                                           |
|                              | | *disable*   | Disable NP6 offloading (fast path).                    |                                           |
|                              | +-------------+--------------------------------------------------------+                                           |
|                              | | *enable*    | Enable NP6 offloading (fast path).                     |                                           |
|                              | +-------------+--------------------------------------------------------+                                           |
+------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| garbage-session-collector    | Enable/disable garbage session    | option                   | \-                       | disable                  |
|                              | collector.                        |                          |                          |                          |
+------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                              | +-------------+--------------------------------------------------------+                                           |
|                              | | Option      | Description                                            |                                           |
|                              | +=============+========================================================+                                           |
|                              | | *disable*   | Disable garbage session collector.                     |                                           |
|                              | +-------------+--------------------------------------------------------+                                           |
|                              | | *enable*    | Enable garbage session collector.                      |                                           |
|                              | +-------------+--------------------------------------------------------+                                           |
+------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| ipsec-ob-hash-function \*    | Set hash function for IPSec       | option                   | \-                       | switch-group-hash        |
|                              | outbound.                         |                          |                          |                          |
+------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                              | +----------------------------+--------------------------------------------------------+                            |
|                              | | Option                     | Description                                            |                            |
|                              | +============================+========================================================+                            |
|                              | | *switch-group-hash*        | Hash outbound SA traffic within NPs connected to same  |                            |
|                              | |                            | switch.                                                |                            |
|                              | +----------------------------+--------------------------------------------------------+                            |
|                              | | *global-hash*              | Hash outbound SA traffic among all NPs.                |                            |
|                              | +----------------------------+--------------------------------------------------------+                            |
|                              | | *global-hash-weighted*     | Hash outbound SA traffic among all NPs with more       |                            |
|                              | |                            | weights on NPs connected to switch 0. It\'s applicable |                            |
|                              | |                            | to the case that ingress traffic is from switch 1.     |                            |
|                              | +----------------------------+--------------------------------------------------------+                            |
|                              | | *round-robin-switch-group* | Round-robin outbound SA traffic within NPs connected   |                            |
|                              | |                            | to same switch.                                        |                            |
|                              | +----------------------------+--------------------------------------------------------+                            |
|                              | | *round-robin-global*       | Round-robin outbound SA traffic among all NPs.         |                            |
|                              | +----------------------------+--------------------------------------------------------+                            |
+------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| ipsec-outbound-hash \*       | Enable/disable hash function for  | option                   | \-                       | disable                  |
|                              | IPsec outbound traffic.           |                          |                          |                          |
+------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                              | +-------------+--------------------------------------------------------+                                           |
|                              | | Option      | Description                                            |                                           |
|                              | +=============+========================================================+                                           |
|                              | | *disable*   | Disable hash function for IPsec outbound traffic.      |                                           |
|                              | +-------------+--------------------------------------------------------+                                           |
|                              | | *enable*    | Enable hash function for IPsec outbound traffic.       |                                           |
|                              | +-------------+--------------------------------------------------------+                                           |
+------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| low-latency-mode             | Enable/disable low latency mode.  | option                   | \-                       | disable                  |
+------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                              | +-------------+--------------------------------------------------------+                                           |
|                              | | Option      | Description                                            |                                           |
|                              | +=============+========================================================+                                           |
|                              | | *disable*   | Disable low latency mode.                              |                                           |
|                              | +-------------+--------------------------------------------------------+                                           |
|                              | | *enable*    | Enable low latency mode.                               |                                           |
|                              | +-------------+--------------------------------------------------------+                                           |
+------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| name                         | Device Name.                      | string                   | Maximum length: 31       |                          |
+------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| per-session-accounting       | Enable/disable per-session        | option                   | \-                       | traffic-log-only         |
|                              | accounting.                       |                          |                          |                          |
+------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                              | +--------------------+--------------------------------------------------------+                                    |
|                              | | Option             | Description                                            |                                    |
|                              | +====================+========================================================+                                    |
|                              | | *disable*          | Disable per-session accounting.                        |                                    |
|                              | +--------------------+--------------------------------------------------------+                                    |
|                              | | *traffic-log-only* | Per-session accounting only for sessions with traffic  |                                    |
|                              | |                    | logging enabled in firewall policy.                    |                                    |
|                              | +--------------------+--------------------------------------------------------+                                    |
|                              | | *enable*           | Per-session accounting for all sessions.               |                                    |
|                              | +--------------------+--------------------------------------------------------+                                    |
+------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| session-collector-interval   | Set garbage session collection    | integer                  | Minimum value: 1 Maximum | 64                       |
|                              | cleanup interval (1 - 100 sec,    |                          | value: 100               |                          |
|                              | default 64).                      |                          |                          |                          |
+------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| session-timeout-fixed        | {disable | enable} Toggle between | option                   | \-                       | disable                  |
|                              | using fixed or random timeouts    |                          |                          |                          |
|                              | for refreshing NP6 sessions.      |                          |                          |                          |
+------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                              | +-------------+--------------------------------------------------------+                                           |
|                              | | Option      | Description                                            |                                           |
|                              | +=============+========================================================+                                           |
|                              | | *disable*   | Disable Refresh NP6 sessions at the configured fixed   |                                           |
|                              | |             | interval.                                              |                                           |
|                              | +-------------+--------------------------------------------------------+                                           |
|                              | | *enable*    | Enable Refresh NP6 sessions randomly where the time    |                                           |
|                              | |             | between refreshes is within the random range.          |                                           |
|                              | +-------------+--------------------------------------------------------+                                           |
+------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| session-timeout-interval     | Set the fixed timeout for         | integer                  | Minimum value: 0 Maximum | 40                       |
|                              | refreshing NP6 sessions (0 - 1000 |                          | value: 1000              |                          |
|                              | sec, default 40 sec).             |                          |                          |                          |
+------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| session-timeout-random-range | Set the random timeout range for  | integer                  | Minimum value: 0 Maximum | 8                        |
|                              | refreshing NP6 sessions (0 - 1000 |                          | value: 1000              |                          |
|                              | sec, default 8 sec).              |                          |                          |                          |
+------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+

