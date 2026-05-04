# config switch-controller managed-switch

Configure FortiSwitch devices that are managed by this FortiGate.

## Syntax

```
config switch-controller managed-switch
    Description: Configure FortiSwitch devices that are managed by this FortiGate.
    edit <switch-id>
        config 802-1X-settings
            Description: Configuration method to edit FortiSwitch 802.1X global settings.
            set local-override [enable|disable]
            set link-down-auth [set-unauth|no-action]
            set reauth-period {integer}
            set max-reauth-attempt {integer}
            set tx-period {integer}
            set mab-reauth [disable|enable]
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
                set vlan {string}
                set ip {ipv4-address}
                set mac {mac-address}
                set port {string}
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
            set local-override [enable|disable]
            set aging-time {integer}
            set flood-unknown-multicast [enable|disable]
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
                set description {string}
                config binding-entry
                    Description: IP and MAC address configuration.
                    edit <entry-name>
                        set ip {ipv4-address-any}
                        set mac {mac-address}
                    next
                end
            next
        end
        set l3-discovered {integer}
        set max-allowed-trunk-members {integer}
        set mclag-igmp-snooping-aware [enable|disable]
        config mirror
            Description: Configuration method to edit FortiSwitch packet mirror.
            edit <name>
                set status [active|inactive]
                set switching-packet [enable|disable]
                set dst {string}
                set src-ingress <name1>, <name2>, ...
                set src-egress <name1>, <name2>, ...
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
                set port-owner {string}
                set switch-id {string}
                set speed [10half|10full|...]
                set status [up|down]
                set poe-status [enable|disable]
                set ip-source-guard [disable|enable]
                set ptp-policy {string}
                set aggregator-mode [bandwidth|count]
                set flapguard [enable|disable]
                set flap-rate {integer}
                set flap-duration {integer}
                set flap-timeout {integer}
                set rpvst-port [disabled|enabled]
                set poe-pre-standard-detection [enable|disable]
                set port-number {integer}
                set port-prefix-type {integer}
                set fortilink-port {integer}
                set link-status [up|down]
                set poe-capable {integer}
                set stacking-port {integer}
                set p2p-port {integer}
                set mclag-icl-port {integer}
                set fiber-port {integer}
                set media-type {string}
                set poe-standard {string}
                set poe-max-power {string}
                set poe-mode-bt-cabable {integer}
                set poe-port-mode [ieee802-3af|ieee802-3at|...]
                set poe-port-priority [critical-priority|high-priority|...]
                set poe-port-power [normal|perpetual|...]
                set flags {integer}
                set isl-local-trunk-name {string}
                set isl-peer-port-name {string}
                set isl-peer-device-name {string}
                set isl-peer-device-sn {string}
                set fgt-peer-port-name {string}
                set fgt-peer-device-name {string}
                set vlan {string}
                set allowed-vlans-all [enable|disable]
                set allowed-vlans <vlan-name1>, <vlan-name2>, ...
                set untagged-vlans <vlan-name1>, <vlan-name2>, ...
                set type [physical|trunk]
                set access-mode [dynamic|nac|...]
                set matched-dpp-policy {string}
                set matched-dpp-intf-tags {string}
                set acl-group <name1>, <name2>, ...
                set fortiswitch-acls <id1>, <id2>, ...
                set dhcp-snooping [untrusted|trusted]
                set dhcp-snoop-option82-trust [enable|disable]
                config dhcp-snoop-option82-override
                    Description: Configure DHCP snooping option 82 override.
                    edit <vlan-name>
                        set circuit-id {string}
                        set remote-id {string}
                    next
                end
                set arp-inspection-trust [untrusted|trusted]
                set igmp-snooping-flood-reports [enable|disable]
                set mcast-snooping-flood-traffic [enable|disable]
                set stp-state [enabled|disabled]
                set stp-root-guard [enabled|disabled]
                set stp-bpdu-guard [enabled|disabled]
                set stp-bpdu-guard-timeout {integer}
                set edge-port [enable|disable]
                set discard-mode [none|all-untagged|...]
                set packet-sampler [enabled|disabled]
                set packet-sample-rate {integer}
                set sflow-counter-interval {integer}
                set sample-direction [tx|rx|...]
                set fec-capable {integer}
                set fec-state [disabled|cl74|...]
                set flow-control [disable|tx|...]
                set pause-meter {integer}
                set pause-meter-resume [75%|50%|...]
                set loop-guard [enabled|disabled]
                set loop-guard-timeout {integer}
                set port-policy {string}
                set qos-policy {string}
                set storm-control-policy {string}
                set port-security-policy {string}
                set export-to-pool {string}
                set interface-tags <tag-name1>, <tag-name2>, ...
                set learning-limit {integer}
                set sticky-mac [enable|disable]
                set lldp-status [disable|rx-only|...]
                set lldp-profile {string}
                set export-to {string}
                set mac-addr {mac-address}
                set port-selection-criteria [src-mac|dst-mac|...]
                set description {string}
                set lacp-speed [slow|fast]
                set mode [static|lacp-passive|...]
                set bundle [enable|disable]
                set member-withdrawal-behavior [forward|block]
                set mclag [enable|disable]
                set min-bundle {integer}
                set max-bundle {integer}
                set members <member-name1>, <member-name2>, ...
            next
        end
        set pre-provisioned {integer}
        set qos-drop-policy [taildrop|random-early-detection]
        set qos-red-probability {integer}
        config remote-log
            Description: Configure logging by FortiSwitch device to a remote syslog server.
            edit <name>
                set status [enable|disable]
                set server {string}
                set port {integer}
                set severity [emergency|alert|...]
                set csv [enable|disable]
                set facility [kernel|user|...]
            next
        end
        set sn {string}
        config snmp-community
            Description: Configuration method to edit Simple Network Management Protocol (SNMP) communities.
            edit <id>
                set name {string}
                set status [disable|enable]
                config hosts
                    Description: Configure IPv4 SNMP managers (hosts).
                    edit <id>
                        set ip {user}
                    next
                end
                set query-v1-status [disable|enable]
                set query-v1-port {integer}
                set query-v2c-status [disable|enable]
                set query-v2c-port {integer}
                set trap-v1-status [disable|enable]
                set trap-v1-lport {integer}
                set trap-v1-rport {integer}
                set trap-v2c-status [disable|enable]
                set trap-v2c-lport {integer}
                set trap-v2c-rport {integer}
                set events {option1}, {option2}, ...
            next
        end
        config snmp-sysinfo
            Description: Configuration method to edit Simple Network Management Protocol (SNMP) system info.
            set status [disable|enable]
            set engine-id {string}
            set description {string}
            set contact-info {string}
            set location {string}
        end
        config snmp-trap-threshold
            Description: Configuration method to edit Simple Network Management Protocol (SNMP) trap threshold values.
            set trap-high-cpu-threshold {integer}
            set trap-low-memory-threshold {integer}
            set trap-log-full-threshold {integer}
        end
        config snmp-user
            Description: Configuration method to edit Simple Network Management Protocol (SNMP) users.
            edit <name>
                set queries [disable|enable]
                set query-port {integer}
                set security-level [no-auth-no-priv|auth-no-priv|...]
                set auth-proto [md5|sha1|...]
                set auth-pwd {password}
                set priv-proto [aes128|aes192|...]
                set priv-pwd {password}
            next
        end
        set staged-image-version {string}
        config static-mac
            Description: Configuration method to edit FortiSwitch Static and Sticky MAC.
            edit <id>
                set type [static|sticky]
                set vlan {string}
                set mac {mac-address}
                set interface {string}
                set description {string}
            next
        end
        config storm-control
            Description: Configuration method to edit FortiSwitch storm control for measuring traffic activity using data rates to prevent traffic disruption.
            set local-override [enable|disable]
            set rate {integer}
            set unknown-unicast [enable|disable]
            set unknown-multicast [enable|disable]
            set broadcast [enable|disable]
        end
        config stp-instance
            Description: Configuration method to edit Spanning Tree Protocol (STP) instances.
            edit <id>
                set priority [0|4096|...]
            next
        end
        config stp-settings
            Description: Configuration method to edit Spanning Tree Protocol (STP) settings used to prevent bridge loops.
            set local-override [enable|disable]
            set name {string}
            set revision {integer}
            set hello-time {integer}
            set forward-time {integer}
            set max-age {integer}
            set max-hops {integer}
            set pending-timer {integer}
        end
        set switch-device-tag {string}
        set switch-dhcp_opt43_key {string}
        config switch-log
            Description: Configuration method to edit FortiSwitch logging settings (logs are transferred to and inserted into the FortiGate event log).
            set local-override [enable|disable]
            set status [enable|disable]
            set severity [emergency|alert|...]
        end
        set switch-profile {string}
        set tdr-supported {string}
        set type [virtual|physical]
        set version {integer}
    next
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
|                                                                                                                                                                                      | 4401F, FortiGate 500E, FortiGate |
|                                                                                                                                                                                      | 501E, FortiGate 600E, FortiGate  |
|                                                                                                                                                                                      | 600F, FortiGate 601E, FortiGate  |
|                                                                                                                                                                                      | 601F, FortiGate 60E DSLJ,        |
|                                                                                                                                                                                      | FortiGate 60E DSL, FortiGate     |
|                                                                                                                                                                                      | 60E-POE, FortiGate 60E,          |
|                                                                                                                                                                                      | FortiGate 60F, FortiGate 61E,    |
|                                                                                                                                                                                      | FortiGate 61F, FortiGate 70F,    |
|                                                                                                                                                                                      | FortiGate 71F, FortiGate 800D,   |
|                                                                                                                                                                                      | FortiGate 80E, FortiGate 80F     |
|                                                                                                                                                                                      | Bypass, FortiGate 80F-POE,       |
|                                                                                                                                                                                      | FortiGate 80F, FortiGate         |
|                                                                                                                                                                                      | 81E-POE, FortiGate 81E,          |
|                                                                                                                                                                                      | FortiGate 81F-POE, FortiGate     |
|                                                                                                                                                                                      | 81F, FortiGate 900D, FortiGate   |
|                                                                                                                                                                                      | 90E, FortiGate 91E, FortiGate    |
|                                                                                                                                                                                      | VM64, FortiGateRugged 60F 3G4G,  |
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
|                                                                                                                                                                                      | FortiGate 5001E1, FortiGate      |
|                                                                                                                                                                                      | 5001E.                           |
+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+

