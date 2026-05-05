# config casb attribute-match

Configure CASB SaaS application.

## Syntax

```
config casb attribute-match
    Description: Configure CASB SaaS application.
    edit <name>
        set application {string}
        config attribute
            Description: CASB tenant match rules.
            edit <name>
                set case-sensitive [enable|disable]
                set match-pattern [simple|substr|...]
                set match-value {string}
                set negate [enable|disable]
            next
        end
        set match-strategy [and|or]
    next
end
```

## Parameters

+----------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter      | Description                       | Type               | Size               | Default            |
+================+===================================+====================+====================+====================+
| application    | CASB tenant application name.     | string             | Maximum length: 79 |                    |
+----------------+-----------------------------------+--------------------+--------------------+--------------------+
| match-strategy | CASB tenant match strategy.       | option             | \-                 | or                 |
+----------------+-----------------------------------+--------------------+--------------------+--------------------+
|                | +-------------+--------------------------------------------------------+                         |
|                | | Option      | Description                                            |                         |
|                | +=============+========================================================+                         |
|                | | *and*       | Match tenant using a logical AND operator.             |                         |
|                | +-------------+--------------------------------------------------------+                         |
|                | | *or*        | Match tenant using a logical OR operator.              |                         |
|                | +-------------+--------------------------------------------------------+                         |
+----------------+-----------------------------------+--------------------+--------------------+--------------------+
| name           | CASB tenant match name.           | string             | Maximum length: 79 |                    |
+----------------+-----------------------------------+--------------------+--------------------+--------------------+

