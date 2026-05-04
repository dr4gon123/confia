# config system device-upgrade

Independent upgrades for managed devices.

## Syntax

```
config system device-upgrade
    Description: Independent upgrades for managed devices.
    edit <serial>
        set device-type [fortiswitch|fortiap|...]
        set failure-reason [none|internal|...]
        set maximum-minutes {integer}
        set setup-time {user}
        set status [disabled|initialized|...]
        set time {user}
        set timing [immediate|scheduled]
        set upgrade-path {user}
    next
end
```

## Parameters

+-----------------+-----------------------------------+------------------------+------------------------+------------------------+
| Parameter       | Description                       | Type                   | Size                   | Default                |
+=================+===================================+========================+========================+========================+
| device-type     | Fortinet device type.             | option                 | \-                     | fortiswitch            |
+-----------------+-----------------------------------+------------------------+------------------------+------------------------+
|                 | +-----------------+--------------------------------------------------------+                                 |
|                 | | Option          | Description                                            |                                 |
|                 | +=================+========================================================+                                 |
|                 | | *fortiswitch*   | This device is a FortiSwitch.                          |                                 |
|                 | +-----------------+--------------------------------------------------------+                                 |
|                 | | *fortiap*       | This device is a FortiAP.                              |                                 |
|                 | +-----------------+--------------------------------------------------------+                                 |
|                 | | *fortiextender* | This device is a FortiExtender.                        |                                 |
|                 | +-----------------+--------------------------------------------------------+                                 |
+-----------------+-----------------------------------+------------------------+------------------------+------------------------+
| failure-reason  | Upgrade failure reason.           | option                 | \-                     | none                   |
+-----------------+-----------------------------------+------------------------+------------------------+------------------------+
|                 | +-----------------------------+--------------------------------------------------------+                     |
|                 | | Option                      | Description                                            |                     |
|                 | +=============================+========================================================+                     |
|                 | | *none*                      | No failure.                                            |                     |
|                 | +-----------------------------+--------------------------------------------------------+                     |
|                 | | *internal*                  | An internal error occurred.                            |                     |
|                 | +-----------------------------+--------------------------------------------------------+                     |
|                 | | *timeout*                   | The upgrade timed out.                                 |                     |
|                 | +-----------------------------+--------------------------------------------------------+                     |
|                 | | *device-type-unsupported*   | The device type was not supported by the FortiGate.    |                     |
|                 | +-----------------------------+--------------------------------------------------------+                     |
|                 | | *download-failed*           | The image could not be downloaded.                     |                     |
|                 | +-----------------------------+--------------------------------------------------------+                     |
|                 | | *device-missing*            | The device was disconnected from the FortiGate.        |                     |
|                 | +-----------------------------+--------------------------------------------------------+                     |
|                 | | *version-unavailable*       | An image matching the device and version could not be  |                     |
|                 | |                             | found.                                                 |                     |
|                 | +-----------------------------+--------------------------------------------------------+                     |
|                 | | *staging-failed*            | The image could not be pushed to the device.           |                     |
|                 | +-----------------------------+--------------------------------------------------------+                     |
|                 | | *reboot-failed*             | The device could not be rebooted.                      |                     |
|                 | +-----------------------------+--------------------------------------------------------+                     |
|                 | | *device-not-reconnected*    | The device did not reconnect after rebooting.          |                     |
|                 | +-----------------------------+--------------------------------------------------------+                     |
|                 | | *node-not-ready*            | A device in the Security Fabric tree was not ready.    |                     |
|                 | +-----------------------------+--------------------------------------------------------+                     |
|                 | | *no-final-confirmation*     | The coordinating FortiGate did not confirm the         |                     |
|                 | |                             | upgrade.                                               |                     |
|                 | +-----------------------------+--------------------------------------------------------+                     |
|                 | | *no-confirmation-query*     | A downstream FortiGate did not initiate final          |                     |
|                 | |                             | confirmation.                                          |                     |
|                 | +-----------------------------+--------------------------------------------------------+                     |
|                 | | *config-error-log-nonempty* | Configuration errors encountered during the upgrade.   |                     |
|                 | +-----------------------------+--------------------------------------------------------+                     |
|                 | | *node-failed*               | A device in the Security Fabric tree failed.           |                     |
|                 | +-----------------------------+--------------------------------------------------------+                     |
+-----------------+-----------------------------------+------------------------+------------------------+------------------------+
| maximum-minutes | Maximum number of minutes to      | integer                | Minimum value: 5       | 15                     |
|                 | allow for immediate upgrade       |                        | Maximum value: 10080   |                        |
|                 | preparation.                      |                        |                        |                        |
+-----------------+-----------------------------------+------------------------+------------------------+------------------------+
| serial          | Serial number of the node to      | string                 | Maximum length: 79     |                        |
|                 | include.                          |                        |                        |                        |
+-----------------+-----------------------------------+------------------------+------------------------+------------------------+
| setup-time      | Upgrade preparation start time in | user                   | Not Specified          |                        |
|                 | UTC (hh:mm yyyy/mm/dd UTC).       |                        |                        |                        |
+-----------------+-----------------------------------+------------------------+------------------------+------------------------+
| status          | Current status of the upgrade.    | option                 | \-                     | disabled               |
+-----------------+-----------------------------------+------------------------+------------------------+------------------------+
|                 | +-----------------------+--------------------------------------------------------+                           |
|                 | | Option                | Description                                            |                           |
|                 | +=======================+========================================================+                           |
|                 | | *disabled*            | No federated upgrade has been configured.              |                           |
|                 | +-----------------------+--------------------------------------------------------+                           |
|                 | | *initialized*         | The upgrade has been configured.                       |                           |
|                 | +-----------------------+--------------------------------------------------------+                           |
|                 | | *downloading*         | The image is downloading in preparation for the        |                           |
|                 | |                       | upgrade.                                               |                           |
|                 | +-----------------------+--------------------------------------------------------+                           |
|                 | | *device-disconnected* | The image downloads are complete, but one or more      |                           |
|                 | |                       | devices have disconnected.                             |                           |
|                 | +-----------------------+--------------------------------------------------------+                           |
|                 | | *ready*               | The image download finished and the upgrade is         |                           |
|                 | |                       | pending.                                               |                           |
|                 | +-----------------------+--------------------------------------------------------+                           |
|                 | | *coordinating*        | The upgrade is coordinating with other running         |                           |
|                 | |                       | upgrades.                                              |                           |
|                 | +-----------------------+--------------------------------------------------------+                           |
|                 | | *staging*             | The upgrade is confirmed and images are being staged.  |                           |
|                 | +-----------------------+--------------------------------------------------------+                           |
|                 | | *final-check*         | The upgrade is ready and final checks are in progress. |                           |
|                 | +-----------------------+--------------------------------------------------------+                           |
|                 | | *upgrade-devices*     | The upgrade is ready and devices are being rebooted.   |                           |
|                 | +-----------------------+--------------------------------------------------------+                           |
|                 | | *cancelled*           | The upgrade was cancelled due to the tree not being    |                           |
|                 | |                       | ready.                                                 |                           |
|                 | +-----------------------+--------------------------------------------------------+                           |
|                 | | *confirmed*           | The upgrade was confirmed and reboots are running.     |                           |
|                 | +-----------------------+--------------------------------------------------------+                           |
|                 | | *done*                | The upgrade completed successfully.                    |                           |
|                 | +-----------------------+--------------------------------------------------------+                           |
|                 | | *failed*              | The upgrade failed due to a local issue.               |                           |
|                 | +-----------------------+--------------------------------------------------------+                           |
+-----------------+-----------------------------------+------------------------+------------------------+------------------------+
| time            | Scheduled upgrade execution time  | user                   | Not Specified          |                        |
|                 | in UTC (hh:mm yyyy/mm/dd UTC).    |                        |                        |                        |
+-----------------+-----------------------------------+------------------------+------------------------+------------------------+
| timing          | Run immediately or at a scheduled | option                 | \-                     | immediate              |
|                 | time.                             |                        |                        |                        |
+-----------------+-----------------------------------+------------------------+------------------------+------------------------+
|                 | +-------------+--------------------------------------------------------+                                     |
|                 | | Option      | Description                                            |                                     |
|                 | +=============+========================================================+                                     |
|                 | | *immediate* | Begin the upgrade immediately.                         |                                     |
|                 | +-------------+--------------------------------------------------------+                                     |
|                 | | *scheduled* | Begin the upgrade at a configured time.                |                                     |
|                 | +-------------+--------------------------------------------------------+                                     |
+-----------------+-----------------------------------+------------------------+------------------------+------------------------+
| upgrade-path    | Fortinet OS image versions to     | user                   | Not Specified          |                        |
|                 | upgrade through in                |                        |                        |                        |
|                 | major-minor-patch format, such as |                        |                        |                        |
|                 | 7-0-4.                            |                        |                        |                        |
+-----------------+-----------------------------------+------------------------+------------------------+------------------------+

