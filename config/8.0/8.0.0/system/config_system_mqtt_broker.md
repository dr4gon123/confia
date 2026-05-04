# config system mqtt-broker

Configure Message Queuing Telemetry Transport (MQTT) broker for this FortiGate unit.

## Syntax

```
config system mqtt-broker
    Description: Configure Message Queuing Telemetry Transport (MQTT) broker for this FortiGate unit.
    set anonymous-publish [enable|disable]
    set anonymous-subscribe [enable|disable]
    set authentication [global|client|...]
    set max-clients {integer}
    set max-keepalive {integer}
    set max-queued-messages {integer}
    set password {password}
    set status [enable|disable]
    set tls-authentication [enable|disable]
    set tls-ca {string}
    set tls-certificate {string}
    config topic-list
        Description: Configure topic.
        edit <id>
            set topic {string}
        next
    end
    set username {string}
end
```

## Parameters

+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter           | Description                       | Type               | Size               | Default            |
+=====================+===================================+====================+====================+====================+
| anonymous-publish   | Allow anonymous publishing        | option             | \-                 | disable            |
|                     | (applicable only when             |                    |                    |                    |
|                     | authentication is disabled).      |                    |                    |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                     | +-------------+--------------------------------------------------------+                         |
|                     | | Option      | Description                                            |                         |
|                     | +=============+========================================================+                         |
|                     | | *enable*    | Enable MQTT broker.                                    |                         |
|                     | +-------------+--------------------------------------------------------+                         |
|                     | | *disable*   | Disable MQTT broker.                                   |                         |
|                     | +-------------+--------------------------------------------------------+                         |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| anonymous-subscribe | Allow anonymous subscription      | option             | \-                 | disable            |
|                     | (applicable only when             |                    |                    |                    |
|                     | authentication is disabled).      |                    |                    |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                     | +-------------+--------------------------------------------------------+                         |
|                     | | Option      | Description                                            |                         |
|                     | +=============+========================================================+                         |
|                     | | *enable*    | Enable MQTT broker.                                    |                         |
|                     | +-------------+--------------------------------------------------------+                         |
|                     | | *disable*   | Disable MQTT broker.                                   |                         |
|                     | +-------------+--------------------------------------------------------+                         |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| authentication      | Enable/disable authentication     | option             | \-                 | disable            |
|                     | (default = disabled).             |                    |                    |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                     | +-------------+--------------------------------------------------------+                         |
|                     | | Option      | Description                                            |                         |
|                     | +=============+========================================================+                         |
|                     | | *global*    | Global authentication.                                 |                         |
|                     | +-------------+--------------------------------------------------------+                         |
|                     | | *client*    | Client authentication.                                 |                         |
|                     | +-------------+--------------------------------------------------------+                         |
|                     | | *disable*   | No authentication.                                     |                         |
|                     | +-------------+--------------------------------------------------------+                         |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| max-clients         | Configure the maximum number of   | integer            | Minimum value: 1   | 1000               |
|                     | concurrent clients (1 - 10000,    |                    | Maximum value:     |                    |
|                     | default = 1000).                  |                    | 10000              |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| max-keepalive       | Maximum allowed keepalive time in | integer            | Minimum value: 30  | 3600               |
|                     | seconds (30 - 65535, default =    |                    | Maximum value:     |                    |
|                     | 3600). Clients specifying a       |                    | 65535              |                    |
|                     | keepalive value exceeding this    |                    |                    |                    |
|                     | limit will be disconnected.       |                    |                    |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| max-queued-messages | Configure the maximum queued      | integer            | Minimum value: 0   | 1000               |
|                     | message count (0 - 65535, default |                    | Maximum value:     |                    |
|                     | = 1000). Configure zero for no    |                    | 65535              |                    |
|                     | maximum.                          |                    |                    |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| password            | Password to use when global       | password           | Not Specified      |                    |
|                     | authentication is enabled.        |                    |                    |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| status              | Enable/disable MQTT broker        | option             | \-                 | disable            |
|                     | (default = disabled).             |                    |                    |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                     | +-------------+--------------------------------------------------------+                         |
|                     | | Option      | Description                                            |                         |
|                     | +=============+========================================================+                         |
|                     | | *enable*    | Enable MQTT broker.                                    |                         |
|                     | +-------------+--------------------------------------------------------+                         |
|                     | | *disable*   | Disable MQTT broker.                                   |                         |
|                     | +-------------+--------------------------------------------------------+                         |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| tls-authentication  | Enable/disable TLS authentication | option             | \-                 | disable            |
|                     | (default = disabled).             |                    |                    |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                     | +-------------+--------------------------------------------------------+                         |
|                     | | Option      | Description                                            |                         |
|                     | +=============+========================================================+                         |
|                     | | *enable*    | Enable MQTT broker.                                    |                         |
|                     | +-------------+--------------------------------------------------------+                         |
|                     | | *disable*   | Disable MQTT broker.                                   |                         |
|                     | +-------------+--------------------------------------------------------+                         |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| tls-ca              | TLS CA certificate for verifying  | string             | Maximum length: 79 |                    |
|                     | clients.                          |                    |                    |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| tls-certificate     | TLS certificate for MQTT broker   | string             | Maximum length: 35 |                    |
|                     | server.                           |                    |                    |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| username            | Username to use when global       | string             | Maximum length: 63 |                    |
|                     | authentication is enabled.        |                    |                    |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+

