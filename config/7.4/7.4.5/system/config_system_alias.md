# config system alias

Configure alias command.

## Syntax

```
config system alias
    Description: Configure alias command.
    edit <name>
        set command {var-string}
    next
end
```

## Parameters

+-----------+-----------------------------------+------------+---------+---------+
| Parameter | Description                       | Type       | Size    | Default |
+===========+===================================+============+=========+=========+
| command   | Command list to execute.          | var-string | Maximum |         |
|           |                                   |            | length: |         |
|           |                                   |            | 255     |         |
+-----------+-----------------------------------+------------+---------+---------+
| name      | Alias command name.               | string     | Maximum |         |
|           |                                   |            | length: |         |
|           |                                   |            | 35      |         |
+-----------+-----------------------------------+------------+---------+---------+

