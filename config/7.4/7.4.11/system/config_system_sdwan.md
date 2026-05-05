# config system sdwan

Configure redundant Internet connections with multiple outbound links and health-check profiles.

## Syntax

```
config system sdwan
    Description: Configure redundant Internet connections with multiple outbound links and health-check profiles.
    set app-perf-log-period {integer}
    config duplication
        Description: Create SD-WAN duplication rule.
        edit <id>
            set dstaddr <name1>, <name2>, ...
            set dstaddr6 <name1>, <name2>, ...
            set dstintf <name1>, <name2>, ...
            set packet-de-duplication [enable|disable]
            set packet-duplication [disable|force|...]
            set service <name1>, <name2>, ...
            set service-id <id1>, <id2>, ...
            set sla-match-service [enable|disable]
            set srcaddr <name1>, <name2>, ...
            set srcaddr6 <name1>, <name2>, ...
            set srcintf <name1>, <name2>, ...
        next
    end
    set duplication-max-num {integer}
    set fail-alert-interfaces <name1>, <name2>, ...
    set fail-detect [enable|disable]
    config health-check
        Description: SD-WAN status checking or health checking. Identify a server on the Internet and determine how SD-WAN verifies that the FortiGate can communicate with it.
        edit <name>
            set addr-mode [ipv4|ipv6]
            set class-id {integer}
            set detect-mode [active|passive|...]
            set diffservcode {user}
            set dns-match-ip {ipv4-address}
            set dns-request-domain {string}
            set embed-measured-health [enable|disable]
            set failtime {integer}
            set ftp-file {string}
            set ftp-mode [passive|port]
            set ha-priority {integer}
            set http-agent {string}
            set http-get {string}
            set http-match {string}
            set interval {integer}
            set members <seq-num1>, <seq-num2>, ...
            set mos-codec [g711|g722|...]
            set packet-size {integer}
            set password {password}
            set port {integer}
            set probe-count {integer}
            set probe-packets [disable|enable]
            set probe-timeout {integer}
            set protocol [ping|tcp-echo|...]
            set quality-measured-method [half-open|half-close]
            set recoverytime {integer}
            set security-mode [none|authentication]
            set server {string}
            config sla
                Description: Service level agreement (SLA).
                edit <id>
                    set jitter-threshold {integer}
                    set latency-threshold {integer}
                    set link-cost-factor {option1}, {option2}, ...
                    set mos-threshold {string}
                    set packetloss-threshold {integer}
                    set priority-in-sla {integer}
                    set priority-out-sla {integer}
                next
            end
            set sla-fail-log-period {integer}
            set sla-id-redistribute {integer}
            set sla-pass-log-period {integer}
            set source {ipv4-address}
            set source6 {ipv6-address}
            set system-dns [disable|enable]
            set threshold-alert-jitter {integer}
            set threshold-alert-latency {integer}
            set threshold-alert-packetloss {integer}
            set threshold-warning-jitter {integer}
            set threshold-warning-latency {integer}
            set threshold-warning-packetloss {integer}
            set update-cascade-interface [enable|disable]
            set update-static-route [enable|disable]
            set user {string}
            set vrf {integer}
        next
    end
    set load-balance-mode [source-ip-based|weight-based|...]
    config members
        Description: FortiGate interfaces added to the SD-WAN.
        edit <seq-num>
            set comment {var-string}
            set cost {integer}
            set gateway {ipv4-address}
            set gateway6 {ipv6-address}
            set ingress-spillover-threshold {integer}
            set interface {string}
            set preferred-source {ipv4-address}
            set priority {integer}
            set priority6 {integer}
            set source {ipv4-address}
            set source6 {ipv6-address}
            set spillover-threshold {integer}
            set status [disable|enable]
            set transport-group {integer}
            set volume-ratio {integer}
            set weight {integer}
            set zone {string}
        next
    end
    config neighbor
        Description: Create SD-WAN neighbor from BGP neighbor table to control route advertisements according to SLA status.
        edit <ip>
            set health-check {string}
            set member <seq-num1>, <seq-num2>, ...
            set minimum-sla-meet-members {integer}
            set mode [sla|speedtest]
            set role [standalone|primary|...]
            set service-id {integer}
            set sla-id {integer}
        next
    end
    set neighbor-hold-boot-time {integer}
    set neighbor-hold-down [enable|disable]
    set neighbor-hold-down-time {integer}
    config service
        Description: Create SD-WAN rules (also called services) to control how sessions are distributed to interfaces in the SD-WAN.
        edit <id>
            set addr-mode [ipv4|ipv6]
            set agent-exclusive [enable|disable]
            set bandwidth-weight {integer}
            set default [enable|disable]
            set dscp-forward [enable|disable]
            set dscp-forward-tag {user}
            set dscp-reverse [enable|disable]
            set dscp-reverse-tag {user}
            set dst <name1>, <name2>, ...
            set dst-negate [enable|disable]
            set dst6 <name1>, <name2>, ...
            set end-port {integer}
            set end-src-port {integer}
            set fib-best-match-force [disable|enable]
            set gateway [enable|disable]
            set groups <name1>, <name2>, ...
            set hash-mode [round-robin|source-ip-based|...]
            set health-check <name1>, <name2>, ...
            set hold-down-time {integer}
            set input-device <name1>, <name2>, ...
            set input-device-negate [enable|disable]
            set input-zone <name1>, <name2>, ...
            set internet-service [enable|disable]
            set internet-service-app-ctrl <id1>, <id2>, ...
            set internet-service-app-ctrl-category <id1>, <id2>, ...
            set internet-service-app-ctrl-group <name1>, <name2>, ...
            set internet-service-custom <name1>, <name2>, ...
            set internet-service-custom-group <name1>, <name2>, ...
            set internet-service-group <name1>, <name2>, ...
            set internet-service-name <name1>, <name2>, ...
            set jitter-weight {integer}
            set latency-weight {integer}
            set link-cost-factor [latency|jitter|...]
            set link-cost-threshold {integer}
            set load-balance [enable|disable]
            set minimum-sla-meet-members {integer}
            set mode [auto|manual|...]
            set name {string}
            set packet-loss-weight {integer}
            set passive-measurement [enable|disable]
            set priority-members <seq-num1>, <seq-num2>, ...
            set priority-zone <name1>, <name2>, ...
            set protocol {integer}
            set quality-link {integer}
            set role [standalone|primary|...]
            set shortcut [enable|disable]
            set shortcut-priority [enable|disable|...]
            config sla
                Description: Service level agreement (SLA).
                edit <health-check>
                    set id {integer}
                next
            end
            set sla-compare-method [order|number]
            set sla-stickiness [enable|disable]
            set src <name1>, <name2>, ...
            set src-negate [enable|disable]
            set src6 <name1>, <name2>, ...
            set standalone-action [enable|disable]
            set start-port {integer}
            set start-src-port {integer}
            set status [enable|disable]
            set tie-break [zone|cfg-order|...]
            set tos {user}
            set tos-mask {user}
            set use-shortcut-sla [enable|disable]
            set users <name1>, <name2>, ...
            set zone-mode [enable|disable]
        next
    end
    set speedtest-bypass-routing [disable|enable]
    set status [disable|enable]
    config zone
        Description: Configure SD-WAN zones.
        edit <name>
            set advpn-health-check {string}
            set advpn-select [enable|disable]
            set minimum-sla-meet-members {integer}
            set service-sla-tie-break [cfg-order|fib-best-match|...]
        next
    end
end
```

## Parameters

+--------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| Parameter                | Description                       | Type                  | Size                  | Default               |
+==========================+===================================+=======================+=======================+=======================+
| app-perf-log-period      | Time interval in seconds that     | integer               | Minimum value: 0      | 0                     |
|                          | application performance logs are  |                       | Maximum value: 3600   |                       |
|                          | generated (0 - 3600, default =    |                       |                       |                       |
|                          | 0).                               |                       |                       |                       |
+--------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| duplication-max-num      | Maximum number of interface       | integer               | Minimum value: 2      | 2                     |
|                          | members a packet is duplicated in |                       | Maximum value: 4      |                       |
|                          | the SD-WAN zone (2 - 4, default = |                       |                       |                       |
|                          | 2; if set to 3, the original      |                       |                       |                       |
|                          | packet plus 2 more copies are     |                       |                       |                       |
|                          | created).                         |                       |                       |                       |
+--------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| fail-alert-interfaces    | Physical interfaces that will be  | string                | Maximum length: 79    |                       |
| `<name>`                 | alerted.                          |                       |                       |                       |
|                          |                                   |                       |                       |                       |
|                          | Physical interface name.          |                       |                       |                       |
+--------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| fail-detect              | Enable/disable SD-WAN Internet    | option                | \-                    | disable               |
|                          | connection status checking        |                       |                       |                       |
|                          | (failure detection).              |                       |                       |                       |
+--------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                          | +-------------+--------------------------------------------------------+                                  |
|                          | | Option      | Description                                            |                                  |
|                          | +=============+========================================================+                                  |
|                          | | *enable*    | Enable status checking.                                |                                  |
|                          | +-------------+--------------------------------------------------------+                                  |
|                          | | *disable*   | Disable status checking.                               |                                  |
|                          | +-------------+--------------------------------------------------------+                                  |
+--------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| load-balance-mode        | Algorithm or mode to use for load | option                | \-                    | source-ip-based       |
|                          | balancing Internet traffic to     |                       |                       |                       |
|                          | SD-WAN members.                   |                       |                       |                       |
+--------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                          | +-------------------------+--------------------------------------------------------+                      |
|                          | | Option                  | Description                                            |                      |
|                          | +=========================+========================================================+                      |
|                          | | *source-ip-based*       | Source IP load balancing. All traffic from a source IP |                      |
|                          | |                         | is sent to the same interface.                         |                      |
|                          | +-------------------------+--------------------------------------------------------+                      |
|                          | | *weight-based*          | Weight-based load balancing. Interfaces with higher    |                      |
|                          | |                         | weights have higher priority and get more traffic.     |                      |
|                          | +-------------------------+--------------------------------------------------------+                      |
|                          | | *usage-based*           | Usage-based load balancing. All traffic is sent to the |                      |
|                          | |                         | first interface on the list. When the bandwidth on     |                      |
|                          | |                         | that interface exceeds the spill-over limit new        |                      |
|                          | |                         | traffic is sent to the next interface.                 |                      |
|                          | +-------------------------+--------------------------------------------------------+                      |
|                          | | *source-dest-ip-based*  | Source and destination IP load balancing. All traffic  |                      |
|                          | |                         | from a source IP to a destination IP is sent to the    |                      |
|                          | |                         | same interface.                                        |                      |
|                          | +-------------------------+--------------------------------------------------------+                      |
|                          | | *measured-volume-based* | Volume-based load balancing. Traffic is load balanced  |                      |
|                          | |                         | based on traffic volume (in bytes). More traffic is    |                      |
|                          | |                         | sent to interfaces with higher volume ratios.          |                      |
|                          | +-------------------------+--------------------------------------------------------+                      |
+--------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| neighbor-hold-boot-time  | Waiting period in seconds when    | integer               | Minimum value: 0      | 0                     |
|                          | switching from the primary        |                       | Maximum value:        |                       |
|                          | neighbor to the secondary         |                       | 10000000              |                       |
|                          | neighbor from the neighbor start. |                       |                       |                       |
|                          | (0 - 10000000, default = 0).      |                       |                       |                       |
+--------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| neighbor-hold-down       | Enable/disable hold switching     | option                | \-                    | disable               |
|                          | from the secondary neighbor to    |                       |                       |                       |
|                          | the primary neighbor.             |                       |                       |                       |
+--------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                          | +-------------+--------------------------------------------------------+                                  |
|                          | | Option      | Description                                            |                                  |
|                          | +=============+========================================================+                                  |
|                          | | *enable*    | Enable hold switching from the secondary neighbor to   |                                  |
|                          | |             | the primary neighbor.                                  |                                  |
|                          | +-------------+--------------------------------------------------------+                                  |
|                          | | *disable*   | Disable hold switching from the secondary neighbor to  |                                  |
|                          | |             | the primary neighbor.                                  |                                  |
|                          | +-------------+--------------------------------------------------------+                                  |
+--------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| neighbor-hold-down-time  | Waiting period in seconds when    | integer               | Minimum value: 0      | 0                     |
|                          | switching from the secondary      |                       | Maximum value:        |                       |
|                          | neighbor to the primary neighbor  |                       | 10000000              |                       |
|                          | when hold-down is disabled. (0 -  |                       |                       |                       |
|                          | 10000000, default = 0).           |                       |                       |                       |
+--------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| speedtest-bypass-routing | Enable/disable bypass routing     | option                | \-                    | disable               |
|                          | when speedtest on a SD-WAN        |                       |                       |                       |
|                          | member.                           |                       |                       |                       |
+--------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                          | +-------------+--------------------------------------------------------+                                  |
|                          | | Option      | Description                                            |                                  |
|                          | +=============+========================================================+                                  |
|                          | | *disable*   | Disable SD-WAN.                                        |                                  |
|                          | +-------------+--------------------------------------------------------+                                  |
|                          | | *enable*    | Enable SD-WAN.                                         |                                  |
|                          | +-------------+--------------------------------------------------------+                                  |
+--------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| status                   | Enable/disable SD-WAN.            | option                | \-                    | disable               |
+--------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                          | +-------------+--------------------------------------------------------+                                  |
|                          | | Option      | Description                                            |                                  |
|                          | +=============+========================================================+                                  |
|                          | | *disable*   | Disable SD-WAN.                                        |                                  |
|                          | +-------------+--------------------------------------------------------+                                  |
|                          | | *enable*    | Enable SD-WAN.                                         |                                  |
|                          | +-------------+--------------------------------------------------------+                                  |
+--------------------------+-----------------------------------------------------------------------------------------------------------+

