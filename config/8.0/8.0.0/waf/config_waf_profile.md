# config waf profile

Configure Web application firewall configuration.

## Syntax

```
config waf profile
    Description: Configure Web application firewall configuration.
    edit <name>
        config address-list
            Description: Address block and allow lists.
            set blocked-address <name1>, <name2>, ...
            set blocked-log [enable|disable]
            set severity [high|medium|...]
            set status [enable|disable]
            set trusted-address <name1>, <name2>, ...
        end
        set comment {var-string}
        config constraint
            Description: WAF HTTP protocol restrictions.
            config content-length
                Description: HTTP content length in request.
                set action [allow|block]
                set length {integer}
                set log [enable|disable]
                set severity [high|medium|...]
                set status [enable|disable]
            end
            config exception
                Description: HTTP constraint exception.
                edit <id>
                    set address {string}
                    set content-length [enable|disable]
                    set header-length [enable|disable]
                    set hostname [enable|disable]
                    set line-length [enable|disable]
                    set malformed [enable|disable]
                    set max-cookie [enable|disable]
                    set max-header-line [enable|disable]
                    set max-range-segment [enable|disable]
                    set max-url-param [enable|disable]
                    set method [enable|disable]
                    set param-length [enable|disable]
                    set pattern {string}
                    set regex [enable|disable]
                    set url-param-length [enable|disable]
                    set version [enable|disable]
                next
            end
            config header-length
                Description: HTTP header length in request.
                set action [allow|block]
                set length {integer}
                set log [enable|disable]
                set severity [high|medium|...]
                set status [enable|disable]
            end
            config hostname
                Description: Enable/disable hostname check.
                set action [allow|block]
                set log [enable|disable]
                set severity [high|medium|...]
                set status [enable|disable]
            end
            config line-length
                Description: HTTP line length in request.
                set action [allow|block]
                set length {integer}
                set log [enable|disable]
                set severity [high|medium|...]
                set status [enable|disable]
            end
            config malformed
                Description: Enable/disable malformed HTTP request check.
                set action [allow|block]
                set log [enable|disable]
                set severity [high|medium|...]
                set status [enable|disable]
            end
            config max-cookie
                Description: Maximum number of cookies in HTTP request.
                set action [allow|block]
                set log [enable|disable]
                set max-cookie {integer}
                set severity [high|medium|...]
                set status [enable|disable]
            end
            config max-header-line
                Description: Maximum number of HTTP header line.
                set action [allow|block]
                set log [enable|disable]
                set max-header-line {integer}
                set severity [high|medium|...]
                set status [enable|disable]
            end
            config max-range-segment
                Description: Maximum number of range segments in HTTP range line.
                set action [allow|block]
                set log [enable|disable]
                set max-range-segment {integer}
                set severity [high|medium|...]
                set status [enable|disable]
            end
            config max-url-param
                Description: Maximum number of parameters in URL.
                set action [allow|block]
                set log [enable|disable]
                set max-url-param {integer}
                set severity [high|medium|...]
                set status [enable|disable]
            end
            config method
                Description: Enable/disable HTTP method check.
                set action [allow|block]
                set log [enable|disable]
                set severity [high|medium|...]
                set status [enable|disable]
            end
            config param-length
                Description: Maximum length of parameter in URL, HTTP POST request or HTTP body.
                set action [allow|block]
                set length {integer}
                set log [enable|disable]
                set severity [high|medium|...]
                set status [enable|disable]
            end
            config url-param-length
                Description: Maximum length of parameter in URL.
                set action [allow|block]
                set length {integer}
                set log [enable|disable]
                set severity [high|medium|...]
                set status [enable|disable]
            end
            config version
                Description: Enable/disable HTTP version check.
                set action [allow|block]
                set log [enable|disable]
                set severity [high|medium|...]
                set status [enable|disable]
            end
        end
        set extended-log [enable|disable]
        set external [disable|enable]
        set fabric-force-sync [enable|disable]
        set fabric-object [enable|disable]
        set fabric-object-source [member|local|...]
        config method
            Description: Method restriction.
            set default-allowed-methods {option1}, {option2}, ...
            set log [enable|disable]
            config method-policy
                Description: HTTP method policy.
                edit <id>
                    set address {string}
                    set allowed-methods {option1}, {option2}, ...
                    set pattern {string}
                    set regex [enable|disable]
                next
            end
            set severity [high|medium|...]
            set status [enable|disable]
        end
        config signature
            Description: WAF signatures.
            set credit-card-detection-threshold {integer}
            config custom-signature
                Description: Custom signature.
                edit <name>
                    set action [allow|block|...]
                    set case-sensitivity [disable|enable]
                    set direction [request|response]
                    set log [enable|disable]
                    set pattern {string}
                    set severity [high|medium|...]
                    set status [enable|disable]
                    set target {option1}, {option2}, ...
                next
            end
            set disabled-signature <id1>, <id2>, ...
            set disabled-sub-class <id1>, <id2>, ...
            config main-class
                Description: Main signature class. Read-only.
                edit <id>
                    set action [allow|block|...]
                    set log [enable|disable]
                    set severity [high|medium|...]
                    set status [enable|disable]
                next
            end
        end
        config url-access
            Description: URL access list.
            edit <id>
                config access-pattern
                    Description: URL access pattern.
                    edit <id>
                        set negate [enable|disable]
                        set pattern {string}
                        set regex [enable|disable]
                        set srcaddr {string}
                    next
                end
                set action [bypass|permit|...]
                set address {string}
                set log [enable|disable]
                set severity [high|medium|...]
            next
        end
        set uuid {uuid}
    next
end
```

## Parameters

+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| Parameter            | Description                       | Type               | Size               | Default                              |
+======================+===================================+====================+====================+======================================+
| comment              | Comment.                          | var-string         | Maximum length:    |                                      |
|                      |                                   |                    | 1023               |                                      |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| extended-log         | Enable/disable extended logging.  | option             | \-                 | disable                              |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                      | +-------------+--------------------------------------------------------+                                           |
|                      | | Option      | Description                                            |                                           |
|                      | +=============+========================================================+                                           |
|                      | | *enable*    | Enable setting.                                        |                                           |
|                      | +-------------+--------------------------------------------------------+                                           |
|                      | | *disable*   | Disable setting.                                       |                                           |
|                      | +-------------+--------------------------------------------------------+                                           |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| external             | Disable/Enable external HTTP      | option             | \-                 | disable                              |
|                      | Inspection.                       |                    |                    |                                      |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                      | +-------------+--------------------------------------------------------+                                           |
|                      | | Option      | Description                                            |                                           |
|                      | +=============+========================================================+                                           |
|                      | | *disable*   | Disable external inspection.                           |                                           |
|                      | +-------------+--------------------------------------------------------+                                           |
|                      | | *enable*    | Enable external inspection.                            |                                           |
|                      | +-------------+--------------------------------------------------------+                                           |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| fabric-force-sync \* | Enable/disable forced             | option             | \-                 | disable                              |
|                      | synchronization of configuration  |                    |                    |                                      |
|                      | objects from the root FortiGate   |                    |                    |                                      |
|                      | unit to the downstream devices.   |                    |                    |                                      |
|                      | Configuration conflict check is   |                    |                    |                                      |
|                      | skipped.                          |                    |                    |                                      |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                      | +-------------+--------------------------------------------------------+                                           |
|                      | | Option      | Description                                            |                                           |
|                      | +=============+========================================================+                                           |
|                      | | *enable*    | Enable forced synchronization of configuration objects |                                           |
|                      | |             | from the root FortiGate unit to the downstream         |                                           |
|                      | |             | devices.                                               |                                           |
|                      | +-------------+--------------------------------------------------------+                                           |
|                      | | *disable*   | Disable forced synchronization of configuration        |                                           |
|                      | |             | objects from the root FortiGate unit to the downstream |                                           |
|                      | |             | devices.                                               |                                           |
|                      | +-------------+--------------------------------------------------------+                                           |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| fabric-object \*     | Security Fabric global object     | option             | \-                 | disable                              |
|                      | setting.                          |                    |                    |                                      |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                      | +-------------+--------------------------------------------------------+                                           |
|                      | | Option      | Description                                            |                                           |
|                      | +=============+========================================================+                                           |
|                      | | *enable*    | Object is set as a security fabric-wide global object. |                                           |
|                      | +-------------+--------------------------------------------------------+                                           |
|                      | | *disable*   | Object is local to this security fabric member.        |                                           |
|                      | +-------------+--------------------------------------------------------+                                           |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| fabric-object-source | Source of truth for fabric        | option             | \-                 | root                                 |
| \*                   | object.                           |                    |                    |                                      |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
|                      | +-------------+--------------------------------------------------------+                                           |
|                      | | Option      | Description                                            |                                           |
|                      | +=============+========================================================+                                           |
|                      | | *member*    | Source of truth for this object is a non-root member   |                                           |
|                      | |             | of fabric.                                             |                                           |
|                      | +-------------+--------------------------------------------------------+                                           |
|                      | | *local*     | Source of truth for this object is this security       |                                           |
|                      | |             | fabric member.                                         |                                           |
|                      | +-------------+--------------------------------------------------------+                                           |
|                      | | *root*      | Source of truth for this object is the root of the     |                                           |
|                      | |             | fabric.                                                |                                           |
|                      | +-------------+--------------------------------------------------------+                                           |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| name                 | WAF Profile name.                 | string             | Maximum length: 47 |                                      |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+
| uuid \*              | Universally Unique Identifier     | uuid               | Not Specified      | 00000000-0000-0000-0000-000000000000 |
|                      | (UUID; automatically assigned but |                    |                    |                                      |
|                      | can be manually reset).           |                    |                    |                                      |
+----------------------+-----------------------------------+--------------------+--------------------+--------------------------------------+

