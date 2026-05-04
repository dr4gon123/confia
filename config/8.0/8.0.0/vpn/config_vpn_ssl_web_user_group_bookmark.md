# config vpn ssl web user-group-bookmark

Configure Agentless VPN user group bookmark.

## Syntax

```
config vpn ssl web user-group-bookmark
    Description: Configure Agentless VPN user group bookmark.
    edit <name>
        config bookmarks
            Description: Bookmark table.
            edit <name>
                set additional-params {var-string}
                set apptype [ftp|rdp|...]
                set color-depth [32|16|...]
                set description {var-string}
                set domain {var-string}
                set folder {var-string}
                config form-data
                    Description: Form data.
                    edit <name>
                        set value {var-string}
                    next
                end
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
                set sso [disable|static|...]
                set sso-credential [sslvpn-login|alternative]
                set sso-credential-sent-once [enable|disable]
                set sso-password {password}
                set sso-username {var-string}
                set url {var-string}
                set vnc-keyboard-layout [default|da|...]
                set width {integer}
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

