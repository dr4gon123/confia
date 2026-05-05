# config wireless-controller wids-profile

Configure wireless intrusion detection system (WIDS) profiles.

## Syntax

```
config wireless-controller wids-profile
    Description: Configure wireless intrusion detection system (WIDS) profiles.
    edit <name>
        set adhoc-network [enable|disable]
        set adhoc-valid-ssid [enable|disable]
        set air-jack [enable|disable]
        set ap-auto-suppress [enable|disable]
        set ap-bgscan-disable-schedules <name1>, <name2>, ...
        set ap-bgscan-duration {integer}
        set ap-bgscan-idle {integer}
        set ap-bgscan-intv {integer}
        set ap-bgscan-period {integer}
        set ap-bgscan-report-intv {integer}
        set ap-fgscan-report-intv {integer}
        set ap-impersonation [enable|disable]
        set ap-scan [disable|enable]
        set ap-scan-channel-list-2G-5G <chan1>, <chan2>, ...
        set ap-scan-channel-list-6G <chan1>, <chan2>, ...
        set ap-scan-passive [enable|disable]
        set ap-scan-threshold {string}
        set ap-spoofing [enable|disable]
        set asleap-attack [enable|disable]
        set assoc-flood-thresh {integer}
        set assoc-flood-time {integer}
        set assoc-frame-flood [enable|disable]
        set auth-flood-thresh {integer}
        set auth-flood-time {integer}
        set auth-frame-flood [enable|disable]
        set bcn-flood [enable|disable]
        set bcn-flood-thresh {integer}
        set bcn-flood-time {integer}
        set beacon-wrong-channel [enable|disable]
        set block_ack-flood [enable|disable]
        set block_ack-flood-thresh {integer}
        set block_ack-flood-time {integer}
        set chan-based-mitm [enable|disable]
        set client-flood [enable|disable]
        set client-flood-thresh {integer}
        set client-flood-time {integer}
        set comment {string}
        set cts-flood [enable|disable]
        set cts-flood-thresh {integer}
        set cts-flood-time {integer}
        set deauth-broadcast [enable|disable]
        set deauth-unknown-src-thresh {integer}
        set disassoc-broadcast [enable|disable]
        set disconnect-station [enable|disable]
        set eapol-fail-flood [enable|disable]
        set eapol-fail-intv {integer}
        set eapol-fail-thresh {integer}
        set eapol-key-overflow [enable|disable]
        set eapol-logoff-flood [enable|disable]
        set eapol-logoff-intv {integer}
        set eapol-logoff-thresh {integer}
        set eapol-pre-fail-flood [enable|disable]
        set eapol-pre-fail-intv {integer}
        set eapol-pre-fail-thresh {integer}
        set eapol-pre-succ-flood [enable|disable]
        set eapol-pre-succ-intv {integer}
        set eapol-pre-succ-thresh {integer}
        set eapol-start-flood [enable|disable]
        set eapol-start-intv {integer}
        set eapol-start-thresh {integer}
        set eapol-succ-flood [enable|disable]
        set eapol-succ-intv {integer}
        set eapol-succ-thresh {integer}
        set fata-jack [enable|disable]
        set fuzzed-beacon [enable|disable]
        set fuzzed-probe-request [enable|disable]
        set fuzzed-probe-response [enable|disable]
        set hotspotter-attack [enable|disable]
        set ht-40mhz-intolerance [enable|disable]
        set ht-greenfield [enable|disable]
        set invalid-addr-combination [enable|disable]
        set invalid-mac-oui [enable|disable]
        set long-duration-attack [enable|disable]
        set long-duration-thresh {integer}
        set malformed-association [enable|disable]
        set malformed-auth [enable|disable]
        set malformed-ht-ie [enable|disable]
        set netstumbler [enable|disable]
        set netstumbler-thresh {integer}
        set netstumbler-time {integer}
        set null-ssid-probe-resp [enable|disable]
        set omerta-attack [enable|disable]
        set overflow-ie [enable|disable]
        set probe-flood [enable|disable]
        set probe-flood-thresh {integer}
        set probe-flood-time {integer}
        set pspoll-flood [enable|disable]
        set pspoll-flood-thresh {integer}
        set pspoll-flood-time {integer}
        set pwsave-dos-attack [enable|disable]
        set reassoc-flood [enable|disable]
        set reassoc-flood-thresh {integer}
        set reassoc-flood-time {integer}
        set risky-encryption [enable|disable]
        set rts-flood [enable|disable]
        set rts-flood-thresh {integer}
        set rts-flood-time {integer}
        set sensor-mode [disable|foreign|...]
        set spoofed-deauth [enable|disable]
        set unencrypted-valid [enable|disable]
        set valid-client-misassociation [enable|disable]
        set valid-ssid-misuse [enable|disable]
        set weak-wep-iv [enable|disable]
        set wellenreiter [enable|disable]
        set wellenreiter-thresh {integer}
        set wellenreiter-time {integer}
        set windows-bridge [enable|disable]
        set wireless-bridge [enable|disable]
        set wpa-ft-attack [enable|disable]
    next
end
```

## Parameters

+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter                   | Description                       | Type               | Size               | Default            |
+=============================+===================================+====================+====================+====================+
| adhoc-network               | Enable/disable adhoc network      | option             | \-                 | disable            |
|                             | detection (default = disable).    |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable adhoc network detection.                        |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable adhoc network detection.                       |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| adhoc-valid-ssid            | Enable/disable adhoc using valid  | option             | \-                 | disable            |
|                             | SSID detection (default =         |                    |                    |                    |
|                             | disable).                         |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable adhoc using valid SSID detection.               |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable adhoc using valid SSID detection.              |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| air-jack                    | Enable/disable AirJack detection  | option             | \-                 | disable            |
|                             | (default = disable).              |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable AirJack detection.                              |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable AirJack detection.                             |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ap-auto-suppress            | Enable/disable on-wire rogue AP   | option             | \-                 | disable            |
|                             | auto-suppression (default =       |                    |                    |                    |
|                             | disable).                         |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable on-wire rogue AP auto-suppression.              |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable on-wire rogue AP auto-suppression.             |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ap-bgscan-disable-schedules | Firewall schedules for turning    | string             | Maximum length: 35 |                    |
| `<name>`                    | off FortiAP radio background      |                    |                    |                    |
|                             | scan. Background scan will be     |                    |                    |                    |
|                             | disabled when at least one of the |                    |                    |                    |
|                             | schedules is valid. Separate      |                    |                    |                    |
|                             | multiple schedule names with a    |                    |                    |                    |
|                             | space.                            |                    |                    |                    |
|                             |                                   |                    |                    |                    |
|                             | Schedule name.                    |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ap-bgscan-duration          | Listen time on scanning a channel | integer            | Minimum value: 10  | 30                 |
|                             | (10 - 1000 msec, default = 30).   |                    | Maximum value:     |                    |
|                             |                                   |                    | 1000               |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ap-bgscan-idle              | Wait time for channel inactivity  | integer            | Minimum value: 0   | 20                 |
|                             | before scanning this channel (0 - |                    | Maximum value:     |                    |
|                             | 1000 msec, default = 20).         |                    | 1000               |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ap-bgscan-intv              | Period between successive channel | integer            | Minimum value: 1   | 3                  |
|                             | scans (1 - 600 sec, default = 3). |                    | Maximum value: 600 |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ap-bgscan-period            | Period between background scans   | integer            | Minimum value: 10  | 600                |
|                             | (10 - 3600 sec, default = 600).   |                    | Maximum value:     |                    |
|                             |                                   |                    | 3600               |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ap-bgscan-report-intv       | Period between background scan    | integer            | Minimum value: 15  | 30                 |
|                             | reports (15 - 600 sec, default =  |                    | Maximum value: 600 |                    |
|                             | 30).                              |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ap-fgscan-report-intv       | Period between foreground scan    | integer            | Minimum value: 15  | 15                 |
|                             | reports (15 - 600 sec, default =  |                    | Maximum value: 600 |                    |
|                             | 15).                              |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ap-impersonation            | Enable/disable AP impersonation   | option             | \-                 | disable            |
|                             | detection (default = disable).    |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable AP impersonation detection.                     |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable AP impersonation detection.                    |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ap-scan                     | Enable/disable rogue AP           | option             | \-                 | disable            |
|                             | detection.                        |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *disable*   | Disable rogue AP detection.                            |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *enable*    | Enable rogue AP detection.                             |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ap-scan-channel-list-2G-5G  | Selected ap scan channel list for | string             | Maximum length: 3  |                    |
| `<chan>`                    | 2.4G and 5G bands.                |                    |                    |                    |
|                             |                                   |                    |                    |                    |
|                             | Channel number.                   |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ap-scan-channel-list-6G     | Selected ap scan channel list for | string             | Maximum length: 3  |                    |
| `<chan>`                    | 6G band.                          |                    |                    |                    |
|                             |                                   |                    |                    |                    |
|                             | Channel 6g number.                |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ap-scan-passive             | Enable/disable passive scanning.  | option             | \-                 | disable            |
|                             | Enable means do not send probe    |                    |                    |                    |
|                             | request on any channels (default  |                    |                    |                    |
|                             | = disable).                       |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Passive scanning on all channels.                      |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Passive scanning only on DFS channels.                 |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ap-scan-threshold           | Minimum signal level/threshold in | string             | Maximum length: 7  | -90                |
|                             | dBm required for the AP to report |                    |                    |                    |
|                             | detected rogue AP (-95 to -20,    |                    |                    |                    |
|                             | default = -90).                   |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ap-spoofing                 | Enable/disable AP spoofing        | option             | \-                 | disable            |
|                             | detection (default = disable).    |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable AP spoofing detection.                          |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable AP spoofing detection.                         |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| asleap-attack               | Enable/disable asleap attack      | option             | \-                 | disable            |
|                             | detection (default = disable).    |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable asleap attack detection.                        |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable asleap attack detection.                       |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| assoc-flood-thresh          | The threshold value for           | integer            | Minimum value: 1   | 30                 |
|                             | association frame flooding.       |                    | Maximum value: 100 |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| assoc-flood-time            | Number of seconds after which a   | integer            | Minimum value: 5   | 10                 |
|                             | station is considered not         |                    | Maximum value: 120 |                    |
|                             | connected.                        |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| assoc-frame-flood           | Enable/disable association frame  | option             | \-                 | disable            |
|                             | flooding detection (default =     |                    |                    |                    |
|                             | disable).                         |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable association frame flooding detection.           |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable association frame flooding detection.          |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| auth-flood-thresh           | The threshold value for           | integer            | Minimum value: 1   | 30                 |
|                             | authentication frame flooding.    |                    | Maximum value: 100 |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| auth-flood-time             | Number of seconds after which a   | integer            | Minimum value: 5   | 10                 |
|                             | station is considered not         |                    | Maximum value: 120 |                    |
|                             | connected.                        |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| auth-frame-flood            | Enable/disable authentication     | option             | \-                 | disable            |
|                             | frame flooding detection (default |                    |                    |                    |
|                             | = disable).                       |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable authentication frame flooding detection.        |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable authentication frame flooding detection.       |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| bcn-flood                   | Enable/disable bcn flood          | option             | \-                 | disable            |
|                             | detection (default = disable).    |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable bcn flood detection.                            |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable bcn flood detection.                           |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| bcn-flood-thresh            | The threshold value for bcn       | integer            | Minimum value: 1   | 15                 |
|                             | flood.                            |                    | Maximum value:     |                    |
|                             |                                   |                    | 65100              |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| bcn-flood-time              | Detection Window Period.          | integer            | Minimum value: 1   | 1                  |
|                             |                                   |                    | Maximum value: 120 |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| beacon-wrong-channel        | Enable/disable beacon wrong       | option             | \-                 | disable            |
|                             | channel detection (default =      |                    |                    |                    |
|                             | disable).                         |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable beacon wrong channel detection.                 |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable beacon wrong channel detection.                |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| block_ack-flood             | Enable/disable block_ack flood    | option             | \-                 | disable            |
|                             | detection (default = disable).    |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable block_ack flood detection.                      |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable block_ack flood detection.                     |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| block_ack-flood-thresh      | The threshold value for block_ack | integer            | Minimum value: 1   | 50                 |
|                             | flood.                            |                    | Maximum value:     |                    |
|                             |                                   |                    | 65100              |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| block_ack-flood-time        | Detection Window Period.          | integer            | Minimum value: 1   | 1                  |
|                             |                                   |                    | Maximum value: 120 |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| chan-based-mitm             | Enable/disable channel based mitm | option             | \-                 | disable            |
|                             | detection (default = disable).    |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable channel based mitm detection.                   |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable channel based mitm detection.                  |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| client-flood                | Enable/disable client flood       | option             | \-                 | disable            |
|                             | detection (default = disable).    |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable client flood detection.                         |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable client flood detection.                        |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| client-flood-thresh         | The threshold value for client    | integer            | Minimum value: 1   | 30                 |
|                             | flood.                            |                    | Maximum value:     |                    |
|                             |                                   |                    | 65100              |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| client-flood-time           | Detection Window Period.          | integer            | Minimum value: 1   | 10                 |
|                             |                                   |                    | Maximum value: 120 |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| comment                     | Comment.                          | string             | Maximum length: 63 |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| cts-flood                   | Enable/disable cts flood          | option             | \-                 | disable            |
|                             | detection (default = disable).    |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable cts flood detection.                            |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable cts flood detection.                           |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| cts-flood-thresh            | The threshold value for cts       | integer            | Minimum value: 1   | 30                 |
|                             | flood.                            |                    | Maximum value:     |                    |
|                             |                                   |                    | 65100              |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| cts-flood-time              | Detection Window Period.          | integer            | Minimum value: 1   | 10                 |
|                             |                                   |                    | Maximum value: 120 |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| deauth-broadcast            | Enable/disable broadcasting       | option             | \-                 | disable            |
|                             | de-authentication detection       |                    |                    |                    |
|                             | (default = disable).              |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable broadcast de-authentication detection.          |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable broadcast de-authentication detection.         |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| deauth-unknown-src-thresh   | Threshold value per second to     | integer            | Minimum value: 0   | 10                 |
|                             | deauth unknown src for DoS attack |                    | Maximum value:     |                    |
|                             | (0: no limit).                    |                    | 65535              |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| disassoc-broadcast          | Enable/disable broadcast          | option             | \-                 | disable            |
|                             | dis-association detection         |                    |                    |                    |
|                             | (default = disable).              |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable broadcast dis-association detection.            |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable broadcast dis-association detection.           |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| disconnect-station          | Enable/disable disconnect station | option             | \-                 | disable            |
|                             | detection (default = disable).    |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable disconnect station detection.                   |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable disconnect station detection.                  |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| eapol-fail-flood            | Enable/disable EAPOL-Failure      | option             | \-                 | disable            |
|                             | flooding (to AP) detection        |                    |                    |                    |
|                             | (default = disable).              |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable EAPOL-Failure flooding detection.               |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable EAPOL-Failure flooding detection.              |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| eapol-fail-intv             | The detection interval for        | integer            | Minimum value: 1   | 1                  |
|                             | EAPOL-Failure flooding (1 - 3600  |                    | Maximum value:     |                    |
|                             | sec).                             |                    | 3600               |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| eapol-fail-thresh           | The threshold value for           | integer            | Minimum value: 2   | 10                 |
|                             | EAPOL-Failure flooding in         |                    | Maximum value: 100 |                    |
|                             | specified interval.               |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| eapol-key-overflow          | Enable/disable overflow EAPOL key | option             | \-                 | disable            |
|                             | detection (default = disable).    |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable overflow EAPOL key detection.                   |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable overflow EAPOL key detection.                  |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| eapol-logoff-flood          | Enable/disable EAPOL-Logoff       | option             | \-                 | disable            |
|                             | flooding (to AP) detection        |                    |                    |                    |
|                             | (default = disable).              |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable EAPOL-Logoff flooding detection.                |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable EAPOL-Logoff flooding detection.               |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| eapol-logoff-intv           | The detection interval for        | integer            | Minimum value: 1   | 1                  |
|                             | EAPOL-Logoff flooding (1 - 3600   |                    | Maximum value:     |                    |
|                             | sec).                             |                    | 3600               |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| eapol-logoff-thresh         | The threshold value for           | integer            | Minimum value: 2   | 10                 |
|                             | EAPOL-Logoff flooding in          |                    | Maximum value: 100 |                    |
|                             | specified interval.               |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| eapol-pre-fail-flood        | Enable/disable premature          | option             | \-                 | disable            |
|                             | EAPOL-Failure flooding (to STA)   |                    |                    |                    |
|                             | detection (default = disable).    |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable premature EAPOL-Failure flooding detection.     |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable premature EAPOL-Failure flooding detection.    |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| eapol-pre-fail-intv         | The detection interval for        | integer            | Minimum value: 1   | 1                  |
|                             | premature EAPOL-Failure flooding  |                    | Maximum value:     |                    |
|                             | (1 - 3600 sec).                   |                    | 3600               |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| eapol-pre-fail-thresh       | The threshold value for premature | integer            | Minimum value: 2   | 10                 |
|                             | EAPOL-Failure flooding in         |                    | Maximum value: 100 |                    |
|                             | specified interval.               |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| eapol-pre-succ-flood        | Enable/disable premature          | option             | \-                 | disable            |
|                             | EAPOL-Success flooding (to STA)   |                    |                    |                    |
|                             | detection (default = disable).    |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable premature EAPOL-Success flooding detection.     |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable premature EAPOL-Success flooding detection.    |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| eapol-pre-succ-intv         | The detection interval for        | integer            | Minimum value: 1   | 1                  |
|                             | premature EAPOL-Success flooding  |                    | Maximum value:     |                    |
|                             | (1 - 3600 sec).                   |                    | 3600               |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| eapol-pre-succ-thresh       | The threshold value for premature | integer            | Minimum value: 2   | 10                 |
|                             | EAPOL-Success flooding in         |                    | Maximum value: 100 |                    |
|                             | specified interval.               |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| eapol-start-flood           | Enable/disable EAPOL-Start        | option             | \-                 | disable            |
|                             | flooding (to AP) detection        |                    |                    |                    |
|                             | (default = disable).              |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable EAPOL-Start flooding detection.                 |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable EAPOL-Start flooding detection.                |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| eapol-start-intv            | The detection interval for        | integer            | Minimum value: 1   | 1                  |
|                             | EAPOL-Start flooding (1 - 3600    |                    | Maximum value:     |                    |
|                             | sec).                             |                    | 3600               |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| eapol-start-thresh          | The threshold value for           | integer            | Minimum value: 2   | 10                 |
|                             | EAPOL-Start flooding in specified |                    | Maximum value: 100 |                    |
|                             | interval.                         |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| eapol-succ-flood            | Enable/disable EAPOL-Success      | option             | \-                 | disable            |
|                             | flooding (to AP) detection        |                    |                    |                    |
|                             | (default = disable).              |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable EAPOL-Success flooding detection.               |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable EAPOL-Success flooding detection.              |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| eapol-succ-intv             | The detection interval for        | integer            | Minimum value: 1   | 1                  |
|                             | EAPOL-Success flooding (1 - 3600  |                    | Maximum value:     |                    |
|                             | sec).                             |                    | 3600               |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| eapol-succ-thresh           | The threshold value for           | integer            | Minimum value: 2   | 10                 |
|                             | EAPOL-Success flooding in         |                    | Maximum value: 100 |                    |
|                             | specified interval.               |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| fata-jack                   | Enable/disable FATA-Jack          | option             | \-                 | disable            |
|                             | detection (default = disable).    |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable FATA-Jack detection.                            |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable FATA-Jack detection.                           |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| fuzzed-beacon               | Enable/disable fuzzed beacon      | option             | \-                 | disable            |
|                             | detection (default = disable).    |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable fuzzed beacon detection.                        |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable fuzzed beacon detection.                       |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| fuzzed-probe-request        | Enable/disable fuzzed probe       | option             | \-                 | disable            |
|                             | request detection (default =      |                    |                    |                    |
|                             | disable).                         |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable fuzzed probe request detection.                 |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable fuzzed probe request detection.                |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| fuzzed-probe-response       | Enable/disable fuzzed probe       | option             | \-                 | disable            |
|                             | response detection (default =     |                    |                    |                    |
|                             | disable).                         |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable fuzzed probe response detection.                |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable fuzzed probe response detection.               |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| hotspotter-attack           | Enable/disable hotspotter attack  | option             | \-                 | disable            |
|                             | detection (default = disable).    |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable hotspotter attack detection.                    |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable hotspotter attack detection.                   |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ht-40mhz-intolerance        | Enable/disable HT 40 MHz          | option             | \-                 | disable            |
|                             | intolerance detection (default =  |                    |                    |                    |
|                             | disable).                         |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable HT 40 MHz intolerance detection.                |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable HT 40 MHz intolerance detection.               |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ht-greenfield               | Enable/disable HT greenfield      | option             | \-                 | disable            |
|                             | detection (default = disable).    |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable HT greenfield detection.                        |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable HT greenfield detection.                       |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| invalid-addr-combination    | Enable/disable invalid address    | option             | \-                 | disable            |
|                             | combination detection (default =  |                    |                    |                    |
|                             | disable).                         |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable invalid address combination detection.          |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable invalid address combination detection.         |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| invalid-mac-oui             | Enable/disable invalid MAC OUI    | option             | \-                 | disable            |
|                             | detection.                        |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable invalid MAC OUI detection.                      |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable invalid MAC OUI detection.                     |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| long-duration-attack        | Enable/disable long duration      | option             | \-                 | disable            |
|                             | attack detection based on user    |                    |                    |                    |
|                             | configured threshold (default =   |                    |                    |                    |
|                             | disable).                         |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable long duration attack detection.                 |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable long duration attack detection.                |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| long-duration-thresh        | Threshold value for long duration | integer            | Minimum value:     | 8200               |
|                             | attack detection (1000 - 32767    |                    | 1000 Maximum       |                    |
|                             | usec, default = 8200).            |                    | value: 32767       |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| malformed-association       | Enable/disable malformed          | option             | \-                 | disable            |
|                             | association request detection     |                    |                    |                    |
|                             | (default = disable).              |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable malformed association request detection.        |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable malformed association request detection.       |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| malformed-auth              | Enable/disable malformed auth     | option             | \-                 | disable            |
|                             | frame detection (default =        |                    |                    |                    |
|                             | disable).                         |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable malformed auth frame detection.                 |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable malformed auth frame detection.                |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| malformed-ht-ie             | Enable/disable malformed HT IE    | option             | \-                 | disable            |
|                             | detection (default = disable).    |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable malformed HT IE detection.                      |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable malformed HT IE detection.                     |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| name                        | WIDS profile name.                | string             | Maximum length: 35 |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| netstumbler                 | Enable/disable netstumbler        | option             | \-                 | disable            |
|                             | detection (default = disable).    |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable netstumbler detection.                          |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable netstumbler detection.                         |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| netstumbler-thresh          | The threshold value for           | integer            | Minimum value: 1   | 5                  |
|                             | netstumbler.                      |                    | Maximum value:     |                    |
|                             |                                   |                    | 65100              |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| netstumbler-time            | Detection Window Period.          | integer            | Minimum value: 1   | 30                 |
|                             |                                   |                    | Maximum value: 120 |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| null-ssid-probe-resp        | Enable/disable null SSID probe    | option             | \-                 | disable            |
|                             | response detection (default =     |                    |                    |                    |
|                             | disable).                         |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable null SSID probe resp detection.                 |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable null SSID probe resp detection.                |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| omerta-attack               | Enable/disable omerta attack      | option             | \-                 | disable            |
|                             | detection (default = disable).    |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable omerta attack detection.                        |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable omerta attack detection.                       |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| overflow-ie                 | Enable/disable overflow IE        | option             | \-                 | disable            |
|                             | detection (default = disable).    |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable overflow IE detection.                          |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable overflow IE detection.                         |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| probe-flood                 | Enable/disable probe flood        | option             | \-                 | disable            |
|                             | detection (default = disable).    |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable probe flood detection.                          |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable probe flood detection.                         |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| probe-flood-thresh          | The threshold value for probe     | integer            | Minimum value: 1   | 30                 |
|                             | flood.                            |                    | Maximum value:     |                    |
|                             |                                   |                    | 65100              |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| probe-flood-time            | Detection Window Period.          | integer            | Minimum value: 1   | 1                  |
|                             |                                   |                    | Maximum value: 120 |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| pspoll-flood                | Enable/disable pspoll flood       | option             | \-                 | disable            |
|                             | detection (default = disable).    |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable pspoll flood detection.                         |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable pspoll flood detection.                        |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| pspoll-flood-thresh         | The threshold value for pspoll    | integer            | Minimum value: 1   | 30                 |
|                             | flood.                            |                    | Maximum value:     |                    |
|                             |                                   |                    | 65100              |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| pspoll-flood-time           | Detection Window Period.          | integer            | Minimum value: 1   | 1                  |
|                             |                                   |                    | Maximum value: 120 |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| pwsave-dos-attack           | Enable/disable power save DOS     | option             | \-                 | disable            |
|                             | attack detection (default =       |                    |                    |                    |
|                             | disable).                         |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable power save DOS attack detection.                |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable power save DOS attack detection.               |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| reassoc-flood               | Enable/disable reassociation      | option             | \-                 | disable            |
|                             | flood detection (default =        |                    |                    |                    |
|                             | disable).                         |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable reassociation flood detection.                  |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable reassociation flood detection.                 |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| reassoc-flood-thresh        | The threshold value for           | integer            | Minimum value: 1   | 30                 |
|                             | reassociation flood.              |                    | Maximum value:     |                    |
|                             |                                   |                    | 65100              |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| reassoc-flood-time          | Detection Window Period.          | integer            | Minimum value: 1   | 10                 |
|                             |                                   |                    | Maximum value: 120 |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| risky-encryption            | Enable/disable Risky Encryption   | option             | \-                 | disable            |
|                             | detection (default = disable).    |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable Risky Encryption detection.                     |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable Risky Encryption detection.                    |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| rts-flood                   | Enable/disable rts flood          | option             | \-                 | disable            |
|                             | detection (default = disable).    |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable rts flood detection.                            |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable rts flood detection.                           |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| rts-flood-thresh            | The threshold value for rts       | integer            | Minimum value: 1   | 30                 |
|                             | flood.                            |                    | Maximum value:     |                    |
|                             |                                   |                    | 65100              |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| rts-flood-time              | Detection Window Period.          | integer            | Minimum value: 1   | 10                 |
|                             |                                   |                    | Maximum value: 120 |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| sensor-mode                 | Scan nearby WiFi stations         | option             | \-                 | disable            |
|                             | (default = disable).              |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *disable*   | Disable the scan.                                      |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *foreign*   | Enable the scan and monitor foreign channels. Foreign  |                         |
|                             | |             | channels are all other available channels than the     |                         |
|                             | |             | current operating channel.                             |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *both*      | Enable the scan and monitor both foreign and home      |                         |
|                             | |             | channels. Select this option to monitor all WiFi       |                         |
|                             | |             | channels.                                              |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| spoofed-deauth              | Enable/disable spoofed            | option             | \-                 | disable            |
|                             | de-authentication attack          |                    |                    |                    |
|                             | detection (default = disable).    |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable spoofed de-authentication attack detection.     |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable spoofed de-authentication attack detection.    |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| unencrypted-valid           | Enable/disable unencrypted valid  | option             | \-                 | disable            |
|                             | detection (default = disable).    |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable unencrypted valid detection.                    |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable unencrypted valid detection.                   |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| valid-client-misassociation | Enable/disable valid client       | option             | \-                 | disable            |
|                             | misassociation detection (default |                    |                    |                    |
|                             | = disable).                       |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable valid client misassociation detection.          |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable valid client misassociation detection.         |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| valid-ssid-misuse           | Enable/disable valid SSID misuse  | option             | \-                 | disable            |
|                             | detection (default = disable).    |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable valid SSID misuse detection.                    |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable valid SSID misuse detection.                   |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| weak-wep-iv                 | Enable/disable weak WEP IV        | option             | \-                 | disable            |
|                             | (Initialization Vector) detection |                    |                    |                    |
|                             | (default = disable).              |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable weak WEP IV detection.                          |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable weak WEP IV detection.                         |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| wellenreiter                | Enable/disable wellenreiter       | option             | \-                 | disable            |
|                             | detection (default = disable).    |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable wellenreiter detection.                         |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable wellenreiter detection.                        |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| wellenreiter-thresh         | The threshold value for           | integer            | Minimum value: 1   | 5                  |
|                             | wellenreiter.                     |                    | Maximum value:     |                    |
|                             |                                   |                    | 65100              |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| wellenreiter-time           | Detection Window Period.          | integer            | Minimum value: 1   | 30                 |
|                             |                                   |                    | Maximum value: 120 |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| windows-bridge              | Enable/disable windows bridge     | option             | \-                 | disable            |
|                             | detection (default = disable).    |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable windows bridge detection.                       |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable windows bridge detection.                      |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| wireless-bridge             | Enable/disable wireless bridge    | option             | \-                 | disable            |
|                             | detection (default = disable).    |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable wireless bridge detection.                      |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable wireless bridge detection.                     |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| wpa-ft-attack               | Enable/disable WPA FT attack      | option             | \-                 | disable            |
|                             | detection (default = disable).    |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable WPA FT attack detection.                        |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable WPA FT attack detection.                       |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+--------------------------------------------------------------------------------------------------+

