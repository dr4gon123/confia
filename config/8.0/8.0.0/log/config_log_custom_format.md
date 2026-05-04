# config log custom-format

Configure custom log format.

## Syntax

```
config log custom-format
    Description: Configure custom log format.
    edit <name>
        set empty-value-indicator {string}
        set field-exclusion-list <field1>, <field2>, ...
        config log-templates
            Description: Custom log templates.
            edit <name>
                set category [traffic|event|...]
                set subtypes <subtype1>, <subtype2>, ...
                set template {string}
            next
        end
    next
end
```

## Parameters

+-----------------------+-----------------------------------+--------+---------+---------+
| Parameter             | Description                       | Type   | Size    | Default |
+=======================+===================================+========+=========+=========+
| empty-value-indicator | A character to indicate log field | string | Maximum |         |
|                       | is empty.                         |        | length: |         |
|                       |                                   |        | 1       |         |
+-----------------------+-----------------------------------+--------+---------+---------+
| field-exclusion-list  | Log fields to exclude in the log. | string | Maximum |         |
| `<field>`             |                                   |        | length: |         |
|                       | Log field to exclude from         |        | 79      |         |
|                       | formatting.                       |        |         |         |
+-----------------------+-----------------------------------+--------+---------+---------+
| name                  | Format name string.               | string | Maximum |         |
|                       |                                   |        | length: |         |
|                       |                                   |        | 35      |         |
+-----------------------+-----------------------------------+--------+---------+---------+

