# config firewall security-policy

Configure NGFW IPv4/IPv6 application policies.

## Syntax

```
config firewall security-policy
    Description: Configure NGFW IPv4/IPv6 application policies.
    edit <policyid>
        set action [accept|deny]
        set app-category <id1>, <id2>, ...
        set app-group <name1>, <name2>, ...
        set application <id1>, <id2>, ...
        set application-list {string}
        set av-profile {string}
        set casb-profile {string}
        set comments {var-string}
        set custom-tags <name1>, <name2>, ...
        set diameter-filter-profile {string}
        set dlp-profile {string}
        set dnsfilter-profile {string}
        set dstaddr <name1>, <name2>, ...
        set dstaddr-negate [enable|disable]
        set dstaddr6 <name1>, <name2>, ...
        set dstaddr6-negate [enable|disable]
        set dstintf <name1>, <name2>, ...
        set emailfilter-profile {string}
        set enforce-default-app-port [enable|disable]
        set file-filter-profile {string}
        set fsso-groups <name1>, <name2>, ...
        set groups <name1>, <name2>, ...
        set icap-profile {string}
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
        set ips-sensor {string}
        set ips-voip-filter {string}
        set learning-mode [enable|disable]
        set llm-profile {string}
        set logtraffic [all|utm|...]
        set name {string}
        set nat46 [enable|disable]
        set nat64 [enable|disable]
        set profile-group {string}
        set profile-protocol-options {string}
        set profile-type [single|group]
        set schedule {string}
        set sctp-filter-profile {string}
        set send-deny-packet [disable|enable]
        set service <name1>, <name2>, ...
        set service-negate [enable|disable]
        set srcaddr <name1>, <name2>, ...
        set srcaddr-negate [enable|disable]
        set srcaddr6 <name1>, <name2>, ...
        set srcaddr6-negate [enable|disable]
        set srcintf <name1>, <name2>, ...
        set ssh-filter-profile {string}
        set ssl-ssh-profile {string}
        set status [enable|disable]
        set url-category {user}
        set users <name1>, <name2>, ...
        set uuid {uuid}
        set videofilter-profile {string}
        set virtual-patch-profile {string}
        set voip-profile {string}
        set webfilter-profile {string}
    next
end
```

## Parameters

+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| Parameter                          | Description                       | Type               | Size               | Default                              |
+====================================+===================================+====================+====================+======================================+
| action                             | Policy action (accept/deny).      | option             | \-                 | deny                                 |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                           |
|                                    | | Option      | Description                                            |                                           |
|                                    | +=============+========================================================+                                           |
|                                    | | *accept*    | Allows session that match the firewall policy.         |                                           |
|                                    | +-------------+--------------------------------------------------------+                                           |
|                                    | | *deny*      | Blocks sessions that match the firewall policy.        |                                           |
|                                    | +-------------+--------------------------------------------------------+                                           |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| app-category `<id>`                | Application category ID list.     | integer            | Minimum value: 0   |                                      |
|                                    |                                   |                    | Maximum value:     |                                      |
|                                    | Category IDs.                     |                    | 4294967295         |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| app-group `<name>`                 | Application group names.          | string             | Maximum length: 79 |                                      |
|                                    |                                   |                    |                    |                                      |
|                                    | Application group names.          |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| application `<id>`                 | Application ID list.              | integer            | Minimum value: 0   |                                      |
|                                    |                                   |                    | Maximum value:     |                                      |
|                                    | Application IDs.                  |                    | 4294967295         |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| application-list                   | Name of an existing Application   | string             | Maximum length: 47 |                                      |
|                                    | list.                             |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| av-profile                         | Name of an existing Antivirus     | string             | Maximum length: 47 |                                      |
|                                    | profile.                          |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| casb-profile \*                    | Name of an existing CASB profile. | string             | Maximum length: 47 |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| comments                           | Comment.                          | var-string         | Maximum length:    |                                      |
|                                    |                                   |                    | 1023               |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| custom-tags `<name>` \*            | Custom tags.                      | string             | Maximum length: 35 |                                      |
|                                    |                                   |                    |                    |                                      |
|                                    | Names of custom tags used with    |                    |                    |                                      |
|                                    | this policy.                      |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| diameter-filter-profile            | Name of an existing Diameter      | string             | Maximum length: 47 |                                      |
|                                    | filter profile.                   |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| dlp-profile                        | Name of an existing DLP profile.  | string             | Maximum length: 47 |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| dnsfilter-profile                  | Name of an existing DNS filter    | string             | Maximum length: 47 |                                      |
|                                    | profile.                          |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| dstaddr `<name>`                   | Destination IPv4 address name and | string             | Maximum length: 79 |                                      |
|                                    | address group names.              |                    |                    |                                      |
|                                    |                                   |                    |                    |                                      |
|                                    | Address name.                     |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| dstaddr-negate                     | When enabled dstaddr specifies    | option             | \-                 | disable                              |
|                                    | what the destination address must |                    |                    |                                      |
|                                    | NOT be.                           |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                           |
|                                    | | Option      | Description                                            |                                           |
|                                    | +=============+========================================================+                                           |
|                                    | | *enable*    | Enable destination address negate.                     |                                           |
|                                    | +-------------+--------------------------------------------------------+                                           |
|                                    | | *disable*   | Disable destination address negate.                    |                                           |
|                                    | +-------------+--------------------------------------------------------+                                           |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| dstaddr6 `<name>`                  | Destination IPv6 address name and | string             | Maximum length: 79 |                                      |
|                                    | address group names.              |                    |                    |                                      |
|                                    |                                   |                    |                    |                                      |
|                                    | Address name.                     |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| dstaddr6-negate                    | When enabled dstaddr6 specifies   | option             | \-                 | disable                              |
|                                    | what the destination address must |                    |                    |                                      |
|                                    | NOT be.                           |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                           |
|                                    | | Option      | Description                                            |                                           |
|                                    | +=============+========================================================+                                           |
|                                    | | *enable*    | Enable IPv6 destination address negate.                |                                           |
|                                    | +-------------+--------------------------------------------------------+                                           |
|                                    | | *disable*   | Disable IPv6 destination address negate.               |                                           |
|                                    | +-------------+--------------------------------------------------------+                                           |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| dstintf `<name>`                   | Outgoing (egress) interface.      | string             | Maximum length: 79 |                                      |
|                                    |                                   |                    |                    |                                      |
|                                    | Interface name.                   |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| emailfilter-profile                | Name of an existing email filter  | string             | Maximum length: 47 |                                      |
|                                    | profile.                          |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| enforce-default-app-port           | Enable/disable default            | option             | \-                 | enable                               |
|                                    | application port enforcement for  |                    |                    |                                      |
|                                    | allowed applications.             |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                           |
|                                    | | Option      | Description                                            |                                           |
|                                    | +=============+========================================================+                                           |
|                                    | | *enable*    | Enable setting.                                        |                                           |
|                                    | +-------------+--------------------------------------------------------+                                           |
|                                    | | *disable*   | Disable setting.                                       |                                           |
|                                    | +-------------+--------------------------------------------------------+                                           |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| file-filter-profile                | Name of an existing file-filter   | string             | Maximum length: 47 |                                      |
|                                    | profile.                          |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| fsso-groups `<name>`               | Names of FSSO groups.             | string             | Maximum length:    |                                      |
|                                    |                                   |                    | 511                |                                      |
|                                    | Names of FSSO groups.             |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| groups `<name>`                    | Names of user groups that can     | string             | Maximum length: 79 |                                      |
|                                    | authenticate with this policy.    |                    |                    |                                      |
|                                    |                                   |                    |                    |                                      |
|                                    | User group name.                  |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| icap-profile \*                    | Name of an existing ICAP profile. | string             | Maximum length: 47 |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| internet-service                   | Enable/disable use of Internet    | option             | \-                 | disable                              |
|                                    | Services for this policy. If      |                    |                    |                                      |
|                                    | enabled, destination address,     |                    |                    |                                      |
|                                    | service and default application   |                    |                    |                                      |
|                                    | port enforcement are not used.    |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                           |
|                                    | | Option      | Description                                            |                                           |
|                                    | +=============+========================================================+                                           |
|                                    | | *enable*    | Enable use of Internet Services in policy.             |                                           |
|                                    | +-------------+--------------------------------------------------------+                                           |
|                                    | | *disable*   | Disable use of Internet Services in policy.            |                                           |
|                                    | +-------------+--------------------------------------------------------+                                           |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| internet-service-custom `<name>`   | Custom Internet Service name.     | string             | Maximum length: 79 |                                      |
|                                    |                                   |                    |                    |                                      |
|                                    | Custom Internet Service name.     |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| internet-service-custom-group      | Custom Internet Service group     | string             | Maximum length: 79 |                                      |
| `<name>`                           | name.                             |                    |                    |                                      |
|                                    |                                   |                    |                    |                                      |
|                                    | Custom Internet Service group     |                    |                    |                                      |
|                                    | name.                             |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| internet-service-fortiguard        | FortiGuard Internet Service name. | string             | Maximum length: 79 |                                      |
| `<name>`                           |                                   |                    |                    |                                      |
|                                    | FortiGuard Internet Service name. |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| internet-service-group `<name>`    | Internet Service group name.      | string             | Maximum length: 79 |                                      |
|                                    |                                   |                    |                    |                                      |
|                                    | Internet Service group name.      |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| internet-service-name `<name>`     | Internet Service name.            | string             | Maximum length: 79 |                                      |
|                                    |                                   |                    |                    |                                      |
|                                    | Internet Service name.            |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| internet-service-negate            | When enabled internet-service     | option             | \-                 | disable                              |
|                                    | specifies what the service must   |                    |                    |                                      |
|                                    | NOT be.                           |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                           |
|                                    | | Option      | Description                                            |                                           |
|                                    | +=============+========================================================+                                           |
|                                    | | *enable*    | Enable negated Internet Service match.                 |                                           |
|                                    | +-------------+--------------------------------------------------------+                                           |
|                                    | | *disable*   | Disable negated Internet Service match.                |                                           |
|                                    | +-------------+--------------------------------------------------------+                                           |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| internet-service-src               | Enable/disable use of Internet    | option             | \-                 | disable                              |
|                                    | Services in source for this       |                    |                    |                                      |
|                                    | policy. If enabled, source        |                    |                    |                                      |
|                                    | address is not used.              |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                           |
|                                    | | Option      | Description                                            |                                           |
|                                    | +=============+========================================================+                                           |
|                                    | | *enable*    | Enable use of Internet Services source in policy.      |                                           |
|                                    | +-------------+--------------------------------------------------------+                                           |
|                                    | | *disable*   | Disable use of Internet Services source in policy.     |                                           |
|                                    | +-------------+--------------------------------------------------------+                                           |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| internet-service-src-custom        | Custom Internet Service source    | string             | Maximum length: 79 |                                      |
| `<name>`                           | name.                             |                    |                    |                                      |
|                                    |                                   |                    |                    |                                      |
|                                    | Custom Internet Service name.     |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| internet-service-src-custom-group  | Custom Internet Service source    | string             | Maximum length: 79 |                                      |
| `<name>`                           | group name.                       |                    |                    |                                      |
|                                    |                                   |                    |                    |                                      |
|                                    | Custom Internet Service group     |                    |                    |                                      |
|                                    | name.                             |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| internet-service-src-fortiguard    | FortiGuard Internet Service       | string             | Maximum length: 79 |                                      |
| `<name>`                           | source name.                      |                    |                    |                                      |
|                                    |                                   |                    |                    |                                      |
|                                    | FortiGuard Internet Service name. |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| internet-service-src-group         | Internet Service source group     | string             | Maximum length: 79 |                                      |
| `<name>`                           | name.                             |                    |                    |                                      |
|                                    |                                   |                    |                    |                                      |
|                                    | Internet Service group name.      |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| internet-service-src-name `<name>` | Internet Service source name.     | string             | Maximum length: 79 |                                      |
|                                    |                                   |                    |                    |                                      |
|                                    | Internet Service name.            |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| internet-service-src-negate        | When enabled internet-service-src | option             | \-                 | disable                              |
|                                    | specifies what the service must   |                    |                    |                                      |
|                                    | NOT be.                           |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                           |
|                                    | | Option      | Description                                            |                                           |
|                                    | +=============+========================================================+                                           |
|                                    | | *enable*    | Enable negated Internet Service source match.          |                                           |
|                                    | +-------------+--------------------------------------------------------+                                           |
|                                    | | *disable*   | Disable negated Internet Service source match.         |                                           |
|                                    | +-------------+--------------------------------------------------------+                                           |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| internet-service6                  | Enable/disable use of IPv6        | option             | \-                 | disable                              |
|                                    | Internet Services for this        |                    |                    |                                      |
|                                    | policy. If enabled, destination   |                    |                    |                                      |
|                                    | address, service and default      |                    |                    |                                      |
|                                    | application port enforcement are  |                    |                    |                                      |
|                                    | not used.                         |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                           |
|                                    | | Option      | Description                                            |                                           |
|                                    | +=============+========================================================+                                           |
|                                    | | *enable*    | Enable use of IPv6 Internet Services in policy.        |                                           |
|                                    | +-------------+--------------------------------------------------------+                                           |
|                                    | | *disable*   | Disable use of IPv6 Internet Services in policy.       |                                           |
|                                    | +-------------+--------------------------------------------------------+                                           |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| internet-service6-custom `<name>`  | Custom IPv6 Internet Service      | string             | Maximum length: 79 |                                      |
|                                    | name.                             |                    |                    |                                      |
|                                    |                                   |                    |                    |                                      |
|                                    | Custom IPv6 Internet Service      |                    |                    |                                      |
|                                    | name.                             |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| internet-service6-custom-group     | Custom IPv6 Internet Service      | string             | Maximum length: 79 |                                      |
| `<name>`                           | group name.                       |                    |                    |                                      |
|                                    |                                   |                    |                    |                                      |
|                                    | Custom IPv6 Internet Service      |                    |                    |                                      |
|                                    | group name.                       |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| internet-service6-fortiguard       | FortiGuard IPv6 Internet Service  | string             | Maximum length: 79 |                                      |
| `<name>`                           | name.                             |                    |                    |                                      |
|                                    |                                   |                    |                    |                                      |
|                                    | FortiGuard Internet Service name. |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| internet-service6-group `<name>`   | Internet Service group name.      | string             | Maximum length: 79 |                                      |
|                                    |                                   |                    |                    |                                      |
|                                    | Internet Service group name.      |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| internet-service6-name `<name>`    | IPv6 Internet Service name.       | string             | Maximum length: 79 |                                      |
|                                    |                                   |                    |                    |                                      |
|                                    | IPv6 Internet Service name.       |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| internet-service6-negate           | When enabled internet-service6    | option             | \-                 | disable                              |
|                                    | specifies what the service must   |                    |                    |                                      |
|                                    | NOT be.                           |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                           |
|                                    | | Option      | Description                                            |                                           |
|                                    | +=============+========================================================+                                           |
|                                    | | *enable*    | Enable negated IPv6 Internet Service match.            |                                           |
|                                    | +-------------+--------------------------------------------------------+                                           |
|                                    | | *disable*   | Disable negated IPv6 Internet Service match.           |                                           |
|                                    | +-------------+--------------------------------------------------------+                                           |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| internet-service6-src              | Enable/disable use of IPv6        | option             | \-                 | disable                              |
|                                    | Internet Services in source for   |                    |                    |                                      |
|                                    | this policy. If enabled, source   |                    |                    |                                      |
|                                    | address is not used.              |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                           |
|                                    | | Option      | Description                                            |                                           |
|                                    | +=============+========================================================+                                           |
|                                    | | *enable*    | Enable use of IPv6 Internet Services source in policy. |                                           |
|                                    | +-------------+--------------------------------------------------------+                                           |
|                                    | | *disable*   | Disable use of IPv6 Internet Services source in        |                                           |
|                                    | |             | policy.                                                |                                           |
|                                    | +-------------+--------------------------------------------------------+                                           |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| internet-service6-src-custom       | Custom IPv6 Internet Service      | string             | Maximum length: 79 |                                      |
| `<name>`                           | source name.                      |                    |                    |                                      |
|                                    |                                   |                    |                    |                                      |
|                                    | Custom Internet Service name.     |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| internet-service6-src-custom-group | Custom Internet Service6 source   | string             | Maximum length: 79 |                                      |
| `<name>`                           | group name.                       |                    |                    |                                      |
|                                    |                                   |                    |                    |                                      |
|                                    | Custom Internet Service6 group    |                    |                    |                                      |
|                                    | name.                             |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| internet-service6-src-fortiguard   | FortiGuard IPv6 Internet Service  | string             | Maximum length: 79 |                                      |
| `<name>`                           | source name.                      |                    |                    |                                      |
|                                    |                                   |                    |                    |                                      |
|                                    | FortiGuard Internet Service name. |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| internet-service6-src-group        | Internet Service6 source group    | string             | Maximum length: 79 |                                      |
| `<name>`                           | name.                             |                    |                    |                                      |
|                                    |                                   |                    |                    |                                      |
|                                    | Internet Service group name.      |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| internet-service6-src-name         | IPv6 Internet Service source      | string             | Maximum length: 79 |                                      |
| `<name>`                           | name.                             |                    |                    |                                      |
|                                    |                                   |                    |                    |                                      |
|                                    | Internet Service name.            |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| internet-service6-src-negate       | When enabled                      | option             | \-                 | disable                              |
|                                    | internet-service6-src specifies   |                    |                    |                                      |
|                                    | what the service must NOT be.     |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                           |
|                                    | | Option      | Description                                            |                                           |
|                                    | +=============+========================================================+                                           |
|                                    | | *enable*    | Enable negated IPv6 Internet Service source match.     |                                           |
|                                    | +-------------+--------------------------------------------------------+                                           |
|                                    | | *disable*   | Disable negated IPv6 Internet Service source match.    |                                           |
|                                    | +-------------+--------------------------------------------------------+                                           |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| ips-sensor                         | Name of an existing IPS sensor.   | string             | Maximum length: 47 |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| ips-voip-filter                    | Name of an existing VoIP (ips)    | string             | Maximum length: 47 |                                      |
|                                    | profile.                          |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| learning-mode                      | Enable to allow everything, but   | option             | \-                 | disable                              |
|                                    | log all of the meaningful data    |                    |                    |                                      |
|                                    | for security information          |                    |                    |                                      |
|                                    | gathering. A learning report will |                    |                    |                                      |
|                                    | be generated.                     |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                           |
|                                    | | Option      | Description                                            |                                           |
|                                    | +=============+========================================================+                                           |
|                                    | | *enable*    | Enable learning mode.                                  |                                           |
|                                    | +-------------+--------------------------------------------------------+                                           |
|                                    | | *disable*   | Disable learning mode.                                 |                                           |
|                                    | +-------------+--------------------------------------------------------+                                           |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| llm-profile \*                     | Name of an existing LLM profile.  | string             | Maximum length: 47 |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| logtraffic                         | Enable or disable logging. Log    | option             | \-                 | utm                                  |
|                                    | all sessions or security profile  |                    |                    |                                      |
|                                    | sessions.                         |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                           |
|                                    | | Option      | Description                                            |                                           |
|                                    | +=============+========================================================+                                           |
|                                    | | *all*       | Log all sessions accepted or denied by this policy.    |                                           |
|                                    | +-------------+--------------------------------------------------------+                                           |
|                                    | | *utm*       | Log traffic that has a security profile applied to it. |                                           |
|                                    | +-------------+--------------------------------------------------------+                                           |
|                                    | | *disable*   | Disable all logging for this policy.                   |                                           |
|                                    | +-------------+--------------------------------------------------------+                                           |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| name                               | Policy name.                      | string             | Maximum length: 35 |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| nat46                              | Enable/disable NAT46.             | option             | \-                 | disable                              |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                           |
|                                    | | Option      | Description                                            |                                           |
|                                    | +=============+========================================================+                                           |
|                                    | | *enable*    | Enable NAT46.                                          |                                           |
|                                    | +-------------+--------------------------------------------------------+                                           |
|                                    | | *disable*   | Disable NAT46.                                         |                                           |
|                                    | +-------------+--------------------------------------------------------+                                           |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| nat64                              | Enable/disable NAT64.             | option             | \-                 | disable                              |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                           |
|                                    | | Option      | Description                                            |                                           |
|                                    | +=============+========================================================+                                           |
|                                    | | *enable*    | Enable NAT64.                                          |                                           |
|                                    | +-------------+--------------------------------------------------------+                                           |
|                                    | | *disable*   | Disable NAT64.                                         |                                           |
|                                    | +-------------+--------------------------------------------------------+                                           |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| policyid                           | Policy ID.                        | integer            | Minimum value: 0   | 0                                    |
|                                    |                                   |                    | Maximum value:     |                                      |
|                                    |                                   |                    | 4294967294         |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| profile-group                      | Name of profile group.            | string             | Maximum length: 47 |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| profile-protocol-options           | Name of an existing Protocol      | string             | Maximum length: 47 | default                              |
|                                    | options profile.                  |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| profile-type                       | Determine whether the firewall    | option             | \-                 | single                               |
|                                    | policy allows security profile    |                    |                    |                                      |
|                                    | groups or single profiles only.   |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                           |
|                                    | | Option      | Description                                            |                                           |
|                                    | +=============+========================================================+                                           |
|                                    | | *single*    | Do not allow security profile groups.                  |                                           |
|                                    | +-------------+--------------------------------------------------------+                                           |
|                                    | | *group*     | Allow security profile groups.                         |                                           |
|                                    | +-------------+--------------------------------------------------------+                                           |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| schedule                           | Schedule name.                    | string             | Maximum length: 35 |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| sctp-filter-profile                | Name of an existing SCTP filter   | string             | Maximum length: 47 |                                      |
|                                    | profile.                          |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| send-deny-packet                   | Enable to send a reply when a     | option             | \-                 | disable                              |
|                                    | session is denied or blocked by a |                    |                    |                                      |
|                                    | firewall policy.                  |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                           |
|                                    | | Option      | Description                                            |                                           |
|                                    | +=============+========================================================+                                           |
|                                    | | *disable*   | Disable deny-packet sending.                           |                                           |
|                                    | +-------------+--------------------------------------------------------+                                           |
|                                    | | *enable*    | Enable deny-packet sending.                            |                                           |
|                                    | +-------------+--------------------------------------------------------+                                           |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| service `<name>`                   | Service and service group names.  | string             | Maximum length: 79 |                                      |
|                                    |                                   |                    |                    |                                      |
|                                    | Service name.                     |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| service-negate                     | When enabled service specifies    | option             | \-                 | disable                              |
|                                    | what the service must NOT be.     |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                           |
|                                    | | Option      | Description                                            |                                           |
|                                    | +=============+========================================================+                                           |
|                                    | | *enable*    | Enable negated service match.                          |                                           |
|                                    | +-------------+--------------------------------------------------------+                                           |
|                                    | | *disable*   | Disable negated service match.                         |                                           |
|                                    | +-------------+--------------------------------------------------------+                                           |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| srcaddr `<name>`                   | Source IPv4 address name and      | string             | Maximum length: 79 |                                      |
|                                    | address group names.              |                    |                    |                                      |
|                                    |                                   |                    |                    |                                      |
|                                    | Address name.                     |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| srcaddr-negate                     | When enabled srcaddr specifies    | option             | \-                 | disable                              |
|                                    | what the source address must NOT  |                    |                    |                                      |
|                                    | be.                               |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                           |
|                                    | | Option      | Description                                            |                                           |
|                                    | +=============+========================================================+                                           |
|                                    | | *enable*    | Enable source address negate.                          |                                           |
|                                    | +-------------+--------------------------------------------------------+                                           |
|                                    | | *disable*   | Disable source address negate.                         |                                           |
|                                    | +-------------+--------------------------------------------------------+                                           |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| srcaddr6 `<name>`                  | Source IPv6 address name and      | string             | Maximum length: 79 |                                      |
|                                    | address group names.              |                    |                    |                                      |
|                                    |                                   |                    |                    |                                      |
|                                    | Address name.                     |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| srcaddr6-negate                    | When enabled srcaddr6 specifies   | option             | \-                 | disable                              |
|                                    | what the source address must NOT  |                    |                    |                                      |
|                                    | be.                               |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                           |
|                                    | | Option      | Description                                            |                                           |
|                                    | +=============+========================================================+                                           |
|                                    | | *enable*    | Enable IPv6 source address negate.                     |                                           |
|                                    | +-------------+--------------------------------------------------------+                                           |
|                                    | | *disable*   | Disable IPv6 source address negate.                    |                                           |
|                                    | +-------------+--------------------------------------------------------+                                           |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| srcintf `<name>`                   | Incoming (ingress) interface.     | string             | Maximum length: 79 |                                      |
|                                    |                                   |                    |                    |                                      |
|                                    | Interface name.                   |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| ssh-filter-profile \*              | Name of an existing SSH filter    | string             | Maximum length: 47 |                                      |
|                                    | profile.                          |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| ssl-ssh-profile                    | Name of an existing SSL SSH       | string             | Maximum length: 47 | no-inspection                        |
|                                    | profile.                          |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| status                             | Enable or disable this policy.    | option             | \-                 | enable                               |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                                    | +-------------+--------------------------------------------------------+                                           |
|                                    | | Option      | Description                                            |                                           |
|                                    | +=============+========================================================+                                           |
|                                    | | *enable*    | Enable setting.                                        |                                           |
|                                    | +-------------+--------------------------------------------------------+                                           |
|                                    | | *disable*   | Disable setting.                                       |                                           |
|                                    | +-------------+--------------------------------------------------------+                                           |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| url-category                       | URL categories or groups.         | user               | Not Specified      |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| users `<name>`                     | Names of individual users that    | string             | Maximum length: 79 |                                      |
|                                    | can authenticate with this        |                    |                    |                                      |
|                                    | policy.                           |                    |                    |                                      |
|                                    |                                   |                    |                    |                                      |
|                                    | User name.                        |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| uuid                               | Universally Unique Identifier     | uuid               | Not Specified      | 00000000-0000-0000-0000-000000000000 |
|                                    | (UUID; automatically assigned but |                    |                    |                                      |
|                                    | can be manually reset).           |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| videofilter-profile \*             | Name of an existing VideoFilter   | string             | Maximum length: 47 |                                      |
|                                    | profile.                          |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| virtual-patch-profile              | Name of an existing virtual-patch | string             | Maximum length: 47 |                                      |
|                                    | profile.                          |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| voip-profile                       | Name of an existing VoIP (voipd)  | string             | Maximum length: 47 |                                      |
|                                    | profile.                          |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| webfilter-profile                  | Name of an existing Web filter    | string             | Maximum length: 47 |                                      |
|                                    | profile.                          |                    |                    |                                      |
+------------------------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+

