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

+------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter  | Description                       | Type               | Size               | Default            |
+============+===================================+====================+====================+====================+
| comment    | Comment.                          | var-string         | Maximum length:    |                    |
|            |                                   |                    | 255                |                    |
+------------+-----------------------------------+--------------------+--------------------+--------------------+
| group-type | Group type.                       | option             | \-                 | default            |
+------------+-----------------------------------+--------------------+--------------------+--------------------+
|            | +-------------+--------------------------------------------------------+                         |
|            | | Option      | Description                                            |                         |
|            | +=============+========================================================+                         |
|            | | *default*   | Per-vdom replacement messages.                         |                         |
|            | +-------------+--------------------------------------------------------+                         |
|            | | *utm*       | For use with UTM settings in firewall policies.        |                         |
|            | +-------------+--------------------------------------------------------+                         |
|            | | *auth*      | For use with authentication pages in firewall          |                         |
|            | |             | policies.                                              |                         |
|            | +-------------+--------------------------------------------------------+                         |
+------------+-----------------------------------+--------------------+--------------------+--------------------+
| name       | Group name.                       | string             | Maximum length: 35 |                    |
+------------+-----------------------------------+--------------------+--------------------+--------------------+

