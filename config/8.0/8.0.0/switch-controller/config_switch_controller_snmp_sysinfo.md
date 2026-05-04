# config switch-controller snmp-sysinfo

Configure FortiSwitch SNMP system information globally.

## Syntax

```
config switch-controller snmp-sysinfo
    Description: Configure FortiSwitch SNMP system information globally.
    set contact-info {string}
    set description {string}
    set engine-id {string}
    set location {string}
    set status [disable|enable]
end
```

## Parameters

+--------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter    | Description                       | Type               | Size               | Default            |
+==============+===================================+====================+====================+====================+
| contact-info | Contact information.              | string             | Maximum length: 35 |                    |
+--------------+-----------------------------------+--------------------+--------------------+--------------------+
| description  | System description.               | string             | Maximum length: 35 |                    |
+--------------+-----------------------------------+--------------------+--------------------+--------------------+
| engine-id    | Local SNMP engine ID string (max  | string             | Maximum length: 24 |                    |
|              | 24 char).                         |                    |                    |                    |
+--------------+-----------------------------------+--------------------+--------------------+--------------------+
| location     | System location.                  | string             | Maximum length: 35 |                    |
+--------------+-----------------------------------+--------------------+--------------------+--------------------+
| status       | Enable/disable SNMP.              | option             | \-                 | disable            |
+--------------+-----------------------------------+--------------------+--------------------+--------------------+
|              | +-------------+--------------------------------------------------------+                         |
|              | | Option      | Description                                            |                         |
|              | +=============+========================================================+                         |
|              | | *disable*   | Disable SNMP.                                          |                         |
|              | +-------------+--------------------------------------------------------+                         |
|              | | *enable*    | Enable SNMP.                                           |                         |
|              | +-------------+--------------------------------------------------------+                         |
+--------------+--------------------------------------------------------------------------------------------------+

