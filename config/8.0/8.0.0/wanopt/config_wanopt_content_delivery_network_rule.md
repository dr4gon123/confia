# config wanopt content-delivery-network-rule

Configure WAN optimization content delivery network rules.

## Syntax

```
config wanopt content-delivery-network-rule
    Description: Configure WAN optimization content delivery network rules.
    edit <name>
        set category [vcache|youtube]
        set comment {var-string}
        set host-domain-name-suffix <name1>, <name2>, ...
        set request-cache-control [enable|disable]
        set response-cache-control [enable|disable]
        set response-expires [enable|disable]
        config rules
            Description: WAN optimization content delivery network rule entries.
            edit <name>
                config content-id
                    Description: Content ID settings.
                    set end-direction [forward|backward]
                    set end-skip {integer}
                    set end-str {string}
                    set range-str {string}
                    set start-direction [forward|backward]
                    set start-skip {integer}
                    set start-str {string}
                    set target [path|parameter|...]
                end
                config match-entries
                    Description: List of entries to match.
                    edit <id>
                        set pattern <string1>, <string2>, ...
                        set target [path|parameter|...]
                    next
                end
                set match-mode [all|any]
                config skip-entries
                    Description: List of entries to skip.
                    edit <id>
                        set pattern <string1>, <string2>, ...
                        set target [path|parameter|...]
                    next
                end
                set skip-rule-mode [all|any]
            next
        end
        set status [enable|disable]
        set updateserver [enable|disable]
    next
end
```

## Parameters

+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter               | Description                       | Type               | Size               | Default            |
+=========================+===================================+====================+====================+====================+
| category                | Content delivery network rule     | option             | \-                 | vcache             |
|                         | category.                         |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | Option      | Description                                            |                         |
|                         | +=============+========================================================+                         |
|                         | | *vcache*    | Vcache content delivery network.                       |                         |
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | *youtube*   | Youtube content delivery network.                      |                         |
|                         | +-------------+--------------------------------------------------------+                         |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| comment                 | Comment about this CDN-rule.      | var-string         | Maximum length:    |                    |
|                         |                                   |                    | 255                |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| host-domain-name-suffix | Suffix portion of the fully       | string             | Maximum length: 79 |                    |
| `<name>`                | qualified domain name. For        |                    |                    |                    |
|                         | example, fortinet.com in          |                    |                    |                    |
|                         | \"www.fortinet.com\".             |                    |                    |                    |
|                         |                                   |                    |                    |                    |
|                         | Suffix portion of the fully       |                    |                    |                    |
|                         | qualified domain name.            |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| name                    | Name of table.                    | string             | Maximum length: 35 |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| request-cache-control   | Enable/disable HTTP request cache | option             | \-                 | disable            |
|                         | control.                          |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | Option      | Description                                            |                         |
|                         | +=============+========================================================+                         |
|                         | | *enable*    | Enable setting.                                        |                         |
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | *disable*   | Disable setting.                                       |                         |
|                         | +-------------+--------------------------------------------------------+                         |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| response-cache-control  | Enable/disable HTTP response      | option             | \-                 | disable            |
|                         | cache control.                    |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | Option      | Description                                            |                         |
|                         | +=============+========================================================+                         |
|                         | | *enable*    | Enable setting.                                        |                         |
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | *disable*   | Disable setting.                                       |                         |
|                         | +-------------+--------------------------------------------------------+                         |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| response-expires        | Enable/disable HTTP response      | option             | \-                 | disable            |
|                         | cache expires.                    |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | Option      | Description                                            |                         |
|                         | +=============+========================================================+                         |
|                         | | *enable*    | Enable setting.                                        |                         |
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | *disable*   | Disable setting.                                       |                         |
|                         | +-------------+--------------------------------------------------------+                         |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| status                  | Enable/disable WAN optimization   | option             | \-                 | enable             |
|                         | content delivery network rules.   |                    |                    |                    |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | Option      | Description                                            |                         |
|                         | +=============+========================================================+                         |
|                         | | *enable*    | Enable setting.                                        |                         |
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | *disable*   | Disable setting.                                       |                         |
|                         | +-------------+--------------------------------------------------------+                         |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| updateserver            | Enable/disable update server.     | option             | \-                 | disable            |
+-------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | Option      | Description                                            |                         |
|                         | +=============+========================================================+                         |
|                         | | *enable*    | Enable setting.                                        |                         |
|                         | +-------------+--------------------------------------------------------+                         |
|                         | | *disable*   | Disable setting.                                       |                         |
|                         | +-------------+--------------------------------------------------------+                         |
+-------------------------+--------------------------------------------------------------------------------------------------+

