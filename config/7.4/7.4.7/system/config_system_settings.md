# config system settings

Configure VDOM settings.

## Syntax

```
config system settings
    Description: Configure VDOM settings.
    set allow-linkdown-path [enable|disable]
    set allow-subnet-overlap [enable|disable]
    set application-bandwidth-tracking [disable|enable]
    set asymroute [enable|disable]
    set asymroute-icmp [enable|disable]
    set asymroute6 [enable|disable]
    set asymroute6-icmp [enable|disable]
    set auxiliary-session [enable|disable]
    set bfd [enable|disable]
    set bfd-desired-min-tx {integer}
    set bfd-detect-mult {integer}
    set bfd-dont-enforce-src-port [enable|disable]
    set bfd-required-min-rx {integer}
    set block-land-attack [disable|enable]
    set central-nat [enable|disable]
    set comments {var-string}
    set default-app-port-as-service [enable|disable]
    set default-policy-expiry-days {integer}
    set default-voip-alg-mode [proxy-based|kernel-helper-based]
    set deny-tcp-with-icmp [enable|disable]
    set detect-unknown-esp [enable|disable]
    set device {string}
    set dhcp-proxy [enable|disable]
    set dhcp-proxy-interface {string}
    set dhcp-proxy-interface-select-method [auto|sdwan|...]
    set dhcp-server-ip {user}
    set dhcp6-server-ip {user}
    set discovered-device-timeout {integer}
    set dyn-addr-session-check [enable|disable]
    set ecmp-max-paths {integer}
    set email-portal-check-dns [disable|enable]
    set ext-resource-session-check [enable|disable]
    set firewall-session-dirty [check-all|check-new|...]
    set fqdn-session-check [enable|disable]
    set fw-session-hairpin [enable|disable]
    set gateway {ipv4-address}
    set gateway6 {ipv6-address}
    set gui-advanced-policy [enable|disable]
    set gui-advanced-wireless-features [enable|disable]
    set gui-allow-unnamed-policy [enable|disable]
    set gui-antivirus [enable|disable]
    set gui-ap-profile [enable|disable]
    set gui-application-control [enable|disable]
    set gui-casb [enable|disable]
    set gui-default-policy-columns <name1>, <name2>, ...
    set gui-dhcp-advanced [enable|disable]
    set gui-dlp-profile [enable|disable]
    set gui-dns-database [enable|disable]
    set gui-dnsfilter [enable|disable]
    set gui-dos-policy [enable|disable]
    set gui-dynamic-device-os-id [enable|disable]
    set gui-dynamic-routing [enable|disable]
    set gui-email-collection [enable|disable]
    set gui-enforce-change-summary [disable|require|...]
    set gui-explicit-proxy [enable|disable]
    set gui-file-filter [enable|disable]
    set gui-fortiap-split-tunneling [enable|disable]
    set gui-fortiextender-controller [enable|disable]
    set gui-icap [enable|disable]
    set gui-implicit-policy [enable|disable]
    set gui-ips [enable|disable]
    set gui-load-balance [enable|disable]
    set gui-local-in-policy [enable|disable]
    set gui-multicast-policy [enable|disable]
    set gui-multiple-interface-policy [enable|disable]
    set gui-object-colors [enable|disable]
    set gui-ot [enable|disable]
    set gui-policy-based-ipsec [enable|disable]
    set gui-policy-disclaimer [enable|disable]
    set gui-proxy-inspection [enable|disable]
    set gui-route-tag-address-creation [enable|disable]
    set gui-security-profile-group [enable|disable]
    set gui-spamfilter [enable|disable]
    set gui-sslvpn [enable|disable]
    set gui-sslvpn-personal-bookmarks [enable|disable]
    set gui-sslvpn-realms [enable|disable]
    set gui-switch-controller [enable|disable]
    set gui-threat-weight [enable|disable]
    set gui-traffic-shaping [enable|disable]
    set gui-videofilter [enable|disable]
    set gui-virtual-patch-profile [enable|disable]
    set gui-voip-profile [enable|disable]
    set gui-vpn [enable|disable]
    set gui-waf-profile [enable|disable]
    set gui-wan-load-balancing [enable|disable]
    set gui-wanopt-cache [enable|disable]
    set gui-webfilter [enable|disable]
    set gui-webfilter-advanced [enable|disable]
    set gui-wireless-controller [enable|disable]
    set gui-ztna [enable|disable]
    set h323-direct-model [disable|enable]
    set http-external-dest [fortiweb|forticache]
    set ike-dn-format [with-space|no-space]
    set ike-policy-route [enable|disable]
    set ike-port {integer}
    set ike-quick-crash-detect [enable|disable]
    set ike-session-resume [enable|disable]
    set ike-tcp-port {integer}
    set internet-service-app-ctrl-size {integer}
    set internet-service-database-cache [disable|enable]
    set ip {ipv4-classnet-host}
    set ip6 {ipv6-prefix}
    set lan-extension-controller-addr {string}
    set link-down-access [enable|disable]
    set lldp-reception [enable|disable|...]
    set lldp-transmission [enable|disable|...]
    set location-id {ipv4-address}
    set mac-ttl {integer}
    set manageip {user}
    set manageip6 {ipv6-prefix}
    set multicast-forward [enable|disable]
    set multicast-skip-policy [enable|disable]
    set multicast-ttl-notchange [enable|disable]
    set nat46-force-ipv4-packet-forwarding [enable|disable]
    set nat46-generate-ipv6-fragment-header [enable|disable]
    set nat64-force-ipv6-packet-forwarding [enable|disable]
    set ngfw-mode [profile-based|policy-based]
    set opmode [nat|transparent]
    set policy-offload-level [disable|dos-offload]
    set prp-trailer-action [enable|disable]
    set sccp-port {integer}
    set sctp-session-without-init [enable|disable]
    set ses-denied-multicast-traffic [enable|disable]
    set ses-denied-traffic [enable|disable]
    set sip-expectation [enable|disable]
    set sip-nat-trace [enable|disable]
    set sip-ssl-port {integer}
    set sip-tcp-port {integer}
    set sip-udp-port {integer}
    set snat-hairpin-traffic [enable|disable]
    set status [enable|disable]
    set strict-src-check [enable|disable]
    set tcp-session-without-syn [enable|disable]
    set utf8-spam-tagging [enable|disable]
    set v4-ecmp-mode [source-ip-based|weight-based|...]
    set vdom-type [traffic|lan-extension|...]
    set vpn-stats-log {option1}, {option2}, ...
    set vpn-stats-period {integer}
    set wccp-cache-engine [enable|disable]
end
```

## Parameters

+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| Parameter                           | Description                       | Type                    | Size                    | Default                 |
+=====================================+===================================+=========================+=========================+=========================+
| allow-linkdown-path                 | Enable/disable link down path.    | option                  | \-                      | disable                 |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Allow link down path.                                  |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Do not allow link down path.                           |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| allow-subnet-overlap                | Enable/disable allowing interface | option                  | \-                      | disable                 |
|                                     | subnets to use overlapping IP     |                         |                         |                         |
|                                     | addresses.                        |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable overlapping subnets.                            |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable overlapping subnets.                           |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| application-bandwidth-tracking      | Enable/disable application        | option                  | \-                      | disable                 |
|                                     | bandwidth tracking.               |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *disable*   | Disable application bandwidth tracking.                |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *enable*    | Enable application bandwidth tracking.                 |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| asymroute                           | Enable/disable IPv4 asymmetric    | option                  | \-                      | disable                 |
|                                     | routing.                          |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable IPv4 asymmetric routing.                        |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable IPv4 asymmetric routing.                       |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| asymroute-icmp                      | Enable/disable ICMP asymmetric    | option                  | \-                      | disable                 |
|                                     | routing.                          |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable ICMP asymmetric routing.                        |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable ICMP asymmetric routing.                       |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| asymroute6                          | Enable/disable asymmetric IPv6    | option                  | \-                      | disable                 |
|                                     | routing.                          |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable asymmetric IPv6 routing.                        |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable asymmetric IPv6 routing.                       |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| asymroute6-icmp                     | Enable/disable asymmetric ICMPv6  | option                  | \-                      | disable                 |
|                                     | routing.                          |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable asymmetric ICMPv6 routing.                      |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable asymmetric ICMPv6 routing.                     |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| auxiliary-session \*                | Enable/disable auxiliary session. | option                  | \-                      | disable                 |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable auxiliary session for this VDOM.                |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable auxiliary session for this VDOM.               |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| bfd                                 | Enable/disable Bi-directional     | option                  | \-                      | disable                 |
|                                     | Forwarding Detection (BFD) on all |                         |                         |                         |
|                                     | interfaces.                       |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable Bi-directional Forwarding Detection (BFD) on    |                                        |
|                                     | |             | all interfaces.                                        |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable Bi-directional Forwarding Detection (BFD) on   |                                        |
|                                     | |             | all interfaces.                                        |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| bfd-desired-min-tx                  | BFD desired minimal transmit      | integer                 | Minimum value: 1        | 250                     |
|                                     | interval (1 - 100000 ms, default  |                         | Maximum value: 100000   |                         |
|                                     | = 250).                           |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| bfd-detect-mult                     | BFD detection multiplier (1 - 50, | integer                 | Minimum value: 1        | 3                       |
|                                     | default = 3).                     |                         | Maximum value: 50       |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| bfd-dont-enforce-src-port           | Enable to not enforce verifying   | option                  | \-                      | disable                 |
|                                     | the source port of BFD Packets.   |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable verifying the source port of BFD Packets.       |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable verifying the source port of BFD Packets.      |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| bfd-required-min-rx                 | BFD required minimal receive      | integer                 | Minimum value: 1        | 250                     |
|                                     | interval (1 - 100000 ms, default  |                         | Maximum value: 100000   |                         |
|                                     | = 250).                           |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| block-land-attack                   | Enable/disable blocking of land   | option                  | \-                      | disable                 |
|                                     | attacks.                          |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *disable*   | Do not block land attack.                              |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *enable*    | Block land attack.                                     |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| central-nat                         | Enable/disable central NAT.       | option                  | \-                      | disable                 |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable central NAT.                                    |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable central NAT.                                   |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| comments                            | VDOM comments.                    | var-string              | Maximum length: 255     |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| default-app-port-as-service         | Enable/disable policy service     | option                  | \-                      | enable                  |
|                                     | enforcement based on application  |                         |                         |                         |
|                                     | default ports.                    |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable setting.                                        |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable setting.                                       |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| default-policy-expiry-days          | Default policy expiry in days     | integer                 | Minimum value: 0        | 30                      |
|                                     | (0 - 365 days, default = 30).     |                         | Maximum value: 365      |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| default-voip-alg-mode               | Configure how the FortiGate       | option                  | \-                      | proxy-based             |
|                                     | handles VoIP traffic when a       |                         |                         |                         |
|                                     | policy that accepts the traffic   |                         |                         |                         |
|                                     | doesn\'t include a VoIP profile.  |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-----------------------+--------------------------------------------------------+                              |
|                                     | | Option                | Description                                            |                              |
|                                     | +=======================+========================================================+                              |
|                                     | | *proxy-based*         | Use a default proxy-based VoIP ALG.                    |                              |
|                                     | +-----------------------+--------------------------------------------------------+                              |
|                                     | | *kernel-helper-based* | Use the SIP session helper.                            |                              |
|                                     | +-----------------------+--------------------------------------------------------+                              |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| deny-tcp-with-icmp                  | Enable/disable denying TCP by     | option                  | \-                      | disable                 |
|                                     | sending an ICMP communication     |                         |                         |                         |
|                                     | prohibited packet.                |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Deny TCP with ICMP.                                    |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable denying TCP with ICMP.                         |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| detect-unknown-esp                  | Enable/disable detection of       | option                  | \-                      | enable                  |
|                                     | unknown ESP packets (default =    |                         |                         |                         |
|                                     | enable).                          |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable detection of unknown ESP packets and drop the   |                                        |
|                                     | |             | ESP packet if it\'s unknown.                           |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable detection of unknown ESP packets.              |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| device                              | Interface to use for management   | string                  | Maximum length: 35      |                         |
|                                     | access for NAT mode.              |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| dhcp-proxy                          | Enable/disable the DHCP Proxy.    | option                  | \-                      | disable                 |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable the DHCP proxy.                                 |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable the DHCP proxy.                                |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| dhcp-proxy-interface                | Specify outgoing interface to     | string                  | Maximum length: 15      |                         |
|                                     | reach server.                     |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| dhcp-proxy-interface-select-method  | Specify how to select outgoing    | option                  | \-                      | auto                    |
|                                     | interface to reach server.        |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *auto*      | Set outgoing interface automatically.                  |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *sdwan*     | Set outgoing interface by SD-WAN or policy routing     |                                        |
|                                     | |             | rules.                                                 |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *specify*   | Set outgoing interface manually.                       |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| dhcp-server-ip                      | DHCP Server IPv4 address.         | user                    | Not Specified           |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| dhcp6-server-ip                     | DHCPv6 server IPv6 address.       | user                    | Not Specified           |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| discovered-device-timeout           | Timeout for discovered devices    | integer                 | Minimum value: 1        | 28                      |
|                                     | (1 - 365 days, default = 28).     |                         | Maximum value: 365      |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| dyn-addr-session-check              | Enable/disable dirty session      | option                  | \-                      | disable                 |
|                                     | check caused by dynamic address   |                         |                         |                         |
|                                     | updates.                          |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable dirty session check caused by dynamic address   |                                        |
|                                     | |             | updates.                                               |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable dirty session check caused by dynamic address  |                                        |
|                                     | |             | updates.                                               |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| ecmp-max-paths                      | Maximum number of Equal Cost      | integer                 | Minimum value: 1        | 255                     |
|                                     | Multi-Path (ECMP) next-hops. Set  |                         | Maximum value: 255      |                         |
|                                     | to 1 to disable ECMP routing (1 - |                         |                         |                         |
|                                     | 255, default = 255).              |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| email-portal-check-dns              | Enable/disable using DNS to       | option                  | \-                      | enable                  |
|                                     | validate email addresses          |                         |                         |                         |
|                                     | collected by a captive portal.    |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *disable*   | Disable email address checking with DNS.               |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *enable*    | Enable email address checking with DNS.                |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| ext-resource-session-check          | Enable/disable dirty session      | option                  | \-                      | disable                 |
|                                     | check caused by external resource |                         |                         |                         |
|                                     | updates.                          |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable dirty session check caused by external resource |                                        |
|                                     | |             | updates.                                               |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable dirty session check caused by external         |                                        |
|                                     | |             | resource updates.                                      |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| firewall-session-dirty              | Select how to manage sessions     | option                  | \-                      | check-all               |
|                                     | affected by firewall policy       |                         |                         |                         |
|                                     | configuration changes.            |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-----------------------+--------------------------------------------------------+                              |
|                                     | | Option                | Description                                            |                              |
|                                     | +=======================+========================================================+                              |
|                                     | | *check-all*           | All sessions affected by a firewall policy change are  |                              |
|                                     | |                       | flushed from the session table. When new packets are   |                              |
|                                     | |                       | received they are re-evaluated by stateful inspection  |                              |
|                                     | |                       | and re-added to the session table.                     |                              |
|                                     | +-----------------------+--------------------------------------------------------+                              |
|                                     | | *check-new*           | Established sessions for changed firewall policies     |                              |
|                                     | |                       | continue without being affected by the policy          |                              |
|                                     | |                       | configuration change. New sessions are evaluated       |                              |
|                                     | |                       | according to the new firewall policy configuration.    |                              |
|                                     | +-----------------------+--------------------------------------------------------+                              |
|                                     | | *check-policy-option* | Sessions are managed individually depending on the     |                              |
|                                     | |                       | firewall policy. Some sessions may restart. Some may   |                              |
|                                     | |                       | continue.                                              |                              |
|                                     | +-----------------------+--------------------------------------------------------+                              |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| fqdn-session-check                  | Enable/disable dirty session      | option                  | \-                      | disable                 |
|                                     | check caused by FQDN updates.     |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable dirty session check caused by FQDN updates.     |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable dirty session check caused by FQDN updates.    |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| fw-session-hairpin                  | Enable/disable checking for a     | option                  | \-                      | disable                 |
|                                     | matching policy each time hairpin |                         |                         |                         |
|                                     | traffic goes through the          |                         |                         |                         |
|                                     | FortiGate.                        |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Perform a policy check every time.                     |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Perform a policy check only the first time the session |                                        |
|                                     | |             | is received.                                           |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gateway                             | Transparent mode IPv4 default     | ipv4-address            | Not Specified           | 0.0.0.0                 |
|                                     | gateway IP address.               |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gateway6                            | Transparent mode IPv6 default     | ipv6-address            | Not Specified           | ::                      |
|                                     | gateway IP address.               |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-advanced-policy                 | Enable/disable advanced policy    | option                  | \-                      | disable                 |
|                                     | configuration on the GUI.         |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable advanced policy configuration on the GUI.       |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable advanced policy configuration on the GUI.      |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-advanced-wireless-features      | Enable/disable advanced wireless  | option                  | \-                      | disable                 |
|                                     | features in GUI.                  |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable advanced wireless features in GUI.              |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable advanced wireless features in GUI.             |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-allow-unnamed-policy            | Enable/disable the requirement    | option                  | \-                      | disable                 |
|                                     | for policy naming on the GUI.     |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable the requirement for policy naming on the GUI.   |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable the requirement for policy naming on the GUI.  |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-antivirus                       | Enable/disable AntiVirus on the   | option                  | \-                      | enable                  |
|                                     | GUI.                              |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable AntiVirus on the GUI.                           |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable AntiVirus on the GUI.                          |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-ap-profile                      | Enable/disable FortiAP profiles   | option                  | \-                      | enable                  |
|                                     | on the GUI.                       |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable FortiAP profiles on the GUI.                    |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable FortiAP profiles on the GUI.                   |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-application-control             | Enable/disable application        | option                  | \-                      | enable                  |
|                                     | control on the GUI.               |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable application control on the GUI.                 |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable application control on the GUI.                |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-casb                            | Enable/disable Inline-CASB on the | option                  | \-                      | disable                 |
|                                     | GUI.                              |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable Inline-CASB on the GUI.                         |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable Inline-CASB on the GUI.                        |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-default-policy-columns `<name>` | Default columns to display for    | string                  | Maximum length: 79      |                         |
|                                     | policy lists on GUI.              |                         |                         |                         |
|                                     |                                   |                         |                         |                         |
|                                     | Select column name.               |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-dhcp-advanced                   | Enable/disable advanced DHCP      | option                  | \-                      | enable                  |
|                                     | options on the GUI.               |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable advanced DHCP options on the GUI.               |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable advanced DHCP options on the GUI.              |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-dlp-profile                     | Enable/disable Data Loss          | option                  | \-                      | disable                 |
|                                     | Prevention on the GUI.            |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable Data Loss Prevention on the GUI.                |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable Data Loss Prevention on the GUI.               |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-dns-database                    | Enable/disable DNS database       | option                  | \-                      | disable                 |
|                                     | settings on the GUI.              |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable DNS database settings on the GUI.               |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable DNS database settings on the GUI.              |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-dnsfilter                       | Enable/disable DNS Filtering on   | option                  | \-                      | enable \*\*             |
|                                     | the GUI.                          |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable DNS Filtering on the GUI.                       |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable DNS Filtering on the GUI.                      |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-dos-policy                      | Enable/disable DoS policies on    | option                  | \-                      | enable \*\*             |
|                                     | the GUI.                          |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable DoS policies on the GUI.                        |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable DoS policies on the GUI.                       |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-dynamic-device-os-id            | Enable/disable Create dynamic     | option                  | \-                      | disable                 |
|                                     | addresses to manage known         |                         |                         |                         |
|                                     | devices.                          |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable Create dynamic addresses to manage known        |                                        |
|                                     | |             | devices.                                               |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable Create dynamic addresses to manage known       |                                        |
|                                     | |             | devices.                                               |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-dynamic-routing                 | Enable/disable dynamic routing on | option                  | \-                      | enable \*\*             |
|                                     | the GUI.                          |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable dynamic routing on the GUI.                     |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable dynamic routing on the GUI.                    |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-email-collection                | Enable/disable email collection   | option                  | \-                      | disable                 |
|                                     | on the GUI.                       |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable email collection on the GUI.                    |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable email collection on the GUI.                   |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-enforce-change-summary          | Enforce change summaries for      | option                  | \-                      | require                 |
|                                     | select tables in the GUI.         |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *disable*   | No change summary requirement.                         |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *require*   | Change summary required.                               |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *optional*  | Change summary optional.                               |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-explicit-proxy                  | Enable/disable the explicit proxy | option                  | \-                      | disable                 |
|                                     | on the GUI.                       |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable the explicit proxy on the GUI.                  |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable the explicit proxy on the GUI.                 |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-file-filter                     | Enable/disable File-filter on the | option                  | \-                      | enable \*\*             |
|                                     | GUI.                              |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable File-filter on the GUI.                         |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable File-filter on the GUI.                        |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-fortiap-split-tunneling         | Enable/disable FortiAP split      | option                  | \-                      | disable                 |
|                                     | tunneling on the GUI.             |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable FortiAP split tunneling on the GUI.             |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable FortiAP split tunneling on the GUI.            |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-fortiextender-controller        | Enable/disable FortiExtender on   | option                  | \-                      | disable \*\*            |
|                                     | the GUI.                          |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable FortiExtender on the GUI.                       |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable FortiExtender on the GUI.                      |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-icap                            | Enable/disable ICAP on the GUI.   | option                  | \-                      | disable                 |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable ICAP on the GUI.                                |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable ICAP on the GUI.                               |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-implicit-policy                 | Enable/disable implicit firewall  | option                  | \-                      | enable                  |
|                                     | policies on the GUI.              |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable implicit firewall policies on the GUI.          |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable implicit firewall policies on the GUI.         |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-ips                             | Enable/disable IPS on the GUI.    | option                  | \-                      | enable \*\*             |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable IPS on the GUI.                                 |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable IPS on the GUI.                                |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-load-balance                    | Enable/disable server load        | option                  | \-                      | disable                 |
|                                     | balancing on the GUI.             |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable server load balancing on the GUI.               |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable server load balancing on the GUI.              |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-local-in-policy                 | Enable/disable Local-In policies  | option                  | \-                      | disable                 |
|                                     | on the GUI.                       |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable Local-In policies on the GUI.                   |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable Local-In policies on the GUI.                  |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-multicast-policy                | Enable/disable multicast firewall | option                  | \-                      | disable                 |
|                                     | policies on the GUI.              |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable multicast firewall policies on the GUI.         |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable multicast firewall policies on the GUI.        |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-multiple-interface-policy       | Enable/disable adding multiple    | option                  | \-                      | disable                 |
|                                     | interfaces to a policy on the     |                         |                         |                         |
|                                     | GUI.                              |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable adding multiple interfaces to a policy on the   |                                        |
|                                     | |             | GUI.                                                   |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable adding multiple interfaces to a policy on the  |                                        |
|                                     | |             | GUI.                                                   |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-object-colors                   | Enable/disable object colors on   | option                  | \-                      | enable                  |
|                                     | the GUI.                          |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable object colors on the GUI.                       |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable object colors on the GUI.                      |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-ot                              | Enable/disable Operational        | option                  | \-                      | disable                 |
|                                     | technology features on the GUI.   |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable Operational technology features on the GUI.     |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable Operational technology features on the GUI.    |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-policy-based-ipsec              | Enable/disable policy-based IPsec | option                  | \-                      | disable                 |
|                                     | VPN on the GUI.                   |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable policy-based IPsec VPN on the GUI.              |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable policy-based IPsec VPN on the GUI.             |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-policy-disclaimer               | Enable/disable policy disclaimer  | option                  | \-                      | disable                 |
|                                     | on the GUI.                       |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable policy disclaimer on the GUI.                   |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable policy disclaimer on the GUI.                  |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-proxy-inspection                | Enable/disable the proxy features | option                  | \-                      | enable \*\*             |
|                                     | on the GUI.                       |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable the proxy features on the GUI.                  |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable the proxy features on the GUI.                 |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-route-tag-address-creation      | Enable/disable route-tag          | option                  | \-                      | disable                 |
|                                     | addresses on the GUI.             |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable route-tag addresses on the GUI.                 |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable route-tag addresses on the GUI.                |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-security-profile-group          | Enable/disable Security Profile   | option                  | \-                      | disable                 |
|                                     | Groups on the GUI.                |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable Security Profile Groups on the GUI.             |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable Security Profile Groups on the GUI.            |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-spamfilter                      | Enable/disable Antispam on the    | option                  | \-                      | disable                 |
|                                     | GUI.                              |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable Antispam on the GUI.                            |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable Antispam on the GUI.                           |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-sslvpn                          | Enable/disable SSL-VPN settings   | option                  | \-                      | disable                 |
|                                     | pages on the GUI.                 |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable SSL-VPN settings pages on the GUI.              |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable SSL-VPN settings pages on the GUI.             |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-sslvpn-personal-bookmarks       | Enable/disable SSL-VPN personal   | option                  | \-                      | disable                 |
|                                     | bookmark management on the GUI.   |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable SSL-VPN personal bookmark management on the     |                                        |
|                                     | |             | GUI.                                                   |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable SSL-VPN personal bookmark management on the    |                                        |
|                                     | |             | GUI.                                                   |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-sslvpn-realms                   | Enable/disable SSL-VPN realms on  | option                  | \-                      | disable                 |
|                                     | the GUI.                          |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable SSL-VPN realms on the GUI.                      |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable SSL-VPN realms on the GUI.                     |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-switch-controller \*            | Enable/disable the switch         | option                  | \-                      | enable                  |
|                                     | controller on the GUI.            |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable the switch controller on the GUI.               |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable the switch controller on the GUI.              |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-threat-weight                   | Enable/disable threat weight on   | option                  | \-                      | enable                  |
|                                     | the GUI.                          |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable threat weight on the GUI.                       |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable threat weight on the GUI.                      |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-traffic-shaping                 | Enable/disable traffic shaping on | option                  | \-                      | enable                  |
|                                     | the GUI.                          |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable traffic shaping on the GUI.                     |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable traffic shaping on the GUI.                    |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-videofilter                     | Enable/disable Video filtering on | option                  | \-                      | enable \*\*             |
|                                     | the GUI.                          |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable Video filtering on the GUI.                     |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable Video filtering on the GUI.                    |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-virtual-patch-profile           | Enable/disable Virtual Patching   | option                  | \-                      | disable                 |
|                                     | on the GUI.                       |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable Virtual Patching on the GUI.                    |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable Virtual Patching on the GUI.                   |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-voip-profile                    | Enable/disable VoIP profiles on   | option                  | \-                      | disable                 |
|                                     | the GUI.                          |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable VoIP profiles on the GUI.                       |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable VoIP profiles on the GUI.                      |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-vpn                             | Enable/disable IPsec VPN settings | option                  | \-                      | enable                  |
|                                     | pages on the GUI.                 |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable IPsec VPN settings pages on the GUI.            |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable IPsec VPN settings pages on the GUI.           |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-waf-profile                     | Enable/disable Web Application    | option                  | \-                      | disable                 |
|                                     | Firewall on the GUI.              |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable Web Application Firewall on the GUI.            |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable Web Application Firewall on the GUI.           |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-wan-load-balancing              | Enable/disable SD-WAN on the GUI. | option                  | \-                      | enable                  |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable SD-WAN on the GUI.                              |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable SD-WAN on the GUI.                             |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-wanopt-cache \*                 | Enable/disable WAN Optimization   | option                  | \-                      | disable                 |
|                                     | and Web Caching on the GUI.       |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable WAN Optimization and Web Caching on the GUI.    |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable WAN Optimization and Web Caching on the GUI.   |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-webfilter                       | Enable/disable Web filtering on   | option                  | \-                      | enable \*\*             |
|                                     | the GUI.                          |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable Web filtering on the GUI.                       |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable Web filtering on the GUI.                      |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-webfilter-advanced              | Enable/disable advanced web       | option                  | \-                      | disable                 |
|                                     | filtering on the GUI.             |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable advanced web filtering on the GUI.              |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable advanced web filtering on the GUI.             |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-wireless-controller             | Enable/disable the wireless       | option                  | \-                      | enable                  |
|                                     | controller on the GUI.            |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable the wireless controller on the GUI.             |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable the wireless controller on the GUI.            |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| gui-ztna                            | Enable/disable Zero Trust Network | option                  | \-                      | enable \*\*             |
|                                     | Access features on the GUI.       |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable Zero Trust Network Access features on the GUI.  |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable Zero Trust Network Access features on the GUI. |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| h323-direct-model                   | Enable/disable H323 direct model. | option                  | \-                      | disable                 |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *disable*   | Disable H323 direct model.                             |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *enable*    | Enable H323 direct model.                              |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| http-external-dest                  | Offload HTTP traffic to FortiWeb  | option                  | \-                      | fortiweb                |
|                                     | or FortiCache.                    |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +--------------+--------------------------------------------------------+                                       |
|                                     | | Option       | Description                                            |                                       |
|                                     | +==============+========================================================+                                       |
|                                     | | *fortiweb*   | Offload HTTP traffic to FortiWeb for Web Application   |                                       |
|                                     | |              | Firewall inspection.                                   |                                       |
|                                     | +--------------+--------------------------------------------------------+                                       |
|                                     | | *forticache* | Offload HTTP traffic to FortiCache for external web    |                                       |
|                                     | |              | caching and WAN optimization.                          |                                       |
|                                     | +--------------+--------------------------------------------------------+                                       |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| ike-dn-format                       | Configure IKE ASN.1 Distinguished | option                  | \-                      | with-space              |
|                                     | Name format conventions.          |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +--------------+--------------------------------------------------------+                                       |
|                                     | | Option       | Description                                            |                                       |
|                                     | +==============+========================================================+                                       |
|                                     | | *with-space* | Format IKE ASN.1 Distinguished Names with spaces       |                                       |
|                                     | |              | between attribute names and values.                    |                                       |
|                                     | +--------------+--------------------------------------------------------+                                       |
|                                     | | *no-space*   | Format IKE ASN.1 Distinguished Names without spaces    |                                       |
|                                     | |              | between attribute names and values.                    |                                       |
|                                     | +--------------+--------------------------------------------------------+                                       |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| ike-policy-route                    | Enable/disable IKE Policy Based   | option                  | \-                      | disable                 |
|                                     | Routing (PBR).                    |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable IKE Policy Based Routing (PBR).                 |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable IKE Policy Based Routing (PBR).                |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| ike-port                            | UDP port for IKE/IPsec traffic    | integer                 | Minimum value: 1024     | 500                     |
|                                     | (default 500).                    |                         | Maximum value: 65535    |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| ike-quick-crash-detect              | Enable/disable IKE quick crash    | option                  | \-                      | disable                 |
|                                     | detection (RFC 6290).             |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable IKE quick crash detection (RFC 6290).           |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable IKE quick crash detection (RFC 6290).          |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| ike-session-resume                  | Enable/disable IKEv2 session      | option                  | \-                      | disable                 |
|                                     | resumption (RFC 5723).            |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable IKEv2 session resumption (RFC 5723).            |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable IKEv2 session resumption (RFC 5723).           |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| ike-tcp-port                        | TCP port for IKE/IPsec traffic    | integer                 | Minimum value: 1        | 4500                    |
|                                     | (default 4500).                   |                         | Maximum value: 65535    |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| internet-service-app-ctrl-size      | Maximum number of tuple entries   | integer                 | Minimum value: 0        | 32768                   |
|                                     | (protocol, port, IP address,      |                         | Maximum value:          |                         |
|                                     | application ID) stored by the     |                         | 4294967295              |                         |
|                                     | FortiGate unit (0 - 4294967295,   |                         |                         |                         |
|                                     | default = 32768). A smaller value |                         |                         |                         |
|                                     | limits the FortiGate unit from    |                         |                         |                         |
|                                     | learning about internet           |                         |                         |                         |
|                                     | applications.                     |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| internet-service-database-cache     | Enable/disable Internet Service   | option                  | \-                      | disable                 |
|                                     | database caching.                 |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *disable*   | Disable Internet Service database caching.             |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *enable*    | Enable Internet Service database caching.              |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| ip                                  | IP address and netmask.           | ipv4-classnet-host      | Not Specified           | 0.0.0.0 0.0.0.0         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| ip6                                 | IPv6 address prefix for NAT mode. | ipv6-prefix             | Not Specified           | ::/0                    |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| lan-extension-controller-addr       | Controller IP address or FQDN to  | string                  | Maximum length: 255     |                         |
|                                     | connect.                          |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| link-down-access                    | Enable/disable link down access   | option                  | \-                      | enable                  |
|                                     | traffic.                          |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Allow link down access traffic.                        |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Block link down access traffic.                        |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| lldp-reception                      | Enable/disable Link Layer         | option                  | \-                      | global                  |
|                                     | Discovery Protocol (LLDP)         |                         |                         |                         |
|                                     | reception for this VDOM or apply  |                         |                         |                         |
|                                     | global settings to this VDOM.     |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable LLDP reception for this VDOM.                   |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable LLDP reception for this VDOM.                  |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *global*    | Use the global LLDP reception configuration for this   |                                        |
|                                     | |             | VDOM.                                                  |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| lldp-transmission                   | Enable/disable Link Layer         | option                  | \-                      | global                  |
|                                     | Discovery Protocol (LLDP)         |                         |                         |                         |
|                                     | transmission for this VDOM or     |                         |                         |                         |
|                                     | apply global settings to this     |                         |                         |                         |
|                                     | VDOM.                             |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable LLDP transmission for this VDOM.                |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable LLDP transmission for this VDOM.               |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *global*    | Use the global LLDP transmission configuration for     |                                        |
|                                     | |             | this VDOM.                                             |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| location-id                         | Local location ID in the form of  | ipv4-address            | Not Specified           | 0.0.0.0                 |
|                                     | an IPv4 address.                  |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| mac-ttl                             | Duration of MAC addresses in      | integer                 | Minimum value: 300      | 300                     |
|                                     | Transparent mode (300 - 8640000   |                         | Maximum value: 8640000  |                         |
|                                     | sec, default = 300).              |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| manageip                            | Transparent mode IPv4 management  | user                    | Not Specified           |                         |
|                                     | IP address and netmask.           |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| manageip6                           | Transparent mode IPv6 management  | ipv6-prefix             | Not Specified           | ::/0                    |
|                                     | IP address and netmask.           |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| multicast-forward                   | Enable/disable multicast          | option                  | \-                      | enable                  |
|                                     | forwarding.                       |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable multicast forwarding.                           |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable multicast forwarding.                          |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| multicast-skip-policy               | Enable/disable allowing multicast | option                  | \-                      | disable                 |
|                                     | traffic through the FortiGate     |                         |                         |                         |
|                                     | without a policy check.           |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Allowing multicast traffic through the FortiGate       |                                        |
|                                     | |             | without creating a multicast firewall policy.          |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Require a multicast policy to allow multicast traffic  |                                        |
|                                     | |             | to pass through the FortiGate.                         |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| multicast-ttl-notchange             | Enable/disable preventing the     | option                  | \-                      | disable                 |
|                                     | FortiGate from changing the TTL   |                         |                         |                         |
|                                     | for forwarded multicast packets.  |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | The multicast TTL is not changed.                      |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | The multicast TTL may be changed.                      |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| nat46-force-ipv4-packet-forwarding  | Enable/disable mandatory IPv4     | option                  | \-                      | disable                 |
|                                     | packet forwarding in NAT46.       |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable mandatory IPv4 packet forwarding when IPv4 DF   |                                        |
|                                     | |             | is set to 1.                                           |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable mandatory IPv4 packet forwarding when IPv4 DF  |                                        |
|                                     | |             | is set to 1.                                           |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| nat46-generate-ipv6-fragment-header | Enable/disable NAT46 IPv6         | option                  | \-                      | disable                 |
|                                     | fragment header generation.       |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable NAT46 IPv6 fragment header generation.          |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable NAT46 IPv6 fragment header generation.         |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| nat64-force-ipv6-packet-forwarding  | Enable/disable mandatory IPv6     | option                  | \-                      | enable                  |
|                                     | packet forwarding in NAT64.       |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable mandatory IPv6 packet forwarding                |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable mandatory IPv6 packet forwarding               |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| ngfw-mode                           | Next Generation Firewall (NGFW)   | option                  | \-                      | profile-based           |
|                                     | mode.                             |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-----------------+--------------------------------------------------------+                                    |
|                                     | | Option          | Description                                            |                                    |
|                                     | +=================+========================================================+                                    |
|                                     | | *profile-based* | Application and web-filtering are configured using     |                                    |
|                                     | |                 | profiles applied to policy entries.                    |                                    |
|                                     | +-----------------+--------------------------------------------------------+                                    |
|                                     | | *policy-based*  | Application and web-filtering are configured as policy |                                    |
|                                     | |                 | match conditions.                                      |                                    |
|                                     | +-----------------+--------------------------------------------------------+                                    |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| opmode                              | Firewall operation mode (NAT or   | option                  | \-                      | nat                     |
|                                     | Transparent).                     |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +---------------+--------------------------------------------------------+                                      |
|                                     | | Option        | Description                                            |                                      |
|                                     | +===============+========================================================+                                      |
|                                     | | *nat*         | Change to NAT mode.                                    |                                      |
|                                     | +---------------+--------------------------------------------------------+                                      |
|                                     | | *transparent* | Change to transparent mode.                            |                                      |
|                                     | +---------------+--------------------------------------------------------+                                      |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| policy-offload-level \*             | Configure firewall policy offload | option                  | \-                      | disable                 |
|                                     | level.                            |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +---------------+--------------------------------------------------------+                                      |
|                                     | | Option        | Description                                            |                                      |
|                                     | +===============+========================================================+                                      |
|                                     | | *disable*     | Disable policy offloading.                             |                                      |
|                                     | +---------------+--------------------------------------------------------+                                      |
|                                     | | *dos-offload* | Only enable DoS policy offloading.                     |                                      |
|                                     | +---------------+--------------------------------------------------------+                                      |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| prp-trailer-action                  | Enable/disable action to take on  | option                  | \-                      | disable                 |
|                                     | PRP trailer.                      |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Try to keep PRP trailer.                               |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Trim PRP trailer.                                      |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| sccp-port                           | TCP port the SCCP proxy monitors  | integer                 | Minimum value: 0        | 2000                    |
|                                     | for SCCP traffic (0 - 65535,      |                         | Maximum value: 65535    |                         |
|                                     | default = 2000).                  |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| sctp-session-without-init           | Enable/disable SCTP session       | option                  | \-                      | disable                 |
|                                     | creation without SCTP INIT.       |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable SCTP session creation without SCTP INIT.        |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable SCTP session creation without SCTP INIT.       |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| ses-denied-multicast-traffic        | Enable/disable including denied   | option                  | \-                      | disable                 |
|                                     | multicast session in the session  |                         |                         |                         |
|                                     | table.                            |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Include denied multicast sessions in the session       |                                        |
|                                     | |             | table.                                                 |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Do not add denied multicast sessions to the session    |                                        |
|                                     | |             | table.                                                 |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| ses-denied-traffic                  | Enable/disable including denied   | option                  | \-                      | disable                 |
|                                     | session in the session table.     |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Include denied sessions in the session table.          |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Do not add denied sessions to the session table.       |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| sip-expectation                     | Enable/disable the SIP kernel     | option                  | \-                      | disable                 |
|                                     | session helper to create an       |                         |                         |                         |
|                                     | expectation for port 5060.        |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Allow SIP session helper to create an expectation for  |                                        |
|                                     | |             | port 5060.                                             |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Prevent SIP session helper from creating an            |                                        |
|                                     | |             | expectation for port 5060.                             |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| sip-nat-trace                       | Enable/disable recording the      | option                  | \-                      | enable                  |
|                                     | original SIP source IP address    |                         |                         |                         |
|                                     | when NAT is used.                 |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Record the original SIP source IP address when NAT is  |                                        |
|                                     | |             | used.                                                  |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Do not record the original SIP source IP address when  |                                        |
|                                     | |             | NAT is used.                                           |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| sip-ssl-port \*                     | TCP port the SIP proxy monitors   | integer                 | Minimum value: 0        | 5061                    |
|                                     | for SIP SSL/TLS traffic (0 -      |                         | Maximum value: 65535    |                         |
|                                     | 65535, default = 5061).           |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| sip-tcp-port                        | TCP port the SIP proxy monitors   | integer                 | Minimum value: 1        | 5060                    |
|                                     | for SIP traffic (0 - 65535,       |                         | Maximum value: 65535    |                         |
|                                     | default = 5060).                  |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| sip-udp-port                        | UDP port the SIP proxy monitors   | integer                 | Minimum value: 1        | 5060                    |
|                                     | for SIP traffic (0 - 65535,       |                         | Maximum value: 65535    |                         |
|                                     | default = 5060).                  |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| snat-hairpin-traffic                | Enable/disable source NAT (SNAT)  | option                  | \-                      | enable                  |
|                                     | for hairpin traffic.              |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable SNAT for hairpin traffic.                       |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable SNAT for hairpin traffic.                      |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| status                              | Enable/disable this VDOM.         | option                  | \-                      | enable                  |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable this VDOM.                                      |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable this VDOM.                                     |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| strict-src-check                    | Enable/disable strict source      | option                  | \-                      | disable                 |
|                                     | verification.                     |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable strict source verification.                     |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable strict source verification.                    |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| tcp-session-without-syn             | Enable/disable allowing TCP       | option                  | \-                      | disable                 |
|                                     | session without SYN flags.        |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Allow TCP session without SYN flags.                   |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Do not allow TCP session without SYN flags.            |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| utf8-spam-tagging                   | Enable/disable converting         | option                  | \-                      | enable                  |
|                                     | antispam tags to UTF-8 for better |                         |                         |                         |
|                                     | non-ASCII character support.      |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Convert antispam tags to UTF-8.                        |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Do not convert antispam tags.                          |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| v4-ecmp-mode                        | IPv4 Equal-cost multi-path (ECMP) | option                  | \-                      | source-ip-based         |
|                                     | routing and load balancing mode.  |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +------------------------+--------------------------------------------------------+                             |
|                                     | | Option                 | Description                                            |                             |
|                                     | +========================+========================================================+                             |
|                                     | | *source-ip-based*      | Select next hop based on source IP.                    |                             |
|                                     | +------------------------+--------------------------------------------------------+                             |
|                                     | | *weight-based*         | Select next hop based on weight.                       |                             |
|                                     | +------------------------+--------------------------------------------------------+                             |
|                                     | | *usage-based*          | Select next hop based on usage.                        |                             |
|                                     | +------------------------+--------------------------------------------------------+                             |
|                                     | | *source-dest-ip-based* | Select next hop based on both source and destination   |                             |
|                                     | |                        | IPs.                                                   |                             |
|                                     | +------------------------+--------------------------------------------------------+                             |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| vdom-type                           | Vdom type (traffic, lan-extension | option                  | \-                      | traffic                 |
|                                     | or admin).                        |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-----------------+--------------------------------------------------------+                                    |
|                                     | | Option          | Description                                            |                                    |
|                                     | +=================+========================================================+                                    |
|                                     | | *traffic*       | Change to traffic VDOM                                 |                                    |
|                                     | +-----------------+--------------------------------------------------------+                                    |
|                                     | | *lan-extension* | Change to lan-extension VDOM                           |                                    |
|                                     | +-----------------+--------------------------------------------------------+                                    |
|                                     | | *admin*         | Change to admin VDOM                                   |                                    |
|                                     | +-----------------+--------------------------------------------------------+                                    |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| vpn-stats-log                       | Enable/disable periodic VPN log   | option                  | \-                      | ipsec pptp l2tp ssl     |
|                                     | statistics for one or more types  |                         |                         |                         |
|                                     | of VPN. Separate names with a     |                         |                         |                         |
|                                     | space.                            |                         |                         |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *ipsec*     | IPsec.                                                 |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *pptp*      | PPTP.                                                  |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *l2tp*      | L2TP.                                                  |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *ssl*       | SSL.                                                   |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| vpn-stats-period                    | Period to send VPN log statistics | integer                 | Minimum value: 0        | 600                     |
|                                     | (0 or 60 - 86400 sec).            |                         | Maximum value:          |                         |
|                                     |                                   |                         | 4294967295              |                         |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| wccp-cache-engine                   | Enable/disable WCCP cache engine. | option                  | \-                      | disable                 |
+-------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | Option      | Description                                            |                                        |
|                                     | +=============+========================================================+                                        |
|                                     | | *enable*    | Enable WCCP cache engine.                              |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
|                                     | | *disable*   | Disable WCCP cache engine.                             |                                        |
|                                     | +-------------+--------------------------------------------------------+                                        |
+-------------------------------------+-----------------------------------------------------------------------------------------------------------------+

