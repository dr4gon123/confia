# config extension-controller extender-profile

FortiExtender extender profile configuration.

## Syntax

```
config extension-controller extender-profile
    Description: FortiExtender extender profile configuration.
    edit <name>
        set allowaccess {option1}, {option2}, ...
        set bandwidth-limit {integer}
        config cellular
            Description: FortiExtender cellular configuration.
            config controller-report
                Description: FortiExtender controller report configuration.
                set interval {integer}
                set signal-threshold {integer}
                set status [disable|enable]
            end
            set dataplan <name1>, <name2>, ...
            config modem1
                Description: Configuration options for modem 1.
                config auto-switch
                    Description: FortiExtender auto switch configuration.
                    set dataplan [disable|enable]
                    set disconnect [disable|enable]
                    set disconnect-period {integer}
                    set disconnect-threshold {integer}
                    set signal [disable|enable]
                    set switch-back {option1}, {option2}, ...
                    set switch-back-time {string}
                    set switch-back-timer {integer}
                end
                set conn-status {integer}
                set default-sim [sim1|sim2|...]
                set gps [disable|enable]
                set multiple-PDN [disable|enable]
                set pdn1-dataplan {string}
                set pdn2-dataplan {string}
                set pdn3-dataplan {string}
                set pdn4-dataplan {string}
                set preferred-carrier {string}
                set redundant-intf {string}
                set redundant-mode [disable|enable]
                set sim1-pin [disable|enable]
                set sim1-pin-code {password}
                set sim2-pin [disable|enable]
                set sim2-pin-code {password}
            end
            config modem2
                Description: Configuration options for modem 2.
                config auto-switch
                    Description: FortiExtender auto switch configuration.
                    set dataplan [disable|enable]
                    set disconnect [disable|enable]
                    set disconnect-period {integer}
                    set disconnect-threshold {integer}
                    set signal [disable|enable]
                    set switch-back {option1}, {option2}, ...
                    set switch-back-time {string}
                    set switch-back-timer {integer}
                end
                set conn-status {integer}
                set default-sim [sim1|sim2|...]
                set gps [disable|enable]
                set multiple-PDN [disable|enable]
                set pdn1-dataplan {string}
                set pdn2-dataplan {string}
                set pdn3-dataplan {string}
                set pdn4-dataplan {string}
                set preferred-carrier {string}
                set redundant-intf {string}
                set redundant-mode [disable|enable]
                set sim1-pin [disable|enable]
                set sim1-pin-code {password}
                set sim2-pin [disable|enable]
                set sim2-pin-code {password}
            end
            config sms-notification
                Description: FortiExtender cellular SMS notification configuration.
                config alert
                    Description: SMS alert list.
                    set data-exhausted {string}
                    set fgt-backup-mode-switch {string}
                    set low-signal-strength {string}
                    set mode-switch {string}
                    set os-image-fallback {string}
                    set session-disconnect {string}
                    set system-reboot {string}
                end
                config receiver
                    Description: SMS notification receiver list.
                    edit <name>
                        set alert {option1}, {option2}, ...
                        set phone-number {string}
                        set status [disable|enable]
                    next
                end
                set status [disable|enable]
            end
        end
        set enforce-bandwidth [enable|disable]
        set extension [wan-extension|lan-extension]
        set id {integer}
        config lan-extension
            Description: FortiExtender LAN extension configuration.
            config backhaul
                Description: LAN extension backhaul tunnel configuration.
                edit <name>
                    set health-check-fail-cnt {integer}
                    set health-check-interval {integer}
                    set health-check-probe-cnt {integer}
                    set health-check-probe-tm {integer}
                    set health-check-recovery-cnt {integer}
                    set port [wan|lte1|...]
                    set role [primary|secondary]
                    set weight {integer}
                next
            end
            set backhaul-interface {string}
            set backhaul-ip {string}
            config downlinks
                Description: Config FortiExtender downlink interface for LAN extension.
                edit <name>
                    set port [port1|port2|...]
                    set pvid {integer}
                    set type [port|vap]
                    set vap {string}
                    set vids <vid1>, <vid2>, ...
                next
            end
            set ipsec-tunnel {string}
            set link-loadbalance [activebackup|loadbalance]
            config traffic-split-services
                Description: Config FortiExtender traffic split interface for LAN extension.
                edit <name>
                    set address {string}
                    set service {string}
                    set vsdb [disable|enable]
                next
            end
        end
        set login-password {password}
        set login-password-change [yes|default|...]
        set model [FX201E|FX211E|...]
        config wifi
            Description: FortiExtender Wi-Fi configuration.
            set country [--|AF|...]
            config radio-1
                Description: Radio-1 config for Wi-Fi 2.4GHz
                set 80211d [disable|enable]
                set band {option}
                set bandwidth [auto|20MHz|...]
                set beacon-interval {integer}
                set bss-color {integer}
                set bss-color-mode [auto|static]
                set channel {option1}, {option2}, ...
                set extension-channel [auto|higher|...]
                set guard-interval [auto|400ns|...]
                set lan-ext-vap {string}
                set local-vaps <name1>, <name2>, ...
                set max-clients {integer}
                set mode [AP|Client]
                set operating-standard [auto|11A-N-AC-AX|...]
                set power-level {integer}
                set status [disable|enable]
            end
            config radio-2
                Description: Radio-2 config for Wi-Fi 5GHz
                set 80211d [disable|enable]
                set band {option}
                set bandwidth [auto|20MHz|...]
                set beacon-interval {integer}
                set bss-color {integer}
                set bss-color-mode [auto|static]
                set channel {option1}, {option2}, ...
                set extension-channel [auto|higher|...]
                set guard-interval [auto|400ns|...]
                set lan-ext-vap {string}
                set local-vaps <name1>, <name2>, ...
                set max-clients {integer}
                set mode [AP|Client]
                set operating-standard [auto|11A-N-AC-AX|...]
                set power-level {integer}
                set status [disable|enable]
            end
        end
    next
end
```

## Parameters

+-----------------------+-----------------------------------+---------------------+---------------------+---------------------+
| Parameter             | Description                       | Type                | Size                | Default             |
+=======================+===================================+=====================+=====================+=====================+
| allowaccess           | Control management access to the  | option              | \-                  |                     |
|                       | managed extender. Separate        |                     |                     |                     |
|                       | entries with a space.             |                     |                     |                     |
+-----------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                       | +-------------+--------------------------------------------------------+                            |
|                       | | Option      | Description                                            |                            |
|                       | +=============+========================================================+                            |
|                       | | *ping*      | PING access.                                           |                            |
|                       | +-------------+--------------------------------------------------------+                            |
|                       | | *telnet*    | TELNET access.                                         |                            |
|                       | +-------------+--------------------------------------------------------+                            |
|                       | | *http*      | HTTP access.                                           |                            |
|                       | +-------------+--------------------------------------------------------+                            |
|                       | | *https*     | HTTPS access.                                          |                            |
|                       | +-------------+--------------------------------------------------------+                            |
|                       | | *ssh*       | SSH access.                                            |                            |
|                       | +-------------+--------------------------------------------------------+                            |
|                       | | *snmp*      | SNMP access.                                           |                            |
|                       | +-------------+--------------------------------------------------------+                            |
+-----------------------+-----------------------------------+---------------------+---------------------+---------------------+
| bandwidth-limit       | FortiExtender LAN extension       | integer             | Minimum value: 1    | 1024                |
|                       | bandwidth limit (Mbps).           |                     | Maximum value:      |                     |
|                       |                                   |                     | 16776000            |                     |
+-----------------------+-----------------------------------+---------------------+---------------------+---------------------+
| enforce-bandwidth     | Enable/disable enforcement of     | option              | \-                  | disable             |
|                       | bandwidth on LAN extension        |                     |                     |                     |
|                       | interface.                        |                     |                     |                     |
+-----------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                       | +-------------+--------------------------------------------------------+                            |
|                       | | Option      | Description                                            |                            |
|                       | +=============+========================================================+                            |
|                       | | *enable*    | Enable to enforce bandwidth limit on LAN extension     |                            |
|                       | |             | interface.                                             |                            |
|                       | +-------------+--------------------------------------------------------+                            |
|                       | | *disable*   | Disable to enforce bandwidth limit on LAN extension    |                            |
|                       | |             | interface.                                             |                            |
|                       | +-------------+--------------------------------------------------------+                            |
+-----------------------+-----------------------------------+---------------------+---------------------+---------------------+
| extension             | Extension option.                 | option              | \-                  | wan-extension \*\*  |
+-----------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                       | +-----------------+--------------------------------------------------------+                        |
|                       | | Option          | Description                                            |                        |
|                       | +=================+========================================================+                        |
|                       | | *wan-extension* | WAN extension.                                         |                        |
|                       | +-----------------+--------------------------------------------------------+                        |
|                       | | *lan-extension* | LAN extension.                                         |                        |
|                       | +-----------------+--------------------------------------------------------+                        |
+-----------------------+-----------------------------------+---------------------+---------------------+---------------------+
| id                    | ID.                               | integer             | Minimum value: 0    | 32                  |
|                       |                                   |                     | Maximum value:      |                     |
|                       |                                   |                     | 102400000           |                     |
+-----------------------+-----------------------------------+---------------------+---------------------+---------------------+
| login-password        | Set the managed extender\'s       | password            | Not Specified       |                     |
|                       | administrator password.           |                     |                     |                     |
+-----------------------+-----------------------------------+---------------------+---------------------+---------------------+
| login-password-change | Change or reset the administrator | option              | \-                  | no                  |
|                       | password of a managed extender    |                     |                     |                     |
|                       | (yes, default, or no, default =   |                     |                     |                     |
|                       | no).                              |                     |                     |                     |
+-----------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                       | +-------------+--------------------------------------------------------+                            |
|                       | | Option      | Description                                            |                            |
|                       | +=============+========================================================+                            |
|                       | | *yes*       | Change the managed extender\'s administrator password. |                            |
|                       | |             | Use the login-password option to set the password.     |                            |
|                       | +-------------+--------------------------------------------------------+                            |
|                       | | *default*   | Keep the managed extender\'s administrator password    |                            |
|                       | |             | set to the factory default.                            |                            |
|                       | +-------------+--------------------------------------------------------+                            |
|                       | | *no*        | Do not change the managed extender\'s administrator    |                            |
|                       | |             | password.                                              |                            |
|                       | +-------------+--------------------------------------------------------+                            |
+-----------------------+-----------------------------------+---------------------+---------------------+---------------------+
| model                 | Model.                            | option              | \-                  | FX201E              |
+-----------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                       | +-------------+--------------------------------------------------------+                            |
|                       | | Option      | Description                                            |                            |
|                       | +=============+========================================================+                            |
|                       | | *FX201E*    | FEX-201E model.                                        |                            |
|                       | +-------------+--------------------------------------------------------+                            |
|                       | | *FX211E*    | FEX-211E model.                                        |                            |
|                       | +-------------+--------------------------------------------------------+                            |
|                       | | *FX200F*    | FEX-200F model.                                        |                            |
|                       | +-------------+--------------------------------------------------------+                            |
|                       | | *FXA11F*    | FEX-101F-AM model.                                     |                            |
|                       | +-------------+--------------------------------------------------------+                            |
|                       | | *FXE11F*    | FEX-101F-EA model.                                     |                            |
|                       | +-------------+--------------------------------------------------------+                            |
|                       | | *FXA21F*    | FEX-201F-AM model.                                     |                            |
|                       | +-------------+--------------------------------------------------------+                            |
|                       | | *FXE21F*    | FEX-201F-EA model.                                     |                            |
|                       | +-------------+--------------------------------------------------------+                            |
|                       | | *FXA22F*    | FEX-202F-AM model.                                     |                            |
|                       | +-------------+--------------------------------------------------------+                            |
|                       | | *FXE22F*    | FEX-202F-EA model.                                     |                            |
|                       | +-------------+--------------------------------------------------------+                            |
|                       | | *FX212F*    | FEX-212F model.                                        |                            |
|                       | +-------------+--------------------------------------------------------+                            |
|                       | | *FX311F*    | FEX-311F model.                                        |                            |
|                       | +-------------+--------------------------------------------------------+                            |
|                       | | *FX312F*    | FEX-312F model.                                        |                            |
|                       | +-------------+--------------------------------------------------------+                            |
|                       | | *FX511F*    | FEX-511F model.                                        |                            |
|                       | +-------------+--------------------------------------------------------+                            |
|                       | | *FXR51G*    | FER-511G model.                                        |                            |
|                       | +-------------+--------------------------------------------------------+                            |
|                       | | *FXN51G*    | FEX-511G model.                                        |                            |
|                       | +-------------+--------------------------------------------------------+                            |
|                       | | *FXW51G*    | FEX-511G-Wifi model.                                   |                            |
|                       | +-------------+--------------------------------------------------------+                            |
|                       | | *FVG21F*    | FEV-211F model.                                        |                            |
|                       | +-------------+--------------------------------------------------------+                            |
|                       | | *FVA21F*    | FEV-211F-AM model.                                     |                            |
|                       | +-------------+--------------------------------------------------------+                            |
|                       | | *FVG22F*    | FEV-212F model.                                        |                            |
|                       | +-------------+--------------------------------------------------------+                            |
|                       | | *FVA22F*    | FEV-212F-AM model.                                     |                            |
|                       | +-------------+--------------------------------------------------------+                            |
|                       | | *FX04DA*    | FX40D-AMEU model.                                      |                            |
|                       | +-------------+--------------------------------------------------------+                            |
|                       | | *FG*        | FG-CONNECTOR model.                                    |                            |
|                       | +-------------+--------------------------------------------------------+                            |
|                       | | *BS10FW*    | FBS-10FW model.                                        |                            |
|                       | +-------------+--------------------------------------------------------+                            |
|                       | | *BS20GW*    | FBS-20GW model.                                        |                            |
|                       | +-------------+--------------------------------------------------------+                            |
|                       | | *BS20GN*    | FBS-20G model.                                         |                            |
|                       | +-------------+--------------------------------------------------------+                            |
|                       | | *FVG51G*    | FEV-511G model.                                        |                            |
|                       | +-------------+--------------------------------------------------------+                            |
|                       | | *FXE11G*    | FEX-101G model.                                        |                            |
|                       | +-------------+--------------------------------------------------------+                            |
|                       | | *FX211G*    | FEX-211G model.                                        |                            |
|                       | +-------------+--------------------------------------------------------+                            |
|                       | | *FWE50G*    | FEW-50G-EA model.                                      |                            |
|                       | +-------------+--------------------------------------------------------+                            |
|                       | | *FWA50G*    | FEW-50G-AM model.                                      |                            |
|                       | +-------------+--------------------------------------------------------+                            |
+-----------------------+-----------------------------------+---------------------+---------------------+---------------------+
| name                  | FortiExtender profile name.       | string              | Maximum length: 31  |                     |
+-----------------------+-----------------------------------+---------------------+---------------------+---------------------+

