# config wireless-controller wtp

Configure Wireless Termination Points (WTPs), that is, FortiAPs or APs to be managed by FortiGate.

## Syntax

```
config wireless-controller wtp
    Description: Configure Wireless Termination Points (WTPs), that is, FortiAPs or APs to be managed by FortiGate.
    edit <wtp-id>
        set admin [discovered|disable|...]
        set allowaccess {option1}, {option2}, ...
        set apcfg-profile {string}
        set ble-major-id {integer}
        set ble-minor-id {integer}
        set bonjour-profile {string}
        set comment {var-string}
        set coordinate-latitude {string}
        set coordinate-longitude {string}
        set firmware-provision {string}
        set firmware-provision-latest [disable|once]
        set image-download [enable|disable]
        set index {integer}
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
        set led-state [enable|disable]
        set location {string}
        set login-passwd {password}
        set login-passwd-change [yes|default|...]
        set mesh-bridge-enable [default|enable|...]
        set name {string}
        set override-allowaccess [enable|disable]
        set override-ip-fragment [enable|disable]
        set override-lan [enable|disable]
        set override-led-state [enable|disable]
        set override-login-passwd-change [enable|disable]
        set override-split-tunnel [enable|disable]
        set override-wan-port-mode [enable|disable]
        set purdue-level [1|1.5|...]
        config radio-1
            Description: Configuration options for radio 1.
            set auto-power-high {integer}
            set auto-power-level [enable|disable]
            set auto-power-low {integer}
            set auto-power-target {string}
            set band {option1}, {option2}, ...
            set channel <chan1>, <chan2>, ...
            set drma-manual-mode [ap|monitor|...]
            set override-band [enable|disable]
            set override-channel [enable|disable]
            set override-txpower [enable|disable]
            set override-vaps [enable|disable]
            set power-level {integer}
            set power-mode [dBm|percentage]
            set power-value {integer}
            set vap-all [tunnel|bridge|...]
            set vaps <name1>, <name2>, ...
        end
        config radio-2
            Description: Configuration options for radio 2.
            set auto-power-high {integer}
            set auto-power-level [enable|disable]
            set auto-power-low {integer}
            set auto-power-target {string}
            set band {option1}, {option2}, ...
            set channel <chan1>, <chan2>, ...
            set drma-manual-mode [ap|monitor|...]
            set override-band [enable|disable]
            set override-channel [enable|disable]
            set override-txpower [enable|disable]
            set override-vaps [enable|disable]
            set power-level {integer}
            set power-mode [dBm|percentage]
            set power-value {integer}
            set vap-all [tunnel|bridge|...]
            set vaps <name1>, <name2>, ...
        end
        config radio-3
            Description: Configuration options for radio 3.
            set auto-power-high {integer}
            set auto-power-level [enable|disable]
            set auto-power-low {integer}
            set auto-power-target {string}
            set band {option1}, {option2}, ...
            set channel <chan1>, <chan2>, ...
            set drma-manual-mode [ap|monitor|...]
            set override-band [enable|disable]
            set override-channel [enable|disable]
            set override-txpower [enable|disable]
            set override-vaps [enable|disable]
            set power-level {integer}
            set power-mode [dBm|percentage]
            set power-value {integer}
            set vap-all [tunnel|bridge|...]
            set vaps <name1>, <name2>, ...
        end
        config radio-4
            Description: Configuration options for radio 4.
            set auto-power-high {integer}
            set auto-power-level [enable|disable]
            set auto-power-low {integer}
            set auto-power-target {string}
            set band {option1}, {option2}, ...
            set channel <chan1>, <chan2>, ...
            set drma-manual-mode [ap|monitor|...]
            set override-band [enable|disable]
            set override-channel [enable|disable]
            set override-txpower [enable|disable]
            set override-vaps [enable|disable]
            set power-level {integer}
            set power-mode [dBm|percentage]
            set power-value {integer}
            set vap-all [tunnel|bridge|...]
            set vaps <name1>, <name2>, ...
        end
        set region {string}
        set region-x {string}
        set region-y {string}
        config split-tunneling-acl
            Description: Split tunneling ACL filter list.
            edit <id>
                set dest-ip {ipv4-classnet}
            next
        end
        set split-tunneling-acl-local-ap-subnet [enable|disable]
        set split-tunneling-acl-path [tunnel|local]
        set tun-mtu-downlink {integer}
        set tun-mtu-uplink {integer}
        set uuid {uuid}
        set wan-port-mode [wan-lan|wan-only]
        set wtp-profile {string}
    next
end
```

## Parameters

+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| Parameter                           | Description                       | Type                   | Size                   | Default                              |
+=====================================+===================================+========================+========================+======================================+
| admin                               | Configure how the FortiGate       | option                 | \-                     | enable                               |
|                                     | operating as a wireless           |                        |                        |                                      |
|                                     | controller discovers and manages  |                        |                        |                                      |
|                                     | this WTP, AP or FortiAP.          |                        |                        |                                      |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                     | +--------------+--------------------------------------------------------+                                                  |
|                                     | | Option       | Description                                            |                                                  |
|                                     | +==============+========================================================+                                                  |
|                                     | | *discovered* | FortiGate wireless controller discovers the WTP, AP,   |                                                  |
|                                     | |              | or FortiAP though discovery or join request messages.  |                                                  |
|                                     | +--------------+--------------------------------------------------------+                                                  |
|                                     | | *disable*    | FortiGate wireless controller is configured to not     |                                                  |
|                                     | |              | provide service to this WTP.                           |                                                  |
|                                     | +--------------+--------------------------------------------------------+                                                  |
|                                     | | *enable*     | FortiGate wireless controller is configured to provide |                                                  |
|                                     | |              | service to this WTP.                                   |                                                  |
|                                     | +--------------+--------------------------------------------------------+                                                  |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| allowaccess                         | Control management access to the  | option                 | \-                     |                                      |
|                                     | managed WTP, FortiAP, or AP.      |                        |                        |                                      |
|                                     | Separate entries with a space.    |                        |                        |                                      |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                     | +-------------+--------------------------------------------------------+                                                   |
|                                     | | Option      | Description                                            |                                                   |
|                                     | +=============+========================================================+                                                   |
|                                     | | *https*     | HTTPS access.                                          |                                                   |
|                                     | +-------------+--------------------------------------------------------+                                                   |
|                                     | | *ssh*       | SSH access.                                            |                                                   |
|                                     | +-------------+--------------------------------------------------------+                                                   |
|                                     | | *snmp*      | SNMP access.                                           |                                                   |
|                                     | +-------------+--------------------------------------------------------+                                                   |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| apcfg-profile                       | AP local configuration profile    | string                 | Maximum length: 35     |                                      |
|                                     | name.                             |                        |                        |                                      |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ble-major-id                        | Override BLE Major ID.            | integer                | Minimum value: 0       | 0                                    |
|                                     |                                   |                        | Maximum value: 65535   |                                      |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ble-minor-id                        | Override BLE Minor ID.            | integer                | Minimum value: 0       | 0                                    |
|                                     |                                   |                        | Maximum value: 65535   |                                      |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| bonjour-profile                     | Bonjour profile name.             | string                 | Maximum length: 35     |                                      |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| comment                             | Comment.                          | var-string             | Maximum length: 255    |                                      |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| coordinate-latitude                 | WTP latitude coordinate.          | string                 | Maximum length: 19     |                                      |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| coordinate-longitude                | WTP longitude coordinate.         | string                 | Maximum length: 19     |                                      |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| firmware-provision                  | Firmware version to provision to  | string                 | Maximum length: 35     |                                      |
|                                     | this FortiAP on bootup            |                        |                        |                                      |
|                                     | (major.minor.build, i.e.          |                        |                        |                                      |
|                                     | 6.2.1234).                        |                        |                        |                                      |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| firmware-provision-latest           | Enable/disable one-time automatic | option                 | \-                     | disable                              |
|                                     | provisioning of the latest        |                        |                        |                                      |
|                                     | firmware version.                 |                        |                        |                                      |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                     | +-------------+--------------------------------------------------------+                                                   |
|                                     | | Option      | Description                                            |                                                   |
|                                     | +=============+========================================================+                                                   |
|                                     | | *disable*   | Do not automatically provision the latest available    |                                                   |
|                                     | |             | firmware.                                              |                                                   |
|                                     | +-------------+--------------------------------------------------------+                                                   |
|                                     | | *once*      | Automatically attempt a one-time upgrade to the latest |                                                   |
|                                     | |             | available firmware version.                            |                                                   |
|                                     | +-------------+--------------------------------------------------------+                                                   |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| image-download                      | Enable/disable WTP image          | option                 | \-                     | enable                               |
|                                     | download.                         |                        |                        |                                      |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                     | +-------------+--------------------------------------------------------+                                                   |
|                                     | | Option      | Description                                            |                                                   |
|                                     | +=============+========================================================+                                                   |
|                                     | | *enable*    | Enable WTP image download at join time.                |                                                   |
|                                     | +-------------+--------------------------------------------------------+                                                   |
|                                     | | *disable*   | Disable WTP image download at join time.               |                                                   |
|                                     | +-------------+--------------------------------------------------------+                                                   |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| index                               | Index. Read-only.                 | integer                | Minimum value: 0       | 0                                    |
|                                     |                                   |                        | Maximum value:         |                                      |
|                                     |                                   |                        | 4294967295             |                                      |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ip-fragment-preventing              | Method.                           | option                 | \-                     | tcp-mss-adjust                       |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                     | +--------------------+--------------------------------------------------------+                                            |
|                                     | | Option             | Description                                            |                                            |
|                                     | +====================+========================================================+                                            |
|                                     | | *tcp-mss-adjust*   | TCP maximum segment size adjustment.                   |                                            |
|                                     | +--------------------+--------------------------------------------------------+                                            |
|                                     | | *icmp-unreachable* | Drop packet and send ICMP Destination Unreachable      |                                            |
|                                     | +--------------------+--------------------------------------------------------+                                            |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| led-state                           | Enable to allow the FortiAPs LEDs | option                 | \-                     | enable                               |
|                                     | to light. Disable to keep the     |                        |                        |                                      |
|                                     | LEDs off. You may want to keep    |                        |                        |                                      |
|                                     | the LEDs off so they are not      |                        |                        |                                      |
|                                     | distracting in low light areas    |                        |                        |                                      |
|                                     | etc.                              |                        |                        |                                      |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                     | +-------------+--------------------------------------------------------+                                                   |
|                                     | | Option      | Description                                            |                                                   |
|                                     | +=============+========================================================+                                                   |
|                                     | | *enable*    | Allow the LEDs on this FortiAP to light.               |                                                   |
|                                     | +-------------+--------------------------------------------------------+                                                   |
|                                     | | *disable*   | Keep the LEDs on this FortiAP off.                     |                                                   |
|                                     | +-------------+--------------------------------------------------------+                                                   |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| location                            | Field for describing the physical | string                 | Maximum length: 35     |                                      |
|                                     | location of the WTP, AP or        |                        |                        |                                      |
|                                     | FortiAP.                          |                        |                        |                                      |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| login-passwd                        | Set the managed WTP, FortiAP, or  | password               | Not Specified          |                                      |
|                                     | AP\'s administrator password.     |                        |                        |                                      |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| login-passwd-change                 | Change or reset the administrator | option                 | \-                     | no                                   |
|                                     | password of a managed WTP,        |                        |                        |                                      |
|                                     | FortiAP or AP.                    |                        |                        |                                      |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                     | +-------------+--------------------------------------------------------+                                                   |
|                                     | | Option      | Description                                            |                                                   |
|                                     | +=============+========================================================+                                                   |
|                                     | | *yes*       | Change the managed WTP, FortiAP or AP\'s administrator |                                                   |
|                                     | |             | password. Use the login-password option to set the     |                                                   |
|                                     | |             | password.                                              |                                                   |
|                                     | +-------------+--------------------------------------------------------+                                                   |
|                                     | | *default*   | Keep the managed WTP, FortiAP or AP\'s administrator   |                                                   |
|                                     | |             | password set to the factory default.                   |                                                   |
|                                     | +-------------+--------------------------------------------------------+                                                   |
|                                     | | *no*        | Do not change the managed WTP, FortiAP or AP\'s        |                                                   |
|                                     | |             | administrator password.                                |                                                   |
|                                     | +-------------+--------------------------------------------------------+                                                   |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| mesh-bridge-enable                  | Enable/disable mesh Ethernet      | option                 | \-                     | default                              |
|                                     | bridge when WTP is configured as  |                        |                        |                                      |
|                                     | a mesh branch/leaf AP.            |                        |                        |                                      |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                     | +-------------+--------------------------------------------------------+                                                   |
|                                     | | Option      | Description                                            |                                                   |
|                                     | +=============+========================================================+                                                   |
|                                     | | *default*   | Use mesh Ethernet bridge local setting on the WTP.     |                                                   |
|                                     | +-------------+--------------------------------------------------------+                                                   |
|                                     | | *enable*    | Turn on mesh Ethernet bridge on the WTP.               |                                                   |
|                                     | +-------------+--------------------------------------------------------+                                                   |
|                                     | | *disable*   | Turn off mesh Ethernet bridge on the WTP.              |                                                   |
|                                     | +-------------+--------------------------------------------------------+                                                   |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| name                                | WTP, AP or FortiAP configuration  | string                 | Maximum length: 35     |                                      |
|                                     | name.                             |                        |                        |                                      |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| override-allowaccess                | Enable to override the WTP        | option                 | \-                     | disable                              |
|                                     | profile management access         |                        |                        |                                      |
|                                     | configuration.                    |                        |                        |                                      |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                     | +-------------+--------------------------------------------------------+                                                   |
|                                     | | Option      | Description                                            |                                                   |
|                                     | +=============+========================================================+                                                   |
|                                     | | *enable*    | Override the WTP profile management access             |                                                   |
|                                     | |             | configuration.                                         |                                                   |
|                                     | +-------------+--------------------------------------------------------+                                                   |
|                                     | | *disable*   | Use the WTP profile management access configuration.   |                                                   |
|                                     | +-------------+--------------------------------------------------------+                                                   |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| override-ip-fragment                | Enable/disable overriding the WTP | option                 | \-                     | disable                              |
|                                     | profile IP fragment prevention    |                        |                        |                                      |
|                                     | setting.                          |                        |                        |                                      |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                     | +-------------+--------------------------------------------------------+                                                   |
|                                     | | Option      | Description                                            |                                                   |
|                                     | +=============+========================================================+                                                   |
|                                     | | *enable*    | Override the WTP profile IP fragment prevention        |                                                   |
|                                     | |             | setting.                                               |                                                   |
|                                     | +-------------+--------------------------------------------------------+                                                   |
|                                     | | *disable*   | Use the WTP profile IP fragment prevention setting.    |                                                   |
|                                     | +-------------+--------------------------------------------------------+                                                   |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| override-lan                        | Enable to override the WTP        | option                 | \-                     | disable                              |
|                                     | profile LAN port setting.         |                        |                        |                                      |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                     | +-------------+--------------------------------------------------------+                                                   |
|                                     | | Option      | Description                                            |                                                   |
|                                     | +=============+========================================================+                                                   |
|                                     | | *enable*    | Override the WTP profile LAN port setting.             |                                                   |
|                                     | +-------------+--------------------------------------------------------+                                                   |
|                                     | | *disable*   | Use the WTP profile LAN port setting.                  |                                                   |
|                                     | +-------------+--------------------------------------------------------+                                                   |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| override-led-state                  | Enable to override the profile    | option                 | \-                     | disable                              |
|                                     | LED state setting for this        |                        |                        |                                      |
|                                     | FortiAP. You must enable this     |                        |                        |                                      |
|                                     | option to use the led-state       |                        |                        |                                      |
|                                     | command to turn off the           |                        |                        |                                      |
|                                     | FortiAP\'s LEDs.                  |                        |                        |                                      |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                     | +-------------+--------------------------------------------------------+                                                   |
|                                     | | Option      | Description                                            |                                                   |
|                                     | +=============+========================================================+                                                   |
|                                     | | *enable*    | Override the WTP profile LED state.                    |                                                   |
|                                     | +-------------+--------------------------------------------------------+                                                   |
|                                     | | *disable*   | Use the WTP profile LED state.                         |                                                   |
|                                     | +-------------+--------------------------------------------------------+                                                   |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| override-login-passwd-change        | Enable to override the WTP        | option                 | \-                     | disable                              |
|                                     | profile login-password            |                        |                        |                                      |
|                                     | (administrator password) setting. |                        |                        |                                      |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                     | +-------------+--------------------------------------------------------+                                                   |
|                                     | | Option      | Description                                            |                                                   |
|                                     | +=============+========================================================+                                                   |
|                                     | | *enable*    | Override the WTP profile login-password (administrator |                                                   |
|                                     | |             | password) setting.                                     |                                                   |
|                                     | +-------------+--------------------------------------------------------+                                                   |
|                                     | | *disable*   | Use the the WTP profile login-password (administrator  |                                                   |
|                                     | |             | password) setting.                                     |                                                   |
|                                     | +-------------+--------------------------------------------------------+                                                   |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| override-split-tunnel               | Enable/disable overriding the WTP | option                 | \-                     | disable                              |
|                                     | profile split tunneling setting.  |                        |                        |                                      |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                     | +-------------+--------------------------------------------------------+                                                   |
|                                     | | Option      | Description                                            |                                                   |
|                                     | +=============+========================================================+                                                   |
|                                     | | *enable*    | Override the WTP profile split tunneling setting.      |                                                   |
|                                     | +-------------+--------------------------------------------------------+                                                   |
|                                     | | *disable*   | Use the WTP profile split tunneling setting.           |                                                   |
|                                     | +-------------+--------------------------------------------------------+                                                   |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| override-wan-port-mode              | Enable/disable overriding the     | option                 | \-                     | disable                              |
|                                     | wan-port-mode in the WTP profile. |                        |                        |                                      |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                     | +-------------+--------------------------------------------------------+                                                   |
|                                     | | Option      | Description                                            |                                                   |
|                                     | +=============+========================================================+                                                   |
|                                     | | *enable*    | Override the WTP profile wan-port-mode.                |                                                   |
|                                     | +-------------+--------------------------------------------------------+                                                   |
|                                     | | *disable*   | Use the wan-port-mode in the WTP profile.              |                                                   |
|                                     | +-------------+--------------------------------------------------------+                                                   |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| purdue-level                        | Purdue Level of this WTP.         | option                 | \-                     | 3                                    |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                     | +-------------+--------------------------------------------------------+                                                   |
|                                     | | Option      | Description                                            |                                                   |
|                                     | +=============+========================================================+                                                   |
|                                     | | *1*         | Level 1 - Basic Control                                |                                                   |
|                                     | +-------------+--------------------------------------------------------+                                                   |
|                                     | | *1.5*       | Level 1.5                                              |                                                   |
|                                     | +-------------+--------------------------------------------------------+                                                   |
|                                     | | *2*         | Level 2 - Area Supervisory Control                     |                                                   |
|                                     | +-------------+--------------------------------------------------------+                                                   |
|                                     | | *2.5*       | Level 2.5                                              |                                                   |
|                                     | +-------------+--------------------------------------------------------+                                                   |
|                                     | | *3*         | Level 3 - Operations & Control                         |                                                   |
|                                     | +-------------+--------------------------------------------------------+                                                   |
|                                     | | *3.5*       | Level 3.5                                              |                                                   |
|                                     | +-------------+--------------------------------------------------------+                                                   |
|                                     | | *4*         | Level 4 - Business Planning & Logistics                |                                                   |
|                                     | +-------------+--------------------------------------------------------+                                                   |
|                                     | | *5*         | Level 5 - Enterprise Network                           |                                                   |
|                                     | +-------------+--------------------------------------------------------+                                                   |
|                                     | | *5.5*       | Level 5.5                                              |                                                   |
|                                     | +-------------+--------------------------------------------------------+                                                   |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| region                              | Region name WTP is associated     | string                 | Maximum length: 35     |                                      |
|                                     | with.                             |                        |                        |                                      |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| region-x                            | Relative horizontal region        | string                 | Maximum length: 15     | 0                                    |
|                                     | coordinate (between 0 and 1).     |                        |                        |                                      |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| region-y                            | Relative vertical region          | string                 | Maximum length: 15     | 0                                    |
|                                     | coordinate (between 0 and 1).     |                        |                        |                                      |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| split-tunneling-acl-local-ap-subnet | Enable/disable automatically      | option                 | \-                     | disable                              |
|                                     | adding local subnetwork of        |                        |                        |                                      |
|                                     | FortiAP to split-tunneling ACL.   |                        |                        |                                      |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                     | +-------------+--------------------------------------------------------+                                                   |
|                                     | | Option      | Description                                            |                                                   |
|                                     | +=============+========================================================+                                                   |
|                                     | | *enable*    | Enable automatically adding local subnetwork of        |                                                   |
|                                     | |             | FortiAP to split-tunneling ACL.                        |                                                   |
|                                     | +-------------+--------------------------------------------------------+                                                   |
|                                     | | *disable*   | Disable automatically adding local subnetwork of       |                                                   |
|                                     | |             | FortiAP to split-tunneling ACL.                        |                                                   |
|                                     | +-------------+--------------------------------------------------------+                                                   |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| split-tunneling-acl-path            | Split tunneling ACL path is       | option                 | \-                     | local                                |
|                                     | local/tunnel.                     |                        |                        |                                      |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                     | +-------------+--------------------------------------------------------+                                                   |
|                                     | | Option      | Description                                            |                                                   |
|                                     | +=============+========================================================+                                                   |
|                                     | | *tunnel*    | Split tunneling ACL list traffic will be tunnel.       |                                                   |
|                                     | +-------------+--------------------------------------------------------+                                                   |
|                                     | | *local*     | Split tunneling ACL list traffic will be local NATed.  |                                                   |
|                                     | +-------------+--------------------------------------------------------+                                                   |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| tun-mtu-downlink                    | The MTU of downlink CAPWAP        | integer                | Minimum value: 576     | 0                                    |
|                                     | tunnel.                           |                        | Maximum value: 1500    |                                      |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| tun-mtu-uplink                      | The maximum transmission unit.    | integer                | Minimum value: 576     | 0                                    |
|                                     |                                   |                        | Maximum value: 1500    |                                      |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| uuid                                | Universally Unique Identifier     | uuid                   | Not Specified          | 00000000-0000-0000-0000-000000000000 |
|                                     | (UUID; automatically assigned but |                        |                        |                                      |
|                                     | can be manually reset).           |                        |                        |                                      |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| wan-port-mode                       | Enable/disable using the FortiAP  | option                 | \-                     | wan-only                             |
|                                     | WAN port as a LAN port.           |                        |                        |                                      |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                     | +-------------+--------------------------------------------------------+                                                   |
|                                     | | Option      | Description                                            |                                                   |
|                                     | +=============+========================================================+                                                   |
|                                     | | *wan-lan*   | Use the FortiAP WAN port as a LAN port.                |                                                   |
|                                     | +-------------+--------------------------------------------------------+                                                   |
|                                     | | *wan-only*  | Do not use the WAN port as a LAN port.                 |                                                   |
|                                     | +-------------+--------------------------------------------------------+                                                   |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| wtp-id                              | WTP ID.                           | string                 | Maximum length: 35     |                                      |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| wtp-profile                         | WTP profile name to apply to this | string                 | Maximum length: 35     |                                      |
|                                     | WTP, AP or FortiAP.               |                        |                        |                                      |
+-------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+

