# config system mqtt-client

Configure MQTT client.

## Syntax

```
config system mqtt-client
    Description: Configure MQTT client.
    edit <id>
        set password {password}
        set publish-topics {integer}
        set subscribe-topics {integer}
        set tls-required [enable|disable]
        set username {string}
    next
end
```

## Parameters

+------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter        | Description                       | Type               | Size               | Default            |
+==================+===================================+====================+====================+====================+
| id               | Unique integer ID of the entry.   | integer            | Minimum value: 0   | 0                  |
|                  |                                   |                    | Maximum value:     |                    |
|                  |                                   |                    | 4294967295         |                    |
+------------------+-----------------------------------+--------------------+--------------------+--------------------+
| password         | Client password.                  | password           | Not Specified      |                    |
+------------------+-----------------------------------+--------------------+--------------------+--------------------+
| publish-topics   | Configure allowed publish topics. | integer            | Minimum value: 0   |                    |
|                  |                                   |                    | Maximum value:     |                    |
|                  |                                   |                    | 4294967295         |                    |
+------------------+-----------------------------------+--------------------+--------------------+--------------------+
| subscribe-topics | Configure allowed subscription    | integer            | Minimum value: 0   |                    |
|                  | topics.                           |                    | Maximum value:     |                    |
|                  |                                   |                    | 4294967295         |                    |
+------------------+-----------------------------------+--------------------+--------------------+--------------------+
| tls-required     | Require TLS authentication        | option             | \-                 | disable            |
|                  | (default = disabled).             |                    |                    |                    |
+------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                  | +-------------+--------------------------------------------------------+                         |
|                  | | Option      | Description                                            |                         |
|                  | +=============+========================================================+                         |
|                  | | *enable*    | TLS is required for this client.                       |                         |
|                  | +-------------+--------------------------------------------------------+                         |
|                  | | *disable*   | TLS is not required for this client.                   |                         |
|                  | +-------------+--------------------------------------------------------+                         |
+------------------+-----------------------------------+--------------------+--------------------+--------------------+
| username         | Client username.                  | string             | Maximum length: 63 |                    |
+------------------+-----------------------------------+--------------------+--------------------+--------------------+

