# config router extcommunity-list

Configure extended community lists.

## Syntax

```
config router extcommunity-list
    Description: Configure extended community lists.
    edit <name>
        config rule
            Description: Extended community list rule.
            edit <id>
                set action [deny|permit]
                set match {string}
                set regexp {string}
                set type [rt|soo]
            next
        end
        set type [standard|expanded]
    next
end
```

## Parameters

+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter | Description                       | Type               | Size               | Default            |
+===========+===================================+====================+====================+====================+
| name      | Extended community list name.     | string             | Maximum length: 35 |                    |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| type      | Extended community list type      | option             | \-                 | standard           |
|           | (standard or expanded).           |                    |                    |                    |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
|           | +-------------+--------------------------------------------------------+                         |
|           | | Option      | Description                                            |                         |
|           | +=============+========================================================+                         |
|           | | *standard*  | Standard extended community list type.                 |                         |
|           | +-------------+--------------------------------------------------------+                         |
|           | | *expanded*  | Expanded extended community list type.                 |                         |
|           | +-------------+--------------------------------------------------------+                         |
+-----------+--------------------------------------------------------------------------------------------------+

