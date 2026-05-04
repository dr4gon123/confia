# config switch-controller managed-switch

Configure FortiSwitch devices that are managed by this FortiGate.

## Syntax

```
config switch-controller managed-switch
    Description: Configure FortiSwitch devices that are managed by this FortiGate.
    edit <switch-id>
        config 802-1X-settings
            Description: Configuration method to edit FortiSwitch 802.1X global settings.
            set allow-mac-move [disable|enable]
            set link-down-auth [set-unauth|no-action]
            set local-override [enable|disable]
            set mab-entry-as [static|dynamic]
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
        config components
            Description: Managed-switch component list.
            edit <name>
                set admin-status [disable|enable]
                set capability {user}
                set component-id {integer}
                set description {string}
                set dynamically-discovered {integer}
                set max-allowed-trunk-members {integer}
                set poe-detection-type {integer}
                set role [None|Primary|...]
                set serial-number {string}
                set status [offline|online]
                set sw-version {string}
                set switch-id {string}
                set type [stack-node|supervisor|...]
                set version {integer}
            next
        end
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
        set max-poe-budget {integer}
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
        set port-selection-criteria [src-mac|dst-mac|...]
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
                set eee-tx-idle-time {integer}
                set eee-tx-wake-time {integer}
                set encrypted-port {integer}
                set energy-efficient-ethernet [disable|enable]
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
                set poe-max-power-mode [class-based|30W|...]
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
        config router-static
            Description: Configure static routes.
            edit <id>
                set blackhole [disable|enable]
                set comment {string}
                set device {string}
                set distance {integer}
                set dst {ipv4-classnet}
                set dynamic-gateway [disable|enable]
                set gateway {ipv4-address}
                set status [disable|enable]
                set switch-id {string}
                set vrf {string}
            next
        end
        config router-vrf
            Description: Configure VRF.
            edit <name>
                set switch-id {string}
                set vrfid {integer}
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
            set burst-size-level {integer}
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
        config system-dhcp-server
            Description: Configure DHCP servers.
            edit <id>
                set default-gateway {ipv4-address}
                set dns-server1 {ipv4-address}
                set dns-server2 {ipv4-address}
                set dns-server3 {ipv4-address}
                set dns-service [local|default|...]
                set interface {string}
                config ip-range
                    Description: DHCP IP range configuration.
                    edit <id>
                        set end-ip {ipv4-address}
                        set start-ip {ipv4-address}
                    next
                end
                set lease-time {integer}
                set netmask {ipv4-netmask}
                set ntp-server1 {ipv4-address}
                set ntp-server2 {ipv4-address}
                set ntp-server3 {ipv4-address}
                set ntp-service [local|default|...]
                config options
                    Description: DHCP options.
                    edit <id>
                        set code {integer}
                        set ip {user}
                        set type [hex|string|...]
                        set value {string}
                    next
                end
                set status [disable|enable]
                set switch-id {string}
            next
        end
        config system-interface
            Description: Configure system interface on FortiSwitch.
            edit <name>
                set allowaccess {option1}, {option2}, ...
                set interface {string}
                set ip {ipv4-classnet-host}
                set mode [static|dhcp]
                set status [disable|enable]
                set switch-id {string}
                set type [vlan|physical]
                set vlan {string}
                set vrf {string}
            next
        end
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

+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
| Parameter                    | Description                       | Type                   | Size                   | Default                            |
+==============================+===================================+========================+========================+====================================+
| access-profile               | FortiSwitch access profile.       | string                 | Maximum length: 31     | default                            |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
| delayed-restart-trigger      | Delayed restart triggered for     | integer                | Minimum value: 0       | 0                                  |
|                              | this FortiSwitch.                 |                        | Maximum value: 255     |                                    |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
| description                  | Description.                      | string                 | Maximum length: 63     |                                    |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
| dhcp-server-access-list      | DHCP snooping server access list. | option                 | \-                     | global                             |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | Option      | Description                                            |                                                 |
|                              | +=============+========================================================+                                                 |
|                              | | *global*    | Use global setting for DHCP snooping server access     |                                                 |
|                              | |             | list.                                                  |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *enable*    | Override global setting and enable DHCP server access  |                                                 |
|                              | |             | list.                                                  |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *disable*   | Override global setting and disable DHCP server access |                                                 |
|                              | |             | list.                                                  |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
| directly-connected           | Directly connected FortiSwitch.   | integer                | Minimum value: 0       | 0                                  |
|                              | Read-only.                        |                        | Maximum value: 1       |                                    |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
| dynamic-capability           | List of features this FortiSwitch | user                   | Not Specified          | 0x00000000000000000000000000000000 |
|                              | supports (not configurable) that  |                        |                        |                                    |
|                              | is sent to the FortiGate device   |                        |                        |                                    |
|                              | for subsequent configuration      |                        |                        |                                    |
|                              | initiated by the FortiGate        |                        |                        |                                    |
|                              | device.                           |                        |                        |                                    |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
| dynamically-discovered       | Dynamically discovered            | integer                | Minimum value: 0       | 0                                  |
|                              | FortiSwitch. Read-only.           |                        | Maximum value: 1       |                                    |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
| firmware-provision           | Enable/disable provisioning of    | option                 | \-                     | disable                            |
|                              | firmware to FortiSwitches on join |                        |                        |                                    |
|                              | connection.                       |                        |                        |                                    |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | Option      | Description                                            |                                                 |
|                              | +=============+========================================================+                                                 |
|                              | | *enable*    | Enable firmware-provision.                             |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *disable*   | Disable firmware-provision.                            |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
| firmware-provision-latest    | Enable/disable one-time automatic | option                 | \-                     | disable                            |
|                              | provisioning of the latest        |                        |                        |                                    |
|                              | firmware version.                 |                        |                        |                                    |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | Option      | Description                                            |                                                 |
|                              | +=============+========================================================+                                                 |
|                              | | *disable*   | Do not automatically provision the latest available    |                                                 |
|                              | |             | firmware.                                              |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *once*      | Automatically attempt a one-time upgrade to the latest |                                                 |
|                              | |             | available firmware version.                            |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
| firmware-provision-version   | Firmware version to provision to  | string                 | Maximum length: 35     |                                    |
|                              | this FortiSwitch on bootup        |                        |                        |                                    |
|                              | (major.minor.build, i.e.          |                        |                        |                                    |
|                              | 6.2.1234).                        |                        |                        |                                    |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
| flow-identity                | Flow-tracking netflow ipfix       | user                   | Not Specified          | 00000000                           |
|                              | switch identity in hex            |                        |                        |                                    |
|                              | format(00000000-FFFFFFFF          |                        |                        |                                    |
|                              | default=0).                       |                        |                        |                                    |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
| fsw-wan1-admin               | FortiSwitch WAN1 admin status;    | option                 | \-                     | discovered                         |
|                              | enable to authorize the           |                        |                        |                                    |
|                              | FortiSwitch as a managed switch.  |                        |                        |                                    |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
|                              | +--------------+--------------------------------------------------------+                                                |
|                              | | Option       | Description                                            |                                                |
|                              | +==============+========================================================+                                                |
|                              | | *discovered* | Link waiting to be authorized.                         |                                                |
|                              | +--------------+--------------------------------------------------------+                                                |
|                              | | *disable*    | Link unauthorized.                                     |                                                |
|                              | +--------------+--------------------------------------------------------+                                                |
|                              | | *enable*     | Link authorized.                                       |                                                |
|                              | +--------------+--------------------------------------------------------+                                                |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
| fsw-wan1-peer                | FortiSwitch WAN1 peer port.       | string                 | Maximum length: 35     |                                    |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
| l3-discovered                | Layer 3 management discovered.    | integer                | Minimum value: 0       | 0                                  |
|                              | Read-only.                        |                        | Maximum value: 1       |                                    |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
| max-allowed-trunk-members    | FortiSwitch maximum allowed trunk | integer                | Minimum value: 0       | 0                                  |
|                              | members.                          |                        | Maximum value: 255     |                                    |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
| max-poe-budget               | Max PoE budget for FortiSwitch.   | integer                | Minimum value: 0       | 0                                  |
|                              | Read-only.                        |                        | Maximum value: 65535   |                                    |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
| mclag-igmp-snooping-aware    | Enable/disable MCLAG              | option                 | \-                     | enable                             |
|                              | IGMP-snooping awareness.          |                        |                        |                                    |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | Option      | Description                                            |                                                 |
|                              | +=============+========================================================+                                                 |
|                              | | *enable*    | Enable MCLAG IGMP-snooping awareness.                  |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *disable*   | Disable MCLAG IGMP-snooping awareness.                 |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
| mgmt-mode                    | FortiLink management mode.        | integer                | Minimum value: 0       | 0                                  |
|                              |                                   |                        | Maximum value: 255     |                                    |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
| override-snmp-community      | Enable/disable overriding the     | option                 | \-                     | disable                            |
|                              | global SNMP communities.          |                        |                        |                                    |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | Option      | Description                                            |                                                 |
|                              | +=============+========================================================+                                                 |
|                              | | *enable*    | Override the global SNMP communities.                  |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *disable*   | Use the global SNMP communities.                       |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
| override-snmp-sysinfo        | Enable/disable overriding the     | option                 | \-                     | disable                            |
|                              | global SNMP system information.   |                        |                        |                                    |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | Option      | Description                                            |                                                 |
|                              | +=============+========================================================+                                                 |
|                              | | *disable*   | Use the global SNMP system information.                |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *enable*    | Override the global SNMP system information.           |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
| override-snmp-trap-threshold | Enable/disable overriding the     | option                 | \-                     | disable                            |
|                              | global SNMP trap threshold        |                        |                        |                                    |
|                              | values.                           |                        |                        |                                    |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | Option      | Description                                            |                                                 |
|                              | +=============+========================================================+                                                 |
|                              | | *enable*    | Override the global SNMP trap threshold values.        |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *disable*   | Use the global SNMP trap threshold values.             |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
| override-snmp-user           | Enable/disable overriding the     | option                 | \-                     | disable                            |
|                              | global SNMP users.                |                        |                        |                                    |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | Option      | Description                                            |                                                 |
|                              | +=============+========================================================+                                                 |
|                              | | *enable*    | Override the global SNMPv3 users.                      |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *disable*   | Use the global SNMPv3 users.                           |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
| owner-vdom                   | VDOM which owner of port belongs  | string                 | Maximum length: 31     |                                    |
|                              | to.                               |                        |                        |                                    |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
| poe-detection-type           | PoE detection type for            | integer                | Minimum value: 0       | 0                                  |
|                              | FortiSwitch. Read-only.           |                        | Maximum value: 255     |                                    |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
| poe-pre-standard-detection   | Enable/disable PoE pre-standard   | option                 | \-                     | disable                            |
|                              | detection.                        |                        |                        |                                    |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | Option      | Description                                            |                                                 |
|                              | +=============+========================================================+                                                 |
|                              | | *enable*    | Enable PoE pre-standard detection.                     |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *disable*   | Disable PoE pre-standard detection.                    |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
| port-selection-criteria \*   | Algorithm for aggregate port      | option                 | \-                     | src-dst-ip                         |
|                              | selection.                        |                        |                        |                                    |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
|                              | +---------------+--------------------------------------------------------+                                               |
|                              | | Option        | Description                                            |                                               |
|                              | +===============+========================================================+                                               |
|                              | | *src-mac*     | Source MAC address.                                    |                                               |
|                              | +---------------+--------------------------------------------------------+                                               |
|                              | | *dst-mac*     | Destination MAC address.                               |                                               |
|                              | +---------------+--------------------------------------------------------+                                               |
|                              | | *src-dst-mac* | Source and destination MAC address.                    |                                               |
|                              | +---------------+--------------------------------------------------------+                                               |
|                              | | *src-ip*      | Source IP address.                                     |                                               |
|                              | +---------------+--------------------------------------------------------+                                               |
|                              | | *dst-ip*      | Destination IP address.                                |                                               |
|                              | +---------------+--------------------------------------------------------+                                               |
|                              | | *src-dst-ip*  | Source and destination IP address.                     |                                               |
|                              | +---------------+--------------------------------------------------------+                                               |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
| pre-provisioned              | Pre-provisioned managed switch.   | integer                | Minimum value: 0       | 0                                  |
|                              |                                   |                        | Maximum value: 255     |                                    |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
| ptp-profile                  | PTP profile configuration.        | string                 | Maximum length: 63     | default                            |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
| ptp-status                   | Enable/disable PTP profile on     | option                 | \-                     | disable                            |
|                              | this FortiSwitch.                 |                        |                        |                                    |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | Option      | Description                                            |                                                 |
|                              | +=============+========================================================+                                                 |
|                              | | *disable*   | Disable PTP profile.                                   |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *enable*    | Enable PTP profile.                                    |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
| purdue-level                 | Purdue Level of this FortiSwitch. | option                 | \-                     | 3                                  |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | Option      | Description                                            |                                                 |
|                              | +=============+========================================================+                                                 |
|                              | | *1*         | Level 1 - Basic Control                                |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *1.5*       | Level 1.5                                              |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *2*         | Level 2 - Area Supervisory Control                     |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *2.5*       | Level 2.5                                              |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *3*         | Level 3 - Operations & Control                         |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *3.5*       | Level 3.5                                              |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *4*         | Level 4 - Business Planning & Logistics                |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *5*         | Level 5 - Enterprise Network                           |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *5.5*       | Level 5.5                                              |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
| qos-drop-policy              | Set QoS drop-policy.              | option                 | \-                     | taildrop                           |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
|                              | +--------------------------+--------------------------------------------------------+                                    |
|                              | | Option                   | Description                                            |                                    |
|                              | +==========================+========================================================+                                    |
|                              | | *taildrop*               | Taildrop policy.                                       |                                    |
|                              | +--------------------------+--------------------------------------------------------+                                    |
|                              | | *random-early-detection* | Random early detection drop policy.                    |                                    |
|                              | +--------------------------+--------------------------------------------------------+                                    |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
| qos-red-probability          | Set QoS RED/WRED drop             | integer                | Minimum value: 0       | 12                                 |
|                              | probability.                      |                        | Maximum value: 100     |                                    |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
| radius-nas-ip                | NAS-IP address.                   | ipv4-address           | Not Specified          | 0.0.0.0                            |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
| radius-nas-ip-override       | Use locally defined NAS-IP.       | option                 | \-                     | disable                            |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | Option      | Description                                            |                                                 |
|                              | +=============+========================================================+                                                 |
|                              | | *disable*   | Disable radius-nas-ip-override.                        |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *enable*    | Enable radius-nas-ip-override.                         |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
| route-offload                | Enable/disable route offload on   | option                 | \-                     | disable                            |
|                              | this FortiSwitch.                 |                        |                        |                                    |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | Option      | Description                                            |                                                 |
|                              | +=============+========================================================+                                                 |
|                              | | *disable*   | Disable route offload.                                 |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *enable*    | Enable route offload.                                  |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
| route-offload-mclag          | Enable/disable route offload      | option                 | \-                     | disable                            |
|                              | MCLAG on this FortiSwitch.        |                        |                        |                                    |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | Option      | Description                                            |                                                 |
|                              | +=============+========================================================+                                                 |
|                              | | *disable*   | Disable route offload MCLAG.                           |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *enable*    | Enable route offload MCLAG.                            |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
| sn                           | Managed-switch serial number.     | string                 | Maximum length: 16     |                                    |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
| staged-image-version         | Staged image version for          | string                 | Maximum length: 127    |                                    |
|                              | FortiSwitch.                      |                        |                        |                                    |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
| switch-device-tag            | User definable label/tag.         | string                 | Maximum length: 32     |                                    |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
| switch-dhcp_opt43_key        | DHCP option43 key.                | string                 | Maximum length: 63     |                                    |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
| switch-id                    | Managed-switch name.              | string                 | Maximum length: 35     |                                    |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
| switch-profile               | FortiSwitch profile.              | string                 | Maximum length: 35     | default                            |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
| tdr-supported                | TDR supported. Read-only.         | string                 | Maximum length: 31     |                                    |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
| tunnel-discovered            | SOCKS tunnel management           | integer                | Minimum value: 0       | 0                                  |
|                              | discovered. Read-only.            |                        | Maximum value: 1       |                                    |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
| type                         | Indication of switch type,        | option                 | \-                     | physical                           |
|                              | physical or virtual.              |                        |                        |                                    |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | Option      | Description                                            |                                                 |
|                              | +=============+========================================================+                                                 |
|                              | | *virtual*   | Switch is of type virtual.                             |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
|                              | | *physical*  | Switch is of type physical.                            |                                                 |
|                              | +-------------+--------------------------------------------------------+                                                 |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+
| version                      | FortiSwitch version.              | integer                | Minimum value: 0       | 0                                  |
|                              |                                   |                        | Maximum value: 255     |                                    |
+------------------------------+-----------------------------------+------------------------+------------------------+------------------------------------+

