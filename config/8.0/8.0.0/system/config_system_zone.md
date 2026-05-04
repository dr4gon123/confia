# config system zone

Configure zones to group two or more interfaces. When a zone is created you can configure policies for the zone instead of individual interfaces in the zone.

## Syntax

```
config system zone
    Description: Configure zones to group two or more interfaces. When a zone is created you can configure policies for the zone instead of individual interfaces in the zone.
    edit <name>
        set description {string}
        set fabric-force-sync [enable|disable]
        set fabric-object [enable|disable]
        set fabric-object-source [member|local|...]
        set interface <interface-name1>, <interface-name2>, ...
        set intrazone [allow|deny]
        config tagging
            Description: Config object tagging.
            edit <name>
                set category {string}
                set tags <name1>, <name2>, ...
            next
        end
        set uuid {uuid}
    next
end
```

## Parameters

+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| Parameter            | Description                       | Type               | Size               | Default                              |
+======================+===================================+====================+====================+======================================+
| description          | Description.                      | string             | Maximum length:    |                                      |
|                      |                                   |                    | 127                |                                      |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| fabric-force-sync \* | Enable/disable forced             | option             | \-                 | disable                              |
|                      | synchronization of configuration  |                    |                    |                                      |
|                      | objects from the root FortiGate   |                    |                    |                                      |
|                      | unit to the downstream devices.   |                    |                    |                                      |
|                      | Configuration conflict check is   |                    |                    |                                      |
|                      | skipped.                          |                    |                    |                                      |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                      | +-------------+--------------------------------------------------------+                                           |
|                      | | Option      | Description                                            |                                           |
|                      | +=============+========================================================+                                           |
|                      | | *enable*    | Enable forced synchronization of configuration objects |                                           |
|                      | |             | from the root FortiGate unit to the downstream         |                                           |
|                      | |             | devices.                                               |                                           |
|                      | +-------------+--------------------------------------------------------+                                           |
|                      | | *disable*   | Disable forced synchronization of configuration        |                                           |
|                      | |             | objects from the root FortiGate unit to the downstream |                                           |
|                      | |             | devices.                                               |                                           |
|                      | +-------------+--------------------------------------------------------+                                           |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| fabric-object \*     | Security Fabric global object     | option             | \-                 | disable                              |
|                      | setting.                          |                    |                    |                                      |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                      | +-------------+--------------------------------------------------------+                                           |
|                      | | Option      | Description                                            |                                           |
|                      | +=============+========================================================+                                           |
|                      | | *enable*    | Object is set as a security fabric-wide global object. |                                           |
|                      | +-------------+--------------------------------------------------------+                                           |
|                      | | *disable*   | Object is local to this security fabric member.        |                                           |
|                      | +-------------+--------------------------------------------------------+                                           |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| fabric-object-source | Source of truth for fabric        | option             | \-                 | root                                 |
| \*                   | object.                           |                    |                    |                                      |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                      | +-------------+--------------------------------------------------------+                                           |
|                      | | Option      | Description                                            |                                           |
|                      | +=============+========================================================+                                           |
|                      | | *member*    | Source of truth for this object is a non-root member   |                                           |
|                      | |             | of fabric.                                             |                                           |
|                      | +-------------+--------------------------------------------------------+                                           |
|                      | | *local*     | Source of truth for this object is this security       |                                           |
|                      | |             | fabric member.                                         |                                           |
|                      | +-------------+--------------------------------------------------------+                                           |
|                      | | *root*      | Source of truth for this object is the root of the     |                                           |
|                      | |             | fabric.                                                |                                           |
|                      | +-------------+--------------------------------------------------------+                                           |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| interface            | Names of the interfaces that      | string             | Maximum length: 79 |                                      |
| `<interface-name>`   | belong to this zone. Interfaces   |                    |                    |                                      |
|                      | must not be assigned to another   |                    |                    |                                      |
|                      | zone or have firewall policies    |                    |                    |                                      |
|                      | defined.                          |                    |                    |                                      |
|                      |                                   |                    |                    |                                      |
|                      | Select interfaces to add to the   |                    |                    |                                      |
|                      | zone.                             |                    |                    |                                      |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| intrazone            | Allow or deny traffic routing     | option             | \-                 | deny                                 |
|                      | between different interfaces in   |                    |                    |                                      |
|                      | the same zone (default = deny).   |                    |                    |                                      |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                      | +-------------+--------------------------------------------------------+                                           |
|                      | | Option      | Description                                            |                                           |
|                      | +=============+========================================================+                                           |
|                      | | *allow*     | Allow traffic between interfaces in the zone.          |                                           |
|                      | +-------------+--------------------------------------------------------+                                           |
|                      | | *deny*      | Deny traffic between interfaces in the zone.           |                                           |
|                      | +-------------+--------------------------------------------------------+                                           |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| name                 | Zone name.                        | string             | Maximum length: 35 |                                      |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| uuid \*              | Universally Unique Identifier     | uuid               | Not Specified      | 00000000-0000-0000-0000-000000000000 |
|                      | (UUID; automatically assigned but |                    |                    |                                      |
|                      | can be manually reset).           |                    |                    |                                      |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+

