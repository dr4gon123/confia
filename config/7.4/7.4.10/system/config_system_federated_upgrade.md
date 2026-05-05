# config system federated-upgrade

Coordinate federated upgrades within the Security Fabric.

## Syntax

```
config system federated-upgrade
    Description: Coordinate federated upgrades within the Security Fabric.
    set failure-device {string}
    set failure-reason [none|internal|...]
    set ha-reboot-controller {string}
    config known-ha-members
        Description: Known members of the HA cluster. If a member is missing at upgrade time, the upgrade will be cancelled.
        edit <serial>
        next
    end
    set next-path-index {integer}
    config node-list
        Description: Nodes which will be included in the upgrade.
        edit <serial>
            set coordinating-fortigate {string}
            set device-type [fortigate|fortiswitch|...]
            set maximum-minutes {integer}
            set setup-time {user}
            set time {user}
            set timing [immediate|scheduled]
            set upgrade-path {user}
        next
    end
    set source [user|auto-firmware-upgrade|...]
    set status [disabled|initialized|...]
    set upgrade-id {integer}
end
```

## Parameters

+----------------------+-----------------------------------+------------------------+------------------------+------------------------+
| Parameter            | Description                       | Type                   | Size                   | Default                |
+======================+===================================+========================+========================+========================+
| failure-device       | Serial number of the node to      | string                 | Maximum length: 79     |                        |
|                      | include.                          |                        |                        |                        |
+----------------------+-----------------------------------+------------------------+------------------------+------------------------+
| failure-reason       | Reason for upgrade failure.       | option                 | \-                     | none                   |
+----------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                      | +-----------------------------+--------------------------------------------------------+                     |
|                      | | Option                      | Description                                            |                     |
|                      | +=============================+========================================================+                     |
|                      | | *none*                      | No failure.                                            |                     |
|                      | +-----------------------------+--------------------------------------------------------+                     |
|                      | | *internal*                  | An internal error occurred.                            |                     |
|                      | +-----------------------------+--------------------------------------------------------+                     |
|                      | | *timeout*                   | The upgrade timed out.                                 |                     |
|                      | +-----------------------------+--------------------------------------------------------+                     |
|                      | | *device-type-unsupported*   | The device type was not supported by the FortiGate.    |                     |
|                      | +-----------------------------+--------------------------------------------------------+                     |
|                      | | *download-failed*           | The image could not be downloaded.                     |                     |
|                      | +-----------------------------+--------------------------------------------------------+                     |
|                      | | *device-missing*            | The device was disconnected from the FortiGate.        |                     |
|                      | +-----------------------------+--------------------------------------------------------+                     |
|                      | | *version-unavailable*       | An image matching the device and version could not be  |                     |
|                      | |                             | found.                                                 |                     |
|                      | +-----------------------------+--------------------------------------------------------+                     |
|                      | | *staging-failed*            | The image could not be pushed to the device.           |                     |
|                      | +-----------------------------+--------------------------------------------------------+                     |
|                      | | *reboot-failed*             | The device could not be rebooted.                      |                     |
|                      | +-----------------------------+--------------------------------------------------------+                     |
|                      | | *device-not-reconnected*    | The device did not reconnect after rebooting.          |                     |
|                      | +-----------------------------+--------------------------------------------------------+                     |
|                      | | *node-not-ready*            | A device in the Security Fabric tree was not ready.    |                     |
|                      | +-----------------------------+--------------------------------------------------------+                     |
|                      | | *no-final-confirmation*     | The coordinating FortiGate did not confirm the         |                     |
|                      | |                             | upgrade.                                               |                     |
|                      | +-----------------------------+--------------------------------------------------------+                     |
|                      | | *no-confirmation-query*     | A downstream FortiGate did not initiate final          |                     |
|                      | |                             | confirmation.                                          |                     |
|                      | +-----------------------------+--------------------------------------------------------+                     |
|                      | | *config-error-log-nonempty* | Configuration errors encountered during the upgrade.   |                     |
|                      | +-----------------------------+--------------------------------------------------------+                     |
|                      | | *csf-tree-not-supported*    | The Security Fabric is disabled on the root FortiGate  |                     |
|                      | +-----------------------------+--------------------------------------------------------+                     |
|                      | | *node-failed*               | A device in the Security Fabric tree failed.           |                     |
|                      | +-----------------------------+--------------------------------------------------------+                     |
+----------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ha-reboot-controller | Serial number of the FortiGate    | string                 | Maximum length: 79     |                        |
|                      | unit that will control the reboot |                        |                        |                        |
|                      | process for the federated upgrade |                        |                        |                        |
|                      | of the HA cluster.                |                        |                        |                        |
+----------------------+-----------------------------------+------------------------+------------------------+------------------------+
| next-path-index      | The index of the next image to    | integer                | Minimum value: 0       | 0                      |
|                      | upgrade to.                       |                        | Maximum value: 10      |                        |
+----------------------+-----------------------------------+------------------------+------------------------+------------------------+
| source               | Source that set up the federated  | option                 | \-                     | user                   |
|                      | upgrade config.                   |                        |                        |                        |
+----------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                      | +-------------------------+--------------------------------------------------------+                         |
|                      | | Option                  | Description                                            |                         |
|                      | +=========================+========================================================+                         |
|                      | | *user*                  | Upgrade configured based on user input.                |                         |
|                      | +-------------------------+--------------------------------------------------------+                         |
|                      | | *auto-firmware-upgrade* | Upgrade configured by the FortiGuard                   |                         |
|                      | |                         | auto-firmware-upgrade feature.                         |                         |
|                      | +-------------------------+--------------------------------------------------------+                         |
|                      | | *forced-upgrade*        | Forced upgrade due to no support contract or           |                         |
|                      | |                         | end-of-life firmware.                                  |                         |
|                      | +-------------------------+--------------------------------------------------------+                         |
+----------------------+-----------------------------------+------------------------+------------------------+------------------------+
| status               | Current status of the upgrade.    | option                 | \-                     | disabled               |
+----------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                      | +-----------------------+--------------------------------------------------------+                           |
|                      | | Option                | Description                                            |                           |
|                      | +=======================+========================================================+                           |
|                      | | *disabled*            | No federated upgrade has been configured.              |                           |
|                      | +-----------------------+--------------------------------------------------------+                           |
|                      | | *initialized*         | The upgrade has been configured.                       |                           |
|                      | +-----------------------+--------------------------------------------------------+                           |
|                      | | *downloading*         | The image is downloading in preparation for the        |                           |
|                      | |                       | upgrade.                                               |                           |
|                      | +-----------------------+--------------------------------------------------------+                           |
|                      | | *device-disconnected* | The image downloads are complete, but one or more      |                           |
|                      | |                       | devices have disconnected.                             |                           |
|                      | +-----------------------+--------------------------------------------------------+                           |
|                      | | *ready*               | The image download finished and the upgrade is         |                           |
|                      | |                       | pending.                                               |                           |
|                      | +-----------------------+--------------------------------------------------------+                           |
|                      | | *coordinating*        | The upgrade is coordinating with other running         |                           |
|                      | |                       | upgrades.                                              |                           |
|                      | +-----------------------+--------------------------------------------------------+                           |
|                      | | *staging*             | The upgrade is confirmed and images are being staged.  |                           |
|                      | +-----------------------+--------------------------------------------------------+                           |
|                      | | *final-check*         | The upgrade is ready and final checks are in progress. |                           |
|                      | +-----------------------+--------------------------------------------------------+                           |
|                      | | *upgrade-devices*     | The upgrade is ready and devices are being rebooted.   |                           |
|                      | +-----------------------+--------------------------------------------------------+                           |
|                      | | *cancelled*           | The upgrade was cancelled due to the tree not being    |                           |
|                      | |                       | ready.                                                 |                           |
|                      | +-----------------------+--------------------------------------------------------+                           |
|                      | | *confirmed*           | The upgrade was confirmed and reboots are running.     |                           |
|                      | +-----------------------+--------------------------------------------------------+                           |
|                      | | *done*                | The upgrade completed successfully.                    |                           |
|                      | +-----------------------+--------------------------------------------------------+                           |
|                      | | *failed*              | The upgrade failed due to a local issue.               |                           |
|                      | +-----------------------+--------------------------------------------------------+                           |
+----------------------+-----------------------------------+------------------------+------------------------+------------------------+
| upgrade-id           | Unique identifier for this        | integer                | Minimum value: 0       | 0                      |
|                      | upgrade.                          |                        | Maximum value:         |                        |
|                      |                                   |                        | 4294967295             |                        |
+----------------------+-----------------------------------+------------------------+------------------------+------------------------+

