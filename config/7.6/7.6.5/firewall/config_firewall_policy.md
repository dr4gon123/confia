# config firewall policy

Configure IPv4/IPv6 policies.

## Syntax

```
config firewall policy
    Description: Configure IPv4/IPv6 policies.
    edit <policyid>
        set action [accept|deny|...]
        set anti-replay [enable|disable]
        set app-monitor [enable|disable]
        set application-list {string}
        set auth-cert {string}
        set auth-path [enable|disable]
        set auth-redirect-addr {string}
        set auto-asic-offload [enable|disable]
        set av-profile {string}
        set block-notification [enable|disable]
        set captive-portal-exempt [enable|disable]
        set capture-packet [enable|disable]
        set casb-profile {string}
        set comments {var-string}
        set custom-log-fields <field-id1>, <field-id2>, ...
        set decrypted-traffic-mirror {string}
        set delay-tcp-npu-session [enable|disable]
        set diameter-filter-profile {string}
        set diffserv-copy [enable|disable]
        set diffserv-forward [enable|disable]
        set diffserv-reverse [enable|disable]
        set diffservcode-forward {user}
        set diffservcode-rev {user}
        set disclaimer [enable|disable]
        set dlp-profile {string}
        set dnsfilter-profile {string}
        set dsri [enable|disable]
        set dstaddr <name1>, <name2>, ...
        set dstaddr-negate [enable|disable]
        set dstaddr6 <name1>, <name2>, ...
        set dstaddr6-negate [enable|disable]
        set dstintf <name1>, <name2>, ...
        set dynamic-shaping [enable|disable]
        set email-collect [enable|disable]
        set emailfilter-profile {string}
        set fec [enable|disable]
        set file-filter-profile {string}
        set firewall-session-dirty [check-all|check-new]
        set fixedport [enable|disable]
        set fsso-agent-for-ntlm {string}
        set fsso-groups <name1>, <name2>, ...
        set geoip-anycast [enable|disable]
        set geoip-match [physical-location|registered-location]
        set groups <name1>, <name2>, ...
        set http-policy-redirect [enable|disable|...]
        set icap-profile {string}
        set identity-based-route {string}
        set inbound [enable|disable]
        set inspection-mode [proxy|flow]
        set internet-service [enable|disable]
        set internet-service-custom <name1>, <name2>, ...
        set internet-service-custom-group <name1>, <name2>, ...
        set internet-service-fortiguard <name1>, <name2>, ...
        set internet-service-group <name1>, <name2>, ...
        set internet-service-name <name1>, <name2>, ...
        set internet-service-negate [enable|disable]
        set internet-service-src [enable|disable]
        set internet-service-src-custom <name1>, <name2>, ...
        set internet-service-src-custom-group <name1>, <name2>, ...
        set internet-service-src-fortiguard <name1>, <name2>, ...
        set internet-service-src-group <name1>, <name2>, ...
        set internet-service-src-name <name1>, <name2>, ...
        set internet-service-src-negate [enable|disable]
        set internet-service6 [enable|disable]
        set internet-service6-custom <name1>, <name2>, ...
        set internet-service6-custom-group <name1>, <name2>, ...
        set internet-service6-fortiguard <name1>, <name2>, ...
        set internet-service6-group <name1>, <name2>, ...
        set internet-service6-name <name1>, <name2>, ...
        set internet-service6-negate [enable|disable]
        set internet-service6-src [enable|disable]
        set internet-service6-src-custom <name1>, <name2>, ...
        set internet-service6-src-custom-group <name1>, <name2>, ...
        set internet-service6-src-fortiguard <name1>, <name2>, ...
        set internet-service6-src-group <name1>, <name2>, ...
        set internet-service6-src-name <name1>, <name2>, ...
        set internet-service6-src-negate [enable|disable]
        set ippool [enable|disable]
        set ips-sensor {string}
        set ips-voip-filter {string}
        set log-http-transaction [enable|disable]
        set logtraffic [all|utm|...]
        set logtraffic-start [enable|disable]
        set match-vip [enable|disable]
        set match-vip-only [enable|disable]
        set name {string}
        set nat [enable|disable]
        set nat46 [enable|disable]
        set nat64 [enable|disable]
        set natinbound [enable|disable]
        set natip {ipv4-classnet}
        set natoutbound [enable|disable]
        set network-service-dynamic <name1>, <name2>, ...
        set network-service-src-dynamic <name1>, <name2>, ...
        set np-acceleration [enable|disable]
        set ntlm [enable|disable]
        set ntlm-enabled-browsers <user-agent-string1>, <user-agent-string2>, ...
        set ntlm-guest [enable|disable]
        set outbound [enable|disable]
        set passive-wan-health-measurement [enable|disable]
        set pcp-inbound [enable|disable]
        set pcp-outbound [enable|disable]
        set pcp-poolname <name1>, <name2>, ...
        set per-ip-shaper {string}
        set permit-any-host [enable|disable]
        set permit-stun-host [enable|disable]
        set policy-expiry [enable|disable]
        set policy-expiry-date {datetime}
        set policy-expiry-date-utc {user}
        set poolname <name1>, <name2>, ...
        set poolname6 <name1>, <name2>, ...
        set port-preserve [enable|disable]
        set port-random [enable|disable]
        set profile-group {string}
        set profile-protocol-options {string}
        set profile-type [single|group]
        set radius-ip-auth-bypass [enable|disable]
        set radius-mac-auth-bypass [enable|disable]
        set redirect-url {var-string}
        set replacemsg-override-group {string}
        set reputation-direction [source|destination]
        set reputation-direction6 [source|destination]
        set reputation-minimum {integer}
        set reputation-minimum6 {integer}
        set rtp-addr <name1>, <name2>, ...
        set rtp-nat [disable|enable]
        set schedule {string}
        set schedule-timeout [enable|disable]
        set sctp-filter-profile {string}
        set send-deny-packet [disable|enable]
        set service <name1>, <name2>, ...
        set service-negate [enable|disable]
        set session-ttl {user}
        set sgt <id1>, <id2>, ...
        set sgt-check [enable|disable]
        set src-vendor-mac <id1>, <id2>, ...
        set srcaddr <name1>, <name2>, ...
        set srcaddr-negate [enable|disable]
        set srcaddr6 <name1>, <name2>, ...
        set srcaddr6-negate [enable|disable]
        set srcintf <name1>, <name2>, ...
        set ssh-filter-profile {string}
        set ssh-policy-redirect [enable|disable]
        set ssl-ssh-profile {string}
        set status [enable|disable]
        set tcp-mss-receiver {integer}
        set tcp-mss-sender {integer}
        set tcp-session-without-syn [all|data-only|...]
        set telemetry-profile {string}
        set timeout-send-rst [enable|disable]
        set tos {user}
        set tos-mask {user}
        set tos-negate [enable|disable]
        set traffic-shaper {string}
        set traffic-shaper-reverse {string}
        set users <name1>, <name2>, ...
        set utm-status [enable|disable]
        set uuid {uuid}
        set videofilter-profile {string}
        set virtual-patch-profile {string}
        set vlan-cos-fwd {integer}
        set vlan-cos-rev {integer}
        set vlan-filter {user}
        set voip-profile {string}
        set vpntunnel {string}
        set waf-profile {string}
        set wanopt [enable|disable]
        set wanopt-detection [active|passive|...]
        set wanopt-passive-opt [default|transparent|...]
        set wanopt-peer {string}
        set wanopt-profile {string}
        set wccp [enable|disable]
        set webcache [enable|disable]
        set webcache-https [disable|enable]
        set webfilter-profile {string}
        set webproxy-forward-server {string}
        set webproxy-profile {string}
        set ztna-device-ownership [enable|disable]
        set ztna-ems-tag <name1>, <name2>, ...
        set ztna-ems-tag-negate [enable|disable]
        set ztna-ems-tag-secondary <name1>, <name2>, ...
        set ztna-geo-tag <name1>, <name2>, ...
        set ztna-policy-redirect [enable|disable]
        set ztna-status [enable|disable]
        set ztna-tags-match-logic [or|and]
    next
end
```

## Parameters

+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| Parameter                          | Description                       | Type                   | Size                   | Default                              |
+====================================+===================================+========================+========================+======================================+
| action                             | Policy action                     | option                 | \-                     | deny                                 |
|                                    | (accept/deny/ipsec).              |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *accept*    | Allows session that match the firewall policy.         |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *deny*      | Blocks sessions that match the firewall policy.        |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *ipsec*     | Firewall policy becomes a policy-based IPsec VPN       |                                                   |
|                                    | |             | policy.                                                |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| anti-replay                        | Enable/disable anti-replay check. | option                 | \-                     | enable                               |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable anti-replay check.                              |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable anti-replay check.                             |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| app-monitor                        | Enable/disable application TCP    | option                 | \-                     | disable                              |
|                                    | metrics in session logs.When      |                        |                        |                                      |
|                                    | enabled, auto-asic-offload is     |                        |                        |                                      |
|                                    | disabled.                         |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable TCP metrics in session logs.                    |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable TCP metrics in session logs.                   |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| application-list                   | Name of an existing Application   | string                 | Maximum length: 47     |                                      |
|                                    | list.                             |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| auth-cert                          | HTTPS server certificate for      | string                 | Maximum length: 35     |                                      |
|                                    | policy authentication.            |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| auth-path                          | Enable/disable                    | option                 | \-                     | disable                              |
|                                    | authentication-based routing.     |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable authentication-based routing.                   |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable authentication-based routing.                  |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| auth-redirect-addr                 | HTTP-to-HTTPS redirect address    | string                 | Maximum length: 63     |                                      |
|                                    | for firewall authentication.      |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| auto-asic-offload                  | Enable/disable policy traffic     | option                 | \-                     | enable                               |
|                                    | ASIC offloading.                  |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable auto ASIC offloading.                           |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable ASIC offloading.                               |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| av-profile                         | Name of an existing Antivirus     | string                 | Maximum length: 47     |                                      |
|                                    | profile.                          |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| block-notification                 | Enable/disable block              | option                 | \-                     | disable                              |
|                                    | notification.                     |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable setting.                                        |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable setting.                                       |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| captive-portal-exempt              | Enable to exempt some users from  | option                 | \-                     | disable                              |
|                                    | the captive portal.               |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable exemption of captive portal.                    |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable exemption of captive portal.                   |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| capture-packet \*                  | Enable/disable capture packets.   | option                 | \-                     | disable                              |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable capture packets.                                |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable capture packets.                               |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| casb-profile                       | Name of an existing CASB profile. | string                 | Maximum length: 47     |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| comments                           | Comment.                          | var-string             | Maximum length: 1023   |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| custom-log-fields `<field-id>`     | Custom fields to append to log    | string                 | Maximum length: 35     |                                      |
|                                    | messages for this policy.         |                        |                        |                                      |
|                                    |                                   |                        |                        |                                      |
|                                    | Custom log field.                 |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| decrypted-traffic-mirror           | Decrypted traffic mirror.         | string                 | Maximum length: 35     |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| delay-tcp-npu-session              | Enable TCP NPU session delay to   | option                 | \-                     | disable                              |
|                                    | guarantee packet order of 3-way   |                        |                        |                                      |
|                                    | handshake.                        |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable TCP NPU session delay in order to guarantee     |                                                   |
|                                    | |             | packet order of 3-way handshake.                       |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable TCP NPU session delay in order to guarantee    |                                                   |
|                                    | |             | packet order of 3-way handshake.                       |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| diameter-filter-profile            | Name of an existing Diameter      | string                 | Maximum length: 47     |                                      |
|                                    | filter profile.                   |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| diffserv-copy                      | Enable to copy packet\'s DiffServ | option                 | \-                     | disable                              |
|                                    | values from session\'s original   |                        |                        |                                      |
|                                    | direction to its reply direction. |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable DSCP copy.                                      |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable DSCP copy.                                     |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| diffserv-forward                   | Enable to change packet\'s        | option                 | \-                     | disable                              |
|                                    | DiffServ values to the specified  |                        |                        |                                      |
|                                    | diffservcode-forward value.       |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable setting forward (original) traffic Diffserv.    |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable setting forward (original) traffic Diffserv.   |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| diffserv-reverse                   | Enable to change packet\'s        | option                 | \-                     | disable                              |
|                                    | reverse (reply) DiffServ values   |                        |                        |                                      |
|                                    | to the specified diffservcode-rev |                        |                        |                                      |
|                                    | value.                            |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable setting reverse (reply) traffic DiffServ.       |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable setting reverse (reply) traffic DiffServ.      |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| diffservcode-forward               | Change packet\'s DiffServ to this | user                   | Not Specified          |                                      |
|                                    | value.                            |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| diffservcode-rev                   | Change packet\'s reverse (reply)  | user                   | Not Specified          |                                      |
|                                    | DiffServ to this value.           |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| disclaimer                         | Enable/disable user               | option                 | \-                     | disable                              |
|                                    | authentication disclaimer.        |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable user authentication disclaimer.                 |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable user authentication disclaimer.                |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| dlp-profile                        | Name of an existing DLP profile.  | string                 | Maximum length: 47     |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| dnsfilter-profile                  | Name of an existing DNS filter    | string                 | Maximum length: 47     |                                      |
|                                    | profile.                          |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| dsri                               | Enable DSRI to ignore HTTP server | option                 | \-                     | disable                              |
|                                    | responses.                        |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable DSRI.                                           |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable DSRI.                                          |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| dstaddr `<name>`                   | Destination IPv4 address and      | string                 | Maximum length: 79     |                                      |
|                                    | address group names.              |                        |                        |                                      |
|                                    |                                   |                        |                        |                                      |
|                                    | Address name.                     |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| dstaddr-negate                     | When enabled dstaddr specifies    | option                 | \-                     | disable                              |
|                                    | what the destination address must |                        |                        |                                      |
|                                    | NOT be.                           |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable destination address negate.                     |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable destination address negate.                    |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| dstaddr6 `<name>`                  | Destination IPv6 address name and | string                 | Maximum length: 79     |                                      |
|                                    | address group names.              |                        |                        |                                      |
|                                    |                                   |                        |                        |                                      |
|                                    | Address name.                     |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| dstaddr6-negate                    | When enabled dstaddr6 specifies   | option                 | \-                     | disable                              |
|                                    | what the destination address must |                        |                        |                                      |
|                                    | NOT be.                           |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable IPv6 destination address negate.                |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable IPv6 destination address negate.               |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| dstintf `<name>`                   | Outgoing (egress) interface.      | string                 | Maximum length: 79     |                                      |
|                                    |                                   |                        |                        |                                      |
|                                    | Interface name.                   |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| dynamic-shaping                    | Enable/disable dynamic RADIUS     | option                 | \-                     | disable                              |
|                                    | defined traffic shaping.          |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable dynamic RADIUS defined traffic shaping.         |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable dynamic RADIUS defined traffic shaping.        |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| email-collect                      | Enable/disable email collection.  | option                 | \-                     | disable                              |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable email collection.                               |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable email collection.                              |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| emailfilter-profile                | Name of an existing email filter  | string                 | Maximum length: 47     |                                      |
|                                    | profile.                          |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| fec                                | Enable/disable Forward Error      | option                 | \-                     | disable                              |
|                                    | Correction on traffic matching    |                        |                        |                                      |
|                                    | this policy on a FEC device.      |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable Forward Error Correction.                       |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable Forward Error Correction.                      |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| file-filter-profile                | Name of an existing file-filter   | string                 | Maximum length: 47     |                                      |
|                                    | profile.                          |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| firewall-session-dirty             | How to handle sessions if the     | option                 | \-                     | check-all                            |
|                                    | configuration of this firewall    |                        |                        |                                      |
|                                    | policy changes.                   |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *check-all* | Flush all current sessions accepted by this policy.    |                                                   |
|                                    | |             | These sessions must be started and re-matched with     |                                                   |
|                                    | |             | policies.                                              |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *check-new* | Continue to allow sessions already accepted by this    |                                                   |
|                                    | |             | policy.                                                |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| fixedport                          | Enable to prevent source NAT from | option                 | \-                     | disable                              |
|                                    | changing a session\'s source      |                        |                        |                                      |
|                                    | port.                             |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable setting.                                        |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable setting.                                       |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| fsso-agent-for-ntlm                | FSSO agent to use for NTLM        | string                 | Maximum length: 35     |                                      |
|                                    | authentication.                   |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| fsso-groups `<name>`               | Names of FSSO groups.             | string                 | Maximum length: 511    |                                      |
|                                    |                                   |                        |                        |                                      |
|                                    | Names of FSSO groups.             |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| geoip-anycast                      | Enable/disable recognition of     | option                 | \-                     | disable                              |
|                                    | anycast IP addresses using the    |                        |                        |                                      |
|                                    | geography IP database.            |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable recognition of anycast IP addresses using the   |                                                   |
|                                    | |             | geography IP database.                                 |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable recognition of anycast IP addresses using the  |                                                   |
|                                    | |             | geography IP database.                                 |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| geoip-match                        | Match geography address based     | option                 | \-                     | physical-location                    |
|                                    | either on its physical location   |                        |                        |                                      |
|                                    | or registered location.           |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-----------------------+--------------------------------------------------------+                                         |
|                                    | | Option                | Description                                            |                                         |
|                                    | +=======================+========================================================+                                         |
|                                    | | *physical-location*   | Match geography address to its physical location using |                                         |
|                                    | |                       | the geography IP database.                             |                                         |
|                                    | +-----------------------+--------------------------------------------------------+                                         |
|                                    | | *registered-location* | Match geography address to its registered location     |                                         |
|                                    | |                       | using the geography IP database.                       |                                         |
|                                    | +-----------------------+--------------------------------------------------------+                                         |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| groups `<name>`                    | Names of user groups that can     | string                 | Maximum length: 79     |                                      |
|                                    | authenticate with this policy.    |                        |                        |                                      |
|                                    |                                   |                        |                        |                                      |
|                                    | Group name.                       |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| http-policy-redirect               | Redirect HTTP(S) traffic to       | option                 | \-                     | disable                              |
|                                    | matching transparent web proxy    |                        |                        |                                      |
|                                    | policy.                           |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable HTTP(S) policy redirect.                        |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable HTTP(S) policy redirect.                       |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *legacy*    | Enable HTTP(S) policy redirect (for preserving old     |                                                   |
|                                    | |             | behavior, not recommended for new setups).             |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| icap-profile                       | Name of an existing ICAP profile. | string                 | Maximum length: 47     |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| identity-based-route               | Name of identity-based routing    | string                 | Maximum length: 35     |                                      |
|                                    | rule.                             |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| inbound                            | Policy-based IPsec VPN: only      | option                 | \-                     | disable                              |
|                                    | traffic from the remote network   |                        |                        |                                      |
|                                    | can initiate a VPN.               |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable setting.                                        |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable setting.                                       |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| inspection-mode                    | Policy inspection mode            | option                 | \-                     | flow                                 |
|                                    | (Flow/proxy). Default is Flow     |                        |                        |                                      |
|                                    | mode.                             |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *proxy*     | Proxy based inspection.                                |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *flow*      | Flow based inspection.                                 |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| internet-service                   | Enable/disable use of Internet    | option                 | \-                     | disable                              |
|                                    | Services for this policy. If      |                        |                        |                                      |
|                                    | enabled, destination address and  |                        |                        |                                      |
|                                    | service are not used.             |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable use of Internet Services in policy.             |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable use of Internet Services in policy.            |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| internet-service-custom `<name>`   | Custom Internet Service name.     | string                 | Maximum length: 79     |                                      |
|                                    |                                   |                        |                        |                                      |
|                                    | Custom Internet Service name.     |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| internet-service-custom-group      | Custom Internet Service group     | string                 | Maximum length: 79     |                                      |
| `<name>`                           | name.                             |                        |                        |                                      |
|                                    |                                   |                        |                        |                                      |
|                                    | Custom Internet Service group     |                        |                        |                                      |
|                                    | name.                             |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| internet-service-fortiguard        | FortiGuard Internet Service name. | string                 | Maximum length: 79     |                                      |
| `<name>`                           |                                   |                        |                        |                                      |
|                                    | FortiGuard Internet Service name. |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| internet-service-group `<name>`    | Internet Service group name.      | string                 | Maximum length: 79     |                                      |
|                                    |                                   |                        |                        |                                      |
|                                    | Internet Service group name.      |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| internet-service-name `<name>`     | Internet Service name.            | string                 | Maximum length: 79     |                                      |
|                                    |                                   |                        |                        |                                      |
|                                    | Internet Service name.            |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| internet-service-negate            | When enabled internet-service     | option                 | \-                     | disable                              |
|                                    | specifies what the service must   |                        |                        |                                      |
|                                    | NOT be.                           |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable negated Internet Service match.                 |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable negated Internet Service match.                |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| internet-service-src               | Enable/disable use of Internet    | option                 | \-                     | disable                              |
|                                    | Services in source for this       |                        |                        |                                      |
|                                    | policy. If enabled, source        |                        |                        |                                      |
|                                    | address is not used.              |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable use of Internet Services source in policy.      |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable use of Internet Services source in policy.     |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| internet-service-src-custom        | Custom Internet Service source    | string                 | Maximum length: 79     |                                      |
| `<name>`                           | name.                             |                        |                        |                                      |
|                                    |                                   |                        |                        |                                      |
|                                    | Custom Internet Service name.     |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| internet-service-src-custom-group  | Custom Internet Service source    | string                 | Maximum length: 79     |                                      |
| `<name>`                           | group name.                       |                        |                        |                                      |
|                                    |                                   |                        |                        |                                      |
|                                    | Custom Internet Service group     |                        |                        |                                      |
|                                    | name.                             |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| internet-service-src-fortiguard    | FortiGuard Internet Service       | string                 | Maximum length: 79     |                                      |
| `<name>`                           | source name.                      |                        |                        |                                      |
|                                    |                                   |                        |                        |                                      |
|                                    | FortiGuard Internet Service name. |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| internet-service-src-group         | Internet Service source group     | string                 | Maximum length: 79     |                                      |
| `<name>`                           | name.                             |                        |                        |                                      |
|                                    |                                   |                        |                        |                                      |
|                                    | Internet Service group name.      |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| internet-service-src-name `<name>` | Internet Service source name.     | string                 | Maximum length: 79     |                                      |
|                                    |                                   |                        |                        |                                      |
|                                    | Internet Service name.            |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| internet-service-src-negate        | When enabled internet-service-src | option                 | \-                     | disable                              |
|                                    | specifies what the service must   |                        |                        |                                      |
|                                    | NOT be.                           |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable negated Internet Service source match.          |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable negated Internet Service source match.         |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| internet-service6                  | Enable/disable use of IPv6        | option                 | \-                     | disable                              |
|                                    | Internet Services for this        |                        |                        |                                      |
|                                    | policy. If enabled, destination   |                        |                        |                                      |
|                                    | address and service are not used. |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable use of IPv6 Internet Services in policy.        |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable use of IPv6 Internet Services in policy.       |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| internet-service6-custom `<name>`  | Custom IPv6 Internet Service      | string                 | Maximum length: 79     |                                      |
|                                    | name.                             |                        |                        |                                      |
|                                    |                                   |                        |                        |                                      |
|                                    | Custom Internet Service name.     |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| internet-service6-custom-group     | Custom Internet Service6 group    | string                 | Maximum length: 79     |                                      |
| `<name>`                           | name.                             |                        |                        |                                      |
|                                    |                                   |                        |                        |                                      |
|                                    | Custom Internet Service6 group    |                        |                        |                                      |
|                                    | name.                             |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| internet-service6-fortiguard       | FortiGuard IPv6 Internet Service  | string                 | Maximum length: 79     |                                      |
| `<name>`                           | name.                             |                        |                        |                                      |
|                                    |                                   |                        |                        |                                      |
|                                    | FortiGuard Internet Service name. |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| internet-service6-group `<name>`   | Internet Service group name.      | string                 | Maximum length: 79     |                                      |
|                                    |                                   |                        |                        |                                      |
|                                    | Internet Service group name.      |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| internet-service6-name `<name>`    | IPv6 Internet Service name.       | string                 | Maximum length: 79     |                                      |
|                                    |                                   |                        |                        |                                      |
|                                    | IPv6 Internet Service name.       |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| internet-service6-negate           | When enabled internet-service6    | option                 | \-                     | disable                              |
|                                    | specifies what the service must   |                        |                        |                                      |
|                                    | NOT be.                           |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable negated IPv6 Internet Service match.            |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable negated IPv6 Internet Service match.           |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| internet-service6-src              | Enable/disable use of IPv6        | option                 | \-                     | disable                              |
|                                    | Internet Services in source for   |                        |                        |                                      |
|                                    | this policy. If enabled, source   |                        |                        |                                      |
|                                    | address is not used.              |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable use of IPv6 Internet Services source in policy. |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable use of IPv6 Internet Services source in        |                                                   |
|                                    | |             | policy.                                                |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| internet-service6-src-custom       | Custom IPv6 Internet Service      | string                 | Maximum length: 79     |                                      |
| `<name>`                           | source name.                      |                        |                        |                                      |
|                                    |                                   |                        |                        |                                      |
|                                    | Custom Internet Service name.     |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| internet-service6-src-custom-group | Custom Internet Service6 source   | string                 | Maximum length: 79     |                                      |
| `<name>`                           | group name.                       |                        |                        |                                      |
|                                    |                                   |                        |                        |                                      |
|                                    | Custom Internet Service6 group    |                        |                        |                                      |
|                                    | name.                             |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| internet-service6-src-fortiguard   | FortiGuard IPv6 Internet Service  | string                 | Maximum length: 79     |                                      |
| `<name>`                           | source name.                      |                        |                        |                                      |
|                                    |                                   |                        |                        |                                      |
|                                    | FortiGuard Internet Service name. |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| internet-service6-src-group        | Internet Service6 source group    | string                 | Maximum length: 79     |                                      |
| `<name>`                           | name.                             |                        |                        |                                      |
|                                    |                                   |                        |                        |                                      |
|                                    | Internet Service group name.      |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| internet-service6-src-name         | IPv6 Internet Service source      | string                 | Maximum length: 79     |                                      |
| `<name>`                           | name.                             |                        |                        |                                      |
|                                    |                                   |                        |                        |                                      |
|                                    | Internet Service name.            |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| internet-service6-src-negate       | When enabled                      | option                 | \-                     | disable                              |
|                                    | internet-service6-src specifies   |                        |                        |                                      |
|                                    | what the service must NOT be.     |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable negated IPv6 Internet Service source match.     |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable negated IPv6 Internet Service source match.    |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ippool                             | Enable to use IP Pools for source | option                 | \-                     | disable                              |
|                                    | NAT.                              |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable setting.                                        |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable setting.                                       |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ips-sensor                         | Name of an existing IPS sensor.   | string                 | Maximum length: 47     |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ips-voip-filter                    | Name of an existing VoIP (ips)    | string                 | Maximum length: 47     |                                      |
|                                    | profile.                          |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| log-http-transaction               | Enable/disable HTTP transaction   | option                 | \-                     | disable                              |
|                                    | log.                              |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable HTTP transaction log.                           |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable HTTP transaction log.                          |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| logtraffic                         | Enable or disable logging. Log    | option                 | \-                     | utm                                  |
|                                    | all sessions or security profile  |                        |                        |                                      |
|                                    | sessions.                         |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *all*       | Log all sessions accepted or denied by this policy.    |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *utm*       | Log traffic that has a security profile applied to it. |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable all logging for this policy.                   |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| logtraffic-start                   | Record logs when a session        | option                 | \-                     | disable                              |
|                                    | starts.                           |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable setting.                                        |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable setting.                                       |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| match-vip                          | Enable to match packets that have | option                 | \-                     | enable                               |
|                                    | had their destination addresses   |                        |                        |                                      |
|                                    | changed by a VIP.                 |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Match DNATed packet.                                   |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Do not match DNATed packet.                            |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| match-vip-only                     | Enable/disable matching of only   | option                 | \-                     | disable                              |
|                                    | those packets that have had their |                        |                        |                                      |
|                                    | destination addresses changed by  |                        |                        |                                      |
|                                    | a VIP.                            |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable matching of only those packets that have had    |                                                   |
|                                    | |             | their destination addresses changed by a VIP.          |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable matching of only those packets that have had   |                                                   |
|                                    | |             | their destination addresses changed by a VIP.          |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| name                               | Policy name.                      | string                 | Maximum length: 35     |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| nat                                | Enable/disable source NAT.        | option                 | \-                     | disable                              |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable setting.                                        |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable setting.                                       |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| nat46                              | Enable/disable NAT46.             | option                 | \-                     | disable                              |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable NAT46.                                          |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable NAT46.                                         |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| nat64                              | Enable/disable NAT64.             | option                 | \-                     | disable                              |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable NAT64.                                          |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable NAT64.                                         |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| natinbound                         | Policy-based IPsec VPN: apply     | option                 | \-                     | disable                              |
|                                    | destination NAT to inbound        |                        |                        |                                      |
|                                    | traffic.                          |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable setting.                                        |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable setting.                                       |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| natip                              | Policy-based IPsec VPN: source    | ipv4-classnet          | Not Specified          | 0.0.0.0 0.0.0.0                      |
|                                    | NAT IP address for outgoing       |                        |                        |                                      |
|                                    | traffic.                          |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| natoutbound                        | Policy-based IPsec VPN: apply     | option                 | \-                     | disable                              |
|                                    | source NAT to outbound traffic.   |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable setting.                                        |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable setting.                                       |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| network-service-dynamic `<name>`   | Dynamic Network Service name.     | string                 | Maximum length: 79     |                                      |
|                                    |                                   |                        |                        |                                      |
|                                    | Dynamic Network Service name.     |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| network-service-src-dynamic        | Dynamic Network Service source    | string                 | Maximum length: 79     |                                      |
| `<name>`                           | name.                             |                        |                        |                                      |
|                                    |                                   |                        |                        |                                      |
|                                    | Dynamic Network Service name.     |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| np-acceleration \*                 | Enable/disable UTM Network        | option                 | \-                     | enable                               |
|                                    | Processor acceleration.           |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable UTM Network Processor acceleration.             |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable UTM Network Processor acceleration.            |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ntlm                               | Enable/disable NTLM               | option                 | \-                     | disable                              |
|                                    | authentication.                   |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable setting.                                        |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable setting.                                       |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ntlm-enabled-browsers              | HTTP-User-Agent value of          | string                 | Maximum length: 79     |                                      |
| `<user-agent-string>`              | supported browsers.               |                        |                        |                                      |
|                                    |                                   |                        |                        |                                      |
|                                    | User agent string.                |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ntlm-guest                         | Enable/disable NTLM guest user    | option                 | \-                     | disable                              |
|                                    | access.                           |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable setting.                                        |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable setting.                                       |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| outbound                           | Policy-based IPsec VPN: only      | option                 | \-                     | enable                               |
|                                    | traffic from the internal network |                        |                        |                                      |
|                                    | can initiate a VPN.               |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable setting.                                        |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable setting.                                       |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| passive-wan-health-measurement     | Enable/disable passive WAN health | option                 | \-                     | disable                              |
|                                    | measurement. When enabled,        |                        |                        |                                      |
|                                    | auto-asic-offload is disabled.    |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable Passive WAN health measurement.                 |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable Passive WAN health measurement.                |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| pcp-inbound                        | Enable/disable PCP inbound DNAT.  | option                 | \-                     | disable                              |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable PCP inbound DNAT.                               |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable PCP inbound DNAT.                              |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| pcp-outbound                       | Enable/disable PCP outbound SNAT. | option                 | \-                     | disable                              |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable PCP outbound SNAT.                              |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable PCP outbound SNAT.                             |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| pcp-poolname `<name>`              | PCP pool names.                   | string                 | Maximum length: 79     |                                      |
|                                    |                                   |                        |                        |                                      |
|                                    | PCP pool name.                    |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| per-ip-shaper                      | Per-IP traffic shaper.            | string                 | Maximum length: 35     |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| permit-any-host                    | Enable/disable fullcone NAT.      | option                 | \-                     | disable                              |
|                                    | Accept UDP packets from any host. |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable setting.                                        |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable setting.                                       |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| permit-stun-host                   | Accept UDP packets from any       | option                 | \-                     | disable                              |
|                                    | Session Traversal Utilities for   |                        |                        |                                      |
|                                    | NAT (STUN) host.                  |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable setting.                                        |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable setting.                                       |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| policy-expiry                      | Enable/disable policy expiry.     | option                 | \-                     | disable                              |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable policy expiry.                                  |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable polcy expiry.                                  |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| policy-expiry-date                 | Policy expiry date (YYYY-MM-DD    | datetime               | Not Specified          | 0000-00-00 00:00:00                  |
|                                    | HH:MM:SS).                        |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| policy-expiry-date-utc             | Policy expiry date and time, in   | user                   | Not Specified          |                                      |
|                                    | epoch format.                     |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| policyid                           | Policy ID (0 - 4294967294).       | integer                | Minimum value: 0       | 0                                    |
|                                    |                                   |                        | Maximum value:         |                                      |
|                                    |                                   |                        | 4294967294             |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| poolname `<name>`                  | IP Pool names.                    | string                 | Maximum length: 79     |                                      |
|                                    |                                   |                        |                        |                                      |
|                                    | IP pool name.                     |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| poolname6 `<name>`                 | IPv6 pool names.                  | string                 | Maximum length: 79     |                                      |
|                                    |                                   |                        |                        |                                      |
|                                    | IPv6 pool name.                   |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| port-preserve                      | Enable/disable preservation of    | option                 | \-                     | enable                               |
|                                    | the original source port from     |                        |                        |                                      |
|                                    | source NAT if it has not been     |                        |                        |                                      |
|                                    | used.                             |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Use the original source port if it has not been used.  |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Source NAT always changes the source port.             |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| port-random                        | Enable/disable random source port | option                 | \-                     | disable                              |
|                                    | selection for source NAT.         |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable random source port selection for source NAT.    |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable random source port selection for source NAT.   |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| profile-group                      | Name of profile group.            | string                 | Maximum length: 47     |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| profile-protocol-options           | Name of an existing Protocol      | string                 | Maximum length: 47     | default                              |
|                                    | options profile.                  |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| profile-type                       | Determine whether the firewall    | option                 | \-                     | single                               |
|                                    | policy allows security profile    |                        |                        |                                      |
|                                    | groups or single profiles only.   |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *single*    | Do not allow security profile groups.                  |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *group*     | Allow security profile groups.                         |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| radius-ip-auth-bypass              | Enable IP authentication bypass.  | option                 | \-                     | disable                              |
|                                    | The bypassed IP address must be   |                        |                        |                                      |
|                                    | received from RADIUS server.      |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable IP authentication bypass.                       |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable IP authentication bypass.                      |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| radius-mac-auth-bypass             | Enable MAC authentication bypass. | option                 | \-                     | disable                              |
|                                    | The bypassed MAC address must be  |                        |                        |                                      |
|                                    | received from RADIUS server.      |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable MAC authentication bypass.                      |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable MAC authentication bypass.                     |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| redirect-url                       | URL users are directed to after   | var-string             | Maximum length: 1023   |                                      |
|                                    | seeing and accepting the          |                        |                        |                                      |
|                                    | disclaimer or authenticating.     |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| replacemsg-override-group          | Override the default replacement  | string                 | Maximum length: 35     |                                      |
|                                    | message group for this policy.    |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| reputation-direction               | Direction of the initial traffic  | option                 | \-                     | destination                          |
|                                    | for reputation to take effect.    |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +---------------+--------------------------------------------------------+                                                 |
|                                    | | Option        | Description                                            |                                                 |
|                                    | +===============+========================================================+                                                 |
|                                    | | *source*      | Check reputation for source address.                   |                                                 |
|                                    | +---------------+--------------------------------------------------------+                                                 |
|                                    | | *destination* | Check reputation for destination address.              |                                                 |
|                                    | +---------------+--------------------------------------------------------+                                                 |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| reputation-direction6              | Direction of the initial traffic  | option                 | \-                     | destination                          |
|                                    | for IPv6 reputation to take       |                        |                        |                                      |
|                                    | effect.                           |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +---------------+--------------------------------------------------------+                                                 |
|                                    | | Option        | Description                                            |                                                 |
|                                    | +===============+========================================================+                                                 |
|                                    | | *source*      | Check reputation for IPv6 source address.              |                                                 |
|                                    | +---------------+--------------------------------------------------------+                                                 |
|                                    | | *destination* | Check reputation for IPv6 destination address.         |                                                 |
|                                    | +---------------+--------------------------------------------------------+                                                 |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| reputation-minimum                 | Minimum Reputation to take        | integer                | Minimum value: 0       | 0                                    |
|                                    | action.                           |                        | Maximum value:         |                                      |
|                                    |                                   |                        | 4294967295             |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| reputation-minimum6                | IPv6 Minimum Reputation to take   | integer                | Minimum value: 0       | 0                                    |
|                                    | action.                           |                        | Maximum value:         |                                      |
|                                    |                                   |                        | 4294967295             |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| rtp-addr `<name>`                  | Address names if this is an RTP   | string                 | Maximum length: 79     |                                      |
|                                    | NAT policy.                       |                        |                        |                                      |
|                                    |                                   |                        |                        |                                      |
|                                    | Address name.                     |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| rtp-nat                            | Enable Real Time Protocol (RTP)   | option                 | \-                     | disable                              |
|                                    | NAT.                              |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *disable*   | Disable setting.                                       |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *enable*    | Enable setting.                                        |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| schedule                           | Schedule name.                    | string                 | Maximum length: 35     |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| schedule-timeout                   | Enable to force current sessions  | option                 | \-                     | disable                              |
|                                    | to end when the schedule object   |                        |                        |                                      |
|                                    | times out. Disable allows them to |                        |                        |                                      |
|                                    | end from inactivity.              |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable schedule timeout.                               |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable schedule timeout.                              |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| sctp-filter-profile                | Name of an existing SCTP filter   | string                 | Maximum length: 47     |                                      |
|                                    | profile.                          |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| send-deny-packet                   | Enable to send a reply when a     | option                 | \-                     | disable                              |
|                                    | session is denied or blocked by a |                        |                        |                                      |
|                                    | firewall policy.                  |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *disable*   | Disable deny-packet sending.                           |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *enable*    | Enable deny-packet sending.                            |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| service `<name>`                   | Service and service group names.  | string                 | Maximum length: 79     |                                      |
|                                    |                                   |                        |                        |                                      |
|                                    | Service and service group names.  |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| service-negate                     | When enabled service specifies    | option                 | \-                     | disable                              |
|                                    | what the service must NOT be.     |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable negated service match.                          |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable negated service match.                         |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| session-ttl                        | TTL in seconds for sessions       | user                   | Not Specified          |                                      |
|                                    | accepted by this policy (0 means  |                        |                        |                                      |
|                                    | use the system default session    |                        |                        |                                      |
|                                    | TTL).                             |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| sgt `<id>`                         | Security group tags.              | integer                | Minimum value: 1       |                                      |
|                                    |                                   |                        | Maximum value: 65535   |                                      |
|                                    | Security group tag (1 - 65535).   |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| sgt-check                          | Enable/disable security group     | option                 | \-                     | disable                              |
|                                    | tags (SGT) check.                 |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable SGT check.                                      |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable SGT check.                                     |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| src-vendor-mac `<id>`              | Vendor MAC source ID.             | integer                | Minimum value: 0       |                                      |
|                                    |                                   |                        | Maximum value:         |                                      |
|                                    | Vendor MAC ID.                    |                        | 4294967295             |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| srcaddr `<name>`                   | Source IPv4 address and address   | string                 | Maximum length: 79     |                                      |
|                                    | group names.                      |                        |                        |                                      |
|                                    |                                   |                        |                        |                                      |
|                                    | Address name.                     |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| srcaddr-negate                     | When enabled srcaddr specifies    | option                 | \-                     | disable                              |
|                                    | what the source address must NOT  |                        |                        |                                      |
|                                    | be.                               |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable source address negate.                          |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable source address negate.                         |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| srcaddr6 `<name>`                  | Source IPv6 address name and      | string                 | Maximum length: 79     |                                      |
|                                    | address group names.              |                        |                        |                                      |
|                                    |                                   |                        |                        |                                      |
|                                    | Address name.                     |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| srcaddr6-negate                    | When enabled srcaddr6 specifies   | option                 | \-                     | disable                              |
|                                    | what the source address must NOT  |                        |                        |                                      |
|                                    | be.                               |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable IPv6 source address negate.                     |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable IPv6 source address negate.                    |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| srcintf `<name>`                   | Incoming (ingress) interface.     | string                 | Maximum length: 79     |                                      |
|                                    |                                   |                        |                        |                                      |
|                                    | Interface name.                   |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssh-filter-profile                 | Name of an existing SSH filter    | string                 | Maximum length: 47     |                                      |
|                                    | profile.                          |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssh-policy-redirect                | Redirect SSH traffic to matching  | option                 | \-                     | disable                              |
|                                    | transparent proxy policy.         |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable SSH policy redirect.                            |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable SSH policy redirect.                           |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ssl-ssh-profile                    | Name of an existing SSL SSH       | string                 | Maximum length: 47     | no-inspection                        |
|                                    | profile.                          |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| status                             | Enable or disable this policy.    | option                 | \-                     | enable                               |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable setting.                                        |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable setting.                                       |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| tcp-mss-receiver                   | Receiver TCP maximum segment size | integer                | Minimum value: 0       | 0                                    |
|                                    | (MSS).                            |                        | Maximum value: 65535   |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| tcp-mss-sender                     | Sender TCP maximum segment size   | integer                | Minimum value: 0       | 0                                    |
|                                    | (MSS).                            |                        | Maximum value: 65535   |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| tcp-session-without-syn            | Enable/disable creation of TCP    | option                 | \-                     | disable                              |
|                                    | session without SYN flag.         |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *all*       | Enable TCP session without SYN.                        |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *data-only* | Enable TCP session data only.                          |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable TCP session without SYN.                       |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| telemetry-profile \*               | Name of an existing telemetry     | string                 | Maximum length: 47     |                                      |
|                                    | profile.                          |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| timeout-send-rst                   | Enable/disable sending RST        | option                 | \-                     | disable                              |
|                                    | packets when TCP sessions expire. |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable sending of RST packet upon TCP session          |                                                   |
|                                    | |             | expiration.                                            |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable sending of RST packet upon TCP session         |                                                   |
|                                    | |             | expiration.                                            |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| tos                                | ToS (Type of Service) value used  | user                   | Not Specified          |                                      |
|                                    | for comparison.                   |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| tos-mask                           | Non-zero bit positions are used   | user                   | Not Specified          |                                      |
|                                    | for comparison while zero bit     |                        |                        |                                      |
|                                    | positions are ignored.            |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| tos-negate                         | Enable negated TOS match.         | option                 | \-                     | disable                              |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable TOS match negate.                               |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable TOS match negate.                              |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| traffic-shaper                     | Traffic shaper.                   | string                 | Maximum length: 35     |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| traffic-shaper-reverse             | Reverse traffic shaper.           | string                 | Maximum length: 35     |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| users `<name>`                     | Names of individual users that    | string                 | Maximum length: 79     |                                      |
|                                    | can authenticate with this        |                        |                        |                                      |
|                                    | policy.                           |                        |                        |                                      |
|                                    |                                   |                        |                        |                                      |
|                                    | Names of individual users that    |                        |                        |                                      |
|                                    | can authenticate with this        |                        |                        |                                      |
|                                    | policy.                           |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| utm-status                         | Enable to add one or more         | option                 | \-                     | disable                              |
|                                    | security profiles (AV, IPS, etc.) |                        |                        |                                      |
|                                    | to the firewall policy.           |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable setting.                                        |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable setting.                                       |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| uuid                               | Universally Unique Identifier     | uuid                   | Not Specified          | 00000000-0000-0000-0000-000000000000 |
|                                    | (UUID; automatically assigned but |                        |                        |                                      |
|                                    | can be manually reset).           |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| videofilter-profile                | Name of an existing VideoFilter   | string                 | Maximum length: 47     |                                      |
|                                    | profile.                          |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| virtual-patch-profile              | Name of an existing virtual-patch | string                 | Maximum length: 47     |                                      |
|                                    | profile.                          |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| vlan-cos-fwd                       | VLAN forward direction user       | integer                | Minimum value: 0       | 255                                  |
|                                    | priority: 255 passthrough, 0      |                        | Maximum value: 7       |                                      |
|                                    | lowest, 7 highest.                |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| vlan-cos-rev                       | VLAN reverse direction user       | integer                | Minimum value: 0       | 255                                  |
|                                    | priority: 255 passthrough, 0      |                        | Maximum value: 7       |                                      |
|                                    | lowest, 7 highest.                |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| vlan-filter                        | VLAN ranges to allow              | user                   | Not Specified          |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| voip-profile                       | Name of an existing VoIP (voipd)  | string                 | Maximum length: 47     |                                      |
|                                    | profile.                          |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| vpntunnel                          | Policy-based IPsec VPN: name of   | string                 | Maximum length: 35     |                                      |
|                                    | the IPsec VPN Phase 1.            |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| waf-profile                        | Name of an existing Web           | string                 | Maximum length: 47     |                                      |
|                                    | application firewall profile.     |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| wanopt \*                          | Enable/disable WAN optimization.  | option                 | \-                     | disable                              |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable setting.                                        |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable setting.                                       |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| wanopt-detection \*                | WAN optimization auto-detection   | option                 | \-                     | active                               |
|                                    | mode.                             |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *active*    | Active WAN optimization peer auto-detection.           |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *passive*   | Passive WAN optimization peer auto-detection.          |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *off*       | Turn off WAN optimization peer auto-detection.         |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| wanopt-passive-opt \*              | WAN optimization passive mode     | option                 | \-                     | default                              |
|                                    | options. This option decides what |                        |                        |                                      |
|                                    | IP address will be used to        |                        |                        |                                      |
|                                    | connect server.                   |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------------+--------------------------------------------------------+                                             |
|                                    | | Option            | Description                                            |                                             |
|                                    | +===================+========================================================+                                             |
|                                    | | *default*         | Allow client side WAN opt peer to decide.              |                                             |
|                                    | +-------------------+--------------------------------------------------------+                                             |
|                                    | | *transparent*     | Use address of client to connect to server.            |                                             |
|                                    | +-------------------+--------------------------------------------------------+                                             |
|                                    | | *non-transparent* | Use local FortiGate address to connect to server.      |                                             |
|                                    | +-------------------+--------------------------------------------------------+                                             |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| wanopt-peer \*                     | WAN optimization peer.            | string                 | Maximum length: 35     |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| wanopt-profile \*                  | WAN optimization profile.         | string                 | Maximum length: 35     |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| wccp                               | Enable/disable forwarding traffic | option                 | \-                     | disable                              |
|                                    | matching this policy to a         |                        |                        |                                      |
|                                    | configured WCCP server.           |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable WCCP setting.                                   |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable WCCP setting.                                  |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| webcache \*                        | Enable/disable web cache.         | option                 | \-                     | disable                              |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable setting.                                        |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable setting.                                       |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| webcache-https \*                  | Enable/disable web cache for      | option                 | \-                     | disable                              |
|                                    | HTTPS.                            |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *disable*   | Disable web cache for HTTPS.                           |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *enable*    | Enable web cache for HTTPS.                            |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| webfilter-profile                  | Name of an existing Web filter    | string                 | Maximum length: 47     |                                      |
|                                    | profile.                          |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| webproxy-forward-server            | Webproxy forward server name.     | string                 | Maximum length: 63     |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| webproxy-profile                   | Webproxy profile name.            | string                 | Maximum length: 63     |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ztna-device-ownership              | Enable/disable zero trust device  | option                 | \-                     | disable                              |
|                                    | ownership.                        |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable ZTNA device ownership check.                    |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable ZTNA device ownership check.                   |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ztna-ems-tag `<name>`              | Source ztna-ems-tag names.        | string                 | Maximum length: 79     |                                      |
|                                    |                                   |                        |                        |                                      |
|                                    | Address name.                     |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ztna-ems-tag-negate                | When enabled ztna-ems-tag         | option                 | \-                     | disable                              |
|                                    | specifies what the tags must NOT  |                        |                        |                                      |
|                                    | be.                               |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable ZTNA EMS tags negate.                           |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable ZTNA EMS tags negate.                          |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ztna-ems-tag-secondary `<name>`    | Source ztna-ems-tag-secondary     | string                 | Maximum length: 79     |                                      |
|                                    | names.                            |                        |                        |                                      |
|                                    |                                   |                        |                        |                                      |
|                                    | Address name.                     |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ztna-geo-tag `<name>`              | Source ztna-geo-tag names.        | string                 | Maximum length: 79     |                                      |
|                                    |                                   |                        |                        |                                      |
|                                    | Address name.                     |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ztna-policy-redirect               | Redirect ZTNA traffic to matching | option                 | \-                     | disable                              |
|                                    | Access-Proxy proxy-policy.        |                        |                        |                                      |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable ZTNA proxy-policy redirect.                     |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable ZTNA proxy-policy redirect.                    |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ztna-status                        | Enable/disable zero trust access. | option                 | \-                     | disable                              |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *enable*    | Enable zero trust network access.                      |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *disable*   | Disable zero trust network access.                     |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
| ztna-tags-match-logic              | ZTNA tag matching logic.          | option                 | \-                     | or                                   |
+------------------------------------+-----------------------------------+------------------------+------------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | Option      | Description                                            |                                                   |
|                                    | +=============+========================================================+                                                   |
|                                    | | *or*        | Match ZTNA tags using a logical OR operator.           |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
|                                    | | *and*       | Match ZTNA tags using a logical AND operator.          |                                                   |
|                                    | +-------------+--------------------------------------------------------+                                                   |
+------------------------------------+----------------------------------------------------------------------------------------------------------------------------+

