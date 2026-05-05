# config switch-controller managed-switch

Configure FortiSwitch devices that are managed by this FortiGate.

## Syntax

```
config switch-controller managed-switch
    Description: Configure FortiSwitch devices that are managed by this FortiGate.
    edit <switch-id>
        config 802-1X-settings
            Description: Configuration method to edit FortiSwitch 802.1X global settings.
            set link-down-auth [set-unauth|no-action]
            set local-override [enable|disable]
            set mab-reauth [disable|enable]
            set mac-called-station-delimiter [colon|hyphen|...]
            set mac-calling-station-delimiter [colon|hyphen|...]
            set mac-case [lowercase|uppercase]
            set mac-password-delimiter [colon|hyphen|...]
            set mac-username-delimiter [colon|hyphen|...]
            set max-reauth-attempt {integer}
            set reauth-period {integer}
            set tx-period {integer}
        end
        set access-profile {string}
        config custom-command
            Description: Configuration method to edit FortiSwitch commands to be pushed to this FortiSwitch device upon rebooting the FortiGate switch controller or the FortiSwitch.
            edit <command-entry>
                set command-name {string}
            next
        end
        set delayed-restart-trigger {integer}
        set description {string}
        set dhcp-server-access-list [global|enable|...]
        config dhcp-snooping-static-client
            Description: Configure FortiSwitch DHCP snooping static clients.
            edit <name>
                set ip {ipv4-address}
                set mac {mac-address}
                set port {string}
                set vlan {string}
            next
        end
        set directly-connected {integer}
        set dynamic-capability {user}
        set dynamically-discovered {integer}
        set firmware-provision [enable|disable]
        set firmware-provision-latest [disable|once]
        set firmware-provision-version {string}
        set flow-identity {user}
        set fsw-wan1-admin [discovered|disable|...]
        set fsw-wan1-peer {string}
        config igmp-snooping
            Description: Configure FortiSwitch IGMP snooping global settings.
            set aging-time {integer}
            set flood-unknown-multicast [enable|disable]
            set local-override [enable|disable]
            config vlans
                Description: Configure IGMP snooping VLAN.
                edit <vlan-name>
                    set proxy [disable|enable|...]
                    set querier [disable|enable]
                    set querier-addr {ipv4-address}
                    set version {integer}
                next
            end
        end
        config ip-source-guard
            Description: IP source guard.
            edit <port>
                config binding-entry
                    Description: IP and MAC address configuration.
                    edit <entry-name>
                        set ip {ipv4-address-any}
                        set mac {mac-address}
                    next
                end
                set description {string}
            next
        end
        set l3-discovered {integer}
        set max-allowed-trunk-members {integer}
        set mclag-igmp-snooping-aware [enable|disable]
        set mgmt-mode {integer}
        config mirror
            Description: Configuration method to edit FortiSwitch packet mirror.
            edit <name>
                set dst {string}
                set src-egress <name1>, <name2>, ...
                set src-ingress <name1>, <name2>, ...
                set status [active|inactive]
                set switching-packet [enable|disable]
            next
        end
        set override-snmp-community [enable|disable]
        set override-snmp-sysinfo [disable|enable]
        set override-snmp-trap-threshold [enable|disable]
        set override-snmp-user [enable|disable]
        set owner-vdom {string}
        set poe-detection-type {integer}
        set poe-pre-standard-detection [enable|disable]
        config ports
            Description: Managed-switch port list.
            edit <port-name>
                set access-mode [dynamic|nac|...]
                set acl-group <name1>, <name2>, ...
                set aggregator-mode [bandwidth|count]
                set allow-arp-monitor [disable|enable]
                set allowed-vlans <vlan-name1>, <vlan-name2>, ...
                set allowed-vlans-all [enable|disable]
                set arp-inspection-trust [untrusted|trusted]
                set authenticated-port {integer}
                set bundle [enable|disable]
                set description {string}
                config dhcp-snoop-option82-override
                    Description: Configure DHCP snooping option 82 override.
                    edit <vlan-name>
                        set circuit-id {string}
                        set remote-id {string}
                    next
                end
                set dhcp-snoop-option82-trust [enable|disable]
                set dhcp-snooping [untrusted|trusted]
                set discard-mode [none|all-untagged|...]
                set edge-port [enable|disable]
                set encrypted-port {integer}
                set export-to {string}
                set export-to-pool {string}
                set fallback-port {string}
                set fec-capable {integer}
                set fec-state [disabled|cl74|...]
                set fgt-peer-device-name {string}
                set fgt-peer-port-name {string}
                set fiber-port {integer}
                set flags {integer}
                set flap-duration {integer}
                set flap-rate {integer}
                set flap-timeout {integer}
                set flapguard [enable|disable]
                set flow-control [disable|tx|...]
                set fortilink-port {integer}
                set fortiswitch-acls <id1>, <id2>, ...
                set igmp-snooping-flood-reports [enable|disable]
                set interface-tags <tag-name1>, <tag-name2>, ...
                set ip-source-guard [disable|enable]
                set isl-local-trunk-name {string}
                set isl-peer-device-name {string}
                set isl-peer-device-sn {string}
                set isl-peer-port-name {string}
                set lacp-speed [slow|fast]
                set learning-limit {integer}
                set lldp-profile {string}
                set lldp-status [disable|rx-only|...]
                set log-mac-event [disable|enable]
                set loop-guard [enabled|disabled]
                set loop-guard-timeout {integer}
                set mac-addr {mac-address}
                set matched-dpp-intf-tags {string}
                set matched-dpp-policy {string}
                set max-bundle {integer}
                set mcast-snooping-flood-traffic [enable|disable]
                set mclag [enable|disable]
                set mclag-icl-port {integer}
                set media-type {string}
                set member-withdrawal-behavior [forward|block]
                set members <member-name1>, <member-name2>, ...
                set min-bundle {integer}
                set mode [static|lacp-passive|...]
                set p2p-port {integer}
                set packet-sample-rate {integer}
                set packet-sampler [enabled|disabled]
                set pause-meter {integer}
                set pause-meter-resume [75%|50%|...]
                set pd-capable {integer}
                set poe-capable {integer}
                set poe-max-power {string}
                set poe-mode-bt-cabable {integer}
                set poe-port-mode [ieee802-3af|ieee802-3at|...]
                set poe-port-power [normal|perpetual|...]
                set poe-port-priority [critical-priority|high-priority|...]
                set poe-pre-standard-detection [enable|disable]
                set poe-standard {string}
                set poe-status [enable|disable]
                set port-number {integer}
                set port-owner {string}
                set port-policy {string}
                set port-prefix-type {integer}
                set port-security-policy {string}
                set port-selection-criteria [src-mac|dst-mac|...]
                set ptp-policy {string}
                set ptp-status [disable|enable]
                set qnq {string}
                set qos-policy {string}
                set restricted-auth-port {integer}
                set rpvst-port [disabled|enabled]
                set sample-direction [tx|rx|...]
                set sflow-counter-interval {integer}
                set speed [10half|10full|...]
                set stacking-port {integer}
                set status [up|down]
                set sticky-mac [enable|disable]
                set storm-control-policy {string}
                set stp-bpdu-guard [enabled|disabled]
                set stp-bpdu-guard-timeout {integer}
                set stp-root-guard [enabled|disabled]
                set stp-state [enabled|disabled]
                set switch-id {string}
                set type [physical|trunk]
                set untagged-vlans <vlan-name1>, <vlan-name2>, ...
                set vlan {string}
            next
        end
        set pre-provisioned {integer}
        set ptp-profile {string}
        set ptp-status [disable|enable]
        set purdue-level [1|1.5|...]
        set qos-drop-policy [taildrop|random-early-detection]
        set qos-red-probability {integer}
        set radius-nas-ip {ipv4-address}
        set radius-nas-ip-override [disable|enable]
        config remote-log
            Description: Configure logging by FortiSwitch device to a remote syslog server.
            edit <name>
                set csv [enable|disable]
                set facility [kernel|user|...]
                set port {integer}
                set server {string}
                set severity [emergency|alert|...]
                set status [enable|disable]
            next
        end
        set route-offload [disable|enable]
        set route-offload-mclag [disable|enable]
        config route-offload-router
            Description: Configure route offload MCLAG IP address.
            edit <vlan-name>
                set router-ip {ipv4-address}
            next
        end
        set sn {string}
        config snmp-community
            Description: Configuration method to edit Simple Network Management Protocol (SNMP) communities.
            edit <id>
                set events {option1}, {option2}, ...
                config hosts
                    Description: Configure IPv4 SNMP managers (hosts).
                    edit <id>
                        set ip {user}
                    next
                end
                set name {string}
                set query-v1-port {integer}
                set query-v1-status [disable|enable]
                set query-v2c-port {integer}
                set query-v2c-status [disable|enable]
                set status [disable|enable]
                set trap-v1-lport {integer}
                set trap-v1-rport {integer}
                set trap-v1-status [disable|enable]
                set trap-v2c-lport {integer}
                set trap-v2c-rport {integer}
                set trap-v2c-status [disable|enable]
            next
        end
        config snmp-sysinfo
            Description: Configuration method to edit Simple Network Management Protocol (SNMP) system info.
            set contact-info {string}
            set description {string}
            set engine-id {string}
            set location {string}
            set status [disable|enable]
        end
        config snmp-trap-threshold
            Description: Configuration method to edit Simple Network Management Protocol (SNMP) trap threshold values.
            set trap-high-cpu-threshold {integer}
            set trap-log-full-threshold {integer}
            set trap-low-memory-threshold {integer}
        end
        config snmp-user
            Description: Configuration method to edit Simple Network Management Protocol (SNMP) users.
            edit <name>
                set auth-proto [md5|sha1|...]
                set auth-pwd {password}
                set priv-proto [aes128|aes192|...]
                set priv-pwd {password}
                set queries [disable|enable]
                set query-port {integer}
                set security-level [no-auth-no-priv|auth-no-priv|...]
            next
        end
        set staged-image-version {string}
        config static-mac
            Description: Configuration method to edit FortiSwitch Static and Sticky MAC.
            edit <id>
                set description {string}
                set interface {string}
                set mac {mac-address}
                set type [static|sticky]
                set vlan {string}
            next
        end
        config storm-control
            Description: Configuration method to edit FortiSwitch storm control for measuring traffic activity using data rates to prevent traffic disruption.
            set broadcast [enable|disable]
            set local-override [enable|disable]
            set rate {integer}
            set unknown-multicast [enable|disable]
            set unknown-unicast [enable|disable]
        end
        config stp-instance
            Description: Configuration method to edit Spanning Tree Protocol (STP) instances.
            edit <id>
                set priority [0|4096|...]
            next
        end
        config stp-settings
            Description: Configuration method to edit Spanning Tree Protocol (STP) settings used to prevent bridge loops.
            set forward-time {integer}
            set hello-time {integer}
            set local-override [enable|disable]
            set max-age {integer}
            set max-hops {integer}
            set name {string}
            set pending-timer {integer}
            set revision {integer}
        end
        set switch-device-tag {string}
        set switch-dhcp_opt43_key {string}
        config switch-log
            Description: Configuration method to edit FortiSwitch logging settings (logs are transferred to and inserted into the FortiGate event log).
            set local-override [enable|disable]
            set severity [emergency|alert|...]
            set status [enable|disable]
        end
        set switch-profile {string}
        set tdr-supported {string}
        set tunnel-discovered {integer}
        set type [virtual|physical]
        set version {integer}
        config vlan
            Description: Configure VLAN assignment priority.
            edit <vlan-name>
                set assignment-priority {integer}
            next
        end
    next
end
```

## Parameters

+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+
| ![Note](https://fortinetweb.s3.amazonaws.com/docs.fortinet.com/v2/resources/e628f3e3-1a47-11f0-b13a-ca4255feedd9/images/e44ea5146a18692010ed8ca63df6215e_Icon-Light-Bulb.png "Note") | This command is available for    |
|                                                                                                                                                                                      | model(s): FortiGate 1000D,       |
|                                                                                                                                                                                      | FortiGate 1000F, FortiGate       |
|                                                                                                                                                                                      | 1001F, FortiGate 100F, FortiGate |
|                                                                                                                                                                                      | 101F, FortiGate 1100E, FortiGate |
|                                                                                                                                                                                      | 1101E, FortiGate 120G, FortiGate |
|                                                                                                                                                                                      | 121G, FortiGate 1800F, FortiGate |
|                                                                                                                                                                                      | 1801F, FortiGate 2000E,          |
|                                                                                                                                                                                      | FortiGate 200E, FortiGate 200F,  |
|                                                                                                                                                                                      | FortiGate 201E, FortiGate 201F,  |
|                                                                                                                                                                                      | FortiGate 2200E, FortiGate       |
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
|                                                                                                                                                                                      | FortiGate 4401F, FortiGate 500E, |
|                                                                                                                                                                                      | FortiGate 501E, FortiGate 600E,  |
|                                                                                                                                                                                      | FortiGate 600F, FortiGate 601E,  |
|                                                                                                                                                                                      | FortiGate 601F, FortiGate 60F,   |
|                                                                                                                                                                                      | FortiGate 61F, FortiGate 70F,    |
|                                                                                                                                                                                      | FortiGate 71F, FortiGate 800D,   |
|                                                                                                                                                                                      | FortiGate 80F Bypass, FortiGate  |
|                                                                                                                                                                                      | 80F DSL, FortiGate 80F-POE,      |
|                                                                                                                                                                                      | FortiGate 80F, FortiGate         |
|                                                                                                                                                                                      | 81F-POE, FortiGate 81F,          |
|                                                                                                                                                                                      | FortiGate 900D, FortiGate 900G,  |
|                                                                                                                                                                                      | FortiGate 901G, FortiGate 90G,   |
|                                                                                                                                                                                      | FortiGate 91G, FortiGate-VM64    |
|                                                                                                                                                                                      | Aliyun, FortiGate-VM64 AWS,      |
|                                                                                                                                                                                      | FortiGate-VM64 Azure,            |
|                                                                                                                                                                                      | FortiGate-VM64 GCP,              |
|                                                                                                                                                                                      | FortiGate-VM64 OPC,              |
|                                                                                                                                                                                      | FortiGate-VM64, FortiGateRugged  |
|                                                                                                                                                                                      | 60F 3G4G, FortiGateRugged 60F,   |
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
|                                                                                                                                                                                      | FortiGate 5001E1, FortiGate      |
|                                                                                                                                                                                      | 5001E.                           |
+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+

