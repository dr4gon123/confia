# config system session-ttl

Configure global session TTL timers for this FortiGate.

## Syntax

```
config system session-ttl
    Description: Configure global session TTL timers for this FortiGate.
    set default {user}
    config port
        Description: Session TTL port.
        edit <id>
            set protocol {integer}
            set start-port {integer}
            set end-port {integer}
            set timeout {user}
        next
    end
end
```

## Parameters

+-----------+-----------------------------------+--------+-----------+---------+
| Parameter | Description                       | Type   | Size      | Default |
+===========+===================================+========+===========+=========+
| default   | Default timeout.                  | user   | Not       |         |
|           |                                   |        | Specified |         |
+-----------+-----------------------------------+--------+-----------+---------+

