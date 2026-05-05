# config firewall ssl setting

SSL proxy settings.

## Syntax

```
config firewall ssl setting
    Description: SSL proxy settings.
    set abbreviate-handshake [enable|disable]
    set cert-cache-capacity {integer}
    set cert-cache-timeout {integer}
    set kxp-queue-threshold {integer}
    set no-matching-cipher-action [bypass|drop]
    set proxy-connect-timeout {integer}
    set session-cache-capacity {integer}
    set session-cache-timeout {integer}
    set ssl-dh-bits [768|1024|...]
    set ssl-queue-threshold {integer}
    set ssl-send-empty-frags [enable|disable]
end
```

## Parameters

+---------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter                 | Description                       | Type               | Size               | Default            |
+===========================+===================================+====================+====================+====================+
| abbreviate-handshake      | Enable/disable use of SSL         | option             | \-                 | enable             |
|                           | abbreviated handshake.            |                    |                    |                    |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                           | +-------------+--------------------------------------------------------+                         |
|                           | | Option      | Description                                            |                         |
|                           | +=============+========================================================+                         |
|                           | | *enable*    | Enable use of SSL abbreviated handshake.               |                         |
|                           | +-------------+--------------------------------------------------------+                         |
|                           | | *disable*   | Disable use of SSL abbreviated handshake.              |                         |
|                           | +-------------+--------------------------------------------------------+                         |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| cert-cache-capacity       | Maximum capacity of the host      | integer            | Minimum value: 0   | 200                |
|                           | certificate cache.                |                    | Maximum value: 500 |                    |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| cert-cache-timeout        | Time limit to keep certificate    | integer            | Minimum value: 1   | 10                 |
|                           | cache.                            |                    | Maximum value: 120 |                    |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| kxp-queue-threshold \*    | Maximum length of the CP KXP      | integer            | Minimum value: 0   | 16                 |
|                           | queue. When the queue becomes     |                    | Maximum value: 512 |                    |
|                           | full, the proxy switches cipher   |                    |                    |                    |
|                           | functions to the main CPU.        |                    |                    |                    |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| no-matching-cipher-action | Bypass or drop the connection     | option             | \-                 | bypass             |
|                           | when no matching cipher is found. |                    |                    |                    |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                           | +-------------+--------------------------------------------------------+                         |
|                           | | Option      | Description                                            |                         |
|                           | +=============+========================================================+                         |
|                           | | *bypass*    | Bypass connection.                                     |                         |
|                           | +-------------+--------------------------------------------------------+                         |
|                           | | *drop*      | Drop connection.                                       |                         |
|                           | +-------------+--------------------------------------------------------+                         |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| proxy-connect-timeout     | Time limit to make an internal    | integer            | Minimum value: 1   | 30                 |
|                           | connection to the appropriate     |                    | Maximum value: 60  |                    |
|                           | proxy process.                    |                    |                    |                    |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| session-cache-capacity    | Capacity of the SSL session       | integer            | Minimum value: 0   | 500                |
|                           | cache.                            |                    | Maximum value:     |                    |
|                           |                                   |                    | 1000               |                    |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| session-cache-timeout     | Time limit to keep SSL session    | integer            | Minimum value: 1   | 20                 |
|                           | state.                            |                    | Maximum value: 60  |                    |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ssl-dh-bits               | Bit-size of Diffie-Hellman.       | option             | \-                 | 2048               |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                           | +-------------+--------------------------------------------------------+                         |
|                           | | Option      | Description                                            |                         |
|                           | +=============+========================================================+                         |
|                           | | *768*       | 768-bit Diffie-Hellman prime.                          |                         |
|                           | +-------------+--------------------------------------------------------+                         |
|                           | | *1024*      | 1024-bit Diffie-Hellman prime.                         |                         |
|                           | +-------------+--------------------------------------------------------+                         |
|                           | | *1536*      | 1536-bit Diffie-Hellman prime.                         |                         |
|                           | +-------------+--------------------------------------------------------+                         |
|                           | | *2048*      | 2048-bit Diffie-Hellman prime.                         |                         |
|                           | +-------------+--------------------------------------------------------+                         |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ssl-queue-threshold \*    | Maximum length of the CP SSL      | integer            | Minimum value: 0   | 32                 |
|                           | queue. When the queue becomes     |                    | Maximum value: 512 |                    |
|                           | full, the proxy switches cipher   |                    |                    |                    |
|                           | functions to the main CPU.        |                    |                    |                    |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ssl-send-empty-frags      | Enable/disable sending empty      | option             | \-                 | enable             |
|                           | fragments to avoid attack on CBC  |                    |                    |                    |
|                           | IV (for SSL 3.0 and TLS 1.0       |                    |                    |                    |
|                           | only).                            |                    |                    |                    |
+---------------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                           | +-------------+--------------------------------------------------------+                         |
|                           | | Option      | Description                                            |                         |
|                           | +=============+========================================================+                         |
|                           | | *enable*    | Send empty fragments.                                  |                         |
|                           | +-------------+--------------------------------------------------------+                         |
|                           | | *disable*   | Do not send empty fragments.                           |                         |
|                           | +-------------+--------------------------------------------------------+                         |
+---------------------------+--------------------------------------------------------------------------------------------------+

