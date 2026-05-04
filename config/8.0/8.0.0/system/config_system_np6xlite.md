# config system np6xlite

Configure NP6XLITE attributes.

## Syntax

```
config system np6xlite
    Description: Configure NP6XLITE attributes.
    edit <name>
        set congestion-handling-mode [flow-control|head-of-line]
        set fastpath [disable|enable]
        config fp-anomaly
            Description: NP6XLITE IPv4 anomaly protection. The trap-to-host forwards anomaly sessions to the CPU.
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
            set tcp-others-max {integer}
            set tcpfin-rst-max {integer}
            set tcpsyn-ack-max {integer}
            set tcpsyn-max {integer}
            set udp-max {integer}
        end
        set ipsec-inner-fragment [disable|enable]
        set ipsec-sts-timeout [1|2|...]
        set ipsec-throughput-msg-frequency [disable|32kb|...]
        set per-session-accounting [disable|traffic-log-only|...]
        set session-timeout-interval {integer}
    next
end
```

## Parameters

+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| Parameter                      | Description                       | Type                   | Size                   | Default                |
+================================+===================================+========================+========================+========================+
| congestion-handling-mode \*    | Configure Marvell switch packet   | option                 | \-                     | head-of-line           |
|                                | congestion handling.              |                        |                        |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +----------------+--------------------------------------------------------+                                  |
|                                | | Option         | Description                                            |                                  |
|                                | +================+========================================================+                                  |
|                                | | *flow-control* | Pause peer sending additional traffic until congestion |                                  |
|                                | |                | is resolved.                                           |                                  |
|                                | +----------------+--------------------------------------------------------+                                  |
|                                | | *head-of-line* | Drop excessive traffic until congestion is resolved.   |                                  |
|                                | +----------------+--------------------------------------------------------+                                  |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| fastpath                       | Enable/disable NP6XLITE           | option                 | \-                     | enable                 |
|                                | offloading (also called fast      |                        |                        |                        |
|                                | path).                            |                        |                        |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *disable*   | Disable NP6XLITE offloading (fast path).               |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *enable*    | Enable NP6XLITE offloading (fast path).                |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ipsec-inner-fragment           | Enable/disable NP6XLite IPsec     | option                 | \-                     | disable                |
|                                | fragmentation type: inner.        |                        |                        |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *disable*   | NP6XLite ipsec fragmentation type: outer.              |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *enable*    | Enable NP6XLite ipsec fragmentation type: inner.       |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ipsec-sts-timeout              | Set NP6XLite IPsec STS message    | option                 | \-                     | 5                      |
|                                | timeout.                          |                        |                        |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *1*         | Set NP6Xlite STS message timeout to 1 sec (recommended |                                     |
|                                | |             | for IPSec throughput GUI).                             |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *2*         | Set NP6Xlite STS message timeout to 2 sec.             |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *3*         | Set NP6Xlite STS message timeout to 3 sec.             |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *4*         | Set NP6Xlite STS message timeout to 4 sec.             |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *5*         | Set NP6Xlite STS message timeout to 5 sec (default).   |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *6*         | Set NP6Xlite STS message timeout to 6 sec.             |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *7*         | Set NP6Xlite STS message timeout to 7 sec.             |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *8*         | Set NP6Xlite STS message timeout to 8 sec.             |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *9*         | Set NP6Xlite STS message timeout to 9 sec.             |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *10*        | Set NP6Xlite STS message timeout to 10 sec.            |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ipsec-throughput-msg-frequency | Set NP6XLite IPsec throughput     | option                 | \-                     | disable                |
|                                | message frequency (0 = disable).  |                        |                        |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *disable*   | Disable NP6Xlite throughput update message.            |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *32kb*      | Set NP6Xlite throughput update message frequency to    |                                     |
|                                | |             | 32KB.                                                  |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *64kb*      | Set NP6Xlite throughput update message frequency to    |                                     |
|                                | |             | 64KB.                                                  |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *128kb*     | Set NP6Xlite throughput update message frequency to    |                                     |
|                                | |             | 128KB.                                                 |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *256kb*     | Set NP6Xlite throughput update message frequency to    |                                     |
|                                | |             | 256KB.                                                 |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *512kb*     | Set NP6Xlite throughput update message frequency to    |                                     |
|                                | |             | 512KB.                                                 |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *1mb*       | Set NP6Xlite throughput update message frequency to    |                                     |
|                                | |             | 1MB.                                                   |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *2mb*       | Set NP6Xlite throughput update message frequency to    |                                     |
|                                | |             | 2MB.                                                   |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *4mb*       | Set NP6Xlite throughput update message frequency to    |                                     |
|                                | |             | 4MB.                                                   |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *8mb*       | Set NP6Xlite throughput update message frequency to    |                                     |
|                                | |             | 8MB.                                                   |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *16mb*      | Set NP6Xlite throughput update message frequency to    |                                     |
|                                | |             | 16MB.                                                  |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *32mb*      | Set NP6Xlite throughput update message frequency to    |                                     |
|                                | |             | 32MB.                                                  |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *64mb*      | Set NP6Xlite throughput update message frequency to    |                                     |
|                                | |             | 64MB.                                                  |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *128mb*     | Set NP6Xlite throughput update message frequency to    |                                     |
|                                | |             | 128MB.                                                 |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *256mb*     | Set NP6Xlite throughput update message frequency to    |                                     |
|                                | |             | 256MB.                                                 |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *512mb*     | Set NP6Xlite throughput update message frequency to    |                                     |
|                                | |             | 512MB.                                                 |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *1gb*       | Set NP6Xlite throughput update message frequency to    |                                     |
|                                | |             | 1GB.                                                   |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| name                           | Device Name.                      | string                 | Maximum length: 31     |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| per-session-accounting         | Enable/disable per-session        | option                 | \-                     | traffic-log-only       |
|                                | accounting.                       |                        |                        |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +--------------------+--------------------------------------------------------+                              |
|                                | | Option             | Description                                            |                              |
|                                | +====================+========================================================+                              |
|                                | | *disable*          | Disable per-session accounting.                        |                              |
|                                | +--------------------+--------------------------------------------------------+                              |
|                                | | *traffic-log-only* | Per-session accounting only for sessions with traffic  |                              |
|                                | |                    | logging enabled in firewall policy.                    |                              |
|                                | +--------------------+--------------------------------------------------------+                              |
|                                | | *enable*           | Per-session accounting for all sessions.               |                              |
|                                | +--------------------+--------------------------------------------------------+                              |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| session-timeout-interval       | Set session timeout interval (0 - | integer                | Minimum value: 0       | 40                     |
|                                | 1000 sec, default 40 sec).        |                        | Maximum value: 1000    |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+

