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
                set file {string}
                set height {integer}
                set lang {string}
                set type [bmp|gif|...]
                set width {integer}
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

