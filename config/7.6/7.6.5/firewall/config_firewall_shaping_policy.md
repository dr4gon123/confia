# config firewall shaping-policy

Configure shaping policies.

## Syntax

```
config firewall shaping-policy
    Description: Configure shaping policies.
    edit <id>
        set app-category <id1>, <id2>, ...
        set app-group <name1>, <name2>, ...
        set application <id1>, <id2>, ...
        set class-id {integer}
        set comment {var-string}
        set cos {user}
        set cos-mask {user}
        set diffserv-forward [enable|disable]
        set diffserv-reverse [enable|disable]
        set diffservcode-forward {user}
        set diffservcode-rev {user}
        set dstaddr <name1>, <name2>, ...
        set dstaddr6 <name1>, <name2>, ...
        set dstintf <name1>, <name2>, ...
        set groups <name1>, <name2>, ...
        set internet-service [enable|disable]
        set internet-service-custom <name1>, <name2>, ...
        set internet-service-custom-group <name1>, <name2>, ...
        set internet-service-fortiguard <name1>, <name2>, ...
        set internet-service-group <name1>, <name2>, ...
        set internet-service-name <name1>, <name2>, ...
        set internet-service-src [enable|disable]
        set internet-service-src-custom <name1>, <name2>, ...
        set internet-service-src-custom-group <name1>, <name2>, ...
        set internet-service-src-fortiguard <name1>, <name2>, ...
        set internet-service-src-group <name1>, <name2>, ...
        set internet-service-src-name <name1>, <name2>, ...
        set ip-version [4|6]
        set name {string}
        set per-ip-shaper {string}
        set schedule {string}
        set service <name1>, <name2>, ...
        set srcaddr <name1>, <name2>, ...
        set srcaddr6 <name1>, <name2>, ...
        set srcintf <name1>, <name2>, ...
        set status [enable|disable]
        set tos {user}
        set tos-mask {user}
        set tos-negate [enable|disable]
        set traffic-shaper {string}
        set traffic-shaper-reverse {string}
        set traffic-type [forwarding|local-in|...]
        set url-category <id1>, <id2>, ...
        set users <name1>, <name2>, ...
        set uuid {uuid}
    next
end
```

## Parameters

+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| Parameter                         | Description                       | Type                | Size                | Default                              |
+===================================+===================================+=====================+=====================+======================================+
| app-category `<id>`               | IDs of one or more application    | integer             | Minimum value: 0    |                                      |
|                                   | categories that this shaper       |                     | Maximum value:      |                                      |
|                                   | applies application control       |                     | 4294967295          |                                      |
|                                   | traffic shaping to.               |                     |                     |                                      |
|                                   |                                   |                     |                     |                                      |
|                                   | Category IDs.                     |                     |                     |                                      |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| app-group `<name>`                | One or more application group     | string              | Maximum length: 79  |                                      |
|                                   | names.                            |                     |                     |                                      |
|                                   |                                   |                     |                     |                                      |
|                                   | Application group name.           |                     |                     |                                      |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| application `<id>`                | IDs of one or more applications   | integer             | Minimum value: 0    |                                      |
|                                   | that this shaper applies          |                     | Maximum value:      |                                      |
|                                   | application control traffic       |                     | 4294967295          |                                      |
|                                   | shaping to.                       |                     |                     |                                      |
|                                   |                                   |                     |                     |                                      |
|                                   | Application IDs.                  |                     |                     |                                      |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| class-id                          | Traffic class ID.                 | integer             | Minimum value: 0    | 0                                    |
|                                   |                                   |                     | Maximum value:      |                                      |
|                                   |                                   |                     | 4294967295          |                                      |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| comment                           | Comments.                         | var-string          | Maximum length: 255 |                                      |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| cos                               | VLAN CoS bit pattern.             | user                | Not Specified       |                                      |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| cos-mask                          | VLAN CoS evaluated bits.          | user                | Not Specified       |                                      |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| diffserv-forward                  | Enable to change packet\'s        | option              | \-                  | disable                              |
|                                   | DiffServ values to the specified  |                     |                     |                                      |
|                                   | diffservcode-forward value.       |                     |                     |                                      |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
|                                   | +-------------+--------------------------------------------------------+                                             |
|                                   | | Option      | Description                                            |                                             |
|                                   | +=============+========================================================+                                             |
|                                   | | *enable*    | Enable setting forward (original) traffic DiffServ.    |                                             |
|                                   | +-------------+--------------------------------------------------------+                                             |
|                                   | | *disable*   | Disable setting forward (original) traffic DiffServ.   |                                             |
|                                   | +-------------+--------------------------------------------------------+                                             |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| diffserv-reverse                  | Enable to change packet\'s        | option              | \-                  | disable                              |
|                                   | reverse (reply) DiffServ values   |                     |                     |                                      |
|                                   | to the specified diffservcode-rev |                     |                     |                                      |
|                                   | value.                            |                     |                     |                                      |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
|                                   | +-------------+--------------------------------------------------------+                                             |
|                                   | | Option      | Description                                            |                                             |
|                                   | +=============+========================================================+                                             |
|                                   | | *enable*    | Enable setting reverse (reply) traffic DiffServ.       |                                             |
|                                   | +-------------+--------------------------------------------------------+                                             |
|                                   | | *disable*   | Disable setting reverse (reply) traffic DiffServ.      |                                             |
|                                   | +-------------+--------------------------------------------------------+                                             |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| diffservcode-forward              | Change packet\'s DiffServ to this | user                | Not Specified       |                                      |
|                                   | value.                            |                     |                     |                                      |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| diffservcode-rev                  | Change packet\'s reverse (reply)  | user                | Not Specified       |                                      |
|                                   | DiffServ to this value.           |                     |                     |                                      |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| dstaddr `<name>`                  | IPv4 destination address and      | string              | Maximum length: 79  |                                      |
|                                   | address group names.              |                     |                     |                                      |
|                                   |                                   |                     |                     |                                      |
|                                   | Address name.                     |                     |                     |                                      |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| dstaddr6 `<name>`                 | IPv6 destination address and      | string              | Maximum length: 79  |                                      |
|                                   | address group names.              |                     |                     |                                      |
|                                   |                                   |                     |                     |                                      |
|                                   | Address name.                     |                     |                     |                                      |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| dstintf `<name>`                  | One or more outgoing (egress)     | string              | Maximum length: 79  |                                      |
|                                   | interfaces.                       |                     |                     |                                      |
|                                   |                                   |                     |                     |                                      |
|                                   | Interface name.                   |                     |                     |                                      |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| groups `<name>`                   | Apply this traffic shaping policy | string              | Maximum length: 79  |                                      |
|                                   | to user groups that have          |                     |                     |                                      |
|                                   | authenticated with the FortiGate. |                     |                     |                                      |
|                                   |                                   |                     |                     |                                      |
|                                   | Group name.                       |                     |                     |                                      |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| id                                | Shaping policy ID (0 -            | integer             | Minimum value: 0    | 0                                    |
|                                   | 4294967295).                      |                     | Maximum value:      |                                      |
|                                   |                                   |                     | 4294967295          |                                      |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| internet-service                  | Enable/disable use of Internet    | option              | \-                  | disable                              |
|                                   | Services for this policy. If      |                     |                     |                                      |
|                                   | enabled, destination address and  |                     |                     |                                      |
|                                   | service are not used.             |                     |                     |                                      |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
|                                   | +-------------+--------------------------------------------------------+                                             |
|                                   | | Option      | Description                                            |                                             |
|                                   | +=============+========================================================+                                             |
|                                   | | *enable*    | Enable use of Internet Service in shaping-policy.      |                                             |
|                                   | +-------------+--------------------------------------------------------+                                             |
|                                   | | *disable*   | Disable use of Internet Service in shaping-policy.     |                                             |
|                                   | +-------------+--------------------------------------------------------+                                             |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| internet-service-custom `<name>`  | Custom Internet Service name.     | string              | Maximum length: 79  |                                      |
|                                   |                                   |                     |                     |                                      |
|                                   | Custom Internet Service name.     |                     |                     |                                      |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| internet-service-custom-group     | Custom Internet Service group     | string              | Maximum length: 79  |                                      |
| `<name>`                          | name.                             |                     |                     |                                      |
|                                   |                                   |                     |                     |                                      |
|                                   | Custom Internet Service group     |                     |                     |                                      |
|                                   | name.                             |                     |                     |                                      |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| internet-service-fortiguard       | FortiGuard Internet Service name. | string              | Maximum length: 79  |                                      |
| `<name>`                          |                                   |                     |                     |                                      |
|                                   | FortiGuard Internet Service name. |                     |                     |                                      |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| internet-service-group `<name>`   | Internet Service group name.      | string              | Maximum length: 79  |                                      |
|                                   |                                   |                     |                     |                                      |
|                                   | Internet Service group name.      |                     |                     |                                      |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| internet-service-name `<name>`    | Internet Service ID.              | string              | Maximum length: 79  |                                      |
|                                   |                                   |                     |                     |                                      |
|                                   | Internet Service name.            |                     |                     |                                      |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| internet-service-src              | Enable/disable use of Internet    | option              | \-                  | disable                              |
|                                   | Services in source for this       |                     |                     |                                      |
|                                   | policy. If enabled, source        |                     |                     |                                      |
|                                   | address is not used.              |                     |                     |                                      |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
|                                   | +-------------+--------------------------------------------------------+                                             |
|                                   | | Option      | Description                                            |                                             |
|                                   | +=============+========================================================+                                             |
|                                   | | *enable*    | Enable use of Internet Service source in               |                                             |
|                                   | |             | shaping-policy.                                        |                                             |
|                                   | +-------------+--------------------------------------------------------+                                             |
|                                   | | *disable*   | Disable use of Internet Service source in              |                                             |
|                                   | |             | shaping-policy.                                        |                                             |
|                                   | +-------------+--------------------------------------------------------+                                             |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| internet-service-src-custom       | Custom Internet Service source    | string              | Maximum length: 79  |                                      |
| `<name>`                          | name.                             |                     |                     |                                      |
|                                   |                                   |                     |                     |                                      |
|                                   | Custom Internet Service name.     |                     |                     |                                      |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| internet-service-src-custom-group | Custom Internet Service source    | string              | Maximum length: 79  |                                      |
| `<name>`                          | group name.                       |                     |                     |                                      |
|                                   |                                   |                     |                     |                                      |
|                                   | Custom Internet Service group     |                     |                     |                                      |
|                                   | name.                             |                     |                     |                                      |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| internet-service-src-fortiguard   | FortiGuard Internet Service       | string              | Maximum length: 79  |                                      |
| `<name>`                          | source name.                      |                     |                     |                                      |
|                                   |                                   |                     |                     |                                      |
|                                   | FortiGuard Internet Service name. |                     |                     |                                      |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| internet-service-src-group        | Internet Service source group     | string              | Maximum length: 79  |                                      |
| `<name>`                          | name.                             |                     |                     |                                      |
|                                   |                                   |                     |                     |                                      |
|                                   | Internet Service group name.      |                     |                     |                                      |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| internet-service-src-name         | Internet Service source name.     | string              | Maximum length: 79  |                                      |
| `<name>`                          |                                   |                     |                     |                                      |
|                                   | Internet Service name.            |                     |                     |                                      |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| ip-version                        | Apply this traffic shaping policy | option              | \-                  | 4                                    |
|                                   | to IPv4 or IPv6 traffic.          |                     |                     |                                      |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
|                                   | +-------------+--------------------------------------------------------+                                             |
|                                   | | Option      | Description                                            |                                             |
|                                   | +=============+========================================================+                                             |
|                                   | | *4*         | Use IPv4 addressing for Configuration Method.          |                                             |
|                                   | +-------------+--------------------------------------------------------+                                             |
|                                   | | *6*         | Use IPv6 addressing for Configuration Method.          |                                             |
|                                   | +-------------+--------------------------------------------------------+                                             |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| name                              | Shaping policy name.              | string              | Maximum length: 35  |                                      |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| per-ip-shaper                     | Per-IP traffic shaper to apply    | string              | Maximum length: 35  |                                      |
|                                   | with this policy.                 |                     |                     |                                      |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| schedule                          | Schedule name.                    | string              | Maximum length: 35  |                                      |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| service `<name>`                  | Service and service group names.  | string              | Maximum length: 79  |                                      |
|                                   |                                   |                     |                     |                                      |
|                                   | Service name.                     |                     |                     |                                      |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| srcaddr `<name>`                  | IPv4 source address and address   | string              | Maximum length: 79  |                                      |
|                                   | group names.                      |                     |                     |                                      |
|                                   |                                   |                     |                     |                                      |
|                                   | Address name.                     |                     |                     |                                      |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| srcaddr6 `<name>`                 | IPv6 source address and address   | string              | Maximum length: 79  |                                      |
|                                   | group names.                      |                     |                     |                                      |
|                                   |                                   |                     |                     |                                      |
|                                   | Address name.                     |                     |                     |                                      |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| srcintf `<name>`                  | One or more incoming (ingress)    | string              | Maximum length: 79  |                                      |
|                                   | interfaces.                       |                     |                     |                                      |
|                                   |                                   |                     |                     |                                      |
|                                   | Interface name.                   |                     |                     |                                      |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| status                            | Enable/disable this traffic       | option              | \-                  | enable                               |
|                                   | shaping policy.                   |                     |                     |                                      |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
|                                   | +-------------+--------------------------------------------------------+                                             |
|                                   | | Option      | Description                                            |                                             |
|                                   | +=============+========================================================+                                             |
|                                   | | *enable*    | Enable traffic shaping policy.                         |                                             |
|                                   | +-------------+--------------------------------------------------------+                                             |
|                                   | | *disable*   | Disable traffic shaping policy.                        |                                             |
|                                   | +-------------+--------------------------------------------------------+                                             |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| tos                               | ToS (Type of Service) value used  | user                | Not Specified       |                                      |
|                                   | for comparison.                   |                     |                     |                                      |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| tos-mask                          | Non-zero bit positions are used   | user                | Not Specified       |                                      |
|                                   | for comparison while zero bit     |                     |                     |                                      |
|                                   | positions are ignored.            |                     |                     |                                      |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| tos-negate                        | Enable negated TOS match.         | option              | \-                  | disable                              |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
|                                   | +-------------+--------------------------------------------------------+                                             |
|                                   | | Option      | Description                                            |                                             |
|                                   | +=============+========================================================+                                             |
|                                   | | *enable*    | Enable TOS match negate.                               |                                             |
|                                   | +-------------+--------------------------------------------------------+                                             |
|                                   | | *disable*   | Disable TOS match negate.                              |                                             |
|                                   | +-------------+--------------------------------------------------------+                                             |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| traffic-shaper                    | Traffic shaper to apply to        | string              | Maximum length: 35  |                                      |
|                                   | traffic forwarded by the firewall |                     |                     |                                      |
|                                   | policy.                           |                     |                     |                                      |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| traffic-shaper-reverse            | Traffic shaper to apply to        | string              | Maximum length: 35  |                                      |
|                                   | response traffic received by the  |                     |                     |                                      |
|                                   | firewall policy.                  |                     |                     |                                      |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| traffic-type                      | Traffic type.                     | option              | \-                  | forwarding                           |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
|                                   | +--------------+--------------------------------------------------------+                                            |
|                                   | | Option       | Description                                            |                                            |
|                                   | +==============+========================================================+                                            |
|                                   | | *forwarding* | Forwarding traffic.                                    |                                            |
|                                   | +--------------+--------------------------------------------------------+                                            |
|                                   | | *local-in*   | Local-in traffic.                                      |                                            |
|                                   | +--------------+--------------------------------------------------------+                                            |
|                                   | | *local-out*  | Local-out traffic.                                     |                                            |
|                                   | +--------------+--------------------------------------------------------+                                            |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| url-category `<id>`               | IDs of one or more FortiGuard Web | integer             | Minimum value: 0    |                                      |
|                                   | Filtering categories that this    |                     | Maximum value:      |                                      |
|                                   | shaper applies traffic shaping    |                     | 4294967295          |                                      |
|                                   | to.                               |                     |                     |                                      |
|                                   |                                   |                     |                     |                                      |
|                                   | URL category ID.                  |                     |                     |                                      |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| users `<name>`                    | Apply this traffic shaping policy | string              | Maximum length: 79  |                                      |
|                                   | to individual users that have     |                     |                     |                                      |
|                                   | authenticated with the FortiGate. |                     |                     |                                      |
|                                   |                                   |                     |                     |                                      |
|                                   | User name.                        |                     |                     |                                      |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+
| uuid                              | Universally Unique Identifier     | uuid                | Not Specified       | 00000000-0000-0000-0000-000000000000 |
|                                   | (UUID; automatically assigned but |                     |                     |                                      |
|                                   | can be manually reset).           |                     |                     |                                      |
+-----------------------------------+-----------------------------------+---------------------+---------------------+--------------------------------------+

