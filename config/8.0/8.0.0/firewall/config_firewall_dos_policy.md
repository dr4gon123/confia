# config firewall DoS-policy

Configure IPv4 DoS policies.

## Syntax

```
config firewall DoS-policy
    Description: Configure IPv4 DoS policies.
    edit <policyid>
        config anomaly
            Description: Anomaly name.
            edit <name>
                set action [pass|block]
                set log [enable|disable]
                set quarantine [none|attacker]
                set quarantine-expiry {user}
                set quarantine-log [disable|enable]
                set status [disable|enable]
                set threshold {integer}
                set threshold(default) {integer}
            next
        end
        set comments {var-string}
        set custom-tags <name1>, <name2>, ...
        set dstaddr <name1>, <name2>, ...
        set interface {string}
        set name {string}
        set service <name1>, <name2>, ...
        set srcaddr <name1>, <name2>, ...
        set status [enable|disable]
    next
end
```

## Parameters

+-------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter   | Description                       | Type               | Size               | Default            |
+=============+===================================+====================+====================+====================+
| comments    | Comment.                          | var-string         | Maximum length:    |                    |
|             |                                   |                    | 1023               |                    |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+
| custom-tags | Custom tags.                      | string             | Maximum length: 35 |                    |
| `<name>` \* |                                   |                    |                    |                    |
|             | Names of custom tags used with    |                    |                    |                    |
|             | this policy.                      |                    |                    |                    |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+
| dstaddr     | Destination address name from     | string             | Maximum length: 79 |                    |
| `<name>`    | available addresses.              |                    |                    |                    |
|             |                                   |                    |                    |                    |
|             | Address name.                     |                    |                    |                    |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+
| interface   | Incoming interface name from      | string             | Maximum length: 35 |                    |
|             | available interfaces.             |                    |                    |                    |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+
| name        | Policy name.                      | string             | Maximum length: 35 |                    |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+
| policyid    | Policy ID.                        | integer            | Minimum value: 0   | 0                  |
|             |                                   |                    | Maximum value:     |                    |
|             |                                   |                    | 9999 \*\*          |                    |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+
| service     | Service object from available     | string             | Maximum length: 79 |                    |
| `<name>`    | options.                          |                    |                    |                    |
|             |                                   |                    |                    |                    |
|             | Service name.                     |                    |                    |                    |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+
| srcaddr     | Source address name from          | string             | Maximum length: 79 |                    |
| `<name>`    | available addresses.              |                    |                    |                    |
|             |                                   |                    |                    |                    |
|             | Address name.                     |                    |                    |                    |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+
| status      | Enable/disable this policy.       | option             | \-                 | enable             |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+
|             | +-------------+--------------------------------------------------------+                         |
|             | | Option      | Description                                            |                         |
|             | +=============+========================================================+                         |
|             | | *enable*    | Enable this policy.                                    |                         |
|             | +-------------+--------------------------------------------------------+                         |
|             | | *disable*   | Disable this policy.                                   |                         |
|             | +-------------+--------------------------------------------------------+                         |
+-------------+--------------------------------------------------------------------------------------------------+

