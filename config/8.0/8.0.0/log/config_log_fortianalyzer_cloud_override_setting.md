# config log fortianalyzer-cloud override-setting

Override FortiAnalyzer Cloud settings.

## Syntax

```
config log fortianalyzer-cloud override-setting
    Description: Override FortiAnalyzer Cloud settings.
    set status [enable|disable]
end
```

## Parameters

+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter | Description                       | Type               | Size               | Default            |
+===========+===================================+====================+====================+====================+
| status    | Enable/disable logging to         | option             | \-                 | disable            |
|           | FortiAnalyzer Cloud.              |                    |                    |                    |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
|           | +-------------+--------------------------------------------------------+                         |
|           | | Option      | Description                                            |                         |
|           | +=============+========================================================+                         |
|           | | *enable*    | Enable logging to FortiAnalyzer Cloud.                 |                         |
|           | +-------------+--------------------------------------------------------+                         |
|           | | *disable*   | Disable logging to FortiAnalyzer Cloud.                |                         |
|           | +-------------+--------------------------------------------------------+                         |
+-----------+--------------------------------------------------------------------------------------------------+

