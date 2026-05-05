# config system interface

Configure interfaces.

## Syntax

```
config system interface
    Description: Configure interfaces.
    edit <name>
        set ac-name {string}
        set aggregate {string}
        set aggregate-type [physical|vxlan]
        set algorithm [L2|L3|...]
        set alias {string}
        set allowaccess {option1}, {option2}, ...
        set annex [a|b|...]
        set ap-discover [enable|disable]
        set arpforward [enable|disable]
        set atm-protocol [none|ipoa]
        set auth-cert {string}
        set auth-portal-addr {string}
        set auth-type [auto|pap|...]
        set auto-auth-extension-device [enable|disable]
        set bandwidth-measure-time {integer}
        set bfd [global|enable|...]
        set bfd-desired-min-tx {integer}
        set bfd-detect-mult {integer}
        set bfd-required-min-rx {integer}
        set broadcast-forward [enable|disable]
        set cli-conn-status {integer}
        config client-options
            Description: DHCP client options.
            edit <id>
                set code {integer}
                set ip {user}
                set type [hex|string|...]
                set value {string}
            next
        end
        set color {integer}
        set dedicated-to [none|management]
        set default-purdue-level [1|1.5|...]
        set defaultgw [enable|disable]
        set description {var-string}
        set detected-peer-mtu {integer}
        set detectprotocol {option1}, {option2}, ...
        set detectserver {user}
        set device-identification [enable|disable]
        set device-user-identification [enable|disable]
        set devindex {integer}
        set dhcp-broadcast-flag [disable|enable]
        set dhcp-classless-route-addition [enable|disable]
        set dhcp-client-identifier {string}
        set dhcp-relay-agent-option [enable|disable]
        set dhcp-relay-allow-no-end-option [disable|enable]
        set dhcp-relay-circuit-id {string}
        set dhcp-relay-interface {string}
        set dhcp-relay-interface-select-method [auto|sdwan|...]
        set dhcp-relay-ip {user}
        set dhcp-relay-link-selection {ipv4-address}
        set dhcp-relay-request-all-server [disable|enable]
        set dhcp-relay-service [disable|enable]
        set dhcp-relay-source-ip {ipv4-address}
        set dhcp-relay-type [regular|ipsec]
        set dhcp-renew-time {integer}
        set dhcp-smart-relay [disable|enable]
        config dhcp-snooping-server-list
            Description: Configure DHCP server access list.
            edit <name>
                set server-ip {ipv4-address}
            next
        end
        set disc-retry-timeout {integer}
        set distance {integer}
        set dns-server-override [enable|disable]
        set dns-server-protocol {option1}, {option2}, ...
        set drop-fragment [enable|disable]
        set drop-overlapped-fragment [enable|disable]
        set eap-ca-cert {string}
        set eap-identity {string}
        set eap-method [tls|peap]
        set eap-password {password}
        set eap-supplicant [enable|disable]
        set eap-user-cert {string}
        set egress-cos [disable|cos0|...]
        config egress-queues
            Description: Configure queues of NP port on egress path.
            set cos0 {string}
            set cos1 {string}
            set cos2 {string}
            set cos3 {string}
            set cos4 {string}
            set cos5 {string}
            set cos6 {string}
            set cos7 {string}
        end
        set egress-shaping-profile {string}
        set eip {ipv4-address-any}
        set estimated-downstream-bandwidth {integer}
        set estimated-upstream-bandwidth {integer}
        set explicit-ftp-proxy [enable|disable]
        set explicit-web-proxy [enable|disable]
        set external [enable|disable]
        set fail-action-on-extender [soft-restart|hard-restart|...]
        set fail-alert-interfaces <name1>, <name2>, ...
        set fail-alert-method [link-failed-signal|link-down]
        set fail-detect [enable|disable]
        set fail-detect-option {option1}, {option2}, ...
        set fortilink [enable|disable]
        set fortilink-backup-link {integer}
        set fortilink-neighbor-detect [lldp|fortilink]
        set fortilink-split-interface [enable|disable]
        set forward-domain {integer}
        set forward-error-correction [none|disable|...]
        set gateway-address {ipv4-address}
        set gwaddr {ipv4-address}
        set gwdetect [enable|disable]
        set ha-priority {integer}
        set icmp-accept-redirect [enable|disable]
        set icmp-send-redirect [enable|disable]
        set ident-accept [enable|disable]
        set idle-timeout {integer}
        set ike-saml-server {string}
        set inbandwidth {integer}
        set ingress-cos [disable|cos0|...]
        set ingress-shaping-profile {string}
        set ingress-spillover-threshold {integer}
        set interconnect-profile [default|profile1|...]
        set interface {string}
        set internal {integer}
        set ip {ipv4-classnet-host}
        set ip-managed-by-fortiipam [inherit-global|enable|...]
        set ipmac [enable|disable]
        set ips-sniffer-mode [enable|disable]
        set ipunnumbered {ipv4-address}
        config ipv6
            Description: IPv6 of interface.
            set autoconf [enable|disable]
            set cli-conn6-status {integer}
            set dhcp6-client-options {option1}, {option2}, ...
            config dhcp6-iapd-list
                Description: DHCPv6 IA-PD list.
                edit <iaid>
                    set prefix-hint {ipv6-network}
                    set prefix-hint-plt {integer}
                    set prefix-hint-vlt {integer}
                next
            end
            set dhcp6-information-request [enable|disable]
            set dhcp6-prefix-delegation [enable|disable]
            set dhcp6-relay-interface-id {string}
            set dhcp6-relay-ip {user}
            set dhcp6-relay-service [disable|enable]
            set dhcp6-relay-source-interface [disable|enable]
            set dhcp6-relay-source-ip {ipv6-address}
            set dhcp6-relay-type {option}
            set icmp6-send-redirect [enable|disable]
            set interface-identifier {ipv6-address}
            set ip6-address {ipv6-prefix}
            set ip6-allowaccess {option1}, {option2}, ...
            set ip6-default-life {integer}
            set ip6-delegated-prefix-iaid {integer}
            config ip6-delegated-prefix-list
                Description: Advertised IPv6 delegated prefix list.
                edit <prefix-id>
                    set autonomous-flag [enable|disable]
                    set delegated-prefix-iaid {integer}
                    set onlink-flag [enable|disable]
                    set rdnss {user}
                    set rdnss-service [delegated|default|...]
                    set subnet {ipv6-network}
                    set upstream-interface {string}
                next
            end
            set ip6-dns-server-override [enable|disable]
            config ip6-extra-addr
                Description: Extra IPv6 address prefixes of interface.
                edit <prefix>
                next
            end
            set ip6-hop-limit {integer}
            set ip6-link-mtu {integer}
            set ip6-manage-flag [enable|disable]
            set ip6-max-interval {integer}
            set ip6-min-interval {integer}
            set ip6-mode [static|dhcp|...]
            set ip6-other-flag [enable|disable]
            config ip6-prefix-list
                Description: Advertised prefix list.
                edit <prefix>
                    set autonomous-flag [enable|disable]
                    set dnssl <domain1>, <domain2>, ...
                    set onlink-flag [enable|disable]
                    set preferred-life-time {integer}
                    set rdnss {user}
                    set valid-life-time {integer}
                next
            end
            set ip6-prefix-mode [dhcp6|ra]
            set ip6-reachable-time {integer}
            set ip6-retrans-time {integer}
            set ip6-send-adv [enable|disable]
            set ip6-subnet {ipv6-prefix}
            set ip6-upstream-interface {string}
            set nd-cert {string}
            set nd-cga-modifier {user}
            set nd-mode [basic|SEND-compatible]
            set nd-security-level {integer}
            set nd-timestamp-delta {integer}
            set nd-timestamp-fuzz {integer}
            set ra-send-mtu [enable|disable]
            set unique-autoconf-addr [enable|disable]
            set vrip6_link_local {ipv6-address}
            set vrrp-virtual-mac6 [enable|disable]
            config vrrp6
                Description: IPv6 VRRP configuration.
                edit <vrid>
                    set accept-mode [enable|disable]
                    set adv-interval {integer}
                    set ignore-default-route [enable|disable]
                    set preempt [enable|disable]
                    set priority {integer}
                    set start-time {integer}
                    set status [enable|disable]
                    set vrdst6 {ipv6-address}
                    set vrgrp {integer}
                    set vrip6 {ipv6-address}
                next
            end
        end
        set l2forward [enable|disable]
        set l2tp-client [enable|disable]
        config l2tp-client-settings
            Description: L2TP client settings.
            set auth-type [auto|pap|...]
            set defaultgw [enable|disable]
            set distance {integer}
            set hello-interval {integer}
            set ip {ipv4-classnet-host}
            set mtu {integer}
            set password {password}
            set peer-host {string}
            set peer-mask {ipv4-netmask}
            set peer-port {integer}
            set priority {integer}
            set user {string}
        end
        set lacp-ha-secondary [enable|disable]
        set lacp-mode [static|passive|...]
        set lacp-speed [slow|fast]
        set lcp-echo-interval {integer}
        set lcp-max-echo-fails {integer}
        set link-up-delay {integer}
        set lldp-network-policy {string}
        set lldp-reception [enable|disable|...]
        set lldp-transmission [enable|disable|...]
        set macaddr {mac-address}
        set managed-subnetwork-size [32|64|...]
        set management-ip {ipv4-classnet-host}
        set measured-downstream-bandwidth {integer}
        set measured-upstream-bandwidth {integer}
        set mediatype [serdes-sfp|sgmii-sfp|...]
        set member <interface-name1>, <interface-name2>, ...
        set min-links {integer}
        set min-links-down [operational|administrative]
        set mirroring-direction {option}
        config mirroring-filter
            Description: Mirroring filter.
            set filter-dport {integer}
            set filter-dstip {ipv4-classnet-host}
            set filter-protocol {integer}
            set filter-sport {integer}
            set filter-srcip {ipv4-classnet-host}
        end
        set mirroring-port {string}
        set mode [static|dhcp|...]
        set monitor-bandwidth [enable|disable]
        set mtu {integer}
        set mtu-override [enable|disable]
        set mux-type [llc-encaps|vc-encaps]
        set ndiscforward [enable|disable]
        set netbios-forward [disable|enable]
        set netflow-sampler [disable|tx|...]
        set np-qos-profile {integer}
        set outbandwidth {integer}
        set padt-retry-timeout {integer}
        set password {password}
        set phy-mode {option}
        config phy-setting
            Description: PHY settings
            set signal-ok-threshold-value {integer}
        end
        set ping-serv-status {integer}
        set poe [enable|disable]
        set polling-interval {integer}
        set port-mirroring [disable|enable]
        set pppoe-egress-cos [cos0|cos1|...]
        set pppoe-unnumbered-negotiate [enable|disable]
        set pptp-auth-type [auto|pap|...]
        set pptp-client [enable|disable]
        set pptp-password {password}
        set pptp-server-ip {ipv4-address}
        set pptp-timeout {integer}
        set pptp-user {string}
        set preserve-session-route [enable|disable]
        set priority {integer}
        set priority-override [enable|disable]
        set profiles {option1}, {option2}, ...
        set proxy-captive-portal [enable|disable]
        set pvc-atm-qos [cbr|rt-vbr|...]
        set pvc-chan {integer}
        set pvc-crc {integer}
        set pvc-pcr {integer}
        set pvc-scr {integer}
        set pvc-vlan-id {integer}
        set pvc-vlan-rx-id {integer}
        set pvc-vlan-rx-op [pass-through|replace|...]
        set pvc-vlan-tx-id {integer}
        set pvc-vlan-tx-op [pass-through|replace|...]
        set reachable-time {integer}
        set redundant-interface {string}
        set remote-ip {ipv4-classnet-host}
        set replacemsg-override-group {string}
        set retransmission [disable|enable]
        set ring-rx {integer}
        set ring-tx {integer}
        set role [lan|wan|...]
        set sample-direction [tx|rx|...]
        set sample-rate {integer}
        set secondary-IP [enable|disable]
        config secondaryip
            Description: Second IP address of interface.
            edit <id>
                set allowaccess {option1}, {option2}, ...
                set detectprotocol {option1}, {option2}, ...
                set detectserver {user}
                set gwdetect [enable|disable]
                set ha-priority {integer}
                set ip {ipv4-classnet-host}
                set ping-serv-status {integer}
                set secip-relay-ip {user}
            next
        end
        set security-8021x-dynamic-vlan-id {integer}
        set security-8021x-master {string}
        set security-8021x-member-mode [switch|disable]
        set security-8021x-mode [default|dynamic-vlan|...]
        set security-exempt-list {string}
        set security-external-logout {string}
        set security-external-web {var-string}
        set security-groups <name1>, <name2>, ...
        set security-mac-auth-bypass [mac-auth-only|enable|...]
        set security-mode [none|captive-portal|...]
        set security-redirect-url {var-string}
        set select-profile-30a-35b [30a|35b]
        set service-name {string}
        set sflow-sampler [enable|disable]
        set sfp-dsl [disable|enable]
        set sfp-dsl-adsl-fallback [disable|enable]
        set sfp-dsl-autodetect [disable|enable]
        set sfp-dsl-mac {mac-address}
        set snmp-index {integer}
        set speed [auto|10full|...]
        set spillover-threshold {integer}
        set src-check [enable|disable]
        set status [up|down]
        set stp [disable|enable]
        set stp-edge [disable|enable]
        set stp-ha-secondary [disable|enable|...]
        set stpforward [enable|disable]
        set stpforward-mode [rpl-all-ext-id|rpl-bridge-ext-id|...]
        set subst [enable|disable]
        set substitute-dst-mac {mac-address}
        set sw-algorithm [l2|l3|...]
        set swc-first-create {integer}
        set swc-vlan {integer}
        set switch {string}
        set switch-controller-access-vlan [enable|disable]
        set switch-controller-arp-inspection [enable|disable|...]
        set switch-controller-dhcp-snooping [enable|disable]
        set switch-controller-dhcp-snooping-option82 [enable|disable]
        set switch-controller-dhcp-snooping-verify-mac [enable|disable]
        set switch-controller-dynamic {string}
        set switch-controller-feature [none|default-vlan|...]
        set switch-controller-igmp-snooping [enable|disable]
        set switch-controller-igmp-snooping-fast-leave [enable|disable]
        set switch-controller-igmp-snooping-proxy [enable|disable]
        set switch-controller-iot-scanning [enable|disable]
        set switch-controller-learning-limit {integer}
        set switch-controller-mgmt-vlan {integer}
        set switch-controller-nac {string}
        set switch-controller-netflow-collect [disable|enable]
        set switch-controller-offload [enable|disable]
        set switch-controller-offload-gw [enable|disable]
        set switch-controller-offload-ip {ipv4-address}
        set switch-controller-rspan-mode [disable|enable]
        set switch-controller-source-ip [outbound|fixed]
        set switch-controller-traffic-policy {string}
        set system-id {mac-address}
        set system-id-type [auto|user]
        config tagging
            Description: Config object tagging.
            edit <name>
                set category {string}
                set tags <name1>, <name2>, ...
            next
        end
        set tc-mode {option}
        set tcp-mss {integer}
        set trunk [enable|disable]
        set trust-ip-1 {ipv4-classnet-any}
        set trust-ip-2 {ipv4-classnet-any}
        set trust-ip-3 {ipv4-classnet-any}
        set trust-ip6-1 {ipv6-prefix}
        set trust-ip6-2 {ipv6-prefix}
        set trust-ip6-3 {ipv6-prefix}
        set type [physical|vlan|...]
        set username {string}
        set vci {integer}
        set vdom {string}
        set vectoring [disable|enable]
        set vindex {integer}
        set vlan-id {integer}
        set vlan-op-mode [tag|untag|...]
        set vlan-protocol [8021q|8021ad]
        set vlanforward [enable|disable]
        set vlanid {integer}
        set vpi {integer}
        set vrf {integer}
        config vrrp
            Description: VRRP configuration.
            edit <vrid>
                set accept-mode [enable|disable]
                set adv-interval {integer}
                set ignore-default-route [enable|disable]
                set preempt [enable|disable]
                set priority {integer}
                config proxy-arp
                    Description: VRRP Proxy ARP configuration.
                    edit <id>
                        set ip {user}
                    next
                end
                set start-time {integer}
                set status [enable|disable]
                set version [2|3]
                set vrdst {ipv4-address-any}
                set vrdst-priority {integer}
                set vrgrp {integer}
                set vrip {ipv4-address-any}
            next
        end
        set vrrp-virtual-mac [enable|disable]
        set wccp [enable|disable]
        set weight {integer}
        set wifi-5g-threshold {string}
        set wifi-acl [allow|deny]
        set wifi-ap-band [any|5g-preferred|...]
        set wifi-auth [PSK|radius|...]
        set wifi-auto-connect [enable|disable]
        set wifi-auto-save [enable|disable]
        set wifi-broadcast-ssid [enable|disable]
        set wifi-dns-server1 {ipv4-address}
        set wifi-dns-server2 {ipv4-address}
        set wifi-encrypt [TKIP|AES]
        set wifi-fragment-threshold {integer}
        set wifi-gateway {ipv4-address}
        set wifi-key {password}
        set wifi-keyindex {integer}
        set wifi-mac-filter [enable|disable]
        config wifi-mac-list
            Description: MAC filter list.
            edit <id>
                set mac {mac-address}
            next
        end
        config wifi-networks
            Description: WiFi network table.
            edit <id>
                set wifi-ca-certificate {string}
                set wifi-client-certificate {string}
                set wifi-eap-type [both|tls|...]
                set wifi-encrypt [TKIP|AES]
                set wifi-key {password}
                set wifi-keyindex {integer}
                set wifi-passphrase {password}
                set wifi-private-key {string}
                set wifi-private-key-password {password}
                set wifi-security [open|wep64|...]
                set wifi-ssid {string}
                set wifi-username {string}
            next
        end
        set wifi-passphrase {password}
        set wifi-radius-server {string}
        set wifi-rts-threshold {integer}
        set wifi-security [open|wep64|...]
        set wifi-ssid {string}
        set wifi-usergroup {string}
        set wins-ip {ipv4-address}
    next
end
```

## Parameters

+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| Parameter                                  | Description                       | Type                    | Size                    | Default                 |
+============================================+===================================+=========================+=========================+=========================+
| ac-name                                    | PPPoE server name.                | string                  | Maximum length: 63      |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| aggregate                                  | Aggregate interface. Read-only.   | string                  | Maximum length: 15      |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| aggregate-type                             | Type of aggregation.              | option                  | \-                      | physical                |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *physical*  | Physical interface aggregation.                        |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *vxlan*     | VXLAN interface aggregation.                           |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| algorithm                                  | Frame distribution algorithm.     | option                  | \-                      | L4                      |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +--------------+--------------------------------------------------------+                                       |
|                                            | | Option       | Description                                            |                                       |
|                                            | +==============+========================================================+                                       |
|                                            | | *L2*         | Use layer 2 address for distribution.                  |                                       |
|                                            | +--------------+--------------------------------------------------------+                                       |
|                                            | | *L3*         | Use layer 3 address for distribution.                  |                                       |
|                                            | +--------------+--------------------------------------------------------+                                       |
|                                            | | *L4*         | Use layer 4 information for distribution.              |                                       |
|                                            | +--------------+--------------------------------------------------------+                                       |
|                                            | | *Source-MAC* | Use source MAC address for distribution.               |                                       |
|                                            | +--------------+--------------------------------------------------------+                                       |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| alias                                      | Alias will be displayed with the  | string                  | Maximum length: 25      |                         |
|                                            | interface name to make it easier  |                         |                         |                         |
|                                            | to distinguish.                   |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| allowaccess                                | Permitted types of management     | option                  | \-                      |                         |
|                                            | access to this interface.         |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +------------------+--------------------------------------------------------+                                   |
|                                            | | Option           | Description                                            |                                   |
|                                            | +==================+========================================================+                                   |
|                                            | | *ping*           | PING access.                                           |                                   |
|                                            | +------------------+--------------------------------------------------------+                                   |
|                                            | | *https*          | HTTPS access.                                          |                                   |
|                                            | +------------------+--------------------------------------------------------+                                   |
|                                            | | *ssh*            | SSH access.                                            |                                   |
|                                            | +------------------+--------------------------------------------------------+                                   |
|                                            | | *snmp*           | SNMP access.                                           |                                   |
|                                            | +------------------+--------------------------------------------------------+                                   |
|                                            | | *http*           | HTTP access.                                           |                                   |
|                                            | +------------------+--------------------------------------------------------+                                   |
|                                            | | *telnet*         | TELNET access.                                         |                                   |
|                                            | +------------------+--------------------------------------------------------+                                   |
|                                            | | *fgfm*           | FortiManager access.                                   |                                   |
|                                            | +------------------+--------------------------------------------------------+                                   |
|                                            | | *radius-acct*    | RADIUS accounting access.                              |                                   |
|                                            | +------------------+--------------------------------------------------------+                                   |
|                                            | | *probe-response* | Probe access.                                          |                                   |
|                                            | +------------------+--------------------------------------------------------+                                   |
|                                            | | *fabric*         | Security Fabric access.                                |                                   |
|                                            | +------------------+--------------------------------------------------------+                                   |
|                                            | | *ftm*            | FTM access.                                            |                                   |
|                                            | +------------------+--------------------------------------------------------+                                   |
|                                            | | *speed-test*     | Speed test access.                                     |                                   |
|                                            | +------------------+--------------------------------------------------------+                                   |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| annex \*                                   | Set xDSL annex type.              | option                  | \-                      | a                       |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *a*         | xDSL Annex A                                           |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *b*         | xDSL Annex B                                           |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *i*         | xDSL Annex I                                           |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *j*         | xDSL Annex J                                           |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *m*         | xDSL Annex M                                           |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *al*        | xDSL Annex AL                                          |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *bj*        | xDSL Annex BJ                                          |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *aijlm*     | xDSL Annex AIJLM                                       |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| ap-discover                                | Enable/disable automatic          | option                  | \-                      | enable                  |
|                                            | registration of unknown FortiAP   |                         |                         |                         |
|                                            | devices.                          |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable automatic registration of unknown FortiAP       |                                        |
|                                            | |             | devices.                                               |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable automatic registration of unknown FortiAP      |                                        |
|                                            | |             | devices.                                               |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| arpforward                                 | Enable/disable ARP forwarding.    | option                  | \-                      | enable                  |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable ARP forwarding.                                 |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable ARP forwarding.                                |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| atm-protocol \*                            | ATM protocol.                     | option                  | \-                      | none                    |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *none*      | Not over ATM.                                          |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *ipoa*      | IPoA RFC2684.                                          |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| auth-cert                                  | HTTPS server certificate.         | string                  | Maximum length: 35      |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| auth-portal-addr                           | Address of captive portal.        | string                  | Maximum length: 63      |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| auth-type                                  | PPP authentication type to use.   | option                  | \-                      | auto                    |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *auto*      | Automatically choose authentication.                   |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *pap*       | PAP authentication.                                    |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *chap*      | CHAP authentication.                                   |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *mschapv1*  | MS-CHAPv1 authentication.                              |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *mschapv2*  | MS-CHAPv2 authentication.                              |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| auto-auth-extension-device                 | Enable/disable automatic          | option                  | \-                      | disable                 |
|                                            | authorization of dedicated        |                         |                         |                         |
|                                            | Fortinet extension device on this |                         |                         |                         |
|                                            | interface.                        |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable automatic authorization of dedicated Fortinet   |                                        |
|                                            | |             | extension device on this interface.                    |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable automatic authorization of dedicated Fortinet  |                                        |
|                                            | |             | extension device on this interface.                    |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| bandwidth-measure-time                     | Bandwidth measure time.           | integer                 | Minimum value: 0        | 0                       |
|                                            |                                   |                         | Maximum value:          |                         |
|                                            |                                   |                         | 4294967295              |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| bfd                                        | Bidirectional Forwarding          | option                  | \-                      | global                  |
|                                            | Detection (BFD) settings.         |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *global*    | BFD behavior of this interface will be based on global |                                        |
|                                            | |             | configuration.                                         |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *enable*    | Enable BFD on this interface and ignore global         |                                        |
|                                            | |             | configuration.                                         |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable BFD on this interface and ignore global        |                                        |
|                                            | |             | configuration.                                         |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| bfd-desired-min-tx                         | BFD desired minimal transmit      | integer                 | Minimum value: 1        | 250                     |
|                                            | interval.                         |                         | Maximum value: 100000   |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| bfd-detect-mult                            | BFD detection multiplier.         | integer                 | Minimum value: 1        | 3                       |
|                                            |                                   |                         | Maximum value: 50       |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| bfd-required-min-rx                        | BFD required minimal receive      | integer                 | Minimum value: 1        | 250                     |
|                                            | interval.                         |                         | Maximum value: 100000   |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| broadcast-forward                          | Enable/disable broadcast          | option                  | \-                      | disable                 |
|                                            | forwarding.                       |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable broadcast forwarding.                           |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable broadcast forwarding.                          |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| cli-conn-status                            | CLI connection status. Read-only. | integer                 | Minimum value: 0        | 0                       |
|                                            |                                   |                         | Maximum value:          |                         |
|                                            |                                   |                         | 4294967295              |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| color                                      | Color of icon on the GUI.         | integer                 | Minimum value: 0        | 0                       |
|                                            |                                   |                         | Maximum value: 32       |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| dedicated-to                               | Configure interface for single    | option                  | \-                      | none                    |
|                                            | purpose.                          |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +--------------+--------------------------------------------------------+                                       |
|                                            | | Option       | Description                                            |                                       |
|                                            | +==============+========================================================+                                       |
|                                            | | *none*       | Interface not dedicated for any purpose.               |                                       |
|                                            | +--------------+--------------------------------------------------------+                                       |
|                                            | | *management* | Dedicate this interface for management purposes only.  |                                       |
|                                            | +--------------+--------------------------------------------------------+                                       |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| default-purdue-level                       | default purdue level of device    | option                  | \-                      | 3                       |
|                                            | detected on this interface.       |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *1*         | Level 1 - Basic Control                                |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *1.5*       | Level 1.5                                              |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *2*         | Level 2 - Area Supervisory Control                     |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *2.5*       | Level 2.5                                              |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *3*         | Level 3 - Operations & Control                         |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *3.5*       | Level 3.5                                              |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *4*         | Level 4 - Business Planning & Logistics                |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *5*         | Level 5 - Enterprise Network                           |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *5.5*       | Level 5.5                                              |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| defaultgw                                  | Enable to get the gateway IP from | option                  | \-                      | enable                  |
|                                            | the DHCP or PPPoE server.         |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable default gateway.                                |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable default gateway.                               |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| description                                | Description.                      | var-string              | Maximum length: 255     |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| detected-peer-mtu                          | MTU of detected peer (0 -         | integer                 | Minimum value: 0        | 0                       |
|                                            | 4294967295). Read-only.           |                         | Maximum value:          |                         |
|                                            |                                   |                         | 4294967295              |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| detectprotocol                             | Protocols used to detect the      | option                  | \-                      | ping                    |
|                                            | server.                           |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *ping*      | PING.                                                  |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *tcp-echo*  | TCP echo.                                              |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *udp-echo*  | UDP echo.                                              |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| detectserver                               | Gateway\'s ping server for this   | user                    | Not Specified           |                         |
|                                            | IP.                               |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| device-identification                      | Enable/disable passively          | option                  | \-                      | disable                 |
|                                            | gathering of device identity      |                         |                         |                         |
|                                            | information about the devices on  |                         |                         |                         |
|                                            | the network connected to this     |                         |                         |                         |
|                                            | interface.                        |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable passive gathering of identity information about |                                        |
|                                            | |             | hosts.                                                 |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable passive gathering of identity information      |                                        |
|                                            | |             | about hosts.                                           |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| device-user-identification                 | Enable/disable passive gathering  | option                  | \-                      | enable                  |
|                                            | of user identity information      |                         |                         |                         |
|                                            | about users on this interface.    |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable passive gathering of user identity information  |                                        |
|                                            | |             | about users.                                           |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable passive gathering of user identity information |                                        |
|                                            | |             | about users.                                           |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| devindex                                   | Device Index. Read-only.          | integer                 | Minimum value: 0        | 0                       |
|                                            |                                   |                         | Maximum value:          |                         |
|                                            |                                   |                         | 4294967295              |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| dhcp-broadcast-flag                        | Enable/disable setting of the     | option                  | \-                      | enable                  |
|                                            | broadcast flag in messages sent   |                         |                         |                         |
|                                            | by the DHCP client (default =     |                         |                         |                         |
|                                            | enable).                          |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *disable*   | Disable broadcast flag.                                |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *enable*    | Enable broadcast flag.                                 |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| dhcp-classless-route-addition              | Enable/disable addition of        | option                  | \-                      | disable \*\*            |
|                                            | classless static routes retrieved |                         |                         |                         |
|                                            | from DHCP server.                 |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable addition of classless static routes retrieved   |                                        |
|                                            | |             | from DHCP server.                                      |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable addition of classless static routes retrieved  |                                        |
|                                            | |             | from DHCP server.                                      |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| dhcp-client-identifier                     | DHCP client identifier.           | string                  | Maximum length: 48      |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| dhcp-relay-agent-option                    | Enable/disable DHCP relay agent   | option                  | \-                      | enable                  |
|                                            | option.                           |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable DHCP relay agent option.                        |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable DHCP relay agent option.                       |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| dhcp-relay-allow-no-end-option             | Enable/disable relaying DHCP      | option                  | \-                      | disable                 |
|                                            | messages with no end option.      |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *disable*   | Disable relaying DHCP messages with no end option.     |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *enable*    | Enable relaying DHCP messages with no end option.      |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| dhcp-relay-circuit-id                      | DHCP relay circuit ID.            | string                  | Maximum length: 64      |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| dhcp-relay-interface                       | Specify outgoing interface to     | string                  | Maximum length: 15      |                         |
|                                            | reach server.                     |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| dhcp-relay-interface-select-method         | Specify how to select outgoing    | option                  | \-                      | auto                    |
|                                            | interface to reach server.        |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *auto*      | Set outgoing interface automatically.                  |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *sdwan*     | Set outgoing interface by SD-WAN or policy routing     |                                        |
|                                            | |             | rules.                                                 |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *specify*   | Set outgoing interface manually.                       |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| dhcp-relay-ip                              | DHCP relay IP address.            | user                    | Not Specified           |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| dhcp-relay-link-selection                  | DHCP relay link selection.        | ipv4-address            | Not Specified           | 0.0.0.0                 |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| dhcp-relay-request-all-server              | Enable/disable sending of DHCP    | option                  | \-                      | disable                 |
|                                            | requests to all servers.          |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *disable*   | Send DHCP requests only to a matching server.          |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *enable*    | Send DHCP requests to all servers.                     |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| dhcp-relay-service                         | Enable/disable allowing this      | option                  | \-                      | disable                 |
|                                            | interface to act as a DHCP relay. |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *disable*   | None.                                                  |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *enable*    | DHCP relay agent.                                      |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| dhcp-relay-source-ip                       | IP address used by the DHCP relay | ipv4-address            | Not Specified           | 0.0.0.0                 |
|                                            | as its source IP.                 |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| dhcp-relay-type                            | DHCP relay type (regular or       | option                  | \-                      | regular                 |
|                                            | IPsec).                           |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *regular*   | Regular DHCP relay.                                    |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *ipsec*     | DHCP relay for IPsec.                                  |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| dhcp-renew-time                            | DHCP renew time in seconds        | integer                 | Minimum value: 300      | 0                       |
|                                            | (300-604800), 0 means use the     |                         | Maximum value: 604800   |                         |
|                                            | renew time provided by the        |                         |                         |                         |
|                                            | server.                           |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| dhcp-smart-relay                           | Enable/disable DHCP smart relay.  | option                  | \-                      | disable                 |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *disable*   | Disable DHCP smart relay.                              |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *enable*    | Enable DHCP smart relay.                               |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| disc-retry-timeout                         | Time in seconds to wait before    | integer                 | Minimum value: 0        | 1                       |
|                                            | retrying to start a PPPoE         |                         | Maximum value:          |                         |
|                                            | discovery, 0 means no timeout.    |                         | 4294967295              |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| distance                                   | Distance for routes learned       | integer                 | Minimum value: 1        | 5                       |
|                                            | through PPPoE or DHCP, lower      |                         | Maximum value: 255      |                         |
|                                            | distance indicates preferred      |                         |                         |                         |
|                                            | route.                            |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| dns-server-override                        | Enable/disable use DNS acquired   | option                  | \-                      | enable                  |
|                                            | by DHCP or PPPoE.                 |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Use DNS acquired by DHCP or PPPoE.                     |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | No not use DNS acquired by DHCP or PPPoE.              |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| dns-server-protocol                        | DNS transport protocols.          | option                  | \-                      | cleartext               |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *cleartext* | DNS over UDP/53, DNS over TCP/53.                      |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *dot*       | DNS over TLS/853.                                      |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *doh*       | DNS over HTTPS/443.                                    |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| drop-fragment                              | Enable/disable drop fragment      | option                  | \-                      | disable                 |
|                                            | packets.                          |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable/disable drop fragment packets.                  |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Do not drop fragment packets.                          |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| drop-overlapped-fragment                   | Enable/disable drop overlapped    | option                  | \-                      | disable                 |
|                                            | fragment packets.                 |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable drop of overlapped fragment packets.            |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable drop of overlapped fragment packets.           |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| eap-ca-cert                                | EAP CA certificate name.          | string                  | Maximum length: 79      |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| eap-identity                               | EAP identity.                     | string                  | Maximum length: 35      |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| eap-method                                 | EAP method.                       | option                  | \-                      |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *tls*       | TLS.                                                   |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *peap*      | PEAP.                                                  |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| eap-password                               | EAP password.                     | password                | Not Specified           |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| eap-supplicant                             | Enable/disable EAP-Supplicant.    | option                  | \-                      | disable                 |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable EAP Supplicant.                                 |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable EAP Supplicant.                                |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| eap-user-cert                              | EAP user certificate name.        | string                  | Maximum length: 35      |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| egress-cos \*                              | Override outgoing CoS in user     | option                  | \-                      | disable                 |
|                                            | VLAN tag.                         |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *disable*   | Disable.                                               |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *cos0*      | CoS 0.                                                 |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *cos1*      | CoS 1.                                                 |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *cos2*      | CoS 2.                                                 |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *cos3*      | CoS 3.                                                 |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *cos4*      | CoS 4.                                                 |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *cos5*      | CoS 5.                                                 |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *cos6*      | CoS 6.                                                 |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *cos7*      | CoS 7.                                                 |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| egress-shaping-profile                     | Outgoing traffic shaping profile. | string                  | Maximum length: 35      |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| eip \*                                     | External IP. Read-only.           | ipv4-address-any        | Not Specified           | 0.0.0.0                 |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| estimated-downstream-bandwidth             | Estimated maximum downstream      | integer                 | Minimum value: 0        | 0                       |
|                                            | bandwidth (kbps). Used to         |                         | Maximum value:          |                         |
|                                            | estimate link utilization.        |                         | 4294967295              |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| estimated-upstream-bandwidth               | Estimated maximum upstream        | integer                 | Minimum value: 0        | 0                       |
|                                            | bandwidth (kbps). Used to         |                         | Maximum value:          |                         |
|                                            | estimate link utilization.        |                         | 4294967295              |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| explicit-ftp-proxy                         | Enable/disable the explicit FTP   | option                  | \-                      | disable                 |
|                                            | proxy on this interface.          |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable explicit FTP proxy on this interface.           |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable explicit FTP proxy on this interface.          |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| explicit-web-proxy                         | Enable/disable the explicit web   | option                  | \-                      | disable                 |
|                                            | proxy on this interface.          |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable explicit Web proxy on this interface.           |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable explicit Web proxy on this interface.          |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| external                                   | Enable/disable identifying the    | option                  | \-                      | disable                 |
|                                            | interface as an external          |                         |                         |                         |
|                                            | interface (which usually means    |                         |                         |                         |
|                                            | it\'s connected to the Internet). |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable identifying the interface as an external        |                                        |
|                                            | |             | interface.                                             |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable identifying the interface as an external       |                                        |
|                                            | |             | interface.                                             |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| fail-action-on-extender                    | Action on FortiExtender when      | option                  | \-                      | soft-restart            |
|                                            | interface fail.                   |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +----------------+--------------------------------------------------------+                                     |
|                                            | | Option         | Description                                            |                                     |
|                                            | +================+========================================================+                                     |
|                                            | | *soft-restart* | Soft-restart-on-extender.                              |                                     |
|                                            | +----------------+--------------------------------------------------------+                                     |
|                                            | | *hard-restart* | Hard-restart-on-extender.                              |                                     |
|                                            | +----------------+--------------------------------------------------------+                                     |
|                                            | | *reboot*       | Reboot-on-extender.                                    |                                     |
|                                            | +----------------+--------------------------------------------------------+                                     |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| fail-alert-interfaces `<name>`             | Names of the FortiGate interfaces | string                  | Maximum length: 15      |                         |
|                                            | to which the link failure alert   |                         |                         |                         |
|                                            | is sent.                          |                         |                         |                         |
|                                            |                                   |                         |                         |                         |
|                                            | Names of the non-virtual          |                         |                         |                         |
|                                            | interface.                        |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| fail-alert-method                          | Select link-failed-signal or      | option                  | \-                      | link-down               |
|                                            | link-down method to alert about a |                         |                         |                         |
|                                            | failed link.                      |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +----------------------+--------------------------------------------------------+                               |
|                                            | | Option               | Description                                            |                               |
|                                            | +======================+========================================================+                               |
|                                            | | *link-failed-signal* | Link-failed-signal.                                    |                               |
|                                            | +----------------------+--------------------------------------------------------+                               |
|                                            | | *link-down*          | Link-down.                                             |                               |
|                                            | +----------------------+--------------------------------------------------------+                               |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| fail-detect                                | Enable/disable fail detection     | option                  | \-                      | disable                 |
|                                            | features for this interface.      |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable interface failed option status.                 |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable interface failed option status.                |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| fail-detect-option                         | Options for detecting that this   | option                  | \-                      | link-down               |
|                                            | interface has failed.             |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +----------------+--------------------------------------------------------+                                     |
|                                            | | Option         | Description                                            |                                     |
|                                            | +================+========================================================+                                     |
|                                            | | *detectserver* | Use a ping server to determine if the interface has    |                                     |
|                                            | |                | failed.                                                |                                     |
|                                            | +----------------+--------------------------------------------------------+                                     |
|                                            | | *link-down*    | Use port detection to determine if the interface has   |                                     |
|                                            | |                | failed.                                                |                                     |
|                                            | +----------------+--------------------------------------------------------+                                     |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| fortilink \*                               | Enable FortiLink to dedicate this | option                  | \-                      | disable                 |
|                                            | interface to manage other         |                         |                         |                         |
|                                            | Fortinet devices.                 |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable FortiLink to dedicated interface for managing   |                                        |
|                                            | |             | FortiSwitch devices.                                   |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable FortiLink to dedicated interface for managing  |                                        |
|                                            | |             | FortiSwitch devices.                                   |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| fortilink-backup-link                      | FortiLink split interface backup  | integer                 | Minimum value: 0        | 0                       |
|                                            | link. Read-only.                  |                         | Maximum value: 255      |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| fortilink-neighbor-detect                  | Protocol for FortiGate neighbor   | option                  | \-                      | fortilink               |
|                                            | discovery.                        |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *lldp*      | Detect FortiLink neighbors using LLDP protocol.        |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *fortilink* | Detect FortiLink neighbors using FortiLink protocol.   |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| fortilink-split-interface                  | Enable/disable FortiLink split    | option                  | \-                      | enable                  |
|                                            | interface to connect member link  |                         |                         |                         |
|                                            | to different FortiSwitch in stack |                         |                         |                         |
|                                            | for uplink redundancy.            |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable FortiLink split interface to connect member     |                                        |
|                                            | |             | link to different FortiSwitch in stack for uplink      |                                        |
|                                            | |             | redundancy.                                            |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable FortiLink split interface.                     |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| forward-domain                             | Transparent mode forward domain.  | integer                 | Minimum value: 0        | 0                       |
|                                            |                                   |                         | Maximum value:          |                         |
|                                            |                                   |                         | 2147483647              |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| forward-error-correction \*                | Enable/disable forward error      | option                  | \-                      | none                    |
|                                            | correction (FEC).                 |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +---------------+--------------------------------------------------------+                                      |
|                                            | | Option        | Description                                            |                                      |
|                                            | +===============+========================================================+                                      |
|                                            | | *none*        | none                                                   |                                      |
|                                            | +---------------+--------------------------------------------------------+                                      |
|                                            | | *disable*     | Disable forward error correction (FEC).                |                                      |
|                                            | +---------------+--------------------------------------------------------+                                      |
|                                            | | *cl91-rs-fec* | Reed-Solomon (FEC CL91).                               |                                      |
|                                            | +---------------+--------------------------------------------------------+                                      |
|                                            | | *cl74-fc-fec* | Fire-Code (FEC CL74).                                  |                                      |
|                                            | +---------------+--------------------------------------------------------+                                      |
|                                            | | *auto*        | Negotaite forward error correction (FEC).              |                                      |
|                                            | +---------------+--------------------------------------------------------+                                      |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gateway-address \*                         | Gateway address.                  | ipv4-address            | Not Specified           | 0.0.0.0                 |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gwaddr \*                                  | Gateway address.                  | ipv4-address            | Not Specified           | 0.0.0.0                 |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gwdetect                                   | Enable/disable detect gateway     | option                  | \-                      | disable                 |
|                                            | alive for first.                  |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable detect gateway alive for first.                 |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable detect gateway alive for first.                |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| ha-priority                                | HA election priority for the PING | integer                 | Minimum value: 1        | 1                       |
|                                            | server.                           |                         | Maximum value: 50       |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| icmp-accept-redirect                       | Enable/disable ICMP accept        | option                  | \-                      | enable                  |
|                                            | redirect.                         |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable ICMP accept redirect.                           |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable ICMP accept redirect.                          |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| icmp-send-redirect                         | Enable/disable sending of ICMP    | option                  | \-                      | enable                  |
|                                            | redirects.                        |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable sending of ICMP redirects.                      |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable sending of ICMP redirects.                     |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| ident-accept                               | Enable/disable authentication for | option                  | \-                      | disable                 |
|                                            | this interface.                   |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable determining a user\'s identity from packet      |                                        |
|                                            | |             | identification.                                        |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable determining a user\'s identity from packet     |                                        |
|                                            | |             | identification.                                        |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| idle-timeout                               | PPPoE auto disconnect after idle  | integer                 | Minimum value: 0        | 0                       |
|                                            | timeout seconds, 0 means no       |                         | Maximum value: 32767    |                         |
|                                            | timeout.                          |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| ike-saml-server                            | Configure IKE authentication SAML | string                  | Maximum length: 35      |                         |
|                                            | server.                           |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| inbandwidth                                | Bandwidth limit for incoming      | integer                 | Minimum value: 0        | 0                       |
|                                            | traffic (0 - 80000000 kbps), 0    |                         | Maximum value: 80000000 |                         |
|                                            | means unlimited.                  |                         | \*\*                    |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| ingress-cos \*                             | Override incoming CoS in user     | option                  | \-                      | disable                 |
|                                            | VLAN tag on VLAN interface or     |                         |                         |                         |
|                                            | assign a priority VLAN tag on     |                         |                         |                         |
|                                            | physical interface.               |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *disable*   | Disable.                                               |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *cos0*      | CoS 0.                                                 |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *cos1*      | CoS 1.                                                 |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *cos2*      | CoS 2.                                                 |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *cos3*      | CoS 3.                                                 |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *cos4*      | CoS 4.                                                 |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *cos5*      | CoS 5.                                                 |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *cos6*      | CoS 6.                                                 |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *cos7*      | CoS 7.                                                 |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| ingress-shaping-profile                    | Incoming traffic shaping profile. | string                  | Maximum length: 35      |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| ingress-spillover-threshold                | Ingress Spillover threshold (0 -  | integer                 | Minimum value: 0        | 0                       |
|                                            | 16776000 kbps), 0 means           |                         | Maximum value: 16776000 |                         |
|                                            | unlimited.                        |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| interconnect-profile \*                    | Set interconnect profile.         | option                  | \-                      | default                 |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *default*   | default interconnect profile                           |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *profile1*  | interconnect profile1 \[(10G & IC \> 7m/20db-loss) or  |                                        |
|                                            | |             | (25G/27G & IC \< 1m)\]                                 |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *profile2*  | interconnect profile2 \[(27G in AP (106G) Auto         |                                        |
|                                            | |             | Profile)\]                                             |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| interface                                  | Interface name.                   | string                  | Maximum length: 15      |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| internal                                   | Implicitly created.               | integer                 | Minimum value: 0        | 0                       |
|                                            |                                   |                         | Maximum value: 255      |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| ip                                         | Interface IPv4 address and subnet | ipv4-classnet-host      | Not Specified           | 0.0.0.0 0.0.0.0         |
|                                            | mask, syntax: X.X.X.X/24.         |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| ip-managed-by-fortiipam                    | Enable/disable automatic IP       | option                  | \-                      | inherit-global          |
|                                            | address assignment of this        |                         |                         |                         |
|                                            | interface by FortiIPAM.           |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +------------------+--------------------------------------------------------+                                   |
|                                            | | Option           | Description                                            |                                   |
|                                            | +==================+========================================================+                                   |
|                                            | | *inherit-global* | Control automatic IP address assignment status using   |                                   |
|                                            | |                  | the central FortiIPAM config.                          |                                   |
|                                            | +------------------+--------------------------------------------------------+                                   |
|                                            | | *enable*         | Enable automatic IP address assignment of this         |                                   |
|                                            | |                  | interface by FortiIPAM.                                |                                   |
|                                            | +------------------+--------------------------------------------------------+                                   |
|                                            | | *disable*        | Disable automatic IP address assignment of this        |                                   |
|                                            | |                  | interface by FortiIPAM.                                |                                   |
|                                            | +------------------+--------------------------------------------------------+                                   |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| ipmac                                      | Enable/disable IP/MAC binding.    | option                  | \-                      | disable                 |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable IP/MAC binding.                                 |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable IP/MAC binding.                                |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| ips-sniffer-mode                           | Enable/disable the use of this    | option                  | \-                      | disable                 |
|                                            | interface as a one-armed sniffer. |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable IPS sniffer mode.                               |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable IPS sniffer mode.                              |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| ipunnumbered                               | Unnumbered IP used for PPPoE      | ipv4-address            | Not Specified           | 0.0.0.0                 |
|                                            | interfaces for which no unique    |                         |                         |                         |
|                                            | local address is provided.        |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| l2forward                                  | Enable/disable l2 forwarding.     | option                  | \-                      | disable                 |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable L2 forwarding.                                  |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable L2 forwarding.                                 |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| l2tp-client \*                             | Enable/disable this interface as  | option                  | \-                      | disable                 |
|                                            | a Layer 2 Tunnelling Protocol     |                         |                         |                         |
|                                            | (L2TP) client.                    |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable L2TP client.                                    |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable L2TP client.                                   |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| lacp-ha-secondary                          | LACP HA secondary member.         | option                  | \-                      | enable                  |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Allow HA secondary member to send/receive LACP         |                                        |
|                                            | |             | messages.                                              |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Block HA secondary member from sending/receiving LACP  |                                        |
|                                            | |             | messages.                                              |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| lacp-mode                                  | LACP mode.                        | option                  | \-                      | active                  |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *static*    | Use static aggregation, do not send and ignore any     |                                        |
|                                            | |             | LACP messages.                                         |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *passive*   | Passively use LACP to negotiate 802.3ad aggregation.   |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *active*    | Actively use LACP to negotiate 802.3ad aggregation.    |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| lacp-speed                                 | How often the interface sends     | option                  | \-                      | slow                    |
|                                            | LACP messages.                    |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *slow*      | Send LACP message every 30 seconds.                    |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *fast*      | Send LACP message every second.                        |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| lcp-echo-interval                          | Time in seconds between PPPoE     | integer                 | Minimum value: 0        | 5                       |
|                                            | Link Control Protocol (LCP) echo  |                         | Maximum value: 32767    |                         |
|                                            | requests.                         |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| lcp-max-echo-fails                         | Maximum missed LCP echo messages  | integer                 | Minimum value: 0        | 3                       |
|                                            | before disconnect.                |                         | Maximum value: 32767    |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| link-up-delay                              | Number of milliseconds to wait    | integer                 | Minimum value: 50       | 50                      |
|                                            | before considering a link is up.  |                         | Maximum value: 3600000  |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| lldp-network-policy                        | LLDP-MED network policy profile.  | string                  | Maximum length: 35      |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| lldp-reception                             | Enable/disable Link Layer         | option                  | \-                      | vdom                    |
|                                            | Discovery Protocol (LLDP)         |                         |                         |                         |
|                                            | reception.                        |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable reception of Link Layer Discovery Protocol      |                                        |
|                                            | |             | (LLDP).                                                |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable reception of Link Layer Discovery Protocol     |                                        |
|                                            | |             | (LLDP).                                                |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *vdom*      | Use VDOM Link Layer Discovery Protocol (LLDP)          |                                        |
|                                            | |             | reception configuration setting.                       |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| lldp-transmission                          | Enable/disable Link Layer         | option                  | \-                      | vdom                    |
|                                            | Discovery Protocol (LLDP)         |                         |                         |                         |
|                                            | transmission.                     |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable transmission of Link Layer Discovery Protocol   |                                        |
|                                            | |             | (LLDP).                                                |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable transmission of Link Layer Discovery Protocol  |                                        |
|                                            | |             | (LLDP).                                                |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *vdom*      | Use VDOM Link Layer Discovery Protocol (LLDP)          |                                        |
|                                            | |             | transmission configuration setting.                    |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| macaddr                                    | Change the interface\'s MAC       | mac-address             | Not Specified           | \*\*                    |
|                                            | address.                          |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| managed-subnetwork-size                    | Number of IP addresses to be      | option                  | \-                      | 256                     |
|                                            | allocated by FortiIPAM and used   |                         |                         |                         |
|                                            | by this FortiGate unit\'s DHCP    |                         |                         |                         |
|                                            | server settings.                  |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *32*        | Allocate a subnet with 32 IP addresses.                |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *64*        | Allocate a subnet with 64 IP addresses.                |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *128*       | Allocate a subnet with 128 IP addresses.               |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *256*       | Allocate a subnet with 256 IP addresses.               |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *512*       | Allocate a subnet with 512 IP addresses.               |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *1024*      | Allocate a subnet with 1024 IP addresses.              |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *2048*      | Allocate a subnet with 2048 IP addresses.              |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *4096*      | Allocate a subnet with 4096 IP addresses.              |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *8192*      | Allocate a subnet with 8192 IP addresses.              |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *16384*     | Allocate a subnet with 16384 IP addresses.             |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *32768*     | Allocate a subnet with 32768 IP addresses.             |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *65536*     | Allocate a subnet with 65536 IP addresses.             |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| management-ip                              | High Availability in-band         | ipv4-classnet-host      | Not Specified           | 0.0.0.0 0.0.0.0         |
|                                            | management IP address of this     |                         |                         |                         |
|                                            | interface.                        |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| measured-downstream-bandwidth              | Measured downstream bandwidth     | integer                 | Minimum value: 0        | 0                       |
|                                            | (kbps).                           |                         | Maximum value:          |                         |
|                                            |                                   |                         | 4294967295              |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| measured-upstream-bandwidth                | Measured upstream bandwidth       | integer                 | Minimum value: 0        | 0                       |
|                                            | (kbps).                           |                         | Maximum value:          |                         |
|                                            |                                   |                         | 4294967295              |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| mediatype \*                               | Select SFP media interface type   | option                  | \-                      | serdes-sfp \*\*         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +---------------------+--------------------------------------------------------+                                |
|                                            | | Option              | Description                                            |                                |
|                                            | +=====================+========================================================+                                |
|                                            | | *serdes-sfp*        | SFP using SerDes Media Interface                       |                                |
|                                            | +---------------------+--------------------------------------------------------+                                |
|                                            | | *sgmii-sfp*         | SFP using SGMII Media Interface                        |                                |
|                                            | +---------------------+--------------------------------------------------------+                                |
|                                            | | *serdes-copper-sfp* | Copper SFP using SerDes media Interface.               |                                |
|                                            | +---------------------+--------------------------------------------------------+                                |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| member `<interface-name>`                  | Physical interfaces that belong   | string                  | Maximum length: 79      |                         |
|                                            | to the aggregate or redundant     |                         |                         |                         |
|                                            | interface.                        |                         |                         |                         |
|                                            |                                   |                         |                         |                         |
|                                            | Physical interface name.          |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| min-links                                  | Minimum number of aggregated      | integer                 | Minimum value: 1        | 1                       |
|                                            | ports that must be up.            |                         | Maximum value: 32       |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| min-links-down                             | Action to take when less than the | option                  | \-                      | operational             |
|                                            | configured minimum number of      |                         |                         |                         |
|                                            | links are active.                 |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +------------------+--------------------------------------------------------+                                   |
|                                            | | Option           | Description                                            |                                   |
|                                            | +==================+========================================================+                                   |
|                                            | | *operational*    | Set the aggregate operationally down.                  |                                   |
|                                            | +------------------+--------------------------------------------------------+                                   |
|                                            | | *administrative* | Set the aggregate administratively down.               |                                   |
|                                            | +------------------+--------------------------------------------------------+                                   |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| mirroring-direction \*                     | Port mirroring direction.         | option                  | \-                      |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *rx*        | Port mirroring receive direction only.                 |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| mirroring-port \*                          | Mirroring port.                   | string                  | Maximum length: 15      |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| mode                                       | Addressing mode (static, DHCP,    | option                  | \-                      | static                  |
|                                            | PPPoE).                           |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *static*    | Static setting.                                        |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *dhcp*      | External DHCP client mode.                             |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *pppoe*     | External PPPoE mode.                                   |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| monitor-bandwidth                          | Enable monitoring bandwidth on    | option                  | \-                      | disable                 |
|                                            | this interface.                   |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable monitoring bandwidth on this interface.         |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable monitoring bandwidth on this interface.        |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| mtu                                        | MTU value for this interface.     | integer                 | Minimum value: 0        | 1500                    |
|                                            |                                   |                         | Maximum value:          |                         |
|                                            |                                   |                         | 4294967295              |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| mtu-override                               | Enable to set a custom MTU for    | option                  | \-                      | disable                 |
|                                            | this interface.                   |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Override default MTU.                                  |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Use default MTU.                                       |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| mux-type \*                                | Multiplexer type.                 | option                  | \-                      | llc-encaps              |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +--------------+--------------------------------------------------------+                                       |
|                                            | | Option       | Description                                            |                                       |
|                                            | +==============+========================================================+                                       |
|                                            | | *llc-encaps* | LLC encapsulation.                                     |                                       |
|                                            | +--------------+--------------------------------------------------------+                                       |
|                                            | | *vc-encaps*  | VC encapsulation.                                      |                                       |
|                                            | +--------------+--------------------------------------------------------+                                       |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| name                                       | Name.                             | string                  | Maximum length: 15      |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| ndiscforward                               | Enable/disable NDISC forwarding.  | option                  | \-                      | enable                  |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable NDISC forwarding.                               |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable NDISC forwarding.                              |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| netbios-forward                            | Enable/disable NETBIOS            | option                  | \-                      | disable                 |
|                                            | forwarding.                       |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *disable*   | Disable NETBIOS forwarding.                            |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *enable*    | Enable NETBIOS forwarding.                             |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| netflow-sampler                            | Enable/disable NetFlow on this    | option                  | \-                      | disable                 |
|                                            | interface and set the data that   |                         |                         |                         |
|                                            | NetFlow collects (rx, tx, or      |                         |                         |                         |
|                                            | both).                            |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *disable*   | Disable NetFlow protocol on this interface.            |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *tx*        | Monitor transmitted traffic on this interface.         |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *rx*        | Monitor received traffic on this interface.            |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *both*      | Monitor transmitted/received traffic on this           |                                        |
|                                            | |             | interface.                                             |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| np-qos-profile \*                          | NP QoS profile ID.                | integer                 | Minimum value: 0        | 0                       |
|                                            |                                   |                         | Maximum value: 15       |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| outbandwidth                               | Bandwidth limit for outgoing      | integer                 | Minimum value: 0        | 0                       |
|                                            | traffic (0 - 80000000 kbps).      |                         | Maximum value: 80000000 |                         |
|                                            |                                   |                         | \*\*                    |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| padt-retry-timeout                         | PPPoE Active Discovery Terminate  | integer                 | Minimum value: 0        | 1                       |
|                                            | (PADT) used to terminate sessions |                         | Maximum value:          |                         |
|                                            | after an idle time.               |                         | 4294967295              |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| password                                   | PPPoE account\'s password.        | password                | Not Specified           |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| phy-mode \*                                | DSL physical mode.                | option                  | \-                      | vdsl                    |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *vdsl*      | VDSL.                                                  |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| ping-serv-status                           | PING server status. Read-only.    | integer                 | Minimum value: 0        | 0                       |
|                                            |                                   |                         | Maximum value: 255      |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| poe \*                                     | Enable/disable PoE status.        | option                  | \-                      | enable                  |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable PoE status.                                     |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable PoE status.                                    |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| polling-interval                           | sFlow polling interval in seconds | integer                 | Minimum value: 1        | 20                      |
|                                            | (1 - 255).                        |                         | Maximum value: 255      |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| port-mirroring \*                          | Enable/disable NP port mirroring. | option                  | \-                      | disable                 |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *disable*   | Disable NP port mirroring.                             |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *enable*    | Enable NP port mirroring.                              |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| pppoe-egress-cos                           | CoS in VLAN tag for outgoing      | option                  | \-                      | cos0                    |
|                                            | PPPoE/PPP packets.                |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *cos0*      | CoS 0.                                                 |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *cos1*      | CoS 1.                                                 |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *cos2*      | CoS 2.                                                 |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *cos3*      | CoS 3.                                                 |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *cos4*      | CoS 4.                                                 |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *cos5*      | CoS 5.                                                 |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *cos6*      | CoS 6.                                                 |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *cos7*      | CoS 7.                                                 |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| pppoe-unnumbered-negotiate                 | Enable/disable PPPoE unnumbered   | option                  | \-                      | enable                  |
|                                            | negotiation.                      |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable IP address negotiating for unnumbered.          |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable IP address negotiating for unnumbered.         |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| pptp-auth-type                             | PPTP authentication type.         | option                  | \-                      | auto                    |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *auto*      | Automatically choose authentication.                   |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *pap*       | PAP authentication.                                    |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *chap*      | CHAP authentication.                                   |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *mschapv1*  | MS-CHAPv1 authentication.                              |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *mschapv2*  | MS-CHAPv2 authentication.                              |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| pptp-client                                | Enable/disable PPTP client.       | option                  | \-                      | disable                 |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable PPTP client.                                    |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable PPTP client.                                   |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| pptp-password                              | PPTP password.                    | password                | Not Specified           |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| pptp-server-ip                             | PPTP server IP address.           | ipv4-address            | Not Specified           | 0.0.0.0                 |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| pptp-timeout                               | Idle timer in minutes (0 for      | integer                 | Minimum value: 0        | 0                       |
|                                            | disabled).                        |                         | Maximum value: 65535    |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| pptp-user                                  | PPTP user name.                   | string                  | Maximum length: 64      |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| preserve-session-route                     | Enable/disable preservation of    | option                  | \-                      | disable                 |
|                                            | session route when dirty.         |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable preservation of session route when dirty.       |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable preservation of session route when dirty.      |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| priority                                   | Priority of learned routes.       | integer                 | Minimum value: 1        | 1                       |
|                                            |                                   |                         | Maximum value: 65535    |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| priority-override                          | Enable/disable fail back to       | option                  | \-                      | enable                  |
|                                            | higher priority port once         |                         |                         |                         |
|                                            | recovered.                        |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable fail back to higher priority port once          |                                        |
|                                            | |             | recovered.                                             |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable fail back to higher priority port once         |                                        |
|                                            | |             | recovered.                                             |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| profiles \*                                | Set allowed VDSL profiles.        | option                  | \-                      | 17a 30a                 |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *8a*        | Enable VDSL Profile 8A.                                |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *8b*        | Enable VDSL Profile 8B.                                |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *8c*        | Enable VDSL Profile 8C.                                |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *8d*        | Enable VDSL Profile 8D.                                |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *12a*       | Enable VDSL Profile 12A.                               |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *12b*       | Enable VDSL Profile 12B.                               |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *17a*       | Enable VDSL Profile 17A.                               |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *30a*       | Enable VDSL Profile 30A.                               |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *35b*       | Enable VDSL Profile 35B.                               |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| proxy-captive-portal                       | Enable/disable proxy captive      | option                  | \-                      | disable                 |
|                                            | portal on this interface.         |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable proxy captive portal on this interface.         |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable proxy captive portal on this interface.        |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| pvc-atm-qos \*                             | SFP-DSL ADSL Fallback PVC ATM     | option                  | \-                      | ubr                     |
|                                            | QoS.                              |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *cbr*       | ATM QoS CBR.                                           |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *rt-vbr*    | ATM QoS rt-VBR.                                        |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *nrt-vbr*   | ATM QoS nrt-VBR.                                       |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *ubr*       | ATM QoS CCBR.                                          |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| pvc-chan \*                                | SFP-DSL ADSL Fallback PVC         | integer                 | Minimum value: 0        | 0                       |
|                                            | Channel.                          |                         | Maximum value: 7        |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| pvc-crc \*                                 | SFP-DSL ADSL Fallback PVC CRC     | integer                 | Minimum value: 0        | 2                       |
|                                            | Option: bit0: sar LLC preserve,   |                         | Maximum value: 7        |                         |
|                                            | bit1: ream LLC preserve, bit2:    |                         |                         |                         |
|                                            | ream VC-MUX has crc.              |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| pvc-pcr \*                                 | SFP-DSL ADSL Fallback PVC Packet  | integer                 | Minimum value: 0        | 0                       |
|                                            | Cell Rate in cells (0 - 5500).    |                         | Maximum value: 5500     |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| pvc-scr \*                                 | SFP-DSL ADSL Fallback PVC         | integer                 | Minimum value: 0        | 0                       |
|                                            | Sustainable Cell Rate in cells    |                         | Maximum value: 5500     |                         |
|                                            | (0 - 5500).                       |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| pvc-vlan-id \*                             | SFP-DSL ADSL Fallback PVC VLAN    | integer                 | Minimum value: 1        | 7                       |
|                                            | ID.                               |                         | Maximum value: 4094     |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| pvc-vlan-rx-id \*                          | SFP-DSL ADSL Fallback PVC VLANID  | integer                 | Minimum value: 1        | 7                       |
|                                            | RX.                               |                         | Maximum value: 4094     |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| pvc-vlan-rx-op \*                          | SFP-DSL ADSL Fallback PVC VLAN RX | option                  | \-                      | pass-through            |
|                                            | op.                               |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +----------------+--------------------------------------------------------+                                     |
|                                            | | Option         | Description                                            |                                     |
|                                            | +================+========================================================+                                     |
|                                            | | *pass-through* | PVC VLAN Tag Passthrough.                              |                                     |
|                                            | +----------------+--------------------------------------------------------+                                     |
|                                            | | *replace*      | PVC VLAN Tag Replace.                                  |                                     |
|                                            | +----------------+--------------------------------------------------------+                                     |
|                                            | | *remove*       | PVC VLAN Tag Remove.                                   |                                     |
|                                            | +----------------+--------------------------------------------------------+                                     |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| pvc-vlan-tx-id \*                          | SFP-DSL ADSL Fallback PVC VLAN ID | integer                 | Minimum value: 1        | 7                       |
|                                            | TX.                               |                         | Maximum value: 4094     |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| pvc-vlan-tx-op \*                          | SFP-DSL ADSL Fallback PVC VLAN TX | option                  | \-                      | remove                  |
|                                            | op.                               |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +----------------+--------------------------------------------------------+                                     |
|                                            | | Option         | Description                                            |                                     |
|                                            | +================+========================================================+                                     |
|                                            | | *pass-through* | PVC VLAN Tag Passthrough.                              |                                     |
|                                            | +----------------+--------------------------------------------------------+                                     |
|                                            | | *replace*      | PVC VLAN Tag Replace.                                  |                                     |
|                                            | +----------------+--------------------------------------------------------+                                     |
|                                            | | *remove*       | PVC VLAN Tag Remove.                                   |                                     |
|                                            | +----------------+--------------------------------------------------------+                                     |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| reachable-time                             | IPv4 reachable time in            | integer                 | Minimum value: 30000    | 30000                   |
|                                            | milliseconds (30000 - 3600000,    |                         | Maximum value: 3600000  |                         |
|                                            | default = 30000).                 |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| redundant-interface                        | Redundant interface. Read-only.   | string                  | Maximum length: 15      |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| remote-ip                                  | Remote IP address of tunnel.      | ipv4-classnet-host      | Not Specified           | 0.0.0.0 0.0.0.0         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| replacemsg-override-group                  | Replacement message override      | string                  | Maximum length: 35      |                         |
|                                            | group.                            |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| retransmission \*                          | Enable/disable DSL                | option                  | \-                      | enable                  |
|                                            | retransmission.                   |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *disable*   | Disable retransmission.                                |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *enable*    | Enable retransmission.                                 |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| ring-rx \*                                 | RX ring size.                     | integer                 | Minimum value: 0        | 0                       |
|                                            |                                   |                         | Maximum value:          |                         |
|                                            |                                   |                         | 4294967295              |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| ring-tx \*                                 | TX ring size.                     | integer                 | Minimum value: 0        | 0                       |
|                                            |                                   |                         | Maximum value:          |                         |
|                                            |                                   |                         | 4294967295              |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| role                                       | Interface role.                   | option                  | \-                      | undefined               |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *lan*       | Connected to local network of endpoints.               |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *wan*       | Connected to Internet.                                 |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *dmz*       | Connected to server zone.                              |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *undefined* | Interface has no specific role.                        |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| sample-direction                           | Data that NetFlow collects (rx,   | option                  | \-                      | both                    |
|                                            | tx, or both).                     |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *tx*        | Monitor transmitted traffic on this interface.         |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *rx*        | Monitor received traffic on this interface.            |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *both*      | Monitor transmitted/received traffic on this           |                                        |
|                                            | |             | interface.                                             |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| sample-rate                                | sFlow sample rate (10 - 99999).   | integer                 | Minimum value: 10       | 2000                    |
|                                            |                                   |                         | Maximum value: 99999    |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| secondary-IP                               | Enable/disable adding a secondary | option                  | \-                      | disable                 |
|                                            | IP to this interface.             |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable secondary IP.                                   |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable secondary IP.                                  |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| security-8021x-dynamic-vlan-id \*          | VLAN ID for virtual switch.       | integer                 | Minimum value: 0        | 0                       |
|                                            |                                   |                         | Maximum value: 4094     |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| security-8021x-master \*                   | 802.1X master virtual-switch.     | string                  | Maximum length: 15      |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| security-8021x-member-mode \*              | 802.1X member mode.               | option                  | \-                      | switch                  |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *switch*    | This member will use switch 802.1X configuration.      |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | This member will disable 802.1X configuration.         |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| security-8021x-mode \*                     | 802.1X mode.                      | option                  | \-                      | default                 |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +----------------+--------------------------------------------------------+                                     |
|                                            | | Option         | Description                                            |                                     |
|                                            | +================+========================================================+                                     |
|                                            | | *default*      | 802.1X default mode.                                   |                                     |
|                                            | +----------------+--------------------------------------------------------+                                     |
|                                            | | *dynamic-vlan* | 802.1X dynamic VLAN (master) mode.                     |                                     |
|                                            | +----------------+--------------------------------------------------------+                                     |
|                                            | | *fallback*     | 802.1X fallback (master) mode.                         |                                     |
|                                            | +----------------+--------------------------------------------------------+                                     |
|                                            | | *slave*        | 802.1X slave mode.                                     |                                     |
|                                            | +----------------+--------------------------------------------------------+                                     |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| security-exempt-list                       | Name of security-exempt-list.     | string                  | Maximum length: 35      |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| security-external-logout                   | URL of external authentication    | string                  | Maximum length: 127     |                         |
|                                            | logout server.                    |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| security-external-web                      | URL of external authentication    | var-string              | Maximum length: 1023    |                         |
|                                            | web server.                       |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| security-groups `<name>`                   | User groups that can authenticate | string                  | Maximum length: 79      |                         |
|                                            | with the captive portal.          |                         |                         |                         |
|                                            |                                   |                         |                         |                         |
|                                            | Names of user groups that can     |                         |                         |                         |
|                                            | authenticate with the captive     |                         |                         |                         |
|                                            | portal.                           |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| security-mac-auth-bypass                   | Enable/disable MAC authentication | option                  | \-                      | disable                 |
|                                            | bypass.                           |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-----------------+--------------------------------------------------------+                                    |
|                                            | | Option          | Description                                            |                                    |
|                                            | +=================+========================================================+                                    |
|                                            | | *mac-auth-only* | Enable MAC authentication bypass without EAP.          |                                    |
|                                            | +-----------------+--------------------------------------------------------+                                    |
|                                            | | *enable*        | Enable MAC authentication bypass.                      |                                    |
|                                            | +-----------------+--------------------------------------------------------+                                    |
|                                            | | *disable*       | Disable MAC authentication bypass.                     |                                    |
|                                            | +-----------------+--------------------------------------------------------+                                    |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| security-mode                              | Turn on captive portal            | option                  | \-                      | none                    |
|                                            | authentication for this           |                         |                         |                         |
|                                            | interface.                        |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +------------------+--------------------------------------------------------+                                   |
|                                            | | Option           | Description                                            |                                   |
|                                            | +==================+========================================================+                                   |
|                                            | | *none*           | No security option.                                    |                                   |
|                                            | +------------------+--------------------------------------------------------+                                   |
|                                            | | *captive-portal* | Captive portal authentication.                         |                                   |
|                                            | +------------------+--------------------------------------------------------+                                   |
|                                            | | *802.1X*         | 802.1X port-based authentication.                      |                                   |
|                                            | +------------------+--------------------------------------------------------+                                   |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| security-redirect-url                      | URL redirection after             | var-string              | Maximum length: 1023    |                         |
|                                            | disclaimer/authentication.        |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| select-profile-30a-35b \*                  | Select VDSL Profile 30a or 35b.   | option                  | \-                      | 35b                     |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *30a*       | Enable VDSL Profile 30A.                               |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *35b*       | Enable VDSL Profile 35B.                               |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| service-name                               | PPPoE service name.               | string                  | Maximum length: 63      |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| sflow-sampler                              | Enable/disable sFlow on this      | option                  | \-                      | disable                 |
|                                            | interface.                        |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable sFlow protocol on this interface.               |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable sFlow protocol on this interface.              |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| sfp-dsl \*                                 | Enable/disable SFP DSL.           | option                  | \-                      | disable                 |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *disable*   | Disable SFP DSL.                                       |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *enable*    | Enable SFP DSL.                                        |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| sfp-dsl-adsl-fallback \*                   | Enable/disable SFP DSL ADSL       | option                  | \-                      | disable                 |
|                                            | fallback.                         |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *disable*   | Disable SFP DSL ADSL fallback.                         |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *enable*    | Enable SFP DSL ADSL fallback.                          |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| sfp-dsl-autodetect \*                      | Enable/disable SFP DSL MAC        | option                  | \-                      | enable                  |
|                                            | address autodetect.               |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *disable*   | Disable SFP DSL MAC address autodetect.                |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *enable*    | Enable SFP DSL MAC address autodetect.                 |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| sfp-dsl-mac \*                             | SFP DSL MAC address.              | mac-address             | Not Specified           | 00:00:00:00:00:00       |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| snmp-index                                 | Permanent SNMP Index of the       | integer                 | Minimum value: 1        | 0                       |
|                                            | interface.                        |                         | Maximum value:          |                         |
|                                            |                                   |                         | 2147483647              |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| speed                                      | Interface speed. The default      | option                  | \-                      | auto                    |
|                                            | setting and the options available |                         |                         |                         |
|                                            | depend on the interface hardware. |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *auto*      | Automatically adjust speed.                            |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *10full*    | 10M full-duplex.                                       |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *10half*    | 10M half-duplex.                                       |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *100full*   | 100M full-duplex.                                      |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *100half*   | 100M half-duplex.                                      |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *100auto*   | 100M auto-negotiation.                                 |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *1000full*  | 1000M full-duplex.                                     |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *1000auto*  | 1000M auto adjust.                                     |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *10000full* | 10G full-duplex.                                       |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *10000auto* | 10G auto.                                              |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| spillover-threshold                        | Egress Spillover threshold (0 -   | integer                 | Minimum value: 0        | 0                       |
|                                            | 16776000 kbps), 0 means           |                         | Maximum value: 16776000 |                         |
|                                            | unlimited.                        |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| src-check                                  | Enable/disable source IP check.   | option                  | \-                      | enable                  |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable source IP check.                                |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable source IP check.                               |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| status                                     | Bring the interface up or shut    | option                  | \-                      | up                      |
|                                            | the interface down.               |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *up*        | Bring the interface up.                                |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *down*      | Shut the interface down.                               |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| stp \*                                     | Enable/disable STP.               | option                  | \-                      | disable                 |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *disable*   | Disable STP.                                           |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *enable*    | Enable STP.                                            |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| stp-edge \*                                | Enable/disable as STP edge port.  | option                  | \-                      | disable                 |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *disable*   | Disable STP edge port.                                 |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *enable*    | Enable STP edge port.                                  |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| stp-ha-secondary \*                        | Control STP behavior on HA        | option                  | \-                      | priority-adjust         |
|                                            | secondary.                        |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------------+--------------------------------------------------------+                                  |
|                                            | | Option            | Description                                            |                                  |
|                                            | +===================+========================================================+                                  |
|                                            | | *disable*         | Disable STP negotiation on HA secondary.               |                                  |
|                                            | +-------------------+--------------------------------------------------------+                                  |
|                                            | | *enable*          | Enable STP negotiation on HA secondary.                |                                  |
|                                            | +-------------------+--------------------------------------------------------+                                  |
|                                            | | *priority-adjust* | Enable STP negotiation on HA secondary and make        |                                  |
|                                            | |                   | priority lower than HA primary.                        |                                  |
|                                            | +-------------------+--------------------------------------------------------+                                  |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| stpforward                                 | Enable/disable STP forwarding.    | option                  | \-                      | disable                 |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable STP forwarding.                                 |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable STP forwarding.                                |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| stpforward-mode                            | Configure STP forwarding mode.    | option                  | \-                      | rpl-all-ext-id          |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +---------------------+--------------------------------------------------------+                                |
|                                            | | Option              | Description                                            |                                |
|                                            | +=====================+========================================================+                                |
|                                            | | *rpl-all-ext-id*    | Replace all extension IDs (root, bridge).              |                                |
|                                            | +---------------------+--------------------------------------------------------+                                |
|                                            | | *rpl-bridge-ext-id* | Replace the bridge extension ID only.                  |                                |
|                                            | +---------------------+--------------------------------------------------------+                                |
|                                            | | *rpl-nothing*       | Replace nothing.                                       |                                |
|                                            | +---------------------+--------------------------------------------------------+                                |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| subst                                      | Enable to always send packets     | option                  | \-                      | disable                 |
|                                            | from this interface to a          |                         |                         |                         |
|                                            | destination MAC address.          |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Send packets from this interface.                      |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Do not send packets from this interface.               |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| substitute-dst-mac                         | Destination MAC address that all  | mac-address             | Not Specified           | 00:00:00:00:00:00       |
|                                            | packets are sent to from this     |                         |                         |                         |
|                                            | interface.                        |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| sw-algorithm \*                            | Frame distribution algorithm for  | option                  | \-                      | default                 |
|                                            | switch.                           |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *l2*        | Use layer 2 address for distribution.                  |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *l3*        | Use layer 3 address for distribution.                  |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *eh*        | Use enhanced hashing for distribution.                 |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *default*   | Use the hashing that the driver selects during         |                                        |
|                                            | |             | initialization for distribution.                       |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| swc-first-create \*                        | Initial create for                | integer                 | Minimum value: 0        | 0                       |
|                                            | switch-controller VLANs.          |                         | Maximum value:          |                         |
|                                            |                                   |                         | 4294967295              |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| swc-vlan \*                                | Creation status for               | integer                 | Minimum value: 0        | 0                       |
|                                            | switch-controller VLANs.          |                         | Maximum value:          |                         |
|                                            | Read-only.                        |                         | 4294967295              |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| switch                                     | Contained in switch. Read-only.   | string                  | Maximum length: 15      |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| switch-controller-access-vlan \*           | Block FortiSwitch port-to-port    | option                  | \-                      | disable                 |
|                                            | traffic.                          |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Block FortiSwitch port-to-port traffic on the VLAN,    |                                        |
|                                            | |             | only permitting traffic to and from the FortiGate.     |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Allow normal VLAN traffic.                             |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| switch-controller-arp-inspection \*        | Enable/disable/Monitor            | option                  | \-                      | disable                 |
|                                            | FortiSwitch ARP inspection.       |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable ARP inspection for FortiSwitch devices.         |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable ARP inspection for FortiSwitch devices.        |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *monitor*   | Monitor ARP traffic and update DHCP client database    |                                        |
|                                            | |             | with MAC-VLAN-IP.                                      |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| switch-controller-dhcp-snooping \*         | Switch controller DHCP snooping.  | option                  | \-                      | disable                 |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable DHCP snooping for FortiSwitch devices.          |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable DHCP snooping for FortiSwitch devices.         |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| switch-controller-dhcp-snooping-option82   | Switch controller DHCP snooping   | option                  | \-                      | disable                 |
| \*                                         | option82.                         |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable DHCP snooping insert option82 for FortiSwitch   |                                        |
|                                            | |             | devices.                                               |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable DHCP snooping insert option82 for FortiSwitch  |                                        |
|                                            | |             | devices.                                               |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| switch-controller-dhcp-snooping-verify-mac | Switch controller DHCP snooping   | option                  | \-                      | disable                 |
| \*                                         | verify MAC.                       |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable DHCP snooping verify source MAC for FortiSwitch |                                        |
|                                            | |             | devices.                                               |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable DHCP snooping verify source MAC for            |                                        |
|                                            | |             | FortiSwitch devices.                                   |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| switch-controller-dynamic \*               | Integrated FortiLink settings for | string                  | Maximum length: 35      |                         |
|                                            | managed FortiSwitch.              |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| switch-controller-feature \*               | Interface\'s purpose when         | option                  | \-                      | none                    |
|                                            | assigning traffic (read only).    |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +----------------+--------------------------------------------------------+                                     |
|                                            | | Option         | Description                                            |                                     |
|                                            | +================+========================================================+                                     |
|                                            | | *none*         | VLAN for generic purpose.                              |                                     |
|                                            | +----------------+--------------------------------------------------------+                                     |
|                                            | | *default-vlan* | Default VLAN (native) assigned to all switch ports     |                                     |
|                                            | |                | upon discovery.                                        |                                     |
|                                            | +----------------+--------------------------------------------------------+                                     |
|                                            | | *quarantine*   | VLAN for quarantined traffic.                          |                                     |
|                                            | +----------------+--------------------------------------------------------+                                     |
|                                            | | *rspan*        | VLAN for RSPAN/ERSPAN mirrored traffic.                |                                     |
|                                            | +----------------+--------------------------------------------------------+                                     |
|                                            | | *voice*        | VLAN dedicated for voice devices.                      |                                     |
|                                            | +----------------+--------------------------------------------------------+                                     |
|                                            | | *video*        | VLAN dedicated for camera devices.                     |                                     |
|                                            | +----------------+--------------------------------------------------------+                                     |
|                                            | | *nac*          | VLAN dedicated for NAC onboarding devices.             |                                     |
|                                            | +----------------+--------------------------------------------------------+                                     |
|                                            | | *nac-segment*  | VLAN dedicated for NAC segment devices.                |                                     |
|                                            | +----------------+--------------------------------------------------------+                                     |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| switch-controller-igmp-snooping \*         | Switch controller IGMP snooping.  | option                  | \-                      | disable                 |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable IGMP snooping.                                  |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable IGMP snooping.                                 |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| switch-controller-igmp-snooping-fast-leave | Switch controller IGMP snooping   | option                  | \-                      | disable                 |
| \*                                         | fast-leave.                       |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable IGMP snooping fast-leave.                       |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable IGMP snooping fast-leave.                      |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| switch-controller-igmp-snooping-proxy \*   | Switch controller IGMP snooping   | option                  | \-                      | disable                 |
|                                            | proxy.                            |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable IGMP snooping proxy.                            |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable IGMP snooping proxy.                           |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| switch-controller-iot-scanning \*          | Enable/disable managed            | option                  | \-                      | disable                 |
|                                            | FortiSwitch IoT scanning.         |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable IoT scanning for managed FortiSwitch devices.   |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable IoT scanning for managed FortiSwitch devices.  |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| switch-controller-learning-limit \*        | Limit the number of dynamic MAC   | integer                 | Minimum value: 0        | 0                       |
|                                            | addresses on this VLAN (1 - 128,  |                         | Maximum value: 128      |                         |
|                                            | 0 = no limit, default).           |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| switch-controller-mgmt-vlan \*             | VLAN to use for FortiLink         | integer                 | Minimum value: 1        | 4094                    |
|                                            | management purposes.              |                         | Maximum value: 4094     |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| switch-controller-nac \*                   | Integrated FortiLink settings for | string                  | Maximum length: 35      |                         |
|                                            | managed FortiSwitch.              |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| switch-controller-netflow-collect \*       | NetFlow collection and            | option                  | \-                      | disable                 |
|                                            | processing.                       |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *disable*   | Disable NetFlow collection.                            |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *enable*    | Enable NetFlow collection.                             |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| switch-controller-offload \*               | Enable/disable managed            | option                  | \-                      | disable                 |
|                                            | FortiSwitch routing offload.      |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable routing offload to managed FortiSwitch devices. |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable routing offload to managed FortiSwitch         |                                        |
|                                            | |             | devices.                                               |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| switch-controller-offload-gw \*            | Enable/disable managed            | option                  | \-                      | disable                 |
|                                            | FortiSwitch routing offload       |                         |                         |                         |
|                                            | gateway.                          |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable routing offload gateway to managed FortiSwitch  |                                        |
|                                            | |             | devices.                                               |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable routing offload gateway to managed FortiSwitch |                                        |
|                                            | |             | devices.                                               |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| switch-controller-offload-ip \*            | IP for routing offload on         | ipv4-address            | Not Specified           | 0.0.0.0                 |
|                                            | FortiSwitch.                      |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| switch-controller-rspan-mode \*            | Stop Layer2 MAC learning and      | option                  | \-                      | disable                 |
|                                            | interception of BPDUs and other   |                         |                         |                         |
|                                            | packets on this interface.        |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *disable*   | Disable RSPAN passthrough mode on this VLAN interface. |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *enable*    | Enable RSPAN passthrough mode on this VLAN interface.  |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| switch-controller-source-ip \*             | Source IP address used in         | option                  | \-                      | outbound                |
|                                            | FortiLink over L3 connections.    |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *outbound*  | Source IP address is that of the outbound interface.   |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *fixed*     | Source IP address is that of the FortiLink interface.  |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| switch-controller-traffic-policy \*        | Switch controller traffic policy  | string                  | Maximum length: 63      |                         |
|                                            | for the VLAN.                     |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| system-id                                  | Define a system ID for the        | mac-address             | Not Specified           | 00:00:00:00:00:00       |
|                                            | aggregate interface.              |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| system-id-type                             | Method in which system ID is      | option                  | \-                      | auto                    |
|                                            | generated.                        |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *auto*      | Use the MAC address of the first member.               |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *user*      | User-defined system ID.                                |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| tc-mode \*                                 | DSL transfer mode.                | option                  | \-                      | ptm                     |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *ptm*       | Packet transfer mode.                                  |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| tcp-mss                                    | TCP maximum segment size. 0 means | integer                 | Minimum value: 48       | 0                       |
|                                            | do not change segment size.       |                         | Maximum value: 65535    |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| trunk \*                                   | Enable/disable VLAN trunk.        | option                  | \-                      | disable                 |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable VLAN trunk on this interface.                   |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable VLAN trunk on this interface.                  |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| trust-ip-1                                 | Trusted host for dedicated        | ipv4-classnet-any       | Not Specified           | 0.0.0.0 0.0.0.0         |
|                                            | management traffic (0.0.0.0/24    |                         |                         |                         |
|                                            | for all hosts).                   |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| trust-ip-2                                 | Trusted host for dedicated        | ipv4-classnet-any       | Not Specified           | 0.0.0.0 0.0.0.0         |
|                                            | management traffic (0.0.0.0/24    |                         |                         |                         |
|                                            | for all hosts).                   |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| trust-ip-3                                 | Trusted host for dedicated        | ipv4-classnet-any       | Not Specified           | 0.0.0.0 0.0.0.0         |
|                                            | management traffic (0.0.0.0/24    |                         |                         |                         |
|                                            | for all hosts).                   |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| trust-ip6-1                                | Trusted IPv6 host for dedicated   | ipv6-prefix             | Not Specified           | ::/0                    |
|                                            | management traffic (::/0 for all  |                         |                         |                         |
|                                            | hosts).                           |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| trust-ip6-2                                | Trusted IPv6 host for dedicated   | ipv6-prefix             | Not Specified           | ::/0                    |
|                                            | management traffic (::/0 for all  |                         |                         |                         |
|                                            | hosts).                           |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| trust-ip6-3                                | Trusted IPv6 host for dedicated   | ipv6-prefix             | Not Specified           | ::/0                    |
|                                            | management traffic (::/0 for all  |                         |                         |                         |
|                                            | hosts).                           |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| type                                       | Interface type.                   | option                  | \-                      | vlan                    |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-----------------+--------------------------------------------------------+                                    |
|                                            | | Option          | Description                                            |                                    |
|                                            | +=================+========================================================+                                    |
|                                            | | *physical*      | Physical interface.                                    |                                    |
|                                            | +-----------------+--------------------------------------------------------+                                    |
|                                            | | *vlan*          | VLAN interface.                                        |                                    |
|                                            | +-----------------+--------------------------------------------------------+                                    |
|                                            | | *aggregate*     | Aggregate interface.                                   |                                    |
|                                            | +-----------------+--------------------------------------------------------+                                    |
|                                            | | *redundant*     | Redundant interface.                                   |                                    |
|                                            | +-----------------+--------------------------------------------------------+                                    |
|                                            | | *tunnel*        | Tunnel interface.                                      |                                    |
|                                            | +-----------------+--------------------------------------------------------+                                    |
|                                            | | *vdom-link*     | VDOM link interface.                                   |                                    |
|                                            | +-----------------+--------------------------------------------------------+                                    |
|                                            | | *loopback*      | Loopback interface.                                    |                                    |
|                                            | +-----------------+--------------------------------------------------------+                                    |
|                                            | | *switch*        | Software switch interface.                             |                                    |
|                                            | +-----------------+--------------------------------------------------------+                                    |
|                                            | | *vap-switch*    | VAP interface.                                         |                                    |
|                                            | +-----------------+--------------------------------------------------------+                                    |
|                                            | | *wl-mesh*       | WLAN mesh interface.                                   |                                    |
|                                            | +-----------------+--------------------------------------------------------+                                    |
|                                            | | *fext-wan*      | FortiExtender interface.                               |                                    |
|                                            | +-----------------+--------------------------------------------------------+                                    |
|                                            | | *vxlan*         | VXLAN interface.                                       |                                    |
|                                            | +-----------------+--------------------------------------------------------+                                    |
|                                            | | *geneve*        | GENEVE interface.                                      |                                    |
|                                            | +-----------------+--------------------------------------------------------+                                    |
|                                            | | *hdlc*          | T1/E1 interface.                                       |                                    |
|                                            | +-----------------+--------------------------------------------------------+                                    |
|                                            | | *switch-vlan*   | Switch VLAN interface.                                 |                                    |
|                                            | +-----------------+--------------------------------------------------------+                                    |
|                                            | | *emac-vlan*     | EMAC VLAN interface.                                   |                                    |
|                                            | +-----------------+--------------------------------------------------------+                                    |
|                                            | | *ssl*           | SSL VPN client interface.                              |                                    |
|                                            | +-----------------+--------------------------------------------------------+                                    |
|                                            | | *lan-extension* | LAN extension interface.                               |                                    |
|                                            | +-----------------+--------------------------------------------------------+                                    |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| username                                   | Username of the PPPoE account,    | string                  | Maximum length: 64      |                         |
|                                            | provided by your ISP.             |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| vci \*                                     | Virtual Channel ID.               | integer                 | Minimum value: 0        | 35                      |
|                                            |                                   |                         | Maximum value: 65535    |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| vdom                                       | Interface is in this virtual      | string                  | Maximum length: 31      |                         |
|                                            | domain (VDOM).                    |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| vectoring \*                               | Enable/disable DSL vectoring.     | option                  | \-                      | enable                  |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *disable*   | Disable vectoring.                                     |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *enable*    | Enable vectoring.                                      |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| vindex \*                                  | Switch control interface VLAN ID. | integer                 | Minimum value: 0        | 0                       |
|                                            | Read-only.                        |                         | Maximum value: 65535    |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| vlan-id \*                                 | Vlan ID.                          | integer                 | Minimum value: 0        | 1                       |
|                                            |                                   |                         | Maximum value: 4095     |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| vlan-op-mode \*                            | Configure DSL 802.1q mode.        | option                  | \-                      | passthrough             |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +---------------+--------------------------------------------------------+                                      |
|                                            | | Option        | Description                                            |                                      |
|                                            | +===============+========================================================+                                      |
|                                            | | *tag*         | 802.1q Tagged.                                         |                                      |
|                                            | +---------------+--------------------------------------------------------+                                      |
|                                            | | *untag*       | 802.1q Un-Tagged.                                      |                                      |
|                                            | +---------------+--------------------------------------------------------+                                      |
|                                            | | *passthrough* | 802.1q Passthrough.                                    |                                      |
|                                            | +---------------+--------------------------------------------------------+                                      |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| vlan-protocol                              | Ethernet protocol of VLAN.        | option                  | \-                      | 8021q                   |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *8021q*     | IEEE 802.1Q.                                           |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *8021ad*    | IEEE 802.1AD.                                          |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| vlanforward                                | Enable/disable traffic forwarding | option                  | \-                      | disable                 |
|                                            | between VLANs on this interface.  |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable traffic forwarding.                             |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable traffic forwarding.                            |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| vlanid                                     | VLAN ID (1 - 4094).               | integer                 | Minimum value: 1        | 0                       |
|                                            |                                   |                         | Maximum value: 4094     |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| vpi \*                                     | Virtual Path ID.                  | integer                 | Minimum value: 0        | 0                       |
|                                            |                                   |                         | Maximum value: 255      |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| vrf                                        | Virtual Routing Forwarding ID.    | integer                 | Minimum value: 0        | 0                       |
|                                            |                                   |                         | Maximum value: 251      |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| vrrp-virtual-mac                           | Enable/disable use of virtual MAC | option                  | \-                      | disable                 |
|                                            | for VRRP.                         |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable use of virtual MAC for VRRP.                    |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable use of virtual MAC for VRRP.                   |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| wccp                                       | Enable/disable WCCP on this       | option                  | \-                      | disable                 |
|                                            | interface. Used for encapsulated  |                         |                         |                         |
|                                            | WCCP communication between WCCP   |                         |                         |                         |
|                                            | clients and servers.              |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable WCCP protocol on this interface.                |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable WCCP protocol on this interface.               |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| weight                                     | Default weight for static routes  | integer                 | Minimum value: 0        | 0                       |
|                                            | (if route has no weight           |                         | Maximum value: 255      |                         |
|                                            | configured).                      |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| wifi-5g-threshold \*                       | Minimal signal strength to be     | string                  | Maximum length: 7       | -78                     |
|                                            | considered as a good 5G AP.       |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| wifi-acl \*                                | Access control for MAC addresses  | option                  | \-                      | deny                    |
|                                            | in the MAC list.                  |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *allow*     | Allow.                                                 |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *deny*      | Deny.                                                  |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| wifi-ap-band \*                            | How to select the AP to connect.  | option                  | \-                      | any                     |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +----------------+--------------------------------------------------------+                                     |
|                                            | | Option         | Description                                            |                                     |
|                                            | +================+========================================================+                                     |
|                                            | | *any*          | Connect to the best 2G or 5G AP.                       |                                     |
|                                            | +----------------+--------------------------------------------------------+                                     |
|                                            | | *5g-preferred* | Connect to the 5G AP if a good 5G AP exists.           |                                     |
|                                            | +----------------+--------------------------------------------------------+                                     |
|                                            | | *5g-only*      | Only connect to the 5G AP.                             |                                     |
|                                            | +----------------+--------------------------------------------------------+                                     |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| wifi-auth \*                               | WiFi authentication.              | option                  | \-                      | PSK                     |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *PSK*       | PSK.                                                   |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *radius*    | RADIUS.                                                |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *usergroup* | User group.                                            |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| wifi-auto-connect \*                       | Enable/disable WiFi network auto  | option                  | \-                      | enable                  |
|                                            | connect.                          |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable WiFi network auto connect.                      |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable WiFi network auto connect.                     |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| wifi-auto-save \*                          | Enable/disable WiFi network       | option                  | \-                      | disable                 |
|                                            | automatic save.                   |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable WiFi network automatic save.                    |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable WiFi network automatic save.                   |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| wifi-broadcast-ssid \*                     | Enable/disable SSID broadcast in  | option                  | \-                      | enable                  |
|                                            | the beacon.                       |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable SSID broadcast in the beacon.                   |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable SSID broadcast in the beacon.                  |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| wifi-dns-server1 \*                        | DNS server 1.                     | ipv4-address            | Not Specified           | 0.0.0.0                 |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| wifi-dns-server2 \*                        | DNS server 2.                     | ipv4-address            | Not Specified           | 0.0.0.0                 |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| wifi-encrypt \*                            | Data encryption.                  | option                  | \-                      | AES                     |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *TKIP*      | TKIP.                                                  |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *AES*       | AES.                                                   |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| wifi-fragment-threshold \*                 | WiFi fragment threshold (800 -    | integer                 | Minimum value: 800      | 2346                    |
|                                            | 2346).                            |                         | Maximum value: 2346     |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| wifi-gateway \*                            | IPv4 default gateway IP address.  | ipv4-address            | Not Specified           | 0.0.0.0                 |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| wifi-key \*                                | WiFi WEP Key.                     | password                | Not Specified           |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| wifi-keyindex \*                           | WEP key index (1 - 4).            | integer                 | Minimum value: 1        | 1                       |
|                                            |                                   |                         | Maximum value: 4        |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| wifi-mac-filter \*                         | Enable/disable MAC filter status. | option                  | \-                      | disable                 |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | Option      | Description                                            |                                        |
|                                            | +=============+========================================================+                                        |
|                                            | | *enable*    | Enable MAC filter.                                     |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
|                                            | | *disable*   | Disable MAC filter.                                    |                                        |
|                                            | +-------------+--------------------------------------------------------+                                        |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| wifi-passphrase \*                         | WiFi pre-shared key for WPA.      | password                | Not Specified           |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| wifi-radius-server \*                      | WiFi RADIUS server for WPA.       | string                  | Maximum length: 35      |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| wifi-rts-threshold \*                      | WiFi RTS threshold (256 - 2346).  | integer                 | Minimum value: 256      | 2346                    |
|                                            |                                   |                         | Maximum value: 2346     |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| wifi-security \*                           | Wireless access security of SSID. | option                  | \-                      | wpa-personal            |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                            | +------------------------+--------------------------------------------------------+                             |
|                                            | | Option                 | Description                                            |                             |
|                                            | +========================+========================================================+                             |
|                                            | | *open*                 | Open.                                                  |                             |
|                                            | +------------------------+--------------------------------------------------------+                             |
|                                            | | *wep64*                | WEP64.                                                 |                             |
|                                            | +------------------------+--------------------------------------------------------+                             |
|                                            | | *wep128*               | WEP128.                                                |                             |
|                                            | +------------------------+--------------------------------------------------------+                             |
|                                            | | *wpa-personal*         | WPA personal.                                          |                             |
|                                            | +------------------------+--------------------------------------------------------+                             |
|                                            | | *wpa-enterprise*       | WPA enterprise.                                        |                             |
|                                            | +------------------------+--------------------------------------------------------+                             |
|                                            | | *wpa-only-personal*    | WPA personal only.                                     |                             |
|                                            | +------------------------+--------------------------------------------------------+                             |
|                                            | | *wpa-only-enterprise*  | WPA enterprise only.                                   |                             |
|                                            | +------------------------+--------------------------------------------------------+                             |
|                                            | | *wpa2-only-personal*   | WPA2 personal only.                                    |                             |
|                                            | +------------------------+--------------------------------------------------------+                             |
|                                            | | *wpa2-only-enterprise* | WPA2 enterprise only.                                  |                             |
|                                            | +------------------------+--------------------------------------------------------+                             |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| wifi-ssid \*                               | IEEE 802.11 Service Set           | string                  | Maximum length: 32      | fortinet                |
|                                            | Identifier.                       |                         |                         |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| wifi-usergroup \*                          | WiFi user group for WPA.          | string                  | Maximum length: 35      |                         |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| wins-ip                                    | WINS server IP.                   | ipv4-address            | Not Specified           | 0.0.0.0                 |
+--------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+

