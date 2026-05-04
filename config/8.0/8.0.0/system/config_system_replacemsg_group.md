# config system replacemsg-group

Configure replacement message groups.

## Syntax

```
config system replacemsg-group
    Description: Configure replacement message groups.
    edit <name>
        config admin
            Description: Replacement message table entries.
            edit <msg-type>
                set buffer {var-string}
                set format [none|text|...]
                set header [none|http|...]
            next
        end
        config alertmail
            Description: Replacement message table entries.
            edit <msg-type>
                set buffer {var-string}
                set format [none|text|...]
                set header [none|http|...]
            next
        end
        config auth
            Description: Replacement message table entries.
            edit <msg-type>
                set buffer {var-string}
                set format [none|text|...]
                set header [none|http|...]
            next
        end
        config automation
            Description: Replacement message table entries.
            edit <msg-type>
                set buffer {var-string}
                set format [none|text|...]
                set header [none|http|...]
            next
        end
        set comment {var-string}
        config custom-message
            Description: Replacement message table entries.
            edit <msg-type>
                set buffer {var-string}
                set format [none|text|...]
                set header [none|http|...]
            next
        end
        set fabric-force-sync [enable|disable]
        set fabric-object [enable|disable]
        set fabric-object-source [member|local|...]
        config fortiguard-wf
            Description: Replacement message table entries.
            edit <msg-type>
                set buffer {var-string}
                set format [none|text|...]
                set header [none|http|...]
            next
        end
        config ftp
            Description: Replacement message table entries.
            edit <msg-type>
                set buffer {var-string}
                set format [none|text|...]
                set header [none|http|...]
            next
        end
        set group-type [default|utm|...]
        config http
            Description: Replacement message table entries.
            edit <msg-type>
                set buffer {var-string}
                set format [none|text|...]
                set header [none|http|...]
            next
        end
        config icap
            Description: Replacement message table entries.
            edit <msg-type>
                set buffer {var-string}
                set format [none|text|...]
                set header [none|http|...]
            next
        end
        config mail
            Description: Replacement message table entries.
            edit <msg-type>
                set buffer {var-string}
                set format [none|text|...]
                set header [none|http|...]
            next
        end
        config nac-quar
            Description: Replacement message table entries.
            edit <msg-type>
                set buffer {var-string}
                set format [none|text|...]
                set header [none|http|...]
            next
        end
        config spam
            Description: Replacement message table entries.
            edit <msg-type>
                set buffer {var-string}
                set format [none|text|...]
                set header [none|http|...]
            next
        end
        config sslvpn
            Description: Replacement message table entries.
            edit <msg-type>
                set buffer {var-string}
                set format [none|text|...]
                set header [none|http|...]
            next
        end
        config traffic-quota
            Description: Replacement message table entries.
            edit <msg-type>
                set buffer {var-string}
                set format [none|text|...]
                set header [none|http|...]
            next
        end
        config utm
            Description: Replacement message table entries.
            edit <msg-type>
                set buffer {var-string}
                set format [none|text|...]
                set header [none|http|...]
            next
        end
        set uuid {uuid}
        config webproxy
            Description: Replacement message table entries.
            edit <msg-type>
                set buffer {var-string}
                set format [none|text|...]
                set header [none|http|...]
            next
        end
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
| group-type           | Group type.                       | option             | \-                 | default                              |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                      | +-------------+--------------------------------------------------------+                                           |
|                      | | Option      | Description                                            |                                           |
|                      | +=============+========================================================+                                           |
|                      | | *default*   | Per-vdom replacement messages.                         |                                           |
|                      | +-------------+--------------------------------------------------------+                                           |
|                      | | *utm*       | For use with UTM settings in firewall policies.        |                                           |
|                      | +-------------+--------------------------------------------------------+                                           |
|                      | | *auth*      | For use with authentication pages in firewall          |                                           |
|                      | |             | policies.                                              |                                           |
|                      | +-------------+--------------------------------------------------------+                                           |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| name                 | Group name.                       | string             | Maximum length: 35 |                                      |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| uuid \*              | Universally Unique Identifier     | uuid               | Not Specified      | 00000000-0000-0000-0000-000000000000 |
|                      | (UUID; automatically assigned but |                    |                    |                                      |
|                      | can be manually reset).           |                    |                    |                                      |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+

