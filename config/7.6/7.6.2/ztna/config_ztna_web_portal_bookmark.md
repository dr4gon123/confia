# config ztna web-portal-bookmark

Configure ztna web-portal bookmark.

## Syntax

```
config ztna web-portal-bookmark
    Description: Configure ztna web-portal bookmark.
    edit <name>
        config bookmarks
            Description: Bookmark table.
            edit <name>
                set apptype [ftp|rdp|...]
                set color-depth [32|16|...]
                set description {var-string}
                set domain {var-string}
                set folder {var-string}
                set height {integer}
                set host {var-string}
                set keyboard-layout [ar-101|ar-102|...]
                set load-balancing-info {var-string}
                set logon-password {password}
                set logon-user {var-string}
                set port {integer}
                set preconnection-blob {var-string}
                set preconnection-id {integer}
                set restricted-admin [enable|disable]
                set security [any|rdp|...]
                set send-preconnection-id [enable|disable]
                set sso [disable|enable]
                set url {var-string}
                set vnc-keyboard-layout [default|da|...]
                set width {integer}
            next
        end
        set groups <name1>, <name2>, ...
        set users <name1>, <name2>, ...
    next
end
```

## Parameters

+-----------+-----------------------------------+--------+---------+---------+
| Parameter | Description                       | Type   | Size    | Default |
+===========+===================================+========+=========+=========+
| groups    | User groups.                      | string | Maximum |         |
| `<name>`  |                                   |        | length: |         |
|           | Group name.                       |        | 79      |         |
+-----------+-----------------------------------+--------+---------+---------+
| name      | Bookmark name.                    | string | Maximum |         |
|           |                                   |        | length: |         |
|           |                                   |        | 35      |         |
+-----------+-----------------------------------+--------+---------+---------+
| users     | User name.                        | string | Maximum |         |
| `<name>`  |                                   |        | length: |         |
|           | User name.                        |        | 79      |         |
+-----------+-----------------------------------+--------+---------+---------+

