# config system admin

Configure admin users.

## Syntax

```
config system admin
    Description: Configure admin users.
    edit <name>
        set accprofile {string}
        set accprofile-override [enable|disable]
        set allow-remove-admin-session [enable|disable]
        set comments {var-string}
        set email-to {string}
        set force-password-change [enable|disable]
        set fortitoken {string}
        set guest-auth [disable|enable]
        set guest-lang {string}
        set guest-usergroups <name1>, <name2>, ...
        set ip6-trusthost1 {ipv6-prefix}
        set ip6-trusthost10 {ipv6-prefix}
        set ip6-trusthost2 {ipv6-prefix}
        set ip6-trusthost3 {ipv6-prefix}
        set ip6-trusthost4 {ipv6-prefix}
        set ip6-trusthost5 {ipv6-prefix}
        set ip6-trusthost6 {ipv6-prefix}
        set ip6-trusthost7 {ipv6-prefix}
        set ip6-trusthost8 {ipv6-prefix}
        set ip6-trusthost9 {ipv6-prefix}
        set password {password-2}
        set password-expire {user}
        set peer-auth [enable|disable]
        set peer-group {string}
        set remote-auth [enable|disable]
        set remote-group {string}
        set schedule {string}
        set sms-custom-server {string}
        set sms-phone {string}
        set sms-server [fortiguard|custom]
        set ssh-certificate {string}
        set ssh-public-key1 {user}
        set ssh-public-key2 {user}
        set ssh-public-key3 {user}
        set trusthost1 {ipv4-classnet}
        set trusthost10 {ipv4-classnet}
        set trusthost2 {ipv4-classnet}
        set trusthost3 {ipv4-classnet}
        set trusthost4 {ipv4-classnet}
        set trusthost5 {ipv4-classnet}
        set trusthost6 {ipv4-classnet}
        set trusthost7 {ipv4-classnet}
        set trusthost8 {ipv4-classnet}
        set trusthost9 {ipv4-classnet}
        set two-factor [disable|fortitoken|...]
        set two-factor-authentication [fortitoken|email|...]
        set two-factor-notification [email|sms]
        set vdom <name1>, <name2>, ...
        set vdom-override [enable|disable]
        set wildcard [enable|disable]
    next
end
```

## Parameters

+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| Parameter                  | Description                       | Type                   | Size                   | Default                |
+============================+===================================+========================+========================+========================+
| accprofile                 | Access profile for this           | string                 | Maximum length: 35     |                        |
|                            | administrator. Access profiles    |                        |                        |                        |
|                            | control administrator access to   |                        |                        |                        |
|                            | FortiGate features.               |                        |                        |                        |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| accprofile-override        | Enable to use the name of an      | option                 | \-                     | disable                |
|                            | access profile provided by the    |                        |                        |                        |
|                            | remote authentication server to   |                        |                        |                        |
|                            | control the FortiGate features    |                        |                        |                        |
|                            | that this administrator can       |                        |                        |                        |
|                            | access.                           |                        |                        |                        |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                            | +-------------+--------------------------------------------------------+                                     |
|                            | | Option      | Description                                            |                                     |
|                            | +=============+========================================================+                                     |
|                            | | *enable*    | Enable access profile override.                        |                                     |
|                            | +-------------+--------------------------------------------------------+                                     |
|                            | | *disable*   | Disable access profile override.                       |                                     |
|                            | +-------------+--------------------------------------------------------+                                     |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| allow-remove-admin-session | Enable/disable allow admin        | option                 | \-                     | enable                 |
|                            | session to be removed by          |                        |                        |                        |
|                            | privileged admin users.           |                        |                        |                        |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                            | +-------------+--------------------------------------------------------+                                     |
|                            | | Option      | Description                                            |                                     |
|                            | +=============+========================================================+                                     |
|                            | | *enable*    | Enable allow-remove option.                            |                                     |
|                            | +-------------+--------------------------------------------------------+                                     |
|                            | | *disable*   | Disable allow-remove option.                           |                                     |
|                            | +-------------+--------------------------------------------------------+                                     |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| comments                   | Comment.                          | var-string             | Maximum length: 255    |                        |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| email-to                   | This administrator\'s email       | string                 | Maximum length: 63     |                        |
|                            | address.                          |                        |                        |                        |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| force-password-change      | Enable/disable force password     | option                 | \-                     | disable                |
|                            | change on next login.             |                        |                        |                        |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                            | +-------------+--------------------------------------------------------+                                     |
|                            | | Option      | Description                                            |                                     |
|                            | +=============+========================================================+                                     |
|                            | | *enable*    | Enable force password change on next login.            |                                     |
|                            | +-------------+--------------------------------------------------------+                                     |
|                            | | *disable*   | Disable force password change on next login.           |                                     |
|                            | +-------------+--------------------------------------------------------+                                     |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| fortitoken                 | This administrator\'s FortiToken  | string                 | Maximum length: 16     |                        |
|                            | serial number.                    |                        |                        |                        |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| guest-auth                 | Enable/disable guest              | option                 | \-                     | disable                |
|                            | authentication.                   |                        |                        |                        |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                            | +-------------+--------------------------------------------------------+                                     |
|                            | | Option      | Description                                            |                                     |
|                            | +=============+========================================================+                                     |
|                            | | *disable*   | Disable guest authentication.                          |                                     |
|                            | +-------------+--------------------------------------------------------+                                     |
|                            | | *enable*    | Enable guest authentication.                           |                                     |
|                            | +-------------+--------------------------------------------------------+                                     |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| guest-lang                 | Guest management portal language. | string                 | Maximum length: 35     |                        |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| guest-usergroups `<name>`  | Select guest user groups.         | string                 | Maximum length: 79     |                        |
|                            |                                   |                        |                        |                        |
|                            | Select guest user groups.         |                        |                        |                        |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ip6-trusthost1             | Any IPv6 address from which the   | ipv6-prefix            | Not Specified          | ::/0                   |
|                            | administrator can connect to the  |                        |                        |                        |
|                            | FortiGate unit. Default allows    |                        |                        |                        |
|                            | access from any IPv6 address.     |                        |                        |                        |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ip6-trusthost10            | Any IPv6 address from which the   | ipv6-prefix            | Not Specified          | ::/0                   |
|                            | administrator can connect to the  |                        |                        |                        |
|                            | FortiGate unit. Default allows    |                        |                        |                        |
|                            | access from any IPv6 address.     |                        |                        |                        |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ip6-trusthost2             | Any IPv6 address from which the   | ipv6-prefix            | Not Specified          | ::/0                   |
|                            | administrator can connect to the  |                        |                        |                        |
|                            | FortiGate unit. Default allows    |                        |                        |                        |
|                            | access from any IPv6 address.     |                        |                        |                        |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ip6-trusthost3             | Any IPv6 address from which the   | ipv6-prefix            | Not Specified          | ::/0                   |
|                            | administrator can connect to the  |                        |                        |                        |
|                            | FortiGate unit. Default allows    |                        |                        |                        |
|                            | access from any IPv6 address.     |                        |                        |                        |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ip6-trusthost4             | Any IPv6 address from which the   | ipv6-prefix            | Not Specified          | ::/0                   |
|                            | administrator can connect to the  |                        |                        |                        |
|                            | FortiGate unit. Default allows    |                        |                        |                        |
|                            | access from any IPv6 address.     |                        |                        |                        |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ip6-trusthost5             | Any IPv6 address from which the   | ipv6-prefix            | Not Specified          | ::/0                   |
|                            | administrator can connect to the  |                        |                        |                        |
|                            | FortiGate unit. Default allows    |                        |                        |                        |
|                            | access from any IPv6 address.     |                        |                        |                        |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ip6-trusthost6             | Any IPv6 address from which the   | ipv6-prefix            | Not Specified          | ::/0                   |
|                            | administrator can connect to the  |                        |                        |                        |
|                            | FortiGate unit. Default allows    |                        |                        |                        |
|                            | access from any IPv6 address.     |                        |                        |                        |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ip6-trusthost7             | Any IPv6 address from which the   | ipv6-prefix            | Not Specified          | ::/0                   |
|                            | administrator can connect to the  |                        |                        |                        |
|                            | FortiGate unit. Default allows    |                        |                        |                        |
|                            | access from any IPv6 address.     |                        |                        |                        |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ip6-trusthost8             | Any IPv6 address from which the   | ipv6-prefix            | Not Specified          | ::/0                   |
|                            | administrator can connect to the  |                        |                        |                        |
|                            | FortiGate unit. Default allows    |                        |                        |                        |
|                            | access from any IPv6 address.     |                        |                        |                        |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ip6-trusthost9             | Any IPv6 address from which the   | ipv6-prefix            | Not Specified          | ::/0                   |
|                            | administrator can connect to the  |                        |                        |                        |
|                            | FortiGate unit. Default allows    |                        |                        |                        |
|                            | access from any IPv6 address.     |                        |                        |                        |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| name                       | User name.                        | string                 | Maximum length: 64     |                        |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| password                   | Admin user password.              | password-2             | Not Specified          |                        |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| password-expire            | Password expire time.             | user                   | Not Specified          |                        |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| peer-auth                  | Set to enable peer certificate    | option                 | \-                     | disable                |
|                            | authentication (for HTTPS admin   |                        |                        |                        |
|                            | access).                          |                        |                        |                        |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                            | +-------------+--------------------------------------------------------+                                     |
|                            | | Option      | Description                                            |                                     |
|                            | +=============+========================================================+                                     |
|                            | | *enable*    | Enable peer.                                           |                                     |
|                            | +-------------+--------------------------------------------------------+                                     |
|                            | | *disable*   | Disable peer.                                          |                                     |
|                            | +-------------+--------------------------------------------------------+                                     |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| peer-group                 | Name of peer group defined under  | string                 | Maximum length: 35     |                        |
|                            | config user group which has PKI   |                        |                        |                        |
|                            | members. Used for peer            |                        |                        |                        |
|                            | certificate authentication (for   |                        |                        |                        |
|                            | HTTPS admin access).              |                        |                        |                        |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| remote-auth                | Enable/disable authentication     | option                 | \-                     | disable                |
|                            | using a remote RADIUS, LDAP, or   |                        |                        |                        |
|                            | TACACS+ server.                   |                        |                        |                        |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                            | +-------------+--------------------------------------------------------+                                     |
|                            | | Option      | Description                                            |                                     |
|                            | +=============+========================================================+                                     |
|                            | | *enable*    | Enable remote authentication.                          |                                     |
|                            | +-------------+--------------------------------------------------------+                                     |
|                            | | *disable*   | Disable remote authentication.                         |                                     |
|                            | +-------------+--------------------------------------------------------+                                     |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| remote-group               | User group name used for remote   | string                 | Maximum length: 35     |                        |
|                            | auth.                             |                        |                        |                        |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| schedule                   | Firewall schedule used to         | string                 | Maximum length: 35     |                        |
|                            | restrict when the administrator   |                        |                        |                        |
|                            | can log in. No schedule means no  |                        |                        |                        |
|                            | restrictions.                     |                        |                        |                        |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| sms-custom-server          | Custom SMS server to send SMS     | string                 | Maximum length: 35     |                        |
|                            | messages to.                      |                        |                        |                        |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| sms-phone                  | Phone number on which the         | string                 | Maximum length: 15     |                        |
|                            | administrator receives SMS        |                        |                        |                        |
|                            | messages.                         |                        |                        |                        |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| sms-server                 | Send SMS messages using the       | option                 | \-                     | fortiguard             |
|                            | FortiGuard SMS server or a custom |                        |                        |                        |
|                            | server.                           |                        |                        |                        |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                            | +--------------+--------------------------------------------------------+                                    |
|                            | | Option       | Description                                            |                                    |
|                            | +==============+========================================================+                                    |
|                            | | *fortiguard* | Send SMS by FortiGuard.                                |                                    |
|                            | +--------------+--------------------------------------------------------+                                    |
|                            | | *custom*     | Send SMS by custom server.                             |                                    |
|                            | +--------------+--------------------------------------------------------+                                    |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ssh-certificate            | Select the certificate to be used | string                 | Maximum length: 35     |                        |
|                            | by the FortiGate for              |                        |                        |                        |
|                            | authentication with an SSH        |                        |                        |                        |
|                            | client.                           |                        |                        |                        |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ssh-public-key1            | Public key of an SSH client. The  | user                   | Not Specified          |                        |
|                            | client is authenticated without   |                        |                        |                        |
|                            | being asked for credentials.      |                        |                        |                        |
|                            | Create the public-private key     |                        |                        |                        |
|                            | pair in the SSH client            |                        |                        |                        |
|                            | application.                      |                        |                        |                        |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ssh-public-key2            | Public key of an SSH client. The  | user                   | Not Specified          |                        |
|                            | client is authenticated without   |                        |                        |                        |
|                            | being asked for credentials.      |                        |                        |                        |
|                            | Create the public-private key     |                        |                        |                        |
|                            | pair in the SSH client            |                        |                        |                        |
|                            | application.                      |                        |                        |                        |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| ssh-public-key3            | Public key of an SSH client. The  | user                   | Not Specified          |                        |
|                            | client is authenticated without   |                        |                        |                        |
|                            | being asked for credentials.      |                        |                        |                        |
|                            | Create the public-private key     |                        |                        |                        |
|                            | pair in the SSH client            |                        |                        |                        |
|                            | application.                      |                        |                        |                        |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| trusthost1                 | Any IPv4 address or subnet        | ipv4-classnet          | Not Specified          | 0.0.0.0 0.0.0.0        |
|                            | address and netmask from which    |                        |                        |                        |
|                            | the administrator can connect to  |                        |                        |                        |
|                            | the FortiGate unit. Default       |                        |                        |                        |
|                            | allows access from any IPv4       |                        |                        |                        |
|                            | address.                          |                        |                        |                        |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| trusthost10                | Any IPv4 address or subnet        | ipv4-classnet          | Not Specified          | 0.0.0.0 0.0.0.0        |
|                            | address and netmask from which    |                        |                        |                        |
|                            | the administrator can connect to  |                        |                        |                        |
|                            | the FortiGate unit. Default       |                        |                        |                        |
|                            | allows access from any IPv4       |                        |                        |                        |
|                            | address.                          |                        |                        |                        |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| trusthost2                 | Any IPv4 address or subnet        | ipv4-classnet          | Not Specified          | 0.0.0.0 0.0.0.0        |
|                            | address and netmask from which    |                        |                        |                        |
|                            | the administrator can connect to  |                        |                        |                        |
|                            | the FortiGate unit. Default       |                        |                        |                        |
|                            | allows access from any IPv4       |                        |                        |                        |
|                            | address.                          |                        |                        |                        |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| trusthost3                 | Any IPv4 address or subnet        | ipv4-classnet          | Not Specified          | 0.0.0.0 0.0.0.0        |
|                            | address and netmask from which    |                        |                        |                        |
|                            | the administrator can connect to  |                        |                        |                        |
|                            | the FortiGate unit. Default       |                        |                        |                        |
|                            | allows access from any IPv4       |                        |                        |                        |
|                            | address.                          |                        |                        |                        |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| trusthost4                 | Any IPv4 address or subnet        | ipv4-classnet          | Not Specified          | 0.0.0.0 0.0.0.0        |
|                            | address and netmask from which    |                        |                        |                        |
|                            | the administrator can connect to  |                        |                        |                        |
|                            | the FortiGate unit. Default       |                        |                        |                        |
|                            | allows access from any IPv4       |                        |                        |                        |
|                            | address.                          |                        |                        |                        |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| trusthost5                 | Any IPv4 address or subnet        | ipv4-classnet          | Not Specified          | 0.0.0.0 0.0.0.0        |
|                            | address and netmask from which    |                        |                        |                        |
|                            | the administrator can connect to  |                        |                        |                        |
|                            | the FortiGate unit. Default       |                        |                        |                        |
|                            | allows access from any IPv4       |                        |                        |                        |
|                            | address.                          |                        |                        |                        |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| trusthost6                 | Any IPv4 address or subnet        | ipv4-classnet          | Not Specified          | 0.0.0.0 0.0.0.0        |
|                            | address and netmask from which    |                        |                        |                        |
|                            | the administrator can connect to  |                        |                        |                        |
|                            | the FortiGate unit. Default       |                        |                        |                        |
|                            | allows access from any IPv4       |                        |                        |                        |
|                            | address.                          |                        |                        |                        |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| trusthost7                 | Any IPv4 address or subnet        | ipv4-classnet          | Not Specified          | 0.0.0.0 0.0.0.0        |
|                            | address and netmask from which    |                        |                        |                        |
|                            | the administrator can connect to  |                        |                        |                        |
|                            | the FortiGate unit. Default       |                        |                        |                        |
|                            | allows access from any IPv4       |                        |                        |                        |
|                            | address.                          |                        |                        |                        |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| trusthost8                 | Any IPv4 address or subnet        | ipv4-classnet          | Not Specified          | 0.0.0.0 0.0.0.0        |
|                            | address and netmask from which    |                        |                        |                        |
|                            | the administrator can connect to  |                        |                        |                        |
|                            | the FortiGate unit. Default       |                        |                        |                        |
|                            | allows access from any IPv4       |                        |                        |                        |
|                            | address.                          |                        |                        |                        |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| trusthost9                 | Any IPv4 address or subnet        | ipv4-classnet          | Not Specified          | 0.0.0.0 0.0.0.0        |
|                            | address and netmask from which    |                        |                        |                        |
|                            | the administrator can connect to  |                        |                        |                        |
|                            | the FortiGate unit. Default       |                        |                        |                        |
|                            | allows access from any IPv4       |                        |                        |                        |
|                            | address.                          |                        |                        |                        |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| two-factor                 | Enable/disable two-factor         | option                 | \-                     | disable                |
|                            | authentication.                   |                        |                        |                        |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                            | +--------------------+--------------------------------------------------------+                              |
|                            | | Option             | Description                                            |                              |
|                            | +====================+========================================================+                              |
|                            | | *disable*          | Disable two-factor authentication.                     |                              |
|                            | +--------------------+--------------------------------------------------------+                              |
|                            | | *fortitoken*       | Use FortiToken or FortiToken mobile two-factor         |                              |
|                            | |                    | authentication.                                        |                              |
|                            | +--------------------+--------------------------------------------------------+                              |
|                            | | *fortitoken-cloud* | FortiToken Cloud Service.                              |                              |
|                            | +--------------------+--------------------------------------------------------+                              |
|                            | | *email*            | Send a two-factor authentication code to the           |                              |
|                            | |                    | configured email-to email address.                     |                              |
|                            | +--------------------+--------------------------------------------------------+                              |
|                            | | *sms*              | Send a two-factor authentication code to the           |                              |
|                            | |                    | configured sms-server and sms-phone.                   |                              |
|                            | +--------------------+--------------------------------------------------------+                              |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| two-factor-authentication  | Authentication method by          | option                 | \-                     |                        |
|                            | FortiToken Cloud.                 |                        |                        |                        |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                            | +--------------+--------------------------------------------------------+                                    |
|                            | | Option       | Description                                            |                                    |
|                            | +==============+========================================================+                                    |
|                            | | *fortitoken* | FortiToken authentication.                             |                                    |
|                            | +--------------+--------------------------------------------------------+                                    |
|                            | | *email*      | Email one time password.                               |                                    |
|                            | +--------------+--------------------------------------------------------+                                    |
|                            | | *sms*        | SMS one time password.                                 |                                    |
|                            | +--------------+--------------------------------------------------------+                                    |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| two-factor-notification    | Notification method for user      | option                 | \-                     |                        |
|                            | activation by FortiToken Cloud.   |                        |                        |                        |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                            | +-------------+--------------------------------------------------------+                                     |
|                            | | Option      | Description                                            |                                     |
|                            | +=============+========================================================+                                     |
|                            | | *email*     | Email notification for activation code.                |                                     |
|                            | +-------------+--------------------------------------------------------+                                     |
|                            | | *sms*       | SMS notification for activation code.                  |                                     |
|                            | +-------------+--------------------------------------------------------+                                     |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| vdom `<name>`              | Virtual domain(s) that the        | string                 | Maximum length: 79     |                        |
|                            | administrator can access.         |                        |                        |                        |
|                            |                                   |                        |                        |                        |
|                            | Virtual domain name.              |                        |                        |                        |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| vdom-override              | Enable to use the names of VDOMs  | option                 | \-                     | disable                |
|                            | provided by the remote            |                        |                        |                        |
|                            | authentication server to control  |                        |                        |                        |
|                            | the VDOMs that this administrator |                        |                        |                        |
|                            | can access.                       |                        |                        |                        |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                            | +-------------+--------------------------------------------------------+                                     |
|                            | | Option      | Description                                            |                                     |
|                            | +=============+========================================================+                                     |
|                            | | *enable*    | Enable VDOM override.                                  |                                     |
|                            | +-------------+--------------------------------------------------------+                                     |
|                            | | *disable*   | Disable VDOM override.                                 |                                     |
|                            | +-------------+--------------------------------------------------------+                                     |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| wildcard                   | Enable/disable wildcard RADIUS    | option                 | \-                     | disable                |
|                            | authentication.                   |                        |                        |                        |
+----------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                            | +-------------+--------------------------------------------------------+                                     |
|                            | | Option      | Description                                            |                                     |
|                            | +=============+========================================================+                                     |
|                            | | *enable*    | Enable username wildcard.                              |                                     |
|                            | +-------------+--------------------------------------------------------+                                     |
|                            | | *disable*   | Disable username wildcard.                             |                                     |
|                            | +-------------+--------------------------------------------------------+                                     |
+----------------------------+--------------------------------------------------------------------------------------------------------------+

