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
        set client-src-range [enable|disable]
        set clipboard [enable|disable]
        set custom-lang {string}
        set customize-forticlient-download-url [enable|disable]
        set default-protocol [web|ftp|...]
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
        set focus-bookmark [enable|disable]
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
            config form-data
                Description: Form data.
                edit <name>
                    set value {var-string}
                next
            end
            set sso [disable|static|...]
            set sso-credential [sslvpn-login|alternative]
            set sso-password {password}
            set sso-username {var-string}
            set url {var-string}
        end
        set landing-page-mode [enable|disable]
        set limit-user-logins [enable|disable]
        set mac-addr-action [allow|deny]
        set mac-addr-check [enable|disable]
        config mac-addr-check-rule
            Description: Client MAC address check rule.
            edit <name>
                set mac-addr-list <addr1>, <addr2>, ...
                set mac-addr-mask {integer}
            next
        end
        set macos-forticlient-download-url {var-string}
        set os-check [enable|disable]
        config os-check-list
            Description: SSL-VPN OS checks. Read-only.
            edit <name>
                set action [deny|allow|...]
                set latest-patch-level {user}
                set minor-version {integer}
                set tolerance {integer}
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
                set dns-server1 {ipv4-address}
                set dns-server2 {ipv4-address}
                set domains {var-string}
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

+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+
| ![Note](https://fortinetweb.s3.amazonaws.com/docs.fortinet.com/v2/resources/b8624cb4-35a5-11f0-a9d0-d2b0d2e22f7d/images/aaf1f4870fd7bd8f0011c4bf3f61a24d_Icon-Light-Bulb.png "Note") | This command is available for    |
|                                                                                                                                                                                      | model(s): FortiGate 1000D,       |
|                                                                                                                                                                                      | FortiGate 1000F, FortiGate       |
|                                                                                                                                                                                      | 1001F, FortiGate 100F, FortiGate |
|                                                                                                                                                                                      | 101F, FortiGate 1100E, FortiGate |
|                                                                                                                                                                                      | 1101E, FortiGate 120G, FortiGate |
|                                                                                                                                                                                      | 121G, FortiGate 1800F, FortiGate |
|                                                                                                                                                                                      | 1801F, FortiGate 2000E,          |
|                                                                                                                                                                                      | FortiGate 200E, FortiGate 200F,  |
|                                                                                                                                                                                      | FortiGate 200G, FortiGate 201E,  |
|                                                                                                                                                                                      | FortiGate 201F, FortiGate 201G,  |
|                                                                                                                                                                                      | FortiGate 2200E, FortiGate       |
|                                                                                                                                                                                      | 2201E, FortiGate 2500E,          |
|                                                                                                                                                                                      | FortiGate 2600F, FortiGate       |
|                                                                                                                                                                                      | 2601F, FortiGate 3000D,          |
|                                                                                                                                                                                      | FortiGate 3000F, FortiGate       |
|                                                                                                                                                                                      | 3001F, FortiGate 300E, FortiGate |
|                                                                                                                                                                                      | 301E, FortiGate 3100D, FortiGate |
|                                                                                                                                                                                      | 3200D, FortiGate 3200F,          |
|                                                                                                                                                                                      | FortiGate 3201F, FortiGate       |
|                                                                                                                                                                                      | 3300E, FortiGate 3301E,          |
|                                                                                                                                                                                      | FortiGate 3400E, FortiGate       |
|                                                                                                                                                                                      | 3401E, FortiGate 3500F,          |
|                                                                                                                                                                                      | FortiGate 3501F, FortiGate       |
|                                                                                                                                                                                      | 3600E, FortiGate 3601E,          |
|                                                                                                                                                                                      | FortiGate 3700D, FortiGate       |
|                                                                                                                                                                                      | 3700F, FortiGate 3701F,          |
|                                                                                                                                                                                      | FortiGate 3960E, FortiGate       |
|                                                                                                                                                                                      | 3980E, FortiGate 400E Bypass,    |
|                                                                                                                                                                                      | FortiGate 400E, FortiGate 400F,  |
|                                                                                                                                                                                      | FortiGate 401E, FortiGate 401F,  |
|                                                                                                                                                                                      | FortiGate 40F 3G4G, FortiGate    |
|                                                                                                                                                                                      | 40F, FortiGate 4200F, FortiGate  |
|                                                                                                                                                                                      | 4201F, FortiGate 4400F,          |
|                                                                                                                                                                                      | FortiGate 4401F, FortiGate       |
|                                                                                                                                                                                      | 4800F, FortiGate 4801F,          |
|                                                                                                                                                                                      | FortiGate 5001E1, FortiGate      |
|                                                                                                                                                                                      | 5001E, FortiGate 500E, FortiGate |
|                                                                                                                                                                                      | 501E, FortiGate 600E, FortiGate  |
|                                                                                                                                                                                      | 600F, FortiGate 601E, FortiGate  |
|                                                                                                                                                                                      | 601F, FortiGate 60E DSL,         |
|                                                                                                                                                                                      | FortiGate 60E-POE, FortiGate     |
|                                                                                                                                                                                      | 60E, FortiGate 60F, FortiGate    |
|                                                                                                                                                                                      | 61E, FortiGate 61F, FortiGate    |
|                                                                                                                                                                                      | 70F, FortiGate 71F, FortiGate    |
|                                                                                                                                                                                      | 800D, FortiGate 80E-POE,         |
|                                                                                                                                                                                      | FortiGate 80E, FortiGate 80F     |
|                                                                                                                                                                                      | Bypass, FortiGate 80F DSL,       |
|                                                                                                                                                                                      | FortiGate 80F-POE, FortiGate     |
|                                                                                                                                                                                      | 80F, FortiGate 81E-POE,          |
|                                                                                                                                                                                      | FortiGate 81E, FortiGate         |
|                                                                                                                                                                                      | 81F-POE, FortiGate 81F,          |
|                                                                                                                                                                                      | FortiGate 900D, FortiGate 900G,  |
|                                                                                                                                                                                      | FortiGate 901G, FortiGate 90E,   |
|                                                                                                                                                                                      | FortiGate 91E, FortiGate-VM64    |
|                                                                                                                                                                                      | Aliyun, FortiGate-VM64 AWS,      |
|                                                                                                                                                                                      | FortiGate-VM64 Azure,            |
|                                                                                                                                                                                      | FortiGate-VM64 GCP,              |
|                                                                                                                                                                                      | FortiGate-VM64 OPC,              |
|                                                                                                                                                                                      | FortiGate-VM64, FortiGateRugged  |
|                                                                                                                                                                                      | 60F 3G4G, FortiGateRugged 60F,   |
|                                                                                                                                                                                      | FortiGateRugged 70F 3G4G,        |
|                                                                                                                                                                                      | FortiGateRugged 70F, FortiWiFi   |
|                                                                                                                                                                                      | 40F 3G4G, FortiWiFi 40F,         |
|                                                                                                                                                                                      | FortiWiFi 60E DSLJ, FortiWiFi    |
|                                                                                                                                                                                      | 60E, FortiWiFi 60F, FortiWiFi    |
|                                                                                                                                                                                      | 61E, FortiWiFi 61F, FortiWiFi    |
|                                                                                                                                                                                      | 80F 2R 3G4G DSL, FortiWiFi 80F   |
|                                                                                                                                                                                      | 2R, FortiWiFi 81F 2R 3G4G DSL,   |
|                                                                                                                                                                                      | FortiWiFi 81F 2R 3G4G-POE,       |
|                                                                                                                                                                                      | FortiWiFi 81F 2R-POE, FortiWiFi  |
|                                                                                                                                                                                      | 81F 2R.                          |
|                                                                                                                                                                                      |                                  |
|                                                                                                                                                                                      | It is not available for:         |
|                                                                                                                                                                                      | FortiGate 50G 5G, FortiGate 50G  |
|                                                                                                                                                                                      | DSL, FortiGate 50G SFP-POE,      |
|                                                                                                                                                                                      | FortiGate 50G SFP, FortiGate     |
|                                                                                                                                                                                      | 50G, FortiGate 51G, FortiGate    |
|                                                                                                                                                                                      | 90G, FortiGate 91G, FortiWiFi    |
|                                                                                                                                                                                      | 50G DSL, FortiWiFi 50G SFP,      |
|                                                                                                                                                                                      | FortiWiFi 50G.                   |
+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+

