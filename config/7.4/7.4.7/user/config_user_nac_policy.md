# config user nac-policy

Configure NAC policy matching pattern to identify matching NAC devices.

## Syntax

```
config user nac-policy
    Description: Configure NAC policy matching pattern to identify matching NAC devices.
    edit <name>
        set category [device|firewall-user|...]
        set description {string}
        set ems-tag {string}
        set family {string}
        set firewall-address {string}
        set fortivoice-tag {string}
        set host {string}
        set hw-vendor {string}
        set hw-version {string}
        set mac {string}
        set match-period {integer}
        set match-type [dynamic|override]
        set os {string}
        set severity <severity-num1>, <severity-num2>, ...
        set src {string}
        set ssid-policy {string}
        set status [enable|disable]
        set sw-version {string}
        set switch-fortilink {string}
        set switch-group <name1>, <name2>, ...
        set switch-mac-policy {string}
        set type {string}
        set user {string}
        set user-group {string}
    next
end
```

## Parameters

+-------------------+-----------------------------------+----------------------+----------------------+----------------------+
| Parameter         | Description                       | Type                 | Size                 | Default              |
+===================+===================================+======================+======================+======================+
| category          | Category of NAC policy.           | option               | \-                   | device               |
+-------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                   | +------------------+--------------------------------------------------------+                          |
|                   | | Option           | Description                                            |                          |
|                   | +==================+========================================================+                          |
|                   | | *device*         | Device category.                                       |                          |
|                   | +------------------+--------------------------------------------------------+                          |
|                   | | *firewall-user*  | Firewall user category.                                |                          |
|                   | +------------------+--------------------------------------------------------+                          |
|                   | | *ems-tag*        | EMS Tag category.                                      |                          |
|                   | +------------------+--------------------------------------------------------+                          |
|                   | | *fortivoice-tag* | FortiVoice Tag category.                               |                          |
|                   | +------------------+--------------------------------------------------------+                          |
|                   | | *vulnerability*  | Vulnerability category.                                |                          |
|                   | +------------------+--------------------------------------------------------+                          |
+-------------------+-----------------------------------+----------------------+----------------------+----------------------+
| description       | Description for the NAC policy    | string               | Maximum length: 63   |                      |
|                   | matching pattern.                 |                      |                      |                      |
+-------------------+-----------------------------------+----------------------+----------------------+----------------------+
| ems-tag           | NAC policy matching EMS tag.      | string               | Maximum length: 79   |                      |
+-------------------+-----------------------------------+----------------------+----------------------+----------------------+
| family            | NAC policy matching family.       | string               | Maximum length: 31   |                      |
+-------------------+-----------------------------------+----------------------+----------------------+----------------------+
| firewall-address  | Dynamic firewall address to       | string               | Maximum length: 79   |                      |
| \*                | associate MAC which match this    |                      |                      |                      |
|                   | policy.                           |                      |                      |                      |
+-------------------+-----------------------------------+----------------------+----------------------+----------------------+
| fortivoice-tag    | NAC policy matching FortiVoice    | string               | Maximum length: 79   |                      |
|                   | tag.                              |                      |                      |                      |
+-------------------+-----------------------------------+----------------------+----------------------+----------------------+
| host              | NAC policy matching host.         | string               | Maximum length: 64   |                      |
+-------------------+-----------------------------------+----------------------+----------------------+----------------------+
| hw-vendor         | NAC policy matching hardware      | string               | Maximum length: 15   |                      |
|                   | vendor.                           |                      |                      |                      |
+-------------------+-----------------------------------+----------------------+----------------------+----------------------+
| hw-version        | NAC policy matching hardware      | string               | Maximum length: 15   |                      |
|                   | version.                          |                      |                      |                      |
+-------------------+-----------------------------------+----------------------+----------------------+----------------------+
| mac               | NAC policy matching MAC address.  | string               | Maximum length: 17   |                      |
+-------------------+-----------------------------------+----------------------+----------------------+----------------------+
| match-period      | Number of days the matched        | integer              | Minimum value: 0     | 0                    |
|                   | devices will be retained (0 -     |                      | Maximum value: 120   |                      |
|                   | always retain)                    |                      |                      |                      |
+-------------------+-----------------------------------+----------------------+----------------------+----------------------+
| match-type        | Match and retain the devices      | option               | \-                   | dynamic              |
|                   | based on the type.                |                      |                      |                      |
+-------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                   | +-------------+--------------------------------------------------------+                               |
|                   | | Option      | Description                                            |                               |
|                   | +=============+========================================================+                               |
|                   | | *dynamic*   | Matched devices will be removed on dynamic events like |                               |
|                   | |             | link-down,device-inactivity,switch-offline.            |                               |
|                   | +-------------+--------------------------------------------------------+                               |
|                   | | *override*  | Matched devices will be retained until the             |                               |
|                   | |             | match-period.                                          |                               |
|                   | +-------------+--------------------------------------------------------+                               |
+-------------------+-----------------------------------+----------------------+----------------------+----------------------+
| name              | NAC policy name.                  | string               | Maximum length: 63   |                      |
+-------------------+-----------------------------------+----------------------+----------------------+----------------------+
| os                | NAC policy matching operating     | string               | Maximum length: 31   |                      |
|                   | system.                           |                      |                      |                      |
+-------------------+-----------------------------------+----------------------+----------------------+----------------------+
| severity          | NAC policy matching devices       | integer              | Minimum value: 0     |                      |
| `<severity-num>`  | vulnerability severity lists.     |                      | Maximum value: 4     |                      |
|                   |                                   |                      |                      |                      |
|                   | Enter multiple severity levels,   |                      |                      |                      |
|                   | where 0 = Info, 1 = Low, \..., 4  |                      |                      |                      |
|                   | = Critical                        |                      |                      |                      |
+-------------------+-----------------------------------+----------------------+----------------------+----------------------+
| src               | NAC policy matching source.       | string               | Maximum length: 15   |                      |
+-------------------+-----------------------------------+----------------------+----------------------+----------------------+
| ssid-policy       | SSID policy to be applied on the  | string               | Maximum length: 35   |                      |
|                   | matched NAC policy.               |                      |                      |                      |
+-------------------+-----------------------------------+----------------------+----------------------+----------------------+
| status            | Enable/disable NAC policy.        | option               | \-                   | enable               |
+-------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                   | +-------------+--------------------------------------------------------+                               |
|                   | | Option      | Description                                            |                               |
|                   | +=============+========================================================+                               |
|                   | | *enable*    | Enable NAC policy.                                     |                               |
|                   | +-------------+--------------------------------------------------------+                               |
|                   | | *disable*   | Disable NAC policy.                                    |                               |
|                   | +-------------+--------------------------------------------------------+                               |
+-------------------+-----------------------------------+----------------------+----------------------+----------------------+
| sw-version        | NAC policy matching software      | string               | Maximum length: 15   |                      |
|                   | version.                          |                      |                      |                      |
+-------------------+-----------------------------------+----------------------+----------------------+----------------------+
| switch-fortilink  | FortiLink interface for which     | string               | Maximum length: 15   |                      |
| \*                | this NAC policy belongs to.       |                      |                      |                      |
+-------------------+-----------------------------------+----------------------+----------------------+----------------------+
| switch-group      | List of managed FortiSwitch       | string               | Maximum length: 79   |                      |
| `<name>` \*       | groups on which NAC policy can be |                      |                      |                      |
|                   | applied.                          |                      |                      |                      |
|                   |                                   |                      |                      |                      |
|                   | Managed FortiSwitch group name    |                      |                      |                      |
|                   | from available options.           |                      |                      |                      |
+-------------------+-----------------------------------+----------------------+----------------------+----------------------+
| switch-mac-policy | Switch MAC policy action to be    | string               | Maximum length: 63   |                      |
| \*                | applied on the matched NAC        |                      |                      |                      |
|                   | policy.                           |                      |                      |                      |
+-------------------+-----------------------------------+----------------------+----------------------+----------------------+
| type              | NAC policy matching type.         | string               | Maximum length: 15   |                      |
+-------------------+-----------------------------------+----------------------+----------------------+----------------------+
| user              | NAC policy matching user.         | string               | Maximum length: 64   |                      |
+-------------------+-----------------------------------+----------------------+----------------------+----------------------+
| user-group        | NAC policy matching user group.   | string               | Maximum length: 35   |                      |
+-------------------+-----------------------------------+----------------------+----------------------+----------------------+

