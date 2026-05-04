# config vpn ssl web portal

Portal.

## Syntax

```
config vpn ssl web portal
    Description: Portal.
    edit <name>
        set allow-user-access {option1}, {option2}, ...
        set auto-connect [enable|disable]
        config bookmark-group
            Description: Portal bookmark group.
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
        set client-src-range [enable|disable]
        set clipboard [enable|disable]
        set custom-lang {string}
        set customize-forticlient-download-url [enable|disable]
        set default-window-height {integer}
        set default-window-width {integer}
        set dhcp-ip-overlap [use-new|use-old]
        set dhcp-ra-giaddr {ipv4-address}
        set dhcp6-ra-linkaddr {ipv6-address}
        set display-bookmark [enable|disable]
        set display-connection-tools [enable|disable]
        set display-history [enable|disable]
        set display-status [enable|disable]
        set dns-server1 {ipv4-address}
        set dns-server2 {ipv4-address}
        set dns-suffix {var-string}
        set exclusive-routing [enable|disable]
        set forticlient-download [enable|disable]
        set forticlient-download-method [direct|ssl-vpn]
        set heading {string}
        set hide-sso-credential [enable|disable]
        set host-check [none|av|...]
        set host-check-interval {integer}
        set host-check-policy <name1>, <name2>, ...
        set ip-mode [range|user-group|...]
        set ip-pools <name1>, <name2>, ...
        set ipv6-dns-server1 {ipv6-address}
        set ipv6-dns-server2 {ipv6-address}
        set ipv6-exclusive-routing [enable|disable]
        set ipv6-pools <name1>, <name2>, ...
        set ipv6-service-restriction [enable|disable]
        set ipv6-split-tunneling [enable|disable]
        set ipv6-split-tunneling-routing-address <name1>, <name2>, ...
        set ipv6-split-tunneling-routing-negate [enable|disable]
        set ipv6-tunnel-mode [enable|disable]
        set ipv6-wins-server1 {ipv6-address}
        set ipv6-wins-server2 {ipv6-address}
        set keep-alive [enable|disable]
        config landing-page
            Description: Landing page options.
            set url {var-string}
            set logout-url {var-string}
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
        end
        set landing-page-mode [enable|disable]
        set limit-user-logins [enable|disable]
        set mac-addr-action [allow|deny]
        set mac-addr-check [enable|disable]
        config mac-addr-check-rule
            Description: Client MAC address check rule.
            edit <name>
                set mac-addr-mask {integer}
                set mac-addr-list <addr1>, <addr2>, ...
            next
        end
        set macos-forticlient-download-url {var-string}
        set os-check [enable|disable]
        config os-check-list
            Description: SSL-VPN OS checks.
            edit <name>
                set action [deny|allow|...]
                set tolerance {integer}
                set latest-patch-level {user}
            next
        end
        set prefer-ipv6-dns [enable|disable]
        set redir-url {var-string}
        set rewrite-ip-uri-ui [enable|disable]
        set save-password [enable|disable]
        set service-restriction [enable|disable]
        set skip-check-for-browser [enable|disable]
        set skip-check-for-unsupported-os [enable|disable]
        set smb-max-version [smbv1|smbv2|...]
        set smb-min-version [smbv1|smbv2|...]
        set smb-ntlmv1-auth [enable|disable]
        set smbv1 [enable|disable]
        config split-dns
            Description: Split DNS for SSL-VPN.
            edit <id>
                set domains {var-string}
                set dns-server1 {ipv4-address}
                set dns-server2 {ipv4-address}
                set ipv6-dns-server1 {ipv6-address}
                set ipv6-dns-server2 {ipv6-address}
            next
        end
        set split-tunneling [enable|disable]
        set split-tunneling-routing-address <name1>, <name2>, ...
        set split-tunneling-routing-negate [enable|disable]
        set theme [jade|neutrino|...]
        set tunnel-mode [enable|disable]
        set use-sdwan [enable|disable]
        set user-bookmark [enable|disable]
        set user-group-bookmark [enable|disable]
        set web-mode [enable|disable]
        set windows-forticlient-download-url {var-string}
        set wins-server1 {ipv4-address}
        set wins-server2 {ipv4-address}
    next
end
```

## Parameters

+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| Parameter                            | Description                       | Type                  | Size                  | Default               |
+======================================+===================================+=======================+=======================+=======================+
| allow-user-access                    | Allow user access to SSL-VPN      | option                | \-                    | web ftp smb sftp      |
|                                      | applications.                     |                       |                       | telnet ssh vnc rdp    |
|                                      |                                   |                       |                       | ping                  |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | Option      | Description                                            |                                  |
|                                      | +=============+========================================================+                                  |
|                                      | | *web*       | HTTP/HTTPS access.                                     |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *ftp*       | FTP access.                                            |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *smb*       | SMB/CIFS access.                                       |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *sftp*      | SFTP access.                                           |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *telnet*    | TELNET access.                                         |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *ssh*       | SSH access.                                            |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *vnc*       | VNC access.                                            |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *rdp*       | RDP access.                                            |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *ping*      | PING access.                                           |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| auto-connect                         | Enable/disable automatic connect  | option                | \-                    | disable               |
|                                      | by client when system is up.      |                       |                       |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | Option      | Description                                            |                                  |
|                                      | +=============+========================================================+                                  |
|                                      | | *enable*    | Enable setting.                                        |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *disable*   | Disable setting.                                       |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| client-src-range                     | Allow client to add source range  | option                | \-                    | disable               |
|                                      | for the tunnel traffic.           |                       |                       |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | Option      | Description                                            |                                  |
|                                      | +=============+========================================================+                                  |
|                                      | | *enable*    | Enable setting.                                        |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *disable*   | Disable setting.                                       |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| clipboard                            | Enable to support RDP/VPC         | option                | \-                    | enable                |
|                                      | clipboard functionality.          |                       |                       |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | Option      | Description                                            |                                  |
|                                      | +=============+========================================================+                                  |
|                                      | | *enable*    | Enable support of RDP/VNC clipboard.                   |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *disable*   | Disable support of RDP/VNC clipboard.                  |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| custom-lang                          | Change the web portal display     | string                | Maximum length: 35    |                       |
|                                      | language. Overrides config system |                       |                       |                       |
|                                      | global set language. You can use  |                       |                       |                       |
|                                      | config system custom-language and |                       |                       |                       |
|                                      | execute system custom-language to |                       |                       |                       |
|                                      | add custom language files.        |                       |                       |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| customize-forticlient-download-url   | Enable support of customized      | option                | \-                    | disable               |
|                                      | download URL for FortiClient.     |                       |                       |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | Option      | Description                                            |                                  |
|                                      | +=============+========================================================+                                  |
|                                      | | *enable*    | Enable setting.                                        |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *disable*   | Disable setting.                                       |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| default-window-height                | Screen height.                    | integer               | Minimum value: 0      | 768                   |
|                                      |                                   |                       | Maximum value: 65535  |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| default-window-width                 | Screen width.                     | integer               | Minimum value: 0      | 1024                  |
|                                      |                                   |                       | Maximum value: 65535  |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| dhcp-ip-overlap                      | Configure overlapping DHCP IP     | option                | \-                    | use-new               |
|                                      | allocation assignment.            |                       |                       |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | Option      | Description                                            |                                  |
|                                      | +=============+========================================================+                                  |
|                                      | | *use-new*   | Assign DHCP lease to new client and remove old client  |                                  |
|                                      | |             | lease.                                                 |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *use-old*   | Preserve previous client IP allocation and disconnect  |                                  |
|                                      | |             | new client.                                            |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| dhcp-ra-giaddr                       | Relay agent gateway IP address to | ipv4-address          | Not Specified         | 0.0.0.0               |
|                                      | use in the giaddr field of DHCP   |                       |                       |                       |
|                                      | requests.                         |                       |                       |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| dhcp6-ra-linkaddr                    | Relay agent IPv6 link address to  | ipv6-address          | Not Specified         | ::                    |
|                                      | use in DHCP6 requests.            |                       |                       |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| display-bookmark                     | Enable to display the web portal  | option                | \-                    | enable                |
|                                      | bookmark widget.                  |                       |                       |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | Option      | Description                                            |                                  |
|                                      | +=============+========================================================+                                  |
|                                      | | *enable*    | Enable setting.                                        |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *disable*   | Disable setting.                                       |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| display-connection-tools             | Enable to display the web portal  | option                | \-                    | enable                |
|                                      | connection tools widget.          |                       |                       |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | Option      | Description                                            |                                  |
|                                      | +=============+========================================================+                                  |
|                                      | | *enable*    | Enable setting.                                        |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *disable*   | Disable setting.                                       |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| display-history                      | Enable to display the web portal  | option                | \-                    | enable                |
|                                      | user login history widget.        |                       |                       |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | Option      | Description                                            |                                  |
|                                      | +=============+========================================================+                                  |
|                                      | | *enable*    | Enable setting.                                        |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *disable*   | Disable setting.                                       |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| display-status                       | Enable to display the web portal  | option                | \-                    | enable                |
|                                      | status widget.                    |                       |                       |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | Option      | Description                                            |                                  |
|                                      | +=============+========================================================+                                  |
|                                      | | *enable*    | Enable setting.                                        |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *disable*   | Disable setting.                                       |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| dns-server1                          | IPv4 DNS server 1.                | ipv4-address          | Not Specified         | 0.0.0.0               |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| dns-server2                          | IPv4 DNS server 2.                | ipv4-address          | Not Specified         | 0.0.0.0               |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| dns-suffix                           | DNS suffix.                       | var-string            | Maximum length: 253   |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| exclusive-routing                    | Enable/disable all traffic go     | option                | \-                    | disable               |
|                                      | through tunnel only.              |                       |                       |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | Option      | Description                                            |                                  |
|                                      | +=============+========================================================+                                  |
|                                      | | *enable*    | Enable setting.                                        |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *disable*   | Disable setting.                                       |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| forticlient-download                 | Enable/disable download option    | option                | \-                    | enable                |
|                                      | for FortiClient.                  |                       |                       |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | Option      | Description                                            |                                  |
|                                      | +=============+========================================================+                                  |
|                                      | | *enable*    | Enable setting.                                        |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *disable*   | Disable setting.                                       |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| forticlient-download-method          | FortiClient download method.      | option                | \-                    | direct                |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | Option      | Description                                            |                                  |
|                                      | +=============+========================================================+                                  |
|                                      | | *direct*    | Download via direct link.                              |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *ssl-vpn*   | Download via SSL-VPN.                                  |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| heading                              | Web portal heading message.       | string                | Maximum length: 31    | SSL-VPN Portal        |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| hide-sso-credential                  | Enable to prevent SSO credential  | option                | \-                    | enable                |
|                                      | being sent to client.             |                       |                       |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | Option      | Description                                            |                                  |
|                                      | +=============+========================================================+                                  |
|                                      | | *enable*    | Enable setting.                                        |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *disable*   | Disable setting.                                       |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| host-check                           | Type of host checking performed   | option                | \-                    | none                  |
|                                      | on endpoints.                     |                       |                       |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | Option      | Description                                            |                                  |
|                                      | +=============+========================================================+                                  |
|                                      | | *none*      | No host checking.                                      |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *av*        | AntiVirus software recognized by the Windows Security  |                                  |
|                                      | |             | Center.                                                |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *fw*        | Firewall software recognized by the Windows Security   |                                  |
|                                      | |             | Center.                                                |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *av-fw*     | AntiVirus and firewall software recognized by the      |                                  |
|                                      | |             | Windows Security Center.                               |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *custom*    | Custom.                                                |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| host-check-interval                  | Periodic host check interval.     | integer               | Minimum value: 120    | 0                     |
|                                      | Value of 0 means disabled and     |                       | Maximum value: 259200 |                       |
|                                      | host checking only happens when   |                       |                       |                       |
|                                      | the endpoint connects.            |                       |                       |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| host-check-policy `<name>`           | One or more policies to require   | string                | Maximum length: 79    |                       |
|                                      | the endpoint to have specific     |                       |                       |                       |
|                                      | security software.                |                       |                       |                       |
|                                      |                                   |                       |                       |                       |
|                                      | Host check software list name.    |                       |                       |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| ip-mode                              | Method by which users of this     | option                | \-                    | range                 |
|                                      | SSL-VPN tunnel obtain IP          |                       |                       |                       |
|                                      | addresses.                        |                       |                       |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                      | +--------------+--------------------------------------------------------+                                 |
|                                      | | Option       | Description                                            |                                 |
|                                      | +==============+========================================================+                                 |
|                                      | | *range*      | Use the IP addresses available for all SSL-VPN users   |                                 |
|                                      | |              | as defined by the SSL settings command.                |                                 |
|                                      | +--------------+--------------------------------------------------------+                                 |
|                                      | | *user-group* | Use the IP addresses associated with individual users  |                                 |
|                                      | |              | or user groups (usually from external auth servers).   |                                 |
|                                      | +--------------+--------------------------------------------------------+                                 |
|                                      | | *dhcp*       | Use IP addresses obtained from external DHCP server.   |                                 |
|                                      | +--------------+--------------------------------------------------------+                                 |
|                                      | | *no-ip*      | Do not assign IP address.                              |                                 |
|                                      | +--------------+--------------------------------------------------------+                                 |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| ip-pools `<name>`                    | IPv4 firewall source address      | string                | Maximum length: 79    |                       |
|                                      | objects reserved for SSL-VPN      |                       |                       |                       |
|                                      | tunnel mode clients.              |                       |                       |                       |
|                                      |                                   |                       |                       |                       |
|                                      | Address name.                     |                       |                       |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| ipv6-dns-server1                     | IPv6 DNS server 1.                | ipv6-address          | Not Specified         | ::                    |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| ipv6-dns-server2                     | IPv6 DNS server 2.                | ipv6-address          | Not Specified         | ::                    |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| ipv6-exclusive-routing               | Enable/disable all IPv6 traffic   | option                | \-                    | disable               |
|                                      | go through tunnel only.           |                       |                       |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | Option      | Description                                            |                                  |
|                                      | +=============+========================================================+                                  |
|                                      | | *enable*    | Enable setting.                                        |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *disable*   | Disable setting.                                       |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| ipv6-pools `<name>`                  | IPv6 firewall source address      | string                | Maximum length: 79    |                       |
|                                      | objects reserved for SSL-VPN      |                       |                       |                       |
|                                      | tunnel mode clients.              |                       |                       |                       |
|                                      |                                   |                       |                       |                       |
|                                      | Address name.                     |                       |                       |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| ipv6-service-restriction             | Enable/disable IPv6 tunnel        | option                | \-                    | disable               |
|                                      | service restriction.              |                       |                       |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | Option      | Description                                            |                                  |
|                                      | +=============+========================================================+                                  |
|                                      | | *enable*    | Enable setting.                                        |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *disable*   | Disable setting.                                       |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| ipv6-split-tunneling                 | Enable/disable IPv6 split         | option                | \-                    | enable                |
|                                      | tunneling.                        |                       |                       |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | Option      | Description                                            |                                  |
|                                      | +=============+========================================================+                                  |
|                                      | | *enable*    | Enable setting.                                        |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *disable*   | Disable setting.                                       |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| ipv6-split-tunneling-routing-address | IPv6 SSL-VPN tunnel mode firewall | string                | Maximum length: 79    |                       |
| `<name>`                             | address objects that override     |                       |                       |                       |
|                                      | firewall policy destination       |                       |                       |                       |
|                                      | addresses to control              |                       |                       |                       |
|                                      | split-tunneling access.           |                       |                       |                       |
|                                      |                                   |                       |                       |                       |
|                                      | Address name.                     |                       |                       |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| ipv6-split-tunneling-routing-negate  | Enable to negate IPv6 split       | option                | \-                    | disable               |
|                                      | tunneling routing address.        |                       |                       |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | Option      | Description                                            |                                  |
|                                      | +=============+========================================================+                                  |
|                                      | | *enable*    | Enable setting.                                        |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *disable*   | Disable setting.                                       |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| ipv6-tunnel-mode                     | Enable/disable IPv6 SSL-VPN       | option                | \-                    | disable               |
|                                      | tunnel mode.                      |                       |                       |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | Option      | Description                                            |                                  |
|                                      | +=============+========================================================+                                  |
|                                      | | *enable*    | Enable setting.                                        |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *disable*   | Disable setting.                                       |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| ipv6-wins-server1                    | IPv6 WINS server 1.               | ipv6-address          | Not Specified         | ::                    |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| ipv6-wins-server2                    | IPv6 WINS server 2.               | ipv6-address          | Not Specified         | ::                    |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| keep-alive                           | Enable/disable automatic          | option                | \-                    | disable               |
|                                      | reconnect for FortiClient         |                       |                       |                       |
|                                      | connections.                      |                       |                       |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | Option      | Description                                            |                                  |
|                                      | +=============+========================================================+                                  |
|                                      | | *enable*    | Enable setting.                                        |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *disable*   | Disable setting.                                       |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| landing-page-mode                    | Enable/disable SSL-VPN landing    | option                | \-                    | disable               |
|                                      | page mode.                        |                       |                       |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | Option      | Description                                            |                                  |
|                                      | +=============+========================================================+                                  |
|                                      | | *enable*    | Enable setting.                                        |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *disable*   | Disable setting.                                       |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| limit-user-logins                    | Enable to limit each user to one  | option                | \-                    | disable               |
|                                      | SSL-VPN session at a time.        |                       |                       |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | Option      | Description                                            |                                  |
|                                      | +=============+========================================================+                                  |
|                                      | | *enable*    | Enable setting.                                        |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *disable*   | Disable setting.                                       |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| mac-addr-action                      | Client MAC address action.        | option                | \-                    | allow                 |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | Option      | Description                                            |                                  |
|                                      | +=============+========================================================+                                  |
|                                      | | *allow*     | Allow connection when client MAC address is matched.   |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *deny*      | Deny connection when client MAC address is matched.    |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| mac-addr-check                       | Enable/disable MAC address host   | option                | \-                    | disable               |
|                                      | checking.                         |                       |                       |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | Option      | Description                                            |                                  |
|                                      | +=============+========================================================+                                  |
|                                      | | *enable*    | Enable setting.                                        |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *disable*   | Disable setting.                                       |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| macos-forticlient-download-url       | Download URL for Mac FortiClient. | var-string            | Maximum length: 1023  |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| name                                 | Portal name.                      | string                | Maximum length: 35    |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| os-check                             | Enable to let the FortiGate       | option                | \-                    | disable               |
|                                      | decide action based on client OS. |                       |                       |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | Option      | Description                                            |                                  |
|                                      | +=============+========================================================+                                  |
|                                      | | *enable*    | Enable setting.                                        |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *disable*   | Disable setting.                                       |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| prefer-ipv6-dns                      | Prefer to query IPv6 DNS server   | option                | \-                    | disable               |
|                                      | first if enabled.                 |                       |                       |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | Option      | Description                                            |                                  |
|                                      | +=============+========================================================+                                  |
|                                      | | *enable*    | Enable setting.                                        |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *disable*   | Disable setting.                                       |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| redir-url                            | Client login redirect URL.        | var-string            | Maximum length: 255   |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| rewrite-ip-uri-ui                    | Rewrite contents for URI contains | option                | \-                    | disable               |
|                                      | IP and /ui/.                      |                       |                       |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | Option      | Description                                            |                                  |
|                                      | +=============+========================================================+                                  |
|                                      | | *enable*    | Enable contents rewrite for URI contains               |                                  |
|                                      | |             | \"IP-address/ui/\".                                    |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *disable*   | Disable contents rewrite for URI contains              |                                  |
|                                      | |             | \"IP-address/ui/\".                                    |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| save-password                        | Enable/disable FortiClient saving | option                | \-                    | disable               |
|                                      | the user\'s password.             |                       |                       |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | Option      | Description                                            |                                  |
|                                      | +=============+========================================================+                                  |
|                                      | | *enable*    | Enable setting.                                        |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *disable*   | Disable setting.                                       |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| service-restriction                  | Enable/disable tunnel service     | option                | \-                    | disable               |
|                                      | restriction.                      |                       |                       |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | Option      | Description                                            |                                  |
|                                      | +=============+========================================================+                                  |
|                                      | | *enable*    | Enable setting.                                        |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *disable*   | Disable setting.                                       |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| skip-check-for-browser               | Enable to skip host check for     | option                | \-                    | enable                |
|                                      | browser support.                  |                       |                       |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | Option      | Description                                            |                                  |
|                                      | +=============+========================================================+                                  |
|                                      | | *enable*    | Enable setting.                                        |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *disable*   | Disable setting.                                       |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| skip-check-for-unsupported-os        | Enable to skip host check if      | option                | \-                    | enable                |
|                                      | client OS does not support it.    |                       |                       |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | Option      | Description                                            |                                  |
|                                      | +=============+========================================================+                                  |
|                                      | | *enable*    | Enable setting.                                        |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *disable*   | Disable setting.                                       |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| smb-max-version                      | SMB maximum client protocol       | option                | \-                    | smbv3                 |
|                                      | version.                          |                       |                       |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | Option      | Description                                            |                                  |
|                                      | +=============+========================================================+                                  |
|                                      | | *smbv1*     | SMB version 1.                                         |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *smbv2*     | SMB version 2.                                         |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *smbv3*     | SMB version 3.                                         |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| smb-min-version                      | SMB minimum client protocol       | option                | \-                    | smbv2                 |
|                                      | version.                          |                       |                       |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | Option      | Description                                            |                                  |
|                                      | +=============+========================================================+                                  |
|                                      | | *smbv1*     | SMB version 1.                                         |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *smbv2*     | SMB version 2.                                         |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *smbv3*     | SMB version 3.                                         |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| smb-ntlmv1-auth                      | Enable support of NTLMv1 for      | option                | \-                    | disable               |
|                                      | Samba authentication.             |                       |                       |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | Option      | Description                                            |                                  |
|                                      | +=============+========================================================+                                  |
|                                      | | *enable*    | Enable setting.                                        |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *disable*   | Disable setting.                                       |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| smbv1                                | SMB version 1.                    | option                | \-                    | disable               |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | Option      | Description                                            |                                  |
|                                      | +=============+========================================================+                                  |
|                                      | | *enable*    | enable                                                 |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *disable*   | disable                                                |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| split-tunneling                      | Enable/disable IPv4 split         | option                | \-                    | enable                |
|                                      | tunneling.                        |                       |                       |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | Option      | Description                                            |                                  |
|                                      | +=============+========================================================+                                  |
|                                      | | *enable*    | Enable setting.                                        |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *disable*   | Disable setting.                                       |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| split-tunneling-routing-address      | IPv4 SSL-VPN tunnel mode firewall | string                | Maximum length: 79    |                       |
| `<name>`                             | address objects that override     |                       |                       |                       |
|                                      | firewall policy destination       |                       |                       |                       |
|                                      | addresses to control              |                       |                       |                       |
|                                      | split-tunneling access.           |                       |                       |                       |
|                                      |                                   |                       |                       |                       |
|                                      | Address name.                     |                       |                       |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| split-tunneling-routing-negate       | Enable to negate split tunneling  | option                | \-                    | disable               |
|                                      | routing address.                  |                       |                       |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | Option      | Description                                            |                                  |
|                                      | +=============+========================================================+                                  |
|                                      | | *enable*    | Enable setting.                                        |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *disable*   | Disable setting.                                       |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| theme                                | Web portal color scheme.          | option                | \-                    | security-fabric       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                      | +-------------------+--------------------------------------------------------+                            |
|                                      | | Option            | Description                                            |                            |
|                                      | +===================+========================================================+                            |
|                                      | | *jade*            | Jade theme.                                            |                            |
|                                      | +-------------------+--------------------------------------------------------+                            |
|                                      | | *neutrino*        | Neutrino theme.                                        |                            |
|                                      | +-------------------+--------------------------------------------------------+                            |
|                                      | | *mariner*         | Mariner theme.                                         |                            |
|                                      | +-------------------+--------------------------------------------------------+                            |
|                                      | | *graphite*        | Graphite theme.                                        |                            |
|                                      | +-------------------+--------------------------------------------------------+                            |
|                                      | | *melongene*       | Melongene theme.                                       |                            |
|                                      | +-------------------+--------------------------------------------------------+                            |
|                                      | | *jet-stream*      | Jet Stream theme.                                      |                            |
|                                      | +-------------------+--------------------------------------------------------+                            |
|                                      | | *security-fabric* | Security Fabric theme.                                 |                            |
|                                      | +-------------------+--------------------------------------------------------+                            |
|                                      | | *dark-matter*     | Dark Matter theme.                                     |                            |
|                                      | +-------------------+--------------------------------------------------------+                            |
|                                      | | *onyx*            | Onyx theme.                                            |                            |
|                                      | +-------------------+--------------------------------------------------------+                            |
|                                      | | *eclipse*         | Eclipse theme.                                         |                            |
|                                      | +-------------------+--------------------------------------------------------+                            |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| tunnel-mode                          | Enable/disable IPv4 SSL-VPN       | option                | \-                    | disable               |
|                                      | tunnel mode.                      |                       |                       |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | Option      | Description                                            |                                  |
|                                      | +=============+========================================================+                                  |
|                                      | | *enable*    | Enable setting.                                        |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *disable*   | Disable setting.                                       |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| use-sdwan                            | Use SD-WAN rules to get output    | option                | \-                    | disable               |
|                                      | interface.                        |                       |                       |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | Option      | Description                                            |                                  |
|                                      | +=============+========================================================+                                  |
|                                      | | *enable*    | Enable setting.                                        |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *disable*   | Disable setting.                                       |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| user-bookmark                        | Enable to allow web portal users  | option                | \-                    | enable                |
|                                      | to create their own bookmarks.    |                       |                       |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | Option      | Description                                            |                                  |
|                                      | +=============+========================================================+                                  |
|                                      | | *enable*    | Enable setting.                                        |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *disable*   | Disable setting.                                       |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| user-group-bookmark                  | Enable to allow web portal users  | option                | \-                    | enable                |
|                                      | to create bookmarks for all users |                       |                       |                       |
|                                      | in the same user group.           |                       |                       |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | Option      | Description                                            |                                  |
|                                      | +=============+========================================================+                                  |
|                                      | | *enable*    | Enable setting.                                        |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *disable*   | Disable setting.                                       |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| web-mode                             | Enable/disable SSL-VPN web mode.  | option                | \-                    | disable               |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | Option      | Description                                            |                                  |
|                                      | +=============+========================================================+                                  |
|                                      | | *enable*    | Enable setting.                                        |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
|                                      | | *disable*   | Disable setting.                                       |                                  |
|                                      | +-------------+--------------------------------------------------------+                                  |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| windows-forticlient-download-url     | Download URL for Windows          | var-string            | Maximum length: 1023  |                       |
|                                      | FortiClient.                      |                       |                       |                       |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| wins-server1                         | IPv4 WINS server 1.               | ipv4-address          | Not Specified         | 0.0.0.0               |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| wins-server2                         | IPv4 WINS server 1.               | ipv4-address          | Not Specified         | 0.0.0.0               |
+--------------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+

