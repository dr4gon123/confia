# config switch-controller initial-config vlans

Configure initial template for auto-generated VLAN interfaces.

## Syntax

```
config switch-controller initial-config vlans
    Description: Configure initial template for auto-generated VLAN interfaces.
    set default-vlan {string}
    set nac {string}
    set nac-segment {string}
    set optional-vlans [enable|disable]
    set quarantine {string}
    set rspan {string}
    set video {string}
    set voice {string}
end
```

## Parameters

+----------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter      | Description                       | Type               | Size               | Default            |
+================+===================================+====================+====================+====================+
| default-vlan   | Default VLAN (native) assigned to | string             | Maximum length: 63 | \_default          |
|                | all switch ports upon discovery.  |                    |                    |                    |
+----------------+-----------------------------------+--------------------+--------------------+--------------------+
| nac            | VLAN for NAC onboarding devices.  | string             | Maximum length: 63 | onboarding         |
+----------------+-----------------------------------+--------------------+--------------------+--------------------+
| nac-segment    | VLAN for NAC segment primary      | string             | Maximum length: 63 | nac_segment        |
|                | interface.                        |                    |                    |                    |
+----------------+-----------------------------------+--------------------+--------------------+--------------------+
| optional-vlans | Auto-generate pre-configured      | option             | \-                 | enable             |
|                | VLANs upon switch discovery.      |                    |                    |                    |
+----------------+-----------------------------------+--------------------+--------------------+--------------------+
|                | +-------------+--------------------------------------------------------+                         |
|                | | Option      | Description                                            |                         |
|                | +=============+========================================================+                         |
|                | | *enable*    | Enable auto-generated VLANs.                           |                         |
|                | +-------------+--------------------------------------------------------+                         |
|                | | *disable*   | Disable auto-generated VLANs.                          |                         |
|                | +-------------+--------------------------------------------------------+                         |
+----------------+-----------------------------------+--------------------+--------------------+--------------------+
| quarantine     | VLAN for quarantined traffic.     | string             | Maximum length: 63 | quarantine         |
+----------------+-----------------------------------+--------------------+--------------------+--------------------+
| rspan          | VLAN for RSPAN/ERSPAN mirrored    | string             | Maximum length: 63 | rspan              |
|                | traffic.                          |                    |                    |                    |
+----------------+-----------------------------------+--------------------+--------------------+--------------------+
| video          | VLAN dedicated for video devices. | string             | Maximum length: 63 | video              |
+----------------+-----------------------------------+--------------------+--------------------+--------------------+
| voice          | VLAN dedicated for voice devices. | string             | Maximum length: 63 | voice              |
+----------------+-----------------------------------+--------------------+--------------------+--------------------+

