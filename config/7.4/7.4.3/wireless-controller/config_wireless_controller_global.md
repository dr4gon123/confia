# config wireless-controller global

Configure wireless controller global settings.

## Syntax

```
config wireless-controller global
    Description: Configure wireless controller global settings.
    set acd-process-count {integer}
    set ap-log-server [enable|disable]
    set ap-log-server-ip {ipv4-address}
    set ap-log-server-port {integer}
    set control-message-offload {option1}, {option2}, ...
    set data-ethernet-II [enable|disable]
    set dfs-lab-test [enable|disable]
    set discovery-mc-addr {ipv4-address-multicast}
    set fiapp-eth-type {integer}
    set image-download [enable|disable]
    set ipsec-base-ip {ipv4-address}
    set link-aggregation [enable|disable]
    set local-radio-vdom {string}
    set location {string}
    set max-clients {integer}
    set max-retransmit {integer}
    set mesh-eth-type {integer}
    set nac-interval {integer}
    set name {string}
    set rogue-scan-mac-adjacency {integer}
    set rolling-wtp-upgrade [enable|disable]
    set rolling-wtp-upgrade-threshold {string}
    set tunnel-mode [compatible|strict]
    set wpad-process-count {integer}
    set wtp-share [enable|disable]
end
```

## Parameters

+-------------------------------+-----------------------------------+------------------------+----------------------+----------------------+
| Parameter                     | Description                       | Type                   | Size                 | Default              |
+===============================+===================================+========================+======================+======================+
| acd-process-count             | Configure the number cw_acd       | integer                | Minimum value: 0     | 0                    |
|                               | daemons for multi-core CPU        |                        | Maximum value: 255   |                      |
|                               | support.                          |                        |                      |                      |
+-------------------------------+-----------------------------------+------------------------+----------------------+----------------------+
| ap-log-server                 | Enable/disable configuring        | option                 | \-                   | disable              |
|                               | FortiGate to redirect wireless    |                        |                      |                      |
|                               | event log messages or FortiAPs to |                        |                      |                      |
|                               | send UTM log messages to a syslog |                        |                      |                      |
|                               | server.                           |                        |                      |                      |
+-------------------------------+-----------------------------------+------------------------+----------------------+----------------------+
|                               | +-------------+--------------------------------------------------------+                                 |
|                               | | Option      | Description                                            |                                 |
|                               | +=============+========================================================+                                 |
|                               | | *enable*    | Enable AP log server.                                  |                                 |
|                               | +-------------+--------------------------------------------------------+                                 |
|                               | | *disable*   | Disable AP log server.                                 |                                 |
|                               | +-------------+--------------------------------------------------------+                                 |
+-------------------------------+-----------------------------------+------------------------+----------------------+----------------------+
| ap-log-server-ip              | IP address that FortiGate or      | ipv4-address           | Not Specified        | 0.0.0.0              |
|                               | FortiAPs send log messages to.    |                        |                      |                      |
+-------------------------------+-----------------------------------+------------------------+----------------------+----------------------+
| ap-log-server-port            | Port that FortiGate or FortiAPs   | integer                | Minimum value: 0     | 0                    |
|                               | send log messages to.             |                        | Maximum value: 65535 |                      |
+-------------------------------+-----------------------------------+------------------------+----------------------+----------------------+
| control-message-offload       | Configure CAPWAP control message  | option                 | \-                   | ebp-frame            |
|                               | data channel offload.             |                        |                      | aeroscout-tag        |
|                               |                                   |                        |                      | ap-list sta-list     |
|                               |                                   |                        |                      | sta-cap-list stats   |
|                               |                                   |                        |                      | aeroscout-mu         |
|                               |                                   |                        |                      | sta-health           |
|                               |                                   |                        |                      | spectral-analysis    |
+-------------------------------+-----------------------------------+------------------------+----------------------+----------------------+
|                               | +---------------------+--------------------------------------------------------+                         |
|                               | | Option              | Description                                            |                         |
|                               | +=====================+========================================================+                         |
|                               | | *ebp-frame*         | Ekahau blink protocol (EBP) frames.                    |                         |
|                               | +---------------------+--------------------------------------------------------+                         |
|                               | | *aeroscout-tag*     | AeroScout tag.                                         |                         |
|                               | +---------------------+--------------------------------------------------------+                         |
|                               | | *ap-list*           | Rogue AP list.                                         |                         |
|                               | +---------------------+--------------------------------------------------------+                         |
|                               | | *sta-list*          | Rogue STA list.                                        |                         |
|                               | +---------------------+--------------------------------------------------------+                         |
|                               | | *sta-cap-list*      | STA capability list.                                   |                         |
|                               | +---------------------+--------------------------------------------------------+                         |
|                               | | *stats*             | WTP, radio, VAP, and STA statistics.                   |                         |
|                               | +---------------------+--------------------------------------------------------+                         |
|                               | | *aeroscout-mu*      | AeroScout Mobile Unit (MU) report.                     |                         |
|                               | +---------------------+--------------------------------------------------------+                         |
|                               | | *sta-health*        | STA health log.                                        |                         |
|                               | +---------------------+--------------------------------------------------------+                         |
|                               | | *spectral-analysis* | Spectral analysis report.                              |                         |
|                               | +---------------------+--------------------------------------------------------+                         |
+-------------------------------+-----------------------------------+------------------------+----------------------+----------------------+
| data-ethernet-II              | Configure the wireless controller | option                 | \-                   | enable               |
|                               | to use Ethernet II or 802.3       |                        |                      |                      |
|                               | frames with 802.3 data tunnel     |                        |                      |                      |
|                               | mode.                             |                        |                      |                      |
+-------------------------------+-----------------------------------+------------------------+----------------------+----------------------+
|                               | +-------------+--------------------------------------------------------+                                 |
|                               | | Option      | Description                                            |                                 |
|                               | +=============+========================================================+                                 |
|                               | | *enable*    | Use Ethernet II frames with 802.3 data tunnel mode.    |                                 |
|                               | +-------------+--------------------------------------------------------+                                 |
|                               | | *disable*   | Use 802.3 Ethernet frames with 802.3 data tunnel mode. |                                 |
|                               | +-------------+--------------------------------------------------------+                                 |
+-------------------------------+-----------------------------------+------------------------+----------------------+----------------------+
| dfs-lab-test                  | Enable/disable DFS certificate    | option                 | \-                   | disable              |
|                               | lab test mode.                    |                        |                      |                      |
+-------------------------------+-----------------------------------+------------------------+----------------------+----------------------+
|                               | +-------------+--------------------------------------------------------+                                 |
|                               | | Option      | Description                                            |                                 |
|                               | +=============+========================================================+                                 |
|                               | | *enable*    | Enable DFS certificate lab test mode.                  |                                 |
|                               | +-------------+--------------------------------------------------------+                                 |
|                               | | *disable*   | Disable DFS certificate lab test mode.                 |                                 |
|                               | +-------------+--------------------------------------------------------+                                 |
+-------------------------------+-----------------------------------+------------------------+----------------------+----------------------+
| discovery-mc-addr             | Multicast IP address for AP       | ipv4-address-multicast | Not Specified        | 224.0.1.140          |
|                               | discovery.                        |                        |                      |                      |
+-------------------------------+-----------------------------------+------------------------+----------------------+----------------------+
| fiapp-eth-type                | Ethernet type for Fortinet        | integer                | Minimum value: 0     | 5252                 |
|                               | Inter-Access Point Protocol.      |                        | Maximum value: 65535 |                      |
+-------------------------------+-----------------------------------+------------------------+----------------------+----------------------+
| image-download                | Enable/disable WTP image download | option                 | \-                   | enable               |
|                               | at join time.                     |                        |                      |                      |
+-------------------------------+-----------------------------------+------------------------+----------------------+----------------------+
|                               | +-------------+--------------------------------------------------------+                                 |
|                               | | Option      | Description                                            |                                 |
|                               | +=============+========================================================+                                 |
|                               | | *enable*    | Enable WTP image download at join time.                |                                 |
|                               | +-------------+--------------------------------------------------------+                                 |
|                               | | *disable*   | Disable WTP image download at join time.               |                                 |
|                               | +-------------+--------------------------------------------------------+                                 |
+-------------------------------+-----------------------------------+------------------------+----------------------+----------------------+
| ipsec-base-ip                 | Base IP address for IPsec VPN     | ipv4-address           | Not Specified        | 169.254.0.1          |
|                               | tunnels between the access points |                        |                      |                      |
|                               | and the wireless controller.      |                        |                      |                      |
+-------------------------------+-----------------------------------+------------------------+----------------------+----------------------+
| link-aggregation              | Enable/disable calculating the    | option                 | \-                   | disable              |
|                               | CAPWAP transmit hash to load      |                        |                      |                      |
|                               | balance sessions to link          |                        |                      |                      |
|                               | aggregation nodes.                |                        |                      |                      |
+-------------------------------+-----------------------------------+------------------------+----------------------+----------------------+
|                               | +-------------+--------------------------------------------------------+                                 |
|                               | | Option      | Description                                            |                                 |
|                               | +=============+========================================================+                                 |
|                               | | *enable*    | Enable calculating the CAPWAP transmit hash.           |                                 |
|                               | +-------------+--------------------------------------------------------+                                 |
|                               | | *disable*   | Disable calculating the CAPWAP transmit hash.          |                                 |
|                               | +-------------+--------------------------------------------------------+                                 |
+-------------------------------+-----------------------------------+------------------------+----------------------+----------------------+
| local-radio-vdom \*           | Assign local radio\'s virtual     | string                 | Maximum length: 31   | root                 |
|                               | domain.                           |                        |                      |                      |
+-------------------------------+-----------------------------------+------------------------+----------------------+----------------------+
| location                      | Description of the location of    | string                 | Maximum length: 35   |                      |
|                               | the wireless controller.          |                        |                      |                      |
+-------------------------------+-----------------------------------+------------------------+----------------------+----------------------+
| max-clients                   | Maximum number of clients that    | integer                | Minimum value: 0     | 0                    |
|                               | can connect simultaneously.       |                        | Maximum value:       |                      |
|                               |                                   |                        | 4294967295           |                      |
+-------------------------------+-----------------------------------+------------------------+----------------------+----------------------+
| max-retransmit                | Maximum number of tunnel packet   | integer                | Minimum value: 0     | 3                    |
|                               | retransmissions.                  |                        | Maximum value: 64    |                      |
+-------------------------------+-----------------------------------+------------------------+----------------------+----------------------+
| mesh-eth-type                 | Mesh Ethernet identifier included | integer                | Minimum value: 0     | 8755                 |
|                               | in backhaul packets.              |                        | Maximum value: 65535 |                      |
+-------------------------------+-----------------------------------+------------------------+----------------------+----------------------+
| nac-interval                  | Interval in seconds between two   | integer                | Minimum value: 10    | 120                  |
|                               | WiFi network access control.      |                        | Maximum value: 600   |                      |
+-------------------------------+-----------------------------------+------------------------+----------------------+----------------------+
| name                          | Name of the wireless controller.  | string                 | Maximum length: 35   |                      |
+-------------------------------+-----------------------------------+------------------------+----------------------+----------------------+
| rogue-scan-mac-adjacency      | Maximum numerical difference      | integer                | Minimum value: 0     | 7                    |
|                               | between an AP\'s Ethernet and     |                        | Maximum value: 31    |                      |
|                               | wireless MAC values to match for  |                        |                      |                      |
|                               | rogue detection.                  |                        |                      |                      |
+-------------------------------+-----------------------------------+------------------------+----------------------+----------------------+
| rolling-wtp-upgrade           | Enable/disable rolling WTP        | option                 | \-                   | disable              |
|                               | upgrade.                          |                        |                      |                      |
+-------------------------------+-----------------------------------+------------------------+----------------------+----------------------+
|                               | +-------------+--------------------------------------------------------+                                 |
|                               | | Option      | Description                                            |                                 |
|                               | +=============+========================================================+                                 |
|                               | | *enable*    | Enable rolling WTP upgrade.                            |                                 |
|                               | +-------------+--------------------------------------------------------+                                 |
|                               | | *disable*   | Disable rolling WTP upgrade.                           |                                 |
|                               | +-------------+--------------------------------------------------------+                                 |
+-------------------------------+-----------------------------------+------------------------+----------------------+----------------------+
| rolling-wtp-upgrade-threshold | Minimum signal level/threshold in | string                 | Maximum length: 7    | -80                  |
|                               | dBm required for the managed WTP  |                        |                      |                      |
|                               | to be included in rolling WTP     |                        |                      |                      |
|                               | upgrade.                          |                        |                      |                      |
+-------------------------------+-----------------------------------+------------------------+----------------------+----------------------+
| tunnel-mode                   | Compatible/strict tunnel mode.    | option                 | \-                   | compatible           |
+-------------------------------+-----------------------------------+------------------------+----------------------+----------------------+
|                               | +--------------+--------------------------------------------------------+                                |
|                               | | Option       | Description                                            |                                |
|                               | +==============+========================================================+                                |
|                               | | *compatible* | Allow for backward compatible ciphers(3DES+SHA1+Strong |                                |
|                               | |              | list).                                                 |                                |
|                               | +--------------+--------------------------------------------------------+                                |
|                               | | *strict*     | Follow system level strong-crypto ciphers.             |                                |
|                               | +--------------+--------------------------------------------------------+                                |
+-------------------------------+-----------------------------------+------------------------+----------------------+----------------------+
| wpad-process-count            | Wpad daemon process count for     | integer                | Minimum value: 0     | 0                    |
|                               | multi-core CPU support.           |                        | Maximum value: 255   |                      |
+-------------------------------+-----------------------------------+------------------------+----------------------+----------------------+
| wtp-share                     | Enable/disable sharing of WTPs    | option                 | \-                   | disable              |
|                               | between VDOMs.                    |                        |                      |                      |
+-------------------------------+-----------------------------------+------------------------+----------------------+----------------------+
|                               | +-------------+--------------------------------------------------------+                                 |
|                               | | Option      | Description                                            |                                 |
|                               | +=============+========================================================+                                 |
|                               | | *enable*    | WTP can be shared between all VDOMs.                   |                                 |
|                               | +-------------+--------------------------------------------------------+                                 |
|                               | | *disable*   | WTP can be used only in its own VDOM.                  |                                 |
|                               | +-------------+--------------------------------------------------------+                                 |
+-------------------------------+----------------------------------------------------------------------------------------------------------+

