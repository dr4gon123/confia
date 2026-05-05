# config wireless-controller hotspot20 icon

Configure OSU provider icon.

## Syntax

```
config wireless-controller hotspot20 icon
    Description: Configure OSU provider icon.
    edit <name>
        config icon-list
            Description: Icon list.
            edit <name>
                set lang {string}
                set file {string}
                set type [bmp|gif|...]
                set width {integer}
                set height {integer}
            next
        end
    next
end
```

## Parameters

+-----------+-----------------------------------+--------+---------+---------+
| Parameter | Description                       | Type   | Size    | Default |
+===========+===================================+========+=========+=========+
| name      | Icon list ID.                     | string | Maximum |         |
|           |                                   |        | length: |         |
|           |                                   |        | 35      |         |
+-----------+-----------------------------------+--------+---------+---------+

