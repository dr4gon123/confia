# config system sms-server

Configure SMS server for sending SMS messages to support user authentication.

## Syntax

```
config system sms-server
    Description: Configure SMS server for sending SMS messages to support user authentication.
    edit <name>
        set mail-server {string}
    next
end
```

## Parameters

+-------------+-----------------------------------+--------+---------+---------+
| Parameter   | Description                       | Type   | Size    | Default |
+=============+===================================+========+=========+=========+
| mail-server | Email-to-SMS server domain name.  | string | Maximum |         |
|             |                                   |        | length: |         |
|             |                                   |        | 63      |         |
+-------------+-----------------------------------+--------+---------+---------+
| name        | Name of SMS server.               | string | Maximum |         |
|             |                                   |        | length: |         |
|             |                                   |        | 35      |         |
+-------------+-----------------------------------+--------+---------+---------+

