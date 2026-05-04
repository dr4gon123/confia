# config log azure-security-center setting

Settings for Azure Security Center.

## Syntax

```
config log azure-security-center setting
    Description: Settings for Azure Security Center.
    set appliance-id {string}
    config custom-field-name
        Description: Custom field name for CEF format logging.
        edit <id>
            set custom {string}
            set name {string}
        next
    end
    set eventhub-name {string}
    set policy-name {string}
    set policy-saskey {string}
    set servicebus-namespace {string}
    set status [enable|disable]
end
```

## Parameters

+----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter            | Description                       | Type               | Size               | Default            |
+======================+===================================+====================+====================+====================+
| appliance-id         | Appliance ID.                     | string             | Maximum length:    |                    |
|                      |                                   |                    | 128                |                    |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| eventhub-name        | Event hub name.                   | string             | Maximum length:    |                    |
|                      |                                   |                    | 128                |                    |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| policy-name          | Policy name.                      | string             | Maximum length:    |                    |
|                      |                                   |                    | 128                |                    |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| policy-saskey        | Policy saskey.                    | string             | Maximum length:    |                    |
|                      |                                   |                    | 128                |                    |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| servicebus-namespace | Service bus namespace.            | string             | Maximum length:    |                    |
|                      |                                   |                    | 128                |                    |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------+
| status               | Enable Azure Security Center      | option             | \-                 | disable            |
|                      | logging.                          |                    |                    |                    |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                      | +-------------+--------------------------------------------------------+                         |
|                      | | Option      | Description                                            |                         |
|                      | +=============+========================================================+                         |
|                      | | *enable*    | Enable setting.                                        |                         |
|                      | +-------------+--------------------------------------------------------+                         |
|                      | | *disable*   | Disable setting.                                       |                         |
|                      | +-------------+--------------------------------------------------------+                         |
+----------------------+--------------------------------------------------------------------------------------------------+

