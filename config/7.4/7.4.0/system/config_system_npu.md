# config system npu

Configure NPU attributes.

## Syntax

```
config system npu
    Description: Configure NPU attributes.
    set capwap-offload [enable|disable]
    set dedicated-management-affinity {string}
    set dedicated-management-cpu [enable|disable]
    set default-qos-type [policing|shaping|...]
    config dos-options
        Description: NPU DoS configurations.
        set npu-dos-meter-mode [global|local]
        set npu-dos-tpe-mode [enable|disable]
    end
    set double-level-mcast-offload [enable|disable]
    config dsw-dts-profile
        Description: Configure NPU DSW DTS profile.
        edit <profile-id>
            set min-limit {integer}
            set step {integer}
            set action [wait|drop|...]
        next
    end
    config dsw-queue-dts-profile
        Description: Configure NPU DSW Queue DTS profile.
        edit <name>
            set iport [eif0|eif1|...]
            set oport [eif0|eif1|...]
            set profile-id {integer}
            set queue-select {integer}
        next
    end
    set fastpath [disable|enable]
    config fp-anomaly
        Description: NP6Lite anomaly protection (packet drop or send trap to host).
        set ipv4-ver-err [drop|trap-to-host]
        set ipv4-ihl-err [drop|trap-to-host]
        set ipv4-len-err [drop|trap-to-host]
        set ipv4-ttlzero-err [drop|trap-to-host]
        set ipv4-csum-err [drop|trap-to-host]
        set ipv4-opt-err [drop|trap-to-host]
        set tcp-hlen-err [drop|trap-to-host]
        set tcp-plen-err [drop|trap-to-host]
        set tcp-csum-err [drop|trap-to-host]
        set udp-plen-err [drop|trap-to-host]
        set udp-hlen-err [drop|trap-to-host]
        set udp-csum-err [drop|trap-to-host]
        set udp-len-err [drop|trap-to-host]
        set udplite-cover-err [drop|trap-to-host]
        set udplite-csum-err [drop|trap-to-host]
        set icmp-minlen-err [drop|trap-to-host]
        set icmp-csum-err [drop|trap-to-host]
        set esp-minlen-err [drop|trap-to-host]
        set unknproto-minlen-err [drop|trap-to-host]
        set ipv6-ver-err [drop|trap-to-host]
        set ipv6-ihl-err [drop|trap-to-host]
        set ipv6-plen-zero [drop|trap-to-host]
        set ipv6-exthdr-order-err [drop|trap-to-host]
        set ipv6-exthdr-len-err [drop|trap-to-host]
    end
    set gtp-enhanced-cpu-range [0|1|...]
    set gtp-enhanced-mode [enable|disable]
    set gtp-support [enable|disable]
    set hash-tbl-spread [enable|disable]
    set host-shortcut-mode [bi-directional|host-shortcut]
    config hpe
        Description: Host protection engine configuration.
        set all-protocol {integer}
        set tcpsyn-max {integer}
        set tcpsyn-ack-max {integer}
        set tcpfin-rst-max {integer}
        set tcp-max {integer}
        set udp-max {integer}
        set icmp-max {integer}
        set sctp-max {integer}
        set esp-max {integer}
        set ip-frag-max {integer}
        set ip-others-max {integer}
        set arp-max {integer}
        set l2-others-max {integer}
        set high-priority {integer}
        set enable-shaper [disable|enable]
    end
    set htab-dedi-queue-nr {integer}
    set htab-msg-queue [data|idle|...]
    set htx-gtse-quota [100Mbps|200Mbps|...]
    set htx-icmp-csum-chk [drop|pass]
    set inbound-dscp-copy-port <interface1>, <interface2>, ...
    set intf-shaping-offload [enable|disable]
    set ip-fragment-offload [disable|enable]
    config ip-reassembly
        Description: IP reassebmly engine configuration.
        set min-timeout {integer}
        set max-timeout {integer}
        set status [disable|enable]
    end
    set iph-rsvd-re-cksum [enable|disable]
    set ipsec-dec-subengine-mask {user}
    set ipsec-enc-subengine-mask {user}
    set ipsec-inbound-cache [enable|disable]
    set ipsec-mtu-override [disable|enable]
    set ipsec-ob-np-sel [rr|Packet|...]
    set ipsec-over-vlink [enable|disable]
    config isf-np-queues
        Description: Configure queues of switch port connected to NP6 XAUI on ingress path.
        set cos0 {string}
        set cos1 {string}
        set cos2 {string}
        set cos3 {string}
        set cos4 {string}
        set cos5 {string}
        set cos6 {string}
        set cos7 {string}
    end
    set lag-out-port-select [disable|enable]
    set max-session-timeout {integer}
    set mcast-session-accounting [tpe-based|session-based|...]
    set napi-break-interval {integer}
    config np-queues
        Description: Configure queue assignment on NP7.
        config profile
            Description: Configure a NP7 class profile.
            edit <id>
                set type [cos|dscp]
                set weight {integer}
                set cos0 [queue0|queue1|...]
                set cos1 [queue0|queue1|...]
                set cos2 [queue0|queue1|...]
                set cos3 [queue0|queue1|...]
                set cos4 [queue0|queue1|...]
                set cos5 [queue0|queue1|...]
                set cos6 [queue0|queue1|...]
                set cos7 [queue0|queue1|...]
                set dscp0 [queue0|queue1|...]
                set dscp1 [queue0|queue1|...]
                set dscp2 [queue0|queue1|...]
                set dscp3 [queue0|queue1|...]
                set dscp4 [queue0|queue1|...]
                set dscp5 [queue0|queue1|...]
                set dscp6 [queue0|queue1|...]
                set dscp7 [queue0|queue1|...]
                set dscp8 [queue0|queue1|...]
                set dscp9 [queue0|queue1|...]
                set dscp10 [queue0|queue1|...]
                set dscp11 [queue0|queue1|...]
                set dscp12 [queue0|queue1|...]
                set dscp13 [queue0|queue1|...]
                set dscp14 [queue0|queue1|...]
                set dscp15 [queue0|queue1|...]
                set dscp16 [queue0|queue1|...]
                set dscp17 [queue0|queue1|...]
                set dscp18 [queue0|queue1|...]
                set dscp19 [queue0|queue1|...]
                set dscp20 [queue0|queue1|...]
                set dscp21 [queue0|queue1|...]
                set dscp22 [queue0|queue1|...]
                set dscp23 [queue0|queue1|...]
                set dscp24 [queue0|queue1|...]
                set dscp25 [queue0|queue1|...]
                set dscp26 [queue0|queue1|...]
                set dscp27 [queue0|queue1|...]
                set dscp28 [queue0|queue1|...]
                set dscp29 [queue0|queue1|...]
                set dscp30 [queue0|queue1|...]
                set dscp31 [queue0|queue1|...]
                set dscp32 [queue0|queue1|...]
                set dscp33 [queue0|queue1|...]
                set dscp34 [queue0|queue1|...]
                set dscp35 [queue0|queue1|...]
                set dscp36 [queue0|queue1|...]
                set dscp37 [queue0|queue1|...]
                set dscp38 [queue0|queue1|...]
                set dscp39 [queue0|queue1|...]
                set dscp40 [queue0|queue1|...]
                set dscp41 [queue0|queue1|...]
                set dscp42 [queue0|queue1|...]
                set dscp43 [queue0|queue1|...]
                set dscp44 [queue0|queue1|...]
                set dscp45 [queue0|queue1|...]
                set dscp46 [queue0|queue1|...]
                set dscp47 [queue0|queue1|...]
                set dscp48 [queue0|queue1|...]
                set dscp49 [queue0|queue1|...]
                set dscp50 [queue0|queue1|...]
                set dscp51 [queue0|queue1|...]
                set dscp52 [queue0|queue1|...]
                set dscp53 [queue0|queue1|...]
                set dscp54 [queue0|queue1|...]
                set dscp55 [queue0|queue1|...]
                set dscp56 [queue0|queue1|...]
                set dscp57 [queue0|queue1|...]
                set dscp58 [queue0|queue1|...]
                set dscp59 [queue0|queue1|...]
                set dscp60 [queue0|queue1|...]
                set dscp61 [queue0|queue1|...]
                set dscp62 [queue0|queue1|...]
                set dscp63 [queue0|queue1|...]
            next
        end
        config ethernet-type
            Description: Configure a NP7 QoS Ethernet Type.
            edit <name>
                set type {ether-type}
                set queue {integer}
                set weight {integer}
            next
        end
        config ip-protocol
            Description: Configure a NP7 QoS IP Protocol.
            edit <name>
                set protocol {integer}
                set queue {integer}
                set weight {integer}
            next
        end
        config ip-service
            Description: Configure a NP7 QoS IP Service.
            edit <name>
                set protocol {integer}
                set sport {integer}
                set dport {integer}
                set queue {integer}
                set weight {integer}
            next
        end
        config scheduler
            Description: Configure a NP7 QoS Scheduler.
            edit <name>
                set mode [none|priority|...]
            next
        end
    end
    set np6-cps-optimization-mode [enable|disable]
    set per-policy-accounting [disable|enable]
    set per-session-accounting [disable|traffic-log-only|...]
    config port-cpu-map
        Description: Configure NPU interface to CPU core mapping.
        edit <interface>
            set cpu-core {string}
        next
    end
    config port-npu-map
        Description: Configure port to NPU group mapping.
        edit <interface>
            set npu-group-index {integer}
        next
    end
    config port-path-option
        Description: Configure port using NPU or Intel-NIC.
        set ports-using-npu <interface-name1>, <interface-name2>, ...
    end
    config priority-protocol
        Description: Configure NPU priority protocol.
        set bgp [enable|disable]
        set slbc [enable|disable]
        set bfd [enable|disable]
    end
    set qos-mode [disable|priority|...]
    set qtm-buf-mode [6ch|4ch]
    set rdp-offload [enable|disable]
    set session-acct-interval {integer}
    set session-denied-offload [disable|enable]
    set shaping-stats [disable|enable]
    set sse-backpressure [enable|disable]
    set strip-clear-text-padding [enable|disable]
    set strip-esp-padding [enable|disable]
    config sw-eh-hash
        Description: Configure switch enhanced hashing.
        set computation [xor16|xor8|...]
        set ip-protocol [include|exclude]
        set source-ip-upper-16 [include|exclude]
        set source-ip-lower-16 [include|exclude]
        set destination-ip-upper-16 [include|exclude]
        set destination-ip-lower-16 [include|exclude]
        set source-port [include|exclude]
        set destination-port [include|exclude]
        set netmask-length {integer}
    end
    set sw-np-bandwidth [0G|2G|...]
    config sw-tr-hash
        Description: Configure switch traditional hashing.
        set draco15 [enable|disable]
        set tcp-udp-port [include|exclude]
    end
    set switch-np-hash [src-ip|dst-ip|...]
    set uesp-offload [enable|disable]
    set ull-port-mode [10G|25G]
    set vlan-lookup-cache [enable|disable]
end
```

## Parameters

+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+
| ![Note](https://fortinetweb.s3.amazonaws.com/docs.fortinet.com/v2/resources/9193cdf6-ef51-11ed-8e6d-fa163e15d75b/images/aa904d36284e6def234b2cfec19747a8_Icon-Light-Bulb.png "Note") | This command is available for    |
|                                                                                                                                                                                      | model(s): FortiGate 1000D,       |
|                                                                                                                                                                                      | FortiGate 100F, FortiGate 1100E, |
|                                                                                                                                                                                      | FortiGate 1101E, FortiGate       |
|                                                                                                                                                                                      | 140E-POE, FortiGate 140E,        |
|                                                                                                                                                                                      | FortiGate 1800F, FortiGate       |
|                                                                                                                                                                                      | 1801F, FortiGate 2000E,          |
|                                                                                                                                                                                      | FortiGate 200E, FortiGate 200F,  |
|                                                                                                                                                                                      | FortiGate 201E, FortiGate 201F,  |
|                                                                                                                                                                                      | FortiGate 2200E, FortiGate       |
|                                                                                                                                                                                      | 2201E, FortiGate 2500E,          |
|                                                                                                                                                                                      | FortiGate 2600F, FortiGate       |
|                                                                                                                                                                                      | 2601F, FortiGate 3000D,          |
|                                                                                                                                                                                      | FortiGate 300E, FortiGate 301E,  |
|                                                                                                                                                                                      | FortiGate 3100D, FortiGate       |
|                                                                                                                                                                                      | 3200D, FortiGate 3300E,          |
|                                                                                                                                                                                      | FortiGate 3301E, FortiGate       |
|                                                                                                                                                                                      | 3400E, FortiGate 3401E,          |
|                                                                                                                                                                                      | FortiGate 3500F, FortiGate       |
|                                                                                                                                                                                      | 3501F, FortiGate 3600E,          |
|                                                                                                                                                                                      | FortiGate 3601E, FortiGate       |
|                                                                                                                                                                                      | 3700D, FortiGate 3960E,          |
|                                                                                                                                                                                      | FortiGate 3980E, FortiGate 400E  |
|                                                                                                                                                                                      | Bypass, FortiGate 400E,          |
|                                                                                                                                                                                      | FortiGate 400F, FortiGate 401E,  |
|                                                                                                                                                                                      | FortiGate 401F, FortiGate 40F    |
|                                                                                                                                                                                      | 3G4G, FortiGate 40F, FortiGate   |
|                                                                                                                                                                                      | 4200F, FortiGate 4201F,          |
|                                                                                                                                                                                      | FortiGate 4400F, FortiGate       |
|                                                                                                                                                                                      | 4401F, FortiGate 5001E1,         |
|                                                                                                                                                                                      | FortiGate 5001E, FortiGate 500E, |
|                                                                                                                                                                                      | FortiGate 501E, FortiGate 600E,  |
|                                                                                                                                                                                      | FortiGate 600F, FortiGate 601E,  |
|                                                                                                                                                                                      | FortiGate 601F, FortiGate 60E    |
|                                                                                                                                                                                      | DSLJ, FortiGate 60E DSL,         |
|                                                                                                                                                                                      | FortiGate 60E-POE, FortiGate     |
|                                                                                                                                                                                      | 60E, FortiGate 60F, FortiGate    |
|                                                                                                                                                                                      | 61E, FortiGate 61F, FortiGate    |
|                                                                                                                                                                                      | 70F, FortiGate 71F, FortiGate    |
|                                                                                                                                                                                      | 800D, FortiGate 80E, FortiGate   |
|                                                                                                                                                                                      | 80F Bypass, FortiGate 80F-POE,   |
|                                                                                                                                                                                      | FortiGate 80F, FortiGate         |
|                                                                                                                                                                                      | 81E-POE, FortiGate 81E,          |
|                                                                                                                                                                                      | FortiGate 81F-POE, FortiGate     |
|                                                                                                                                                                                      | 81F, FortiGate 900D,             |
|                                                                                                                                                                                      | FortiGateRugged 60F 3G4G,        |
|                                                                                                                                                                                      | FortiGateRugged 60F, FortiWiFi   |
|                                                                                                                                                                                      | 40F 3G4G, FortiWiFi 40F,         |
|                                                                                                                                                                                      | FortiWiFi 60E DSLJ, FortiWiFi    |
|                                                                                                                                                                                      | 60E DSL, FortiWiFi 60E,          |
|                                                                                                                                                                                      | FortiWiFi 60F, FortiWiFi 61E,    |
|                                                                                                                                                                                      | FortiWiFi 61F, FortiWiFi 80F 2R, |
|                                                                                                                                                                                      | FortiWiFi 81F 2R 3G4G-POE,       |
|                                                                                                                                                                                      | FortiWiFi 81F 2R-POE, FortiWiFi  |
|                                                                                                                                                                                      | 81F 2R.                          |
|                                                                                                                                                                                      |                                  |
|                                                                                                                                                                                      | It is not available for:         |
|                                                                                                                                                                                      | FortiGate 90E, FortiGate 91E,    |
|                                                                                                                                                                                      | FortiGate VM64.                  |
+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+

