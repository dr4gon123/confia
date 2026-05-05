# config waf profile

Configure Web application firewall configuration.

## Syntax

```
config waf profile
    Description: Configure Web application firewall configuration.
    edit <name>
        config address-list
            Description: Address block and allow lists.
            set status [enable|disable]
            set blocked-log [enable|disable]
            set severity [high|medium|...]
            set trusted-address <name1>, <name2>, ...
            set blocked-address <name1>, <name2>, ...
        end
        set comment {var-string}
        config constraint
            Description: WAF HTTP protocol restrictions.
            config header-length
                Description: HTTP header length in request.
                set status [enable|disable]
                set length {integer}
                set action [allow|block]
                set log [enable|disable]
                set severity [high|medium|...]
            end
            config content-length
                Description: HTTP content length in request.
                set status [enable|disable]
                set length {integer}
                set action [allow|block]
                set log [enable|disable]
                set severity [high|medium|...]
            end
            config param-length
                Description: Maximum length of parameter in URL, HTTP POST request or HTTP body.
                set status [enable|disable]
                set length {integer}
                set action [allow|block]
                set log [enable|disable]
                set severity [high|medium|...]
            end
            config line-length
                Description: HTTP line length in request.
                set status [enable|disable]
                set length {integer}
                set action [allow|block]
                set log [enable|disable]
                set severity [high|medium|...]
            end
            config url-param-length
                Description: Maximum length of parameter in URL.
                set status [enable|disable]
                set length {integer}
                set action [allow|block]
                set log [enable|disable]
                set severity [high|medium|...]
            end
            config version
                Description: Enable/disable HTTP version check.
                set status [enable|disable]
                set action [allow|block]
                set log [enable|disable]
                set severity [high|medium|...]
            end
            config method
                Description: Enable/disable HTTP method check.
                set status [enable|disable]
                set action [allow|block]
                set log [enable|disable]
                set severity [high|medium|...]
            end
            config hostname
                Description: Enable/disable hostname check.
                set status [enable|disable]
                set action [allow|block]
                set log [enable|disable]
                set severity [high|medium|...]
            end
            config malformed
                Description: Enable/disable malformed HTTP request check.
                set status [enable|disable]
                set action [allow|block]
                set log [enable|disable]
                set severity [high|medium|...]
            end
            config max-cookie
                Description: Maximum number of cookies in HTTP request.
                set status [enable|disable]
                set max-cookie {integer}
                set action [allow|block]
                set log [enable|disable]
                set severity [high|medium|...]
            end
            config max-header-line
                Description: Maximum number of HTTP header line.
                set status [enable|disable]
                set max-header-line {integer}
                set action [allow|block]
                set log [enable|disable]
                set severity [high|medium|...]
            end
            config max-url-param
                Description: Maximum number of parameters in URL.
                set status [enable|disable]
                set max-url-param {integer}
                set action [allow|block]
                set log [enable|disable]
                set severity [high|medium|...]
            end
            config max-range-segment
                Description: Maximum number of range segments in HTTP range line.
                set status [enable|disable]
                set max-range-segment {integer}
                set action [allow|block]
                set log [enable|disable]
                set severity [high|medium|...]
            end
            config exception
                Description: HTTP constraint exception.
                edit <id>
                    set pattern {string}
                    set regex [enable|disable]
                    set address {string}
                    set header-length [enable|disable]
                    set content-length [enable|disable]
                    set param-length [enable|disable]
                    set line-length [enable|disable]
                    set url-param-length [enable|disable]
                    set version [enable|disable]
                    set method [enable|disable]
                    set hostname [enable|disable]
                    set malformed [enable|disable]
                    set max-cookie [enable|disable]
                    set max-header-line [enable|disable]
                    set max-url-param [enable|disable]
                    set max-range-segment [enable|disable]
                next
            end
        end
        set extended-log [enable|disable]
        set external [disable|enable]
        config method
            Description: Method restriction.
            set status [enable|disable]
            set log [enable|disable]
            set severity [high|medium|...]
            set default-allowed-methods {option1}, {option2}, ...
            config method-policy
                Description: HTTP method policy.
                edit <id>
                    set pattern {string}
                    set regex [enable|disable]
                    set address {string}
                    set allowed-methods {option1}, {option2}, ...
                next
            end
        end
        config signature
            Description: WAF signatures.
            config main-class
                Description: Main signature class.
                edit <id>
                    set status [enable|disable]
                    set action [allow|block|...]
                    set log [enable|disable]
                    set severity [high|medium|...]
                next
            end
            set disabled-sub-class <id1>, <id2>, ...
            set disabled-signature <id1>, <id2>, ...
            set credit-card-detection-threshold {integer}
            config custom-signature
                Description: Custom signature.
                edit <name>
                    set status [enable|disable]
                    set action [allow|block|...]
                    set log [enable|disable]
                    set severity [high|medium|...]
                    set direction [request|response]
                    set case-sensitivity [disable|enable]
                    set pattern {string}
                    set target {option1}, {option2}, ...
                next
            end
        end
        config url-access
            Description: URL access list.
            edit <id>
                set address {string}
                set action [bypass|permit|...]
                set log [enable|disable]
                set severity [high|medium|...]
                config access-pattern
                    Description: URL access pattern.
                    edit <id>
                        set srcaddr {string}
                        set pattern {string}
                        set regex [enable|disable]
                        set negate [enable|disable]
                    next
                end
            next
        end
    next
end
```

## Parameters

+--------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter    | Description                       | Type               | Size               | Default            |
+==============+===================================+====================+====================+====================+
| comment      | Comment.                          | var-string         | Maximum length:    |                    |
|              |                                   |                    | 1023               |                    |
+--------------+-----------------------------------+--------------------+--------------------+--------------------+
| extended-log | Enable/disable extended logging.  | option             | \-                 | disable            |
+--------------+-----------------------------------+--------------------+--------------------+--------------------+
|              | +-------------+--------------------------------------------------------+                         |
|              | | Option      | Description                                            |                         |
|              | +=============+========================================================+                         |
|              | | *enable*    | Enable setting.                                        |                         |
|              | +-------------+--------------------------------------------------------+                         |
|              | | *disable*   | Disable setting.                                       |                         |
|              | +-------------+--------------------------------------------------------+                         |
+--------------+-----------------------------------+--------------------+--------------------+--------------------+
| external     | Disable/Enable external HTTP      | option             | \-                 | disable            |
|              | Inspection.                       |                    |                    |                    |
+--------------+-----------------------------------+--------------------+--------------------+--------------------+
|              | +-------------+--------------------------------------------------------+                         |
|              | | Option      | Description                                            |                         |
|              | +=============+========================================================+                         |
|              | | *disable*   | Disable external inspection.                           |                         |
|              | +-------------+--------------------------------------------------------+                         |
|              | | *enable*    | Enable external inspection.                            |                         |
|              | +-------------+--------------------------------------------------------+                         |
+--------------+-----------------------------------+--------------------+--------------------+--------------------+
| name         | WAF Profile name.                 | string             | Maximum length: 35 |                    |
+--------------+-----------------------------------+--------------------+--------------------+--------------------+

