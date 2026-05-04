# config system npu

Configure NPU attributes.

## Syntax

```
config system npu
    Description: Configure NPU attributes.
    set capwap-offload [enable|disable]
    set dedicated-lacp-queue [enable|disable]
    set dedicated-management-affinity {string}
    set dedicated-management-cpu [enable|disable]
    set default-ipsec-mcs-type [policing|shaping]
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
        set gre-csum-err [allow|drop|...]
        set icmp-csum-err [allow|drop|...]
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
        set tcp-csum-err [allow|drop|...]
        set tcp-fin-noack [allow|drop|...]
        set tcp-fin-only [allow|drop|...]
        set tcp-land [allow|drop|...]
        set tcp-no-flag [allow|drop|...]
        set tcp-syn-data [allow|drop|...]
        set tcp-syn-fin [allow|drop|...]
        set tcp-winnuke [allow|drop|...]
        set udp-csum-err [allow|drop|...]
        set udp-land [allow|drop|...]
        set udplite-csum-err [allow|drop|...]
    end
    set gtp-enhanced-cpu-range [0|1|...]
    set gtp-enhanced-mode [enable|disable]
    set gtp-support [enable|disable]
    set hash-tbl-spread [enable|disable]
    set hif-queue-customize [numa-affinity|all-cpus]
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
    set ike-port <port1>, <port2>, ...
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
    set ipsec-STS-timeout [1|2|...]
    set ipsec-dec-subengine-mask {user}
    set ipsec-enc-subengine-mask {user}
    set ipsec-inbound-cache [enable|disable]
    set ipsec-mtu-override [disable|enable]
    set ipsec-ob-np-sel [rr|Packet|...]
    set ipsec-ordering [disable|enable]
    set ipsec-over-vlink [enable|disable]
    set ipsec-throughput-msg-frequency [disable|32KB|...]
    set ipt-STS-timeout [1|2|...]
    set ipt-throughput-msg-frequency [disable|32KB|...]
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
    set lag-hash-gre [disable|gre_inner_l3|...]
    set lag-out-port-select [disable|enable]
    set max-receive-unit {integer}
    set max-session-timeout {integer}
    set mcast-denied-ses-offload [enable|disable]
    set mcast-session-accounting [tpe-based|session-based|...]
    set mcs-auto-start [enable|disable]
    set mcs-host-packet-tpe-shaping [enable|disable]
    set napi-break-interval {integer}
    config np-queues
        Description: Configure queue assignment on NP7.
        set custom-etype-lookup [enable|disable]
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
    set shadow-virtual-switch [enable|disable]
    set shaping-stats [disable|enable]
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
    set sw-np-pause [disable|enable]
    set sw-np-rate {integer}
    set sw-np-rate-burst {integer}
    set sw-np-rate-unit [mbps|pps]
    config sw-tr-hash
        Description: Configure switch traditional hashing.
        set draco15 [enable|disable]
        set tcp-udp-port [include|exclude]
    end
    set switch-np-hash [src-ip|dst-ip|...]
    set tunnel-over-vlink [enable|disable]
    set uesp-offload [enable|disable]
    set ull-port-mode [10G|25G]
    set use-mse-oft [enable|disable]
    set vlan-lookup-cache [enable|disable]
    set vxlan-mac-flapping-guard [enable|disable]
    set vxlan-offload [enable|disable]
end
```

## Parameters

+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| Parameter                      | Description                       | Type                   | Size                   | Default                |
+================================+===================================+========================+========================+========================+
| capwap-offload \*              | Enable/disable offloading managed | option                 | \-                     | enable                 |
|                                | FortiAP and FortiLink CAPWAP      |                        |                        |                        |
|                                | sessions.                         |                        |                        |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *enable*    | Enable CAPWAP offload.                                 |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *disable*   | Disable CAPWAP offload.                                |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| dedicated-lacp-queue \*        | Enable/disable dedication of HIF  | option                 | \-                     | disable                |
|                                | queue #0 for LACP.                |                        |                        |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *enable*    | Enable dedication of HIF queue #0 for LACP.            |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *disable*   | Disable dedication of HIF queue #0 for LACP.           |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| dedicated-management-affinity  | Affinity setting for management   | string                 | Maximum length: 79     | 1                      |
| \*                             | daemons (hexadecimal value up to  |                        |                        |                        |
|                                | 256 bits in the format of         |                        |                        |                        |
|                                | xxxxxxxxxxxxxxxx).                |                        |                        |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| dedicated-management-cpu \*    | Enable to dedicate one CPU for    | option                 | \-                     | disable                |
|                                | GUI and CLI connections when NPs  |                        |                        |                        |
|                                | are busy.                         |                        |                        |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *enable*    | Enable dedication of CPU #0 for management tasks.      |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *disable*   | Disable dedication of CPU #0 for management tasks.     |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| default-ipsec-mcs-type \*      | Configure default IPSec MCS type. | option                 | \-                     | policing               |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *policing*  | IPSec MCS type policing.                               |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *shaping*   | IPSec MCS type shaping.                                |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| default-qos-type \*            | Set default QoS type.             | option                 | \-                     | policing               |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +---------------------+--------------------------------------------------------+                             |
|                                | | Option              | Description                                            |                             |
|                                | +=====================+========================================================+                             |
|                                | | *policing*          | QoS type policing.                                     |                             |
|                                | +---------------------+--------------------------------------------------------+                             |
|                                | | *shaping*           | QoS type shaping.                                      |                             |
|                                | +---------------------+--------------------------------------------------------+                             |
|                                | | *policing-enhanced* | Enhanced QoS type policing.                            |                             |
|                                | +---------------------+--------------------------------------------------------+                             |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| double-level-mcast-offload \*  | Enable/disable double level mcast | option                 | \-                     | disable                |
|                                | offload.                          |                        |                        |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *enable*    | Enable double level mcast offload.                     |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *disable*   | Disable double level mcast offload.                    |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| fastpath \*                    | Enable/disable NP6 offloading     | option                 | \-                     | enable                 |
|                                | (also called fast path).          |                        |                        |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *disable*   | Disable NP6 offloading (fast path).                    |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *enable*    | Enable NP6 offloading (fast path).                     |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| gtp-enhanced-cpu-range \*      | GTP enhanced CPU range option.    | option                 | \-                     | 0                      |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *0*         | Inspect GTPU packets by all CPUs.                      |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *1*         | Inspect GTPU packets by Master CPUs.                   |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *2*         | Inspect GTPU packets by Slave CPUs.                    |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| gtp-enhanced-mode \*           | Enable/disable GTP enhanced mode. | option                 | \-                     | disable                |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *enable*    | Enable GTP enhanced mode.                              |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *disable*   | Disable GTP enhanced mode.                             |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| gtp-support \*                 | Enable/Disable NP7 GTP support    | option                 | \-                     | disable                |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *enable*    | Enable NP7 GTP support                                 |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *disable*   | Disable NP7 GTP support                                |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| hash-tbl-spread \*             | Enable/disable hash table entry   | option                 | \-                     | enable                 |
|                                | spread (default enabled).         |                        |                        |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *enable*    | Enable hash table entry spread.                        |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *disable*   | Disable hash table entry spread.                       |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| hif-queue-customize \*         | Customize HIF queue settings.     | option                 | \-                     | numa-affinity          |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-----------------+--------------------------------------------------------+                                 |
|                                | | Option          | Description                                            |                                 |
|                                | +=================+========================================================+                                 |
|                                | | *numa-affinity* | Allocate HIF queues to match CPUs on the same NUMA     |                                 |
|                                | |                 | node.                                                  |                                 |
|                                | +-----------------+--------------------------------------------------------+                                 |
|                                | | *all-cpus*      | Allocate HIF queues for all the CPUs.                  |                                 |
|                                | +-----------------+--------------------------------------------------------+                                 |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| host-shortcut-mode \*          | Set NP6 host shortcut mode.       | option                 | \-                     | bi-directional         |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +------------------+--------------------------------------------------------+                                |
|                                | | Option           | Description                                            |                                |
|                                | +==================+========================================================+                                |
|                                | | *bi-directional* | Offload TCP and IP Tunnel sessions in both directions  |                                |
|                                | |                  | between 10G and 1G interfaces (normal operation).      |                                |
|                                | +------------------+--------------------------------------------------------+                                |
|                                | | *host-shortcut*  | Only offload TCP and IP Tunnel sessions received by 1G |                                |
|                                | |                  | interfaces. Select if packets are dropped for          |                                |
|                                | |                  | offloaded traffic between 10G to 1G interfaces.        |                                |
|                                | +------------------+--------------------------------------------------------+                                |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| htab-dedi-queue-nr \*          | Set the number of dedicate queue  | integer                | Minimum value: 1       | 1                      |
|                                | for hash table messages.          |                        | Maximum value: 2       |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| htab-msg-queue \*              | Set hash table message queue      | option                 | \-                     | dedicated              |
|                                | mode.                             |                        |                        |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *data*      | Use data queue.                                        |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *idle*      | Use idle queue.                                        |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *dedicated* | Use dedicated queue.                                   |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| htx-gtse-quota \*              | Configure HTX GTSE quota.         | option                 | \-                     | 1Gbps                  |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *100Mbps*   | 100Mbps.                                               |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *200Mbps*   | 200Mbps.                                               |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *300Mbps*   | 300Mbps.                                               |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *400Mbps*   | 400Mbps.                                               |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *500Mbps*   | 500Mbps.                                               |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *600Mbps*   | 600Mbps.                                               |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *700Mbps*   | 700Mbps.                                               |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *800Mbps*   | 800Mbps.                                               |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *900Mbps*   | 900Mbps.                                               |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *1Gbps*     | 1Gbps.                                                 |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *2Gbps*     | 2Gbps.                                                 |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *4Gbps*     | 4Gbps.                                                 |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *8Gbps*     | 8Gbps.                                                 |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *10Gbps*    | 10Gbps.                                                |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| htx-icmp-csum-chk \*           | Set HTX icmp csum checking mode.  | option                 | \-                     | drop                   |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *drop*      | Drop bad icmp csum.                                    |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *pass*      | Pass bad icmp csum.                                    |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ike-port `<port>` \*           | Configure additional IPsec ports  | integer                | Minimum value: 1       |                        |
|                                | for offloading.                   |                        | Maximum value: 65535   |                        |
|                                |                                   |                        |                        |                        |
|                                | Port.                             |                        |                        |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| inbound-dscp-copy-port         | Physical interfaces that support  | string                 | Maximum length: 15     |                        |
| `<interface>` \*               | inbound-dscp-copy.                |                        |                        |                        |
|                                |                                   |                        |                        |                        |
|                                | Physical interface name.          |                        |                        |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| intf-shaping-offload \*        | Enable/disable NPU offload when   | option                 | \-                     | disable                |
|                                | doing interface-based traffic     |                        |                        |                        |
|                                | shaping according to the          |                        |                        |                        |
|                                | egress-shaping-profile.           |                        |                        |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *enable*    | Enable NPU offload when doing interface-based traffic  |                                     |
|                                | |             | shaping according to the egress-shaping-profile.       |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *disable*   | Disable NPU offload when doing interface-based traffic |                                     |
|                                | |             | shaping according to the egress-shaping-profile.       |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ip-fragment-offload \*         | Enable/disable NP7 NPU IP         | option                 | \-                     | enable                 |
|                                | fragment offload.                 |                        |                        |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *disable*   | Disable IP fragment offload.                           |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *enable*    | Enable IP fragment offload.                            |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| iph-rsvd-re-cksum \*           | Enable/disable IP checksum        | option                 | \-                     | disable                |
|                                | re-calculation for packets with   |                        |                        |                        |
|                                | iph.reserved bit set.             |                        |                        |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *enable*    | Enable IP checksum re-calculation for packets with     |                                     |
|                                | |             | iph.reserved bit set.                                  |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *disable*   | Disable IP checksum re-calculation for packets with    |                                     |
|                                | |             | iph.reserved bit set.                                  |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ipsec-STS-timeout \*           | Set NP7Lite IPsec STS msg         | option                 | \-                     | 5                      |
|                                | timeout.                          |                        |                        |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *1*         | Set NP7Lite STS message timeout to 1 sec(recommended   |                                     |
|                                | |             | for IPSec throughput GUI).                             |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *2*         | Set NP7Lite STS message timeout to 2 sec.              |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *3*         | Set NP7Lite STS message timeout to 3 sec.              |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *4*         | Set NP7Lite STS message timeout to 4 sec.              |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *5*         | Set NP7Lite STS message timeout to 5 sec(default).     |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *6*         | Set NP7Lite STS message timeout to 6 sec.              |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *7*         | Set NP7Lite STS message timeout to 7 sec.              |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *8*         | Set NP7Lite STS message timeout to 8 sec.              |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *9*         | Set NP7Lite STS message timeout to 9 sec.              |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *10*        | Set NP7Lite STS message timeout to 10 sec.             |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ipsec-dec-subengine-mask \*    | IPsec decryption subengine mask   | user                   | Not Specified          |                        |
|                                | (0x1 - 0xff, default 0xff).       |                        |                        |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ipsec-enc-subengine-mask \*    | IPsec encryption subengine mask   | user                   | Not Specified          |                        |
|                                | (0x1 - 0xff, default 0xff).       |                        |                        |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ipsec-inbound-cache \*         | Enable/disable IPsec inbound      | option                 | \-                     | enable                 |
|                                | cache for anti-replay.            |                        |                        |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *enable*    | Enable inbound cache always.                           |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *disable*   | Disable inbound cache when IPsec anti-replay is on.    |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ipsec-mtu-override \*          | Enable/disable NP6 IPsec MTU      | option                 | \-                     | disable                |
|                                | override.                         |                        |                        |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *disable*   | Disable NP6 IPsec MTU override.                        |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *enable*    | Enable NP6 IPsec MTU override.                         |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ipsec-ob-np-sel \*             | IPsec NP selection for OB SA      | option                 | \-                     | rr                     |
|                                | offloading.                       |                        |                        |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *rr*        | Round Robin.                                           |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *Packet*    | NPU of the first packet.                               |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *Hash*      | Hash.                                                  |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ipsec-ordering \*              | Enable/disable IPsec ordering.    | option                 | \-                     | disable                |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *disable*   | Disable IPsec ordering.                                |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *enable*    | Enable IPsec ordering.                                 |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ipsec-over-vlink \*            | Enable/disable IPsec over vlink.  | option                 | \-                     | disable                |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *enable*    | Enable IPSEC over vlink.                               |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *disable*   | Disable IPSEC over vlink.                              |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ipsec-throughput-msg-frequency | Set NP7Lite IPsec throughput msg  | option                 | \-                     | disable                |
| \*                             | frequency: 0\--disable 1\--32KB   |                        |                        |                        |
|                                | 3\--64KB \... 0x3fff\--256MB      |                        |                        |                        |
|                                | 0x7fff\--512MB 0xffff\--1GB.      |                        |                        |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *disable*   | Disable NP7Lite throughput update message.             |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *32KB*      | Set NP7Lite throughput update message frequency to     |                                     |
|                                | |             | 32KB.                                                  |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *64KB*      | Set NP7Lite throughput update message frequency to     |                                     |
|                                | |             | 64KB.                                                  |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *128KB*     | Set NP7Lite throughput update message frequency to     |                                     |
|                                | |             | 128KB.                                                 |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *256KB*     | Set NP7Lite throughput update message frequency to     |                                     |
|                                | |             | 256KB.                                                 |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *512KB*     | Set NP7Lite throughput update message frequency to     |                                     |
|                                | |             | 512KB.                                                 |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *1MB*       | Set NP7Lite throughput update message frequency to     |                                     |
|                                | |             | 1MB.                                                   |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *2MB*       | Set NP7Lite throughput update message frequency to     |                                     |
|                                | |             | 2MB.                                                   |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *4MB*       | Set NP7Lite throughput update message frequency to     |                                     |
|                                | |             | 4MB.                                                   |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *8MB*       | Set NP7Lite throughput update message frequency to     |                                     |
|                                | |             | 8MB.                                                   |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *16MB*      | Set NP7Lite throughput update message frequency to     |                                     |
|                                | |             | 16MB.                                                  |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *32MB*      | Set NP7Lite throughput update message frequency to     |                                     |
|                                | |             | 32MB.                                                  |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *64MB*      | Set NP7Lite throughput update message frequency to     |                                     |
|                                | |             | 64MB.                                                  |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *128MB*     | Set NP7Lite throughput update message frequency to     |                                     |
|                                | |             | 128MB.                                                 |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *256MB*     | Set NP7Lite throughput update message frequency to     |                                     |
|                                | |             | 256MB.                                                 |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *512MB*     | Set NP7Lite throughput update message frequency to     |                                     |
|                                | |             | 512MB.                                                 |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *1GB*       | Set NP7Lite throughput update message frequency to     |                                     |
|                                | |             | 1GB.                                                   |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ipt-STS-timeout \*             | Set NP7Lite IPT STS msg timeout.  | option                 | \-                     | 5                      |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *1*         | Set NP7Lite STS message timeout to 1 sec(recommended   |                                     |
|                                | |             | for IPSec throughput GUI).                             |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *2*         | Set NP7Lite STS message timeout to 2 sec.              |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *3*         | Set NP7Lite STS message timeout to 3 sec.              |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *4*         | Set NP7Lite STS message timeout to 4 sec.              |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *5*         | Set NP7Lite STS message timeout to 5 sec(default).     |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *6*         | Set NP7Lite STS message timeout to 6 sec.              |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *7*         | Set NP7Lite STS message timeout to 7 sec.              |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *8*         | Set NP7Lite STS message timeout to 8 sec.              |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *9*         | Set NP7Lite STS message timeout to 9 sec.              |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *10*        | Set NP7Lite STS message timeout to 10 sec.             |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ipt-throughput-msg-frequency   | Set NP7Lite IPT throughput msg    | option                 | \-                     | disable                |
| \*                             | frequency: 0\--disable 1\--32KB   |                        |                        |                        |
|                                | 3\--64KB \... 0x3fff\--256MB      |                        |                        |                        |
|                                | 0x7fff\--512MB 0xffff\--1GB.      |                        |                        |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *disable*   | Disable NP7Lite throughput update message.             |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *32KB*      | Set NP7Lite throughput update message frequency to     |                                     |
|                                | |             | 32KB.                                                  |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *64KB*      | Set NP7Lite throughput update message frequency to     |                                     |
|                                | |             | 64KB.                                                  |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *128KB*     | Set NP7Lite throughput update message frequency to     |                                     |
|                                | |             | 128KB.                                                 |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *256KB*     | Set NP7Lite throughput update message frequency to     |                                     |
|                                | |             | 256KB.                                                 |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *512KB*     | Set NP7Lite throughput update message frequency to     |                                     |
|                                | |             | 512KB.                                                 |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *1MB*       | Set NP7Lite throughput update message frequency to     |                                     |
|                                | |             | 1MB.                                                   |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *2MB*       | Set NP7Lite throughput update message frequency to     |                                     |
|                                | |             | 2MB.                                                   |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *4MB*       | Set NP7Lite throughput update message frequency to     |                                     |
|                                | |             | 4MB.                                                   |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *8MB*       | Set NP7Lite throughput update message frequency to     |                                     |
|                                | |             | 8MB.                                                   |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *16MB*      | Set NP7Lite throughput update message frequency to     |                                     |
|                                | |             | 16MB.                                                  |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *32MB*      | Set NP7Lite throughput update message frequency to     |                                     |
|                                | |             | 32MB.                                                  |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *64MB*      | Set NP7Lite throughput update message frequency to     |                                     |
|                                | |             | 64MB.                                                  |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *128MB*     | Set NP7Lite throughput update message frequency to     |                                     |
|                                | |             | 128MB.                                                 |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *256MB*     | Set NP7Lite throughput update message frequency to     |                                     |
|                                | |             | 256MB.                                                 |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *512MB*     | Set NP7Lite throughput update message frequency to     |                                     |
|                                | |             | 512MB.                                                 |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *1GB*       | Set NP7Lite throughput update message frequency to     |                                     |
|                                | |             | 1GB.                                                   |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| lag-hash-gre \*                | Set LAG hash for standard GRE.    | option                 | \-                     | disable                |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +------------------+--------------------------------------------------------+                                |
|                                | | Option           | Description                                            |                                |
|                                | +==================+========================================================+                                |
|                                | | *disable*        | Disabe GRE inner header information as hash input for  |                                |
|                                | |                  | LAG.                                                   |                                |
|                                | +------------------+--------------------------------------------------------+                                |
|                                | | *gre_inner_l3*   | Use GRE inner L3 header information as hash input for  |                                |
|                                | |                  | LAG.                                                   |                                |
|                                | +------------------+--------------------------------------------------------+                                |
|                                | | *gre_inner_l4*   | Use GRE inner L4 header information as hash input for  |                                |
|                                | |                  | LAG.                                                   |                                |
|                                | +------------------+--------------------------------------------------------+                                |
|                                | | *gre_inner_l3l4* | Use GRE inner L3 and L4 header information as hash     |                                |
|                                | |                  | input for LAG.                                         |                                |
|                                | +------------------+--------------------------------------------------------+                                |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| lag-out-port-select \*         | Enable/disable LAG outgoing port  | option                 | \-                     | disable                |
|                                | selection based on incoming       |                        |                        |                        |
|                                | traffic port.                     |                        |                        |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *disable*   | Disable LAG outgoing port selection based on incoming  |                                     |
|                                | |             | traffic port.                                          |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *enable*    | Enable LAG outgoing port selection based on incoming   |                                     |
|                                | |             | traffic port.                                          |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| max-receive-unit \*            | Set the maximum packet size for   | integer                | Minimum value: 64      | 10000                  |
|                                | receive, larger packets will be   |                        | Maximum value: 10000   |                        |
|                                | silently dropped.                 |                        |                        |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| max-session-timeout \*         | Maximum time interval for         | integer                | Minimum value: 10      | 40                     |
|                                | refreshing NPU-offloaded sessions |                        | Maximum value: 1000    |                        |
|                                | (10 - 1000 sec, default 40 sec).  |                        |                        |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| mcast-denied-ses-offload \*    | Enable/disable offloading of      | option                 | \-                     | disable                |
|                                | multicast denied sessions.        |                        |                        |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *enable*    | Enable offloading of multicast denied sessions.        |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *disable*   | Disable offloading of multicast denied sessions.       |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| mcast-session-accounting \*    | Enable/disable traffic accounting | option                 | \-                     | tpe-based              |
|                                | for each multicast session        |                        |                        |                        |
|                                | through TAE counter.              |                        |                        |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-----------------+--------------------------------------------------------+                                 |
|                                | | Option          | Description                                            |                                 |
|                                | +=================+========================================================+                                 |
|                                | | *tpe-based*     | Enable TPE-based multicast session accounting.         |                                 |
|                                | +-----------------+--------------------------------------------------------+                                 |
|                                | | *session-based* | Enable session-based multicast session accounting.     |                                 |
|                                | +-----------------+--------------------------------------------------------+                                 |
|                                | | *disable*       | Disable multicast session accounting.                  |                                 |
|                                | +-----------------+--------------------------------------------------------+                                 |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| mcs-auto-start \*              | Enable/disable NPU MCS auto       | option                 | \-                     | disable                |
|                                | start.                            |                        |                        |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *enable*    | Enable NPU MCS auto start.                             |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *disable*   | Disable NPU MCS auto start.                            |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| mcs-host-packet-tpe-shaping \* | Enable/disable NPU shaping for    | option                 | \-                     | disable                |
|                                | host traffic with shaping profile |                        |                        |                        |
|                                | on IPSec interface.               |                        |                        |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *enable*    | Enable NPU shaping for host traffic with shaping       |                                     |
|                                | |             | profile on IPSec interface.                            |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *disable*   | Disable NPU shaping for host traffic with shaping      |                                     |
|                                | |             | profile on IPSec interface.                            |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| napi-break-interval \*         | NAPI break interval (default 0).  | integer                | Minimum value: 0       | 0                      |
|                                |                                   |                        | Maximum value: 65535   |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| np6-cps-optimization-mode \*   | Enable/disable NP6 connection per | option                 | \-                     | disable                |
|                                | second (CPS) optimization mode.   |                        |                        |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *enable*    | Enable NP6 connection per second (CPS) optimization    |                                     |
|                                | |             | mode.                                                  |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *disable*   | Disable NP6 connection per second (CPS) optimization   |                                     |
|                                | |             | mode.                                                  |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| per-policy-accounting \*       | Set per-policy accounting.        | option                 | \-                     | disable                |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *disable*   | Disable per-policy hit count.                          |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *enable*    | Enable per-policy hit count                            |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| per-session-accounting \*      | Set per-session accounting.       | option                 | \-                     | traffic-log-only       |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +--------------------+--------------------------------------------------------+                              |
|                                | | Option             | Description                                            |                              |
|                                | +====================+========================================================+                              |
|                                | | *traffic-log-only* | Per-session accounting only for sessions with traffic  |                              |
|                                | |                    | logging                                                |                              |
|                                | +--------------------+--------------------------------------------------------+                              |
|                                | | *disable*          | Disable per-session accounting.                        |                              |
|                                | +--------------------+--------------------------------------------------------+                              |
|                                | | *enable*           | Per-session accounting for all sessions.               |                              |
|                                | +--------------------+--------------------------------------------------------+                              |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| qos-mode \*                    | QoS mode on switch and NP.        | option                 | \-                     | disable                |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +---------------+--------------------------------------------------------+                                   |
|                                | | Option        | Description                                            |                                   |
|                                | +===============+========================================================+                                   |
|                                | | *disable*     | Disable QoS on switch and NP.                          |                                   |
|                                | +---------------+--------------------------------------------------------+                                   |
|                                | | *priority*    | Priority based.                                        |                                   |
|                                | +---------------+--------------------------------------------------------+                                   |
|                                | | *round-robin* | Round Robin Scheduler.                                 |                                   |
|                                | +---------------+--------------------------------------------------------+                                   |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| qtm-buf-mode \*                | QTM channel configuration for     | option                 | \-                     | 6ch                    |
|                                | packet buffer.                    |                        |                        |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *6ch*       | 6 DRAM channels for packet buffer.                     |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *4ch*       | 4 DRAM channels for packet buffer.                     |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| rdp-offload \*                 | Enable/disable RDP offload.       | option                 | \-                     | enable                 |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *enable*    | Enable reliable datagram protocol traffic offload.     |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *disable*   | Disable reliable datagram protocol traffic offload.    |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| session-acct-interval \*       | Session accounting update         | integer                | Minimum value: 1       | 5                      |
|                                | interval (1 - 600 sec, default 5  |                        | Maximum value: 600     |                        |
|                                | sec).                             |                        |                        |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| session-denied-offload \*      | Enable/disable offloading of      | option                 | \-                     | disable                |
|                                | denied sessions. Requires         |                        |                        |                        |
|                                | ses-denied-traffic to be set.     |                        |                        |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *disable*   | Disable offloading of denied sessions.                 |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *enable*    | Enable offloading of denied sessions.                  |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| shadow-virtual-switch \*       | Enable/disable shadow virtual     | option                 | \-                     | disable                |
|                                | switch.                           |                        |                        |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *enable*    | Enable shadow virtual switch.                          |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *disable*   | Disable shadow virtual switch.                         |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| shaping-stats \*               | Enable/disable NP7 traffic        | option                 | \-                     | disable                |
|                                | shaping statistics (default =     |                        |                        |                        |
|                                | disable).                         |                        |                        |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *disable*   | Disable NP7 traffic shaping statistics.                |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *enable*    | Enable NP7 traffic shaping statistics.                 |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| sse-backpressure \*            | Enable/disable SSE backpressure.  | option                 | \-                     | disable                |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *enable*    | Enable SSE backpressureg.                              |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *disable*   | Disable SSE backpressureg.                             |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| strip-clear-text-padding \*    | Enable/disable stripping clear    | option                 | \-                     | disable                |
|                                | text padding.                     |                        |                        |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *enable*    | Enable stripping clear text padding.                   |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *disable*   | Disable stripping clear text padding.                  |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| strip-esp-padding \*           | Enable/disable stripping ESP      | option                 | \-                     | disable                |
|                                | padding.                          |                        |                        |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *enable*    | Enable stripping ESP padding.                          |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *disable*   | Disable stripping ESP padding.                         |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| sw-np-bandwidth \*             | Bandwidth from switch to NP.      | option                 | \-                     | 0G                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *0G*        | Default value. No bandwidth control.                   |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *2G*        | 2Gbps.                                                 |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *4G*        | 4Gbps.                                                 |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *5G*        | 5Gbps.                                                 |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *6G*        | 6Gbps.                                                 |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *7G*        | 7Gbps.                                                 |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *8G*        | 8Gbps.                                                 |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *9G*        | 9Gbps.                                                 |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| sw-np-pause \*                 | Enable SP5 tx pause and marvell   | option                 | \-                     | enable                 |
|                                | rx receive pause, for sw uplink   |                        |                        |                        |
|                                | only.                             |                        |                        |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *disable*   | Disable sw to np pause.                                |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *enable*    | Enable sw receive pause from np.                       |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| sw-np-rate \*                  | Bandwidth from switch to NP.      | integer                | Minimum value: 0       | 0                      |
|                                |                                   |                        | Maximum value:         |                        |
|                                |                                   |                        | 4294967295             |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| sw-np-rate-burst \*            | Burst value for bandwidth from    | integer                | Minimum value: 0       | 16                     |
|                                | switch to NP.                     |                        | Maximum value:         |                        |
|                                |                                   |                        | 4294967295             |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| sw-np-rate-unit \*             | Unit for bandwidth from switch to | option                 | \-                     | mbps                   |
|                                | NP.                               |                        |                        |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *mbps*      | Megabits per second.                                   |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *pps*       | Packets per second.                                    |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| switch-np-hash \*              | Switch-NP trunk port selection    | option                 | \-                     | src-dst-ip             |
|                                | Criteria.                         |                        |                        |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +--------------+--------------------------------------------------------+                                    |
|                                | | Option       | Description                                            |                                    |
|                                | +==============+========================================================+                                    |
|                                | | *src-ip*     | Source IP address.                                     |                                    |
|                                | +--------------+--------------------------------------------------------+                                    |
|                                | | *dst-ip*     | Destination IP address.                                |                                    |
|                                | +--------------+--------------------------------------------------------+                                    |
|                                | | *src-dst-ip* | Source+dest IP address.                                |                                    |
|                                | +--------------+--------------------------------------------------------+                                    |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| tunnel-over-vlink \*           | Enable/disable selection of which | option                 | \-                     | enable                 |
|                                | NP6 chip the tunnel uses (default |                        |                        |                        |
|                                | = enable).                        |                        |                        |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *enable*    | Use the bundled NP6 chip for tunnels.                  |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *disable*   | Use the ingress NP6 chip for tunnels.                  |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| uesp-offload \*                | Enable/disable UDP-encapsulated   | option                 | \-                     | disable                |
|                                | ESP offload (default = disable).  |                        |                        |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *enable*    | Enable UDP-encapsulated ESP traffic offload.           |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *disable*   | Disable UDP-encapsulated ESP traffic offload.          |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ull-port-mode \*               | Set ULL port\'s speed to 10G/25G  | option                 | \-                     | 10G                    |
|                                | (default 10G).                    |                        |                        |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *10G*       | 10G speed setting for ULL ports.                       |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *25G*       | 25G speed setting for ULL ports.                       |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| use-mse-oft \*                 | Enable/disable use of MSE OFT.    | option                 | \-                     | enable                 |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *enable*    | Enable use of MSE OFT.                                 |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *disable*   | Disable use of MSE OFT.                                |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| vlan-lookup-cache \*           | Enable/disable VLAN lookup cache  | option                 | \-                     | disable                |
|                                | (default = disabled).             |                        |                        |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *enable*    | Enable VLAN lookup cache.                              |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *disable*   | Disable VLAN lookup cache.                             |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| vxlan-mac-flapping-guard \*    | Enable/disable VxLAN MAC flapping | option                 | \-                     | enable                 |
|                                | guard.                            |                        |                        |                        |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *enable*    | Enable VxLAN MAC flapping guard.                       |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *disable*   | Disable VxLAN MAC flapping guard.                      |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| vxlan-offload \*               | Enable/disable offloading vxlan.  | option                 | \-                     | enable                 |
+--------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | Option      | Description                                            |                                     |
|                                | +=============+========================================================+                                     |
|                                | | *enable*    | Enable Vxlan offload.                                  |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
|                                | | *disable*   | Disable Vxlan offload.                                 |                                     |
|                                | +-------------+--------------------------------------------------------+                                     |
+--------------------------------+--------------------------------------------------------------------------------------------------------------+

