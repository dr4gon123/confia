# config user radius

Configure RADIUS server entries.

## Syntax

```
config user radius
    Description: Configure RADIUS server entries.
    edit <name>
        set account-key-cert-field [othername|rfc822name|...]
        set account-key-processing [same|strip]
        config accounting-server
            Description: Additional accounting servers.
            edit <id>
                set interface {string}
                set interface-select-method [auto|sdwan|...]
                set port {integer}
                set secret {password}
                set server {string}
                set source-ip {string}
                set status [enable|disable]
            next
        end
        set acct-all-servers [enable|disable]
        set acct-interim-interval {integer}
        set all-usergroup [disable|enable]
        set auth-type [auto|ms_chap_v2|...]
        set ca-cert {string}
        set call-station-id-type [legacy|IP|...]
        set class <name1>, <name2>, ...
        set client-cert {string}
        set delimiter [plus|comma]
        set group-override-attr-type [filter-Id|class]
        set h3c-compatibility [enable|disable]
        set interface {string}
        set interface-select-method [auto|sdwan|...]
        set mac-case [uppercase|lowercase]
        set mac-password-delimiter [hyphen|single-hyphen|...]
        set mac-username-delimiter [hyphen|single-hyphen|...]
        set nas-id {string}
        set nas-id-type [legacy|custom|...]
        set nas-ip {ipv4-address}
        set password-encoding [auto|ISO-8859-1]
        set password-renewal [enable|disable]
        set radius-coa [enable|disable]
        set radius-port {integer}
        set require-message-authenticator [enable|disable]
        set rsso [enable|disable]
        set rsso-context-timeout {integer}
        set rsso-endpoint-attribute [User-Name|NAS-IP-Address|...]
        set rsso-endpoint-block-attribute [User-Name|NAS-IP-Address|...]
        set rsso-ep-one-ip-only [enable|disable]
        set rsso-flush-ip-session [enable|disable]
        set rsso-log-flags {option1}, {option2}, ...
        set rsso-log-period {integer}
        set rsso-radius-response [enable|disable]
        set rsso-radius-server-port {integer}
        set rsso-secret {password}
        set rsso-validate-request-secret [enable|disable]
        set secondary-secret {password}
        set secondary-server {string}
        set secret {password}
        set server {string}
        set server-identity-check [enable|disable]
        set source-ip {string}
        set sso-attribute [User-Name|NAS-IP-Address|...]
        set sso-attribute-key {string}
        set sso-attribute-value-override [enable|disable]
        set status-ttl {integer}
        set switch-controller-acct-fast-framedip-detect {integer}
        set switch-controller-nas-ip-dynamic [enable|disable]
        set switch-controller-service-type {option1}, {option2}, ...
        set tertiary-secret {password}
        set tertiary-server {string}
        set timeout {integer}
        set tls-min-proto-version [default|SSLv3|...]
        set transport-protocol [udp|tcp|...]
        set use-management-vdom [enable|disable]
        set username-case-sensitive [enable|disable]
    next
end
```

## Parameters

+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| Parameter                                   | Description                       | Type                    | Size                    | Default                 |
+=============================================+===================================+=========================+=========================+=========================+
| account-key-cert-field                      | Define subject identity field in  | option                  | \-                      | othername               |
|                                             | certificate for user access right |                         |                         |                         |
|                                             | checking.                         |                         |                         |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                             | +--------------+--------------------------------------------------------+                                       |
|                                             | | Option       | Description                                            |                                       |
|                                             | +==============+========================================================+                                       |
|                                             | | *othername*  | Other name in SAN.                                     |                                       |
|                                             | +--------------+--------------------------------------------------------+                                       |
|                                             | | *rfc822name* | RFC822 email address in SAN.                           |                                       |
|                                             | +--------------+--------------------------------------------------------+                                       |
|                                             | | *dnsname*    | DNS name in SAN.                                       |                                       |
|                                             | +--------------+--------------------------------------------------------+                                       |
|                                             | | *cn*         | CN in subject.                                         |                                       |
|                                             | +--------------+--------------------------------------------------------+                                       |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| account-key-processing                      | Account key processing operation. | option                  | \-                      | same                    |
|                                             | The FortiGate will keep either    |                         |                         |                         |
|                                             | the whole domain or strip the     |                         |                         |                         |
|                                             | domain from the subject identity. |                         |                         |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | Option      | Description                                            |                                        |
|                                             | +=============+========================================================+                                        |
|                                             | | *same*      | Same as subject identity field.                        |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | *strip*     | Strip domain string from subject identity field.       |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| acct-all-servers                            | Enable/disable sending of         | option                  | \-                      | disable                 |
|                                             | accounting messages to all        |                         |                         |                         |
|                                             | configured servers.               |                         |                         |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | Option      | Description                                            |                                        |
|                                             | +=============+========================================================+                                        |
|                                             | | *enable*    | Send accounting messages to all configured servers.    |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | *disable*   | Send accounting message only to servers that are       |                                        |
|                                             | |             | confirmed to be reachable.                             |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| acct-interim-interval                       | Time in seconds between each      | integer                 | Minimum value: 60       | 0                       |
|                                             | accounting interim update         |                         | Maximum value: 86400    |                         |
|                                             | message.                          |                         |                         |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| all-usergroup                               | Enable/disable automatically      | option                  | \-                      | disable                 |
|                                             | including this RADIUS server in   |                         |                         |                         |
|                                             | all user groups.                  |                         |                         |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | Option      | Description                                            |                                        |
|                                             | +=============+========================================================+                                        |
|                                             | | *disable*   | Do not automatically include this server in a user     |                                        |
|                                             | |             | group.                                                 |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | *enable*    | Include this RADIUS server in every user group.        |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| auth-type                                   | Authentication methods/protocols  | option                  | \-                      | auto                    |
|                                             | permitted for this RADIUS server. |                         |                         |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                             | +--------------+--------------------------------------------------------+                                       |
|                                             | | Option       | Description                                            |                                       |
|                                             | +==============+========================================================+                                       |
|                                             | | *auto*       | Use PAP, MSCHAP_v2, and CHAP (in that order).          |                                       |
|                                             | +--------------+--------------------------------------------------------+                                       |
|                                             | | *ms_chap_v2* | Microsoft Challenge Handshake Authentication Protocol  |                                       |
|                                             | |              | version 2.                                             |                                       |
|                                             | +--------------+--------------------------------------------------------+                                       |
|                                             | | *ms_chap*    | Microsoft Challenge Handshake Authentication Protocol. |                                       |
|                                             | +--------------+--------------------------------------------------------+                                       |
|                                             | | *chap*       | Challenge Handshake Authentication Protocol.           |                                       |
|                                             | +--------------+--------------------------------------------------------+                                       |
|                                             | | *pap*        | Password Authentication Protocol.                      |                                       |
|                                             | +--------------+--------------------------------------------------------+                                       |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| ca-cert                                     | CA of server to trust under TLS.  | string                  | Maximum length: 79      |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| call-station-id-type                        | Calling & Called station          | option                  | \-                      | legacy                  |
|                                             | identifier type configuration ,   |                         |                         |                         |
|                                             | this option is not available for  |                         |                         |                         |
|                                             | 802.1x authentication.            |                         |                         |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | Option      | Description                                            |                                        |
|                                             | +=============+========================================================+                                        |
|                                             | | *legacy*    | Calling & Called station identifier is the value       |                                        |
|                                             | |             | previously used by each daemon.                        |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | *IP*        | Calling & Called station identifier is the value of IP |                                        |
|                                             | |             | address.                                               |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | *MAC*       | Calling & Called station identifier is the value of    |                                        |
|                                             | |             | MAC address.                                           |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| class `<name>`                              | Class attribute name(s).          | string                  | Maximum length: 79      |                         |
|                                             |                                   |                         |                         |                         |
|                                             | Class name.                       |                         |                         |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| client-cert                                 | Client certificate to use under   | string                  | Maximum length: 35      |                         |
|                                             | TLS.                              |                         |                         |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| delimiter                                   | Configure delimiter to be used    | option                  | \-                      | plus                    |
|                                             | for separating profile group      |                         |                         |                         |
|                                             | names in the SSO attribute.       |                         |                         |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | Option      | Description                                            |                                        |
|                                             | +=============+========================================================+                                        |
|                                             | | *plus*      | Plus character \"+\".                                  |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | *comma*     | Comma character \",\".                                 |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| group-override-attr-type                    | RADIUS attribute type to override | option                  | \-                      |                         |
|                                             | user group information.           |                         |                         |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | Option      | Description                                            |                                        |
|                                             | +=============+========================================================+                                        |
|                                             | | *filter-Id* | Filter-Id                                              |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | *class*     | Class                                                  |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| h3c-compatibility                           | Enable/disable compatibility with | option                  | \-                      | disable                 |
|                                             | the H3C, a mechanism that         |                         |                         |                         |
|                                             | performs security checking for    |                         |                         |                         |
|                                             | authentication.                   |                         |                         |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | Option      | Description                                            |                                        |
|                                             | +=============+========================================================+                                        |
|                                             | | *enable*    | Enable H3C compatibility.                              |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | *disable*   | Disable H3C compatibility.                             |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| interface                                   | Specify outgoing interface to     | string                  | Maximum length: 15      |                         |
|                                             | reach server.                     |                         |                         |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| interface-select-method                     | Specify how to select outgoing    | option                  | \-                      | auto                    |
|                                             | interface to reach server.        |                         |                         |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | Option      | Description                                            |                                        |
|                                             | +=============+========================================================+                                        |
|                                             | | *auto*      | Set outgoing interface automatically.                  |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | *sdwan*     | Set outgoing interface by SD-WAN or policy routing     |                                        |
|                                             | |             | rules.                                                 |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | *specify*   | Set outgoing interface manually.                       |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| mac-case                                    | MAC authentication case.          | option                  | \-                      | lowercase               |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | Option      | Description                                            |                                        |
|                                             | +=============+========================================================+                                        |
|                                             | | *uppercase* | Use uppercase MAC.                                     |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | *lowercase* | Use lowercase MAC.                                     |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| mac-password-delimiter                      | MAC authentication password       | option                  | \-                      | hyphen                  |
|                                             | delimiter.                        |                         |                         |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                             | +-----------------+--------------------------------------------------------+                                    |
|                                             | | Option          | Description                                            |                                    |
|                                             | +=================+========================================================+                                    |
|                                             | | *hyphen*        | Use hyphen as delimiter for MAC authentication         |                                    |
|                                             | |                 | password.                                              |                                    |
|                                             | +-----------------+--------------------------------------------------------+                                    |
|                                             | | *single-hyphen* | Use single hyphen as delimiter for MAC authentication  |                                    |
|                                             | |                 | password.                                              |                                    |
|                                             | +-----------------+--------------------------------------------------------+                                    |
|                                             | | *colon*         | Use colon as delimiter for MAC authentication          |                                    |
|                                             | |                 | password.                                              |                                    |
|                                             | +-----------------+--------------------------------------------------------+                                    |
|                                             | | *none*          | No delimiter for MAC authentication password.          |                                    |
|                                             | +-----------------+--------------------------------------------------------+                                    |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| mac-username-delimiter                      | MAC authentication username       | option                  | \-                      | hyphen                  |
|                                             | delimiter.                        |                         |                         |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                             | +-----------------+--------------------------------------------------------+                                    |
|                                             | | Option          | Description                                            |                                    |
|                                             | +=================+========================================================+                                    |
|                                             | | *hyphen*        | Use hyphen as delimiter for MAC authentication         |                                    |
|                                             | |                 | username.                                              |                                    |
|                                             | +-----------------+--------------------------------------------------------+                                    |
|                                             | | *single-hyphen* | Use single hyphen as delimiter for MAC authentication  |                                    |
|                                             | |                 | username.                                              |                                    |
|                                             | +-----------------+--------------------------------------------------------+                                    |
|                                             | | *colon*         | Use colon as delimiter for MAC authentication          |                                    |
|                                             | |                 | username.                                              |                                    |
|                                             | +-----------------+--------------------------------------------------------+                                    |
|                                             | | *none*          | No delimiter for MAC authentication username.          |                                    |
|                                             | +-----------------+--------------------------------------------------------+                                    |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| name                                        | RADIUS server entry name.         | string                  | Maximum length: 35      |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| nas-id                                      | Custom NAS identifier.            | string                  | Maximum length: 255     |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| nas-id-type                                 | NAS identifier type               | option                  | \-                      | legacy                  |
|                                             | configuration.                    |                         |                         |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | Option      | Description                                            |                                        |
|                                             | +=============+========================================================+                                        |
|                                             | | *legacy*    | NAS-ID value is the value previously used by each      |                                        |
|                                             | |             | daemon.                                                |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | *custom*    | NAS-ID value is customized.                            |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | *hostname*  | NAS-ID value is hostname or HA group name if           |                                        |
|                                             | |             | applicable.                                            |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| nas-ip                                      | IP address used to communicate    | ipv4-address            | Not Specified           | 0.0.0.0                 |
|                                             | with the RADIUS server and used   |                         |                         |                         |
|                                             | as NAS-IP-Address and             |                         |                         |                         |
|                                             | Called-Station-ID attributes.     |                         |                         |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| password-encoding                           | Password encoding.                | option                  | \-                      | auto                    |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                             | +--------------+--------------------------------------------------------+                                       |
|                                             | | Option       | Description                                            |                                       |
|                                             | +==============+========================================================+                                       |
|                                             | | *auto*       | Use original password encoding.                        |                                       |
|                                             | +--------------+--------------------------------------------------------+                                       |
|                                             | | *ISO-8859-1* | Use ISO-8859-1 password encoding.                      |                                       |
|                                             | +--------------+--------------------------------------------------------+                                       |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| password-renewal                            | Enable/disable password renewal.  | option                  | \-                      | enable                  |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | Option      | Description                                            |                                        |
|                                             | +=============+========================================================+                                        |
|                                             | | *enable*    | Enable password renewal.                               |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | *disable*   | Disable password renewal.                              |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| radius-coa                                  | Enable to allow a mechanism to    | option                  | \-                      | disable                 |
|                                             | change the attributes of an       |                         |                         |                         |
|                                             | authentication, authorization,    |                         |                         |                         |
|                                             | and accounting session after it   |                         |                         |                         |
|                                             | is authenticated.                 |                         |                         |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | Option      | Description                                            |                                        |
|                                             | +=============+========================================================+                                        |
|                                             | | *enable*    | Enable RADIUS CoA.                                     |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | *disable*   | Disable RADIUS CoA.                                    |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| radius-port                                 | RADIUS service port number.       | integer                 | Minimum value: 0        | 0                       |
|                                             |                                   |                         | Maximum value: 65535    |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| require-message-authenticator               | Require message authenticator in  | option                  | \-                      | enable                  |
|                                             | authentication response.          |                         |                         |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | Option      | Description                                            |                                        |
|                                             | +=============+========================================================+                                        |
|                                             | | *enable*    | Make the validation of message authenticator mandatory |                                        |
|                                             | |             | in authentication response.                            |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | *disable*   | Make the validation of message authenticator optional  |                                        |
|                                             | |             | in authentication response.                            |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| rsso                                        | Enable/disable RADIUS based       | option                  | \-                      | disable                 |
|                                             | single sign on feature.           |                         |                         |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | Option      | Description                                            |                                        |
|                                             | +=============+========================================================+                                        |
|                                             | | *enable*    | Enable RADIUS based single sign on feature.            |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | *disable*   | Disable RADIUS based single sign on feature.           |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| rsso-context-timeout                        | Time in seconds before the logged | integer                 | Minimum value: 0        | 28800                   |
|                                             | out user is removed from the      |                         | Maximum value:          |                         |
|                                             | \"user context list\" of logged   |                         | 4294967295              |                         |
|                                             | on users.                         |                         |                         |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| rsso-endpoint-attribute                     | RADIUS attributes used to extract | option                  | \-                      | Calling-Station-Id      |
|                                             | the user end point identifier     |                         |                         |                         |
|                                             | from the RADIUS Start record.     |                         |                         |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | Option                  | Description                                            |                            |
|                                             | +=========================+========================================================+                            |
|                                             | | *User-Name*             | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *NAS-IP-Address*        | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Framed-IP-Address*     | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Framed-IP-Netmask*     | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Filter-Id*             | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Login-IP-Host*         | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Reply-Message*         | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Callback-Number*       | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Callback-Id*           | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Framed-Route*          | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Framed-IPX-Network*    | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Class*                 | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Called-Station-Id*     | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Calling-Station-Id*    | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *NAS-Identifier*        | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Proxy-State*           | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Login-LAT-Service*     | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Login-LAT-Node*        | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Login-LAT-Group*       | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Framed-AppleTalk-Zone* | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Acct-Session-Id*       | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Acct-Multi-Session-Id* | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| rsso-endpoint-block-attribute               | RADIUS attributes used to block a | option                  | \-                      |                         |
|                                             | user.                             |                         |                         |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | Option                  | Description                                            |                            |
|                                             | +=========================+========================================================+                            |
|                                             | | *User-Name*             | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *NAS-IP-Address*        | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Framed-IP-Address*     | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Framed-IP-Netmask*     | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Filter-Id*             | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Login-IP-Host*         | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Reply-Message*         | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Callback-Number*       | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Callback-Id*           | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Framed-Route*          | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Framed-IPX-Network*    | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Class*                 | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Called-Station-Id*     | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Calling-Station-Id*    | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *NAS-Identifier*        | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Proxy-State*           | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Login-LAT-Service*     | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Login-LAT-Node*        | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Login-LAT-Group*       | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Framed-AppleTalk-Zone* | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Acct-Session-Id*       | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Acct-Multi-Session-Id* | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| rsso-ep-one-ip-only                         | Enable/disable the replacement of | option                  | \-                      | disable                 |
|                                             | old IP addresses with new ones    |                         |                         |                         |
|                                             | for the same endpoint on RADIUS   |                         |                         |                         |
|                                             | accounting Start messages.        |                         |                         |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | Option      | Description                                            |                                        |
|                                             | +=============+========================================================+                                        |
|                                             | | *enable*    | Enable replacement of old IP address with new IP       |                                        |
|                                             | |             | address for the same endpoint on RADIUS accounting     |                                        |
|                                             | |             | start.                                                 |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | *disable*   | Disable replacement of old IP address with new IP      |                                        |
|                                             | |             | address for the same endpoint on RADIUS accounting     |                                        |
|                                             | |             | start.                                                 |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| rsso-flush-ip-session                       | Enable/disable flushing user IP   | option                  | \-                      | disable                 |
|                                             | sessions on RADIUS accounting     |                         |                         |                         |
|                                             | Stop messages.                    |                         |                         |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | Option      | Description                                            |                                        |
|                                             | +=============+========================================================+                                        |
|                                             | | *enable*    | Enable flush user IP sessions on RADIUS accounting     |                                        |
|                                             | |             | stop.                                                  |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | *disable*   | Disable flush user IP sessions on RADIUS accounting    |                                        |
|                                             | |             | stop.                                                  |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| rsso-log-flags                              | Events to log.                    | option                  | \-                      | protocol-error          |
|                                             |                                   |                         |                         | profile-missing         |
|                                             |                                   |                         |                         | accounting-stop-missed  |
|                                             |                                   |                         |                         | accounting-event        |
|                                             |                                   |                         |                         | endpoint-block          |
|                                             |                                   |                         |                         | radiusd-other           |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                             | +--------------------------+--------------------------------------------------------+                           |
|                                             | | Option                   | Description                                            |                           |
|                                             | +==========================+========================================================+                           |
|                                             | | *protocol-error*         | Enable this log type.                                  |                           |
|                                             | +--------------------------+--------------------------------------------------------+                           |
|                                             | | *profile-missing*        | Enable this log type.                                  |                           |
|                                             | +--------------------------+--------------------------------------------------------+                           |
|                                             | | *accounting-stop-missed* | Enable this log type.                                  |                           |
|                                             | +--------------------------+--------------------------------------------------------+                           |
|                                             | | *accounting-event*       | Enable this log type.                                  |                           |
|                                             | +--------------------------+--------------------------------------------------------+                           |
|                                             | | *endpoint-block*         | Enable this log type.                                  |                           |
|                                             | +--------------------------+--------------------------------------------------------+                           |
|                                             | | *radiusd-other*          | Enable this log type.                                  |                           |
|                                             | +--------------------------+--------------------------------------------------------+                           |
|                                             | | *none*                   | Disable all logging.                                   |                           |
|                                             | +--------------------------+--------------------------------------------------------+                           |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| rsso-log-period                             | Time interval in seconds that     | integer                 | Minimum value: 0        | 0                       |
|                                             | group event log messages will be  |                         | Maximum value:          |                         |
|                                             | generated for dynamic profile     |                         | 4294967295              |                         |
|                                             | events.                           |                         |                         |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| rsso-radius-response                        | Enable/disable sending RADIUS     | option                  | \-                      | disable                 |
|                                             | response packets after receiving  |                         |                         |                         |
|                                             | Start and Stop records.           |                         |                         |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | Option      | Description                                            |                                        |
|                                             | +=============+========================================================+                                        |
|                                             | | *enable*    | Enable sending RADIUS response packets.                |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | *disable*   | Disable sending RADIUS response packets.               |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| rsso-radius-server-port                     | UDP port to listen on for RADIUS  | integer                 | Minimum value: 0        | 1813                    |
|                                             | Start and Stop records.           |                         | Maximum value: 65535    |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| rsso-secret                                 | RADIUS secret used by the RADIUS  | password                | Not Specified           |                         |
|                                             | accounting server.                |                         |                         |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| rsso-validate-request-secret                | Enable/disable validating the     | option                  | \-                      | disable                 |
|                                             | RADIUS request shared secret in   |                         |                         |                         |
|                                             | the Start or End record.          |                         |                         |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | Option      | Description                                            |                                        |
|                                             | +=============+========================================================+                                        |
|                                             | | *enable*    | Enable validating RADIUS request shared secret.        |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | *disable*   | Disable validating RADIUS request shared secret.       |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| secondary-secret                            | Secret key to access the          | password                | Not Specified           |                         |
|                                             | secondary server.                 |                         |                         |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| secondary-server                            | Secondary RADIUS CN domain name   | string                  | Maximum length: 63      |                         |
|                                             | or IP address.                    |                         |                         |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| secret                                      | Pre-shared secret key used to     | password                | Not Specified           |                         |
|                                             | access the primary RADIUS server. |                         |                         |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| server                                      | Primary RADIUS server CN domain   | string                  | Maximum length: 63      |                         |
|                                             | name or IP address.               |                         |                         |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| server-identity-check                       | Enable/disable RADIUS server      | option                  | \-                      | enable                  |
|                                             | identity check (verify server     |                         |                         |                         |
|                                             | domain name/IP address against    |                         |                         |                         |
|                                             | the server certificate).          |                         |                         |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | Option      | Description                                            |                                        |
|                                             | +=============+========================================================+                                        |
|                                             | | *enable*    | Enable server identity check.                          |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | *disable*   | Disable server identity check.                         |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| source-ip                                   | Source IP address for             | string                  | Maximum length: 63      |                         |
|                                             | communications to the RADIUS      |                         |                         |                         |
|                                             | server.                           |                         |                         |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| sso-attribute                               | RADIUS attribute that contains    | option                  | \-                      | Class                   |
|                                             | the profile group name to be      |                         |                         |                         |
|                                             | extracted from the RADIUS Start   |                         |                         |                         |
|                                             | record.                           |                         |                         |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | Option                  | Description                                            |                            |
|                                             | +=========================+========================================================+                            |
|                                             | | *User-Name*             | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *NAS-IP-Address*        | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Framed-IP-Address*     | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Framed-IP-Netmask*     | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Filter-Id*             | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Login-IP-Host*         | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Reply-Message*         | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Callback-Number*       | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Callback-Id*           | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Framed-Route*          | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Framed-IPX-Network*    | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Class*                 | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Called-Station-Id*     | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Calling-Station-Id*    | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *NAS-Identifier*        | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Proxy-State*           | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Login-LAT-Service*     | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Login-LAT-Node*        | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Login-LAT-Group*       | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Framed-AppleTalk-Zone* | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Acct-Session-Id*       | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
|                                             | | *Acct-Multi-Session-Id* | Use this attribute.                                    |                            |
|                                             | +-------------------------+--------------------------------------------------------+                            |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| sso-attribute-key                           | Key prefix for SSO group value in | string                  | Maximum length: 35      |                         |
|                                             | the SSO attribute.                |                         |                         |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| sso-attribute-value-override                | Enable/disable override old       | option                  | \-                      | enable                  |
|                                             | attribute value with new value    |                         |                         |                         |
|                                             | for the same endpoint.            |                         |                         |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | Option      | Description                                            |                                        |
|                                             | +=============+========================================================+                                        |
|                                             | | *enable*    | Enable override old attribute value with new value for |                                        |
|                                             | |             | the same endpoint.                                     |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | *disable*   | Disable override old attribute value with new value    |                                        |
|                                             | |             | for the same endpoint.                                 |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| status-ttl                                  | Time for which server             | integer                 | Minimum value: 0        | 300                     |
|                                             | reachability is cached so that    |                         | Maximum value: 600      |                         |
|                                             | when a server is unreachable, it  |                         |                         |                         |
|                                             | will not be retried for at least  |                         |                         |                         |
|                                             | this period of time.              |                         |                         |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| switch-controller-acct-fast-framedip-detect | Switch controller accounting      | integer                 | Minimum value: 2        | 2                       |
|                                             | message Framed-IP detection from  |                         | Maximum value: 600      |                         |
|                                             | DHCP snooping.                    |                         |                         |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| switch-controller-nas-ip-dynamic \*         | Enable/Disable switch-controller  | option                  | \-                      | disable                 |
|                                             | nas-ip dynamic to dynamically set |                         |                         |                         |
|                                             | nas-ip.                           |                         |                         |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | Option      | Description                                            |                                        |
|                                             | +=============+========================================================+                                        |
|                                             | | *enable*    | Enable dynamic NAS-IP setting.                         |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | *disable*   | Disable dynamic NAS-IP setting.                        |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| switch-controller-service-type              | RADIUS service type.              | option                  | \-                      |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                             | +---------------------------+--------------------------------------------------------+                          |
|                                             | | Option                    | Description                                            |                          |
|                                             | +===========================+========================================================+                          |
|                                             | | *login*                   | User should be connected to a host.                    |                          |
|                                             | +---------------------------+--------------------------------------------------------+                          |
|                                             | | *framed*                  | User use Framed Protocol.                              |                          |
|                                             | +---------------------------+--------------------------------------------------------+                          |
|                                             | | *callback-login*          | User disconnected and called back.                     |                          |
|                                             | +---------------------------+--------------------------------------------------------+                          |
|                                             | | *callback-framed*         | User disconnected and called back, then a Framed       |                          |
|                                             | |                           | Protocol.                                              |                          |
|                                             | +---------------------------+--------------------------------------------------------+                          |
|                                             | | *outbound*                | User granted access to outgoing devices.               |                          |
|                                             | +---------------------------+--------------------------------------------------------+                          |
|                                             | | *administrative*          | User granted access to the administrative unsigned     |                          |
|                                             | |                           | interface.                                             |                          |
|                                             | +---------------------------+--------------------------------------------------------+                          |
|                                             | | *nas-prompt*              | User provided a command prompt on the NAS.             |                          |
|                                             | +---------------------------+--------------------------------------------------------+                          |
|                                             | | *authenticate-only*       | Authentication requested, and no auth info needs to be |                          |
|                                             | |                           | returned.                                              |                          |
|                                             | +---------------------------+--------------------------------------------------------+                          |
|                                             | | *callback-nas-prompt*     | User disconnected and called back, then provided a     |                          |
|                                             | |                           | command prompt.                                        |                          |
|                                             | +---------------------------+--------------------------------------------------------+                          |
|                                             | | *call-check*              | Used by the NAS in an Access-Request packet,           |                          |
|                                             | |                           | Access-Accept to answer the call.                      |                          |
|                                             | +---------------------------+--------------------------------------------------------+                          |
|                                             | | *callback-administrative* | User disconnected and called back, granted access to   |                          |
|                                             | |                           | the admin unsigned interface.                          |                          |
|                                             | +---------------------------+--------------------------------------------------------+                          |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| tertiary-secret                             | Secret key to access the tertiary | password                | Not Specified           |                         |
|                                             | server.                           |                         |                         |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| tertiary-server                             | Tertiary RADIUS CN domain name or | string                  | Maximum length: 63      |                         |
|                                             | IP address.                       |                         |                         |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| timeout                                     | Time in seconds to retry          | integer                 | Minimum value: 1        | 5                       |
|                                             | connecting server.                |                         | Maximum value: 300      |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| tls-min-proto-version                       | Minimum supported protocol        | option                  | \-                      | default                 |
|                                             | version for TLS connections.      |                         |                         |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | Option      | Description                                            |                                        |
|                                             | +=============+========================================================+                                        |
|                                             | | *default*   | Follow system global setting.                          |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | *SSLv3*     | SSLv3.                                                 |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | *TLSv1*     | TLSv1.                                                 |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | *TLSv1-1*   | TLSv1.1.                                               |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | *TLSv1-2*   | TLSv1.2.                                               |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | *TLSv1-3*   | TLSv1.3.                                               |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| transport-protocol                          | Transport protocol to be used.    | option                  | \-                      | udp                     |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | Option      | Description                                            |                                        |
|                                             | +=============+========================================================+                                        |
|                                             | | *udp*       | UDP.                                                   |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | *tcp*       | TCP.                                                   |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | *tls*       | TLS over TCP.                                          |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| use-management-vdom                         | Enable/disable using management   | option                  | \-                      | disable                 |
|                                             | VDOM to send requests.            |                         |                         |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | Option      | Description                                            |                                        |
|                                             | +=============+========================================================+                                        |
|                                             | | *enable*    | Send requests using the management VDOM.               |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | *disable*   | Send requests using the current VDOM.                  |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| username-case-sensitive                     | Enable/disable case sensitive     | option                  | \-                      | disable                 |
|                                             | user names.                       |                         |                         |                         |
+---------------------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | Option      | Description                                            |                                        |
|                                             | +=============+========================================================+                                        |
|                                             | | *enable*    | Enable username case-sensitive.                        |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
|                                             | | *disable*   | Disable username case-sensitive.                       |                                        |
|                                             | +-------------+--------------------------------------------------------+                                        |
+---------------------------------------------+-----------------------------------------------------------------------------------------------------------------+

