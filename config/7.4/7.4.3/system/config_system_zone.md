# config system zone

Configure zones to group two or more interfaces. When a zone is created you can configure policies for the zone instead of individual interfaces in the zone.

## Syntax

```
config system zone
    Description: Configure zones to group two or more interfaces. When a zone is created you can configure policies for the zone instead of individual interfaces in the zone.
    edit <name>
        set description {string}
        set interface <interface-name1>, <interface-name2>, ...
        set intrazone [allow|deny]
        config tagging
            Description: Config object tagging.
            edit <name>
                set category {string}
                set tags <name1>, <name2>, ...
            next
        end
    next
end
```

## Parameters

+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter          | Description                       | Type               | Size               | Default            |
+====================+===================================+====================+====================+====================+
| description        | Description.                      | string             | Maximum length:    |                    |
|                    |                                   |                    | 127                |                    |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
| interface          | Add interfaces to this zone.      | string             | Maximum length: 79 |                    |
| `<interface-name>` | Interfaces must not be assigned   |                    |                    |                    |
|                    | to another zone or have firewall  |                    |                    |                    |
|                    | policies defined.                 |                    |                    |                    |
|                    |                                   |                    |                    |                    |
|                    | Select interfaces to add to the   |                    |                    |                    |
|                    | zone.                             |                    |                    |                    |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
| intrazone          | Allow or deny traffic routing     | option             | \-                 | deny               |
|                    | between different interfaces in   |                    |                    |                    |
|                    | the same zone.                    |                    |                    |                    |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                    | +-------------+--------------------------------------------------------+                         |
|                    | | Option      | Description                                            |                         |
|                    | +=============+========================================================+                         |
|                    | | *allow*     | Allow traffic between interfaces in the zone.          |                         |
|                    | +-------------+--------------------------------------------------------+                         |
|                    | | *deny*      | Deny traffic between interfaces in the zone.           |                         |
|                    | +-------------+--------------------------------------------------------+                         |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
| name               | Zone name.                        | string             | Maximum length: 35 |                    |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+

