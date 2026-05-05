# config casb user-activity

Configure CASB user activity.

## Syntax

```
config casb user-activity
    Description: Configure CASB user activity.
    edit <name>
        set application {string}
        set casb-name {string}
        set category [activity-control|tenant-control|...]
        config control-options
            Description: CASB control options.
            edit <name>
                config operations
                    Description: CASB control option operations.
                    edit <name>
                        set action [append|prepend|...]
                        set case-sensitive [enable|disable]
                        set direction [request|response]
                        set header-name {string}
                        set search-key {string}
                        set search-pattern [simple|substr|...]
                        set target [header|path|...]
                        set value-from-input [enable|disable]
                        set values <value1>, <value2>, ...
                    next
                end
                set status [enable|disable]
            next
        end
        set description {string}
        config match
            Description: CASB user activity match rules.
            edit <id>
                config rules
                    Description: CASB user activity rules.
                    edit <id>
                        set body-type {option}
                        set case-sensitive [enable|disable]
                        set domains <domain1>, <domain2>, ...
                        set header-name {string}
                        set jq {string}
                        set match-pattern [simple|substr|...]
                        set match-value {string}
                        set methods <method1>, <method2>, ...
                        set negate [enable|disable]
                        set type [domains|host|...]
                    next
                end
                set strategy [and|or]
                config tenant-extraction
                    Description: CASB user activity tenant extraction.
                    config filters
                        Description: CASB user activity tenant extraction filters.
                        edit <id>
                            set body-type {option}
                            set direction [request|response]
                            set header-name {string}
                            set place [path|header|...]
                        next
                    end
                    set jq {string}
                    set status [disable|enable]
                    set type {option}
                end
            next
        end
        set match-strategy [and|or]
        set status [enable|disable]
        set type [built-in|customized]
        set uuid {string}
    next
end
```

## Parameters

+----------------+-----------------------------------+------------------------+------------------------+------------------------+
| Parameter      | Description                       | Type                   | Size                   | Default                |
+================+===================================+========================+========================+========================+
| application    | CASB SaaS application name.       | string                 | Maximum length: 79     |                        |
+----------------+-----------------------------------+------------------------+------------------------+------------------------+
| casb-name      | CASB user activity signature      | string                 | Maximum length: 79     |                        |
|                | name.                             |                        |                        |                        |
+----------------+-----------------------------------+------------------------+------------------------+------------------------+
| category       | CASB user activity category.      | option                 | \-                     | activity-control       |
+----------------+-----------------------------------+------------------------+------------------------+------------------------+
|                | +-----------------------+--------------------------------------------------------+                           |
|                | | Option                | Description                                            |                           |
|                | +=======================+========================================================+                           |
|                | | *activity-control*    | Activity control.                                      |                           |
|                | +-----------------------+--------------------------------------------------------+                           |
|                | | *tenant-control*      | Tenant control.                                        |                           |
|                | +-----------------------+--------------------------------------------------------+                           |
|                | | *domain-control*      | Domain control.                                        |                           |
|                | +-----------------------+--------------------------------------------------------+                           |
|                | | *safe-search-control* | Safe search control.                                   |                           |
|                | +-----------------------+--------------------------------------------------------+                           |
|                | | *other*               | User customized category.                              |                           |
|                | +-----------------------+--------------------------------------------------------+                           |
+----------------+-----------------------------------+------------------------+------------------------+------------------------+
| description    | CASB user activity description.   | string                 | Maximum length: 63     |                        |
+----------------+-----------------------------------+------------------------+------------------------+------------------------+
| match-strategy | CASB user activity match          | option                 | \-                     | or                     |
|                | strategy.                         |                        |                        |                        |
+----------------+-----------------------------------+------------------------+------------------------+------------------------+
|                | +-------------+--------------------------------------------------------+                                     |
|                | | Option      | Description                                            |                                     |
|                | +=============+========================================================+                                     |
|                | | *and*       | Match user activity using a logical AND operator.      |                                     |
|                | +-------------+--------------------------------------------------------+                                     |
|                | | *or*        | Match user activity using a logical OR operator.       |                                     |
|                | +-------------+--------------------------------------------------------+                                     |
+----------------+-----------------------------------+------------------------+------------------------+------------------------+
| name           | CASB user activity name.          | string                 | Maximum length: 79     |                        |
+----------------+-----------------------------------+------------------------+------------------------+------------------------+
| status         | CASB user activity status.        | option                 | \-                     | enable                 |
+----------------+-----------------------------------+------------------------+------------------------+------------------------+
|                | +-------------+--------------------------------------------------------+                                     |
|                | | Option      | Description                                            |                                     |
|                | +=============+========================================================+                                     |
|                | | *enable*    | Enable setting.                                        |                                     |
|                | +-------------+--------------------------------------------------------+                                     |
|                | | *disable*   | Disable setting.                                       |                                     |
|                | +-------------+--------------------------------------------------------+                                     |
+----------------+-----------------------------------+------------------------+------------------------+------------------------+
| type           | CASB user activity type.          | option                 | \-                     | customized             |
+----------------+-----------------------------------+------------------------+------------------------+------------------------+
|                | +--------------+--------------------------------------------------------+                                    |
|                | | Option       | Description                                            |                                    |
|                | +==============+========================================================+                                    |
|                | | *built-in*   | Built-in CASB user-activity.                           |                                    |
|                | +--------------+--------------------------------------------------------+                                    |
|                | | *customized* | User customized CASB user-activity.                    |                                    |
|                | +--------------+--------------------------------------------------------+                                    |
+----------------+-----------------------------------+------------------------+------------------------+------------------------+
| uuid           | Universally Unique Identifier     | string                 | Maximum length: 36     |                        |
|                | (UUID; automatically assigned but |                        |                        |                        |
|                | can be manually reset).           |                        |                        |                        |
+----------------+-----------------------------------+------------------------+------------------------+------------------------+

