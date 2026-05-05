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
            set action [wait|drop|...]
            set min-limit {integer}
            set step {integer}
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
        Description: IPv4/IPv6 anomaly protection.
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
        set sctp-csum-err [allow|drop|...]
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
    set gtp-enhanced-cpu-range [0|1|...]
    set gtp-enhanced-mode [enable|disable]
    set gtp-support [enable|disable]
    set hash-tbl-spread [enable|disable]
    set host-shortcut-mode [bi-directional|host-shortcut]
    config hpe
        Description: Host protection engine configuration.
        set all-protocol {integer}
        set arp-max {integer}
        set enable-shaper [disable|enable]
        set esp-max {integer}
        set high-priority {integer}
        set icmp-max {integer}
        set ip-frag-max {integer}
        set ip-others-max {integer}
        set l2-others-max {integer}
        set sctp-max {integer}
        set tcp-max {integer}
        set tcpfin-rst-max {integer}
        set tcpsyn-ack-max {integer}
        set tcpsyn-max {integer}
        set udp-max {integer}
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
        set max-timeout {integer}
        set min-timeout {integer}
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
    set max-receive-unit {integer}
    set max-session-timeout {integer}
    set mcast-session-accounting [tpe-based|session-based|...]
    set napi-break-interval {integer}
    config np-queues
        Description: Configure queue assignment on NP7.
        config ethernet-type
            Description: Configure a NP7 QoS Ethernet Type.
            edit <name>
                set queue {integer}
                set type {ether-type}
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
                set dport {integer}
                set protocol {integer}
                set queue {integer}
                set sport {integer}
                set weight {integer}
            next
        end
        config profile
            Description: Configure a NP7 class profile.
            edit <id>
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
                set dscp2 [queue0|queue1|...]
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
                set dscp3 [queue0|queue1|...]
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
                set dscp4 [queue0|queue1|...]
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
                set dscp5 [queue0|queue1|...]
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
                set dscp6 [queue0|queue1|...]
                set dscp60 [queue0|queue1|...]
                set dscp61 [queue0|queue1|...]
                set dscp62 [queue0|queue1|...]
                set dscp63 [queue0|queue1|...]
                set dscp7 [queue0|queue1|...]
                set dscp8 [queue0|queue1|...]
                set dscp9 [queue0|queue1|...]
                set type [cos|dscp]
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
    config npu-tcam
        Description: Configure NPU TCAM policies.
        edit <name>
            config data
                Description: Data fields of TCAM.
                set df [enable|disable]
                set dstip {ipv4-address-any}
                set dstipv6 {ipv6-address}
                set dstmac {mac-address}
                set dstport {integer}
                set ethertype {ether-type}
                set ext-tag [enable|disable]
                set frag-off {integer}
                set gen-buf-cnt {integer}
                set gen-iv [valid|invalid]
                set gen-l3-flags {integer}
                set gen-l4-flags {integer}
                set gen-pkt-ctrl {integer}
                set gen-pri {integer}
                set gen-pri-v [valid|invalid]
                set gen-tv [valid|invalid]
                set ihl {integer}
                set ip4-id {integer}
                set ip6-fl {integer}
                set ipver {integer}
                set l4-wd10 {integer}
                set l4-wd11 {integer}
                set l4-wd8 {integer}
                set l4-wd9 {integer}
                set mf [enable|disable]
                set protocol {integer}
                set slink {integer}
                set smac-change [enable|disable]
                set sp {integer}
                set src-cfi [enable|disable]
                set src-prio {integer}
                set src-updt [enable|disable]
                set srcip {ipv4-address-any}
                set srcipv6 {ipv6-address}
                set srcmac {mac-address}
                set srcport {integer}
                set svid {integer}
                set tcp-ack [enable|disable]
                set tcp-cwr [enable|disable]
                set tcp-ece [enable|disable]
                set tcp-fin [enable|disable]
                set tcp-push [enable|disable]
                set tcp-rst [enable|disable]
                set tcp-syn [enable|disable]
                set tcp-urg [enable|disable]
                set tgt-cfi [enable|disable]
                set tgt-prio {integer}
                set tgt-updt [enable|disable]
                set tgt-v [valid|invalid]
                set tos {integer}
                set tp {integer}
                set ttl {integer}
                set tvid {integer}
                set vdid {integer}
            end
            config mask
                Description: Mask fields of TCAM.
                set df [enable|disable]
                set dstip {ipv4-address-any}
                set dstipv6 {ipv6-address}
                set dstmac {mac-address}
                set dstport {integer}
                set ethertype {ether-type}
                set ext-tag [enable|disable]
                set frag-off {integer}
                set gen-buf-cnt {integer}
                set gen-iv [valid|invalid]
                set gen-l3-flags {integer}
                set gen-l4-flags {integer}
                set gen-pkt-ctrl {integer}
                set gen-pri {integer}
                set gen-pri-v [valid|invalid]
                set gen-tv [valid|invalid]
                set ihl {integer}
                set ip4-id {integer}
                set ip6-fl {integer}
                set ipver {integer}
                set l4-wd10 {integer}
                set l4-wd11 {integer}
                set l4-wd8 {integer}
                set l4-wd9 {integer}
                set mf [enable|disable]
                set protocol {integer}
                set slink {integer}
                set smac-change [enable|disable]
                set sp {integer}
                set src-cfi [enable|disable]
                set src-prio {integer}
                set src-updt [enable|disable]
                set srcip {ipv4-address-any}
                set srcipv6 {ipv6-address}
                set srcmac {mac-address}
                set srcport {integer}
                set svid {integer}
                set tcp-ack [enable|disable]
                set tcp-cwr [enable|disable]
                set tcp-ece [enable|disable]
                set tcp-fin [enable|disable]
                set tcp-push [enable|disable]
                set tcp-rst [enable|disable]
                set tcp-syn [enable|disable]
                set tcp-urg [enable|disable]
                set tgt-cfi [enable|disable]
                set tgt-prio {integer}
                set tgt-updt [enable|disable]
                set tgt-v [valid|invalid]
                set tos {integer}
                set tp {integer}
                set ttl {integer}
                set tvid {integer}
                set vdid {integer}
            end
            config mir-act
                Description: Mirror action of TCAM.
                set vlif {integer}
            end
            set oid {integer}
            config pri-act
                Description: Priority action of TCAM.
                set priority {integer}
                set weight {integer}
            end
            config sact
                Description: Source action of TCAM.
                set act {integer}
                set act-v [enable|disable]
                set bmproc {integer}
                set bmproc-v [enable|disable]
                set df-lif {integer}
                set df-lif-v [enable|disable]
                set dfr {integer}
                set dfr-v [enable|disable]
                set dmac-skip {integer}
                set dmac-skip-v [enable|disable]
                set dosen {integer}
                set dosen-v [enable|disable]
                set espff-proc {integer}
                set espff-proc-v [enable|disable]
                set etype-pid {integer}
                set etype-pid-v [enable|disable]
                set frag-proc {integer}
                set frag-proc-v [enable|disable]
                set fwd {integer}
                set fwd-lif {integer}
                set fwd-lif-v [enable|disable]
                set fwd-tvid {integer}
                set fwd-tvid-v [enable|disable]
                set fwd-v [enable|disable]
                set icpen {integer}
                set icpen-v [enable|disable]
                set igmp-mld-snp {integer}
                set igmp-mld-snp-v [enable|disable]
                set learn {integer}
                set learn-v [enable|disable]
                set m-srh-ctrl {integer}
                set m-srh-ctrl-v [enable|disable]
                set mac-id {integer}
                set mac-id-v [enable|disable]
                set mss {integer}
                set mss-v [enable|disable]
                set pleen {integer}
                set pleen-v [enable|disable]
                set prio-pid {integer}
                set prio-pid-v [enable|disable]
                set promis {integer}
                set promis-v [enable|disable]
                set rfsh {integer}
                set rfsh-v [enable|disable]
                set smac-skip {integer}
                set smac-skip-v [enable|disable]
                set tp-smchk-v [enable|disable]
                set tp_smchk {integer}
                set tpe-id {integer}
                set tpe-id-v [enable|disable]
                set vdm {integer}
                set vdm-v [enable|disable]
                set vdom-id {integer}
                set vdom-id-v [enable|disable]
                set x-mode {integer}
                set x-mode-v [enable|disable]
            end
            config tact
                Description: Target action of TCAM.
                set act {integer}
                set act-v [enable|disable]
                set fmtuv4-s {integer}
                set fmtuv4-s-v [enable|disable]
                set fmtuv6-s {integer}
                set fmtuv6-s-v [enable|disable]
                set lnkid {integer}
                set lnkid-v [enable|disable]
                set mac-id {integer}
                set mac-id-v [enable|disable]
                set mss-t {integer}
                set mss-t-v [enable|disable]
                set mtuv4 {integer}
                set mtuv4-v [enable|disable]
                set mtuv6 {integer}
                set mtuv6-v [enable|disable]
                set slif-act {integer}
                set slif-act-v [enable|disable]
                set sublnkid {integer}
                set sublnkid-v [enable|disable]
                set tgtv-act {integer}
                set tgtv-act-v [enable|disable]
                set tlif-act {integer}
                set tlif-act-v [enable|disable]
                set tpeid {integer}
                set tpeid-v [enable|disable]
                set v6fe {integer}
                set v6fe-v [enable|disable]
                set vep-en-v [enable|disable]
                set vep-slid {integer}
                set vep-slid-v [enable|disable]
                set vep_en {integer}
                set xlt-lif {integer}
                set xlt-lif-v [enable|disable]
                set xlt-vid {integer}
                set xlt-vid-v [enable|disable]
            end
            set type [L2_src_tc|L2_tgt_tc|...]
            set vid {integer}
        next
    end
    set per-policy-accounting [disable|enable]
    set per-session-accounting [traffic-log-only|disable|...]
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
        set bfd [enable|disable]
        set bgp [enable|disable]
        set slbc [enable|disable]
    end
    set qos-mode [disable|priority|...]
    set qtm-buf-mode [6ch|4ch]
    set rdp-offload [enable|disable]
    set session-acct-interval {integer}
    set session-denied-offload [disable|enable]
    set shaping-stats [disable|enable]
    set split-ipsec-engines [disable|enable]
    set sse-backpressure [enable|disable]
    set strip-clear-text-padding [enable|disable]
    set strip-esp-padding [enable|disable]
    config sw-eh-hash
        Description: Configure switch enhanced hashing.
        set computation [xor16|xor8|...]
        set destination-ip-lower-16 [include|exclude]
        set destination-ip-upper-16 [include|exclude]
        set destination-port [include|exclude]
        set ip-protocol [include|exclude]
        set netmask-length {integer}
        set source-ip-lower-16 [include|exclude]
        set source-ip-upper-16 [include|exclude]
        set source-port [include|exclude]
    end
    set sw-np-bandwidth [0G|2G|...]
    config sw-tr-hash
        Description: Configure switch traditional hashing.
        set draco15 [enable|disable]
        set tcp-udp-port [include|exclude]
    end
    set switch-np-hash [src-ip|dst-ip|...]
    set tunnel-over-vlink [enable|disable]
    set uesp-offload [enable|disable]
    set ull-port-mode [10G|25G]
    set vlan-lookup-cache [enable|disable]
    set vxlan-offload [enable|disable]
end
```

## Parameters

+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+
| ![Note](https://fortinetweb.s3.amazonaws.com/docs.fortinet.com/v2/resources/8f97e145-3344-11ef-bfe5-fa163e15d75b/images/3d5a27c10e382df6c0e4ffe77ffa76e2_Icon-Light-Bulb.png "Note") | This command is available for    |
|                                                                                                                                                                                      | model(s): FortiGate 1000D,       |
|                                                                                                                                                                                      | FortiGate 1000F, FortiGate       |
|                                                                                                                                                                                      | 1001F, FortiGate 100F, FortiGate |
|                                                                                                                                                                                      | 101F, FortiGate 1100E, FortiGate |
|                                                                                                                                                                                      | 1101E, FortiGate 1800F,          |
|                                                                                                                                                                                      | FortiGate 1801F, FortiGate       |
|                                                                                                                                                                                      | 2000E, FortiGate 200E, FortiGate |
|                                                                                                                                                                                      | 200F, FortiGate 201E, FortiGate  |
|                                                                                                                                                                                      | 201F, FortiGate 2200E, FortiGate |
|                                                                                                                                                                                      | 2201E, FortiGate 2500E,          |
|                                                                                                                                                                                      | FortiGate 2600F, FortiGate       |
|                                                                                                                                                                                      | 2601F, FortiGate 3000D,          |
|                                                                                                                                                                                      | FortiGate 3000F, FortiGate       |
|                                                                                                                                                                                      | 3001F, FortiGate 300E, FortiGate |
|                                                                                                                                                                                      | 301E, FortiGate 3100D, FortiGate |
|                                                                                                                                                                                      | 3200D, FortiGate 3200F,          |
|                                                                                                                                                                                      | FortiGate 3201F, FortiGate       |
|                                                                                                                                                                                      | 3300E, FortiGate 3301E,          |
|                                                                                                                                                                                      | FortiGate 3400E, FortiGate       |
|                                                                                                                                                                                      | 3401E, FortiGate 3500F,          |
|                                                                                                                                                                                      | FortiGate 3501F, FortiGate       |
|                                                                                                                                                                                      | 3600E, FortiGate 3601E,          |
|                                                                                                                                                                                      | FortiGate 3700D, FortiGate       |
|                                                                                                                                                                                      | 3700F, FortiGate 3701F,          |
|                                                                                                                                                                                      | FortiGate 3960E, FortiGate       |
|                                                                                                                                                                                      | 3980E, FortiGate 400E Bypass,    |
|                                                                                                                                                                                      | FortiGate 400E, FortiGate 400F,  |
|                                                                                                                                                                                      | FortiGate 401E, FortiGate 401F,  |
|                                                                                                                                                                                      | FortiGate 40F 3G4G, FortiGate    |
|                                                                                                                                                                                      | 40F, FortiGate 4200F, FortiGate  |
|                                                                                                                                                                                      | 4201F, FortiGate 4400F,          |
|                                                                                                                                                                                      | FortiGate 4401F, FortiGate       |
|                                                                                                                                                                                      | 5001E1, FortiGate 5001E,         |
|                                                                                                                                                                                      | FortiGate 500E, FortiGate 501E,  |
|                                                                                                                                                                                      | FortiGate 600E, FortiGate 600F,  |
|                                                                                                                                                                                      | FortiGate 601E, FortiGate 601F,  |
|                                                                                                                                                                                      | FortiGate 60F, FortiGate 61F,    |
|                                                                                                                                                                                      | FortiGate 70F, FortiGate 71F,    |
|                                                                                                                                                                                      | FortiGate 800D, FortiGate 80F    |
|                                                                                                                                                                                      | Bypass, FortiGate 80F DSL,       |
|                                                                                                                                                                                      | FortiGate 80F-POE, FortiGate     |
|                                                                                                                                                                                      | 80F, FortiGate 81F-POE,          |
|                                                                                                                                                                                      | FortiGate 81F, FortiGate 900D,   |
|                                                                                                                                                                                      | FortiGate 900G, FortiGate 901G,  |
|                                                                                                                                                                                      | FortiGateRugged 60F 3G4G,        |
|                                                                                                                                                                                      | FortiGateRugged 60F,             |
|                                                                                                                                                                                      | FortiGateRugged 70F 3G4G,        |
|                                                                                                                                                                                      | FortiGateRugged 70F, FortiWiFi   |
|                                                                                                                                                                                      | 40F 3G4G, FortiWiFi 40F,         |
|                                                                                                                                                                                      | FortiWiFi 60F, FortiWiFi 61F,    |
|                                                                                                                                                                                      | FortiWiFi 80F 2R 3G4G DSL,       |
|                                                                                                                                                                                      | FortiWiFi 80F 2R, FortiWiFi 81F  |
|                                                                                                                                                                                      | 2R 3G4G DSL, FortiWiFi 81F 2R    |
|                                                                                                                                                                                      | 3G4G-POE, FortiWiFi 81F 2R-POE,  |
|                                                                                                                                                                                      | FortiWiFi 81F 2R.                |
|                                                                                                                                                                                      |                                  |
|                                                                                                                                                                                      | It is not available for:         |
|                                                                                                                                                                                      | FortiGate-VM64.                  |
+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+

