# config wireless-controller wids-profile

Configure wireless intrusion detection system (WIDS) profiles.

## Syntax

```
config wireless-controller wids-profile
    Description: Configure wireless intrusion detection system (WIDS) profiles.
    edit <name>
        set ap-auto-suppress [enable|disable]
        set ap-bgscan-disable-schedules <name1>, <name2>, ...
        set ap-bgscan-duration {integer}
        set ap-bgscan-idle {integer}
        set ap-bgscan-intv {integer}
        set ap-bgscan-period {integer}
        set ap-bgscan-report-intv {integer}
        set ap-fgscan-report-intv {integer}
        set ap-scan [disable|enable]
        set ap-scan-channel-list-2G-5G <chan1>, <chan2>, ...
        set ap-scan-channel-list-6G <chan1>, <chan2>, ...
        set ap-scan-passive [enable|disable]
        set ap-scan-threshold {string}
        set asleap-attack [enable|disable]
        set assoc-flood-thresh {integer}
        set assoc-flood-time {integer}
        set assoc-frame-flood [enable|disable]
        set auth-flood-thresh {integer}
        set auth-flood-time {integer}
        set auth-frame-flood [enable|disable]
        set comment {string}
        set deauth-broadcast [enable|disable]
        set deauth-unknown-src-thresh {integer}
        set eapol-fail-flood [enable|disable]
        set eapol-fail-intv {integer}
        set eapol-fail-thresh {integer}
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
        set invalid-mac-oui [enable|disable]
        set long-duration-attack [enable|disable]
        set long-duration-thresh {integer}
        set null-ssid-probe-resp [enable|disable]
        set sensor-mode [disable|foreign|...]
        set spoofed-deauth [enable|disable]
        set weak-wep-iv [enable|disable]
        set wireless-bridge [enable|disable]
    next
end
```

## Parameters

+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter                   | Description                       | Type               | Size               | Default            |
+=============================+===================================+====================+====================+====================+
| ap-auto-suppress            | Enable/disable on-wire rogue AP   | option             | \-                 | disable            |
|                             | auto-suppression.                 |                    |                    |                    |
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
| ap-bgscan-duration          | Listen time on scanning a         | integer            | Minimum value: 10  | 30                 |
|                             | channel.                          |                    | Maximum value:     |                    |
|                             |                                   |                    | 1000               |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ap-bgscan-idle              | Wait time for channel inactivity  | integer            | Minimum value: 0   | 20                 |
|                             | before scanning this channel.     |                    | Maximum value:     |                    |
|                             |                                   |                    | 1000               |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ap-bgscan-intv              | Period between successive channel | integer            | Minimum value: 1   | 3                  |
|                             | scans.                            |                    | Maximum value: 600 |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ap-bgscan-period            | Period between background scans.  | integer            | Minimum value: 10  | 600                |
|                             |                                   |                    | Maximum value:     |                    |
|                             |                                   |                    | 3600               |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ap-bgscan-report-intv       | Period between background scan    | integer            | Minimum value: 15  | 30                 |
|                             | reports.                          |                    | Maximum value: 600 |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ap-fgscan-report-intv       | Period between foreground scan    | integer            | Minimum value: 15  | 15                 |
|                             | reports.                          |                    | Maximum value: 600 |                    |
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
|                             | request on any channels.          |                    |                    |                    |
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
|                             | detected rogue AP.                |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| asleap-attack               | Enable/disable asleap attack      | option             | \-                 | disable            |
|                             | detection.                        |                    |                    |                    |
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
|                             | flooding detection.               |                    |                    |                    |
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
|                             | frame flooding detection.         |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable authentication frame flooding detection.        |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable authentication frame flooding detection.       |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| comment                     | Comment.                          | string             | Maximum length: 63 |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| deauth-broadcast            | Enable/disable broadcasting       | option             | \-                 | disable            |
|                             | de-authentication detection.      |                    |                    |                    |
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
| eapol-fail-flood            | Enable/disable EAPOL-Failure      | option             | \-                 | disable            |
|                             | flooding.                         |                    |                    |                    |
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
|                             | EAPOL-Failure flooding.           |                    | Maximum value:     |                    |
|                             |                                   |                    | 3600               |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| eapol-fail-thresh           | The threshold value for           | integer            | Minimum value: 2   | 10                 |
|                             | EAPOL-Failure flooding in         |                    | Maximum value: 100 |                    |
|                             | specified interval.               |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| eapol-logoff-flood          | Enable/disable EAPOL-Logoff       | option             | \-                 | disable            |
|                             | flooding.                         |                    |                    |                    |
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
|                             | EAPOL-Logoff flooding.            |                    | Maximum value:     |                    |
|                             |                                   |                    | 3600               |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| eapol-logoff-thresh         | The threshold value for           | integer            | Minimum value: 2   | 10                 |
|                             | EAPOL-Logoff flooding in          |                    | Maximum value: 100 |                    |
|                             | specified interval.               |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| eapol-pre-fail-flood        | Enable/disable premature          | option             | \-                 | disable            |
|                             | EAPOL-Failure flooding.           |                    |                    |                    |
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
|                             | premature EAPOL-Failure flooding. |                    | Maximum value:     |                    |
|                             |                                   |                    | 3600               |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| eapol-pre-fail-thresh       | The threshold value for premature | integer            | Minimum value: 2   | 10                 |
|                             | EAPOL-Failure flooding in         |                    | Maximum value: 100 |                    |
|                             | specified interval.               |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| eapol-pre-succ-flood        | Enable/disable premature          | option             | \-                 | disable            |
|                             | EAPOL-Success flooding.           |                    |                    |                    |
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
|                             | premature EAPOL-Success flooding. |                    | Maximum value:     |                    |
|                             |                                   |                    | 3600               |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| eapol-pre-succ-thresh       | The threshold value for premature | integer            | Minimum value: 2   | 10                 |
|                             | EAPOL-Success flooding in         |                    | Maximum value: 100 |                    |
|                             | specified interval.               |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| eapol-start-flood           | Enable/disable EAPOL-Start        | option             | \-                 | disable            |
|                             | flooding.                         |                    |                    |                    |
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
|                             | EAPOL-Start flooding.             |                    | Maximum value:     |                    |
|                             |                                   |                    | 3600               |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| eapol-start-thresh          | The threshold value for           | integer            | Minimum value: 2   | 10                 |
|                             | EAPOL-Start flooding in specified |                    | Maximum value: 100 |                    |
|                             | interval.                         |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| eapol-succ-flood            | Enable/disable EAPOL-Success      | option             | \-                 | disable            |
|                             | flooding.                         |                    |                    |                    |
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
|                             | EAPOL-Success flooding.           |                    | Maximum value:     |                    |
|                             |                                   |                    | 3600               |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| eapol-succ-thresh           | The threshold value for           | integer            | Minimum value: 2   | 10                 |
|                             | EAPOL-Success flooding in         |                    | Maximum value: 100 |                    |
|                             | specified interval.               |                    |                    |                    |
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
|                             | configured threshold.             |                    |                    |                    |
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
|                             | attack detection.                 |                    | 1000 Maximum       |                    |
|                             |                                   |                    | value: 32767       |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| name                        | WIDS profile name.                | string             | Maximum length: 35 |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| null-ssid-probe-resp        | Enable/disable null SSID probe    | option             | \-                 | disable            |
|                             | response detection.               |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable null SSID probe resp detection.                 |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable null SSID probe resp detection.                |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| sensor-mode                 | Scan nearby WiFi stations.        | option             | \-                 | disable            |
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
|                             | detection.                        |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable spoofed de-authentication attack detection.     |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable spoofed de-authentication attack detection.    |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| weak-wep-iv                 | Enable/disable weak WEP IV.       | option             | \-                 | disable            |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable weak WEP IV detection.                          |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable weak WEP IV detection.                         |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| wireless-bridge             | Enable/disable wireless bridge    | option             | \-                 | disable            |
|                             | detection.                        |                    |                    |                    |
+-----------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | Option      | Description                                            |                         |
|                             | +=============+========================================================+                         |
|                             | | *enable*    | Enable wireless bridge detection.                      |                         |
|                             | +-------------+--------------------------------------------------------+                         |
|                             | | *disable*   | Disable wireless bridge detection.                     |                         |
|                             | +-------------+--------------------------------------------------------+                         |
+-----------------------------+--------------------------------------------------------------------------------------------------+

