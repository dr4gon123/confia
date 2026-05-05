# config wireless-controller vap

Configure Virtual Access Points (VAPs).

## Syntax

```
config wireless-controller vap
    Description: Configure Virtual Access Points (VAPs).
    edit <name>
        set access-control-list {string}
        set additional-akms {option1}, {option2}, ...
        set address-group {string}
        set address-group-policy [disable|allow|...]
        set antivirus-profile {string}
        set application-detection-engine [enable|disable]
        set application-dscp-marking [enable|disable]
        set application-list {string}
        set application-report-intv {integer}
        set atf-weight {integer}
        set auth [radius|usergroup]
        set auth-cert {string}
        set auth-portal-addr {string}
        set beacon-advertising {option1}, {option2}, ...
        set broadcast-ssid [enable|disable]
        set broadcast-suppression {option1}, {option2}, ...
        set bss-color-partial [enable|disable]
        set bstm-disassociation-imminent [enable|disable]
        set bstm-load-balancing-disassoc-timer {integer}
        set bstm-rssi-disassoc-timer {integer}
        set captive-portal-ac-name {string}
        set captive-portal-auth-timeout {integer}
        set captive-portal-fw-accounting [enable|disable]
        set dhcp-address-enforcement [enable|disable]
        set dhcp-lease-time {integer}
        set dhcp-option43-insertion [enable|disable]
        set dhcp-option82-circuit-id-insertion [style-1|style-2|...]
        set dhcp-option82-insertion [enable|disable]
        set dhcp-option82-remote-id-insertion [style-1|disable]
        set dynamic-vlan [enable|disable]
        set eap-reauth [enable|disable]
        set eap-reauth-intv {integer}
        set eapol-key-retries [disable|enable]
        set encrypt [TKIP|AES|...]
        set external-fast-roaming [enable|disable]
        set external-logout {string}
        set external-web {var-string}
        set external-web-format [auto-detect|no-query-string|...]
        set fast-bss-transition [disable|enable]
        set fast-roaming [enable|disable]
        set ft-mobility-domain {integer}
        set ft-over-ds [disable|enable]
        set ft-r0-key-lifetime {integer}
        set gas-comeback-delay {integer}
        set gas-fragmentation-limit {integer}
        set gtk-rekey [enable|disable]
        set gtk-rekey-intv {integer}
        set high-efficiency [enable|disable]
        set hotspot20-profile {string}
        set igmp-snooping [enable|disable]
        set intra-vap-privacy [enable|disable]
        set ip {ipv4-classnet-host}
        set ips-sensor {string}
        set ipv6-rules {option1}, {option2}, ...
        set key {password}
        set keyindex {integer}
        set l3-roaming [enable|disable]
        set l3-roaming-mode [direct|indirect]
        set ldpc [disable|rx|...]
        set local-authentication [enable|disable]
        set local-bridging [enable|disable]
        set local-lan [allow|deny]
        set local-standalone [enable|disable]
        set local-standalone-dns [enable|disable]
        set local-standalone-dns-ip {ipv4-address}
        set local-standalone-nat [enable|disable]
        set mac-auth-bypass [enable|disable]
        set mac-called-station-delimiter [hyphen|single-hyphen|...]
        set mac-calling-station-delimiter [hyphen|single-hyphen|...]
        set mac-case [uppercase|lowercase]
        set mac-password-delimiter [hyphen|single-hyphen|...]
        set mac-username-delimiter [hyphen|single-hyphen|...]
        set max-clients {integer}
        set max-clients-ap {integer}
        set mbo [disable|enable]
        set mbo-cell-data-conn-pref [excluded|prefer-not|...]
        set me-disable-thresh {integer}
        set mesh-backhaul [enable|disable]
        set mpsk-profile {string}
        set mu-mimo [enable|disable]
        set multicast-enhance [enable|disable]
        set multicast-rate [0|6000|...]
        set nac [enable|disable]
        set nac-profile {string}
        set neighbor-report-dual-band [disable|enable]
        set okc [disable|enable]
        set osen [enable|disable]
        set owe-groups {option1}, {option2}, ...
        set owe-transition [disable|enable]
        set owe-transition-ssid {string}
        set passphrase {password}
        set pmf [disable|enable|...]
        set pmf-assoc-comeback-timeout {integer}
        set pmf-sa-query-retry-timeout {integer}
        set port-macauth [disable|radius|...]
        set port-macauth-reauth-timeout {integer}
        set port-macauth-timeout {integer}
        set portal-message-override-group {string}
        config portal-message-overrides
            Description: Individual message overrides.
            set auth-disclaimer-page {string}
            set auth-reject-page {string}
            set auth-login-page {string}
            set auth-login-failed-page {string}
        end
        set portal-type [auth|auth+disclaimer|...]
        set primary-wag-profile {string}
        set probe-resp-suppression [enable|disable]
        set probe-resp-threshold {string}
        set ptk-rekey [enable|disable]
        set ptk-rekey-intv {integer}
        set qos-profile {string}
        set quarantine [enable|disable]
        set radio-2g-threshold {string}
        set radio-5g-threshold {string}
        set radio-sensitivity [enable|disable]
        set radius-mac-auth [enable|disable]
        set radius-mac-auth-block-interval {integer}
        set radius-mac-auth-server {string}
        set radius-mac-auth-usergroups <name1>, <name2>, ...
        set radius-mac-mpsk-auth [enable|disable]
        set radius-mac-mpsk-timeout {integer}
        set radius-server {string}
        set rates-11a {option1}, {option2}, ...
        set rates-11ac-mcs-map {string}
        set rates-11ax-mcs-map {string}
        set rates-11bg {option1}, {option2}, ...
        set rates-11n-ss12 {option1}, {option2}, ...
        set rates-11n-ss34 {option1}, {option2}, ...
        set sae-groups {option1}, {option2}, ...
        set sae-h2e-only [enable|disable]
        set sae-password {password}
        set sae-pk [enable|disable]
        set sae-private-key {string}
        set scan-botnet-connections [disable|monitor|...]
        set schedule <name1>, <name2>, ...
        set secondary-wag-profile {string}
        set security [open|captive-portal|...]
        set security-exempt-list {string}
        set security-redirect-url {var-string}
        set selected-usergroups <name1>, <name2>, ...
        set split-tunneling [enable|disable]
        set ssid {string}
        set sticky-client-remove [enable|disable]
        set sticky-client-threshold-2g {string}
        set sticky-client-threshold-5g {string}
        set sticky-client-threshold-6g {string}
        set target-wake-time [enable|disable]
        set tkip-counter-measure [enable|disable]
        set tunnel-echo-interval {integer}
        set tunnel-fallback-interval {integer}
        set usergroup <name1>, <name2>, ...
        set utm-log [enable|disable]
        set utm-profile {string}
        set utm-status [enable|disable]
        set vlan-auto [enable|disable]
        config vlan-name
            Description: Table for mapping VLAN name to VLAN ID.
            edit <name>
                set vlan-id {integer}
            next
        end
        config vlan-pool
            Description: VLAN pool.
            edit <id>
                set wtp-group {string}
            next
        end
        set vlan-pooling [wtp-group|round-robin|...]
        set vlanid {integer}
        set voice-enterprise [disable|enable]
        set webfilter-profile {string}
    next
end
```

## Parameters

+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| Parameter                          | Description                       | Type                      | Size                      | Default                   |
+====================================+===================================+===========================+===========================+===========================+
| access-control-list                | Profile name for                  | string                    | Maximum length: 35        |                           |
|                                    | access-control-list.              |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| additional-akms                    | Additional AKMs.                  | option                    | \-                        |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *akm6*      | Use AKM suite employing PSK_SHA256.                    |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| address-group                      | Firewall Address Group Name.      | string                    | Maximum length: 79        |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| address-group-policy               | Configure MAC address filtering   | option                    | \-                        | disable                   |
|                                    | policy for MAC addresses that are |                           |                           |                           |
|                                    | in the address-group.             |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *disable*   | Disable MAC address filtering policy for MAC addresses |                                              |
|                                    | |             | that are in the address-group                          |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *allow*     | Allow clients with MAC addresses that are in the       |                                              |
|                                    | |             | address-group.                                         |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *deny*      | Block clients with MAC addresses that are in the       |                                              |
|                                    | |             | address-group.                                         |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| antivirus-profile                  | AntiVirus profile name.           | string                    | Maximum length: 35        |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| application-detection-engine       | Enable/disable application        | option                    | \-                        | disable                   |
|                                    | detection engine.                 |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *enable*    | Enable application detection engine.                   |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *disable*   | Disable application detection engine.                  |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| application-dscp-marking           | Enable/disable application        | option                    | \-                        | disable                   |
|                                    | attribute based DSCP marking.     |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *enable*    | Enable application based DSCP marking.                 |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *disable*   | Disable application based DSCP marking.                |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| application-list                   | Application control list name.    | string                    | Maximum length: 35        |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| application-report-intv            | Application report interval.      | integer                   | Minimum value: 30 Maximum | 120                       |
|                                    |                                   |                           | value: 864000             |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| atf-weight                         | Airtime weight in percentage.     | integer                   | Minimum value: 0 Maximum  | 20                        |
|                                    |                                   |                           | value: 100                |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| auth                               | Authentication protocol.          | option                    | \-                        |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *radius*    | Use a RADIUS server to authenticate clients.           |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *usergroup* | Use a firewall usergroup to authenticate clients.      |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| auth-cert                          | HTTPS server certificate.         | string                    | Maximum length: 35        |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| auth-portal-addr                   | Address of captive portal.        | string                    | Maximum length: 63        |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| beacon-advertising                 | Fortinet beacon advertising IE    | option                    | \-                        |                           |
|                                    | data .                            |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-----------------+--------------------------------------------------------+                                          |
|                                    | | Option          | Description                                            |                                          |
|                                    | +=================+========================================================+                                          |
|                                    | | *name*          | AP name.                                               |                                          |
|                                    | +-----------------+--------------------------------------------------------+                                          |
|                                    | | *model*         | AP model abbreviation.                                 |                                          |
|                                    | +-----------------+--------------------------------------------------------+                                          |
|                                    | | *serial-number* | AP serial number.                                      |                                          |
|                                    | +-----------------+--------------------------------------------------------+                                          |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| broadcast-ssid                     | Enable/disable broadcasting the   | option                    | \-                        | enable                    |
|                                    | SSID.                             |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *enable*    | Enable broadcasting the SSID.                          |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *disable*   | Disable broadcasting the SSID.                         |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| broadcast-suppression              | Optional suppression of broadcast | option                    | \-                        | dhcp-up dhcp-ucast        |
|                                    | messages. For example, you can    |                           |                           | arp-known                 |
|                                    | keep DHCP messages, ARP           |                           |                           |                           |
|                                    | broadcasts, and so on off of the  |                           |                           |                           |
|                                    | wireless network.                 |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------------+--------------------------------------------------------+                                        |
|                                    | | Option            | Description                                            |                                        |
|                                    | +===================+========================================================+                                        |
|                                    | | *dhcp-up*         | Suppress broadcast uplink DHCP messages.               |                                        |
|                                    | +-------------------+--------------------------------------------------------+                                        |
|                                    | | *dhcp-down*       | Suppress broadcast downlink DHCP messages.             |                                        |
|                                    | +-------------------+--------------------------------------------------------+                                        |
|                                    | | *dhcp-starvation* | Suppress broadcast DHCP starvation req messages.       |                                        |
|                                    | +-------------------+--------------------------------------------------------+                                        |
|                                    | | *dhcp-ucast*      | Convert downlink broadcast DHCP messages to unicast    |                                        |
|                                    | |                   | messages.                                              |                                        |
|                                    | +-------------------+--------------------------------------------------------+                                        |
|                                    | | *arp-known*       | Suppress broadcast ARP for known wireless clients.     |                                        |
|                                    | +-------------------+--------------------------------------------------------+                                        |
|                                    | | *arp-unknown*     | Suppress broadcast ARP for unknown wireless clients.   |                                        |
|                                    | +-------------------+--------------------------------------------------------+                                        |
|                                    | | *arp-reply*       | Suppress broadcast ARP reply from wireless clients.    |                                        |
|                                    | +-------------------+--------------------------------------------------------+                                        |
|                                    | | *arp-poison*      | Suppress ARP poison messages from wireless clients.    |                                        |
|                                    | +-------------------+--------------------------------------------------------+                                        |
|                                    | | *arp-proxy*       | Reply ARP requests for wireless clients as a proxy.    |                                        |
|                                    | +-------------------+--------------------------------------------------------+                                        |
|                                    | | *netbios-ns*      | Suppress NetBIOS name services packets with UDP port   |                                        |
|                                    | |                   | 137.                                                   |                                        |
|                                    | +-------------------+--------------------------------------------------------+                                        |
|                                    | | *netbios-ds*      | Suppress NetBIOS datagram services packets with UDP    |                                        |
|                                    | |                   | port 138.                                              |                                        |
|                                    | +-------------------+--------------------------------------------------------+                                        |
|                                    | | *ipv6*            | Suppress IPv6 packets.                                 |                                        |
|                                    | +-------------------+--------------------------------------------------------+                                        |
|                                    | | *all-other-mc*    | Suppress all other multicast messages.                 |                                        |
|                                    | +-------------------+--------------------------------------------------------+                                        |
|                                    | | *all-other-bc*    | Suppress all other broadcast messages.                 |                                        |
|                                    | +-------------------+--------------------------------------------------------+                                        |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| bss-color-partial                  | Enable/disable 802.11ax partial   | option                    | \-                        | enable                    |
|                                    | BSS color.                        |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *enable*    | Enable 802.11ax partial BSS color.                     |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *disable*   | Disable 802.11ax partial BSS color.                    |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| bstm-disassociation-imminent       | Enable/disable forcing of         | option                    | \-                        | enable                    |
|                                    | disassociation after the BSTM     |                           |                           |                           |
|                                    | request timer has been reached.   |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *enable*    | Enable BSTM disassociation imminent.                   |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *disable*   | Disable BSTM disassociation imminent.                  |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| bstm-load-balancing-disassoc-timer | Time interval for client to       | integer                   | Minimum value: 1 Maximum  | 10                        |
|                                    | voluntarily leave AP before       |                           | value: 30                 |                           |
|                                    | forcing a disassociation due to   |                           |                           |                           |
|                                    | AP load-balancing.                |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| bstm-rssi-disassoc-timer           | Time interval for client to       | integer                   | Minimum value: 1 Maximum  | 200                       |
|                                    | voluntarily leave AP before       |                           | value: 2000               |                           |
|                                    | forcing a disassociation due to   |                           |                           |                           |
|                                    | low RSSI.                         |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| captive-portal-ac-name             | Local-bridging captive portal     | string                    | Maximum length: 35        |                           |
|                                    | ac-name.                          |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| captive-portal-auth-timeout        | Hard timeout - AP will always     | integer                   | Minimum value: 0 Maximum  | 0                         |
|                                    | clear the session after timeout   |                           | value: 864000             |                           |
|                                    | regardless of traffic.            |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| captive-portal-fw-accounting       | Enable/disable RADIUS accounting  | option                    | \-                        | disable                   |
|                                    | for captive portal firewall       |                           |                           |                           |
|                                    | authentication session.           |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *enable*    | Enable RADIUS accounting for captive portal firewall   |                                              |
|                                    | |             | authentication session.                                |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *disable*   | Disable RADIUS accounting for captive portal firewall  |                                              |
|                                    | |             | authentication session.                                |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| dhcp-address-enforcement           | Enable/disable DHCP address       | option                    | \-                        | disable                   |
|                                    | enforcement.                      |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *enable*    | Enable DHCP enforcement, data from clients that have   |                                              |
|                                    | |             | not completed the DHCP process will be blocked.        |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *disable*   | Disable DHCP enforcement, clients can access the       |                                              |
|                                    | |             | network without DHCP process.                          |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| dhcp-lease-time                    | DHCP lease time in seconds for    | integer                   | Minimum value: 300        | 2400                      |
|                                    | NAT IP address.                   |                           | Maximum value: 8640000    |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| dhcp-option43-insertion            | Enable/disable insertion of DHCP  | option                    | \-                        | enable                    |
|                                    | option 43.                        |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *enable*    | Enable insertion of DHCP option 43.                    |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *disable*   | Disable insertion of DHCP option 43.                   |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| dhcp-option82-circuit-id-insertion | Enable/disable DHCP option 82     | option                    | \-                        | disable                   |
|                                    | circuit-id insert.                |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+------------------------------------------------------------------------------------+                  |
|                                    | | Option      | Description                                                                        |                  |
|                                    | +=============+====================================================================================+                  |
|                                    | | *style-1*   | ASCII string composed of AP-MAC;SSID;SSID-TYPE. For example,                       |                  |
|                                    | |             | \"xx:xx:xx:xx:xx:xx;wifi;s\".                                                      |                  |
|                                    | +-------------+------------------------------------------------------------------------------------+                  |
|                                    | | *style-2*   | ASCII string composed of AP-MAC. For example, \"xx:xx:xx:xx:xx:xx\".               |                  |
|                                    | +-------------+------------------------------------------------------------------------------------+                  |
|                                    | | *style-3*   | ASCII string composed of                                                           |                  |
|                                    | |             | NETWORK-TYPE:WTPPROF-NAME:VLAN:SSID:AP-MODEL:AP-HOSTNAME:AP-MAC. For               |                  |
|                                    | |             | example,\"WLAN:FAPS221E-default:100:wifi:PS221E:FortiAP-S221E:xx:xx:xx:xx:xx:xx\". |                  |
|                                    | +-------------+------------------------------------------------------------------------------------+                  |
|                                    | | *disable*   | Disable DHCP option 82 circuit-id insert.                                          |                  |
|                                    | +-------------+------------------------------------------------------------------------------------+                  |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| dhcp-option82-insertion            | Enable/disable DHCP option 82     | option                    | \-                        | disable                   |
|                                    | insert.                           |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *enable*    | Enable DHCP option 82 insert.                          |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *disable*   | Disable DHCP option 82 insert.                         |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| dhcp-option82-remote-id-insertion  | Enable/disable DHCP option 82     | option                    | \-                        | disable                   |
|                                    | remote-id insert.                 |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *style-1*   | ASCII string in the format \"xx:xx:xx:xx:xx:xx\"       |                                              |
|                                    | |             | containing MAC address of client device.               |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *disable*   | Disable DHCP option 82 remote-id insert.               |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| dynamic-vlan                       | Enable/disable dynamic VLAN       | option                    | \-                        | disable                   |
|                                    | assignment.                       |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *enable*    | Enable dynamic VLAN assignment.                        |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *disable*   | Disable dynamic VLAN assignment.                       |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| eap-reauth                         | Enable/disable EAP                | option                    | \-                        | disable                   |
|                                    | re-authentication for             |                           |                           |                           |
|                                    | WPA-Enterprise security.          |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *enable*    | Enable EAP re-authentication for WPA-Enterprise        |                                              |
|                                    | |             | security.                                              |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *disable*   | Disable EAP re-authentication for WPA-Enterprise       |                                              |
|                                    | |             | security.                                              |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| eap-reauth-intv                    | EAP re-authentication interval.   | integer                   | Minimum value: 1800       | 86400                     |
|                                    |                                   |                           | Maximum value: 864000     |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| eapol-key-retries                  | Enable/disable retransmission of  | option                    | \-                        | enable                    |
|                                    | EAPOL-Key frames.                 |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *disable*   | Disable retransmission of EAPOL-Key frames (message    |                                              |
|                                    | |             | 3/4 and group message 1/2).                            |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *enable*    | Enable retransmission of EAPOL-Key frames (message 3/4 |                                              |
|                                    | |             | and group message 1/2).                                |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| encrypt                            | Encryption protocol to use (only  | option                    | \-                        | AES                       |
|                                    | available when security is set to |                           |                           |                           |
|                                    | a WPA type).                      |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *TKIP*      | Use TKIP encryption.                                   |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *AES*       | Use AES encryption.                                    |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *TKIP-AES*  | Use TKIP and AES encryption.                           |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| external-fast-roaming              | Enable/disable fast roaming or    | option                    | \-                        | disable                   |
|                                    | pre-authentication with external  |                           |                           |                           |
|                                    | APs not managed by the FortiGate. |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *enable*    | Enable fast roaming or pre-authentication with         |                                              |
|                                    | |             | external APs.                                          |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *disable*   | Disable fast roaming or pre-authentication with        |                                              |
|                                    | |             | external APs.                                          |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| external-logout                    | URL of external authentication    | string                    | Maximum length: 127       |                           |
|                                    | logout server.                    |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| external-web                       | URL of external authentication    | var-string                | Maximum length: 1023      |                           |
|                                    | web server.                       |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| external-web-format                | URL query parameter detection.    | option                    | \-                        | auto-detect               |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +------------------------+--------------------------------------------------------+                                   |
|                                    | | Option                 | Description                                            |                                   |
|                                    | +========================+========================================================+                                   |
|                                    | | *auto-detect*          | Automatically detect if \"external-web\" URL has any   |                                   |
|                                    | |                        | query parameter.                                       |                                   |
|                                    | +------------------------+--------------------------------------------------------+                                   |
|                                    | | *no-query-string*      | \"external-web\" URL does not have any query           |                                   |
|                                    | |                        | parameter.                                             |                                   |
|                                    | +------------------------+--------------------------------------------------------+                                   |
|                                    | | *partial-query-string* | \"external-web\" URL has some query parameters.        |                                   |
|                                    | +------------------------+--------------------------------------------------------+                                   |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| fast-bss-transition                | Enable/disable 802.11r Fast BSS   | option                    | \-                        | disable                   |
|                                    | Transition.                       |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *disable*   | Disable 802.11r Fast BSS Transition (FT).              |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *enable*    | Enable 802.11r Fast BSS Transition (FT).               |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| fast-roaming                       | Enable/disable fast-roaming, or   | option                    | \-                        | enable                    |
|                                    | pre-authentication, where         |                           |                           |                           |
|                                    | supported by clients.             |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *enable*    | Enable fast-roaming, or pre-authentication.            |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *disable*   | Disable fast-roaming, or pre-authentication.           |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| ft-mobility-domain                 | Mobility domain identifier in FT. | integer                   | Minimum value: 1 Maximum  | 1000                      |
|                                    |                                   |                           | value: 65535              |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| ft-over-ds                         | Enable/disable FT over the        | option                    | \-                        | disable                   |
|                                    | Distribution System (DS).         |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *disable*   | Disable FT over the Distribution System (DS).          |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *enable*    | Enable FT over the Distribution System (DS).           |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| ft-r0-key-lifetime                 | Lifetime of the PMK-R0 key in FT, | integer                   | Minimum value: 1 Maximum  | 480                       |
|                                    | 1-65535 minutes.                  |                           | value: 65535              |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| gas-comeback-delay                 | GAS comeback delay.               | integer                   | Minimum value: 100        | 500                       |
|                                    |                                   |                           | Maximum value: 10000      |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| gas-fragmentation-limit            | GAS fragmentation limit.          | integer                   | Minimum value: 512        | 1024                      |
|                                    |                                   |                           | Maximum value: 4096       |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| gtk-rekey                          | Enable/disable GTK rekey for WPA  | option                    | \-                        | disable                   |
|                                    | security.                         |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *enable*    | Enable GTK rekey for WPA security.                     |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *disable*   | Disable GTK rekey for WPA security.                    |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| gtk-rekey-intv                     | GTK rekey interval.               | integer                   | Minimum value: 1800       | 86400                     |
|                                    |                                   |                           | Maximum value: 864000     |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| high-efficiency                    | Enable/disable 802.11ax high      | option                    | \-                        | enable                    |
|                                    | efficiency.                       |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *enable*    | Enable 802.11ax high efficiency.                       |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *disable*   | Disable 802.11ax high efficiency.                      |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| hotspot20-profile                  | Hotspot 2.0 profile name.         | string                    | Maximum length: 35        |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| igmp-snooping                      | Enable/disable IGMP snooping.     | option                    | \-                        | disable                   |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *enable*    | Enable IGMP snooping.                                  |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *disable*   | Disable IGMP snooping.                                 |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| intra-vap-privacy                  | Enable/disable blocking           | option                    | \-                        | disable                   |
|                                    | communication between clients on  |                           |                           |                           |
|                                    | the same SSID.                    |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *enable*    | Enable intra-SSID privacy.                             |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *disable*   | Disable intra-SSID privacy.                            |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| ip                                 | IP address and subnet mask for    | ipv4-classnet-host        | Not Specified             | 0.0.0.0 0.0.0.0           |
|                                    | the local standalone NAT subnet.  |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| ips-sensor                         | IPS sensor name.                  | string                    | Maximum length: 35        |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| ipv6-rules                         | Optional rules of IPv6 packets.   | option                    | \-                        | drop-icmp6ra drop-icmp6rs |
|                                    | For example, you can keep RA, RS  |                           |                           | drop-llmnr6               |
|                                    | and so on off of the wireless     |                           |                           | drop-icmp6mld2            |
|                                    | network.                          |                           |                           | drop-dhcp6s drop-dhcp6c   |
|                                    |                                   |                           |                           | ndp-proxy drop-ns-dad     |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +------------------+--------------------------------------------------------+                                         |
|                                    | | Option           | Description                                            |                                         |
|                                    | +==================+========================================================+                                         |
|                                    | | *drop-icmp6ra*   | Drop ICMP6 Router Advertisement (RA) packets that      |                                         |
|                                    | |                  | originate from wireless clients.                       |                                         |
|                                    | +------------------+--------------------------------------------------------+                                         |
|                                    | | *drop-icmp6rs*   | Drop ICMP6 Router Solicitation (RS) packets to be sent |                                         |
|                                    | |                  | to wireless clients.                                   |                                         |
|                                    | +------------------+--------------------------------------------------------+                                         |
|                                    | | *drop-llmnr6*    | Drop Link-Local Multicast Name Resolution (LLMNR)      |                                         |
|                                    | |                  | packets                                                |                                         |
|                                    | +------------------+--------------------------------------------------------+                                         |
|                                    | | *drop-icmp6mld2* | Drop ICMP6 Multicast Listener Report V2 (MLD2) packets |                                         |
|                                    | +------------------+--------------------------------------------------------+                                         |
|                                    | | *drop-dhcp6s*    | Drop DHCP6 server generated packets that originate     |                                         |
|                                    | |                  | from wireless clients.                                 |                                         |
|                                    | +------------------+--------------------------------------------------------+                                         |
|                                    | | *drop-dhcp6c*    | Drop DHCP6 client generated packets to be sent to      |                                         |
|                                    | |                  | wireless clients.                                      |                                         |
|                                    | +------------------+--------------------------------------------------------+                                         |
|                                    | | *ndp-proxy*      | Enable IPv6 ndp proxy - send back na on behalf of the  |                                         |
|                                    | |                  | client and drop the ns.                                |                                         |
|                                    | +------------------+--------------------------------------------------------+                                         |
|                                    | | *drop-ns-dad*    | Drop ICMP6 NS-DAD when target address is not found in  |                                         |
|                                    | |                  | ndp proxy cache.                                       |                                         |
|                                    | +------------------+--------------------------------------------------------+                                         |
|                                    | | *drop-ns-nondad* | Drop ICMP6 NS-NonDAD when target address is not found  |                                         |
|                                    | |                  | in ndp proxy cache.                                    |                                         |
|                                    | +------------------+--------------------------------------------------------+                                         |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| key                                | WEP Key.                          | password                  | Not Specified             |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| keyindex                           | WEP key index.                    | integer                   | Minimum value: 1 Maximum  | 1                         |
|                                    |                                   |                           | value: 4                  |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| l3-roaming                         | Enable/disable layer 3 roaming.   | option                    | \-                        | disable                   |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *enable*    | Enable layer 3 roaming.                                |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *disable*   | Disable layer 3 roaming.                               |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| l3-roaming-mode                    | Select the way that layer 3       | option                    | \-                        | direct                    |
|                                    | roaming traffic is passed.        |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *direct*    | Layer 3 roaming traffic is passed between home AP and  |                                              |
|                                    | |             | guest AP directly.                                     |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *indirect*  | Layer 3 roaming traffic is passed between home AP and  |                                              |
|                                    | |             | guest AP through controllers.                          |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| ldpc                               | VAP low-density parity-check      | option                    | \-                        | rxtx                      |
|                                    | (LDPC) coding configuration.      |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *disable*   | Disable LDPC.                                          |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *rx*        | Enable LDPC when receiving traffic.                    |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *tx*        | Enable LDPC when transmitting traffic.                 |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *rxtx*      | Enable LDPC when both receiving and transmitting       |                                              |
|                                    | |             | traffic.                                               |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| local-authentication               | Enable/disable AP local           | option                    | \-                        | disable                   |
|                                    | authentication.                   |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *enable*    | Enable AP local authentication.                        |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *disable*   | Disable AP local authentication.                       |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| local-bridging                     | Enable/disable bridging of        | option                    | \-                        | disable                   |
|                                    | wireless and Ethernet interfaces  |                           |                           |                           |
|                                    | on the FortiAP.                   |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *enable*    | Enable AP local VAP to Ethernet bridging.              |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *disable*   | Disable AP local VAP to Ethernet bridging.             |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| local-lan                          | Allow/deny traffic destined for a | option                    | \-                        | allow                     |
|                                    | Class A, B, or C private IP       |                           |                           |                           |
|                                    | address.                          |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *allow*     | Allow traffic destined for a Class A, B, or C private  |                                              |
|                                    | |             | IP address.                                            |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *deny*      | Deny traffic destined for a Class A, B, or C private   |                                              |
|                                    | |             | IP address.                                            |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| local-standalone                   | Enable/disable AP local           | option                    | \-                        | disable                   |
|                                    | standalone.                       |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *enable*    | Enable AP local standalone.                            |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *disable*   | Disable AP local standalone.                           |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| local-standalone-dns               | Enable/disable AP local           | option                    | \-                        | disable                   |
|                                    | standalone DNS.                   |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *enable*    | Enable AP local standalone DNS.                        |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *disable*   | Disable AP local standalone DNS.                       |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| local-standalone-dns-ip            | IPv4 addresses for the local      | ipv4-address              | Not Specified             |                           |
|                                    | standalone DNS.                   |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| local-standalone-nat               | Enable/disable AP local           | option                    | \-                        | disable                   |
|                                    | standalone NAT mode.              |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *enable*    | Enable AP local standalone NAT mode.                   |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *disable*   | Disable AP local standalone NAT mode.                  |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| mac-auth-bypass                    | Enable/disable MAC authentication | option                    | \-                        | disable                   |
|                                    | bypass.                           |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *enable*    | Enable MAC authentication bypass.                      |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *disable*   | Disable MAC authentication bypass.                     |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| mac-called-station-delimiter       | MAC called station delimiter.     | option                    | \-                        | hyphen                    |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-----------------+--------------------------------------------------------+                                          |
|                                    | | Option          | Description                                            |                                          |
|                                    | +=================+========================================================+                                          |
|                                    | | *hyphen*        | Use hyphen as delimiter for called station.            |                                          |
|                                    | +-----------------+--------------------------------------------------------+                                          |
|                                    | | *single-hyphen* | Use single hyphen as delimiter for called station.     |                                          |
|                                    | +-----------------+--------------------------------------------------------+                                          |
|                                    | | *colon*         | Use colon as delimiter for called station.             |                                          |
|                                    | +-----------------+--------------------------------------------------------+                                          |
|                                    | | *none*          | No delimiter for called station.                       |                                          |
|                                    | +-----------------+--------------------------------------------------------+                                          |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| mac-calling-station-delimiter      | MAC calling station delimiter.    | option                    | \-                        | hyphen                    |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-----------------+--------------------------------------------------------+                                          |
|                                    | | Option          | Description                                            |                                          |
|                                    | +=================+========================================================+                                          |
|                                    | | *hyphen*        | Use hyphen as delimiter for calling station.           |                                          |
|                                    | +-----------------+--------------------------------------------------------+                                          |
|                                    | | *single-hyphen* | Use single hyphen as delimiter for calling station.    |                                          |
|                                    | +-----------------+--------------------------------------------------------+                                          |
|                                    | | *colon*         | Use colon as delimiter for calling station.            |                                          |
|                                    | +-----------------+--------------------------------------------------------+                                          |
|                                    | | *none*          | No delimiter for calling station.                      |                                          |
|                                    | +-----------------+--------------------------------------------------------+                                          |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| mac-case                           | MAC case.                         | option                    | \-                        | uppercase                 |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *uppercase* | Use uppercase MAC.                                     |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *lowercase* | Use lowercase MAC.                                     |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| mac-password-delimiter             | MAC authentication password       | option                    | \-                        | hyphen                    |
|                                    | delimiter.                        |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-----------------+--------------------------------------------------------+                                          |
|                                    | | Option          | Description                                            |                                          |
|                                    | +=================+========================================================+                                          |
|                                    | | *hyphen*        | Use hyphen as delimiter for MAC auth password.         |                                          |
|                                    | +-----------------+--------------------------------------------------------+                                          |
|                                    | | *single-hyphen* | Use single hyphen as delimiter for MAC auth password.  |                                          |
|                                    | +-----------------+--------------------------------------------------------+                                          |
|                                    | | *colon*         | Use colon as delimiter for MAC auth password.          |                                          |
|                                    | +-----------------+--------------------------------------------------------+                                          |
|                                    | | *none*          | No delimiter for MAC auth password.                    |                                          |
|                                    | +-----------------+--------------------------------------------------------+                                          |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| mac-username-delimiter             | MAC authentication username       | option                    | \-                        | hyphen                    |
|                                    | delimiter.                        |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-----------------+--------------------------------------------------------+                                          |
|                                    | | Option          | Description                                            |                                          |
|                                    | +=================+========================================================+                                          |
|                                    | | *hyphen*        | Use hyphen as delimiter for MAC auth username.         |                                          |
|                                    | +-----------------+--------------------------------------------------------+                                          |
|                                    | | *single-hyphen* | Use single hyphen as delimiter for MAC auth username.  |                                          |
|                                    | +-----------------+--------------------------------------------------------+                                          |
|                                    | | *colon*         | Use colon as delimiter for MAC auth username.          |                                          |
|                                    | +-----------------+--------------------------------------------------------+                                          |
|                                    | | *none*          | No delimiter for MAC auth username.                    |                                          |
|                                    | +-----------------+--------------------------------------------------------+                                          |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| max-clients                        | Maximum number of clients that    | integer                   | Minimum value: 0 Maximum  | 0                         |
|                                    | can connect simultaneously to the |                           | value: 4294967295         |                           |
|                                    | VAP.                              |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| max-clients-ap                     | Maximum number of clients that    | integer                   | Minimum value: 0 Maximum  | 0                         |
|                                    | can connect simultaneously to the |                           | value: 4294967295         |                           |
|                                    | VAP per AP radio.                 |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| mbo                                | Enable/disable Multiband          | option                    | \-                        | disable                   |
|                                    | Operation.                        |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *disable*   | Disable Multiband Operation (MBO).                     |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *enable*    | Enable Multiband Operation (MBO).                      |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| mbo-cell-data-conn-pref            | MBO cell data connection          | option                    | \-                        | prefer-not                |
|                                    | preference.                       |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +--------------+--------------------------------------------------------+                                             |
|                                    | | Option       | Description                                            |                                             |
|                                    | +==============+========================================================+                                             |
|                                    | | *excluded*   | Wi-Fi Agile Multiband AP does not want the Wi-Fi Agile |                                             |
|                                    | |              | Multiband STA to use the cellular data connection.     |                                             |
|                                    | +--------------+--------------------------------------------------------+                                             |
|                                    | | *prefer-not* | Wi-Fi Agile Multiband AP prefers the Wi-Fi Agile       |                                             |
|                                    | |              | Multiband STA should not use cellular data connection. |                                             |
|                                    | +--------------+--------------------------------------------------------+                                             |
|                                    | | *prefer-use* | Wi-Fi Agile Multiband AP prefers the Wi-Fi Agile       |                                             |
|                                    | |              | Multiband STA should use cellular data connection.     |                                             |
|                                    | +--------------+--------------------------------------------------------+                                             |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| me-disable-thresh                  | Disable multicast enhancement     | integer                   | Minimum value: 2 Maximum  | 32                        |
|                                    | when this many clients are        |                           | value: 256                |                           |
|                                    | receiving multicast traffic.      |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| mesh-backhaul                      | Enable/disable using this VAP as  | option                    | \-                        | disable                   |
|                                    | a WiFi mesh backhaul. This entry  |                           |                           |                           |
|                                    | is only available when security   |                           |                           |                           |
|                                    | is set to a WPA type or open.     |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *enable*    | Enable mesh backhaul.                                  |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *disable*   | Disable mesh backhaul.                                 |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| mpsk-profile                       | MPSK profile name.                | string                    | Maximum length: 35        |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| mu-mimo                            | Enable/disable Multi-user MIMO.   | option                    | \-                        | enable                    |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *enable*    | Enable Multi-user MIMO.                                |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *disable*   | Disable Multi-user MIMO.                               |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| multicast-enhance                  | Enable/disable converting         | option                    | \-                        | disable                   |
|                                    | multicast to unicast to improve   |                           |                           |                           |
|                                    | performance.                      |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *enable*    | Enable multicast enhancement.                          |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *disable*   | Disable multicast enhancement.                         |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| multicast-rate                     | Multicast rate.                   | option                    | \-                        | 0                         |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *0*         | Use the default multicast rate.                        |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *6000*      | 6 Mbps.                                                |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *12000*     | 12 Mbps.                                               |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *24000*     | 24 Mbps.                                               |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| nac                                | Enable/disable network access     | option                    | \-                        | disable                   |
|                                    | control.                          |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *enable*    | Enable network access control.                         |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *disable*   | Disable network access control.                        |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| nac-profile                        | NAC profile name.                 | string                    | Maximum length: 35        |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| name                               | Virtual AP name.                  | string                    | Maximum length: 15        |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| neighbor-report-dual-band          | Enable/disable dual-band neighbor | option                    | \-                        | disable                   |
|                                    | report.                           |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *disable*   | Disable dual-band neighbor report.                     |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *enable*    | Enable dual-band neighbor report.                      |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| okc                                | Enable/disable Opportunistic Key  | option                    | \-                        | enable                    |
|                                    | Caching.                          |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *disable*   | Disable Opportunistic Key Caching (OKC).               |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *enable*    | Enable Opportunistic Key Caching (OKC).                |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| osen                               | Enable/disable OSEN as part of    | option                    | \-                        | disable                   |
|                                    | key management.                   |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *enable*    | Enable OSEN auth.                                      |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *disable*   | Disable OSEN auth.                                     |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| owe-groups                         | OWE-Groups.                       | option                    | \-                        |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *19*        | DH Group 19.                                           |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *20*        | DH Group 20.                                           |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *21*        | DH Group 21.                                           |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| owe-transition                     | Enable/disable OWE transition     | option                    | \-                        | disable                   |
|                                    | mode support.                     |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *disable*   | Disable OWE transition mode support.                   |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *enable*    | Enable OWE transition mode support.                    |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| owe-transition-ssid                | OWE transition mode peer SSID.    | string                    | Maximum length: 32        |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| passphrase                         | WPA pre-shared key (PSK) to be    | password                  | Not Specified             |                           |
|                                    | used to authenticate WiFi users.  |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| pmf                                | Protected Management Frames.      | option                    | \-                        | disable                   |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *disable*   | Disable PMF completely.                                |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *enable*    | Enable PMF but deny clients without PMF.               |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *optional*  | Enable PMF and allow clients without PMF.              |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| pmf-assoc-comeback-timeout         | Protected Management Frames.      | integer                   | Minimum value: 1 Maximum  | 1                         |
|                                    |                                   |                           | value: 20                 |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| pmf-sa-query-retry-timeout         | Protected Management Frames.      | integer                   | Minimum value: 1 Maximum  | 2                         |
|                                    |                                   |                           | value: 5                  |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| port-macauth                       | Enable/disable LAN port MAC       | option                    | \-                        | disable                   |
|                                    | authentication.                   |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-----------------+--------------------------------------------------------+                                          |
|                                    | | Option          | Description                                            |                                          |
|                                    | +=================+========================================================+                                          |
|                                    | | *disable*       | Disable LAN port MAC authentication.                   |                                          |
|                                    | +-----------------+--------------------------------------------------------+                                          |
|                                    | | *radius*        | Enable LAN port RADIUS-based MAC authentication.       |                                          |
|                                    | +-----------------+--------------------------------------------------------+                                          |
|                                    | | *address-group* | Enable LAN port address-group based MAC                |                                          |
|                                    | |                 | authentication.                                        |                                          |
|                                    | +-----------------+--------------------------------------------------------+                                          |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| port-macauth-reauth-timeout        | LAN port MAC authentication       | integer                   | Minimum value: 120        | 7200                      |
|                                    | re-authentication timeout value.  |                           | Maximum value: 65535      |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| port-macauth-timeout               | LAN port MAC authentication idle  | integer                   | Minimum value: 60 Maximum | 600                       |
|                                    | timeout value.                    |                           | value: 65535              |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| portal-message-override-group      | Replacement message group for     | string                    | Maximum length: 35        |                           |
|                                    | this VAP (only available when     |                           |                           |                           |
|                                    | security is set to a captive      |                           |                           |                           |
|                                    | portal type).                     |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| portal-type                        | Captive portal functionality.     | option                    | \-                        | auth                      |
|                                    | Configure how the captive portal  |                           |                           |                           |
|                                    | authenticates users and whether   |                           |                           |                           |
|                                    | it includes a disclaimer.         |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +--------------------+--------------------------------------------------------+                                       |
|                                    | | Option             | Description                                            |                                       |
|                                    | +====================+========================================================+                                       |
|                                    | | *auth*             | Portal for authentication.                             |                                       |
|                                    | +--------------------+--------------------------------------------------------+                                       |
|                                    | | *auth+disclaimer*  | Portal for authentication and disclaimer.              |                                       |
|                                    | +--------------------+--------------------------------------------------------+                                       |
|                                    | | *disclaimer*       | Portal for disclaimer.                                 |                                       |
|                                    | +--------------------+--------------------------------------------------------+                                       |
|                                    | | *email-collect*    | Portal for email collection.                           |                                       |
|                                    | +--------------------+--------------------------------------------------------+                                       |
|                                    | | *cmcc*             | Portal for CMCC.                                       |                                       |
|                                    | +--------------------+--------------------------------------------------------+                                       |
|                                    | | *cmcc-macauth*     | Portal for CMCC and MAC authentication.                |                                       |
|                                    | +--------------------+--------------------------------------------------------+                                       |
|                                    | | *auth-mac*         | Portal for authentication and MAC authentication.      |                                       |
|                                    | +--------------------+--------------------------------------------------------+                                       |
|                                    | | *external-auth*    | Portal for external portal authentication.             |                                       |
|                                    | +--------------------+--------------------------------------------------------+                                       |
|                                    | | *external-macauth* | Portal for external portal MAC authentication.         |                                       |
|                                    | +--------------------+--------------------------------------------------------+                                       |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| primary-wag-profile                | Primary wireless access gateway   | string                    | Maximum length: 35        |                           |
|                                    | profile name.                     |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| probe-resp-suppression             | Enable/disable probe response     | option                    | \-                        | disable                   |
|                                    | suppression.                      |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *enable*    | Enable probe response suppression.                     |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *disable*   | Disable probe response suppression.                    |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| probe-resp-threshold               | Minimum signal level/threshold in | string                    | Maximum length: 7         | -80                       |
|                                    | dBm required for the AP response  |                           |                           |                           |
|                                    | to probe requests.                |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| ptk-rekey                          | Enable/disable PTK rekey for      | option                    | \-                        | disable                   |
|                                    | WPA-Enterprise security.          |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *enable*    | Enable PTK rekey for WPA-Enterprise security.          |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *disable*   | Disable PTK rekey for WPA-Enterprise security.         |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| ptk-rekey-intv                     | PTK rekey interval.               | integer                   | Minimum value: 1800       | 86400                     |
|                                    |                                   |                           | Maximum value: 864000     |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| qos-profile                        | Quality of service profile name.  | string                    | Maximum length: 35        |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| quarantine                         | Enable/disable station            | option                    | \-                        | enable                    |
|                                    | quarantine.                       |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *enable*    | Enable station quarantine.                             |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *disable*   | Disable station quarantine.                            |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| radio-2g-threshold                 | Minimum signal level/threshold in | string                    | Maximum length: 7         | -79                       |
|                                    | dBm required for the AP response  |                           |                           |                           |
|                                    | to receive a packet in 2.4G band. |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| radio-5g-threshold                 | Minimum signal level/threshold in | string                    | Maximum length: 7         | -76                       |
|                                    | dBm required for the AP response  |                           |                           |                           |
|                                    | to receive a packet in 5G band.   |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| radio-sensitivity                  | Enable/disable software radio     | option                    | \-                        | disable                   |
|                                    | sensitivity.                      |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *enable*    | Enable software radio sensitivity.                     |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *disable*   | Disable software radio sensitivity.                    |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| radius-mac-auth                    | Enable/disable RADIUS-based MAC   | option                    | \-                        | disable                   |
|                                    | authentication of clients.        |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *enable*    | Enable RADIUS-based MAC authentication.                |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *disable*   | Disable RADIUS-based MAC authentication.               |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| radius-mac-auth-block-interval     | Don\'t send RADIUS MAC auth       | integer                   | Minimum value: 30 Maximum | 0                         |
|                                    | request again if the client has   |                           | value: 864000             |                           |
|                                    | been rejected within specific     |                           |                           |                           |
|                                    | interval.                         |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| radius-mac-auth-server             | RADIUS-based MAC authentication   | string                    | Maximum length: 35        |                           |
|                                    | server.                           |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| radius-mac-auth-usergroups         | Selective user groups that are    | string                    | Maximum length: 79        |                           |
| `<name>`                           | permitted for RADIUS mac          |                           |                           |                           |
|                                    | authentication.                   |                           |                           |                           |
|                                    |                                   |                           |                           |                           |
|                                    | User group name.                  |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| radius-mac-mpsk-auth               | Enable/disable RADIUS-based MAC   | option                    | \-                        | disable                   |
|                                    | authentication of clients for     |                           |                           |                           |
|                                    | MPSK authentication.              |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *enable*    | Enable RADIUS-based MAC authentication for MPSK        |                                              |
|                                    | |             | authentication.                                        |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *disable*   | Disable RADIUS-based MAC authentication for MPSK       |                                              |
|                                    | |             | authentication.                                        |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| radius-mac-mpsk-timeout            | RADIUS MAC MPSK cache timeout     | integer                   | Minimum value: 300        | 86400                     |
|                                    | interval.                         |                           | Maximum value: 864000     |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| radius-server                      | RADIUS server to be used to       | string                    | Maximum length: 35        |                           |
|                                    | authenticate WiFi users.          |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| rates-11a                          | Allowed data rates for 802.11a.   | option                    | \-                        |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *6*         | 6 Mbps supported rate.                                 |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *6-basic*   | 6 Mbps BSS basic rate.                                 |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *9*         | 9 Mbps supported rate.                                 |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *9-basic*   | 9 Mbps BSS basic rate.                                 |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *12*        | 12 Mbps supported rate.                                |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *12-basic*  | 12 Mbps BSS basic rate.                                |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *18*        | 18 Mbps supported rate.                                |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *18-basic*  | 18 Mbps BSS basic rate.                                |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *24*        | 24 Mbps supported rate.                                |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *24-basic*  | 24 Mbps BSS basic rate.                                |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *36*        | 36 Mbps supported rate.                                |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *36-basic*  | 36 Mbps BSS basic rate.                                |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *48*        | 48 Mbps supported rate.                                |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *48-basic*  | 48 Mbps BSS basic rate.                                |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *54*        | 54 Mbps supported rate.                                |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *54-basic*  | 54 Mbps BSS basic rate.                                |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| rates-11ac-mcs-map                 | Comma separated list of max       | string                    | Maximum length: 63        |                           |
|                                    | supported VHT MCS for spatial     |                           |                           |                           |
|                                    | streams 1 through 8.              |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| rates-11ax-mcs-map                 | Comma separated list of max       | string                    | Maximum length: 63        |                           |
|                                    | supported HE MCS for spatial      |                           |                           |                           |
|                                    | streams 1 through 8.              |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| rates-11bg                         | Allowed data rates for 802.11b/g. | option                    | \-                        |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *6*         | 6 Mbps supported rate.                                 |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *6-basic*   | 6 Mbps BSS basic rate.                                 |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *9*         | 9 Mbps supported rate.                                 |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *9-basic*   | 9 Mbps BSS basic rate.                                 |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *12*        | 12 Mbps supported rate.                                |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *12-basic*  | 12 Mbps BSS basic rate.                                |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *18*        | 18 Mbps supported rate.                                |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *18-basic*  | 18 Mbps BSS basic rate.                                |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *24*        | 24 Mbps supported rate.                                |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *24-basic*  | 24 Mbps BSS basic rate.                                |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *36*        | 36 Mbps supported rate.                                |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *36-basic*  | 36 Mbps BSS basic rate.                                |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *48*        | 48 Mbps supported rate.                                |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *48-basic*  | 48 Mbps BSS basic rate.                                |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *54*        | 54 Mbps supported rate.                                |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *54-basic*  | 54 Mbps BSS basic rate.                                |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| rates-11n-ss12                     | Allowed data rates for 802.11n    | option                    | \-                        |                           |
|                                    | with 1 or 2 spatial streams.      |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *mcs0/1*    | Data rate for MCS index 0 with 1 spatial stream.       |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *mcs1/1*    | Data rate for MCS index 1 with 1 spatial stream.       |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *mcs2/1*    | Data rate for MCS index 2 with 1 spatial stream.       |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *mcs3/1*    | Data rate for MCS index 3 with 1 spatial stream.       |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *mcs4/1*    | Data rate for MCS index 4 with 1 spatial stream.       |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *mcs5/1*    | Data rate for MCS index 5 with 1 spatial stream.       |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *mcs6/1*    | Data rate for MCS index 6 with 1 spatial stream.       |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *mcs7/1*    | Data rate for MCS index 7 with 1 spatial stream.       |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *mcs8/2*    | Data rate for MCS index 8 with 2 spatial streams.      |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *mcs9/2*    | Data rate for MCS index 9 with 2 spatial streams.      |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *mcs10/2*   | Data rate for MCS index 10 with 2 spatial streams.     |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *mcs11/2*   | Data rate for MCS index 11 with 2 spatial streams.     |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *mcs12/2*   | Data rate for MCS index 12 with 2 spatial streams.     |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *mcs13/2*   | Data rate for MCS index 13 with 2 spatial streams.     |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *mcs14/2*   | Data rate for MCS index 14 with 2 spatial streams.     |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *mcs15/2*   | Data rate for MCS index 15 with 2 spatial streams.     |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| rates-11n-ss34                     | Allowed data rates for 802.11n    | option                    | \-                        |                           |
|                                    | with 3 or 4 spatial streams.      |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *mcs16/3*   | Data rate for MCS index 16 with 3 spatial streams.     |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *mcs17/3*   | Data rate for MCS index 17 with 3 spatial streams.     |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *mcs18/3*   | Data rate for MCS index 18 with 3 spatial streams.     |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *mcs19/3*   | Data rate for MCS index 19 with 3 spatial streams.     |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *mcs20/3*   | Data rate for MCS index 20 with 3 spatial streams.     |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *mcs21/3*   | Data rate for MCS index 21 with 3 spatial streams.     |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *mcs22/3*   | Data rate for MCS index 22 with 3 spatial streams.     |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *mcs23/3*   | Data rate for MCS index 23 with 3 spatial streams.     |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *mcs24/4*   | Data rate for MCS index 24 with 4 spatial streams.     |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *mcs25/4*   | Data rate for MCS index 25 with 4 spatial streams.     |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *mcs26/4*   | Data rate for MCS index 26 with 4 spatial streams.     |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *mcs27/4*   | Data rate for MCS index 27 with 4 spatial streams.     |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *mcs28/4*   | Data rate for MCS index 28 with 4 spatial streams.     |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *mcs29/4*   | Data rate for MCS index 29 with 4 spatial streams.     |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *mcs30/4*   | Data rate for MCS index 30 with 4 spatial streams.     |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *mcs31/4*   | Data rate for MCS index 31 with 4 spatial streams.     |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| sae-groups                         | SAE-Groups.                       | option                    | \-                        |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *19*        | DH Group 19.                                           |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *20*        | DH Group 20.                                           |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *21*        | DH Group 21.                                           |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| sae-h2e-only                       | Use hash-to-element-only          | option                    | \-                        | disable                   |
|                                    | mechanism for PWE derivation.     |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *enable*    | Enable WPA3 SAE-H2E-only.                              |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *disable*   | Disable WPA3 SAE-H2E-only.                             |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| sae-password                       | WPA3 SAE password to be used to   | password                  | Not Specified             |                           |
|                                    | authenticate WiFi users.          |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| sae-pk                             | Enable/disable WPA3 SAE-PK.       | option                    | \-                        | disable                   |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *enable*    | Enable WPA3 SAE-PK.                                    |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *disable*   | Disable WPA3 SAE-PK.                                   |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| sae-private-key                    | Private key used for WPA3 SAE-PK  | string                    | Maximum length: 359       |                           |
|                                    | authentication.                   |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| scan-botnet-connections            | Block or monitor connections to   | option                    | \-                        | monitor                   |
|                                    | Botnet servers or disable Botnet  |                           |                           |                           |
|                                    | scanning.                         |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *disable*   | Do not scan connections to botnet servers.             |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *monitor*   | Log connections to botnet servers.                     |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *block*     | Block connections to botnet servers.                   |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| schedule `<name>`                  | Firewall schedules for enabling   | string                    | Maximum length: 35        |                           |
|                                    | this VAP on the FortiAP. This VAP |                           |                           |                           |
|                                    | will be enabled when at least one |                           |                           |                           |
|                                    | of the schedules is valid.        |                           |                           |                           |
|                                    | Separate multiple schedule names  |                           |                           |                           |
|                                    | with a space.                     |                           |                           |                           |
|                                    |                                   |                           |                           |                           |
|                                    | Schedule name.                    |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| secondary-wag-profile              | Secondary wireless access gateway | string                    | Maximum length: 35        |                           |
|                                    | profile name.                     |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| security                           | Security mode for the wireless    | option                    | \-                        | wpa2-only-personal        |
|                                    | interface.                        |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------------------------------+--------------------------------------------------------+                      |
|                                    | | Option                              | Description                                            |                      |
|                                    | +=====================================+========================================================+                      |
|                                    | | *open*                              | Open.                                                  |                      |
|                                    | +-------------------------------------+--------------------------------------------------------+                      |
|                                    | | *captive-portal*                    | Captive portal.                                        |                      |
|                                    | +-------------------------------------+--------------------------------------------------------+                      |
|                                    | | *wep64*                             | WEP 64-bit.                                            |                      |
|                                    | +-------------------------------------+--------------------------------------------------------+                      |
|                                    | | *wep128*                            | WEP 128-bit.                                           |                      |
|                                    | +-------------------------------------+--------------------------------------------------------+                      |
|                                    | | *wpa-personal*                      | WPA/WPA2 personal.                                     |                      |
|                                    | +-------------------------------------+--------------------------------------------------------+                      |
|                                    | | *wpa-personal+captive-portal*       | WPA/WPA2 personal with captive portal.                 |                      |
|                                    | +-------------------------------------+--------------------------------------------------------+                      |
|                                    | | *wpa-enterprise*                    | WPA/WPA2 enterprise.                                   |                      |
|                                    | +-------------------------------------+--------------------------------------------------------+                      |
|                                    | | *wpa-only-personal*                 | WPA personal.                                          |                      |
|                                    | +-------------------------------------+--------------------------------------------------------+                      |
|                                    | | *wpa-only-personal+captive-portal*  | WPA personal with captive portal.                      |                      |
|                                    | +-------------------------------------+--------------------------------------------------------+                      |
|                                    | | *wpa-only-enterprise*               | WPA enterprise.                                        |                      |
|                                    | +-------------------------------------+--------------------------------------------------------+                      |
|                                    | | *wpa2-only-personal*                | WPA2 personal.                                         |                      |
|                                    | +-------------------------------------+--------------------------------------------------------+                      |
|                                    | | *wpa2-only-personal+captive-portal* | WPA2 personal with captive portal.                     |                      |
|                                    | +-------------------------------------+--------------------------------------------------------+                      |
|                                    | | *wpa2-only-enterprise*              | WPA2 enterprise.                                       |                      |
|                                    | +-------------------------------------+--------------------------------------------------------+                      |
|                                    | | *wpa3-enterprise*                   | WPA3 enterprise with 192-bit encryption and PMF        |                      |
|                                    | |                                     | mandatory.                                             |                      |
|                                    | +-------------------------------------+--------------------------------------------------------+                      |
|                                    | | *wpa3-only-enterprise*              | WPA3 enterprise with PMF mandatory.                    |                      |
|                                    | +-------------------------------------+--------------------------------------------------------+                      |
|                                    | | *wpa3-enterprise-transition*        | WPA3 enterprise with PMF optional.                     |                      |
|                                    | +-------------------------------------+--------------------------------------------------------+                      |
|                                    | | *wpa3-sae*                          | WPA3 SAE.                                              |                      |
|                                    | +-------------------------------------+--------------------------------------------------------+                      |
|                                    | | *wpa3-sae-transition*               | WPA3 SAE transition.                                   |                      |
|                                    | +-------------------------------------+--------------------------------------------------------+                      |
|                                    | | *owe*                               | Opportunistic wireless encryption.                     |                      |
|                                    | +-------------------------------------+--------------------------------------------------------+                      |
|                                    | | *osen*                              | OSEN.                                                  |                      |
|                                    | +-------------------------------------+--------------------------------------------------------+                      |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| security-exempt-list               | Optional security exempt list for | string                    | Maximum length: 35        |                           |
|                                    | captive portal authentication.    |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| security-redirect-url              | Optional URL for redirecting      | var-string                | Maximum length: 1023      |                           |
|                                    | users after they pass captive     |                           |                           |                           |
|                                    | portal authentication.            |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| selected-usergroups `<name>`       | Selective user groups that are    | string                    | Maximum length: 79        |                           |
|                                    | permitted to authenticate.        |                           |                           |                           |
|                                    |                                   |                           |                           |                           |
|                                    | User group name.                  |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| split-tunneling                    | Enable/disable split tunneling.   | option                    | \-                        | disable                   |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *enable*    | Enable split tunneling.                                |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *disable*   | Disable split tunneling.                               |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| ssid                               | IEEE 802.11 service set           | string                    | Maximum length: 32        | fortinet                  |
|                                    | identifier (SSID) for the         |                           |                           |                           |
|                                    | wireless interface. Users who     |                           |                           |                           |
|                                    | wish to use the wireless network  |                           |                           |                           |
|                                    | must configure their computers to |                           |                           |                           |
|                                    | access this SSID name.            |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| sticky-client-remove               | Enable/disable sticky client      | option                    | \-                        | disable                   |
|                                    | remove to maintain good signal    |                           |                           |                           |
|                                    | level clients in SSID.            |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *enable*    | Enable sticky client remove.                           |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *disable*   | Disable sticky client remove.                          |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| sticky-client-threshold-2g         | Minimum signal level/threshold in | string                    | Maximum length: 7         | -79                       |
|                                    | dBm required for the 2G client to |                           |                           |                           |
|                                    | be serviced by the AP.            |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| sticky-client-threshold-5g         | Minimum signal level/threshold in | string                    | Maximum length: 7         | -76                       |
|                                    | dBm required for the 5G client to |                           |                           |                           |
|                                    | be serviced by the AP.            |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| sticky-client-threshold-6g         | Minimum signal level/threshold in | string                    | Maximum length: 7         | -76                       |
|                                    | dBm required for the 6G client to |                           |                           |                           |
|                                    | be serviced by the AP.            |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| target-wake-time                   | Enable/disable 802.11ax target    | option                    | \-                        | enable                    |
|                                    | wake time.                        |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *enable*    | Enable 802.11ax target wake time.                      |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *disable*   | Disable 802.11ax target wake time.                     |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| tkip-counter-measure               | Enable/disable TKIP counter       | option                    | \-                        | enable                    |
|                                    | measure.                          |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *enable*    | Enable TKIP counter measure.                           |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *disable*   | Disable TKIP counter measure.                          |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| tunnel-echo-interval               | The time interval to send echo to | integer                   | Minimum value: 1 Maximum  | 300                       |
|                                    | both primary and secondary tunnel |                           | value: 65535              |                           |
|                                    | peers.                            |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| tunnel-fallback-interval           | The time interval for secondary   | integer                   | Minimum value: 0 Maximum  | 7200                      |
|                                    | tunnel to fall back to primary    |                           | value: 65535              |                           |
|                                    | tunnel.                           |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| usergroup `<name>`                 | Firewall user group to be used to | string                    | Maximum length: 79        |                           |
|                                    | authenticate WiFi users.          |                           |                           |                           |
|                                    |                                   |                           |                           |                           |
|                                    | User group name.                  |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| utm-log                            | Enable/disable UTM logging.       | option                    | \-                        | enable                    |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *enable*    | Enable UTM logging.                                    |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *disable*   | Disable UTM logging.                                   |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| utm-profile                        | UTM profile name.                 | string                    | Maximum length: 35        |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| utm-status                         | Enable to add one or more         | option                    | \-                        | disable                   |
|                                    | security profiles (AV, IPS, etc.) |                           |                           |                           |
|                                    | to the VAP.                       |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *enable*    | Enable setting.                                        |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *disable*   | Disable setting.                                       |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| vlan-auto                          | Enable/disable automatic          | option                    | \-                        | disable                   |
|                                    | management of SSID VLAN           |                           |                           |                           |
|                                    | interface.                        |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *enable*    | Enable automatic management of SSID VLAN interface.    |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *disable*   | Disable automatic management of SSID VLAN interface.   |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| vlan-pooling                       | Enable/disable VLAN pooling, to   | option                    | \-                        | disable                   |
|                                    | allow grouping of multiple        |                           |                           |                           |
|                                    | wireless controller VLANs into    |                           |                           |                           |
|                                    | VLAN pools. When set to           |                           |                           |                           |
|                                    | wtp-group, VLAN pooling occurs    |                           |                           |                           |
|                                    | with VLAN assignment by           |                           |                           |                           |
|                                    | wtp-group.                        |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +---------------+--------------------------------------------------------+                                            |
|                                    | | Option        | Description                                            |                                            |
|                                    | +===============+========================================================+                                            |
|                                    | | *wtp-group*   | Enable VLAN pooling with VLAN assignment by wtp-group. |                                            |
|                                    | +---------------+--------------------------------------------------------+                                            |
|                                    | | *round-robin* | Enable VLAN pooling with round-robin VLAN assignment.  |                                            |
|                                    | +---------------+--------------------------------------------------------+                                            |
|                                    | | *hash*        | Enable VLAN pooling with hash-based VLAN assignment.   |                                            |
|                                    | +---------------+--------------------------------------------------------+                                            |
|                                    | | *disable*     | Disable VLAN pooling.                                  |                                            |
|                                    | +---------------+--------------------------------------------------------+                                            |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| vlanid                             | Optional VLAN ID.                 | integer                   | Minimum value: 0 Maximum  | 0                         |
|                                    |                                   |                           | value: 4094               |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| voice-enterprise                   | Enable/disable 802.11k and        | option                    | \-                        | enable                    |
|                                    | 802.11v assisted Voice-Enterprise |                           |                           |                           |
|                                    | roaming.                          |                           |                           |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | Option      | Description                                            |                                              |
|                                    | +=============+========================================================+                                              |
|                                    | | *disable*   | Disable 802.11k and 802.11v assisted Voice-Enterprise  |                                              |
|                                    | |             | roaming.                                               |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
|                                    | | *enable*    | Enable 802.11k and 802.11v assisted Voice-Enterprise   |                                              |
|                                    | |             | roaming.                                               |                                              |
|                                    | +-------------+--------------------------------------------------------+                                              |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+
| webfilter-profile                  | WebFilter profile name.           | string                    | Maximum length: 35        |                           |
+------------------------------------+-----------------------------------+---------------------------+---------------------------+---------------------------+

