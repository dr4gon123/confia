# config vpn ipsec phase1-interface

Configure VPN remote gateway.

## Syntax

```
config vpn ipsec phase1-interface
    Description: Configure VPN remote gateway.
    edit <name>
        set acct-verify [enable|disable]
        set add-gw-route [enable|disable]
        set add-route [disable|enable]
        set aggregate-member [enable|disable]
        set aggregate-weight {integer}
        set assign-ip [disable|enable]
        set assign-ip-from [range|usrgrp|...]
        set authmethod [psk|signature]
        set authmethod-remote [psk|signature]
        set authpasswd {password}
        set authusr {string}
        set authusrgrp {string}
        set auto-discovery-crossover [allow|block]
        set auto-discovery-forwarder [enable|disable]
        set auto-discovery-offer-interval {integer}
        set auto-discovery-psk [enable|disable]
        set auto-discovery-receiver [enable|disable]
        set auto-discovery-sender [enable|disable]
        set auto-discovery-shortcuts [independent|dependent]
        set auto-negotiate [enable|disable]
        set azure-ad-autoconnect [enable|disable]
        set backup-gateway <address1>, <address2>, ...
        set banner {var-string}
        set cert-id-validation [enable|disable]
        set cert-trust-store [local|ems]
        set certificate <name1>, <name2>, ...
        set childless-ike [enable|disable]
        set client-auto-negotiate [disable|enable]
        set client-keep-alive [disable|enable]
        set comments {var-string}
        set default-gw {ipv4-address}
        set default-gw-priority {integer}
        set dev-id {string}
        set dev-id-notification [disable|enable]
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
        set eap-cert-auth [enable|disable]
        set eap-exclude-peergrp {string}
        set eap-identity [use-id-payload|send-request]
        set ems-sn-check [enable|disable]
        set encap-local-gw4 {ipv4-address}
        set encap-local-gw6 {ipv6-address}
        set encap-remote-gw4 {ipv4-address}
        set encap-remote-gw6 {ipv6-address}
        set encapsulation [none|gre|...]
        set encapsulation-address [ike|ipv4|...]
        set enforce-unique-id [disable|keep-new|...]
        set esn [require|allow|...]
        set exchange-fgt-device-id [enable|disable]
        set exchange-interface-ip [enable|disable]
        set exchange-ip-addr4 {ipv4-address}
        set exchange-ip-addr6 {ipv6-address}
        set fallback-tcp-threshold {integer}
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
        set fortinet-esp [enable|disable]
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
        set internal-domain-list <domain-name1>, <domain-name2>, ...
        set ip-delay-interval {integer}
        set ip-fragmentation [pre-encapsulation|post-encapsulation]
        set ip-version [4|6]
        set ipv4-dns-server1 {ipv4-address}
        set ipv4-dns-server2 {ipv4-address}
        set ipv4-dns-server3 {ipv4-address}
        set ipv4-end-ip {ipv4-address}
        config ipv4-exclude-range
            Description: Configuration Method IPv4 exclude ranges.
            edit <id>
                set end-ip {ipv4-address}
                set start-ip {ipv4-address}
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
                set end-ip {ipv6-address}
                set start-ip {ipv6-address}
            next
        end
        set ipv6-name {string}
        set ipv6-prefix {integer}
        set ipv6-split-exclude {string}
        set ipv6-split-include {string}
        set ipv6-start-ip {ipv6-address}
        set keepalive {integer}
        set keylife {integer}
        set kms {string}
        set link-cost {integer}
        set local-gw {ipv4-address}
        set local-gw6 {ipv6-address}
        set localid {string}
        set localid-type [auto|fqdn|...]
        set loopback-asymroute [enable|disable]
        set mesh-selector-type [disable|subnet|...]
        set mode [aggressive|main]
        set mode-cfg [disable|enable]
        set mode-cfg-allow-client-selector [disable|enable]
        set monitor <name1>, <name2>, ...
        set monitor-hold-down-delay {integer}
        set monitor-hold-down-time {user}
        set monitor-hold-down-type [immediate|delay|...]
        set monitor-hold-down-weekday [everyday|sunday|...]
        set monitor-min {integer}
        set nattraversal [enable|disable|...]
        set negotiate-timeout {integer}
        set net-device [enable|disable]
        set network-id {integer}
        set network-overlay [disable|enable]
        set npu-offload [enable|disable]
        set packet-redistribution [enable|disable]
        set passive-mode [enable|disable]
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
        set qkd [disable|allow|...]
        set qkd-profile {string}
        set reauth [disable|enable]
        set rekey [enable|disable]
        set remote-gw {ipv4-address}
        set remote-gw6 {ipv6-address}
        set remotegw-ddns {string}
        set rsa-signature-format [pkcs1|pss]
        set rsa-signature-hash-override [enable|disable]
        set save-password [disable|enable]
        set send-cert-chain [enable|disable]
        set signature-hash-alg {option1}, {option2}, ...
        set split-include-service {string}
        set suite-b [disable|suite-b-gcm-128|...]
        set transport [udp|udp-fallback-tcp|...]
        set type [static|dynamic|...]
        set unity-support [disable|enable]
        set usrgrp {string}
        set vni {integer}
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
| add-route                      | Enable/disable control addition   | option                   | \-                       | enable                   |
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
| aggregate-member               | Enable/disable use as an          | option                   | \-                       | disable                  |
|                                | aggregate member.                 |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *enable*    | Enable use as an aggregate member.                     |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *disable*   | Disable use as an aggregate member.                    |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| aggregate-weight               | Link weight for aggregate.        | integer                  | Minimum value: 1 Maximum | 1                        |
|                                |                                   |                          | value: 100               |                          |
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
| auto-discovery-crossover       | Allow/block set-up of short-cut   | option                   | \-                       | allow                    |
|                                | tunnels between different network |                          |                          |                          |
|                                | IDs.                              |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *allow*     | Allow set-up of short-cut tunnels between different    |                                           |
|                                | |             | network IDs.                                           |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *block*     | Block set-up of short-cut tunnels between different    |                                           |
|                                | |             | network IDs.                                           |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| auto-discovery-forwarder       | Enable/disable forwarding         | option                   | \-                       | disable                  |
|                                | auto-discovery short-cut          |                          |                          |                          |
|                                | messages.                         |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *enable*    | Enable forwarding auto-discovery short-cut messages.   |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *disable*   | Disable forwarding auto-discovery short-cut messages.  |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| auto-discovery-offer-interval  | Interval between shortcut offer   | integer                  | Minimum value: 1 Maximum | 5                        |
|                                | messages in seconds.              |                          | value: 300               |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| auto-discovery-psk             | Enable/disable use of pre-shared  | option                   | \-                       | disable                  |
|                                | secrets for authentication of     |                          |                          |                          |
|                                | auto-discovery tunnels.           |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *enable*    | Enable use of pre-shared-secret authentication for     |                                           |
|                                | |             | auto-discovery tunnels.                                |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *disable*   | Disable use of authentication defined by               |                                           |
|                                | |             | \'authmethod\' for auto-discovery tunnels.             |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| auto-discovery-receiver        | Enable/disable accepting          | option                   | \-                       | disable                  |
|                                | auto-discovery short-cut          |                          |                          |                          |
|                                | messages.                         |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *enable*    | Enable receiving auto-discovery short-cut messages.    |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *disable*   | Disable receiving auto-discovery short-cut messages.   |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| auto-discovery-sender          | Enable/disable sending            | option                   | \-                       | disable                  |
|                                | auto-discovery short-cut          |                          |                          |                          |
|                                | messages.                         |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *enable*    | Enable sending auto-discovery short-cut messages.      |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *disable*   | Disable sending auto-discovery short-cut messages.     |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| auto-discovery-shortcuts       | Control deletion of child         | option                   | \-                       | independent              |
|                                | short-cut tunnels when the parent |                          |                          |                          |
|                                | tunnel goes down.                 |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +---------------+--------------------------------------------------------+                                         |
|                                | | Option        | Description                                            |                                         |
|                                | +===============+========================================================+                                         |
|                                | | *independent* | Short-cut tunnels remain up if the parent tunnel goes  |                                         |
|                                | |               | down.                                                  |                                         |
|                                | +---------------+--------------------------------------------------------+                                         |
|                                | | *dependent*   | Short-cut tunnels are brought down if the parent       |                                         |
|                                | |               | tunnel goes down.                                      |                                         |
|                                | +---------------+--------------------------------------------------------+                                         |
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
| azure-ad-autoconnect           | Enable/disable Azure AD           | option                   | \-                       | disable                  |
|                                | Auto-Connect for FortiClient.     |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *enable*    | Enable Azure AD Auto-Connect for FortiClient.          |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *disable*   | Disable Azure AD Auto-Connect for FortiClient.         |                                           |
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
| cert-trust-store               | CA certificate trust store.       | option                   | \-                       | local                    |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *local*     | Use local CA certificate.                              |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *ems*       | Use EMS CA certificate.                                |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| certificate `<name>`           | The names of up to 4 signed       | string                   | Maximum length: 79       |                          |
|                                | personal certificates.            |                          |                          |                          |
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
| default-gw                     | IPv4 address of default route     | ipv4-address             | Not Specified            | 0.0.0.0                  |
|                                | gateway to use for traffic        |                          |                          |                          |
|                                | exiting the interface.            |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| default-gw-priority            | Priority for default gateway      | integer                  | Minimum value: 0 Maximum | 0                        |
|                                | route. A higher priority number   |                          | value: 4294967295        |                          |
|                                | signifies a less preferred route. |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| dev-id                         | Device ID carried by the device   | string                   | Maximum length: 63       |                          |
|                                | ID notification.                  |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| dev-id-notification            | Enable/disable device ID          | option                   | \-                       | disable                  |
|                                | notification.                     |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *disable*   | Disable device ID notification.                        |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *enable*    | Enable device ID notification.                         |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
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
| eap-cert-auth                  | Enable/disable peer certificate   | option                   | \-                       | disable                  |
|                                | authentication in addition to EAP |                          |                          |                          |
|                                | if peer is a FortiClient          |                          |                          |                          |
|                                | endpoint.                         |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *enable*    | Enable peer certificate authentication in addition to  |                                           |
|                                | |             | EAP if peer is a FortiClient endpoint.                 |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *disable*   | Disable peer certificate authentication in addition to |                                           |
|                                | |             | EAP if peer is a FortiClient endpoint.                 |                                           |
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
| ems-sn-check                   | Enable/disable verification of    | option                   | \-                       | disable                  |
|                                | EMS serial number.                |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *enable*    | Enable EMS serial number verification.                 |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *disable*   | Disable EMS serial number verification.                |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| encap-local-gw4                | Local IPv4 address of GRE/VXLAN   | ipv4-address             | Not Specified            | 0.0.0.0                  |
|                                | tunnel.                           |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| encap-local-gw6                | Local IPv6 address of GRE/VXLAN   | ipv6-address             | Not Specified            | ::                       |
|                                | tunnel.                           |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| encap-remote-gw4               | Remote IPv4 address of GRE/VXLAN  | ipv4-address             | Not Specified            | 0.0.0.0                  |
|                                | tunnel.                           |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| encap-remote-gw6               | Remote IPv6 address of GRE/VXLAN  | ipv6-address             | Not Specified            | ::                       |
|                                | tunnel.                           |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| encapsulation                  | Enable/disable GRE/VXLAN/VPNID    | option                   | \-                       | none                     |
|                                | encapsulation.                    |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +---------------+--------------------------------------------------------+                                         |
|                                | | Option        | Description                                            |                                         |
|                                | +===============+========================================================+                                         |
|                                | | *none*        | No additional encapsulation.                           |                                         |
|                                | +---------------+--------------------------------------------------------+                                         |
|                                | | *gre*         | GRE encapsulation.                                     |                                         |
|                                | +---------------+--------------------------------------------------------+                                         |
|                                | | *vxlan*       | VXLAN encapsulation.                                   |                                         |
|                                | +---------------+--------------------------------------------------------+                                         |
|                                | | *vpn-id-ipip* | VPN ID with IPIP encapsulation.                        |                                         |
|                                | +---------------+--------------------------------------------------------+                                         |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| encapsulation-address          | Source for GRE/VXLAN tunnel       | option                   | \-                       | ike                      |
|                                | address.                          |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *ike*       | Use IKE/IPsec gateway addresses.                       |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *ipv4*      | Specify separate GRE/VXLAN tunnel address.             |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *ipv6*      | Specify separate GRE/VXLAN tunnel address.             |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
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
| exchange-fgt-device-id         | Enable/disable device identifier  | option                   | \-                       | disable                  |
|                                | exchange with peer FortiGate      |                          |                          |                          |
|                                | units for use of VPN monitor data |                          |                          |                          |
|                                | by FortiManager.                  |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *enable*    | Enable exchange of FortiGate device identifier.        |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *disable*   | Disable exchange of FortiGate device identifier.       |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| exchange-interface-ip          | Enable/disable exchange of IPsec  | option                   | \-                       | disable                  |
|                                | interface IP address.             |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *enable*    | Enable exchange of IPsec interface IP address.         |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *disable*   | Disable exchange of IPsec interface IP address.        |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| exchange-ip-addr4              | IPv4 address to exchange with     | ipv4-address             | Not Specified            | 0.0.0.0                  |
|                                | peers.                            |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| exchange-ip-addr6              | IPv6 address to exchange with     | ipv6-address             | Not Specified            | ::                       |
|                                | peers.                            |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| fallback-tcp-threshold         | Timeout in seconds before falling | integer                  | Minimum value: 1 Maximum | 15                       |
|                                | back IKE/IPsec traffic to tcp.    |                          | value: 300               |                          |
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
| fortinet-esp                   | Enable/disable Fortinet ESP       | option                   | \-                       | disable                  |
|                                | encapsulaton.                     |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *enable*    | Enable Fortinet ESP encapsulation.                     |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *disable*   | Disable Fortinet ESP encapsulaton.                     |                                           |
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
| internal-domain-list           | One or more internal domain names | string                   | Maximum length: 79       |                          |
| `<domain-name>`                | in quotes separated by spaces.    |                          |                          |                          |
|                                |                                   |                          |                          |                          |
|                                | Domain name.                      |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| ip-delay-interval              | IP address reuse delay interval   | integer                  | Minimum value: 0 Maximum | 0                        |
|                                | in seconds.                       |                          | value: 28800             |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| ip-fragmentation               | Determine whether IP packets are  | option                   | \-                       | post-encapsulation       |
|                                | fragmented before or after IPsec  |                          |                          |                          |
|                                | encapsulation.                    |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +----------------------+--------------------------------------------------------+                                  |
|                                | | Option               | Description                                            |                                  |
|                                | +======================+========================================================+                                  |
|                                | | *pre-encapsulation*  | Fragment before IPsec encapsulation.                   |                                  |
|                                | +----------------------+--------------------------------------------------------+                                  |
|                                | | *post-encapsulation* | Fragment after IPsec encapsulation (RFC compliant).    |                                  |
|                                | +----------------------+--------------------------------------------------------+                                  |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| ip-version                     | IP version to use for VPN         | option                   | \-                       | 4                        |
|                                | interface.                        |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *4*         | Use IPv4 addressing for gateways.                      |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *6*         | Use IPv6 addressing for gateways.                      |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
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
| keepalive                      | NAT-T keep alive interval.        | integer                  | Minimum value: 5 Maximum | 10                       |
|                                |                                   |                          | value: 900               |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| keylife                        | Time to wait in seconds before    | integer                  | Minimum value: 120       | 86400                    |
|                                | phase 1 encryption key expires.   |                          | Maximum value: 172800    |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| kms                            | Key Management Services server.   | string                   | Maximum length: 35       |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| link-cost                      | VPN tunnel underlay link cost.    | integer                  | Minimum value: 0 Maximum | 0                        |
|                                |                                   |                          | value: 255               |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| local-gw                       | IPv4 address of the local         | ipv4-address             | Not Specified            | 0.0.0.0                  |
|                                | gateway\'s external interface.    |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| local-gw6                      | IPv6 address of the local         | ipv6-address             | Not Specified            | ::                       |
|                                | gateway\'s external interface.    |                          |                          |                          |
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
| loopback-asymroute             | Enable/disable asymmetric routing | option                   | \-                       | enable                   |
|                                | for IKE traffic on loopback       |                          |                          |                          |
|                                | interface.                        |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *enable*    | Allow ingress/egress IKE traffic to be routed over     |                                           |
|                                | |             | different interfaces.                                  |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *disable*   | Ingress/egress IKE traffic must be routed over the     |                                           |
|                                | |             | same interface.                                        |                                           |
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
| mode                           | The ID protection mode used to    | option                   | \-                       | main                     |
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
| monitor `<name>`               | IPsec interface as backup for     | string                   | Maximum length: 79       |                          |
|                                | primary interface.                |                          |                          |                          |
|                                |                                   |                          |                          |                          |
|                                | IPsec interface as backup for     |                          |                          |                          |
|                                | primary interface.                |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| monitor-hold-down-delay        | Time to wait in seconds before    | integer                  | Minimum value: 0 Maximum | 0                        |
|                                | recovery once primary             |                          | value: 31536000          |                          |
|                                | re-establishes.                   |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| monitor-hold-down-time         | Time of day at which to fail back | user                     | Not Specified            |                          |
|                                | to primary after it               |                          |                          |                          |
|                                | re-establishes.                   |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| monitor-hold-down-type         | Recovery time method when primary | option                   | \-                       | immediate                |
|                                | interface re-establishes.         |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *immediate* | Fail back immediately after primary recovers.          |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *delay*     | Number of seconds to delay fail back after primary     |                                           |
|                                | |             | recovers.                                              |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *time*      | Specify a time at which to fail back after primary     |                                           |
|                                | |             | recovers.                                              |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| monitor-hold-down-weekday      | Day of the week to recover once   | option                   | \-                       | sunday                   |
|                                | primary re-establishes.           |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *everyday*  | Every Day.                                             |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *sunday*    | Sunday.                                                |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *monday*    | Monday.                                                |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *tuesday*   | Tuesday.                                               |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *wednesday* | Wednesday.                                             |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *thursday*  | Thursday.                                              |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *friday*    | Friday.                                                |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *saturday*  | Saturday.                                              |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| monitor-min                    | Minimum number of links to become | integer                  | Minimum value: 0 Maximum | 0                        |
|                                | degraded before activating this   |                          | value: 4294967295        |                          |
|                                | interface. Zero (0) means all     |                          |                          |                          |
|                                | links must be down before         |                          |                          |                          |
|                                | activating this interface.        |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| name                           | IPsec remote gateway name.        | string                   | Maximum length: 15       |                          |
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
| net-device                     | Enable/disable kernel device      | option                   | \-                       | disable                  |
|                                | creation.                         |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *enable*    | Create a kernel device for every tunnel.               |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *disable*   | Do not create a kernel device for tunnels.             |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| network-id                     | VPN gateway network ID.           | integer                  | Minimum value: 0 Maximum | 0                        |
|                                |                                   |                          | value: 255               |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| network-overlay                | Enable/disable network overlays.  | option                   | \-                       | disable                  |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *disable*   | Disable network overlays.                              |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *enable*    | Enable network overlays.                               |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
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
| packet-redistribution \*       | Enable/disable packet             | option                   | \-                       | disable                  |
|                                | distribution (RPS) on the IPsec   |                          |                          |                          |
|                                | interface.                        |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *enable*    | Enable packet redistribution.                          |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *disable*   | Disable packet redistribution.                         |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| passive-mode                   | Enable/disable IPsec passive mode | option                   | \-                       | disable                  |
|                                | for static tunnels.               |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *enable*    | Enable IPsec passive mode.                             |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *disable*   | Disable IPsec passive mode.                            |                                           |
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
| qkd                            | Enable/disable use of Quantum Key | option                   | \-                       | disable                  |
|                                | Distribution (QKD) server.        |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | Option      | Description                                            |                                           |
|                                | +=============+========================================================+                                           |
|                                | | *disable*   | Disable use of a Quantum Key Distribution (QKD)        |                                           |
|                                | |             | server.                                                |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *allow*     | Allow, but do not require, use of a Quantum Key        |                                           |
|                                | |             | Distribution (QKD) server.                             |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
|                                | | *require*   | Require use of a Quantum Key Distribution (QKD)        |                                           |
|                                | |             | server.                                                |                                           |
|                                | +-------------+--------------------------------------------------------+                                           |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| qkd-profile                    | Quantum Key Distribution (QKD)    | string                   | Maximum length: 35       |                          |
|                                | server profile.                   |                          |                          |                          |
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
| remote-gw                      | IPv4 address of the remote        | ipv4-address             | Not Specified            | 0.0.0.0                  |
|                                | gateway\'s external interface.    |                          |                          |                          |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| remote-gw6                     | IPv6 address of the remote        | ipv6-address             | Not Specified            | ::                       |
|                                | gateway\'s external interface.    |                          |                          |                          |
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
| transport                      | Set IKE transport protocol.       | option                   | \-                       | udp                      |
+--------------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                                | +--------------------+--------------------------------------------------------+                                    |
|                                | | Option             | Description                                            |                                    |
|                                | +====================+========================================================+                                    |
|                                | | *udp*              | Use UDP transport for IKE.                             |                                    |
|                                | +--------------------+--------------------------------------------------------+                                    |
|                                | | *udp-fallback-tcp* | Use UDP transport for IKE, with fallback to TCP        |                                    |
|                                | |                    | transport.                                             |                                    |
|                                | +--------------------+--------------------------------------------------------+                                    |
|                                | | *tcp*              | Use TCP transport for IKE.                             |                                    |
|                                | +--------------------+--------------------------------------------------------+                                    |
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
| vni                            | VNI of VXLAN tunnel.              | integer                  | Minimum value: 1 Maximum | 0                        |
|                                |                                   |                          | value: 16777215          |                          |
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

