# config system security-rating settings

Settings for Security Rating.

## Syntax

```
config system security-rating settings
    Description: Settings for Security Rating.
    set override-sync [enable|disable]
end
```

## Parameters

+---------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter     | Description                       | Type               | Size               | Default            |
+===============+===================================+====================+====================+====================+
| override-sync | Enable/disable overriding         | option             | \-                 | disable            |
|               | Security Rating control settings  |                    |                    |                    |
|               | synced from the Security          |                    |                    |                    |
|               | Fabric\'s root FortiGate.         |                    |                    |                    |
+---------------+-----------------------------------+--------------------+--------------------+--------------------+
|               | +-------------+--------------------------------------------------------+                         |
|               | | Option      | Description                                            |                         |
|               | +=============+========================================================+                         |
|               | | *enable*    | Enable overriding the Security Rating control settings |                         |
|               | |             | synced from the Security Fabric root FortiGate.        |                         |
|               | +-------------+--------------------------------------------------------+                         |
|               | | *disable*   | Disable overriding the Security Rating control         |                         |
|               | |             | settings synced from the Security Fabric root          |                         |
|               | |             | FortiGate.                                             |                         |
|               | +-------------+--------------------------------------------------------+                         |
+---------------+--------------------------------------------------------------------------------------------------+

