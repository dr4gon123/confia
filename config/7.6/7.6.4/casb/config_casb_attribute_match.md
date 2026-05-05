# config casb attribute-match

Configure CASB attribute match rule.

## Syntax

```
config casb attribute-match
    Description: Configure CASB attribute match rule.
    edit <name>
        set application {string}
        config match
            Description: CASB tenant match rules.
            edit <id>
                config rule
                    Description: CASB attribute match rule.
                    edit <id>
                        set attribute {string}
                        set case-sensitive [enable|disable]
                        set match-pattern [simple|substr|...]
                        set match-value {string}
                        set negate [enable|disable]
                    next
                end
                set rule-strategy [and|or]
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
| application    | CASB attribute application name.  | string             | Maximum length: 79 |                    |
+----------------+-----------------------------------+--------------------+--------------------+--------------------+
| match-strategy | CASB attribute match strategy.    | option             | \-                 | or                 |
+----------------+-----------------------------------+--------------------+--------------------+--------------------+
|                | +-------------+--------------------------------------------------------+                         |
|                | | Option      | Description                                            |                         |
|                | +=============+========================================================+                         |
|                | | *and*       | Match attribute using a logical AND operator.          |                         |
|                | +-------------+--------------------------------------------------------+                         |
|                | | *or*        | Match attribute using a logical OR operator.           |                         |
|                | +-------------+--------------------------------------------------------+                         |
+----------------+-----------------------------------+--------------------+--------------------+--------------------+
| name           | CASB attribute match name.        | string             | Maximum length: 79 |                    |
+----------------+-----------------------------------+--------------------+--------------------+--------------------+

