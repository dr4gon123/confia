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
                set verify-cert [enable|disable]
                set vnc-keyboard-layout [default|da|...]
                set width {integer}
            next
        end
        set groups <name1>, <name2>, ...
        config llm-secure-proxy
            Description: LLM secure proxy.
            set all-llm-servers [enable|disable]
            set llm-servers <name1>, <name2>, ...
        end
        set type [user|ldap-dynamic|...]
        set users <name1>, <name2>, ...
    next
end
```

## Parameters

+-----------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| Parameter | Description                       | Type                  | Size                  | Default               |
+===========+===================================+=======================+=======================+=======================+
| groups    | User groups.                      | string                | Maximum length: 79    |                       |
| `<name>`  |                                   |                       |                       |                       |
|           | Group name.                       |                       |                       |                       |
+-----------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| name      | Bookmark name.                    | string                | Maximum length: 35    |                       |
+-----------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| type \*   | Bookmark type.                    | option                | \-                    | user                  |
+-----------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|           | +----------------+--------------------------------------------------------+                               |
|           | | Option         | Description                                            |                               |
|           | +================+========================================================+                               |
|           | | *user*         | Users/Groups.                                          |                               |
|           | +----------------+--------------------------------------------------------+                               |
|           | | *ldap-dynamic* | LDAP attributes dynamic.                               |                               |
|           | +----------------+--------------------------------------------------------+                               |
|           | | *saml-dynamic* | SAML attributes dynamic.                               |                               |
|           | +----------------+--------------------------------------------------------+                               |
+-----------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| users     | User name.                        | string                | Maximum length: 79    |                       |
| `<name>`  |                                   |                       |                       |                       |
|           | User name.                        |                       |                       |                       |
+-----------+-----------------------------------+-----------------------+-----------------------+-----------------------+

