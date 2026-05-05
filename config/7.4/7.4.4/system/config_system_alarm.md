# config system alarm

Configure alarm.

## Syntax

```
config system alarm
    Description: Configure alarm.
    set audible [enable|disable]
    config groups
        Description: Alarm groups.
        edit <id>
            set period {integer}
            set admin-auth-failure-threshold {integer}
            set admin-auth-lockout-threshold {integer}
            set user-auth-failure-threshold {integer}
            set user-auth-lockout-threshold {integer}
            set replay-attempt-threshold {integer}
            set self-test-failure-threshold {integer}
            set log-full-warning-threshold {integer}
            set encryption-failure-threshold {integer}
            set decryption-failure-threshold {integer}
            config fw-policy-violations
                Description: Firewall policy violations.
                edit <id>
                    set threshold {integer}
                    set src-ip {ipv4-address}
                    set dst-ip {ipv4-address}
                    set src-port {integer}
                    set dst-port {integer}
                next
            end
            set fw-policy-id {integer}
            set fw-policy-id-threshold {integer}
        next
    end
    set status [enable|disable]
end
```

## Parameters

+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter | Description                       | Type               | Size               | Default            |
+===========+===================================+====================+====================+====================+
| audible   | Enable/disable audible alarm.     | option             | \-                 | disable            |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
|           | +-------------+--------------------------------------------------------+                         |
|           | | Option      | Description                                            |                         |
|           | +=============+========================================================+                         |
|           | | *enable*    | Enable audible alarm.                                  |                         |
|           | +-------------+--------------------------------------------------------+                         |
|           | | *disable*   | Disable audible alarm.                                 |                         |
|           | +-------------+--------------------------------------------------------+                         |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| status    | Enable/disable alarm.             | option             | \-                 | disable            |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
|           | +-------------+--------------------------------------------------------+                         |
|           | | Option      | Description                                            |                         |
|           | +=============+========================================================+                         |
|           | | *enable*    | Enable alarm.                                          |                         |
|           | +-------------+--------------------------------------------------------+                         |
|           | | *disable*   | Disable alarm.                                         |                         |
|           | +-------------+--------------------------------------------------------+                         |
+-----------+--------------------------------------------------------------------------------------------------+

