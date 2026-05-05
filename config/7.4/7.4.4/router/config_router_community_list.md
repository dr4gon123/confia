# config router community-list

Configure community lists.

## Syntax

```
config router community-list
    Description: Configure community lists.
    edit <name>
        config rule
            Description: Community list rule.
            edit <id>
                set action [deny|permit]
                set regexp {string}
                set match {string}
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
| name      | Community list name.              | string             | Maximum length: 35 |                    |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| type      | Community list type (standard or  | option             | \-                 | standard           |
|           | expanded).                        |                    |                    |                    |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
|           | +-------------+--------------------------------------------------------+                         |
|           | | Option      | Description                                            |                         |
|           | +=============+========================================================+                         |
|           | | *standard*  | Standard community list type.                          |                         |
|           | +-------------+--------------------------------------------------------+                         |
|           | | *expanded*  | Expanded community list type.                          |                         |
|           | +-------------+--------------------------------------------------------+                         |
+-----------+--------------------------------------------------------------------------------------------------+

