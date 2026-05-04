# config vpn ipsec phase1

Configure VPN remote gateway.

## Syntax

```
config vpn ipsec phase1
    Description: Configure VPN remote gateway.
    edit <name>
        set acct-verify [enable|disable]
        set add-gw-route [enable|disable]
        set add-route [disable|enable]
        set assign-ip [disable|enable]
        set assign-ip-from [range|usrgrp|...]
        set authmethod [psk|signature]
        set authmethod-remote [psk|signature]
        set authpasswd {password}
        set authusr {string}
        set authusrgrp {string}
        set auto-negotiate [enable|disable]
        set backup-gateway <address1>, <address2>, ...
        set banner {var-string}
        set cert-id-validation [enable|disable]
        set certificate <name1>, <name2>, ...
        set childless-ike [enable|disable]
        set client-auto-negotiate [disable|enable]
        set client-keep-alive [disable|enable]
        set comments {var-string}
        set dhcp-ra-giaddr {ipv4-address}
        set dhcp6-ra-linkaddr {ipv6-address}
        set dhgrp {option1}, {option2}, ...
        set digital-signature-auth [enable|disable]
        set distance {integer}
        set dns-mode [manual|auto]
        set domain {string}
        set dpd [disable|on-idle|...]
        set dpd-retrycount {integer}
        set dpd-retryinterval {user}
        set eap [enable|disable]
        set eap-exclude-peergrp {string}
        set eap-identity [use-id-payload|send-request]
        set enforce-unique-id [disable|keep-new|...]
        set esn [require|allow|...]
        set fec-base {integer}
        set fec-codec [rs|xor]
        set fec-egress [enable|disable]
        set fec-health-check {string}
        set fec-ingress [enable|disable]
        set fec-mapping-profile {string}
        set fec-receive-timeout {integer}
        set fec-redundant {integer}
        set fec-send-timeout {integer}
        set fgsp-sync [enable|disable]
        set forticlient-enforcement [enable|disable]
        set fragmentation [enable|disable]
        set fragmentation-mtu {integer}
        set group-authentication [enable|disable]
        set group-authentication-secret {password-3}
        set ha-sync-esp-seqno [enable|disable]
        set idle-timeout [enable|disable]
        set idle-timeoutinterval {integer}
        set ike-version [1|2]
        set inbound-dscp-copy [enable|disable]
        set include-local-lan [disable|enable]
        set interface {string}
        set ip-delay-interval {integer}
        set ipv4-dns-server1 {ipv4-address}
        set ipv4-dns-server2 {ipv4-address}
        set ipv4-dns-server3 {ipv4-address}
        set ipv4-end-ip {ipv4-address}
        config ipv4-exclude-range
            Description: Configuration Method IPv4 exclude ranges.
            edit <id>
                set start-ip {ipv4-address}
                set end-ip {ipv4-address}
            next
        end
        set ipv4-name {string}
        set ipv4-netmask {ipv4-netmask}
        set ipv4-split-exclude {string}
        set ipv4-split-include {string}
        set ipv4-start-ip {ipv4-address}
        set ipv4-wins-server1 {ipv4-address}
        set ipv4-wins-server2 {ipv4-address}
        set ipv6-dns-server1 {ipv6-address}
        set ipv6-dns-server2 {ipv6-address}
        set ipv6-dns-server3 {ipv6-address}
        set ipv6-end-ip {ipv6-address}
        config ipv6-exclude-range
            Description: Configuration method IPv6 exclude ranges.
            edit <id>
                set start-ip {ipv6-address}
                set end-ip {ipv6-address}
            next
        end
        set ipv6-name {string}
        set ipv6-prefix {integer}
        set ipv6-split-exclude {string}
        set ipv6-split-include {string}
        set ipv6-start-ip {ipv6-address}
        set keepalive {integer}
        set keylife {integer}
        set local-gw {ipv4-address}
        set localid {string}
        set localid-type [auto|fqdn|...]
        set mesh-selector-type [disable|subnet|...]
        set mode [aggressive|main]
        set mode-cfg [disable|enable]
        set mode-cfg-allow-client-selector [disable|enable]
        set nattraversal [enable|disable|...]
        set negotiate-timeout {integer}
        set npu-offload [enable|disable]
        set peer {string}
        set peergrp {string}
        set peerid {string}
        set peertype [any|one|...]
        set ppk [disable|allow|...]
        set ppk-identity {string}
        set ppk-secret {password-3}
        set priority {integer}
        set proposal {option1}, {option2}, ...
        set psksecret {password-3}
        set psksecret-remote {password-3}
        set reauth [disable|enable]
        set rekey [enable|disable]
        set remote-gw {ipv4-address}
        set remotegw-ddns {string}
        set rsa-signature-format [pkcs1|pss]
        set rsa-signature-hash-override [enable|disable]
        set save-password [disable|enable]
        set send-cert-chain [enable|disable]
        set signature-hash-alg {option1}, {option2}, ...
        set split-include-service {string}
        set suite-b [disable|suite-b-gcm-128|...]
        set type [static|dynamic|...]
        set unity-support [disable|enable]
        set usrgrp {string}
        set wizard-type [custom|dialup-forticlient|...]
        set xauthtype [disable|client|...]
    next
end
```

## Parameters

+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| Parameter                      | Description                       | Type                     | Size                     | Default                  |
+================================+===================================+==========================+==========================+==========================+
| acct-verify                    | Enable/disable verification of    | option                   | \-                       | disable                  |
|                                | RADIUS accounting record.         |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *enable*    | Enable verification of RADIUS accounting record.       |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *disable*   | Disable verification of RADIUS accounting record.      |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| add-gw-route                   | Enable/disable automatically add  | option                   | \-                       | disable                  |
|                                | a route to the remote gateway.    |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *enable*    | Automatically add a route to the remote gateway.       |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *disable*   | Do not automatically add a route to the remote         |                                           |
|                                | |             | gateway.                                               |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| add-route                      | Enable/disable control addition   | option                   | \-                       | disable                  |
|                                | of a route to peer destination    |                          |                          |                          |
|                                | selector.                         |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *disable*   | Do not add a route to destination of peer selector.    |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *enable*    | Add route to destination of peer selector.             |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| assign-ip                      | Enable/disable assignment of IP   | option                   | \-                       | enable                   |
|                                | to IPsec interface via            |                          |                          |                          |
|                                | configuration method.             |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *disable*   | Do not assign an IP address to the IPsec interface.    |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *enable*    | Assign an IP address to the IPsec interface.           |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| assign-ip-from                 | Method by which the IP address    | option                   | \-                       | range                    |
|                                | will be assigned.                 |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *range*     | Assign IP address from locally defined range.          |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *usrgrp*    | Assign IP address via user group.                      |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *dhcp*      | Assign IP address via DHCP.                            |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *name*      | Assign IP address from firewall address or group.      |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| authmethod                     | Authentication method.            | option                   | \-                       | psk                      |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *psk*       | PSK authentication method.                             |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *signature* | Signature authentication method.                       |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| authmethod-remote              | Authentication method (remote     | option                   | \-                       |                          |
|                                | side).                            |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *psk*       | PSK authentication method.                             |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *signature* | Signature authentication method.                       |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| authpasswd                     | XAuth password (max 35            | password                 | Not Specified            |                          |
|                                | characters).                      |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| authusr                        | XAuth user name.                  | string                   | Maximum length: 64       |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| authusrgrp                     | Authentication user group.        | string                   | Maximum length: 35       |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| auto-negotiate                 | Enable/disable automatic          | option                   | \-                       | enable                   |
|                                | initiation of IKE SA negotiation. |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *enable*    | Enable automatic initiation of IKE SA negotiation.     |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *disable*   | Disable automatic initiation of IKE SA negotiation.    |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| backup-gateway `<address>`     | Instruct unity clients about the  | string                   | Maximum length: 79       |                          |
|                                | backup gateway address(es).       |                          |                          |                          |
|                                |                                   |                          |                          |                          |
|                                | Address of backup gateway.        |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| banner                         | Message that unity client should  | var-string               | Maximum length: 1024     |                          |
|                                | display after connecting.         |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| cert-id-validation             | Enable/disable cross validation   | option                   | \-                       | enable                   |
|                                | of peer ID and the identity in    |                          |                          |                          |
|                                | the peer\'s certificate as        |                          |                          |                          |
|                                | specified in RFC 4945.            |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *enable*    | Enable cross validation of peer ID and the identity in |                                           |
|                                | |             | the peer\'s certificate as specified in RFC 4945.      |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *disable*   | Disable cross validation of peer ID and the identity   |                                           |
|                                | |             | in the peer\'s certificate as specified in RFC 4945.   |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| certificate `<name>`           | Names of up to 4 signed personal  | string                   | Maximum length: 79       |                          |
|                                | certificates.                     |                          |                          |                          |
|                                |                                   |                          |                          |                          |
|                                | Certificate name.                 |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| childless-ike                  | Enable/disable childless IKEv2    | option                   | \-                       | disable                  |
|                                | initiation (RFC 6023).            |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *enable*    | Enable childless IKEv2 initiation (RFC 6023).          |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *disable*   | Disable childless IKEv2 initiation (RFC 6023).         |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| client-auto-negotiate          | Enable/disable allowing the VPN   | option                   | \-                       | disable                  |
|                                | client to bring up the tunnel     |                          |                          |                          |
|                                | when there is no traffic.         |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *disable*   | Disable allowing the VPN client to bring up the tunnel |                                           |
|                                | |             | when there is no traffic.                              |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *enable*    | Enable allowing the VPN client to bring up the tunnel  |                                           |
|                                | |             | when there is no traffic.                              |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| client-keep-alive              | Enable/disable allowing the VPN   | option                   | \-                       | disable                  |
|                                | client to keep the tunnel up when |                          |                          |                          |
|                                | there is no traffic.              |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *disable*   | Disable allowing the VPN client to keep the tunnel up  |                                           |
|                                | |             | when there is no traffic.                              |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *enable*    | Enable allowing the VPN client to keep the tunnel up   |                                           |
|                                | |             | when there is no traffic.                              |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| comments                       | Comment.                          | var-string               | Maximum length: 255      |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| dhcp-ra-giaddr                 | Relay agent gateway IP address to | ipv4-address             | Not Specified            | 0.0.0.0                  |
|                                | use in the giaddr field of DHCP   |                          |                          |                          |
|                                | requests.                         |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| dhcp6-ra-linkaddr              | Relay agent IPv6 link address to  | ipv6-address             | Not Specified            | ::                       |
|                                | use in DHCP6 requests.            |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| dhgrp                          | DH group.                         | option                   | \-                       | 14                       |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *1*         | DH Group 1.                                            |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *2*         | DH Group 2.                                            |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *5*         | DH Group 5.                                            |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *14*        | DH Group 14.                                           |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *15*        | DH Group 15.                                           |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *16*        | DH Group 16.                                           |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *17*        | DH Group 17.                                           |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *18*        | DH Group 18.                                           |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *19*        | DH Group 19.                                           |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *20*        | DH Group 20.                                           |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *21*        | DH Group 21.                                           |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *27*        | DH Group 27.                                           |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *28*        | DH Group 28.                                           |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *29*        | DH Group 29.                                           |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *30*        | DH Group 30.                                           |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *31*        | DH Group 31.                                           |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *32*        | DH Group 32.                                           |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| digital-signature-auth         | Enable/disable IKEv2 Digital      | option                   | \-                       | disable                  |
|                                | Signature Authentication (RFC     |                          |                          |                          |
|                                | 7427).                            |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *enable*    | Enable IKEv2 Digital Signature Authentication (RFC     |                                           |
|                                | |             | 7427).                                                 |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *disable*   | Disable IKEv2 Digital Signature Authentication (RFC    |                                           |
|                                | |             | 7427).                                                 |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| distance                       | Distance for routes added by IKE. | integer                  | Minimum value: 1 Maximum | 15                       |
|                                |                                   |                          | value: 255               |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| dns-mode                       | DNS server mode.                  | option                   | \-                       | manual                   |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *manual*    | Manually configure DNS servers.                        |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *auto*      | Use default DNS servers.                               |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| domain                         | Instruct unity clients about the  | string                   | Maximum length: 63       |                          |
|                                | single default DNS domain.        |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| dpd                            | Dead Peer Detection mode.         | option                   | \-                       | on-demand                |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *disable*   | Disable Dead Peer Detection.                           |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *on-idle*   | Trigger Dead Peer Detection when IPsec is idle.        |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *on-demand* | Trigger Dead Peer Detection when IPsec traffic is sent |                                           |
|                                | |             | but no reply is received from the peer.                |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| dpd-retrycount                 | Number of DPD retry attempts.     | integer                  | Minimum value: 0 Maximum | 3                        |
|                                |                                   |                          | value: 10                |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| dpd-retryinterval              | DPD retry interval.               | user                     | Not Specified            |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| eap                            | Enable/disable IKEv2 EAP          | option                   | \-                       | disable                  |
|                                | authentication.                   |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *enable*    | Enable IKEv2 EAP authentication.                       |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *disable*   | Disable IKEv2 EAP authentication.                      |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| eap-exclude-peergrp            | Peer group excluded from EAP      | string                   | Maximum length: 35       |                          |
|                                | authentication.                   |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| eap-identity                   | IKEv2 EAP peer identity type.     | option                   | \-                       | use-id-payload           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +------------------+--------------------------------------------------------+                                      |
|                                | | Option           | Description                                            |                                      |
|                                | +==================+========================================================+                                      |
|                                | | *use-id-payload* | Use IKEv2 IDi payload to resolve peer identity.        |                                      |
|                                | +------------------+--------------------------------------------------------+                                      |
|                                | | *send-request*   | Use EAP identity request to resolve peer identity.     |                                      |
|                                | +------------------+--------------------------------------------------------+                                      |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| enforce-unique-id              | Enable/disable peer ID uniqueness | option                   | \-                       | disable                  |
|                                | check.                            |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *disable*   | Disable peer ID uniqueness enforcement.                |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *keep-new*  | Enforce peer ID uniqueness, keep new connection if     |                                           |
|                                | |             | collision found.                                       |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *keep-old*  | Enforce peer ID uniqueness, keep old connection if     |                                           |
|                                | |             | collision found.                                       |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| esn \*                         | Extended sequence number (ESN)    | option                   | \-                       | disable                  |
|                                | negotiation.                      |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *require*   | Require extended sequence number.                      |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *allow*     | Allow extended sequence number.                        |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *disable*   | Disable extended sequence number.                      |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| fec-base                       | Number of base Forward Error      | integer                  | Minimum value: 1 Maximum | 10                       |
|                                | Correction packets.               |                          | value: 20                |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| fec-codec                      | Forward Error Correction          | option                   | \-                       | rs                       |
|                                | encoding/decoding algorithm.      |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *rs*        | Reed-Solomon FEC algorithm.                            |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *xor*       | XOR FEC algorithm.                                     |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| fec-egress                     | Enable/disable Forward Error      | option                   | \-                       | disable                  |
|                                | Correction for egress IPsec       |                          |                          |                          |
|                                | traffic.                          |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *enable*    | Enable Forward Error Correction for egress IPsec       |                                           |
|                                | |             | traffic.                                               |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *disable*   | Disable Forward Error Correction for egress IPsec      |                                           |
|                                | |             | traffic.                                               |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| fec-health-check               | SD-WAN health check.              | string                   | Maximum length: 35       |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| fec-ingress                    | Enable/disable Forward Error      | option                   | \-                       | disable                  |
|                                | Correction for ingress IPsec      |                          |                          |                          |
|                                | traffic.                          |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *enable*    | Enable Forward Error Correction for ingress IPsec      |                                           |
|                                | |             | traffic.                                               |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *disable*   | Disable Forward Error Correction for ingress IPsec     |                                           |
|                                | |             | traffic.                                               |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| fec-mapping-profile            | Forward Error Correction (FEC)    | string                   | Maximum length: 35       |                          |
|                                | mapping profile.                  |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| fec-receive-timeout            | Timeout in milliseconds before    | integer                  | Minimum value: 1 Maximum | 50                       |
|                                | dropping Forward Error Correction |                          | value: 1000              |                          |
|                                | packets.                          |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| fec-redundant                  | Number of redundant Forward Error | integer                  | Minimum value: 1 Maximum | 1                        |
|                                | Correction packets.               |                          | value: 5                 |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| fec-send-timeout               | Timeout in milliseconds before    | integer                  | Minimum value: 1 Maximum | 5                        |
|                                | sending Forward Error Correction  |                          | value: 1000              |                          |
|                                | packets.                          |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| fgsp-sync                      | Enable/disable IPsec syncing of   | option                   | \-                       | disable                  |
|                                | tunnels for FGSP IPsec.           |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *enable*    | Enable IPsec syncing of tunnels to other cluster       |                                           |
|                                | |             | members.                                               |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *disable*   | Disable IPsec syncing of tunnels to other cluster      |                                           |
|                                | |             | members.                                               |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| forticlient-enforcement        | Enable/disable FortiClient        | option                   | \-                       | disable                  |
|                                | enforcement.                      |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *enable*    | Enable FortiClient enforcement.                        |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *disable*   | Disable FortiClient enforcement.                       |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| fragmentation                  | Enable/disable fragment IKE       | option                   | \-                       | enable                   |
|                                | message on re-transmission.       |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *enable*    | Enable intra-IKE fragmentation support on              |                                           |
|                                | |             | re-transmission.                                       |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *disable*   | Disable intra-IKE fragmentation support.               |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| fragmentation-mtu              | IKE fragmentation MTU.            | integer                  | Minimum value: 500       | 1200                     |
|                                |                                   |                          | Maximum value: 16000     |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| group-authentication           | Enable/disable IKEv2 IDi group    | option                   | \-                       | disable                  |
|                                | authentication.                   |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *enable*    | Enable IKEv2 IDi group authentication.                 |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *disable*   | Disable IKEv2 IDi group authentication.                |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| group-authentication-secret    | Password for IKEv2 ID group       | password-3               | Not Specified            |                          |
|                                | authentication. ASCII string or   |                          |                          |                          |
|                                | hexadecimal indicated by a        |                          |                          |                          |
|                                | leading 0x.                       |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| ha-sync-esp-seqno              | Enable/disable sequence number    | option                   | \-                       | enable                   |
|                                | jump ahead for IPsec HA.          |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *enable*    | Enable HA syncing of ESP sequence numbers.             |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *disable*   | Disable HA syncing of ESP sequence numbers.            |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| idle-timeout                   | Enable/disable IPsec tunnel idle  | option                   | \-                       | disable                  |
|                                | timeout.                          |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *enable*    | Enable IPsec tunnel idle timeout.                      |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *disable*   | Disable IPsec tunnel idle timeout.                     |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| idle-timeoutinterval           | IPsec tunnel idle timeout in      | integer                  | Minimum value: 5 Maximum | 15                       |
|                                | minutes.                          |                          | value: 43200             |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| ike-version                    | IKE protocol version.             | option                   | \-                       | 1                        |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *1*         | Use IKEv1 protocol.                                    |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *2*         | Use IKEv2 protocol.                                    |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| inbound-dscp-copy              | Enable/disable copy the dscp in   | option                   | \-                       | disable                  |
|                                | the ESP header to the inner IP    |                          |                          |                          |
|                                | Header.                           |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *enable*    | Enable copy the dscp in the ESP header to the inner IP |                                           |
|                                | |             | Header.                                                |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *disable*   | Disable copy the dscp in the ESP header to the inner   |                                           |
|                                | |             | IP Header.                                             |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| include-local-lan              | Enable/disable allow local LAN    | option                   | \-                       | disable                  |
|                                | access on unity clients.          |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *disable*   | Disable local LAN access on Unity clients.             |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *enable*    | Enable local LAN access on Unity clients.              |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| interface                      | Local physical, aggregate, or     | string                   | Maximum length: 35       |                          |
|                                | VLAN outgoing interface.          |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| ip-delay-interval              | IP address reuse delay interval   | integer                  | Minimum value: 0 Maximum | 0                        |
|                                | in seconds.                       |                          | value: 28800             |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| ipv4-dns-server1               | IPv4 DNS server 1.                | ipv4-address             | Not Specified            | 0.0.0.0                  |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| ipv4-dns-server2               | IPv4 DNS server 2.                | ipv4-address             | Not Specified            | 0.0.0.0                  |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| ipv4-dns-server3               | IPv4 DNS server 3.                | ipv4-address             | Not Specified            | 0.0.0.0                  |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| ipv4-end-ip                    | End of IPv4 range.                | ipv4-address             | Not Specified            | 0.0.0.0                  |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| ipv4-name                      | IPv4 address name.                | string                   | Maximum length: 79       |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| ipv4-netmask                   | IPv4 Netmask.                     | ipv4-netmask             | Not Specified            | 255.255.255.255          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| ipv4-split-exclude             | IPv4 subnets that should not be   | string                   | Maximum length: 79       |                          |
|                                | sent over the IPsec tunnel.       |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| ipv4-split-include             | IPv4 split-include subnets.       | string                   | Maximum length: 79       |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| ipv4-start-ip                  | Start of IPv4 range.              | ipv4-address             | Not Specified            | 0.0.0.0                  |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| ipv4-wins-server1              | WINS server 1.                    | ipv4-address             | Not Specified            | 0.0.0.0                  |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| ipv4-wins-server2              | WINS server 2.                    | ipv4-address             | Not Specified            | 0.0.0.0                  |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| ipv6-dns-server1               | IPv6 DNS server 1.                | ipv6-address             | Not Specified            | ::                       |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| ipv6-dns-server2               | IPv6 DNS server 2.                | ipv6-address             | Not Specified            | ::                       |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| ipv6-dns-server3               | IPv6 DNS server 3.                | ipv6-address             | Not Specified            | ::                       |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| ipv6-end-ip                    | End of IPv6 range.                | ipv6-address             | Not Specified            | ::                       |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| ipv6-name                      | IPv6 address name.                | string                   | Maximum length: 79       |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| ipv6-prefix                    | IPv6 prefix.                      | integer                  | Minimum value: 1 Maximum | 128                      |
|                                |                                   |                          | value: 128               |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| ipv6-split-exclude             | IPv6 subnets that should not be   | string                   | Maximum length: 79       |                          |
|                                | sent over the IPsec tunnel.       |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| ipv6-split-include             | IPv6 split-include subnets.       | string                   | Maximum length: 79       |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| ipv6-start-ip                  | Start of IPv6 range.              | ipv6-address             | Not Specified            | ::                       |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| keepalive                      | NAT-T keep alive interval.        | integer                  | Minimum value: 10        | 10                       |
|                                |                                   |                          | Maximum value: 900       |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| keylife                        | Time to wait in seconds before    | integer                  | Minimum value: 120       | 86400                    |
|                                | phase 1 encryption key expires.   |                          | Maximum value: 172800    |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| local-gw                       | Local VPN gateway.                | ipv4-address             | Not Specified            | 0.0.0.0                  |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| localid                        | Local ID.                         | string                   | Maximum length: 63       |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| localid-type                   | Local ID type.                    | option                   | \-                       | auto                     |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *auto*      | Select ID type automatically.                          |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *fqdn*      | Use fully qualified domain name.                       |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *user-fqdn* | Use user fully qualified domain name.                  |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *keyid*     | Use key-id string.                                     |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *address*   | Use local IP address.                                  |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *asn1dn*    | Use ASN.1 distinguished name.                          |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| mesh-selector-type             | Add selectors containing subsets  | option                   | \-                       | disable                  |
|                                | of the configuration depending on |                          |                          |                          |
|                                | traffic.                          |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *disable*   | Disable.                                               |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *subnet*    | Enable addition of matching subnet selector.           |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *host*      | Enable addition of host to host selector.              |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| mode                           | ID protection mode used to        | option                   | \-                       | main                     |
|                                | establish a secure channel.       |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +--------------+--------------------------------------------------------+                                          |
|                                | | Option       | Description                                            |                                          |
|                                | +==============+========================================================+                                          |
|                                | | *aggressive* | Aggressive mode.                                       |                                          |
|                                | +--------------+--------------------------------------------------------+                                          |
|                                | | *main*       | Main mode.                                             |                                          |
|                                | +--------------+--------------------------------------------------------+                                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| mode-cfg                       | Enable/disable configuration      | option                   | \-                       | disable                  |
|                                | method.                           |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *disable*   | Disable Configuration Method.                          |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *enable*    | Enable Configuration Method.                           |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| mode-cfg-allow-client-selector | Enable/disable mode-cfg client to | option                   | \-                       | disable                  |
|                                | use custom phase2 selectors.      |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *disable*   | Mode-cfg client to use wildcard selectors.             |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *enable*    | Mode-cfg client to use custom selectors.               |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| name                           | IPsec remote gateway name.        | string                   | Maximum length: 35       |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| nattraversal                   | Enable/disable NAT traversal.     | option                   | \-                       | enable                   |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *enable*    | Enable IPsec NAT traversal.                            |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *disable*   | Disable IPsec NAT traversal.                           |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *forced*    | Force IPsec NAT traversal on.                          |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| negotiate-timeout              | IKE SA negotiation timeout in     | integer                  | Minimum value: 1 Maximum | 30                       |
|                                | seconds.                          |                          | value: 300               |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| npu-offload \*                 | Enable/disable offloading NPU.    | option                   | \-                       | enable                   |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *enable*    | Enable NPU offloading.                                 |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *disable*   | Disable NPU offloading.                                |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| peer                           | Accept this peer certificate.     | string                   | Maximum length: 35       |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| peergrp                        | Accept this peer certificate      | string                   | Maximum length: 35       |                          |
|                                | group.                            |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| peerid                         | Accept this peer identity.        | string                   | Maximum length: 255      |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| peertype                       | Accept this peer type.            | option                   | \-                       | peer                     |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *any*       | Accept any peer ID.                                    |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *one*       | Accept this peer ID.                                   |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *dialup*    | Accept peer ID in dialup group.                        |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *peer*      | Accept this peer certificate.                          |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *peergrp*   | Accept this peer certificate group.                    |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| ppk                            | Enable/disable IKEv2 Postquantum  | option                   | \-                       | disable                  |
|                                | Preshared Key (PPK).              |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *disable*   | Disable use of IKEv2 Postquantum Preshared Key (PPK).  |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *allow*     | Allow, but do not require, use of IKEv2 Postquantum    |                                           |
|                                | |             | Preshared Key (PPK).                                   |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *require*   | Require use of IKEv2 Postquantum Preshared Key (PPK).  |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| ppk-identity                   | IKEv2 Postquantum Preshared Key   | string                   | Maximum length: 35       |                          |
|                                | Identity.                         |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| ppk-secret                     | IKEv2 Postquantum Preshared Key   | password-3               | Not Specified            |                          |
|                                | (ASCII string or hexadecimal      |                          |                          |                          |
|                                | encoded with a leading 0x).       |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| priority                       | Priority for routes added by IKE. | integer                  | Minimum value: 1 Maximum | 1                        |
|                                |                                   |                          | value: 65535             |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| proposal                       | Phase1 proposal.                  | option                   | \-                       |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | Option                       | Description                                            |                          |
|                                | +==============================+========================================================+                          |
|                                | | *des-md5*                    | des-md5                                                |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *des-sha1*                   | des-sha1                                               |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *des-sha256*                 | des-sha256                                             |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *des-sha384*                 | des-sha384                                             |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *des-sha512*                 | des-sha512                                             |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *3des-md5*                   | 3des-md5                                               |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *3des-sha1*                  | 3des-sha1                                              |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *3des-sha256*                | 3des-sha256                                            |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *3des-sha384*                | 3des-sha384                                            |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *3des-sha512*                | 3des-sha512                                            |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *aes128-md5*                 | aes128-md5                                             |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *aes128-sha1*                | aes128-sha1                                            |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *aes128-sha256*              | aes128-sha256                                          |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *aes128-sha384*              | aes128-sha384                                          |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *aes128-sha512*              | aes128-sha512                                          |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *aes128gcm-prfsha1*          | aes128gcm-prfsha1                                      |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *aes128gcm-prfsha256*        | aes128gcm-prfsha256                                    |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *aes128gcm-prfsha384*        | aes128gcm-prfsha384                                    |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *aes128gcm-prfsha512*        | aes128gcm-prfsha512                                    |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *aes192-md5*                 | aes192-md5                                             |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *aes192-sha1*                | aes192-sha1                                            |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *aes192-sha256*              | aes192-sha256                                          |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *aes192-sha384*              | aes192-sha384                                          |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *aes192-sha512*              | aes192-sha512                                          |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *aes256-md5*                 | aes256-md5                                             |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *aes256-sha1*                | aes256-sha1                                            |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *aes256-sha256*              | aes256-sha256                                          |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *aes256-sha384*              | aes256-sha384                                          |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *aes256-sha512*              | aes256-sha512                                          |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *aes256gcm-prfsha1*          | aes256gcm-prfsha1                                      |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *aes256gcm-prfsha256*        | aes256gcm-prfsha256                                    |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *aes256gcm-prfsha384*        | aes256gcm-prfsha384                                    |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *aes256gcm-prfsha512*        | aes256gcm-prfsha512                                    |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *chacha20poly1305-prfsha1*   | chacha20poly1305-prfsha1                               |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *chacha20poly1305-prfsha256* | chacha20poly1305-prfsha256                             |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *chacha20poly1305-prfsha384* | chacha20poly1305-prfsha384                             |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *chacha20poly1305-prfsha512* | chacha20poly1305-prfsha512                             |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *aria128-md5*                | aria128-md5                                            |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *aria128-sha1*               | aria128-sha1                                           |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *aria128-sha256*             | aria128-sha256                                         |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *aria128-sha384*             | aria128-sha384                                         |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *aria128-sha512*             | aria128-sha512                                         |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *aria192-md5*                | aria192-md5                                            |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *aria192-sha1*               | aria192-sha1                                           |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *aria192-sha256*             | aria192-sha256                                         |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *aria192-sha384*             | aria192-sha384                                         |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *aria192-sha512*             | aria192-sha512                                         |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *aria256-md5*                | aria256-md5                                            |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *aria256-sha1*               | aria256-sha1                                           |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *aria256-sha256*             | aria256-sha256                                         |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *aria256-sha384*             | aria256-sha384                                         |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *aria256-sha512*             | aria256-sha512                                         |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *seed-md5*                   | seed-md5                                               |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *seed-sha1*                  | seed-sha1                                              |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *seed-sha256*                | seed-sha256                                            |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *seed-sha384*                | seed-sha384                                            |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
|                                | | *seed-sha512*                | seed-sha512                                            |                          |
|                                | +------------------------------+--------------------------------------------------------+                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| psksecret                      | Pre-shared secret for PSK         | password-3               | Not Specified            |                          |
|                                | authentication (ASCII string or   |                          |                          |                          |
|                                | hexadecimal encoded with a        |                          |                          |                          |
|                                | leading 0x).                      |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| psksecret-remote               | Pre-shared secret for remote side | password-3               | Not Specified            |                          |
|                                | PSK authentication (ASCII string  |                          |                          |                          |
|                                | or hexadecimal encoded with a     |                          |                          |                          |
|                                | leading 0x).                      |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| reauth                         | Enable/disable re-authentication  | option                   | \-                       | disable                  |
|                                | upon IKE SA lifetime expiration.  |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *disable*   | Disable IKE SA re-authentication.                      |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *enable*    | Enable IKE SA re-authentication.                       |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| rekey                          | Enable/disable phase1 rekey.      | option                   | \-                       | enable                   |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *enable*    | Enable phase1 rekey.                                   |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *disable*   | Disable phase1 rekey.                                  |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| remote-gw                      | Remote VPN gateway.               | ipv4-address             | Not Specified            | 0.0.0.0                  |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| remotegw-ddns                  | Domain name of remote gateway.    | string                   | Maximum length: 63       |                          |
|                                | For example, name.ddns.com.       |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| rsa-signature-format           | Digital Signature Authentication  | option                   | \-                       | pkcs1                    |
|                                | RSA signature format.             |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *pkcs1*     | RSASSA PKCS#1 v1.5.                                    |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *pss*       | RSASSA Probabilistic Signature Scheme (PSS).           |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| rsa-signature-hash-override    | Enable/disable IKEv2 RSA          | option                   | \-                       | disable                  |
|                                | signature hash algorithm          |                          |                          |                          |
|                                | override.                         |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *enable*    | Enable IKEv2 RSA signature hash algorithm override.    |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *disable*   | Disable IKEv2 RSA signature hash algorithm override.   |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| save-password                  | Enable/disable saving XAuth       | option                   | \-                       | disable                  |
|                                | username and password on VPN      |                          |                          |                          |
|                                | clients.                          |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *disable*   | Disable saving XAuth username and password on VPN      |                                           |
|                                | |             | clients.                                               |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *enable*    | Enable saving XAuth username and password on VPN       |                                           |
|                                | |             | clients.                                               |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| send-cert-chain                | Enable/disable sending            | option                   | \-                       | enable                   |
|                                | certificate chain.                |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *enable*    | Enable sending certificate chain.                      |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *disable*   | Disable sending certificate chain.                     |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| signature-hash-alg             | Digital Signature Authentication  | option                   | \-                       | sha2-512                 |
|                                | hash algorithms.                  |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *sha1*      | SHA1.                                                  |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *sha2-256*  | SHA2-256.                                              |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *sha2-384*  | SHA2-384.                                              |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *sha2-512*  | SHA2-512.                                              |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| split-include-service          | Split-include services.           | string                   | Maximum length: 79       |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| suite-b                        | Use Suite-B.                      | option                   | \-                       | disable                  |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------------+--------------------------------------------------------+                                     |
|                                | | Option            | Description                                            |                                     |
|                                | +===================+========================================================+                                     |
|                                | | *disable*         | Do not use UI suite.                                   |                                     |
|                                | +-------------------+--------------------------------------------------------+                                     |
|                                | | *suite-b-gcm-128* | Use Suite-B-GCM-128.                                   |                                     |
|                                | +-------------------+--------------------------------------------------------+                                     |
|                                | | *suite-b-gcm-256* | Use Suite-B-GCM-256.                                   |                                     |
|                                | +-------------------+--------------------------------------------------------+                                     |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| type                           | Remote gateway type.              | option                   | \-                       | static                   |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *static*    | Remote VPN gateway has fixed IP address.               |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *dynamic*   | Remote VPN gateway has dynamic IP address.             |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *ddns*      | Remote VPN gateway has dynamic IP address and is a     |                                           |
|                                | |             | dynamic DNS client.                                    |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| unity-support                  | Enable/disable support for Cisco  | option                   | \-                       | enable                   |
|                                | UNITY Configuration Method        |                          |                          |                          |
|                                | extensions.                       |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *disable*   | Disable Cisco Unity Configuration Method Extensions.   |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *enable*    | Enable Cisco Unity Configuration Method Extensions.    |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| usrgrp                         | User group name for dialup peers. | string                   | Maximum length: 35       |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| wizard-type                    | GUI VPN Wizard Type.              | option                   | \-                       | custom                   |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +----------------------------------+--------------------------------------------------------+                      |
|                                | | Option                           | Description                                            |                      |
|                                | +==================================+========================================================+                      |
|                                | | *custom*                         | Custom VPN configuration.                              |                      |
|                                | +----------------------------------+--------------------------------------------------------+                      |
|                                | | *dialup-forticlient*             | Dial Up - FortiClient Windows, Mac and Android.        |                      |
|                                | +----------------------------------+--------------------------------------------------------+                      |
|                                | | *dialup-ios*                     | Dial Up - iPhone / iPad Native IPsec Client.           |                      |
|                                | +----------------------------------+--------------------------------------------------------+                      |
|                                | | *dialup-android*                 | Dial Up - Android Native IPsec Client.                 |                      |
|                                | +----------------------------------+--------------------------------------------------------+                      |
|                                | | *dialup-windows*                 | Dial Up - Windows Native IPsec Client.                 |                      |
|                                | +----------------------------------+--------------------------------------------------------+                      |
|                                | | *dialup-cisco*                   | Dial Up - Cisco IPsec Client.                          |                      |
|                                | +----------------------------------+--------------------------------------------------------+                      |
|                                | | *static-fortigate*               | Site to Site - FortiGate.                              |                      |
|                                | +----------------------------------+--------------------------------------------------------+                      |
|                                | | *dialup-fortigate*               | Dial Up - FortiGate.                                   |                      |
|                                | +----------------------------------+--------------------------------------------------------+                      |
|                                | | *static-cisco*                   | Site to Site - Cisco.                                  |                      |
|                                | +----------------------------------+--------------------------------------------------------+                      |
|                                | | *dialup-cisco-fw*                | Dialup Up - Cisco Firewall.                            |                      |
|                                | +----------------------------------+--------------------------------------------------------+                      |
|                                | | *simplified-static-fortigate*    | Site to Site - FortiGate (SD-WAN).                     |                      |
|                                | +----------------------------------+--------------------------------------------------------+                      |
|                                | | *hub-fortigate-auto-discovery*   | Hub role in a Hub-and-Spoke auto-discovery VPN.        |                      |
|                                | +----------------------------------+--------------------------------------------------------+                      |
|                                | | *spoke-fortigate-auto-discovery* | Spoke role in a Hub-and-Spoke auto-discovery VPN.      |                      |
|                                | +----------------------------------+--------------------------------------------------------+                      |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| xauthtype                      | XAuth type.                       | option                   | \-                       | disable                  |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *disable*   | Disable.                                               |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *client*    | Enable as client.                                      |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *pap*       | Enable as server PAP.                                  |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *chap*      | Enable as server CHAP.                                 |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *auto*      | Enable as server auto.                                 |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+--------------------------------------------------------------------------------------------------------------------+

