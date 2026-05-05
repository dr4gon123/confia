# config vpn ssl web user-group-bookmark

Configure SSL-VPN user group bookmark.

## Syntax

```
config vpn ssl web user-group-bookmark
    Description: Configure SSL-VPN user group bookmark.
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
    next
end
```

## Parameters

+-----------+-----------------------------------+--------+---------+---------+
| Parameter | Description                       | Type   | Size    | Default |
+===========+===================================+========+=========+=========+
| name      | Group name.                       | string | Maximum |         |
|           |                                   |        | length: |         |
|           |                                   |        | 64      |         |
+-----------+-----------------------------------+--------+---------+---------+

