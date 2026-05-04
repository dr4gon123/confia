# config vpn ssl web user-bookmark

Configure SSL-VPN user bookmark.

## Syntax

```
config vpn ssl web user-bookmark
    Description: Configure SSL-VPN user bookmark.
    edit <name>
        config bookmarks
            Description: Bookmark table.
            edit <name>
                set apptype [ftp|rdp|...]
                set url {var-string}
                set host {var-string}
                set folder {var-string}
                set domain {var-string}
                set additional-params {var-string}
                set description {var-string}
                set keyboard-layout [ar-101|ar-102|...]
                set security [any|rdp|...]
                set send-preconnection-id [enable|disable]
                set preconnection-id {integer}
                set preconnection-blob {var-string}
                set load-balancing-info {var-string}
                set restricted-admin [enable|disable]
                set port {integer}
                set logon-user {var-string}
                set logon-password {password}
                set color-depth [32|16|...]
                set sso [disable|static|...]
                config form-data
                    Description: Form data.
                    edit <name>
                        set value {var-string}
                    next
                end
                set sso-credential [sslvpn-login|alternative]
                set sso-username {var-string}
                set sso-password {password}
                set sso-credential-sent-once [enable|disable]
                set width {integer}
                set height {integer}
                set vnc-keyboard-layout [default|da|...]
            next
        end
        set custom-lang {string}
    next
end
```

## Parameters

+-------------+-----------------------------------+--------+---------+---------+
| Parameter   | Description                       | Type   | Size    | Default |
+=============+===================================+========+=========+=========+
| custom-lang | Personal language.                | string | Maximum |         |
|             |                                   |        | length: |         |
|             |                                   |        | 35      |         |
+-------------+-----------------------------------+--------+---------+---------+
| name        | User and group name.              | string | Maximum |         |
|             |                                   |        | length: |         |
|             |                                   |        | 101     |         |
+-------------+-----------------------------------+--------+---------+---------+

