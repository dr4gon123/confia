# config switch-controller vlan-policy

Configure VLAN policy to be applied on the managed FortiSwitch ports through dynamic-port-policy.

## Syntax

```
config switch-controller vlan-policy
    Description: Configure VLAN policy to be applied on the managed FortiSwitch ports through dynamic-port-policy.
    edit <name>
        set allowed-vlans <vlan-name1>, <vlan-name2>, ...
        set allowed-vlans-all [enable|disable]
        set description {string}
        set discard-mode [none|all-untagged|...]
        set fortilink {string}
        set untagged-vlans <vlan-name1>, <vlan-name2>, ...
        set vlan {string}
    next
end
```

## Parameters

+-------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| Parameter         | Description                       | Type                  | Size                  | Default               |
+===================+===================================+=======================+=======================+=======================+
| allowed-vlans     | Allowed VLANs to be applied when  | string                | Maximum length: 79    |                       |
| `<vlan-name>`     | using this VLAN policy.           |                       |                       |                       |
|                   |                                   |                       |                       |                       |
|                   | VLAN name.                        |                       |                       |                       |
+-------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| allowed-vlans-all | Enable/disable all defined VLANs  | option                | \-                    | disable               |
|                   | when using this VLAN policy.      |                       |                       |                       |
+-------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                   | +-------------+--------------------------------------------------------+                                  |
|                   | | Option      | Description                                            |                                  |
|                   | +=============+========================================================+                                  |
|                   | | *enable*    | Enable all defined VLANs.                              |                                  |
|                   | +-------------+--------------------------------------------------------+                                  |
|                   | | *disable*   | Disable all defined VLANs.                             |                                  |
|                   | +-------------+--------------------------------------------------------+                                  |
+-------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| description       | Description for the VLAN policy.  | string                | Maximum length: 63    |                       |
+-------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| discard-mode      | Discard mode to be applied when   | option                | \-                    | none                  |
|                   | using this VLAN policy.           |                       |                       |                       |
+-------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                   | +----------------+--------------------------------------------------------+                               |
|                   | | Option         | Description                                            |                               |
|                   | +================+========================================================+                               |
|                   | | *none*         | Discard disabled.                                      |                               |
|                   | +----------------+--------------------------------------------------------+                               |
|                   | | *all-untagged* | Discard all frames that are untagged.                  |                               |
|                   | +----------------+--------------------------------------------------------+                               |
|                   | | *all-tagged*   | Discard all frames that are tagged.                    |                               |
|                   | +----------------+--------------------------------------------------------+                               |
+-------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| fortilink         | FortiLink interface for which     | string                | Maximum length: 15    |                       |
|                   | this VLAN policy belongs to.      |                       |                       |                       |
+-------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| name              | VLAN policy name.                 | string                | Maximum length: 63    |                       |
+-------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| untagged-vlans    | Untagged VLANs to be applied when | string                | Maximum length: 79    |                       |
| `<vlan-name>`     | using this VLAN policy.           |                       |                       |                       |
|                   |                                   |                       |                       |                       |
|                   | VLAN name.                        |                       |                       |                       |
+-------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| vlan              | Native VLAN to be applied when    | string                | Maximum length: 15    |                       |
|                   | using this VLAN policy.           |                       |                       |                       |
+-------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+

