# config firewall internet-service-name

Define internet service names.

## Syntax

```
config firewall internet-service-name
    Description: Define internet service names.
    edit <name>
        set city-id {integer}
        set country-id {integer}
        set internet-service-id {integer}
        set region-id {integer}
        set type [default|location]
    next
end
```

## Parameters

+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter           | Description                       | Type               | Size               | Default            |
+=====================+===================================+====================+====================+====================+
| city-id             | City ID.                          | integer            | Minimum value: 0   | 0                  |
|                     |                                   |                    | Maximum value:     |                    |
|                     |                                   |                    | 4294967295         |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| country-id          | Country or Area ID.               | integer            | Minimum value: 0   | 0                  |
|                     |                                   |                    | Maximum value:     |                    |
|                     |                                   |                    | 4294967295         |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| internet-service-id | Internet Service ID.              | integer            | Minimum value: 0   | 0                  |
|                     |                                   |                    | Maximum value:     |                    |
|                     |                                   |                    | 4294967295         |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| name                | Internet Service name.            | string             | Maximum length: 63 |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| region-id           | Region ID.                        | integer            | Minimum value: 0   | 0                  |
|                     |                                   |                    | Maximum value:     |                    |
|                     |                                   |                    | 4294967295         |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| type                | Internet Service name type.       | option             | \-                 | default            |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                     | +-------------+--------------------------------------------------------+                         |
|                     | | Option      | Description                                            |                         |
|                     | +=============+========================================================+                         |
|                     | | *default*   | Automatically generated Internet Service.              |                         |
|                     | +-------------+--------------------------------------------------------+                         |
|                     | | *location*  | Geography location based Internet Service.             |                         |
|                     | +-------------+--------------------------------------------------------+                         |
+---------------------+--------------------------------------------------------------------------------------------------+

