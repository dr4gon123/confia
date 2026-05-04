# config casb profile

Configure CASB profile.

## Syntax

```
config casb profile
    Description: Configure CASB profile.
    edit <name>
        set comment {var-string}
        set fabric-force-sync [enable|disable]
        set fabric-object [enable|disable]
        set fabric-object-source [member|local|...]
        config saas-application
            Description: CASB profile SaaS application.
            edit <name>
                config access-rule
                    Description: CASB profile access rule.
                    edit <name>
                        set action [monitor|bypass|...]
                        config attribute-filter
                            Description: CASB profile attribute filter.
                            edit <id>
                                set action [monitor|bypass|...]
                                set attribute-match {string}
                            next
                        end
                        set bypass {option1}, {option2}, ...
                    next
                end
                config advanced-tenant-control
                    Description: CASB profile advanced tenant control.
                    edit <name>
                        config attribute
                            Description: CASB advanced tenant control attribute.
                            edit <name>
                                set input <value1>, <value2>, ...
                            next
                        end
                    next
                end
                config custom-control
                    Description: CASB profile custom control.
                    edit <name>
                        config attribute-filter
                            Description: CASB attribute filter.
                            edit <id>
                                set action [monitor|bypass|...]
                                set attribute-match {string}
                            next
                        end
                        config option
                            Description: CASB custom control option.
                            edit <name>
                                set user-input <value1>, <value2>, ...
                            next
                        end
                    next
                end
                set domain-control [enable|disable]
                set domain-control-domains <name1>, <name2>, ...
                set log [enable|disable]
                set safe-search [enable|disable]
                set safe-search-control <name1>, <name2>, ...
                set status [enable|disable]
                set tenant-control [enable|disable]
                set tenant-control-tenants <name1>, <name2>, ...
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
| comment              | Comment.                          | var-string         | Maximum length:    |                                      |
|                      |                                   |                    | 255                |                                      |
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
| name                 | CASB profile name.                | string             | Maximum length: 47 |                                      |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| uuid \*              | Universally Unique Identifier     | uuid               | Not Specified      | 00000000-0000-0000-0000-000000000000 |
|                      | (UUID; automatically assigned but |                    |                    |                                      |
|                      | can be manually reset).           |                    |                    |                                      |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+

