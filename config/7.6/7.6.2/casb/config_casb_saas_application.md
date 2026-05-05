# config casb saas-application

Configure CASB SaaS application.

## Syntax

```
config casb saas-application
    Description: Configure CASB SaaS application.
    edit <name>
        set casb-name {string}
        set description {string}
        set domains <domain1>, <domain2>, ...
        config input-attributes
            Description: SaaS application input attributes.
            edit <name>
                set attr-type {option}
                set default [string|string-list]
                set description {string}
                set fallback-input [enable|disable]
                set required [enable|disable]
                set type [string|string-list|...]
            next
        end
        config output-attributes
            Description: SaaS application output attributes.
            edit <name>
                set attr-type {option}
                set description {string}
                set required [enable|disable]
                set type [string|string-list|...]
            next
        end
        set status [enable|disable]
        set type [built-in|customized]
        set uuid {string}
    next
end
```

## Parameters

+-------------+-----------------------------------+---------------------+---------------------+---------------------+
| Parameter   | Description                       | Type                | Size                | Default             |
+=============+===================================+=====================+=====================+=====================+
| casb-name   | SaaS application signature name.  | string              | Maximum length: 79  |                     |
+-------------+-----------------------------------+---------------------+---------------------+---------------------+
| description | SaaS application description.     | string              | Maximum length: 63  |                     |
+-------------+-----------------------------------+---------------------+---------------------+---------------------+
| domains     | SaaS application domain list.     | string              | Maximum length: 127 |                     |
| `<domain>`  |                                   |                     |                     |                     |
|             | Domain list separated by space.   |                     |                     |                     |
+-------------+-----------------------------------+---------------------+---------------------+---------------------+
| name        | SaaS application name.            | string              | Maximum length: 79  |                     |
+-------------+-----------------------------------+---------------------+---------------------+---------------------+
| status      | Enable/disable setting.           | option              | \-                  | enable              |
+-------------+-----------------------------------+---------------------+---------------------+---------------------+
|             | +-------------+--------------------------------------------------------+                            |
|             | | Option      | Description                                            |                            |
|             | +=============+========================================================+                            |
|             | | *enable*    | Enable setting.                                        |                            |
|             | +-------------+--------------------------------------------------------+                            |
|             | | *disable*   | Disable setting.                                       |                            |
|             | +-------------+--------------------------------------------------------+                            |
+-------------+-----------------------------------+---------------------+---------------------+---------------------+
| type        | SaaS application type.            | option              | \-                  | customized          |
+-------------+-----------------------------------+---------------------+---------------------+---------------------+
|             | +--------------+--------------------------------------------------------+                           |
|             | | Option       | Description                                            |                           |
|             | +==============+========================================================+                           |
|             | | *built-in*   | Built-in SaaS application.                             |                           |
|             | +--------------+--------------------------------------------------------+                           |
|             | | *customized* | User customized SaaS appliciation.                     |                           |
|             | +--------------+--------------------------------------------------------+                           |
+-------------+-----------------------------------+---------------------+---------------------+---------------------+
| uuid        | Universally Unique Identifier     | string              | Maximum length: 36  |                     |
|             | (UUID; automatically assigned but |                     |                     |                     |
|             | can be manually reset).           |                     |                     |                     |
+-------------+-----------------------------------+---------------------+---------------------+---------------------+

