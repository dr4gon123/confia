# config firewall internet-service-group

Configure group of Internet Service.

## Syntax

```
config firewall internet-service-group
    Description: Configure group of Internet Service.
    edit <name>
        set comment {var-string}
        set direction [source|destination|...]
        set member <name1>, <name2>, ...
    next
end
```

## Parameters

+-----------+-----------------------------------+----------------------+----------------------+----------------------+
| Parameter | Description                       | Type                 | Size                 | Default              |
+===========+===================================+======================+======================+======================+
| comment   | Comment.                          | var-string           | Maximum length: 255  |                      |
+-----------+-----------------------------------+----------------------+----------------------+----------------------+
| direction | How this service may be used      | option               | \-                   | both                 |
|           | (source, destination or both).    |                      |                      |                      |
+-----------+-----------------------------------+----------------------+----------------------+----------------------+
|           | +---------------+--------------------------------------------------------+                             |
|           | | Option        | Description                                            |                             |
|           | +===============+========================================================+                             |
|           | | *source*      | As source when applied.                                |                             |
|           | +---------------+--------------------------------------------------------+                             |
|           | | *destination* | As destination when applied.                           |                             |
|           | +---------------+--------------------------------------------------------+                             |
|           | | *both*        | Both directions when applied.                          |                             |
|           | +---------------+--------------------------------------------------------+                             |
+-----------+-----------------------------------+----------------------+----------------------+----------------------+
| member    | Internet Service group member.    | string               | Maximum length: 79   |                      |
| `<name>`  |                                   |                      |                      |                      |
|           | Internet Service name.            |                      |                      |                      |
+-----------+-----------------------------------+----------------------+----------------------+----------------------+
| name      | Internet Service group name.      | string               | Maximum length: 63   |                      |
+-----------+-----------------------------------+----------------------+----------------------+----------------------+

