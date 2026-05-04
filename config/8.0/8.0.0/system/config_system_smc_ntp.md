# config system smc-ntp

Configure SMC NTP information.

## Syntax

```
config system smc-ntp
    Description: Configure SMC NTP information.
    set channel {integer}
    config ntpserver
        Description: Configure the FortiGate SMC to connect to an NTP server.
        edit <id>
            set server {ipv4-address}
        next
    end
    set ntpsync [enable|disable]
    set syncinterval {integer}
end
```

## Parameters

+--------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter    | Description                       | Type               | Size               | Default            |
+==============+===================================+====================+====================+====================+
| channel      | SMC NTP client will send NTP      | integer            | Minimum value: 1   | 5                  |
|              | packets through this channel.     |                    | Maximum value:     |                    |
|              |                                   |                    | 65535              |                    |
+--------------+-----------------------------------+--------------------+--------------------+--------------------+
| ntpsync      | Enable/disable setting the        | option             | \-                 | disable            |
|              | FortiGate SMC system time by      |                    |                    |                    |
|              | synchronizing with an NTP server. |                    |                    |                    |
+--------------+-----------------------------------+--------------------+--------------------+--------------------+
|              | +-------------+--------------------------------------------------------+                         |
|              | | Option      | Description                                            |                         |
|              | +=============+========================================================+                         |
|              | | *enable*    | Enable synchronization with NTP server in SMC.         |                         |
|              | +-------------+--------------------------------------------------------+                         |
|              | | *disable*   | Disable synchronization with NTP server in SMC.        |                         |
|              | +-------------+--------------------------------------------------------+                         |
+--------------+-----------------------------------+--------------------+--------------------+--------------------+
| syncinterval | SMC NTP synchronization interval  | integer            | Minimum value: 1   | 60                 |
|              | (1 - 65535 secs).                 |                    | Maximum value:     |                    |
|              |                                   |                    | 65535              |                    |
+--------------+-----------------------------------+--------------------+--------------------+--------------------+

