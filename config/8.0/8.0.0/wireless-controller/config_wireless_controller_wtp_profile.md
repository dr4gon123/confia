# config wireless-controller wtp-profile

Configure WTP profiles or FortiAP profiles that define radio settings for manageable FortiAP platforms.

## Syntax

```
config wireless-controller wtp-profile
    Description: Configure WTP profiles or FortiAP profiles that define radio settings for manageable FortiAP platforms.
    edit <name>
        set 80211mc-mode [auto|initiator|...]
        set admin-auth-tacacs+ {string}
        set admin-restrict-local [enable|disable]
        set allowaccess {option1}, {option2}, ...
        set ap-country [--|AF|...]
        set ap-handoff [enable|disable]
        set apcfg-auto-cert [enable|disable]
        set apcfg-auto-cert-auto-regen-days {integer}
        set apcfg-auto-cert-crypto-algo [rsa-1024|rsa-1536|...]
        set apcfg-auto-cert-enroll-protocol [none|est|...]
        set apcfg-auto-cert-est-ca-id {string}
        set apcfg-auto-cert-est-http-password {password}
        set apcfg-auto-cert-est-http-username {string}
        set apcfg-auto-cert-est-https-ca {string}
        set apcfg-auto-cert-est-server {string}
        set apcfg-auto-cert-est-subject {string}
        set apcfg-auto-cert-est-subject-alt-name {string}
        set apcfg-auto-cert-scep-ca-id {string}
        set apcfg-auto-cert-scep-ec-name [secp256r1|secp384r1|...]
        set apcfg-auto-cert-scep-https-ca {string}
        set apcfg-auto-cert-scep-keysize [1024|1536|...]
        set apcfg-auto-cert-scep-keytype [rsa|ec]
        set apcfg-auto-cert-scep-password {password}
        set apcfg-auto-cert-scep-sub-fully-dn {string}
        set apcfg-auto-cert-scep-subject-alt-name {string}
        set apcfg-auto-cert-scep-url {string}
        set apcfg-mesh [enable|disable]
        set apcfg-mesh-ap-type [ethernet|mesh|...]
        set apcfg-mesh-eth-bridge [enable|disable]
        set apcfg-mesh-ssid {string}
        set apcfg-profile {string}
        set ble-profile {string}
        set bonjour-profile {string}
        set comment {var-string}
        set console-login [enable|disable]
        set control-message-offload {option1}, {option2}, ...
        set default-mesh-root [enable|disable]
        config deny-mac-list
            Description: List of MAC addresses that are denied access to this WTP, FortiAP, or AP.
            edit <id>
                set mac {mac-address}
            next
        end
        set dtls-in-kernel [enable|disable]
        set dtls-policy {option1}, {option2}, ...
        set energy-efficient-ethernet [enable|disable]
        config esl-ses-dongle
            Description: ESL SES-imagotag dongle configuration.
            set apc-addr-type [fqdn|ip]
            set apc-fqdn {string}
            set apc-ip {ipv4-address}
            set apc-port {integer}
            set coex-level {option}
            set compliance-level {option}
            set esl-channel [-1|0|...]
            set output-power [a|b|...]
            set scd-enable [enable|disable]
            set tls-cert-verification [enable|disable]
            set tls-fqdn-verification [enable|disable]
        end
        set ext-info-enable [enable|disable]
        set frequency-handoff [enable|disable]
        set handoff-roaming [enable|disable]
        set handoff-rssi {integer}
        set handoff-sta-thresh {integer}
        set indoor-outdoor-deployment [platform-determined|outdoor|...]
        set ip-fragment-preventing {option1}, {option2}, ...
        set ipsec-offload [enable|disable]
        config lan
            Description: WTP LAN port mapping.
            set port-esl-mode [offline|nat-to-wan|...]
            set port-esl-ssid {string}
            set port-mode [offline|nat-to-wan|...]
            set port-ssid {string}
            set port1-mode [offline|nat-to-wan|...]
            set port1-ssid {string}
            set port2-mode [offline|nat-to-wan|...]
            set port2-ssid {string}
            set port3-mode [offline|nat-to-wan|...]
            set port3-ssid {string}
            set port4-mode [offline|nat-to-wan|...]
            set port4-ssid {string}
            set port5-mode [offline|nat-to-wan|...]
            set port5-ssid {string}
            set port6-mode [offline|nat-to-wan|...]
            set port6-ssid {string}
            set port7-mode [offline|nat-to-wan|...]
            set port7-ssid {string}
            set port8-mode [offline|nat-to-wan|...]
            set port8-ssid {string}
        end
        config lbs
            Description: Set various location based service (LBS) options.
            set aeroscout [enable|disable]
            set aeroscout-ap-mac [bssid|board-mac]
            set aeroscout-mmu-report [enable|disable]
            set aeroscout-mu [enable|disable]
            set aeroscout-mu-factor {integer}
            set aeroscout-mu-timeout {integer}
            set aeroscout-server-ip {ipv4-address-any}
            set aeroscout-server-port {integer}
            set ble-rtls [none|polestar|...]
            set ble-rtls-accumulation-interval {integer}
            set ble-rtls-asset-addrgrp-list {string}
            set ble-rtls-asset-uuid-list1 {string}
            set ble-rtls-asset-uuid-list2 {string}
            set ble-rtls-asset-uuid-list3 {string}
            set ble-rtls-asset-uuid-list4 {string}
            set ble-rtls-protocol {option}
            set ble-rtls-reporting-interval {integer}
            set ble-rtls-server-fqdn {string}
            set ble-rtls-server-path {string}
            set ble-rtls-server-port {integer}
            set ble-rtls-server-token {string}
            set ekahau-blink-mode [enable|disable]
            set ekahau-tag {mac-address}
            set erc-server-ip {ipv4-address-any}
            set erc-server-port {integer}
            set fortipresence [foreign|both|...]
            set fortipresence-ble [enable|disable]
            set fortipresence-frequency {integer}
            set fortipresence-port {integer}
            set fortipresence-project {string}
            set fortipresence-rogue [enable|disable]
            set fortipresence-secret {password}
            set fortipresence-server {ipv4-address-any}
            set fortipresence-server-addr-type [ipv4|fqdn]
            set fortipresence-server-fqdn {string}
            set fortipresence-unassoc [enable|disable]
            set station-locate [enable|disable]
        end
        set led-schedules <name1>, <name2>, ...
        set led-state [enable|disable]
        set lldp [enable|disable]
        set login-passwd {password}
        set login-passwd-change [yes|default|...]
        set lw-profile {string}
        set max-clients {integer}
        config platform
            Description: WTP, FortiAP, or AP platform.
            set ddscan [enable|disable]
            set mode [single-5G|dual-5G]
            set type [AP-11N|421E|...]
        end
        set poe-mode [auto|8023af|...]
        config radio-1
            Description: Configuration options for radio 1.
            set 80211d [enable|disable]
            set 80211mc [enable|disable]
            set ai-darrp-support [enable|disable]
            set airtime-fairness [enable|disable]
            set amsdu [enable|disable]
            set ap-sniffer-addr {mac-address}
            set ap-sniffer-bufsize {integer}
            set ap-sniffer-chan {integer}
            set ap-sniffer-chan-width [320MHz|240MHz|...]
            set ap-sniffer-ctl [enable|disable]
            set ap-sniffer-data [enable|disable]
            set ap-sniffer-mgmt-beacon [enable|disable]
            set ap-sniffer-mgmt-other [enable|disable]
            set ap-sniffer-mgmt-probe [enable|disable]
            set arrp-profile {string}
            set auto-power-high {integer}
            set auto-power-level [enable|disable]
            set auto-power-low {integer}
            set auto-power-target {string}
            set band {option1}, {option2}, ...
            set band-5g-type [5g-full|5g-high|...]
            set bandwidth-admission-control [enable|disable]
            set bandwidth-capacity {integer}
            set beacon-interval {integer}
            set bss-color {integer}
            set bss-color-mode [auto|static]
            set call-admission-control [enable|disable]
            set call-capacity {integer}
            set cca-threshold {string}
            set channel <chan1>, <chan2>, ...
            set channel-bonding [320MHz|240MHz|...]
            set channel-bonding-ext [320MHz-1|320MHz-2]
            set channel-utilization [enable|disable]
            set coexistence [enable|disable]
            set darrp [enable|disable]
            set drma [disable|enable]
            set drma-sensitivity [low|medium|...]
            set dtim {integer}
            set frag-threshold {integer}
            set iperf-protocol [udp|tcp]
            set iperf-server-port {integer}
            set max-clients {integer}
            set max-distance {integer}
            set mimo-mode [default|1x1|...]
            set mode [disabled|ap|...]
            set optional-antenna [none|custom|...]
            set optional-antenna-gain {string}
            set power-level {integer}
            set power-mode [dBm|percentage]
            set power-value {integer}
            set powersave-optimize {option1}, {option2}, ...
            set protection-mode [rtscts|ctsonly|...]
            set rts-threshold {integer}
            set sam-bssid {mac-address}
            set sam-ca-certificate {string}
            set sam-captive-portal [enable|disable]
            set sam-client-certificate {string}
            set sam-cwp-failure-string {string}
            set sam-cwp-match-string {string}
            set sam-cwp-password {password}
            set sam-cwp-success-string {string}
            set sam-cwp-test-url {string}
            set sam-cwp-username {string}
            set sam-eap-method [both|tls|...]
            set sam-password {password}
            set sam-private-key {string}
            set sam-private-key-password {password}
            set sam-report-intv {integer}
            set sam-security-type [open|wpa-personal|...]
            set sam-server-fqdn {string}
            set sam-server-ip {ipv4-address}
            set sam-server-type [ip|fqdn]
            set sam-ssid {string}
            set sam-test [ping|iperf]
            set sam-username {string}
            set short-guard-interval [enable|disable]
            set transmit-optimize {option1}, {option2}, ...
            set vap-all [tunnel|bridge|...]
            set vap-status [enable|disable]
            set vaps <name1>, <name2>, ...
            set wids-profile {string}
            set zero-wait-dfs [enable|disable]
        end
        config radio-2
            Description: Configuration options for radio 2.
            set 80211d [enable|disable]
            set 80211mc [enable|disable]
            set ai-darrp-support [enable|disable]
            set airtime-fairness [enable|disable]
            set amsdu [enable|disable]
            set ap-sniffer-addr {mac-address}
            set ap-sniffer-bufsize {integer}
            set ap-sniffer-chan {integer}
            set ap-sniffer-chan-width [320MHz|240MHz|...]
            set ap-sniffer-ctl [enable|disable]
            set ap-sniffer-data [enable|disable]
            set ap-sniffer-mgmt-beacon [enable|disable]
            set ap-sniffer-mgmt-other [enable|disable]
            set ap-sniffer-mgmt-probe [enable|disable]
            set arrp-profile {string}
            set auto-power-high {integer}
            set auto-power-level [enable|disable]
            set auto-power-low {integer}
            set auto-power-target {string}
            set band {option1}, {option2}, ...
            set band-5g-type [5g-full|5g-high|...]
            set bandwidth-admission-control [enable|disable]
            set bandwidth-capacity {integer}
            set beacon-interval {integer}
            set bss-color {integer}
            set bss-color-mode [auto|static]
            set call-admission-control [enable|disable]
            set call-capacity {integer}
            set cca-threshold {string}
            set channel <chan1>, <chan2>, ...
            set channel-bonding [320MHz|240MHz|...]
            set channel-bonding-ext [320MHz-1|320MHz-2]
            set channel-utilization [enable|disable]
            set coexistence [enable|disable]
            set darrp [enable|disable]
            set drma [disable|enable]
            set drma-sensitivity [low|medium|...]
            set dtim {integer}
            set frag-threshold {integer}
            set iperf-protocol [udp|tcp]
            set iperf-server-port {integer}
            set max-clients {integer}
            set max-distance {integer}
            set mimo-mode [default|1x1|...]
            set mode [disabled|ap|...]
            set optional-antenna [none|custom|...]
            set optional-antenna-gain {string}
            set power-level {integer}
            set power-mode [dBm|percentage]
            set power-value {integer}
            set powersave-optimize {option1}, {option2}, ...
            set protection-mode [rtscts|ctsonly|...]
            set rts-threshold {integer}
            set sam-bssid {mac-address}
            set sam-ca-certificate {string}
            set sam-captive-portal [enable|disable]
            set sam-client-certificate {string}
            set sam-cwp-failure-string {string}
            set sam-cwp-match-string {string}
            set sam-cwp-password {password}
            set sam-cwp-success-string {string}
            set sam-cwp-test-url {string}
            set sam-cwp-username {string}
            set sam-eap-method [both|tls|...]
            set sam-password {password}
            set sam-private-key {string}
            set sam-private-key-password {password}
            set sam-report-intv {integer}
            set sam-security-type [open|wpa-personal|...]
            set sam-server-fqdn {string}
            set sam-server-ip {ipv4-address}
            set sam-server-type [ip|fqdn]
            set sam-ssid {string}
            set sam-test [ping|iperf]
            set sam-username {string}
            set short-guard-interval [enable|disable]
            set transmit-optimize {option1}, {option2}, ...
            set vap-all [tunnel|bridge|...]
            set vap-status [enable|disable]
            set vaps <name1>, <name2>, ...
            set wids-profile {string}
            set zero-wait-dfs [enable|disable]
        end
        config radio-3
            Description: Configuration options for radio 3.
            set 80211d [enable|disable]
            set 80211mc [enable|disable]
            set ai-darrp-support [enable|disable]
            set airtime-fairness [enable|disable]
            set amsdu [enable|disable]
            set ap-sniffer-addr {mac-address}
            set ap-sniffer-bufsize {integer}
            set ap-sniffer-chan {integer}
            set ap-sniffer-chan-width [320MHz|240MHz|...]
            set ap-sniffer-ctl [enable|disable]
            set ap-sniffer-data [enable|disable]
            set ap-sniffer-mgmt-beacon [enable|disable]
            set ap-sniffer-mgmt-other [enable|disable]
            set ap-sniffer-mgmt-probe [enable|disable]
            set arrp-profile {string}
            set auto-power-high {integer}
            set auto-power-level [enable|disable]
            set auto-power-low {integer}
            set auto-power-target {string}
            set band {option1}, {option2}, ...
            set band-5g-type [5g-full|5g-high|...]
            set bandwidth-admission-control [enable|disable]
            set bandwidth-capacity {integer}
            set beacon-interval {integer}
            set bss-color {integer}
            set bss-color-mode [auto|static]
            set call-admission-control [enable|disable]
            set call-capacity {integer}
            set cca-threshold {string}
            set channel <chan1>, <chan2>, ...
            set channel-bonding [320MHz|240MHz|...]
            set channel-bonding-ext [320MHz-1|320MHz-2]
            set channel-utilization [enable|disable]
            set coexistence [enable|disable]
            set darrp [enable|disable]
            set drma [disable|enable]
            set drma-sensitivity [low|medium|...]
            set dtim {integer}
            set frag-threshold {integer}
            set iperf-protocol [udp|tcp]
            set iperf-server-port {integer}
            set max-clients {integer}
            set max-distance {integer}
            set mimo-mode [default|1x1|...]
            set mode [disabled|ap|...]
            set optional-antenna [none|custom|...]
            set optional-antenna-gain {string}
            set power-level {integer}
            set power-mode [dBm|percentage]
            set power-value {integer}
            set powersave-optimize {option1}, {option2}, ...
            set protection-mode [rtscts|ctsonly|...]
            set rts-threshold {integer}
            set sam-bssid {mac-address}
            set sam-ca-certificate {string}
            set sam-captive-portal [enable|disable]
            set sam-client-certificate {string}
            set sam-cwp-failure-string {string}
            set sam-cwp-match-string {string}
            set sam-cwp-password {password}
            set sam-cwp-success-string {string}
            set sam-cwp-test-url {string}
            set sam-cwp-username {string}
            set sam-eap-method [both|tls|...]
            set sam-password {password}
            set sam-private-key {string}
            set sam-private-key-password {password}
            set sam-report-intv {integer}
            set sam-security-type [open|wpa-personal|...]
            set sam-server-fqdn {string}
            set sam-server-ip {ipv4-address}
            set sam-server-type [ip|fqdn]
            set sam-ssid {string}
            set sam-test [ping|iperf]
            set sam-username {string}
            set short-guard-interval [enable|disable]
            set transmit-optimize {option1}, {option2}, ...
            set vap-all [tunnel|bridge|...]
            set vap-status [enable|disable]
            set vaps <name1>, <name2>, ...
            set wids-profile {string}
            set zero-wait-dfs [enable|disable]
        end
        config radio-4
            Description: Configuration options for radio 4.
            set 80211d [enable|disable]
            set 80211mc [enable|disable]
            set ai-darrp-support [enable|disable]
            set airtime-fairness [enable|disable]
            set amsdu [enable|disable]
            set ap-sniffer-addr {mac-address}
            set ap-sniffer-bufsize {integer}
            set ap-sniffer-chan {integer}
            set ap-sniffer-chan-width [320MHz|240MHz|...]
            set ap-sniffer-ctl [enable|disable]
            set ap-sniffer-data [enable|disable]
            set ap-sniffer-mgmt-beacon [enable|disable]
            set ap-sniffer-mgmt-other [enable|disable]
            set ap-sniffer-mgmt-probe [enable|disable]
            set arrp-profile {string}
            set auto-power-high {integer}
            set auto-power-level [enable|disable]
            set auto-power-low {integer}
            set auto-power-target {string}
            set band {option1}, {option2}, ...
            set band-5g-type [5g-full|5g-high|...]
            set bandwidth-admission-control [enable|disable]
            set bandwidth-capacity {integer}
            set beacon-interval {integer}
            set bss-color {integer}
            set bss-color-mode [auto|static]
            set call-admission-control [enable|disable]
            set call-capacity {integer}
            set cca-threshold {string}
            set channel <chan1>, <chan2>, ...
            set channel-bonding [320MHz|240MHz|...]
            set channel-bonding-ext [320MHz-1|320MHz-2]
            set channel-utilization [enable|disable]
            set coexistence [enable|disable]
            set darrp [enable|disable]
            set drma [disable|enable]
            set drma-sensitivity [low|medium|...]
            set dtim {integer}
            set frag-threshold {integer}
            set iperf-protocol [udp|tcp]
            set iperf-server-port {integer}
            set max-clients {integer}
            set max-distance {integer}
            set mimo-mode [default|1x1|...]
            set mode [disabled|ap|...]
            set optional-antenna [none|custom|...]
            set optional-antenna-gain {string}
            set power-level {integer}
            set power-mode [dBm|percentage]
            set power-value {integer}
            set powersave-optimize {option1}, {option2}, ...
            set protection-mode [rtscts|ctsonly|...]
            set rts-threshold {integer}
            set sam-bssid {mac-address}
            set sam-ca-certificate {string}
            set sam-captive-portal [enable|disable]
            set sam-client-certificate {string}
            set sam-cwp-failure-string {string}
            set sam-cwp-match-string {string}
            set sam-cwp-password {password}
            set sam-cwp-success-string {string}
            set sam-cwp-test-url {string}
            set sam-cwp-username {string}
            set sam-eap-method [both|tls|...]
            set sam-password {password}
            set sam-private-key {string}
            set sam-private-key-password {password}
            set sam-report-intv {integer}
            set sam-security-type [open|wpa-personal|...]
            set sam-server-fqdn {string}
            set sam-server-ip {ipv4-address}
            set sam-server-type [ip|fqdn]
            set sam-ssid {string}
            set sam-test [ping|iperf]
            set sam-username {string}
            set short-guard-interval [enable|disable]
            set transmit-optimize {option1}, {option2}, ...
            set vap-all [tunnel|bridge|...]
            set vap-status [enable|disable]
            set vaps <name1>, <name2>, ...
            set wids-profile {string}
            set zero-wait-dfs [enable|disable]
        end
        config split-tunneling-acl
            Description: Split tunneling ACL filter list.
            edit <id>
                set dest-ip {ipv4-classnet}
            next
        end
        set split-tunneling-acl-local-ap-subnet [enable|disable]
        set split-tunneling-acl-path [tunnel|local]
        set syslog-profile {string}
        set tun-mtu-downlink {integer}
        set tun-mtu-uplink {integer}
        set unii-4-5ghz-band [enable|disable]
        set usb-port [enable|disable]
        set wan-port-auth [none|802.1x]
        set wan-port-auth-macsec [enable|disable]
        set wan-port-auth-methods [all|EAP-FAST|...]
        set wan-port-auth-password {password}
        set wan-port-auth-usrname {string}
        set wan-port-mode [wan-lan|wan-only]
    next
end
```

## Parameters

+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| Parameter                             | Description                                                               | Type                   | Size                   | Default                    |
+=======================================+===========================================================================+========================+========================+============================+
| 80211mc-mode \*                       | Set 802.11mc mode of the AP (default = auto).                             | option                 | \-                     | auto                       |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | Option      | Description                                            |                                                                                 |
|                                       | +=============+========================================================+                                                                                 |
|                                       | | *auto*      | Set AP 802.11mc automatically with LOWI.               |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *initiator* | Set AP 802.11mc in initiator mode.                     |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *responder* | Set AP 802.11mc in responder mode.                     |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| admin-auth-tacacs+                    | Remote authentication server for admin user.                              | string                 | Maximum length: 35     |                            |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| admin-restrict-local                  | Enable/disable local admin authentication restriction when remote         | option                 | \-                     | disable                    |
|                                       | authenticator is up and running (default = disable).                      |                        |                        |                            |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | Option      | Description                                            |                                                                                 |
|                                       | +=============+========================================================+                                                                                 |
|                                       | | *enable*    | Enable local admin authentication restriction.         |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *disable*   | Diable local admin authentication restriction.         |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| allowaccess                           | Control management access to the managed WTP, FortiAP, or AP. Separate    | option                 | \-                     |                            |
|                                       | entries with a space.                                                     |                        |                        |                            |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | Option      | Description                                            |                                                                                 |
|                                       | +=============+========================================================+                                                                                 |
|                                       | | *https*     | HTTPS access.                                          |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *ssh*       | SSH access.                                            |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *snmp*      | SNMP access.                                           |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| ap-country                            | Country in which this WTP, FortiAP, or AP will operate (default = NA,     | option                 | \-                     | \--                        |
|                                       | automatically use the country configured for the current VDOM).           |                        |                        |                            |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | Option      | Description                                            |                                                                                 |
|                                       | +=============+========================================================+                                                                                 |
|                                       | | *\--*       | NO_COUNTRY_SET                                         |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *AF*        | AFGHANISTAN                                            |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *AL*        | ALBANIA                                                |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *DZ*        | ALGERIA                                                |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *AS*        | AMERICAN SAMOA                                         |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *AO*        | ANGOLA                                                 |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *AR*        | ARGENTINA                                              |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *AM*        | ARMENIA                                                |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *AU*        | AUSTRALIA                                              |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *AT*        | AUSTRIA                                                |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *AZ*        | AZERBAIJAN                                             |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *BS*        | BAHAMAS                                                |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *BH*        | BAHRAIN                                                |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *BD*        | BANGLADESH                                             |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *BB*        | BARBADOS                                               |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *BY*        | BELARUS                                                |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *BE*        | BELGIUM                                                |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *BZ*        | BELIZE                                                 |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *BJ*        | BENIN                                                  |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *BM*        | BERMUDA                                                |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *BT*        | BHUTAN                                                 |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *BO*        | BOLIVIA                                                |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *BA*        | BOSNIA AND HERZEGOVINA                                 |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *BW*        | BOTSWANA                                               |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *BR*        | BRAZIL                                                 |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *BN*        | BRUNEI DARUSSALAM                                      |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *BG*        | BULGARIA                                               |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *BF*        | BURKINA-FASO                                           |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *KH*        | CAMBODIA                                               |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *CM*        | CAMEROON                                               |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *KY*        | CAYMAN ISLANDS                                         |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *CF*        | CENTRAL AFRICA REPUBLIC                                |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *TD*        | CHAD                                                   |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *CL*        | CHILE                                                  |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *CN*        | CHINA                                                  |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *CX*        | CHRISTMAS ISLAND                                       |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *CO*        | COLOMBIA                                               |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *CG*        | CONGO REPUBLIC                                         |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *CD*        | DEMOCRATIC REPUBLIC OF CONGO                           |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *CR*        | COSTA RICA                                             |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *HR*        | CROATIA                                                |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *CY*        | CYPRUS                                                 |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *CZ*        | CZECH REPUBLIC                                         |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *DK*        | DENMARK                                                |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *DJ*        | DJIBOUTI                                               |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *DM*        | DOMINICA                                               |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *DO*        | DOMINICAN REPUBLIC                                     |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *EC*        | ECUADOR                                                |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *EG*        | EGYPT                                                  |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *SV*        | EL SALVADOR                                            |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *ET*        | ETHIOPIA                                               |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *EE*        | ESTONIA                                                |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *GF*        | FRENCH GUIANA                                          |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *PF*        | FRENCH POLYNESIA                                       |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *FO*        | FAEROE ISLANDS                                         |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *FJ*        | FIJI                                                   |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *FI*        | FINLAND                                                |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *FR*        | FRANCE                                                 |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *GA*        | GABON                                                  |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *GE*        | GEORGIA                                                |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *GM*        | GAMBIA                                                 |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *DE*        | GERMANY                                                |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *GH*        | GHANA                                                  |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *GI*        | GIBRALTAR                                              |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *GR*        | GREECE                                                 |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *GL*        | GREENLAND                                              |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *GD*        | GRENADA                                                |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *GP*        | GUADELOUPE                                             |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *GU*        | GUAM                                                   |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *GT*        | GUATEMALA                                              |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *GY*        | GUYANA                                                 |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *HT*        | HAITI                                                  |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *HN*        | HONDURAS                                               |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *HK*        | HONG KONG                                              |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *HU*        | HUNGARY                                                |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *IS*        | ICELAND                                                |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *IN*        | INDIA                                                  |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *ID*        | INDONESIA                                              |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *IQ*        | IRAQ                                                   |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *IE*        | IRELAND                                                |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *IM*        | ISLE OF MAN                                            |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *IL*        | ISRAEL                                                 |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *IT*        | ITALY                                                  |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *CI*        | COTE_D_IVOIRE                                          |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *JM*        | JAMAICA                                                |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *JO*        | JORDAN                                                 |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *KZ*        | KAZAKHSTAN                                             |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *KE*        | KENYA                                                  |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *KR*        | KOREA REPUBLIC                                         |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *KW*        | KUWAIT                                                 |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *LA*        | LAOS                                                   |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *LV*        | LATVIA                                                 |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *LB*        | LEBANON                                                |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *LS*        | LESOTHO                                                |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *LR*        | LIBERIA                                                |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *LY*        | LIBYA                                                  |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *LI*        | LIECHTENSTEIN                                          |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *LT*        | LITHUANIA                                              |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *LU*        | LUXEMBOURG                                             |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *MO*        | MACAU SAR                                              |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *MK*        | MACEDONIA, FYRO                                        |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *MG*        | MADAGASCAR                                             |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *MW*        | MALAWI                                                 |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *MY*        | MALAYSIA                                               |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *MV*        | MALDIVES                                               |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *ML*        | MALI                                                   |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *MT*        | MALTA                                                  |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *MH*        | MARSHALL ISLANDS                                       |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *MQ*        | MARTINIQUE                                             |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *MR*        | MAURITANIA                                             |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *MU*        | MAURITIUS                                              |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *YT*        | MAYOTTE                                                |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *MX*        | MEXICO                                                 |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *FM*        | MICRONESIA                                             |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *MD*        | REPUBLIC OF MOLDOVA                                    |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *MC*        | MONACO                                                 |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *MN*        | MONGOLIA                                               |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *MA*        | MOROCCO                                                |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *MZ*        | MOZAMBIQUE                                             |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *MM*        | MYANMAR                                                |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *NA*        | NAMIBIA                                                |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *NP*        | NEPAL                                                  |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *NL*        | NETHERLANDS                                            |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *AN*        | NETHERLANDS ANTILLES                                   |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *AW*        | ARUBA                                                  |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *NZ*        | NEW ZEALAND                                            |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *NI*        | NICARAGUA                                              |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *NE*        | NIGER                                                  |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *NG*        | NIGERIA                                                |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *NO*        | NORWAY                                                 |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *MP*        | NORTHERN MARIANA ISLANDS                               |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *OM*        | OMAN                                                   |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *PK*        | PAKISTAN                                               |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *PW*        | PALAU                                                  |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *PA*        | PANAMA                                                 |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *PG*        | PAPUA NEW GUINEA                                       |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *PY*        | PARAGUAY                                               |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *PE*        | PERU                                                   |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *PH*        | PHILIPPINES                                            |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *PL*        | POLAND                                                 |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *PT*        | PORTUGAL                                               |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *PR*        | PUERTO RICO                                            |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *QA*        | QATAR                                                  |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *RE*        | REUNION                                                |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *RO*        | ROMANIA                                                |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *RU*        | RUSSIA                                                 |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *RW*        | RWANDA                                                 |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *BL*        | SAINT BARTHELEMY                                       |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *KN*        | SAINT KITTS AND NEVIS                                  |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *LC*        | SAINT LUCIA                                            |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *MF*        | SAINT MARTIN                                           |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *PM*        | SAINT PIERRE AND MIQUELON                              |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *VC*        | SAINT VINCENT AND GRENADIENS                           |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *SA*        | SAUDI ARABIA                                           |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *SN*        | SENEGAL                                                |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *RS*        | REPUBLIC OF SERBIA                                     |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *ME*        | MONTENEGRO                                             |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *SL*        | SIERRA LEONE                                           |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *SG*        | SINGAPORE                                              |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *SK*        | SLOVAKIA                                               |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *SI*        | SLOVENIA                                               |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *SO*        | SOMALIA                                                |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *ZA*        | SOUTH AFRICA                                           |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *ES*        | SPAIN                                                  |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *LK*        | SRI LANKA                                              |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *SR*        | SURINAME                                               |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *SZ*        | SWAZILAND                                              |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *SE*        | SWEDEN                                                 |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *CH*        | SWITZERLAND                                            |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *TW*        | TAIWAN                                                 |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *TZ*        | TANZANIA                                               |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *TH*        | THAILAND                                               |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *TL*        | TIMOR-LESTE                                            |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *TG*        | TOGO                                                   |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *TT*        | TRINIDAD AND TOBAGO                                    |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *TN*        | TUNISIA                                                |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *TR*        | TURKEY                                                 |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *TM*        | TURKMENISTAN                                           |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *AE*        | UNITED ARAB EMIRATES                                   |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *TC*        | TURKS AND CAICOS                                       |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *UG*        | UGANDA                                                 |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *UA*        | UKRAINE                                                |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *GB*        | UNITED KINGDOM                                         |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *US*        | UNITED STATES                                          |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *PS*        | UNITED STATES (PUBLIC SAFETY)                          |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *UY*        | URUGUAY                                                |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *UZ*        | UZBEKISTAN                                             |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *VU*        | VANUATU                                                |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *VE*        | VENEZUELA                                              |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *VN*        | VIET NAM                                               |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *VI*        | VIRGIN ISLANDS                                         |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *WF*        | WALLIS AND FUTUNA                                      |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *YE*        | YEMEN                                                  |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *ZM*        | ZAMBIA                                                 |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *ZW*        | ZIMBABWE                                               |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *JP*        | JAPAN                                                  |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *CA*        | CANADA                                                 |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| ap-handoff                            | Enable/disable AP handoff of clients to other APs (default = disable).    | option                 | \-                     | disable                    |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | Option      | Description                                            |                                                                                 |
|                                       | +=============+========================================================+                                                                                 |
|                                       | | *enable*    | Enable AP handoff.                                     |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *disable*   | Disable AP handoff.                                    |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| apcfg-auto-cert                       | Enable/disable AP local auto cert configuration (default = disable).      | option                 | \-                     | disable                    |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | Option      | Description                                            |                                                                                 |
|                                       | +=============+========================================================+                                                                                 |
|                                       | | *enable*    | Enable AP local auto cert configuration.               |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *disable*   | Disable AP local auto cert configuration.              |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| apcfg-auto-cert-auto-regen-days       | Number of days to wait before expiry of an updated local certificate is   | integer                | Minimum value: 0       | 30                         |
|                                       | requested (0 = disabled) (default = 30).                                  |                        | Maximum value:         |                            |
|                                       |                                                                           |                        | 4294967295             |                            |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| apcfg-auto-cert-crypto-algo           | Cryptography algorithm: rsa-1024, rsa-1536, rsa-2048, rsa-4096,           | option                 | \-                     | ec-secp256r1               |
|                                       | ec-secp256r1, ec-secp384r1, ec-secp521r1 (default = ec-secp256r1)         |                        |                        |                            |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
|                                       | +----------------+--------------------------------------------------------+                                                                              |
|                                       | | Option         | Description                                            |                                                                              |
|                                       | +================+========================================================+                                                                              |
|                                       | | *rsa-1024*     | Cryptography algorithm rsa-1024.                       |                                                                              |
|                                       | +----------------+--------------------------------------------------------+                                                                              |
|                                       | | *rsa-1536*     | Cryptography algorithm rsa-1536.                       |                                                                              |
|                                       | +----------------+--------------------------------------------------------+                                                                              |
|                                       | | *rsa-2048*     | Cryptography algorithm rsa-2048.                       |                                                                              |
|                                       | +----------------+--------------------------------------------------------+                                                                              |
|                                       | | *rsa-4096*     | Cryptography algorithm rsa-4096.                       |                                                                              |
|                                       | +----------------+--------------------------------------------------------+                                                                              |
|                                       | | *ec-secp256r1* | Cryptography algorithm ec-secp256r1.                   |                                                                              |
|                                       | +----------------+--------------------------------------------------------+                                                                              |
|                                       | | *ec-secp384r1* | Cryptography algorithm ec-secp384r1.                   |                                                                              |
|                                       | +----------------+--------------------------------------------------------+                                                                              |
|                                       | | *ec-secp521r1* | Cryptography algorithm ec-secp521r1.                   |                                                                              |
|                                       | +----------------+--------------------------------------------------------+                                                                              |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| apcfg-auto-cert-enroll-protocol       | Certificate enrollment protocol (default = none)                          | option                 | \-                     | none                       |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | Option      | Description                                            |                                                                                 |
|                                       | +=============+========================================================+                                                                                 |
|                                       | | *none*      | None (default).                                        |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *est*       | Enrollment over Secure Transport.                      |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *scep*      | Simple Certificate Enrollment Protocol.                |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| apcfg-auto-cert-est-ca-id             | CA identifier of the CA server for signing via EST.                       | string                 | Maximum length: 255    |                            |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| apcfg-auto-cert-est-http-password     | HTTP Authentication password for signing via EST.                         | password               | Not Specified          |                            |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| apcfg-auto-cert-est-http-username     | HTTP Authentication username for signing via EST.                         | string                 | Maximum length: 63     |                            |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| apcfg-auto-cert-est-https-ca          | PEM format https CA Certificate.                                          | string                 | Maximum length: 79     |                            |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| apcfg-auto-cert-est-server            | Address and port for EST server (e.g. https://example.com:1234).          | string                 | Maximum length: 255    |                            |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| apcfg-auto-cert-est-subject           | Subject e.g. \"CN=User,DC=example,DC=COM\" (default =                     | string                 | Maximum length: 127    | CN=FortiAP,DC=local,DC=COM |
|                                       | CN=FortiAP,DC=local,DC=COM)                                               |                        |                        |                            |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| apcfg-auto-cert-est-subject-alt-name  | Subject alternative name (optional, e.g.                                  | string                 | Maximum length: 127    |                            |
|                                       | \"DNS:dns1.com,IP:192.168.1.99\")                                         |                        |                        |                            |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| apcfg-auto-cert-scep-ca-id            | CA identifier of the CA server for signing via SCEP.                      | string                 | Maximum length: 255    |                            |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| apcfg-auto-cert-scep-ec-name          | Elliptic curve name: secp256r1, secp384r1 and secp521r1. (default         | option                 | \-                     | secp256r1                  |
|                                       | secp256r1).                                                               |                        |                        |                            |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | Option      | Description                                            |                                                                                 |
|                                       | +=============+========================================================+                                                                                 |
|                                       | | *secp256r1* | Elliptic curve name secp256r1.                         |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *secp384r1* | Elliptic curve name secp384r1.                         |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *secp521r1* | Elliptic curve name secp521r1.                         |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| apcfg-auto-cert-scep-https-ca         | PEM format https CA Certificate.                                          | string                 | Maximum length: 79     |                            |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| apcfg-auto-cert-scep-keysize          | Key size: 1024, 1536, 2048, 4096 (default 2048).                          | option                 | \-                     | 2048                       |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | Option      | Description                                            |                                                                                 |
|                                       | +=============+========================================================+                                                                                 |
|                                       | | *1024*      | keysize 1024.                                          |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *1536*      | keysize 1536.                                          |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *2048*      | keysize 2048.                                          |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *4096*      | keysize 4096.                                          |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| apcfg-auto-cert-scep-keytype          | Key type (default = rsa)                                                  | option                 | \-                     | rsa                        |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | Option      | Description                                            |                                                                                 |
|                                       | +=============+========================================================+                                                                                 |
|                                       | | *rsa*       | Generate a RSA certificate request.                    |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *ec*        | Generate an elliptic curve certificate request.        |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| apcfg-auto-cert-scep-password         | SCEP server challenge password for auto-regeneration.                     | password               | Not Specified          |                            |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| apcfg-auto-cert-scep-sub-fully-dn     | Full DN of the subject (e.g                                               | string                 | Maximum length: 255    |                            |
|                                       | C=US,ST=CA,L=Sunnyvale,O=Fortinet,OU=Dep1,emailAddress=test@example.com). |                        |                        |                            |
|                                       | There should be no space in between the attributes. Supported DN          |                        |                        |                            |
|                                       | attributes (case-sensitive) are:C,ST,L,O,OU,emailAddress. The CN defaults |                        |                        |                            |
|                                       | to the device's SN and cannot be changed.                                 |                        |                        |                            |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| apcfg-auto-cert-scep-subject-alt-name | Subject alternative name (optional, e.g.                                  | string                 | Maximum length: 127    |                            |
|                                       | \"DNS:dns1.com,IP:192.168.1.99\")                                         |                        |                        |                            |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| apcfg-auto-cert-scep-url              | SCEP server URL.                                                          | string                 | Maximum length: 255    |                            |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| apcfg-mesh                            | Enable/disable AP local mesh configuration (default = disable).           | option                 | \-                     | disable                    |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | Option      | Description                                            |                                                                                 |
|                                       | +=============+========================================================+                                                                                 |
|                                       | | *enable*    | Enable AP local mesh configuration.                    |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *disable*   | Disable AP local mesh configuration.                   |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| apcfg-mesh-ap-type                    | Mesh AP Type (default = ethernet).                                        | option                 | \-                     | ethernet                   |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | Option      | Description                                            |                                                                                 |
|                                       | +=============+========================================================+                                                                                 |
|                                       | | *ethernet*  | Use ethernet uplink.                                   |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *mesh*      | Use mesh uplink.                                       |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *auto*      | Ethernet with mesh backup support.                     |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| apcfg-mesh-eth-bridge                 | Enable/disable mesh ethernet bridge (default = disable).                  | option                 | \-                     | disable                    |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | Option      | Description                                            |                                                                                 |
|                                       | +=============+========================================================+                                                                                 |
|                                       | | *enable*    | Enable AP local mesh eth bridge configuration.         |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *disable*   | Disable AP local mesh eth bridge configuration.        |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| apcfg-mesh-ssid                       | Mesh SSID (default = none).                                               | string                 | Maximum length: 15     |                            |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| apcfg-profile                         | AP local configuration profile name.                                      | string                 | Maximum length: 35     |                            |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| ble-profile                           | Bluetooth Low Energy profile name.                                        | string                 | Maximum length: 35     |                            |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| bonjour-profile                       | Bonjour profile name.                                                     | string                 | Maximum length: 35     |                            |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| comment                               | Comment.                                                                  | var-string             | Maximum length: 255    |                            |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| console-login                         | Enable/disable FortiAP console login access (default = enable).           | option                 | \-                     | enable                     |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | Option      | Description                                            |                                                                                 |
|                                       | +=============+========================================================+                                                                                 |
|                                       | | *enable*    | Enable FAP console login access.                       |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *disable*   | Disable FAP console login access.                      |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| control-message-offload               | Enable/disable CAPWAP control message data channel offload.               | option                 | \-                     | ebp-frame aeroscout-tag    |
|                                       |                                                                           |                        |                        | ap-list sta-list           |
|                                       |                                                                           |                        |                        | sta-cap-list stats         |
|                                       |                                                                           |                        |                        | aeroscout-mu sta-health    |
|                                       |                                                                           |                        |                        | spectral-analysis          |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
|                                       | +---------------------+--------------------------------------------------------+                                                                         |
|                                       | | Option              | Description                                            |                                                                         |
|                                       | +=====================+========================================================+                                                                         |
|                                       | | *ebp-frame*         | Ekahau blink protocol (EBP) frames.                    |                                                                         |
|                                       | +---------------------+--------------------------------------------------------+                                                                         |
|                                       | | *aeroscout-tag*     | AeroScout tag.                                         |                                                                         |
|                                       | +---------------------+--------------------------------------------------------+                                                                         |
|                                       | | *ap-list*           | Rogue AP list.                                         |                                                                         |
|                                       | +---------------------+--------------------------------------------------------+                                                                         |
|                                       | | *sta-list*          | Rogue STA list.                                        |                                                                         |
|                                       | +---------------------+--------------------------------------------------------+                                                                         |
|                                       | | *sta-cap-list*      | STA capability list.                                   |                                                                         |
|                                       | +---------------------+--------------------------------------------------------+                                                                         |
|                                       | | *stats*             | WTP, radio, VAP, and STA statistics.                   |                                                                         |
|                                       | +---------------------+--------------------------------------------------------+                                                                         |
|                                       | | *aeroscout-mu*      | AeroScout Mobile Unit (MU) report.                     |                                                                         |
|                                       | +---------------------+--------------------------------------------------------+                                                                         |
|                                       | | *sta-health*        | STA health log.                                        |                                                                         |
|                                       | +---------------------+--------------------------------------------------------+                                                                         |
|                                       | | *spectral-analysis* | Spectral analysis report.                              |                                                                         |
|                                       | +---------------------+--------------------------------------------------------+                                                                         |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| default-mesh-root                     | Configure default mesh root SSID when it is not included by radio\'s SSID | option                 | \-                     | disable                    |
|                                       | configuration.                                                            |                        |                        |                            |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | Option      | Description                                            |                                                                                 |
|                                       | +=============+========================================================+                                                                                 |
|                                       | | *enable*    | Enable default mesh root SSID if it is not included by |                                                                                 |
|                                       | |             | radio\'s SSID configuration.                           |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *disable*   | Do not enable default mesh root SSID if it is not      |                                                                                 |
|                                       | |             | included by radio\'s SSID configuration.               |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| dtls-in-kernel                        | Enable/disable data channel DTLS in kernel.                               | option                 | \-                     | disable                    |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | Option      | Description                                            |                                                                                 |
|                                       | +=============+========================================================+                                                                                 |
|                                       | | *enable*    | Enable data channel DTLS in kernel.                    |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *disable*   | Disable data channel DTLS in kernel.                   |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| dtls-policy                           | WTP data channel DTLS policy (default = clear-text).                      | option                 | \-                     | clear-text                 |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
|                                       | +----------------+--------------------------------------------------------+                                                                              |
|                                       | | Option         | Description                                            |                                                                              |
|                                       | +================+========================================================+                                                                              |
|                                       | | *clear-text*   | Clear Text Data Channel.                               |                                                                              |
|                                       | +----------------+--------------------------------------------------------+                                                                              |
|                                       | | *dtls-enabled* | DTLS Enabled Data Channel.                             |                                                                              |
|                                       | +----------------+--------------------------------------------------------+                                                                              |
|                                       | | *ipsec-vpn*    | IPsec VPN Data Channel.                                |                                                                              |
|                                       | +----------------+--------------------------------------------------------+                                                                              |
|                                       | | *ipsec-sn-vpn* | IPsec VPN Data Channel with FortiAP\'s SN in the first |                                                                              |
|                                       | |                | IKE messages.                                          |                                                                              |
|                                       | +----------------+--------------------------------------------------------+                                                                              |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| energy-efficient-ethernet             | Enable/disable use of energy efficient Ethernet on WTP.                   | option                 | \-                     | disable                    |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | Option      | Description                                            |                                                                                 |
|                                       | +=============+========================================================+                                                                                 |
|                                       | | *enable*    | Enable use of energy efficient Ethernet on WTP.        |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *disable*   | Disable use of energy efficient Ethernet on WTP.       |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| ext-info-enable                       | Enable/disable station/VAP/radio extension information.                   | option                 | \-                     | enable                     |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | Option      | Description                                            |                                                                                 |
|                                       | +=============+========================================================+                                                                                 |
|                                       | | *enable*    | Enable station/VAP/radio extension information.        |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *disable*   | Disable station/VAP/radio extension information.       |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| frequency-handoff                     | Enable/disable frequency handoff of clients to other channels (default =  | option                 | \-                     | disable                    |
|                                       | disable).                                                                 |                        |                        |                            |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | Option      | Description                                            |                                                                                 |
|                                       | +=============+========================================================+                                                                                 |
|                                       | | *enable*    | Enable frequency handoff.                              |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *disable*   | Disable frequency handoff.                             |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| handoff-roaming                       | Enable/disable client load balancing during roaming to avoid roaming      | option                 | \-                     | enable                     |
|                                       | delay (default = enable).                                                 |                        |                        |                            |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | Option      | Description                                            |                                                                                 |
|                                       | +=============+========================================================+                                                                                 |
|                                       | | *enable*    | Enable handoff roaming.                                |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *disable*   | Disable handoff roaming.                               |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| handoff-rssi                          | Minimum received signal strength indicator (RSSI) value for handoff (20 - | integer                | Minimum value: 20      | 25                         |
|                                       | 30, default = 25).                                                        |                        | Maximum value: 30      |                            |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| handoff-sta-thresh                    | Threshold value for AP handoff.                                           | integer                | Minimum value: 5       | 0                          |
|                                       |                                                                           |                        | Maximum value: 60      |                            |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| indoor-outdoor-deployment             | Set to allow indoor/outdoor-only channels under regulatory rules (default | option                 | \-                     | platform-determined        |
|                                       | = platform-determined).                                                   |                        |                        |                            |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
|                                       | +-----------------------+--------------------------------------------------------+                                                                       |
|                                       | | Option                | Description                                            |                                                                       |
|                                       | +=======================+========================================================+                                                                       |
|                                       | | *platform-determined* | Set AP deployment type based on its platform.          |                                                                       |
|                                       | +-----------------------+--------------------------------------------------------+                                                                       |
|                                       | | *outdoor*             | Set AP deployment type to outdoor.                     |                                                                       |
|                                       | +-----------------------+--------------------------------------------------------+                                                                       |
|                                       | | *indoor*              | Set AP deployment type to indoor.                      |                                                                       |
|                                       | +-----------------------+--------------------------------------------------------+                                                                       |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| ip-fragment-preventing                | Method(s) by which IP fragmentation is prevented for control and data     | option                 | \-                     | tcp-mss-adjust             |
|                                       | packets through CAPWAP tunnel (default = tcp-mss-adjust).                 |                        |                        |                            |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
|                                       | +--------------------+--------------------------------------------------------+                                                                          |
|                                       | | Option             | Description                                            |                                                                          |
|                                       | +====================+========================================================+                                                                          |
|                                       | | *tcp-mss-adjust*   | TCP maximum segment size adjustment.                   |                                                                          |
|                                       | +--------------------+--------------------------------------------------------+                                                                          |
|                                       | | *icmp-unreachable* | Drop packet and send ICMP Destination Unreachable      |                                                                          |
|                                       | +--------------------+--------------------------------------------------------+                                                                          |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| ipsec-offload \*                      | Enable/disable data channel IPSec offloading (default = enable).          | option                 | \-                     | enable                     |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | Option      | Description                                            |                                                                                 |
|                                       | +=============+========================================================+                                                                                 |
|                                       | | *enable*    | Enable data channel IPSec offloading.                  |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *disable*   | Disable data channel IPSec offloading.                 |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| led-schedules `<name>`                | Recurring firewall schedules for illuminating LEDs on the FortiAP. If     | string                 | Maximum length: 35     |                            |
|                                       | led-state is enabled, LEDs will be visible when at least one of the       |                        |                        |                            |
|                                       | schedules is valid. Separate multiple schedule names with a space.        |                        |                        |                            |
|                                       |                                                                           |                        |                        |                            |
|                                       | Schedule name.                                                            |                        |                        |                            |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| led-state                             | Enable/disable use of LEDs on WTP (default = enable).                     | option                 | \-                     | enable                     |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | Option      | Description                                            |                                                                                 |
|                                       | +=============+========================================================+                                                                                 |
|                                       | | *enable*    | Enable use of LEDs on WTP.                             |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *disable*   | Disable use of LEDs on WTP.                            |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| lldp                                  | Enable/disable Link Layer Discovery Protocol (LLDP) for the WTP, FortiAP, | option                 | \-                     | enable                     |
|                                       | or AP (default = enable).                                                 |                        |                        |                            |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | Option      | Description                                            |                                                                                 |
|                                       | +=============+========================================================+                                                                                 |
|                                       | | *enable*    | Enable LLDP.                                           |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *disable*   | Disable LLDP.                                          |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| login-passwd                          | Set the managed WTP, FortiAP, or AP\'s administrator password.            | password               | Not Specified          |                            |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| login-passwd-change                   | Change or reset the administrator password of a managed WTP, FortiAP or   | option                 | \-                     | no                         |
|                                       | AP (yes, default, or no, default = no).                                   |                        |                        |                            |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | Option      | Description                                            |                                                                                 |
|                                       | +=============+========================================================+                                                                                 |
|                                       | | *yes*       | Change the managed WTP, FortiAP or AP\'s administrator |                                                                                 |
|                                       | |             | password. Use the login-password option to set the     |                                                                                 |
|                                       | |             | password.                                              |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *default*   | Keep the managed WTP, FortiAP or AP\'s administrator   |                                                                                 |
|                                       | |             | password set to the factory default.                   |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *no*        | Do not change the managed WTP, FortiAP or AP\'s        |                                                                                 |
|                                       | |             | administrator password.                                |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| lw-profile                            | LoRaWAN profile name.                                                     | string                 | Maximum length: 35     |                            |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| max-clients                           | Maximum number of stations (STAs) supported by the WTP (default = 0,      | integer                | Minimum value: 0       | 0                          |
|                                       | meaning no client limitation).                                            |                        | Maximum value:         |                            |
|                                       |                                                                           |                        | 4294967295             |                            |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| name                                  | WTP (or FortiAP or AP) profile name.                                      | string                 | Maximum length: 35     |                            |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| poe-mode                              | Set the WTP, FortiAP, or AP\'s PoE mode.                                  | option                 | \-                     | auto                       |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
|                                       | +-----------------+--------------------------------------------------------+                                                                             |
|                                       | | Option          | Description                                            |                                                                             |
|                                       | +=================+========================================================+                                                                             |
|                                       | | *auto*          | Automatically detect the PoE mode.                     |                                                                             |
|                                       | +-----------------+--------------------------------------------------------+                                                                             |
|                                       | | *8023af*        | Use 802.3af PoE mode.                                  |                                                                             |
|                                       | +-----------------+--------------------------------------------------------+                                                                             |
|                                       | | *8023at*        | Use 802.3at PoE mode.                                  |                                                                             |
|                                       | +-----------------+--------------------------------------------------------+                                                                             |
|                                       | | *power-adapter* | Use the power adapter to control the PoE mode.         |                                                                             |
|                                       | +-----------------+--------------------------------------------------------+                                                                             |
|                                       | | *full*          | Use full power mode.                                   |                                                                             |
|                                       | +-----------------+--------------------------------------------------------+                                                                             |
|                                       | | *high*          | Use high power mode.                                   |                                                                             |
|                                       | +-----------------+--------------------------------------------------------+                                                                             |
|                                       | | *high-pse*      | Use high power mode with PSE-OUT.                      |                                                                             |
|                                       | +-----------------+--------------------------------------------------------+                                                                             |
|                                       | | *low*           | Use low power mode.                                    |                                                                             |
|                                       | +-----------------+--------------------------------------------------------+                                                                             |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| split-tunneling-acl-local-ap-subnet   | Enable/disable automatically adding local subnetwork of FortiAP to        | option                 | \-                     | disable                    |
|                                       | split-tunneling ACL (default = disable).                                  |                        |                        |                            |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | Option      | Description                                            |                                                                                 |
|                                       | +=============+========================================================+                                                                                 |
|                                       | | *enable*    | Enable automatically adding local subnetwork of        |                                                                                 |
|                                       | |             | FortiAP to split-tunneling ACL.                        |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *disable*   | Disable automatically adding local subnetwork of       |                                                                                 |
|                                       | |             | FortiAP to split-tunneling ACL.                        |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| split-tunneling-acl-path              | Split tunneling ACL path is local/tunnel.                                 | option                 | \-                     | local                      |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | Option      | Description                                            |                                                                                 |
|                                       | +=============+========================================================+                                                                                 |
|                                       | | *tunnel*    | Split tunneling ACL list traffic will be tunnel.       |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *local*     | Split tunneling ACL list traffic will be local NATed.  |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| syslog-profile                        | System log server configuration profile name.                             | string                 | Maximum length: 35     |                            |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| tun-mtu-downlink                      | The MTU of downlink CAPWAP tunnel (576 - 1500 bytes or 0; 0 means the     | integer                | Minimum value: 576     | 0                          |
|                                       | local MTU of FortiAP; default = 0).                                       |                        | Maximum value: 1500    |                            |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| tun-mtu-uplink                        | The maximum transmission unit (MTU) of uplink CAPWAP tunnel (576 - 1500   | integer                | Minimum value: 576     | 0                          |
|                                       | bytes or 0; 0 means the local MTU of FortiAP; default = 0).               |                        | Maximum value: 1500    |                            |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| unii-4-5ghz-band                      | Enable/disable UNII-4 5Ghz band channels (default = disable).             | option                 | \-                     | disable                    |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | Option      | Description                                            |                                                                                 |
|                                       | +=============+========================================================+                                                                                 |
|                                       | | *enable*    | Enable UNII-4 5Ghz band channels.                      |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *disable*   | Disable UNII-4 5Ghz band channels.                     |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| usb-port                              | Enable/disable USB port of the WTP (default = enable).                    | option                 | \-                     | enable                     |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | Option      | Description                                            |                                                                                 |
|                                       | +=============+========================================================+                                                                                 |
|                                       | | *enable*    | Enable USB port.                                       |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *disable*   | Disable USB port.                                      |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| wan-port-auth                         | Set WAN port authentication mode (default = none).                        | option                 | \-                     | none                       |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | Option      | Description                                            |                                                                                 |
|                                       | +=============+========================================================+                                                                                 |
|                                       | | *none*      | Disable WAN port authentication.                       |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *802.1x*    | Enable WAN port 802.1x authentication.                 |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| wan-port-auth-macsec                  | Enable/disable WAN port 802.1x supplicant MACsec policy (default =        | option                 | \-                     | disable                    |
|                                       | disable).                                                                 |                        |                        |                            |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | Option      | Description                                            |                                                                                 |
|                                       | +=============+========================================================+                                                                                 |
|                                       | | *enable*    | Enable WAN port 802.1x supplicant MACsec policy.       |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *disable*   | Disable WAN port 802.1x supplicant MACsec policy.      |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| wan-port-auth-methods                 | WAN port 802.1x supplicant EAP methods (default = all).                   | option                 | \-                     | all                        |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | Option      | Description                                            |                                                                                 |
|                                       | +=============+========================================================+                                                                                 |
|                                       | | *all*       | Do not specify any EAP methods.                        |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *EAP-FAST*  | Enable EAP-FAST.                                       |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *EAP-TLS*   | Enable EAP-TLS.                                        |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *EAP-PEAP*  | Enable EAP-PEAP.                                       |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| wan-port-auth-password                | Set WAN port 802.1x supplicant password.                                  | password               | Not Specified          |                            |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| wan-port-auth-usrname                 | Set WAN port 802.1x supplicant user name.                                 | string                 | Maximum length: 63     |                            |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
| wan-port-mode                         | Enable/disable using a WAN port as a LAN port.                            | option                 | \-                     | wan-only                   |
+---------------------------------------+---------------------------------------------------------------------------+------------------------+------------------------+----------------------------+
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | Option      | Description                                            |                                                                                 |
|                                       | +=============+========================================================+                                                                                 |
|                                       | | *wan-lan*   | Enable using a WAN port as a LAN port.                 |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
|                                       | | *wan-only*  | Disable using a WAN port as a LAN port.                |                                                                                 |
|                                       | +-------------+--------------------------------------------------------+                                                                                 |
+---------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------+

