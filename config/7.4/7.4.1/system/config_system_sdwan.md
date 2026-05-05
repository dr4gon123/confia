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
            set service-id <id1>, <id2>, ...
            set srcaddr <name1>, <name2>, ...
            set dstaddr <name1>, <name2>, ...
            set srcaddr6 <name1>, <name2>, ...
            set dstaddr6 <name1>, <name2>, ...
            set srcintf <name1>, <name2>, ...
            set dstintf <name1>, <name2>, ...
            set service <name1>, <name2>, ...
            set packet-duplication [disable|force|...]
            set sla-match-service [enable|disable]
            set packet-de-duplication [enable|disable]
        next
    end
    set duplication-max-num {integer}
    set fail-alert-interfaces <name1>, <name2>, ...
    set fail-detect [enable|disable]
    config health-check
        Description: SD-WAN status checking or health checking. Identify a server on the Internet and determine how SD-WAN verifies that the FortiGate can communicate with it.
        edit <name>
            set probe-packets [disable|enable]
            set addr-mode [ipv4|ipv6]
            set system-dns [disable|enable]
            set server {string}
            set detect-mode [active|passive|...]
            set protocol [ping|tcp-echo|...]
            set port {integer}
            set quality-measured-method [half-open|half-close]
            set security-mode [none|authentication]
            set user {string}
            set password {password}
            set packet-size {integer}
            set ha-priority {integer}
            set ftp-mode [passive|port]
            set ftp-file {string}
            set http-get {string}
            set http-agent {string}
            set http-match {string}
            set dns-request-domain {string}
            set dns-match-ip {ipv4-address}
            set interval {integer}
            set probe-timeout {integer}
            set failtime {integer}
            set recoverytime {integer}
            set probe-count {integer}
            set diffservcode {user}
            set update-cascade-interface [enable|disable]
            set update-static-route [enable|disable]
            set embed-measured-health [enable|disable]
            set sla-id-redistribute {integer}
            set sla-fail-log-period {integer}
            set sla-pass-log-period {integer}
            set threshold-warning-packetloss {integer}
            set threshold-alert-packetloss {integer}
            set threshold-warning-latency {integer}
            set threshold-alert-latency {integer}
            set threshold-warning-jitter {integer}
            set threshold-alert-jitter {integer}
            set vrf {integer}
            set source {ipv4-address}
            set source6 {ipv6-address}
            set members <seq-num1>, <seq-num2>, ...
            set mos-codec [g711|g722|...]
            set class-id {integer}
            config sla
                Description: Service level agreement (SLA).
                edit <id>
                    set link-cost-factor {option1}, {option2}, ...
                    set latency-threshold {integer}
                    set jitter-threshold {integer}
                    set packetloss-threshold {integer}
                    set mos-threshold {string}
                    set priority-in-sla {integer}
                    set priority-out-sla {integer}
                next
            end
        next
    end
    set load-balance-mode [source-ip-based|weight-based|...]
    config members
        Description: FortiGate interfaces added to the SD-WAN.
        edit <seq-num>
            set interface {string}
            set zone {string}
            set gateway {ipv4-address}
            set preferred-source {ipv4-address}
            set source {ipv4-address}
            set gateway6 {ipv6-address}
            set source6 {ipv6-address}
            set cost {integer}
            set weight {integer}
            set priority {integer}
            set priority6 {integer}
            set spillover-threshold {integer}
            set ingress-spillover-threshold {integer}
            set volume-ratio {integer}
            set status [disable|enable]
            set comment {var-string}
        next
    end
    config neighbor
        Description: Create SD-WAN neighbor from BGP neighbor table to control route advertisements according to SLA status.
        edit <ip>
            set member <seq-num1>, <seq-num2>, ...
            set service-id {integer}
            set minimum-sla-meet-members {integer}
            set mode [sla|speedtest]
            set role [standalone|primary|...]
            set health-check {string}
            set sla-id {integer}
        next
    end
    set neighbor-hold-boot-time {integer}
    set neighbor-hold-down [enable|disable]
    set neighbor-hold-down-time {integer}
    config service
        Description: Create SD-WAN rules (also called services) to control how sessions are distributed to interfaces in the SD-WAN.
        edit <id>
            set name {string}
            set addr-mode [ipv4|ipv6]
            set load-balance [enable|disable]
            set input-device <name1>, <name2>, ...
            set input-device-negate [enable|disable]
            set input-zone <name1>, <name2>, ...
            set mode [auto|manual|...]
            set zone-mode [enable|disable]
            set minimum-sla-meet-members {integer}
            set hash-mode [round-robin|source-ip-based|...]
            set role [standalone|primary|...]
            set standalone-action [enable|disable]
            set quality-link {integer}
            set tos {user}
            set tos-mask {user}
            set protocol {integer}
            set start-port {integer}
            set end-port {integer}
            set start-src-port {integer}
            set end-src-port {integer}
            set dst <name1>, <name2>, ...
            set dst-negate [enable|disable]
            set src <name1>, <name2>, ...
            set dst6 <name1>, <name2>, ...
            set src6 <name1>, <name2>, ...
            set src-negate [enable|disable]
            set users <name1>, <name2>, ...
            set groups <name1>, <name2>, ...
            set internet-service [enable|disable]
            set internet-service-custom <name1>, <name2>, ...
            set internet-service-custom-group <name1>, <name2>, ...
            set internet-service-name <name1>, <name2>, ...
            set internet-service-group <name1>, <name2>, ...
            set internet-service-app-ctrl <id1>, <id2>, ...
            set internet-service-app-ctrl-group <name1>, <name2>, ...
            set internet-service-app-ctrl-category <id1>, <id2>, ...
            set health-check <name1>, <name2>, ...
            set link-cost-factor [latency|jitter|...]
            set packet-loss-weight {integer}
            set latency-weight {integer}
            set jitter-weight {integer}
            set bandwidth-weight {integer}
            set link-cost-threshold {integer}
            set hold-down-time {integer}
            set sla-stickiness [enable|disable]
            set dscp-forward [enable|disable]
            set dscp-reverse [enable|disable]
            set dscp-forward-tag {user}
            set dscp-reverse-tag {user}
            config sla
                Description: Service level agreement (SLA).
                edit <health-check>
                    set id {integer}
                next
            end
            set priority-members <seq-num1>, <seq-num2>, ...
            set priority-zone <name1>, <name2>, ...
            set status [enable|disable]
            set gateway [enable|disable]
            set default [enable|disable]
            set sla-compare-method [order|number]
            set tie-break [zone|cfg-order|...]
            set use-shortcut-sla [enable|disable]
            set passive-measurement [enable|disable]
            set agent-exclusive [enable|disable]
            set shortcut [enable|disable]
        next
    end
    set speedtest-bypass-routing [disable|enable]
    set status [disable|enable]
    config zone
        Description: Configure SD-WAN zones.
        edit <name>
            set service-sla-tie-break [cfg-order|fib-best-match|...]
            set minimum-sla-meet-members {integer}
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
|                          | generated.                        |                       |                       |                       |
+--------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| duplication-max-num      | Maximum number of interface       | integer               | Minimum value: 2      | 2                     |
|                          | members a packet is duplicated in |                       | Maximum value: 4      |                       |
|                          | the SD-WAN zone.                  |                       |                       |                       |
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
|                          | neighbor from the neighbor        |                       |                       |                       |
|                          | start..                           |                       |                       |                       |
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
|                          | when hold-down is disabled..      |                       |                       |                       |
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

