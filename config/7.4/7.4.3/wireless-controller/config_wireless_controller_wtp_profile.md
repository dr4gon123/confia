# config wireless-controller wtp-profile

Configure WTP profiles or FortiAP profiles that define radio settings for manageable FortiAP platforms.

## Syntax

```
config wireless-controller wtp-profile
    Description: Configure WTP profiles or FortiAP profiles that define radio settings for manageable FortiAP platforms.
    edit <name>
        set allowaccess {option1}, {option2}, ...
        set ap-country [--|AF|...]
        set ap-handoff [enable|disable]
        set apcfg-profile {string}
        set ble-profile {string}
        set bonjour-profile {string}
        set comment {var-string}
        set console-login [enable|disable]
        set control-message-offload {option1}, {option2}, ...
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
            set polestar [enable|disable]
            set polestar-accumulation-interval {integer}
            set polestar-asset-addrgrp-list {string}
            set polestar-asset-uuid-list1 {string}
            set polestar-asset-uuid-list2 {string}
            set polestar-asset-uuid-list3 {string}
            set polestar-asset-uuid-list4 {string}
            set polestar-protocol {option}
            set polestar-reporting-interval {integer}
            set polestar-server-fqdn {string}
            set polestar-server-path {string}
            set polestar-server-port {integer}
            set polestar-server-token {string}
            set station-locate [enable|disable]
        end
        set led-schedules <name1>, <name2>, ...
        set led-state [enable|disable]
        set lldp [enable|disable]
        set login-passwd {password}
        set login-passwd-change [yes|default|...]
        set max-clients {integer}
        config platform
            Description: WTP, FortiAP, or AP platform.
            set ddscan [enable|disable]
            set mode [single-5G|dual-5G]
            set type [AP-11N|C24JE|...]
        end
        set poe-mode [auto|8023af|...]
        config radio-1
            Description: Configuration options for radio 1.
            set 80211d [enable|disable]
            set airtime-fairness [enable|disable]
            set amsdu [enable|disable]
            set ap-sniffer-addr {mac-address}
            set ap-sniffer-bufsize {integer}
            set ap-sniffer-chan {integer}
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
            set band [802.11a|802.11b|...]
            set band-5g-type [5g-full|5g-high|...]
            set bandwidth-admission-control [enable|disable]
            set bandwidth-capacity {integer}
            set beacon-interval {integer}
            set bss-color {integer}
            set bss-color-mode [auto|static]
            set call-admission-control [enable|disable]
            set call-capacity {integer}
            set channel <chan1>, <chan2>, ...
            set channel-bonding [160MHz|80MHz|...]
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
            set vaps <name1>, <name2>, ...
            set wids-profile {string}
            set zero-wait-dfs [enable|disable]
        end
        config radio-2
            Description: Configuration options for radio 2.
            set 80211d [enable|disable]
            set airtime-fairness [enable|disable]
            set amsdu [enable|disable]
            set ap-sniffer-addr {mac-address}
            set ap-sniffer-bufsize {integer}
            set ap-sniffer-chan {integer}
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
            set band [802.11a|802.11b|...]
            set band-5g-type [5g-full|5g-high|...]
            set bandwidth-admission-control [enable|disable]
            set bandwidth-capacity {integer}
            set beacon-interval {integer}
            set bss-color {integer}
            set bss-color-mode [auto|static]
            set call-admission-control [enable|disable]
            set call-capacity {integer}
            set channel <chan1>, <chan2>, ...
            set channel-bonding [160MHz|80MHz|...]
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
            set vaps <name1>, <name2>, ...
            set wids-profile {string}
            set zero-wait-dfs [enable|disable]
        end
        config radio-3
            Description: Configuration options for radio 3.
            set 80211d [enable|disable]
            set airtime-fairness [enable|disable]
            set amsdu [enable|disable]
            set ap-sniffer-addr {mac-address}
            set ap-sniffer-bufsize {integer}
            set ap-sniffer-chan {integer}
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
            set band [802.11a|802.11b|...]
            set band-5g-type [5g-full|5g-high|...]
            set bandwidth-admission-control [enable|disable]
            set bandwidth-capacity {integer}
            set beacon-interval {integer}
            set bss-color {integer}
            set bss-color-mode [auto|static]
            set call-admission-control [enable|disable]
            set call-capacity {integer}
            set channel <chan1>, <chan2>, ...
            set channel-bonding [160MHz|80MHz|...]
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
            set vaps <name1>, <name2>, ...
            set wids-profile {string}
            set zero-wait-dfs [enable|disable]
        end
        config radio-4
            Description: Configuration options for radio 4.
            set 80211d [enable|disable]
            set airtime-fairness [enable|disable]
            set amsdu [enable|disable]
            set ap-sniffer-addr {mac-address}
            set ap-sniffer-bufsize {integer}
            set ap-sniffer-chan {integer}
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
            set band [802.11a|802.11b|...]
            set band-5g-type [5g-full|5g-high|...]
            set bandwidth-admission-control [enable|disable]
            set bandwidth-capacity {integer}
            set beacon-interval {integer}
            set bss-color {integer}
            set bss-color-mode [auto|static]
            set call-admission-control [enable|disable]
            set call-capacity {integer}
            set channel <chan1>, <chan2>, ...
            set channel-bonding [160MHz|80MHz|...]
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

+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| Parameter                           | Description                       | Type                   | Size                   | Default                |
+=====================================+===================================+========================+========================+========================+
| allowaccess                         | Control management access to the  | option                 | \-                     |                        |
|                                     | managed WTP, FortiAP, or AP.      |                        |                        |                        |
|                                     | Separate entries with a space.    |                        |                        |                        |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | Option      | Description                                            |                                     |
|                                     | +=============+========================================================+                                     |
|                                     | | *https*     | HTTPS access.                                          |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *ssh*       | SSH access.                                            |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *snmp*      | SNMP access.                                           |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ap-country                          | Country in which this WTP,        | option                 | \-                     | \--                    |
|                                     | FortiAP, or AP will operate.      |                        |                        |                        |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | Option      | Description                                            |                                     |
|                                     | +=============+========================================================+                                     |
|                                     | | *\--*       | NO_COUNTRY_SET                                         |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *AF*        | AFGHANISTAN                                            |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *AL*        | ALBANIA                                                |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *DZ*        | ALGERIA                                                |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *AS*        | AMERICAN SAMOA                                         |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *AO*        | ANGOLA                                                 |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *AR*        | ARGENTINA                                              |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *AM*        | ARMENIA                                                |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *AU*        | AUSTRALIA                                              |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *AT*        | AUSTRIA                                                |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *AZ*        | AZERBAIJAN                                             |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *BS*        | BAHAMAS                                                |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *BH*        | BAHRAIN                                                |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *BD*        | BANGLADESH                                             |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *BB*        | BARBADOS                                               |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *BY*        | BELARUS                                                |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *BE*        | BELGIUM                                                |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *BZ*        | BELIZE                                                 |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *BJ*        | BENIN                                                  |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *BM*        | BERMUDA                                                |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *BT*        | BHUTAN                                                 |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *BO*        | BOLIVIA                                                |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *BA*        | BOSNIA AND HERZEGOVINA                                 |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *BW*        | BOTSWANA                                               |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *BR*        | BRAZIL                                                 |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *BN*        | BRUNEI DARUSSALAM                                      |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *BG*        | BULGARIA                                               |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *BF*        | BURKINA-FASO                                           |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *KH*        | CAMBODIA                                               |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *CM*        | CAMEROON                                               |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *KY*        | CAYMAN ISLANDS                                         |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *CF*        | CENTRAL AFRICA REPUBLIC                                |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *TD*        | CHAD                                                   |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *CL*        | CHILE                                                  |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *CN*        | CHINA                                                  |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *CX*        | CHRISTMAS ISLAND                                       |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *CO*        | COLOMBIA                                               |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *CG*        | CONGO REPUBLIC                                         |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *CD*        | DEMOCRATIC REPUBLIC OF CONGO                           |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *CR*        | COSTA RICA                                             |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *HR*        | CROATIA                                                |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *CY*        | CYPRUS                                                 |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *CZ*        | CZECH REPUBLIC                                         |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *DK*        | DENMARK                                                |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *DJ*        | DJIBOUTI                                               |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *DM*        | DOMINICA                                               |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *DO*        | DOMINICAN REPUBLIC                                     |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *EC*        | ECUADOR                                                |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *EG*        | EGYPT                                                  |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *SV*        | EL SALVADOR                                            |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *ET*        | ETHIOPIA                                               |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *EE*        | ESTONIA                                                |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *GF*        | FRENCH GUIANA                                          |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *PF*        | FRENCH POLYNESIA                                       |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *FO*        | FAEROE ISLANDS                                         |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *FJ*        | FIJI                                                   |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *FI*        | FINLAND                                                |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *FR*        | FRANCE                                                 |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *GA*        | GABON                                                  |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *GE*        | GEORGIA                                                |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *GM*        | GAMBIA                                                 |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *DE*        | GERMANY                                                |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *GH*        | GHANA                                                  |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *GI*        | GIBRALTAR                                              |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *GR*        | GREECE                                                 |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *GL*        | GREENLAND                                              |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *GD*        | GRENADA                                                |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *GP*        | GUADELOUPE                                             |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *GU*        | GUAM                                                   |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *GT*        | GUATEMALA                                              |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *GY*        | GUYANA                                                 |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *HT*        | HAITI                                                  |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *HN*        | HONDURAS                                               |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *HK*        | HONG KONG                                              |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *HU*        | HUNGARY                                                |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *IS*        | ICELAND                                                |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *IN*        | INDIA                                                  |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *ID*        | INDONESIA                                              |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *IQ*        | IRAQ                                                   |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *IE*        | IRELAND                                                |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *IM*        | ISLE OF MAN                                            |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *IL*        | ISRAEL                                                 |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *IT*        | ITALY                                                  |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *CI*        | COTE_D_IVOIRE                                          |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *JM*        | JAMAICA                                                |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *JO*        | JORDAN                                                 |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *KZ*        | KAZAKHSTAN                                             |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *KE*        | KENYA                                                  |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *KR*        | KOREA REPUBLIC                                         |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *KW*        | KUWAIT                                                 |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *LA*        | LAOS                                                   |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *LV*        | LATVIA                                                 |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *LB*        | LEBANON                                                |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *LS*        | LESOTHO                                                |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *LR*        | LIBERIA                                                |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *LY*        | LIBYA                                                  |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *LI*        | LIECHTENSTEIN                                          |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *LT*        | LITHUANIA                                              |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *LU*        | LUXEMBOURG                                             |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *MO*        | MACAU SAR                                              |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *MK*        | MACEDONIA, FYRO                                        |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *MG*        | MADAGASCAR                                             |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *MW*        | MALAWI                                                 |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *MY*        | MALAYSIA                                               |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *MV*        | MALDIVES                                               |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *ML*        | MALI                                                   |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *MT*        | MALTA                                                  |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *MH*        | MARSHALL ISLANDS                                       |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *MQ*        | MARTINIQUE                                             |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *MR*        | MAURITANIA                                             |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *MU*        | MAURITIUS                                              |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *YT*        | MAYOTTE                                                |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *MX*        | MEXICO                                                 |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *FM*        | MICRONESIA                                             |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *MD*        | REPUBLIC OF MOLDOVA                                    |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *MC*        | MONACO                                                 |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *MN*        | MONGOLIA                                               |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *MA*        | MOROCCO                                                |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *MZ*        | MOZAMBIQUE                                             |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *MM*        | MYANMAR                                                |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *NA*        | NAMIBIA                                                |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *NP*        | NEPAL                                                  |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *NL*        | NETHERLANDS                                            |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *AN*        | NETHERLANDS ANTILLES                                   |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *AW*        | ARUBA                                                  |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *NZ*        | NEW ZEALAND                                            |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *NI*        | NICARAGUA                                              |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *NE*        | NIGER                                                  |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *NG*        | NIGERIA                                                |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *NO*        | NORWAY                                                 |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *MP*        | NORTHERN MARIANA ISLANDS                               |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *OM*        | OMAN                                                   |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *PK*        | PAKISTAN                                               |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *PW*        | PALAU                                                  |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *PA*        | PANAMA                                                 |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *PG*        | PAPUA NEW GUINEA                                       |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *PY*        | PARAGUAY                                               |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *PE*        | PERU                                                   |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *PH*        | PHILIPPINES                                            |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *PL*        | POLAND                                                 |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *PT*        | PORTUGAL                                               |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *PR*        | PUERTO RICO                                            |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *QA*        | QATAR                                                  |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *RE*        | REUNION                                                |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *RO*        | ROMANIA                                                |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *RU*        | RUSSIA                                                 |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *RW*        | RWANDA                                                 |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *BL*        | SAINT BARTHELEMY                                       |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *KN*        | SAINT KITTS AND NEVIS                                  |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *LC*        | SAINT LUCIA                                            |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *MF*        | SAINT MARTIN                                           |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *PM*        | SAINT PIERRE AND MIQUELON                              |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *VC*        | SAINT VINCENT AND GRENADIENS                           |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *SA*        | SAUDI ARABIA                                           |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *SN*        | SENEGAL                                                |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *RS*        | REPUBLIC OF SERBIA                                     |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *ME*        | MONTENEGRO                                             |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *SL*        | SIERRA LEONE                                           |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *SG*        | SINGAPORE                                              |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *SK*        | SLOVAKIA                                               |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *SI*        | SLOVENIA                                               |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *SO*        | SOMALIA                                                |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *ZA*        | SOUTH AFRICA                                           |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *ES*        | SPAIN                                                  |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *LK*        | SRI LANKA                                              |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *SR*        | SURINAME                                               |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *SZ*        | SWAZILAND                                              |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *SE*        | SWEDEN                                                 |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *CH*        | SWITZERLAND                                            |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *TW*        | TAIWAN                                                 |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *TZ*        | TANZANIA                                               |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *TH*        | THAILAND                                               |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *TG*        | TOGO                                                   |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *TT*        | TRINIDAD AND TOBAGO                                    |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *TN*        | TUNISIA                                                |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *TR*        | TURKEY                                                 |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *TM*        | TURKMENISTAN                                           |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *AE*        | UNITED ARAB EMIRATES                                   |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *TC*        | TURKS AND CAICOS                                       |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *UG*        | UGANDA                                                 |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *UA*        | UKRAINE                                                |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *GB*        | UNITED KINGDOM                                         |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *US*        | UNITED STATES2                                         |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *PS*        | UNITED STATES (PUBLIC SAFETY)                          |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *UY*        | URUGUAY                                                |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *UZ*        | UZBEKISTAN                                             |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *VU*        | VANUATU                                                |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *VE*        | VENEZUELA                                              |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *VN*        | VIET NAM                                               |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *VI*        | VIRGIN ISLANDS                                         |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *WF*        | WALLIS AND FUTUNA                                      |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *YE*        | YEMEN                                                  |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *ZM*        | ZAMBIA                                                 |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *ZW*        | ZIMBABWE                                               |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *JP*        | JAPAN14                                                |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *CA*        | CANADA2                                                |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ap-handoff                          | Enable/disable AP handoff of      | option                 | \-                     | disable                |
|                                     | clients to other APs.             |                        |                        |                        |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | Option      | Description                                            |                                     |
|                                     | +=============+========================================================+                                     |
|                                     | | *enable*    | Enable AP handoff.                                     |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *disable*   | Disable AP handoff.                                    |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| apcfg-profile                       | AP local configuration profile    | string                 | Maximum length: 35     |                        |
|                                     | name.                             |                        |                        |                        |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ble-profile                         | Bluetooth Low Energy profile      | string                 | Maximum length: 35     |                        |
|                                     | name.                             |                        |                        |                        |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| bonjour-profile                     | Bonjour profile name.             | string                 | Maximum length: 35     |                        |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| comment                             | Comment.                          | var-string             | Maximum length: 255    |                        |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| console-login                       | Enable/disable FortiAP console    | option                 | \-                     | enable                 |
|                                     | login access.                     |                        |                        |                        |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | Option      | Description                                            |                                     |
|                                     | +=============+========================================================+                                     |
|                                     | | *enable*    | Enable FAP console login access.                       |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *disable*   | Disable FAP console login access.                      |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| control-message-offload             | Enable/disable CAPWAP control     | option                 | \-                     | ebp-frame              |
|                                     | message data channel offload.     |                        |                        | aeroscout-tag ap-list  |
|                                     |                                   |                        |                        | sta-list sta-cap-list  |
|                                     |                                   |                        |                        | stats aeroscout-mu     |
|                                     |                                   |                        |                        | sta-health             |
|                                     |                                   |                        |                        | spectral-analysis      |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                     | +---------------------+--------------------------------------------------------+                             |
|                                     | | Option              | Description                                            |                             |
|                                     | +=====================+========================================================+                             |
|                                     | | *ebp-frame*         | Ekahau blink protocol (EBP) frames.                    |                             |
|                                     | +---------------------+--------------------------------------------------------+                             |
|                                     | | *aeroscout-tag*     | AeroScout tag.                                         |                             |
|                                     | +---------------------+--------------------------------------------------------+                             |
|                                     | | *ap-list*           | Rogue AP list.                                         |                             |
|                                     | +---------------------+--------------------------------------------------------+                             |
|                                     | | *sta-list*          | Rogue STA list.                                        |                             |
|                                     | +---------------------+--------------------------------------------------------+                             |
|                                     | | *sta-cap-list*      | STA capability list.                                   |                             |
|                                     | +---------------------+--------------------------------------------------------+                             |
|                                     | | *stats*             | WTP, radio, VAP, and STA statistics.                   |                             |
|                                     | +---------------------+--------------------------------------------------------+                             |
|                                     | | *aeroscout-mu*      | AeroScout Mobile Unit (MU) report.                     |                             |
|                                     | +---------------------+--------------------------------------------------------+                             |
|                                     | | *sta-health*        | STA health log.                                        |                             |
|                                     | +---------------------+--------------------------------------------------------+                             |
|                                     | | *spectral-analysis* | Spectral analysis report.                              |                             |
|                                     | +---------------------+--------------------------------------------------------+                             |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| dtls-in-kernel                      | Enable/disable data channel DTLS  | option                 | \-                     | disable                |
|                                     | in kernel.                        |                        |                        |                        |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | Option      | Description                                            |                                     |
|                                     | +=============+========================================================+                                     |
|                                     | | *enable*    | Enable data channel DTLS in kernel.                    |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *disable*   | Disable data channel DTLS in kernel.                   |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| dtls-policy                         | WTP data channel DTLS policy.     | option                 | \-                     | clear-text             |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                     | +----------------+--------------------------------------------------------+                                  |
|                                     | | Option         | Description                                            |                                  |
|                                     | +================+========================================================+                                  |
|                                     | | *clear-text*   | Clear Text Data Channel.                               |                                  |
|                                     | +----------------+--------------------------------------------------------+                                  |
|                                     | | *dtls-enabled* | DTLS Enabled Data Channel.                             |                                  |
|                                     | +----------------+--------------------------------------------------------+                                  |
|                                     | | *ipsec-vpn*    | IPsec VPN Data Channel.                                |                                  |
|                                     | +----------------+--------------------------------------------------------+                                  |
|                                     | | *ipsec-sn-vpn* | IPsec VPN Data Channel with FortiAP\'s SN in the first |                                  |
|                                     | |                | IKE messages.                                          |                                  |
|                                     | +----------------+--------------------------------------------------------+                                  |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| energy-efficient-ethernet           | Enable/disable use of energy      | option                 | \-                     | disable                |
|                                     | efficient Ethernet on WTP.        |                        |                        |                        |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | Option      | Description                                            |                                     |
|                                     | +=============+========================================================+                                     |
|                                     | | *enable*    | Enable use of energy efficient Ethernet on WTP.        |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *disable*   | Disable use of energy efficient Ethernet on WTP.       |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ext-info-enable                     | Enable/disable station/VAP/radio  | option                 | \-                     | enable                 |
|                                     | extension information.            |                        |                        |                        |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | Option      | Description                                            |                                     |
|                                     | +=============+========================================================+                                     |
|                                     | | *enable*    | Enable station/VAP/radio extension information.        |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *disable*   | Disable station/VAP/radio extension information.       |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| frequency-handoff                   | Enable/disable frequency handoff  | option                 | \-                     | disable                |
|                                     | of clients to other channels.     |                        |                        |                        |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | Option      | Description                                            |                                     |
|                                     | +=============+========================================================+                                     |
|                                     | | *enable*    | Enable frequency handoff.                              |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *disable*   | Disable frequency handoff.                             |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| handoff-roaming                     | Enable/disable client load        | option                 | \-                     | enable                 |
|                                     | balancing during roaming to avoid |                        |                        |                        |
|                                     | roaming delay.                    |                        |                        |                        |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | Option      | Description                                            |                                     |
|                                     | +=============+========================================================+                                     |
|                                     | | *enable*    | Enable handoff roaming.                                |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *disable*   | Disable handoff roaming.                               |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| handoff-rssi                        | Minimum received signal strength  | integer                | Minimum value: 20      | 25                     |
|                                     | indicator.                        |                        | Maximum value: 30      |                        |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| handoff-sta-thresh                  | Threshold value for AP handoff.   | integer                | Minimum value: 5       | 0                      |
|                                     |                                   |                        | Maximum value: 60      |                        |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| indoor-outdoor-deployment           | Set to allow indoor/outdoor-only  | option                 | \-                     | platform-determined    |
|                                     | channels under regulatory rules.  |                        |                        |                        |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                     | +-----------------------+--------------------------------------------------------+                           |
|                                     | | Option                | Description                                            |                           |
|                                     | +=======================+========================================================+                           |
|                                     | | *platform-determined* | Set AP deployment type based on its platform.          |                           |
|                                     | +-----------------------+--------------------------------------------------------+                           |
|                                     | | *outdoor*             | Set AP deployment type to outdoor.                     |                           |
|                                     | +-----------------------+--------------------------------------------------------+                           |
|                                     | | *indoor*              | Set AP deployment type to indoor.                      |                           |
|                                     | +-----------------------+--------------------------------------------------------+                           |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ip-fragment-preventing              | Method.                           | option                 | \-                     | tcp-mss-adjust         |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                     | +--------------------+--------------------------------------------------------+                              |
|                                     | | Option             | Description                                            |                              |
|                                     | +====================+========================================================+                              |
|                                     | | *tcp-mss-adjust*   | TCP maximum segment size adjustment.                   |                              |
|                                     | +--------------------+--------------------------------------------------------+                              |
|                                     | | *icmp-unreachable* | Drop packet and send ICMP Destination Unreachable      |                              |
|                                     | +--------------------+--------------------------------------------------------+                              |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| led-schedules `<name>`              | Recurring firewall schedules for  | string                 | Maximum length: 35     |                        |
|                                     | illuminating LEDs on the FortiAP. |                        |                        |                        |
|                                     | If led-state is enabled, LEDs     |                        |                        |                        |
|                                     | will be visible when at least one |                        |                        |                        |
|                                     | of the schedules is valid.        |                        |                        |                        |
|                                     | Separate multiple schedule names  |                        |                        |                        |
|                                     | with a space.                     |                        |                        |                        |
|                                     |                                   |                        |                        |                        |
|                                     | Schedule name.                    |                        |                        |                        |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| led-state                           | Enable/disable use of LEDs on     | option                 | \-                     | enable                 |
|                                     | WTP.                              |                        |                        |                        |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | Option      | Description                                            |                                     |
|                                     | +=============+========================================================+                                     |
|                                     | | *enable*    | Enable use of LEDs on WTP.                             |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *disable*   | Disable use of LEDs on WTP.                            |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| lldp                                | Enable/disable Link Layer         | option                 | \-                     | enable                 |
|                                     | Discovery Protocol.               |                        |                        |                        |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | Option      | Description                                            |                                     |
|                                     | +=============+========================================================+                                     |
|                                     | | *enable*    | Enable LLDP.                                           |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *disable*   | Disable LLDP.                                          |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| login-passwd                        | Set the managed WTP, FortiAP, or  | password               | Not Specified          |                        |
|                                     | AP\'s administrator password.     |                        |                        |                        |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| login-passwd-change                 | Change or reset the administrator | option                 | \-                     | no                     |
|                                     | password of a managed WTP,        |                        |                        |                        |
|                                     | FortiAP or AP.                    |                        |                        |                        |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | Option      | Description                                            |                                     |
|                                     | +=============+========================================================+                                     |
|                                     | | *yes*       | Change the managed WTP, FortiAP or AP\'s administrator |                                     |
|                                     | |             | password. Use the login-password option to set the     |                                     |
|                                     | |             | password.                                              |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *default*   | Keep the managed WTP, FortiAP or AP\'s administrator   |                                     |
|                                     | |             | password set to the factory default.                   |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *no*        | Do not change the managed WTP, FortiAP or AP\'s        |                                     |
|                                     | |             | administrator password.                                |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| max-clients                         | Maximum number of stations.       | integer                | Minimum value: 0       | 0                      |
|                                     |                                   |                        | Maximum value:         |                        |
|                                     |                                   |                        | 4294967295             |                        |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| name                                | WTP (or FortiAP or AP) profile    | string                 | Maximum length: 35     |                        |
|                                     | name.                             |                        |                        |                        |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| poe-mode                            | Set the WTP, FortiAP, or AP\'s    | option                 | \-                     | auto                   |
|                                     | PoE mode.                         |                        |                        |                        |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                     | +-----------------+--------------------------------------------------------+                                 |
|                                     | | Option          | Description                                            |                                 |
|                                     | +=================+========================================================+                                 |
|                                     | | *auto*          | Automatically detect the PoE mode.                     |                                 |
|                                     | +-----------------+--------------------------------------------------------+                                 |
|                                     | | *8023af*        | Use 802.3af PoE mode.                                  |                                 |
|                                     | +-----------------+--------------------------------------------------------+                                 |
|                                     | | *8023at*        | Use 802.3at PoE mode.                                  |                                 |
|                                     | +-----------------+--------------------------------------------------------+                                 |
|                                     | | *power-adapter* | Use the power adapter to control the PoE mode.         |                                 |
|                                     | +-----------------+--------------------------------------------------------+                                 |
|                                     | | *full*          | Use full power mode.                                   |                                 |
|                                     | +-----------------+--------------------------------------------------------+                                 |
|                                     | | *high*          | Use high power mode.                                   |                                 |
|                                     | +-----------------+--------------------------------------------------------+                                 |
|                                     | | *low*           | Use low power mode.                                    |                                 |
|                                     | +-----------------+--------------------------------------------------------+                                 |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| split-tunneling-acl-local-ap-subnet | Enable/disable automatically      | option                 | \-                     | disable                |
|                                     | adding local subnetwork of        |                        |                        |                        |
|                                     | FortiAP to split-tunneling ACL.   |                        |                        |                        |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | Option      | Description                                            |                                     |
|                                     | +=============+========================================================+                                     |
|                                     | | *enable*    | Enable automatically adding local subnetwork of        |                                     |
|                                     | |             | FortiAP to split-tunneling ACL.                        |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *disable*   | Disable automatically adding local subnetwork of       |                                     |
|                                     | |             | FortiAP to split-tunneling ACL.                        |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| split-tunneling-acl-path            | Split tunneling ACL path is       | option                 | \-                     | local                  |
|                                     | local/tunnel.                     |                        |                        |                        |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | Option      | Description                                            |                                     |
|                                     | +=============+========================================================+                                     |
|                                     | | *tunnel*    | Split tunneling ACL list traffic will be tunnel.       |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *local*     | Split tunneling ACL list traffic will be local NATed.  |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| syslog-profile                      | System log server configuration   | string                 | Maximum length: 35     |                        |
|                                     | profile name.                     |                        |                        |                        |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| tun-mtu-downlink                    | The MTU of downlink CAPWAP        | integer                | Minimum value: 576     | 0                      |
|                                     | tunnel.                           |                        | Maximum value: 1500    |                        |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| tun-mtu-uplink                      | The maximum transmission unit.    | integer                | Minimum value: 576     | 0                      |
|                                     |                                   |                        | Maximum value: 1500    |                        |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| unii-4-5ghz-band                    | Enable/disable UNII-4 5Ghz band   | option                 | \-                     | disable                |
|                                     | channels.                         |                        |                        |                        |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | Option      | Description                                            |                                     |
|                                     | +=============+========================================================+                                     |
|                                     | | *enable*    | Enable UNII-4 5Ghz band channels.                      |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *disable*   | Disable UNII-4 5Ghz band channels.                     |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| wan-port-auth                       | Set WAN port authentication mode. | option                 | \-                     | none                   |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | Option      | Description                                            |                                     |
|                                     | +=============+========================================================+                                     |
|                                     | | *none*      | Disable WAN port authentication.                       |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *802.1x*    | Enable WAN port 802.1x authentication.                 |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| wan-port-auth-macsec                | Enable/disable WAN port 802.1x    | option                 | \-                     | disable                |
|                                     | supplicant MACsec policy.         |                        |                        |                        |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | Option      | Description                                            |                                     |
|                                     | +=============+========================================================+                                     |
|                                     | | *enable*    | Enable WAN port 802.1x supplicant MACsec policy.       |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *disable*   | Disable WAN port 802.1x supplicant MACsec policy.      |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| wan-port-auth-methods               | WAN port 802.1x supplicant EAP    | option                 | \-                     | all                    |
|                                     | methods.                          |                        |                        |                        |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | Option      | Description                                            |                                     |
|                                     | +=============+========================================================+                                     |
|                                     | | *all*       | Do not specify any EAP methods.                        |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *EAP-FAST*  | Enable EAP-FAST.                                       |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *EAP-TLS*   | Enable EAP-TLS.                                        |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *EAP-PEAP*  | Enable EAP-PEAP.                                       |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| wan-port-auth-password              | Set WAN port 802.1x supplicant    | password               | Not Specified          |                        |
|                                     | password.                         |                        |                        |                        |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| wan-port-auth-usrname               | Set WAN port 802.1x supplicant    | string                 | Maximum length: 63     |                        |
|                                     | user name.                        |                        |                        |                        |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| wan-port-mode                       | Enable/disable using a WAN port   | option                 | \-                     | wan-only               |
|                                     | as a LAN port.                    |                        |                        |                        |
+-------------------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | Option      | Description                                            |                                     |
|                                     | +=============+========================================================+                                     |
|                                     | | *wan-lan*   | Enable using a WAN port as a LAN port.                 |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
|                                     | | *wan-only*  | Disable using a WAN port as a LAN port.                |                                     |
|                                     | +-------------+--------------------------------------------------------+                                     |
+-------------------------------------+--------------------------------------------------------------------------------------------------------------+

