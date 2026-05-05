# config firewall traffic-class

Configure names for shaping classes.

## Syntax

```
config firewall traffic-class
    Description: Configure names for shaping classes.
    edit <class-id>
        set class-name {string}
    next
end
```

## Parameters

+------------+-----------------------------------+---------+---------+---------+
| Parameter  | Description                       | Type    | Size    | Default |
+============+===================================+=========+=========+=========+
| class-id   | Class ID to be named.             | integer | Minimum | 0       |
|            |                                   |         | value:  |         |
|            |                                   |         | 2       |         |
|            |                                   |         | Maximum |         |
|            |                                   |         | value:  |         |
|            |                                   |         | 31      |         |
+------------+-----------------------------------+---------+---------+---------+
| class-name | Define the name for this          | string  | Maximum |         |
|            | class-id.                         |         | length: |         |
|            |                                   |         | 35      |         |
+------------+-----------------------------------+---------+---------+---------+

